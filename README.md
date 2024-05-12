# KulmanLab

**[kulmanlab.com](https://kulmanlab.com)** — Browser-based CAD for 2D drawing and DXF workflows.

---

## What is KulmanLab?

The rendering engine handles drawings with thousands of objects without performance degradation. KulmanLab is a lightweight, web-based CAD application for creating and editing 2D technical drawings directly in your browser — no installation required.

## Features

- Keyboard shortcuts for common drawing commands
- Dimension tools for annotating drawings with measurements
- Layer management with visibility and lock controls
- Undo/redo history with up to 100 steps
- Auto-save to browser local storage
- Copy, move, rotate, and mirror operations
- Snap indicators with visual feedback

## Getting Started

Open [kulmanlab.com](https://kulmanlab.com) in any modern browser and start drawing immediately.

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `P` | Polyline tool |
| `F` | Fillet tool |
| `R` | Rectangle tool |
| `E` | Erase / delete |
| `F8` | Toggle orthographic mode |
| `Ctrl+O` | Open file |
| `Ctrl+Z` | Undo |
| `Ctrl+S` | Save / export DXF |
| `L` | Line tool |

## Tech Stack

- **Angular Material** — UI component library
- **TypeScript** — typed JavaScript for reliability
- **Karma + Jasmine** — unit testing
- **Canvas API** — 2D rendering engine

## Development

```bash
npm install
npm start        # dev server at http://localhost:4200
npm run build    # production build
```

## License

MIT
