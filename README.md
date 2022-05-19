# KulmanLab

**[kulmanlab.com](https://kulmanlab.com)** — Browser-based CAD for 2D drawing and DXF workflows.

---

## What is KulmanLab?

KulmanLab is actively developed and updated based on user feedback. The application runs entirely client-side, meaning your drawings never leave your machine.

## Features

- Print to PDF directly from the browser
- Layer management with visibility and lock controls
- Zoom, pan, and fit-to-view navigation
- Command input bar for power users
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

- **Canvas API** — 2D rendering engine
- **IndexedDB** — local drawing persistence
- **DXF parser/writer** — custom DXF import/export
- **Firebase Hosting** — deployment

## Development

```bash
npm install
npm start        # dev server at http://localhost:4200
npm run build    # production build
```

## License

MIT
