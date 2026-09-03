---
title: "DXF och DWG: vad är skillnaden?"
description: "DWG är AutoCAD:s eget format, DXF det öppna utbytesformatet. Vad som faktiskt skiljer, vilket du behöver, och hur du får en DXF när du fått en DWG."
keywords: [DXF och DWG, skillnad DXF DWG, DWG eller DXF, vad är DWG, vad är DXF, DWG till DXF, CAD-filformat, öppna DWG-fil, DXF-format, vilket CAD-format]
date: 2026-09-02
author: KulmanLab
tag: Guide
---

DWG är AutoCAD:s eget filformat: binärt, proprietärt och odokumenterat av Autodesk. DXF är utbytesformatet som Autodesk publicerar så att andra program kan läsa samma ritningar. Samma geometri, annan behållare — och bara det ena av dem är tänkt för att lämna filer till människor utanför din egen programvara.

Just den sista punkten är hela den praktiska skillnaden, och det är den som avgör vad du bör be om.

## Kortversionen

| | DXF | DWG |
|---|---|---|
| Står för | Drawing Exchange Format | Drawing |
| Publicerad specifikation | Ja, av Autodesk | Nej |
| Kodning | Text (finns även som binär variant) | Binärt |
| Syfte | Flytta ritningar mellan program | AutoCAD:s eget arbetsformat |
| Filstorlek | Större | Mindre |
| Läses av annan programvara | Mycket brett | Ojämnt, via bakåtkonstruerade bibliotek |
| Bär allt AutoCAD kan göra | Nej — en dokumenterad delmängd | Ja |

## Varför det finns två format alls

Autodesk släppte AutoCAD 1982 med DWG som arbetsformat. Det är byggt för ett enda programs bekvämlighet: kompakt, binärt och fritt att ändras när AutoCAD behöver det.

Det gör det till en dålig sak att skicka någon. Så Autodesk publicerade också DXF — samma ritning nedskriven i en dokumenterad, läsbar form som vilken utvecklare som helst kan bygga mot. Öppna en `.dxf` i en textredigerare så ser du gruppkoder och sektionsnamn i vanlig ASCII.

De två versionshanteras tillsammans. Varje AutoCAD-utgåva ger en DWG-revision och en motsvarande DXF-revision; markören `AC1032` som ibland syns i ett filhuvud betecknar exempelvis generationen AutoCAD 2018.

DXF är alltså varken det äldre eller det sämre formatet. Det är samma ritning, avsiktligt gjord läsbar.

## Vad som faktiskt skiljer i praktiken

**Öppenhet.** Autodesk dokumenterar DXF och dokumenterar inte DWG. Program som läser DWG — och de är många — lutar sig mot bibliotek som vuxit fram ur bakåtkonstruktion av formatet. Det fungerar bra och är helt legitimt, men det innebär att DWG-stöd släpar efter nya utgåvor och varierar mellan tillämpningar, medan DXF-stöd kan implementeras direkt ur specifikationen av vem som helst.

**Storlek.** En binär DWG är i regel betydligt mindre än samma ritning som ASCII-DXF. I ett stort projekt spelar det roll; för en enskild detalj inte.

**Trohet.** DWG rymmer allt AutoCAD kan uttrycka, inklusive objekttyper som andra program inte har något begrepp om. DXF täcker en dokumenterad delmängd. För vanligt 2D-ritande — linjer, bågar, cirklar, polylinjer, text, mått, lager — är den delmängden allt du behöver. För en modell som lutar sig mot proprietära AutoCAD-objekt går en del förlorat vid export till DXF.

**Stödets bredd.** Praktiskt taget varje CAD-, CAM- och vektorverktyg läser DXF. Färre läser DWG, och de som gör det stöder det ofta mindre fullständigt.

## Vilket behöver du egentligen?

**Någon skickade en fil och du får inte upp den.** Kontrollera först den verkliga filändelsen. De flesta säger "DWG" om båda, och i hälften av fallen ligger det en `.dxf` i hämtade filer som du redan kunde öppna. Se [öppna en DXF utan AutoCAD](/sv/blog/open-dxf-file-without-autocad/).

**Du skickar till laserskärning, en CNC-verkstad eller en tillverkare.** DXF, i princip alltid. Maskinprogram och skärtjänster är byggda kring det, och 2D-skärgeometri ryms bekvämt inom den dokumenterade delmängden. Se [förbereda en DXF för laserskärning](/sv/blog/prepare-dxf-for-laser-cutting/).

**Du skickar till en arkitekt eller ingenjör som arbetar i AutoCAD.** Fråga. Många föredrar DWG för att det är vad deras arbetsflöde förväntar sig, och annars öppnar de en DXF alldeles utmärkt.

**Du arkiverar något på lång sikt.** DXF. Ett dokumenterat textformat kommer om tjugo år fortfarande att gå att läsa för någon med specifikationen och en textredigerare. Det argumentet är hela skälet till att utbytesformat finns.

**Någon vill bara titta på det.** Ingetdera — skicka en PDF. Se [konvertera en DXF till PDF](/sv/blog/convert-dxf-to-pdf/).

## Att få en DXF när du fått en DWG

Den pålitliga vägen är att be om det. Den som skickade filen öppnar den i sitt CAD-program och gör *Spara som* eller *Exportera* → DXF. Det tar ett tiotal sekunder, varje CAD-program för skrivbordet klarar det, och filen kommer ur den programvara som skapade den i stället för ur en tredje parts gissning om den.

Om det inte går att fråga finns konverterare. Två saker att väga: konverteringen är där troheten går förlorad, och du laddar upp någon annans ritning till en tjänst du inte råder över. För ett hobbyprojekt går det bra. För kunduppdrag: fråga.

När du ber om en är det värt att ange en version. **DXF R12 är säkrast** — uråldrigt, stött överallt, och om ritningen är enkel 2D-geometri förlorar den inget som betyder något. Särskilt äldre maskinprogram trivs betydligt bättre med den.

## Två saker folk missförstår

**"DXF tappar information."** Bara i meningen att det inte bär proprietära AutoCAD-objekttyper. Linjer, bågar, cirklar, polylinjer, text, mått och lager tar sig igenom intakta. För 2D-ritningsarbete är förlusten oftast noll.

**"DXF är det gamla formatet."** Det har versionshanterats jämsides med DWG sedan 1982 och gör det fortfarande. Förvirringen kommer av att R12 används så brett som kompatibilitetsmål att man antar att DXF stannade där.

## Var det här verktyget står

[KulmanLab](https://kulmanlab.com/sv/) läser **DXF, inte DWG**, och det är värt att säga varför i stället för att behandla det som en förbiseelse: DXF är dokumenterat, så en implementation kan bli korrekt genom att läsa specifikationen. DWG skulle innebära att luta sig mot ett bakåtkonstruerat bibliotek, i en webbläsare, för ett format som ändras efter Autodesks tidtabell.

Har du en `.dwg` öppnar det här den inte. Har du en `.dxf` öppnar du den i en webbläsarflik utan att installera något: [app.kulmanlab.com](https://app.kulmanlab.com).

Det som skrivs tillbaka är geometri plus text — linjer, cirklar, bågar, ellipser, polylinjer, splines och text, tillsammans med lager och linjetyper. Skrafferingar, mått och hänvisningar hamnar för närvarande inte i den exporterade DXF-filen.

---

*Relaterat: [Import](/sv/docs/commands/import/) för exakt vad KulmanLab läser från en DXF, och [Export Manager](/sv/docs/commands/export-manager/) för vad varje exportformat bär med sig.*
