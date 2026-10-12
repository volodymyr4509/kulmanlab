---
title: "Så ritar du en sexhörning eller en hålcirkel i CAD (Polygon och polär matris)"
description: "Rita en regelbunden månghörning från en medelpunkt och en radie eller från en kant, och upprepa sedan hål på en hålcirkel med en polär matris — gratis i webbläsaren, med exakt inskrivna värden."
keywords: [rita sexhörning i CAD, regelbunden månghörning CAD, polär matris CAD, hålcirkel ritning, hålmönster CAD, cirkulärt mönster CAD, rita sexkantsmutter, rita åttahörning CAD, delningsdiameter PCD, gratis polygonverktyg CAD]
date: 2026-10-11
author: KulmanLab
tag: Guide
---

För att rita en regelbunden månghörning i CAD anger du antalet sidor, väljer medelpunkten och sedan en radie — eller väljer en kant så följer resten. För att rita en hålcirkel ritar du ett hål och upprepar det runt medelpunkten med en polär matris. Den här guiden gör båda, med exakta tal, i en webbläsare på [app.kulmanlab.com](https://app.kulmanlab.com) — gratis, utan installation, och filen lämnar aldrig din dator.

Vi bygger [KulmanLab](https://kulmanlab.com), så stegen nedan använder dess kommandon. Idéerna — nyckelvidd kontra hörnmått, delningsdiameter, om kopior vrids med runt — är desamma i alla CAD-program.

## Rita en regelbunden månghörning

En regelbunden månghörning har lika sidor och lika vinklar: en sexhörning för en mutter, en åttahörning för en skylt, en femhörning för ett dekorativt utsnitt. I KulmanLab är det kommandot **Polygon**.

1. Skriv `polygon` i terminalen, eller använd knappen Polygon i panelen Shapes.
2. Ange **antal sidor** — vilket heltal som helst från 3 till 1024 — och tryck **Enter**. Uppmaningen är förifylld med det antal du använde senast.
3. **Klicka på medelpunkten**, eller skriv `X,Y` för en exakt punkt.
4. **Klicka på radien**, eller skriv den och tryck **Enter**.

Resultatet är en enda sluten polylinje, så allt du kan göra med en polylinje — flytta, vrida, offset, skala — fungerar.

### Nyckelvidd eller hörnmått?

Här snubblar många. ”Radie” kan betyda två olika avstånd, och en sexhörning anges med det ena eller det andra beroende på vad du ritar:

| | Mäts till | Typisk användning |
|---|---|---|
| **Inside på** (standard) | Hörnen | En form som måste rymmas i en given cirkel |
| **Inside av** | Mitten av varje kant | En form med given nyckelvidd — muttrar, skruvhuvuden, nyckelstorlekar |

Tryck `I` vid radieuppmaningen för att växla. En sexkantsmutter säljs efter nyckelvidd, så använd **Inside av** och skriv *hälften*. För en M8-mutter med 13 mm nyckelvidd:

1. `polygon`, sedan `6` för sidorna, sedan klicka eller skriv medelpunkten.
2. Tryck `I` för att slå av Inside.
3. Skriv `6.5` och tryck **Enter**.

Planen ligger exakt 13 mm från varandra; hörnen når 7,51 mm från medelpunkten, ungefär 15 mm hörnmått. Skriver du radien i stället för att klicka ligger månghörningen med sin lägsta kant vågrät, platt nedåt. Klickar du tar den sin orientering från platsen du klickar.

### Från en kant

Ibland känner du en sidlängd, inte en radie — till exempel en åttakantig bordsskiva med sidor på 20 mm. Tryck `E` vid uppmaningen för första punkten för att växla till läget **Edge** och välj de två ändarna på en kant. Övriga hörn byggs moturs, till vänster om den kanten. Skriver du `0,0` och sedan `20,0` hamnar en kant på 20 mm längs X-axeln med månghörningen ovanför.

## Rita en hålcirkel

En hålcirkel — ”PCD” på ritningar — är en ring av jämnt fördelade hål runt en medelpunkt. Du ritar ett hål och upprepar det. I KulmanLab är det **ArrayPolar**.

Ta sex hål på 6,6 mm på en delningsdiameter på 50 mm, centrerad i origo:

1. **Rita det första hålet.** Kör `circle`, skriv medelpunkten som `25` `,` `0` — halva PCD längs X-axeln —, tryck **Enter**, skriv sedan radien `3.3` och tryck **Enter**.
2. **Markera det** genom att klicka på cirkeln.
3. **Kör den polära matrisen.** Skriv `arraypolar`, eller använd knappen ArrayPolar i panelen Edit.
4. **Välj mönstrets medelpunkt** — skriv `0,0`.
5. Terminalen visar matrisen som den ser ut — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — och de fem kopiorna förhandsvisas live. Tryck **Enter** för att godkänna.

Det är hela hålcirkeln. För ett annat antal trycker du `I` före bekräftelsen och skriver antal element — originalet räknas som ett, och vinkeln mellan dem räknas ut. Eller tryck `A` och skriv i stället avståndet i grader; fyllnadsvinkeln omformuleras för att stämma.

Några detaljer som spelar roll:

- **Fill** är vinkeln från första till sista elementet. Standardvärdet 360° fördelar elementen över hela cirkeln; ett mindre tal fördelar dem över en båge — en rad hål över ett kvarts varv, till exempel. En negativ vinkel går medurs.
- **Rotate** avgör om varje kopia vrids med när den går runt. För runda hål spelar det ingen roll. För ett spår, en tand eller ett fäste gör det det: på — varje kopia vetter mot medelpunkten som originalet gjorde; av — varje kopia behåller originalets orientering och flyttas bara på plats. Tryck `R` för att växla före bekräftelsen.
- Matrisen skapar **kopior** — originalet stannar där det är, och varje element är en vanlig entitet som du kan redigera efteråt.

## Allt tillsammans: en fläns

Rita en sexhörning som kontur, en cirkel i mitten för hålet och en hålcirkel för monteringshålen. Tre kommandon, varje mått inskrivet exakt, inget att mäta av på skärmen.

Ska delen till en laserskärare, ta bort en hjälpcirkel du ritade för att hitta delningscirkeln — den skulle skäras som allt annat — och kontrollera filen mot vår guide om att [förbereda en DXF för laserskärning](/sv/blog/prepare-dxf-for-laser-cutting/). Månghörningen är en sluten bana i sig, vilket är den vanligaste orsaken till att skärtjänster avvisar filer.

## Vad detta inte gör

- **Bara regelbundna månghörningar.** Alla sidor är lika. En oregelbunden kontur — en form med några längre sidor — är en [polylinje](/sv/docs/commands/polyline/) som du ritar punkt för punkt.
- **Bara 2D.** Det ritar platta konturer. Du får ingen modellerad mutter eller gängad skruv.
- **Bara webbläsare på dator** — Chrome, Firefox, Safari och Edge. Det finns ingen mobilversion.

---

*Relaterat: [Polygon](/sv/docs/commands/polygon/) och [ArrayPolar](/sv/docs/commands/array-polar/) för alla alternativ och tangenter, [Circle](/sv/docs/commands/circle/) för att skriva exakta radier och [ArrayGrid](/sv/docs/commands/array-grid/) för att upprepa objekt i rader och kolumner i stället för runt en medelpunkt.*
