---
title: "DXF og DWG: hvad er forskellen?"
description: "DWG er AutoCADs eget format, DXF det åbne udvekslingsformat. Hvad der faktisk adskiller dem, hvilket du har brug for, og hvordan du får en DXF efter en DWG."
keywords: [DXF og DWG, forskel DXF DWG, DWG eller DXF, hvad er DWG, hvad er DXF, DWG til DXF, CAD-filformater, åbne DWG-fil, DXF-format, hvilket CAD-format]
date: 2026-09-02
author: KulmanLab
tag: Guide
---

DWG er AutoCADs eget filformat: binært, proprietært og udokumenteret af Autodesk. DXF er det udvekslingsformat, Autodesk offentliggør, så andre programmer kan læse de samme tegninger. Samme geometri, en anden beholder — og kun det ene af dem er tænkt til at give filer videre til folk uden for din egen software.

Netop det sidste punkt er hele den praktiske forskel, og det er det, der afgør, hvad du bør bede om.

## Den korte version

| | DXF | DWG |
|---|---|---|
| Står for | Drawing Exchange Format | Drawing |
| Offentliggjort specifikation | Ja, af Autodesk | Nej |
| Kodning | Tekst (findes også som binær variant) | Binært |
| Formål | Flytte tegninger mellem programmer | AutoCADs eget arbejdsformat |
| Filstørrelse | Større | Mindre |
| Læses af anden software | Meget bredt | Ujævnt, via bagudkonstruerede biblioteker |
| Bærer alt, hvad AutoCAD kan | Nej — en dokumenteret delmængde | Ja |

## Hvorfor der overhovedet findes to formater

Autodesk udsendte AutoCAD i 1982 med DWG som arbejdsformat. Det er bygget til ét programs bekvemmelighed: kompakt, binært og frit til at ændre sig, når AutoCAD har brug for det.

Det gør det til en dårlig ting at sende til nogen. Så Autodesk offentliggjorde også DXF — den samme tegning skrevet ud i en dokumenteret, læsbar form, som enhver udvikler kan bygge op imod. Åbn en `.dxf` i en teksteditor, og du ser gruppekoder og sektionsnavne i almindelig ASCII.

De to versioneres sammen. Hver AutoCAD-udgivelse bringer en DWG-revision og en tilsvarende DXF-revision; mærket `AC1032`, man af og til ser i et filhoved, betegner for eksempel generationen AutoCAD 2018.

DXF er altså hverken det ældre eller det ringere format. Det er den samme tegning, med vilje gjort læsbar.

## Hvad der faktisk adskiller dem i praksis

**Åbenhed.** Autodesk dokumenterer DXF og dokumenterer ikke DWG. Programmer, der læser DWG — og det er mange — læner sig op ad biblioteker, der er opstået ved at rekonstruere formatet. Det virker godt og er fuldt legitimt, men det betyder, at DWG-understøttelse halter efter nye udgaver og varierer fra program til program, mens DXF-understøttelse kan implementeres direkte ud fra specifikationen af hvem som helst.

**Størrelse.** En binær DWG er typisk væsentligt mindre end den samme tegning som ASCII-DXF. På et stort projekt betyder det noget; på en enkelt del gør det ikke.

**Troskab.** DWG rummer alt, hvad AutoCAD kan udtrykke, inklusive objekttyper, som andre programmer ikke har noget begreb om. DXF dækker en dokumenteret delmængde. Til almindelig 2D-tegning — linjer, buer, cirkler, polylinjer, tekst, mål, lag — er den delmængde alt, hvad du har brug for. For en model, der læner sig op ad proprietære AutoCAD-objekter, går noget tabt ved eksport til DXF.

**Understøttelsens bredde.** Praktisk talt alle CAD-, CAM- og vektorværktøjer læser DXF. Færre læser DWG, og dem, der gør, understøtter det ofte mindre fuldstændigt.

## Hvilket har du egentlig brug for?

**Nogen har sendt dig en fil, og du kan ikke åbne den.** Tjek først den rigtige filendelse. De fleste siger "DWG" om begge, og halvdelen af gangene ligger der en `.dxf` i dine downloads, som du allerede kunne åbne. Se [åbne en DXF uden AutoCAD](/da/blog/open-dxf-file-without-autocad/).

**Du sender til laserskæring, et CNC-værksted eller en producent.** DXF, stort set altid. Maskinsoftware og skæretjenester er bygget op om det, og 2D-skæregeometri ligger uden videre inden for den dokumenterede delmængde. Se [forberede en DXF til laserskæring](/da/blog/prepare-dxf-for-laser-cutting/).

**Du sender til en arkitekt eller ingeniør, der arbejder i AutoCAD.** Spørg. Mange foretrækker DWG, fordi det er, hvad deres arbejdsgang forventer, og ellers åbner de fint en DXF.

**Du arkiverer noget på lang sigt.** DXF. Et dokumenteret tekstformat vil om tyve år stadig kunne læses af nogen med specifikationen og en teksteditor. Det argument er hele grunden til, at udvekslingsformater findes.

**Nogen skal bare kigge på det.** Ingen af delene — send en PDF. Se [konvertere en DXF til PDF](/da/blog/convert-dxf-to-pdf/).

## At få en DXF, når du har fået en DWG

Den pålidelige vej er at bede om det. Den, der sendte filen, åbner den i sit CAD-program og laver *Gem som* eller *Eksportér* → DXF. Det tager en halv snes sekunder, ethvert CAD-program til computeren kan det, og filen kommer ud af den software, der skabte den, i stedet for en tredjeparts gæt på den.

Er det ikke en mulighed at spørge, findes der konvertere. To ting at veje: konverteringen er der, hvor troskaben går tabt, og du uploader en andens tegning til en tjeneste, du ikke har hånd i hanke med. Til et hobbyprojekt er det fint. Til kundearbejde: spørg.

Når du beder om en, er det værd at nævne en version. **DXF R12 er sikrest** — ældgammel, understøttet overalt, og hvis tegningen er almindelig 2D-geometri, går intet væsentligt tabt. Især ældre maskinsoftware har det meget bedre med den.

## To ting, folk tager fejl af

**"DXF er tabsgivende."** Kun i den forstand, at det ikke bærer proprietære AutoCAD-objekttyper. Linjer, buer, cirkler, polylinjer, tekst, mål og lag kommer uskadte igennem. Til 2D-tegnearbejde er tabet som regel nul.

**"DXF er det gamle format."** Det er blevet versioneret side om side med DWG siden 1982 og er det stadig. Forvirringen kommer af, at R12 bruges så bredt som kompatibilitetsmål, at man antager, DXF stoppede der.

## Hvor dette værktøj står

[KulmanLab](https://kulmanlab.com/da/) læser **DXF, ikke DWG**, og det er værd at sige hvorfor i stedet for at behandle det som en forglemmelse: DXF er dokumenteret, så en implementering kan blive korrekt ved at læse specifikationen. DWG ville betyde at læne sig op ad et bagudkonstrueret bibliotek, i en browser, for et format der ændrer sig efter Autodesks tidsplan.

Har du en `.dwg`, åbner dette den ikke. Har du en `.dxf`, kan du åbne den i en browserfane uden at installere noget: [app.kulmanlab.com](https://app.kulmanlab.com).

Det, den skriver tilbage, er geometri plus tekst — linjer, cirkler, buer, ellipser, polylinjer, splines og tekst, sammen med lag og linjetyper. Skraveringer, mål og henvisninger havner i øjeblikket ikke i den eksporterede DXF.

---

*Relateret: [Import](/da/docs/commands/import/) for præcis hvad KulmanLab læser fra en DXF, og [Export Manager](/da/docs/commands/export-manager/) for hvad hvert eksportformat rummer.*
