# KulmanLab

**[kulmanlab.com](https://kulmanlab.com)** — Browser-based CAD for 2D drawing and DXF workflows.

---

## What is KulmanLab?

The application runs entirely client-side, meaning your drawings never leave your machine. Perfect for hobbyists and professionals alike who need a capable CAD tool in the browser.

## Features

- Print to PDF directly from the browser
- Dimension tools for annotating drawings with measurements
- Layer management with visibility and lock controls
- Zoom, pan, and fit-to-view navigation
- Keyboard shortcuts for common drawing commands
- Snap indicators with visual feedback
- Works entirely in the browser — no backend, no account required

## Getting Started

Open [kulmanlab.com](https://kulmanlab.com) in any modern browser and start drawing immediately.

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `P` | Polyline tool |
| `C` | Circle tool |
| `R` | Rectangle tool |
| `E` | Erase / delete |
| `F8` | Toggle orthographic mode |
| `Space` | Repeat last command |
| `Ctrl+Z` | Undo |
| `F3` | Toggle object snap |
| `Ctrl+S` | Save / export DXF |

## Tech Stack

- **Angular Material** — UI component library
- **Canvas API** — 2D rendering engine
- **IndexedDB** — local drawing persistence
- **DXF parser/writer** — custom DXF import/export

## Development

```bash
npm install
npm start        # dev server at http://localhost:4200
npm run build    # production build
```

## License

MIT
