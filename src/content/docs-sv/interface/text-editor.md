---
title: Texteditor — Rikt och enkelt läge i KulmanLab CAD
description: KulmanLab CAD-texteditorn har två lägen — rikt (formatering per tecken, flera rader, radbrytning för Text och Multileader) och enkelt (enhetlig stil, en rad för måttsättningsentiteter). En lägesbricka i huvudet visar vilket läge som är aktivt.
keywords: [CAD-texteditor, MTEXT, fet kursiv CAD, textformatering CAD, flerradig text CAD, radbrytning CAD, rik texteditor, enkel texteditor, texteditor för måttsättning, anpassat typsnitt CAD, ladda upp TTF CAD, kulmanlab]
group: interface
order: 5
---

# Text Editor

Texteditorn öppnas när du placerar eller dubbelklickar på en redigerbar entitet. En liten **lägesbricka** i huvudet — **rich** (accentfärg) eller **simple** (dämpad) — visar vilket läge som är aktivt för den aktuella entiteten.

## Editorlägen

### Rich mode

Används av: **Text** (MTEXT-etiketter) och **Multileader**-annotationer.

| Funktion | Beteende |
|---------|-----------|
| Fet / Kursiv / Genomstruken | Per tecken (tillämpas på markering, eller hela entiteten om ingen markering finns) |
| Typsnitt och Höjd | Åsidosättning per tecken, eller standard för hela entiteten |
| `Enter` | Infogar en hård radbrytning |
| `Shift+←/→` | Utökar eller krymper en textmarkering |
| `Home` / `End` | Hoppa till start / slut av den aktuella hårda raden |
| Radbrytning | Stöds via referensbreddens storleksgrepp |

### Simple mode

Används av: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

Editorn fylls i förväg med den aktuella måttsättningens renderade etikett så att du kan placera markören och redigera värdet direkt.

| Funktion | Beteende |
|---------|-----------|
| Fet / Kursiv / Typsnitt / Höjd | Tillgängligt — tillämpas på **hela** etiketten samtidigt |
| Formatering per tecken | Stöds inte |
| `Enter` | **Bekräftar** värdet och stänger editorn (ingen radbrytning) |
| Flera rader | Stöds inte |
| Radbrytning | Stöds inte |

## Öppna editorn

| Åtgärd | Resultat |
|--------|--------|
| `text`-kommandot → klicka på position | Skapar en ny textentitet och öppnar editorn (**rich**) |
| Dubbelklicka på en befintlig **Text**-entitet | Öppnar editorn igen i **rich**-läge |
| Dubbelklicka på en befintlig **Multileader** | Öppnar editorn i **rich**-läge |
| Dubbelklicka på en **måttsättnings**-entitet | Öppnar editorn i **simple**-läge |
| `Escape` inuti editorn | Stänger editorn och behåller alla ändringar |

## Verktygsfält

Verktygsfältet svävar ovanför textens avgränsningsruta och förblir förankrat vid entiteten när du panorerar eller zoomar.

### Fet · Kursiv · Genomstruken

| Knapp | Genväg | Vad den gör |
|--------|----------|--------------|
| **B** | — | Växla fet stil |
| *I* | — | Växla kursiv stil |
| ~~S~~ | — | Växla genomstruken stil |

**Hur växling tillämpas:**

- **Med en textmarkering** — stilen tillämpas endast på exakt de markerade tecknen.
- **Ingen markering, markör i befintlig text** — växlar stilen för hela entiteten (alla segment).
- **Tom text eller ny entitet** — stilen lagras på det tomma segmentet och tillämpas på varje tecken du skriver från och med den punkten.

Knappen visas markerad (aktiv) när varje tecken i den aktuella markeringen — eller tecknet omedelbart till vänster om markören — har den stilen inställd.

### Typsnitt

Rullgardinsmenyn grupperar tillgängliga typsnitt i **Default** (det inbyggda sans-serif-typsnittet), **User** (dina egna uppladdade typsnitt, om några finns), **Free** (ett urval av medföljande Google Fonts) och **System** (vanliga typsnitt för operativsystemet, till exempel Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console och Impact).

- **Med en markering** — åsidosätter typsnittet endast för markerade tecken.
- **Ingen markering** — tillämpar typsnittet på hela entiteten.

Rullgardinsmenyn återspeglar typsnittet för tecknet till vänster om markören när ingen markering finns.

Inte begränsad till den inbyggda listan — klicka på knappen **Font Manager** i verktygsfältet för att ladda upp ditt eget `.ttf`-typsnitt och lägga till det i gruppen **User**. Se [Font Manager](../../commands/font-manager/) för mer information.

### Höjd

Talfältet ställer in **versalhöjden** (höjden på en stor bokstav) i ritenheter.

- **Med en markering** — åsidosätter höjden för markerade tecken, oberoende av entitetens grundhöjd.
- **Ingen markering** — ändrar entitetens grundhöjd (tillämpas på alla tecken som inte har en individuell höjdåsidosättning).

Fältet återspeglar höjden på tecknet till vänster om markören. Lämna det tomt för att använda entitetens standardvärde.

## Markör och navigering

| Tangent | Åtgärd |
|-----|--------|
| `←` / `→` | Flytta markören ett tecken åt vänster eller höger |
| `Home` | Hoppa till början av den aktuella hårda raden |
| `End` | Hoppa till slutet av den aktuella hårda raden |
| `Shift` + `←` / `→` | Utöka eller krymp markeringen |
| `Backspace` | Ta bort tecknet till vänster (eller markeringen) |
| `Delete` | Ta bort tecknet till höger (eller markeringen) |
| `Enter` | Infoga en radbrytning |
| `Escape` | Stäng editorn |

Markörhöjden matchar automatiskt versalhöjden för det intilliggande tecknet, inklusive den mindre storleken som används för nedsänkt och upphöjd text.

## Kopiera, klipp ut och klistra in

| Tangent | Åtgärd |
|-----|--------|
| `Ctrl+C` / `Cmd+C` | Kopiera den markerade texten |
| `Ctrl+X` / `Cmd+X` | Klipp ut den markerade texten |
| `Ctrl+V` / `Cmd+V` | Klistra in vid markören |

Kopiering och urklippning kräver en aktiv textmarkering. Inklistrad text är alltid oformaterad — den antar formateringen (fet, kursiv, typsnitt, höjd) som redan finns vid markören istället för att föra över formateringen den hade när den kopierades.

I **rich mode** bevaras radbrytningar i den inklistrade texten. I **simple mode** tas radbrytningar bort, eftersom måttsättningsetiketter är på en rad.

## Radbrytning

När en textentitet har en **referensbredd** inställd, radbryts långa rader mjukt vid ordgränser för att passa inom den bredden.

För att ställa in eller ändra referensbredden medan entiteten är markerad, dra i **storleksgreppen** — de tunna rektanglarna på vänster och höger kant av den streckade avgränsningsrutan. Innehållet flödar om i realtid medan du drar.

Att ställa in referensbredden till noll (dra ihop greppen eller ta bort värdet i egenskapspanelen) tar bort radbrytningen och låter rader växa fritt.

## Flerradig text

Tryck på `Enter` för att infoga en hård radbrytning. Varje hård rad är oberoende — `Home` och `End` navigerar endast inom den aktuella hårda raden.

Hårda radbrytningar och formatering per tecken lagras med MTEXT-formatet och överlever en fullständig DXF-rundtur.

## DXF-kompatibilitet

Textentiteter lagras som **MTEXT** i DXF-filer. Fet och kursiv stil kodas som `\L`, `\K`, `\O` och infogade typsnittsväxlingar (`\f`). Höjd per tecken kodas som `\H`. All formatering bevaras vid export och är läsbar av LibreCAD, FreeCAD och andra DXF-kompatibla applikationer.
