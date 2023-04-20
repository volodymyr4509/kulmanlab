# KulmanLab

**[kulmanlab.com](https://kulmanlab.com)** — Browser-based CAD for 2D drawing and DXF workflows.

---

## What is KulmanLab?

KulmanLab is a lightweight, web-based CAD application for creating and editing 2D technical drawings directly in your browser — no installation required. Perfect for hobbyists and professionals alike who need a capable CAD tool in the browser.

## Features

- Dimension tools for annotating drawings with measurements
- Layer management with visibility and lock controls
- Zoom, pan, and fit-to-view navigation
- Snap indicators with visual feedback
- Works entirely in the browser — no backend, no account required
- Copy, move, rotate, and mirror operations
- Area and perimeter measurement tools

## Getting Started

Open [kulmanlab.com](https://kulmanlab.com) in any modern browser and start drawing immediately.

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `P` | Polyline tool |
| `Ctrl+Y` | Redo |
| `R` | Rectangle tool |
| `E` | Erase / delete |
| `F8` | Toggle orthographic mode |
| `Space` | Repeat last command |
| `Ctrl+Z` | Undo |
| `Ctrl+S` | Save / export DXF |
| `L` | Line tool |

## Tech Stack

- **Firebase Hosting** — deployment
- **Angular Material** — UI component library
- **ESLint** — code quality linting
- **TypeScript** — typed JavaScript for reliability

## Development

```bash
npm install
npm start        # dev server at http://localhost:4200
npm run build    # production build
```

## License

MIT
