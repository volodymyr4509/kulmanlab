# KulmanLab

**[kulmanlab.com](https://kulmanlab.com)** — Browser-based CAD for 2D drawing and DXF workflows.

---

## What is KulmanLab?

The rendering engine handles drawings with thousands of objects without performance degradation. KulmanLab is a lightweight, web-based CAD application for creating and editing 2D technical drawings directly in your browser — no installation required.

## Features

- Dimension tools for annotating drawings with measurements
- Layer management with visibility and lock controls
- Snap indicators with visual feedback
- Works entirely in the browser — no backend, no account required
- Copy, move, rotate, and mirror operations
- Area and perimeter measurement tools
- Block library for reusable symbols and shapes

## Getting Started

Open [kulmanlab.com](https://kulmanlab.com) in any modern browser and start drawing immediately.

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `P` | Polyline tool |
| `R` | Rectangle tool |
| `E` | Erase / delete |
| `F8` | Toggle orthographic mode |
| `Ctrl+O` | Open file |
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
