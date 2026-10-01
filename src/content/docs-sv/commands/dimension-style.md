---
title: "Kommandot Måttstil — skapa och hantera namngivna måttstilar"
description: "Skapa CAD-måttstilar för pilar, hjälplinjer, centrummarkeringar, text, precision, justering och DXF DIMSTYLE."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# Måttstil

Kommandot öppnar en dialogruta för att skapa, redigera, förhandsgranska och välja namngivna måttstilar. Nya linjära, justerade, radie-, diameter- och vinkelmått kopierar aktuell stil när de skapas; befintliga mått är inte direktlänkade.

## Öppna dialogrutan

Skriv det lokaliserade kommandot i terminalen eller klicka på **Måttstil** i panelen **Annotera**. Listan till vänster visar synliga stilar; en bock anger den aktuella och pennan byter namn.

## Linjer och pilar

**Pil 1 / Pil 2 · Pilstorlek · Avstånd för hjälplinjer · Förlängning av hjälplinjer · Centrummarkering · Storlek på centrummarkering**

Ställ in de två pilspetsarna separat, pilstorlek, hjälplinjernas avstånd och förlängning samt centrummarkeringens typ och storlek (`Ingen`, `Markering` eller `Linjer`).

## Text

**Textstil · Teckensnitt · Texthöjd · Textram · Textavstånd · Textfäste · Text justerad · Precision · Vinkelprecision**

Textdelen styr snabbfyllning från textstil, teckensnitt, höjd, fet, kursiv, ram, mellanrum, en av nio fästpunkter, justering längs måttlinjen och linjär/vinkelprecision. Textstil kopierar värden en gång och är ingen direktlänk.

Förhandsgranskningen använder samma renderare som ritytan. Växla mellan linjära, radie-, diameter- och vinkelexempel för att kontrollera pilar, centrum, textläge, precision och ramar.

## Skapa och hantera stilar

**Ny** duplicerar vald stil. `Standard` kan inte byta namn eller tas bort, och aktuell stil kan inte heller tas bort. Namn måste vara unika, icke-tomma och giltiga för DXF. Importerade annotativa stilar döljs men bevaras.

## Ange aktuell stil

**Ange aktuell** gör vald stil till mall för nya mått; listan i panelen Annotera erbjuder samma val. Värden kopieras när måttet skapas. Dimension Continue ärver i stället hela utseendet från basmåttet.

## Spara eller förkasta

**OK** tillämpar namnbyten, tillägg, borttagningar, egenskaper och aktuell stil tillsammans. **Stäng**, klick på bakgrunden eller `Escape` förkastar ändringarna.

## DXF-kompatibilitet

KulmanLab importerar och exporterar namngivna `DIMSTYLE`-poster med separata pilar, hjälplinjer, text, precision, centrum, ram, textstilsreferens och annotativ flagga. Vid import har objektspecifika `DSTYLE`-åsidosättningar företräde.

Vid export använder refererad `STYLE` variabel höjd (`40 = 0`) och sparar senaste höjden i grupp `42`. Då kan en fast textstilshöjd inte ersätta måttstilens egen texthöjd.

## Relaterade kommandon

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
