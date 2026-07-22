---
title: Text Editor — Rich at Simple na Mode sa KulmanLab CAD
description: May dalawang mode ang text editor ng KulmanLab CAD — rich (per-character formatting, multi-line, word-wrap para sa Text at Multileader) at simple (uniform na style, single-line para sa dimension entity). Ipinapakita ng mode chip sa header kung aling mode ang aktibo.
keywords: [CAD text editor, MTEXT, bold italic CAD, text formatting CAD, multi-line text CAD, word wrap CAD, rich text editor, simple text editor, dimension text editor, custom font CAD, upload ttf CAD, kulmanlab]
group: interface
order: 5
---

# Text Editor

Bumubukas ang text editor kapag naglagay ka o nag-double-click sa isang editable na entity. Ipinapakita ng maliit na **mode chip** sa header — **rich** (accent color) o **simple** (muted) — kung aling mode ang aktibo para sa kasalukuyang entity.

## Mga Mode ng Editor

### Rich Mode

Ginagamit ng: **Text** (MTEXT labels) at **Multileader** annotations.

| Feature | Kilos |
|---------|-----------|
| Bold / Italic / Strikethrough | Per-character (nalalapat sa selection, o sa buong entity kung walang selection) |
| Font at Height | Per-character override, o whole-entity default |
| Alignment (Left / Center / Right / Justify) | **Text lang** — hindi available para sa Multileader |
| `Enter` | Naglalagay ng hard line break |
| `Shift+←/→` | Pinapahaba o pinapaikli ang text selection |
| `Home` / `End` | Lumundag papunta sa simula / dulo ng kasalukuyang hard line |
| Word wrap | Suportado sa pamamagitan ng reference-width resize grips |

### Simple Mode

Ginagamit ng: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

Naka-preload na ang editor ng rendered label ng kasalukuyang dimension para maipwesto mo ang cursor at direktang i-edit ang value.

| Feature | Kilos |
|---------|-----------|
| Bold / Italic / Font / Height | Available — nalalapat sa **buong** label nang sabay |
| Per-character formatting | Hindi suportado |
| `Enter` | **Kino-commit** ang value at isinasara ang editor (walang line break) |
| Multi-line | Hindi suportado |
| Word wrap | Hindi suportado |

## Pagbukas ng Editor

| Aksyon | Resulta |
|--------|--------|
| `text` command → i-click ang posisyon | Gumagawa ng bagong text entity at binubuksan ang editor (**rich**) |
| Mag-double-click sa umiiral na **Text** entity | Binubuksang muli ang editor sa **rich** mode |
| Mag-double-click sa umiiral na **Multileader** | Binubuksan ang editor sa **rich** mode |
| Mag-double-click sa **dimension** entity | Binubuksan ang editor sa **simple** mode |
| `Escape` sa loob ng editor | Isinasara ang editor at itinatago ang lahat ng pagbabago |

## Toolbar

Lumulutang ang toolbar sa itaas ng bounding box ng text at nananatiling naka-anchor sa entity habang nagpa-pan o nagzo-zoom ka.

### Bold · Italic · Strikethrough

| Button | Shortcut | Ano ang ginagawa nito |
|--------|----------|--------------|
| **B** | — | I-toggle ang bold |
| *I* | — | I-toggle ang italic |
| ~~S~~ | — | I-toggle ang strikethrough |

**Paano nalalapat ang toggling:**

- **May text selection** — nalalapat ang style eksakto lamang sa mga napiling character.
- **Walang selection, nasa umiiral na text ang cursor** — ino-toggle ang style sa buong entity (lahat ng segment).
- **Walang laman na text o bagong entity** — naka-store ang style sa walang-lamang segment at nalalapat sa bawat character na ita-type mo mula sa puntong iyon.

Lumalabas na naka-highlight (aktibo) ang button kapag ang bawat character sa kasalukuyang selection — o ang character na kaagad sa kaliwa ng cursor — ay may naka-set na style na iyon.

### Font

Ginu-group ng dropdown ang mga available na font sa **Default** (ang built-in na sans-serif), **User** (ang sarili mong na-upload na font, kung meron), **Free** (isang set ng bundled Google Fonts), at **System** (mga karaniwang OS font tulad ng Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console, at Impact).

- **May selection** — ino-override ang font para lang sa mga napiling character.
- **Walang selection** — nalalapat ang font sa buong entity.

Ipinapakita ng dropdown ang font ng character sa kaliwa ng cursor kapag walang selection.

Hindi limitado sa built-in na listahan — i-click ang **Font Manager** button sa toolbar para mag-upload ng sarili mong `.ttf` file at idagdag ito sa **User** group. Tingnan ang [Font Manager](../../commands/font-manager/) para sa detalye.

### Height

Itinatakda ng number field ang **cap height** (taas ng malaking titik) sa drawing units.

- **May selection** — ino-override ang height para sa mga napiling character, independyente sa base height ng entity.
- **Walang selection** — binabago ang base height ng entity (nalalapat sa lahat ng character na walang individual na height override).

Ipinapakita ng field ang height ng character sa kaliwa ng cursor. Iwanang blangko para gamitin ang default ng entity.

### Alignment

Apat na button — **Align Left**, **Align Center**, **Align Right**, **Justify** — nagtatakda ng alignment ng paragraph. Available lang para sa **Text** entity; hindi ipinapakita ang mga button na ito para sa Multileader at dimension label.

- Ang pag-click sa isang button ay muling nagju-justify sa bawat linya sa loob ng umiiral na bounding box ng entity — hindi nito inililipat ang insertion point o binabago ang laki ng box.
- Ang pag-click sa button na aktibo na ay nag-aalis sa override, babalik sa column na ipinapahiwatig ng attachment point ng entity.
- Pinapalawak ng **Justify** ang espasyo sa pagitan ng mga salita para punuin ng bawat linya ang buong lapad ng linya.

## Cursor at Navigation

| Key | Aksyon |
|-----|--------|
| `←` / `→` | Ilipat ang caret ng isang character pakaliwa o pakanan |
| `Home` | Lumundag papunta sa simula ng kasalukuyang hard line |
| `End` | Lumundag papunta sa dulo ng kasalukuyang hard line |
| `Shift` + `←` / `→` | Pahabain o paikliin ang selection |
| `Backspace` | Burahin ang character sa kaliwa (o ang selection) |
| `Delete` | Burahin ang character sa kanan (o ang selection) |
| `Enter` | Maglagay ng line break |
| `Escape` | Isara ang editor |

Awtomatikong tumutugma ang height ng cursor sa cap height ng katabing character, kabilang ang mas maliit na size na ginagamit para sa subscript at superscript.

## Pagkopya, Pagputol, at Pag-paste

| Key | Aksyon |
|-----|--------|
| `Ctrl+C` / `Cmd+C` | Kopyahin ang napiling text |
| `Ctrl+X` / `Cmd+X` | Putulin ang napiling text |
| `Ctrl+V` / `Cmd+V` | I-paste sa cursor |

Ang copy at cut ay nangangailangan ng aktibong text selection. Palaging plain ang na-paste na text — kinukuha nito ang formatting (bold, italic, font, height) na nasa cursor na, sa halip na dalhin ang formatting na mayroon ito noong kinopya.

Sa **rich mode**, napapanatili ang mga line break sa na-paste na text. Sa **simple mode**, tinatanggal ang mga line break, dahil single-line ang mga dimension label.

## Word Wrap

Kapag may naka-set na **reference width** ang text entity, sina-soft-wrap ang mahahabang linya sa word boundaries para bumagay sa loob ng width na iyon.

Para itakda o baguhin ang reference width habang napili ang entity, i-drag ang **resize grips** — ang manipis na rectangle sa kaliwa at kanang gilid ng dashed na bounding box. Nagre-reflow ang content nang real time habang nag-drag ka.

Ang pagtakda ng reference width sa zero (i-drag ang magkasamang grips o burahin ang value sa properties panel) ay nag-aalis ng word wrap at nagpapahintulot sa mga linya na lumaki nang malaya.

## Multi-line na Text

Pindutin ang `Enter` para maglagay ng hard line break. Independiyente ang bawat hard line — `Home` at `End` ay nagna-navigate lang sa loob ng kasalukuyang hard line.

Naka-store ang mga hard line break at per-character formatting gamit ang MTEXT format at nakakaligtas sa buong DXF round-trip.

## DXF Compatibility

Naka-store ang mga text entity bilang **MTEXT** sa DXF files. Naka-encode ang bold at italic bilang `\L`, `\K`, `\O`, at inline font switches (`\f`). Naka-encode ang per-character height bilang `\H`. Napapanatili ang lahat ng formatting sa export at nababasa ng LibreCAD, FreeCAD, at iba pang DXF-compatible na application.
