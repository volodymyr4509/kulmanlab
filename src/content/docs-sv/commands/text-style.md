---
title: Kommandot Textstil — Hantera textstilar
description: Skapa CAD-textstilar med teckensnitt, höjd, fetstil, kursiv, radavstånd, justering och ram.
keywords: [textstil CAD, teckensnitt CAD, textram, textjustering, DXF-stil, kulmanlab]
group: style
order: 6
---

# TextStyle

Kommandot `Textstil` öppnar stilhanteraren. Där kan du skapa namngivna stilar, redigera deras standardvärden och välja *aktuell* stil. Ny [Text](../text/) kopierar den aktuella stilens inställningar när den skapas.

## Använda stilhanteraren

Skriv `Textstil` eller klicka på **Textstil** i kommentarpanelen. ✓ markerar aktuell stil; dubbelklicka på en rad för att göra den stilen aktuell.

| Fält | Funktion |
|---|---|
| Byt namn | Använd pennan bredvid namnet för att redigera det i listan; `Standard` kan inte döpas om. |
| Teckensnitt / Höjd | Typsnitt och obligatorisk positiv höjd. Noll eller negativa värden blir `1`; hanteraren godtar bara värden över `0`. |
| Fet / Kursiv | Formatering som växlas oberoende |
| Radavstånd | Avståndet mellan textrader |
| Horisontell justering | Vänster, centrerad, höger eller marginaljusterad |
| Ram | Rektangulär ram runt ny text |

Förhandsvisningen använder samma renderare som arbetsytan och visar två rader. Teckensnitt, höjd, fetstil, kursiv, ram, radavstånd och justering uppdateras direkt; värdet visar anpassningszoom. Nya stilar är **vänsterställda** som standard.

**Ny** kopierar den valda stilen. **Ta bort** kan inte ta bort `Standard` eller aktuell stil. **Ange som aktuell** påverkar bara text som skapas därefter; befintlig text ändras inte. Ett tomt, duplicerat eller ogiltigt DXF-namn inaktiverar **OK**. Importerade annotativa stilar döljs, men deras data bevaras.

## Spara och DXF

**OK** sparar ändringarna; **Stäng** eller `Escape` ignorerar dem. Använd `↑` och `↓` för att flytta i listan. Namn, teckensnittsfiler, höjd, fetstil, kursiv och annotativ flagga ingår i DXF-textstilen. Ram, radavstånd och justering är standardvärden per text i KulmanLab, inte fält i DXF-tabellen STYLE.

Se även [Text](../text/), [FontManager](../font-manager/) och [MatchProperties](../match-properties/).
