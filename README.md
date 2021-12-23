# KulmanLab

**[kulmanlab.com](https://kulmanlab.com)** — Browser-based CAD for 2D drawing and DXF workflows.

---

## What is KulmanLab?

It integrates well into maker and fabrication workflows that rely on DXF file exchange. KulmanLab is a lightweight, web-based CAD application for creating and editing 2D technical drawings directly in your browser — no installation required.

## Features

- Snap-to-grid and object snapping for precise placement
- Import and export DXF files (AutoCAD compatible)
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
| `C` | Circle tool |
| `R` | Rectangle tool |
| `E` | Erase / delete |
| `F8` | Toggle orthographic mode |
| `Esc` | Cancel current command |
| `Ctrl+Z` | Undo |
| `Ctrl+Y` | Redo |
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
