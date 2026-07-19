---
title: New File — Start een Lege Tekening in KulmanLab CAD
description: Het New File-commando wist het canvas en opent een nieuwe lege tekening. Er wordt automatisch een bestandsnaam met tijdstempel gegenereerd en opgeslagen in browseropslag.
keywords: [nieuw CAD-bestand, nieuwe tekening, leeg canvas CAD, nieuwe tekening online maken, nieuwe DXF starten, KulmanLab nieuw bestand, canvas resetten, tekening wissen]
group: file
order: 2
---

# New File

Het commando **New File** wist het canvas en start een nieuwe lege tekening. Er wordt automatisch een unieke bestandsnaam met tijdstempel gegenereerd.

## Een nieuw bestand maken

Klik op de **New File**-werkbalkknop (nieuwe-paginaicoon) in het Bestand-paneel. Het canvas wordt onmiddellijk gewist — zonder prompts of bevestigingsvensters.

## Wat het nieuwe bestand bevat

Een nieuw aangemaakt bestand begint met:

- **Geen entiteiten** op het canvas.
- **Eén standaardlaag** genaamd `0` met kleur wit en lijntype `Continuous`.
- Een **gegenereerde bestandsnaam** in het formaat `kulman-Mon01_HH:MM:SS.dxf` (bijv. `kulman-May22_14:30:00.dxf`).

Het bestand wordt automatisch opgeslagen in browseropslag en verschijnt in [Recente Bestanden](../files/).

## Waarschuwing — niet-opgeslagen werk gaat verloren

Klikken op **New File** verwijdert alle entiteiten op het huidige canvas zonder waarschuwing. Als u de huidige tekening wilt behouden, [exporteer](../export/) deze dan eerst.

## Wanneer New File versus Import gebruiken

| Situatie | Aanbevolen actie |
|-----------|-------------------|
| Een tekening vanaf nul beginnen | **New File** |
| Een bestaand DXF- of JSON-bestand openen | [Import](../import/) |
| Een tekening kopiëren om aan een variant te werken | [Exporteer](../export/) het huidige bestand, en [importeer](../import/) daarna de kopie |

## Gerelateerde commando's

- [Import](../import/) — een bestaande DXF- of JSON-tekening openen
- [Export](../export/) — de tekening downloaden voordat u opnieuw begint
- [Files](../files/) — een eerdere tekening herstellen uit browseropslag
