---
title: "ArrayPolar-kommando — kopiera objekt runt en medelpunkt i KulmanLab CAD"
description: "ArrayPolar-kommandot kopierar de valda objekten runt en medelpunkt — ett bestämt antal element fördelade över ett helt varv eller en del av det, med kopior som vrids med runt eller behåller sin egen riktning."
keywords: ["CAD polär matris", "cirkulärt mönster CAD", "kopiera objekt runt en punkt CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

Kommandot `ArrayPolar` gör kopior av de valda objekten runt en medelpunkt, jämnt fördelade över ett helt varv eller en del av det. Originalet är det första elementet; varje annat element är en kopia, vriden kring medelpunkten — eller bara flyttad runt den, om du slår av Rotate.

## Skapa en polär matris

1. Markera objekten och skriv sedan `arraypolar` i terminalen eller klicka på knappen **Array Polar** i verktygsfältet. Startas det utan markering ber det dig först markera dem — bekräfta med **Enter** eller **Space**.
2. **Klicka på medelpunkten** som kopiorna går runt, eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
3. Granska matrisen. Alla kopior förhandsvisas live och terminalen visar `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — tryck på ett alternativs bokstav för att ändra det.
4. Tryck **Enter** eller **Space** för att skapa kopiorna. Originalen stannar där de är och markeringen rensas.

## Alternativ

| Alternativ | Tangent | Verkan |
|---|---|---|
| Items | `I` | Hur många element det finns, originalet inräknat — ett heltal från 2 till 1024. Börjar på 6. |
| Angle | `A` | Grader från ett element till nästa, moturs; en negativ vinkel går medurs. Upp till 180°. |
| Fill | `F` | Grader från första till sista elementet. 360 (standard) är ett helt varv; ett mindre tal fördelar elementen över en del av det. Negativ går medurs. Upp till 360°. |
| Rotate | `R` | På (standard): varje kopia vrids med när den går runt. Av: varje kopia flyttas på plats och vänder åt samma håll som originalet. Växlar direkt — det finns inget tal att skriva. |

- Angle och Fill är två sätt att säga samma sak, så ändrar du det ena omformuleras det andra. Över ett helt varv stannar det sista elementet ett steg före det första; över en del av ett varv hamnar det exakt på fyllnadsvinkeln.
- För att ändra ett tal trycker du på alternativets bokstav. Uppmaningen är förifylld med det nuvarande värdet — skriv för att ersätta det och tryck **Enter** eller **Space**; bekräftas det oförändrat förblir matrisen som den var.
- Items tar bara heltal; Angle och Fill tar decimaler och ett inledande `-` för medurs. En vinkel eller fyllnad på 0 avvisas, liksom en vinkel över 180° eller en fyllnad över 360° — terminalen säger varför.
- En Angle som är för liten för alla element utelämnar de som saknar plats, och terminalen rapporterar det nya antalet.
- Fungerar på alla entitetstyper: varje kopia är originalet vridet kring medelpunkten eller flyttat, precis som [Rotate](../rotate/) och [Move](../move/) skulle göra.

## Tangentbordsöversikt

| Tangent | Åtgärd |
|---|---|
| `Enter` / `Space` | Bekräfta markeringen, matrisen eller ett skrivet tal |
| `I` `A` `F` `R` | Ändra Items, Angle eller Fill genom att skriva ett tal; växla Rotate |
| `0`–`9`, `.`, `-` | Skriv talet (`.` och `-` bara för Angle och Fill, `-` först) |
| `Backspace` | Ta bort det senast skrivna tecknet |
| `Escape` | Avbryt |
