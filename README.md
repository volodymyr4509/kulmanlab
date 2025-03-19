# KulmanLab

**[kulmanlab.com](https://kulmanlab.com)** — Browser-based CAD for 2D drawing and DXF workflows.

---

## What is KulmanLab?

The tool is free to use and requires no login or subscription. The application runs entirely client-side, meaning your drawings never leave your machine.

## Features

- Keyboard shortcuts for common drawing commands
- Area and perimeter measurement tools
- Dimension tools for annotating drawings with measurements
- Undo/redo history with up to 100 steps
- Offset tool for creating parallel geometry
- Auto-save to browser local storage
- Copy, move, rotate, and mirror operations

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

- **RxJS** — reactive state management
- **Web Workers** — off-thread geometry computation
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
