---
title: ViewportCopy-commando — Dupliceer een viewport in KulmanLab CAD
description: Het ViewportCopy-commando dupliceert een geselecteerde viewport naar een nieuwe positie in dezelfde layout, met behoud van schaal en model-instellingen. Ondersteunt exacte coördinateninvoer, hoekvergrendeling en getypte afstandsinvoer.
keywords: [viewport kopiëren, viewport dupliceren, viewportlayout kopiëren, hoekvergrendeling viewport, exacte coördinaat viewport, kulmanlab]
group: layouts
order: 2
---

# ViewportCopy

Het `ViewportCopy`-commando kopieert een viewport naar een nieuwe positie, met behoud van de schaal en het middelpunt van het model. Alleen beschikbaar in layoutruimte.

## Een viewport kopiëren

1. Schakel over naar een papierlayout-tabblad.
2. Klik eventueel op een viewport om deze vooraf te selecteren.
3. Typ `ViewportCopy` in de terminal of klik op de werkbalkknop **Viewport Copy**.
4. Als er geen viewport vooraf is geselecteerd, **klik op de viewport** die u wilt kopiëren.
5. **Klik op het basispunt** — de referentie voor de verplaatsing. Of typ `X,Y` en druk op **Enter** voor een exacte coördinaat.
6. **Klik op de bestemming** — de viewport wordt geplaatst op de verschuiving basispunt→bestemming. Of gebruik coördinateninvoer / hoekvergrendeling.

Na het plaatsen blijft het commando actief — klik op een andere bestemming om nog een kopie van dezelfde viewport te plaatsen. Druk op **Enter**, **Spatie** of **Escape** om te voltooien.

## Coördinateninvoer

Bij de stappen voor basispunt en bestemming kunt u een exacte coördinaat typen in plaats van te klikken:

1. Typ de X-waarde.
2. Druk op `,` — de terminal toont `[X], [Y{cursor}]`.
3. Typ de Y-waarde.
4. Druk op **Enter** om te bevestigen.

## Hoekvergrendeling en exacte afstand

Nadat het basispunt is ingesteld, snapt het commando naar assen van 45° (0°, 45°, 90°, 135°, …) wanneer de cursor uitlijnt. Terwijl vergrendeld:

- De voorvertoning snapt naar de as.
- Typ een afstand en druk op **Enter** om de kopie exact op die afstand langs de vergrendelde richting te plaatsen.

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.` | Cijfer toevoegen aan de afstandswaarde |
| `-` | Negatieve afstand (keert de richting om; alleen als eerste teken) |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` | Kopie plaatsen op getypte afstand |

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-coördinaatinvoer, of afstand wanneer hoek vergrendeld is |
| `,` | Vergrendel X en ga naar Y-invoer |
| `Enter` | Getypte coördinaat of afstand bevestigen |
| `Enter` / `Spatie` | Voltooien (wanneer er geen invoer actief is) |
| `Escape` | Annuleren en resetten |

## Opmerkingen

- ViewportCopy is alleen beschikbaar wanneer een papierlayout-tabblad actief is.
- De gekopieerde viewport erft dezelfde schaal, modelmiddelpunt, vergrendelstatus en afmetingen als het origineel.
- Gebruik [ViewportRectangle](../viewport-rectangle/) om een nieuwe viewport vanaf nul te maken.
