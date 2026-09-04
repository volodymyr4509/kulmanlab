---
title: "Så konverterar du DXF till PDF (i rätt skala)"
description: "Konvertera DXF till PDF gratis i webbläsaren — även i exakt skala som 1:50 på A3, vilket konverteringssajter inte klarar. Inget att installera, inget konto."
keywords: [konvertera DXF till PDF, DXF till PDF gratis, DXF PDF online, DXF PDF skala, skriva ut DXF i skala, DXF PDF konverterare, CAD-ritning till PDF, DXF PDF A3, skala 1:50 PDF, DXF PDF utan AutoCAD]
date: 2026-09-03
author: KulmanLab
tag: Guide
---

För att konvertera en DXF till PDF öppnar du den i en CAD-redigerare som körs i webbläsaren och exporterar: inget att installera, inget konto, och filen stannar på din dator. Ska PDF:en gå att mäta korrekt i utskrift behöver du en pappersutskriftsvy och en exakt skala — och det är just det steget konverteringstjänsterna hoppar över helt.

Den skillnaden är hela poängen med den här guiden. En allmän filkonverterare ger dig en bild av din ritning. En PDF i skala ger dig en ritning som någon kan lägga en linjal mot.

## Den snabba vägen: bara göra en PDF

När du bara behöver något läsbart att skicka:

1. Gå till [app.kulmanlab.com](https://app.kulmanlab.com) och dra din `.dxf` till ritytan, eller använd knappen **Import** i filpanelen.
2. Klicka på **Print**, eller skriv `printmanager`.
3. Ställ **Format** på **PDF**.
4. Klicka på **Export**. Filen laddas ner.

Det var allt. Förhandsvisningen renderas via samma kodväg och i samma upplösning som den exporterade filen, så det du ser är det du får, inte en ungefärlighet.

En sak värd att veta: **PDF:en behåller allt som syns på skärmen** — mått, text, skrafferingar, hänvisningar — placerat exakt som det ritats. DXF-exporten tar också med sig allt detta, så valet mellan dem handlar inte om vad som överlever. Det handlar om vad mottagaren behöver: PDF om den bara ska läsas eller skrivas ut, DXF om den ska redigeras.

## Den rätta vägen: konvertera i exakt skala

Ska någon mäta eller bygga efter det här räcker inte "får plats på sidan". Skala 1:50 betyder att 1 mm på papperet är 50 mm i verkligheten, och det gäller bara om du ställer in det medvetet.

1. **Byt till en pappersutskriftsvy.** Klicka på en layoutflik längst ner; knappen **+** lägger till en ny. Layouter är pappersrymd; modellrymden har ingen sida att skala mot.
2. **Bestäm arket.** Skriv `pagemanager`, eller högerklicka på layoutfliken och välj **Page Manager**. Välj pappersformat (A4, A3, A2, Letter…) och orientering.
3. **Placera en vyport.** Skriv `viewportrectangle` och peka ut två motstående hörn. Vyporten är ett fönster in mot din modell.
4. **Ställ in skalan.** Med vyporten aktiv använder du **skalväljaren** i kontrollfältet. Välj ett standardförhållande eller skriv ett eget — den tar förhållandeform (`1:200`, `5:1`) eller ett decimaltal (`0.005`), sedan Enter.
5. **Exportera.** Print Manager → PDF → Export.

PDF:en dimensioneras så att sidan skrivs ut i verklig fysisk skala. Skriv ut den i 100 % — aldrig med "anpassa till sida", som tyst skalar om allt och omintetgör arbetet — så stämmer måtten på papperet.

Ändrar du sedan pappersformat eller skala skalas befintliga vyporter om proportionellt, så layouten faller inte isär.

## Att välja kvalitet

Listan **Quality** bestämmer vilken DPI PDF:en renderas i:

| Quality | DPI | Till vad |
|---|---|---|
| Draft | 72 | Snabbkoll, minsta filen |
| Normal | 150 | Standard — räcker för A4-bilagor |
| Presentation | 300 | När den granskas på nära håll |
| Max | 600 | Storformat, fina detaljer |

Linjebredder skalas med upplösningen, så en linje behåller samma *fysiska* tjocklek på papperet vid varje inställning — högre kvalitet ger en skarpare linje, inte en tunnare. Undantaget är hårlinjen (linjebredd `0`), som enligt konvention förblir en pixel bred på alla nivåer.

## Utskriftsstilar

Listan **Style** ändrar både bläck och sida:

- **Monochrome** — helsvart på vitt, och standardvalet. Det är vad du vill ha till allt som ska på papper: färglagda lager som läses bra på skärm blir till gyttjiga gråtoner i en laserskrivare.
- **Default** — varje objekt i sin egen färg, vit sida.
- **Blueprint** — vita linjer på djupt preussiskt blått, i stil med en klassisk blåkopia. För presentation, inte för verkstaden.

## Konvertera bara en del av ritningen

**Change Area** beskär exporten till en rektangel som du drar upp på ritytan. Den beskär den faktiskt exporterade filen, inte bara förhandsvisningen, och fungerar både i en layout och i modellrymden.

Hörnen fäster mot grepp och skärningar precis som vilken annan punktutpekning som helst, så du kan beskära mot ritad geometri i stället för på ögonmått — praktiskt när ett ark bär fyra detaljer och du bara vill ha den tredje.

## Vad det här inte gör

Ärliga begränsningar, innan du förlitar dig på det:

- **PDF:en är en rasterbild i en PDF-behållare, inte vektor.** På A4 med kvalitet Normal syns det inte. På A1, eller när någon zoomar in ordentligt på en detalj, blir en vektor-PDF från ett CAD-program för skrivbordet skarpare. Höj Quality till Presentation eller Max för storformat — vektor blir den inte för det.
- **Ingenting går till en fysisk skrivare.** Du får en fil; att skriva ut den är skrivarens jobb.
- **Endast skrivbordswebbläsare** — Chrome, Firefox, Safari, Edge. Det finns ingen mobilversion.
- **Endast 2D, DXF och inte DWG.** Är din fil en `.dwg`, be avsändaren exportera DXF.

## När något annat är bättre

**En allmän filkonverterare** (CloudConvert, Zamzar och liknande) duger om du verkligen bara behöver en bild och inte bryr dig om vilken storlek den skrivs ut i. De är snabba och klarar format ingen annan läser. De ger dig inte 1:50 på A3.

**CAD för skrivbordet** — LibreCAD, QCAD, eller AutoCAD om du har det — producerar vektor-PDF:er och är rätt svar för storformatritningar som ska skrivas ut ordentligt och granskas noga.

**Det här**, för den breda mitten: en DXF du behöver idag som en korrekt skalad, textsatt PDF, utan att installera något.

## Innan du skickar

- Skalan medvetet inställd i vyporten, inte lämnad på det som råkade rymmas
- Pappersformatet matchar det mottagaren faktiskt skriver ut på
- Quality höjd över Normal om det ska på något större än A4
- Stilen Monochrome om du inte medvetet vill ha färg
- PDF:en öppnad en gång för kontroll innan du bifogar den
- Mottagaren tillsagd att skriva ut i 100 %, inte "anpassa till sida"

Den sista raden räddar fler skalenliga ritningar än allt annat på listan.

---

*Relaterat: [Print Manager](/sv/docs/commands/print-manager/) för alla exportinställningar, [Page Manager](/sv/docs/commands/page-manager/) för pappersformat och layoutskala, [ViewportRectangle](/sv/docs/commands/viewport-rectangle/) för att placera och skala vyporter, och [Import](/sv/docs/commands/import/) för vad KulmanLab läser från en DXF.*
