# KulmanLab

**[kulmanlab.com](https://kulmanlab.com)** — Browser-based CAD for 2D drawing and DXF workflows.

---

## What is KulmanLab?

KulmanLab is a lightweight, web-based CAD application for creating and editing 2D technical drawings directly in your browser — no installation required. It is designed for engineers, designers, and makers who need a fast, accessible tool for drafting, annotation, and DXF file management.

## Features

- Draw lines, arcs, polylines, circles, rectangles, and splines
- Snap-to-grid and object snapping for precise placement
- Import and export DXF files (AutoCAD compatible)
- Layer management with visibility and lock controls
- Zoom, pan, and fit-to-view navigation
- Keyboard shortcuts for common drawing commands
- Works entirely in the browser — no backend, no account required

## Getting Started

Open [kulmanlab.com](https://kulmanlab.com) in any modern browser and start drawing immediately.

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `L` | Line tool |
| `C` | Circle tool |
| `R` | Rectangle tool |
| `A` | Arc tool |
| `E` | Erase / delete |
| `Esc` | Cancel current command |
| `Ctrl+Z` | Undo |
| `Ctrl+Y` | Redo |
| `Ctrl+S` | Save / export DXF |

## Tech Stack

- **Angular** — component framework
- **Canvas API** — rendering engine
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
