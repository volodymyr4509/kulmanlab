---
title: Kommandot Ledarstil — Hantera ledarlinjestilar
description: Skapa CAD-ledarstilar med pilspets, textfäste, avstånd, rotation, teckensnitt, höjd och textram.
keywords: [ledarstil CAD, multileader-stil, MLEADERSTYLE, pilspets CAD, textfäste, DXF-stil, kulmanlab]
group: style
order: 7
---

# LeaderStyle

Kommandot `Ledarstil` öppnar hanteraren för namngivna ledarlinjestilar. Varje ny [Hänvisning](../leader/) kopierar inställningarna från *aktuell* stil när den skapas.

## Redigera en stil

Skriv `Ledarstil` eller klicka på **Ledarlinjestil** i kommentarpanelen. ✓ markerar aktuell stil; använd pennan bredvid namnet för att döpa om den. Förhandsvisningen uppdateras direkt med samma renderare som ritningen.

| Fält | Funktion |
|---|---|
| Textfäste | Överst, Mitten, Nederst eller Understrykning |
| Pilspets / Pilstorlek | Symbol och storlek vid varje armspets |
| Avstånd till ansats | Utrymme mellan ansats och text |
| Textrotation | Etikettens vinkel i grader |
| Textstil | Kopierar en gång teckensnitt, höjd, fet och kursiv från en [TextStyle](../text-style/) |
| Teckensnitt / Texthöjd | Etikettens teckensnitt och höjd |
| Fet / Kursiv | Oberoende textformatering |
| Textram | Rektangulär ram runt etiketten |

**Ny** kopierar den valda stilen. `Standard` kan inte döpas om eller tas bort; aktuell stil kan inte heller tas bort. **Ange som aktuell** påverkar bara hänvisningar som skapas senare — befintliga objekt ändras inte. Ett tomt, duplicerat eller ogiltigt DXF-namn inaktiverar **OK**. Importerade annotativa stilar döljs men bevaras.

## Spara och DXF

**OK** tillämpar alla ändringar; **Stäng** eller `Escape` ignorerar dem. KulmanLab läser och skriver `MLEADERSTYLE`-poster. Namn, pilspets och storlek, avstånd, höjd, fäste, ram och annotativ flagga lagras som stilfält. Rotation, teckensnitt, fet och kursiv är KulmanLab-standardvärden som kopieras till hänvisningen när den skapas.

Se även [Leader](../leader/), [LeaderAdd](../leader-add/) och [LeaderRemove](../leader-remove/).
