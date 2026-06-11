// Docusaurus postBuild plugin — injects HowTo JSON-LD into each command page.
// Runs after the static site is built; reads the source .md files to extract
// numbered steps, then writes the schema directly into the built HTML <head>.

const fs = require('fs');
const path = require('path');

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, body: content };
  const data = {};
  for (const line of match[1].split('\n')) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const val = line.slice(colon + 1).trim().replace(/^['"]|['"]$/g, '');
    if (key) data[key] = val;
  }
  return { data, body: match[2] };
}

function extractSteps(body) {
  const steps = [];
  let capturing = false;

  for (const line of body.split('\n')) {
    const m = line.match(/^\d+\.\s+(.+)/);
    if (m) {
      capturing = true;
      const text = m[1]
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .trim();
      if (text) steps.push(text);
    } else if (capturing) {
      // stop at the first blank line after the list has ended
      if (line.trim() === '' && steps.length > 0) break;
    }
  }

  return steps;
}

module.exports = function howtoSchemaPlugin() {
  return {
    name: 'howto-schema-plugin',
    async postBuild({ outDir }) {
      const commandsDir = path.join(__dirname, '../docs/commands');
      const files = fs.readdirSync(commandsDir).filter(f => f.endsWith('.md'));
      let count = 0;

      for (const file of files) {
        try {
          const mdContent = fs.readFileSync(path.join(commandsDir, file), 'utf8');
          const { data: fm, body } = parseFrontmatter(mdContent);

          const steps = extractSteps(body);
          if (steps.length < 2) continue;

          const schema = {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: fm.title || '',
            description: fm.description || '',
            step: steps.map((text, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              text,
            })),
          };

          const slug = file.replace('.md', '');
          const candidates = [
            path.join(outDir, 'commands', slug, 'index.html'),
            path.join(outDir, 'commands', `${slug}.html`),
          ];
          const htmlPath = candidates.find(p => fs.existsSync(p));
          if (!htmlPath) continue;

          const scriptTag = `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
          const html = fs.readFileSync(htmlPath, 'utf8').replace('</head>', `${scriptTag}</head>`);
          fs.writeFileSync(htmlPath, html);
          count++;
        } catch (e) {
          console.warn(`[howto-schema] failed for ${file}:`, e.message);
        }
      }

      console.log(`[howto-schema] injected HowTo schema into ${count} command pages`);
    },
  };
};
