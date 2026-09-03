---
title: "DXF og DWG: hva er forskjellen?"
description: "DWG er AutoCADs eget format, DXF det åpne utvekslingsformatet. Hva som faktisk skiller dem, hvilket du trenger, og hvordan du får en DXF etter en DWG."
keywords: [DXF og DWG, forskjell DXF DWG, DWG eller DXF, hva er DWG, hva er DXF, DWG til DXF, CAD-filformater, åpne DWG-fil, DXF-format, hvilket CAD-format]
date: 2026-09-02
author: KulmanLab
tag: Guide
---

DWG er AutoCADs eget filformat: binært, proprietært og udokumentert av Autodesk. DXF er utvekslingsformatet Autodesk publiserer slik at andre programmer kan lese de samme tegningene. Samme geometri, en annen beholder — og bare det ene av dem er ment for å gi filer videre til folk utenfor din egen programvare.

Nettopp det siste punktet er hele den praktiske forskjellen, og det er det som avgjør hva du bør be om.

## Kortversjonen

| | DXF | DWG |
|---|---|---|
| Står for | Drawing Exchange Format | Drawing |
| Publisert spesifikasjon | Ja, av Autodesk | Nei |
| Koding | Tekst (finnes også som binær variant) | Binært |
| Formål | Flytte tegninger mellom programmer | AutoCADs eget arbeidsformat |
| Filstørrelse | Større | Mindre |
| Leses av annen programvare | Svært bredt | Ujevnt, via bakoverkonstruerte biblioteker |
| Bærer alt AutoCAD kan | Nei — en dokumentert delmengde | Ja |

## Hvorfor det finnes to formater i det hele tatt

Autodesk lanserte AutoCAD i 1982 med DWG som arbeidsformat. Det er bygget for ett programs bekvemmelighet: kompakt, binært og fritt til å endres når AutoCAD trenger det.

Det gjør det til en dårlig ting å sende noen. Så Autodesk publiserte også DXF — den samme tegningen skrevet ut i en dokumentert, lesbar form som hvilken som helst utvikler kan bygge mot. Åpne en `.dxf` i et tekstredigeringsprogram, og du ser gruppekoder og seksjonsnavn i vanlig ASCII.

De to versjoneres sammen. Hver AutoCAD-utgivelse gir en DWG-revisjon og en tilsvarende DXF-revisjon; merket `AC1032` som av og til synes i et filhode, betegner for eksempel generasjonen AutoCAD 2018.

DXF er altså verken det eldre eller det dårligere formatet. Det er den samme tegningen, bevisst gjort lesbar.

## Hva som faktisk skiller dem i praksis

**Åpenhet.** Autodesk dokumenterer DXF og dokumenterer ikke DWG. Programmer som leser DWG — og de er mange — støtter seg på biblioteker som har oppstått ved å rekonstruere formatet. Det virker godt og er fullt legitimt, men det betyr at DWG-støtte henger etter nye utgaver og varierer mellom programmer, mens DXF-støtte kan implementeres direkte fra spesifikasjonen av hvem som helst.

**Størrelse.** En binær DWG er som regel betydelig mindre enn den samme tegningen som ASCII-DXF. På et stort prosjekt betyr det noe; på én enkelt del gjør det ikke det.

**Troskap.** DWG rommer alt AutoCAD kan uttrykke, inkludert objekttyper andre programmer ikke har noe begrep om. DXF dekker en dokumentert delmengde. For vanlig 2D-tegning — linjer, buer, sirkler, polylinjer, tekst, mål, lag — er den delmengden alt du trenger. For en modell som støtter seg på proprietære AutoCAD-objekter, går noe tapt ved eksport til DXF.

**Bredden i støtten.** Praktisk talt alle CAD-, CAM- og vektorverktøy leser DXF. Færre leser DWG, og de som gjør det, støtter det ofte mindre fullstendig.

## Hva trenger du egentlig?

**Noen sendte deg en fil og du får den ikke opp.** Sjekk først den virkelige filendelsen. De fleste sier «DWG» om begge, og halvparten av gangene ligger det en `.dxf` i nedlastingene som du allerede kunne åpne. Se [åpne en DXF uten AutoCAD](/no/blog/open-dxf-file-without-autocad/).

**Du sender til laserskjæring, et CNC-verksted eller en produsent.** DXF, praktisk talt alltid. Maskinprogramvare og skjæretjenester er bygget rundt det, og 2D-skjæregeometri ligger godt innenfor den dokumenterte delmengden. Se [forberede en DXF for laserskjæring](/no/blog/prepare-dxf-for-laser-cutting/).

**Du sender til en arkitekt eller ingeniør som jobber i AutoCAD.** Spør. Mange foretrekker DWG fordi det er det arbeidsflyten deres forventer, og ellers åpner de en DXF helt fint.

**Du arkiverer noe på lang sikt.** DXF. Et dokumentert tekstformat vil om tjue år fortsatt kunne leses av noen med spesifikasjonen og et tekstredigeringsprogram. Nettopp derfor finnes utvekslingsformater.

**Noen skal bare se på det.** Ingen av delene — send en PDF. Se [konvertere en DXF til PDF](/no/blog/convert-dxf-to-pdf/).

## Å få en DXF når du har fått en DWG

Den pålitelige veien er å be om det. Den som sendte filen åpner den i sitt eget CAD-program og gjør *Lagre som* eller *Eksporter* → DXF. Det tar et titalls sekunder, ethvert CAD-program for skrivebordet klarer det, og filen kommer ut av programvaren som laget den i stedet for en tredjeparts gjetning om den.

Er det ikke mulig å spørre, finnes det konverterere. To ting å veie: konverteringen er der troskapen går tapt, og du laster opp en annens tegning til en tjeneste du ikke rår over. For et hobbyprosjekt går det fint. For kundearbeid: spør.

Når du ber om en, er det verdt å nevne en versjon. **DXF R12 er tryggest** — eldgammelt, støttet overalt, og hvis tegningen er enkel 2D-geometri går ingenting av betydning tapt. Særlig eldre maskinprogramvare trives mye bedre med den.

## To ting folk tar feil om

**«DXF er tapsgivende.»** Bare i den forstand at det ikke bærer proprietære AutoCAD-objekttyper. Linjer, buer, sirkler, polylinjer, tekst, mål og lag kommer uskadd gjennom. For 2D-tegnearbeid er tapet som regel null.

**«DXF er det gamle formatet.»** Det har vært versjonert side om side med DWG siden 1982 og er det fortsatt. Forvirringen kommer av at R12 brukes så bredt som kompatibilitetsmål at folk antar DXF stoppet der.

## Hvor dette verktøyet står

[KulmanLab](https://kulmanlab.com/no/) leser **DXF, ikke DWG**, og det er verdt å si hvorfor i stedet for å behandle det som en forglemmelse: DXF er dokumentert, så en implementasjon kan bli riktig ved å lese spesifikasjonen. DWG ville bety å støtte seg på et bakoverkonstruert bibliotek, i en nettleser, for et format som endrer seg etter Autodesks timeplan.

Har du en `.dwg`, åpner ikke dette den. Har du en `.dxf`, åpner du den i en nettleserfane uten å installere noe: [app.kulmanlab.com](https://app.kulmanlab.com).

Det som skrives tilbake er geometri pluss tekst — linjer, sirkler, buer, ellipser, polylinjer, splines og tekst, sammen med lag og linjetyper. Skravering, mål og henvisninger havner foreløpig ikke i den eksporterte DXF-filen.

---

*Relatert: [Import](/no/docs/commands/import/) for nøyaktig hva KulmanLab leser fra en DXF, og [Export Manager](/no/docs/commands/export-manager/) for hva hvert eksportformat inneholder.*
