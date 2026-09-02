---
title: "Så förbereder du en DXF-fil för laserskärning"
description: "Varför skärtjänster avvisar DXF-filer och hur du fixar din — slutna konturer, enheter, skärspår och lager. Gratis i webbläsaren, inget att installera."
keywords: [DXF laserskärning, förbereda DXF laser, laserskärning filformat, DXF avvisad laser, slutna konturer DXF, skärspår kerf laser, laserfil förberedelse, DXF enheter laser, lager skära gravera, gratis DXF-redigerare]
date: 2026-09-02
author: KulmanLab
tag: Guide
---

En DXF för laserskärning behöver fyra saker: slutna konturer, rätt enheter, enbart skärgeometri — inga mått, anteckningar eller skrafferingar — och lager som skiljer skärning, ritsning och gravyr åt. Den här guiden går igenom var och en, och hur du kontrollerar din fil innan en tjänst avvisar den.

Allt det gör du gratis i webbläsaren på [app.kulmanlab.com](https://app.kulmanlab.com): inget att installera, inget konto, och filen lämnar aldrig din dator. Det är det här arbetsflödet vi ursprungligen byggde KulmanLab för, så begränsningarna som gäller andra CAD-uppgifter gäller till största delen inte här: laserskärning är 2D, och DXF är just vad skärtjänsterna vill ha.

## Varför filer avvisas

Fem skäl täcker så gott som allt.

**Öppna konturer.** En form som ser sluten ut men har en hårfin glipa i ett hörn är ingen region — det är en samling osammanhängande linjer. Skärmaskiner måste veta vad som är innanför och vad som är utanför, och en öppen kontur har inget innanför. Det här är med bred marginal den vanligaste avvisningsorsaken.

**Fel eller oklara enheter.** DXF registrerar inte tillförlitligt vad dess siffror betyder. Samma fil kan vara i millimeter, centimeter, tum eller fot, och ofta står det inte i filen. En detalj som kommer 25,4 gånger för stor eller för liten är det här.

**Allt som inte är geometri.** Mått, ritningshuvuden, anteckningar, skrafferingar, hjälplinjer. Maskinen försöker gärna skära dina anteckningar också.

**Dubbla linjer.** Två identiska linjer ovanpå varandra betyder att lasern går samma bana två gånger: förlorad tid, brända kanter och, i tunt material, brandrisk.

**Allt på ett enda lager.** Är skärning, ritsning och gravyr inte åtskilda kan tjänsten inte hålla isär dem och ber dig skicka in på nytt.

## Att förbereda filen

Dra din `.dxf` till ritytan på [app.kulmanlab.com](https://app.kulmanlab.com), eller använd knappen **Import** i filpanelen. Ritningen läses in och vyn anpassas till den.

**1. Se efter vad du faktiskt har.** Skriv `fit` för att få in allt i vyn. Zooma sedan in på varje hörn på varje detalj — glipor är osynliga i hela ritningens skala och uppenbara vid tio gångers förstoring. Det är den här kontrollen som besparar dig avvisningsmejlet.

**2. Radera det som inte ska skäras.** Hjälplinjer, anteckningar, ramar, mått. `layer-isolate` visar ett lager i taget, och så hittar man rester som gömmer sig under den riktiga geometrin.

**3. Slut gliporna.** `trim` kapar överskjutande ändar där två linjer korsar varandra med marginal. Där linjer inte når fram drar du ett ändpunktsgrepp till sin granne — greppen fäster, så ändarna möts på riktigt i stället för nästan.

**4. Kontrollera måtten.** `distance` mäter mellan två punkter, `area` mäter en sluten region utifrån klickade punkter. Mät något vars verkliga mått du känner till. Skiljer det en faktor 25,4 ligger din fil i fel enhetssystem.

**5. Skilj skärning, ritsning och gravyr åt.** Lägg varje moment på ett eget lager med ett självklart namn: `CUT`, `SCORE`, `ENGRAVE`. De flesta tjänster ber antingen om detta eller om separata filer. `layer-manager` skapar och tilldelar dem.

Exportera sedan: **Export** → **DXF**. KulmanLab skriver enkel AC1032-DXF, vilket är precis vad skärtjänster och maskinprogram förväntar sig.

## Skärspår

Lasern tar bort material när den skär — ungefär 0,1 till 0,3 mm beroende på maskin, material och tjocklek. Skär en 50 mm-kvadrat och du får en aningen mindre kvadrat, och detaljen som skulle presspassas i den går inte i.

Två sätt att hantera det:

**Låt tjänsten sköta det.** De flesta skärtjänster kompenserar för skärspåret själva, och gör de det blir detaljerna fel åt andra hållet om du också kompenserar. Fråga innan du justerar något.

**Gör det själv.** `offset` skapar en parallell kopia av en form på ett fast avstånd — halva skärspårsbredden, utåt för detaljer som ska behålla måttet, inåt för hål. Det fungerar på linjer, cirklar, bågar, ellipser och polylinjer. Det tar ett objekt i taget, så det är praktiskt för en handfull kritiska mått, inte för en plåt med tvåhundra detaljer.

Om toleransen spelar roll: skär en provbit innan du binder upp material.

## Vad som inte överlever DXF-exporten

Värt att veta innan du förlitar dig på det:

- **Text exporteras inte till DXF.** Hade du tänkt dig graverad text finns den inte i filen. Konvertera texten till konturer i ett annat program, eller använd en tjänst som tar emot SVG för gravyrlagret.
- **Skrafferingar och mått exporteras inte heller.** För en skärfil är det precis vad man vill ha — men utgå inte från att ett skrafferat område blir en graverad yta, för det finns inte i filen alls.
- **Blockreferenser importeras inte.** En ritning uppbyggd av upprepade blocksymboler kommer in ofullständig, så stäm av antalet detaljer mot originalet.

Splines *exporteras* däremot. Vissa maskinprogram hanterar dem dåligt och föredrar polylinjer — är ditt ett sådant, rita om kurvorna som polylinjer eller bågar.

## En varning om automatik

KulmanLab har **ingen förhandskontroll**. Ingenting söker efter öppna konturer, dubbla linjer eller enhetsproblem och rapporterar dem. Kontrollerna ovan är manuella: zooma in, mät, titta.

Det duger för en handfull detaljer och är tröttsamt för en helt nästlad plåt. Producerar du plåtar regelbundet passar ett verktyg med automatisk validering dig bättre — och för enstaka detaljer, vilket är vad de flesta gör för det mesta, hittar noggrann granskning samma problem.

## Innan du skickar

- Varje skärkontur sluten — hörnen kontrollerade vid hög förstoring
- Ett känt mått uppmätt och korrekt
- Inga mått, anteckningar, ramar eller hjälpgeometri kvar
- Inga dubbla linjer ovanpå varandra
- Skärning, ritsning och gravyr på separata, tydligt namngivna lager
- Skärspår: antingen tillämpat eller medvetet överlämnat till tjänsten
- Exporterad som DXF och öppnad en gång till för att bekräfta att den ser rätt ut

Den sista punkten kostar tio sekunder och fångar exportöverraskningar före tjänsten.

---

*Relaterat: [Import](/sv/docs/commands/import/) för vad KulmanLab läser från en DXF, [Export Manager](/sv/docs/commands/export-manager/) för exakt vad varje exportformat bär med sig, [Offset](/sv/docs/commands/offset/) för skärspårskompensation, och [LayerManager](/sv/docs/commands/layer-manager/) för att sätta upp skär- och gravyrlager.*
