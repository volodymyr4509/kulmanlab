# KulmanLab — Free Browser-Based 2D CAD Editor

**[kulmanlab.com](https://kulmanlab.com)** — A fast, professional 2D CAD application that runs entirely in your browser. No installation. No subscription. No files uploaded to any server.

---

KulmanLab is a web-based CAD editor built for engineers, designers, drafters, and makers who need a capable 2D drawing tool without the overhead of desktop software. Open a DXF file, make changes, and export — all without leaving your browser.

---

## Table of Contents

- [Features at a Glance](#features-at-a-glance)
- [Drawing Tools](#drawing-tools)
- [Edit & Modify Commands](#edit--modify-commands)
- [Dimensioning & Annotation](#dimensioning--annotation)
- [Layers](#layers)
- [Snap & Precision Input](#snap--precision-input)
- [Grip Editing](#grip-editing)
- [Selection](#selection)
- [DXF Import & Export](#dxf-import--export)
- [File Management](#file-management)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [User Interface](#user-interface)
- [What KulmanLab Does Not Support](#what-kulmanlab-does-not-support)
- [Who Is It For](#who-is-it-for)
- [Tech Stack](#tech-stack)
- [Development](#development)

---

## Features at a Glance

- Full 2D drawing toolkit: lines, polylines, arcs, circles, ellipses, splines
- Hatch fills with a built-in pattern library (ANSI31 and other standard patterns) plus custom `.pat` file upload via Hatch Manager
- Complete dimensioning suite: linear, aligned, radius, diameter, angular, continue
- Multileader annotations with customizable arrowheads
- Layer management: freeze, lock, isolate, color, linetype, lineweight
- DXF import and export (AC1032 format)
- Grip editing — drag geometry directly on canvas
- Object snapping: endpoint, intersection, perpendicular, angle lock
- Undo / redo with per-file history
- Local file storage via IndexedDB — your drawings stay on your machine
- Print and PDF export with page setup
- Dark and light theme
- Works in any modern desktop browser — no plugins, no accounts required

---

## Drawing Tools

KulmanLab provides a full set of 2D drawing commands accessible via the toolbar, the command terminal, or keyboard shortcuts.

### Geometry

| Tool | Description |
|------|-------------|
| **Line** | Draw individual line segments. Click to set start and end points. Chainable into connected sequences. |
| **Polyline** | Create multi-segment paths as a single LWPolyline entity. Supports open and closed paths, plus AutoCAD-style tangent arc segments via an `Arc` toggle (press A) mixed freely with straight ones. |
| **Rectangle** | Draw an axis-aligned rectangle by two corner points (typed as `X,Y` or clicked), or press `D` after the first corner to switch to typed width × height entry — move the cursor to pick which of the four quadrants the rectangle extends into, then click to place it. The last-entered width/height is remembered as the default next time. Stored as a closed LWPolyline. |
| **Circle** | Define by center point and radius. Supports typed numeric radius input. |
| **Arc** | Draw a circular arc through three points on the circumference. |
| **Ellipse** | Define by center, major axis endpoint, and minor-to-major ratio. Supports partial ellipses. |
| **Spline (Fit)** | Draw a smooth B-spline curve that passes through each clicked fit point. |
| **Spline (CV)** | Draw a B-spline curve defined by control vertices for precise shape control. |

### Fills

| Tool | Description |
|------|-------------|
| **Hatch** | Click a point inside any closed boundary (lines, arcs, circles, ellipses, polylines, or splines meeting end to end) to fill it with a pattern. Islands — closed shapes nested inside the region — are left unfilled. Grip-editable boundary; pattern, scale, angle, and origin are all adjustable per-hatch. |

Patterns come from a shared library managed by **Hatch Manager**: built-in defaults (including `SOLID`) plus any `.pat` files you upload, which shadow built-ins of the same name — the supported way to bring in Autodesk's authoritative `acad.pat` definitions.

### Annotation

| Tool | Description |
|------|-------------|
| **Text** | Insert single-line or multiline text with configurable height, rotation, and attachment point. |
| **Multileader** | Add an arrow, leader line, and text block. Arrowhead style and size are configurable. |

---

## Edit & Modify Commands

| Command | Works On | Description |
|---------|----------|-------------|
| **Move** | All entities | Relocate selected objects by base point and displacement. |
| **Copy** | All entities | Duplicate selected objects to a new location. |
| **Rotate** | All entities | Rotate around a base point by a specified angle. A `Copy` toggle (press C) rotates duplicates instead of the original selection. |
| **Mirror** | All entities | Reflect across a mirror axis defined by two points. |
| **Scale** | All entities | Resize from a base point by a numeric scale factor. |
| **Offset** | Line, Circle, Arc, Ellipse, Polyline | Create a parallel copy at a specified distance. |
| **Trim** | Line, Arc, Circle, Ellipse, Polyline | Remove the portion of an entity between two intersection points. |
| **Extend** | Line, Arc, Ellipse, Polyline | Stretch an entity's endpoint to reach a boundary. |
| **Fillet** | Line, Arc, Polyline (straight or arc segments) | Round a corner with a tangent arc of a specified radius. Rounding two segments of the same polyline folds the arc into it in place; filleting anything involving an open polyline instead merges both sides into a single new polyline joined by the fillet arc. Already-tangent corners (no real angle to round) are rejected. |
| **Chamfer** | Line and Polyline (straight segments) | Bevel a corner with a straight cut. On a Polyline, both picks must be true adjacent neighbor segments. |
| **Delete** | All entities | Remove selected objects from the drawing. |
| **Explode** | Polyline | Break a polyline into its individual Line and Arc entities, one per segment, in place. |
| **Match Properties** | All entities | Copy color, layer, linetype, and lineweight from one entity to others. |
| **ClipboardCopy** | All entities | Write the selection to the system clipboard as JSON, together with the layers and linetypes it references. |
| **ClipboardPaste** | All entities | Read entities back from the system clipboard and place them at a picked point — works across drawings and browser tabs. Missing layers/linetypes are added by name; existing ones are left alone. |

---

## Dimensioning & Annotation

KulmanLab includes a complete dimensioning suite for annotated technical drawings.

| Dimension Type | Description |
|----------------|-------------|
| **Linear** | Horizontal or vertical dimension between two points. |
| **Aligned** | Dimension parallel to the measured line at any angle. |
| **Radius** | Radial dimension for arcs and circles, with optional center mark. |
| **Diameter** | Diameter dimension with two-arrow display through the center. |
| **Angular** | Measure the angle between two lines. |
| **Continue** | Chain a sequence of dimensions from the endpoint of the previous one. |

All dimension entities are stored as standard DXF DIMENSION objects and are compatible with LibreCAD and other DXF tools.

---

## Layers

Every drawing entity belongs to a layer. KulmanLab provides full layer management through the Layer Panel.

**Layer properties:**
- **Name** — unique identifier
- **Color** — ACI color index, applied to all entities set to ByLayer
- **Linetype** — Continuous, Dashed, ByLayer, and others
- **Lineweight** — controls printed line thickness
- **Frozen** — hides the layer and excludes it from snap detection
- **Locked** — layer is visible but entities cannot be selected or modified
- **Plot** — controls whether the layer is included in print output

**Layer commands:**
- Set a layer as current for new entities
- Isolate a single layer (freeze all others)
- Unfreeze all layers at once
- Copy an entity's layer assignment to other entities via Match Properties

---

## Snap & Precision Input

KulmanLab provides object snapping and angle lock to ensure accurate geometry placement.

**Snap modes:**
- **Endpoint** — snaps to the start or end point of lines, arcs, and polyline vertices
- **Intersection** — snaps to the crossing point of two entities on screen
- **Perpendicular** — available via angle lock on line commands
- **Angle lock** — while drawing lines, automatically constrains direction to 45° increments when the cursor is close to a principal axis

**Numeric input:**
- Type a distance or radius value on the keyboard at any prompt to enter an exact numeric value
- Backspace corrects the last digit
- Enter confirms the value

Snap points on frozen layers are automatically skipped.

---

## Grip Editing

Select any entity and colored grip handles appear at key points. Drag a grip to reshape geometry directly on the canvas without entering a command.

| Entity | Grips | Behavior |
|--------|-------|----------|
| Line | Start, midpoint, end | Stretch endpoints; drag midpoint to move |
| Circle | Center + 4 cardinal points | Move by center; resize by cardinal grips |
| Arc | Center + start/end + radius point | Move, resize, and rotate arc extents |
| Polyline | Each vertex + center | Drag any vertex to reshape; center moves entire entity |
| Ellipse | Center + 4 axis endpoints | Move and resize both axes independently |
| Text | Insertion point | Reposition text |
| Dimensions | Extension points + text | Adjust witness lines and text placement |

Type a numeric value while dragging a grip to set an exact displacement or distance.

---

## Selection

| Method | Behavior |
|--------|----------|
| **Click** | Select the entity nearest to the cursor |
| **Drag right (window)** | Strict selection — only entities fully inside the box |
| **Drag left (crossing)** | Crossing selection — any entity that touches the box boundary |
| **Ctrl+A** | Select all entities in the drawing |
| **Click empty space** | Deselect all |

Selecting many entities shows a filter icon in the property panel header. It opens a popup with live checklists for Type, Layer, Color, Lineweight, and Linetype — built from what's actually in the selection — so you can narrow a large, mixed selection down before bulk-editing. The canvas selection itself is narrowed to match as you check and uncheck values, not just the property panel's display.

---

## DXF Import & Export

KulmanLab reads and writes **AC1032 DXF** files, the most widely supported version across CAD tools.

### Supported import entities

| DXF Entity | Supported |
|------------|-----------|
| LINE | Yes |
| CIRCLE | Yes |
| ARC | Yes |
| ELLIPSE | Yes |
| LWPOLYLINE | Yes |
| SPLINE | Yes (fit points and control vertices) |
| TEXT / MTEXT | Yes |
| MULTILEADER | Yes |
| DIMENSION | Yes (all subtypes) |
| INSERT / BLOCK | Parsed, not rendered |
| HATCH | Yes (boundary geometry plus pattern name/scale/angle; inline pattern-line definitions are not read — the name is resolved against KulmanLab's own pattern library instead) |
| 3DFACE / SOLID | Not supported |
| POINT | Not supported |
| XREF | Not supported |

### Export

Exported DXF files are valid and open correctly in LibreCAD, FreeCAD, QCAD, BricsCAD, and other DXF-compatible software. All entity properties — color, layer, linetype, lineweight, handles — are preserved on export.

Hatches are not yet included in DXF export (along with dimensions and multileaders) — use the native `.json` export format to keep a drawing's hatches intact.

---

## File Management

Drawings are stored locally in your browser using **IndexedDB**. Nothing is sent to a server.

- Open, save, rename, and delete drawings from the File Manager
- Recent files menu for quick access
- Each file has its own independent undo/redo history
- Export to DXF at any time via the Export Manager

---

## Keyboard Shortcuts

### Global

| Shortcut | Action |
|----------|--------|
| `Ctrl+Z` / `Cmd+Z` | Undo |
| `Ctrl+Shift+Z` / `Cmd+Shift+Z` | Redo |
| `Ctrl+A` / `Cmd+A` | Select all |
| `Ctrl+C` / `Cmd+C` | Copy selection to the system clipboard (ClipboardCopy) |
| `Ctrl+V` / `Cmd+V` | Paste entities from the system clipboard (ClipboardPaste) |
| `Delete` / `Backspace` | Delete selected entities |
| `Escape` | Cancel active command or close dialog |
| `Scroll wheel` | Zoom in / out |
| `Middle-click drag` | Pan |
| `Middle-click double` | Fit drawing to view |

### Command Terminal

Type command names directly into the terminal at the bottom of the screen. Suggestions match letters anywhere in a command's name, not just the start, ranked by match quality and then by how often you actually use each command — the list is mouse-clickable, scrolls to keep the selected suggestion in view while cycling with **Tab**, and highlights just the matched letters in place.

| Command | Alias |
|---------|-------|
| `line` | `l` |
| `polyline` | `pl` |
| `circle` | `c` |
| `arc` | `a` |
| `rectangle` | `rec` |
| `ellipse` | `el` |
| `spline` | `spl` |
| `text` | `t` |
| `move` | `m` |
| `copy` | `co` |
| `rotate` | `ro` |
| `mirror` | `mi` |
| `scale` | `sc` |
| `offset` | `o` |
| `trim` | `tr` |
| `extend` | `ex` |
| `fillet` | `f` |
| `chamfer` | `cha` |
| `delete` | `del` |

Use **Tab** to cycle through autocomplete suggestions. Use the **Up/Down** arrow keys to navigate command history.

---

## User Interface

- **Canvas** — full-screen 2D drawing area with live coordinate display
- **Command terminal** — type commands, enter values, view command history
- **Toolbar** — one-click access to common draw and edit tools
- **Layer Panel** — manage all layers in the drawing
- **Properties Panel** — view and edit properties of the selected entity
- **Hatch Manager** — browse the hatch pattern library and upload custom `.pat` pattern files
- **File Manager** — open, save, and manage drawings stored locally
- **Print Manager** — configure page size, scale, and print or export to PDF; choose a print style — Default (full color), Monochrome (solid black ink), or Blueprint (white ink on a Prussian-blue page with a reference grid)
- **Dimension Styles** — configure arrow size, text height, and extension line offsets
- **Dark / Light theme** — toggle between themes; preference is saved across sessions

---

## What KulmanLab Does Not Support

KulmanLab is focused on 2D drafting. The following are outside its current scope:

| Capability | Status |
|------------|--------|
| 3D modeling (solids, surfaces, meshes) | Not supported |
| Block definitions and INSERT references | Parsed on import but not rendered |
| Hatch export to DXF | Hatches can be drawn, imported, and saved to `.json`, but are not written to exported DXF files yet |
| Xrefs (external references) | Not supported |
| Paper space / multiple layouts | Single model space only |
| Associative dimensions | Dimensions are static; not linked to geometry |
| Attributes (ATTRIB / ATTDEF) | Not supported |
| Chamfer on arcs or curved polyline segments | Not supported — Chamfer is line/straight-segment only; Fillet handles arcs and curved segments |
| Mobile / touchscreen use | Desktop browsers only |
| Collaborative real-time editing | Not supported |
| Cloud storage or sync | Drawings are local to your browser |
| Parametric or constraint-based modeling | Not supported |

---

## Who Is It For

**KulmanLab is a good fit if you:**
- Need a quick, capable 2D CAD tool without installing software
- Work with DXF files for CNC machining, laser cutting, or fabrication
- Want to sketch, annotate, or review a technical drawing on any desktop browser
- Need a lightweight browser-based tool for simple DXF editing tasks
- Prefer a tool where your files never leave your computer

**KulmanLab is not the right tool if you:**
- Need 3D modeling or solid/surface design
- Rely on blocks, xrefs, or parametric constraints
- Need to work on a tablet or phone
- Require multi-user collaboration on shared drawings

---

## Tech Stack

| Technology | Role |
|------------|------|
| Angular 21 | Component framework and application structure |
| TypeScript | Strongly typed language throughout the codebase |
| Canvas 2D API | All drawing and rendering — no WebGL |
| Angular Material | UI components (panels, dialogs, buttons) |
| RxJS | Reactive state and event management |
| IndexedDB | Local drawing persistence |

All geometry algorithms — snap, intersection, hit testing, DXF parsing, DXF serialization — are implemented in-house with no external CAD libraries.

---

## Development

### Landing page (Astro)

```bash
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

### Deploy to Firebase

Always build before deploying — Firebase serves whatever is in `dist/`:

```bash
npm run build && firebase deploy --only hosting
```

Docs are part of the same Astro site under `src/content/docs/` and are served at `/docs`.

---

## License

MIT
