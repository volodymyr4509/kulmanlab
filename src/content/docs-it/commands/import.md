---
title: Comando Import — KulmanLab CAD
description: Apri file di disegno DXF o JSON in KulmanLab CAD importandoli nella lavagna corrente.
keywords: [KulmanLab, KulmanLab CAD, comando import, importa DXF, apri file]
---

# Import

Apre un file di disegno DXF o JSON e lo carica nella lavagna corrente.

## Come usarlo

1. Attiva il comando **Import** dalla barra degli strumenti o digita `import` nel terminale.
2. Si apre la finestra di dialogo di selezione file.
3. Seleziona un file **.dxf** o **.json** dal tuo computer.
4. Il disegno viene caricato nella lavagna.

## Formati supportati

| Formato | Note |
|---------|------|
| **DXF** | Formato di scambio standard CAD — compatibile con AutoCAD e altri software |
| **JSON** | Formato nativo di KulmanLab CAD |

## Suggerimenti

- L'importazione sostituisce il disegno corrente; salva prima con [Export](./export) se necessario.
- Dopo l'importazione usa [Fit](./fit) per centrare la vista sul disegno caricato.
