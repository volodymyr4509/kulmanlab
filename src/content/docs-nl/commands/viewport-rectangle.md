---
title: ViewportRectangle-commando — Een viewport maken in een layout
description: Het ViewportRectangle-commando maakt een viewport in een papierlayout door twee tegenoverliggende hoeken te kiezen. De viewport toont de entiteiten uit de modelruimte op de standaardschaal van de layout.
keywords: [viewport rechthoek, viewport maken, layout viewport, papierruimte viewport, kulmanlab]
group: layouts
order: 1
---

# ViewportRectangle

Het `ViewportRectangle`-commando maakt een nieuwe viewport in de actieve papierlayout door twee tegenoverliggende hoeken te kiezen. Alleen beschikbaar in layoutruimte.

## Een viewport maken

1. Schakel over naar een papierlayout via het tabblad onderaan het scherm.
2. Typ `ViewportRectangle` in de terminal of klik op de werkbalkknop **Viewport Rectangle**.
3. **Klik op de eerste hoek**, of typ `X,Y` en druk op **Enter** voor een exacte coördinaat.
4. **Klik op de tegenoverliggende hoek** — de viewport wordt onmiddellijk geplaatst. Coördinateninvoer werkt hier ook.

De nieuwe viewport toont het volledige model op de standaardschaal van de layout. Gebruik het scrollwiel binnen de viewport om te zoomen, of sleep met de middelste muisknop om het modelbeeld te verschuiven.

## Coördinateninvoer

Bij beide hoekstappen kunt u een exacte coördinaat typen:

1. Typ de X-waarde.
2. Druk op `,` — de terminal toont `[X], [Y{cursor}]`.
3. Typ de Y-waarde.
4. Druk op **Enter** om het punt te plaatsen.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-coördinaatinvoer |
| `,` | Vergrendel X en ga naar Y-invoer |
| `Enter` | Getypte coördinaat bevestigen |
| `Escape` | Annuleren |

## Een viewport bewerken

Klik na het plaatsen van een viewport erop om deze te selecteren:

- **Sleep de randen of hoeken** om het formaat te wijzigen.
- **Sleep de middelste grip** om deze te verplaatsen.
- Gebruik de **schaalkiezer** in de bedieningsbalk om een exacte schaal in te stellen (bijv. 1:50). Om een schaal in te voeren die niet in de lijst staat, typt u deze rechtstreeks in het invoerveld onderaan de vervolgkeuzelijst — dit accepteert verhoudingsformaat (`1:200`, `5:1`) of een gewoon decimaal getal (`0.005`); druk vervolgens op **Enter**.
- Rechtsklik op een viewport en gebruik **Lock** om onbedoelde wijzigingen te voorkomen.

## Opmerkingen

- ViewportRectangle is alleen beschikbaar wanneer een papierlayout-tabblad actief is. Als u het uitvoert in modelruimte, verschijnt een foutmelding en stopt het commando.
- Gebruik [ViewportCopy](../viewport-copy/) om een bestaande viewport te kopiëren.
