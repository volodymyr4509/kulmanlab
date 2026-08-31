---
title: "Sådan åbner du en DXF-fil uden AutoCAD"
description: "Har du fået en .dxf-fil, men mangler AutoCAD? Åbn den gratis i browseren uden installation — plus alternativer til computeren og hjælp til tomme tegninger."
keywords: [åbne DXF-fil, åbne DXF uden AutoCAD, gratis DXF-fremviser, se DXF online, åbne DXF i browseren, DXF viewer gratis, hvordan åbner man DXF, læse DXF-fil, DXF eller DWG, åbne DXF på Mac]
date: 2026-08-31
author: KulmanLab
tag: Guide
---

For at åbne en DXF-fil uden AutoCAD trækker du den ind i en CAD-editor, der kører i browseren — der er intet at installere og ingen konto at oprette. Gratis programmer til computeren som LibreCAD og QCAD åbner også DXF. Denne guide dækker begge veje, og hvad du gør, når tegningen åbner tom, bittelille eller uden tekst.

Vi udvikler et af værktøjerne nedenfor — [KulmanLab](https://kulmanlab.com/da/) — så betragt det afsnit som det partiske, og de begrænsninger der er listet der som den del, hvor vi var nødt til at være ærlige.

## Hvad en DXF-fil egentlig er

DXF står for *Drawing Exchange Format* (tegningsudvekslingsformat). Autodesk skabte det, så CAD-programmer kunne sende tegninger til hinanden, og det er bevidst åbent og tekstbaseret — du kan bogstavelig talt åbne en `.dxf` i en teksteditor og læse den.

Netop den åbenhed er grunden til, at du har valgmuligheder. DXF er ikke bundet til ét bestemt program, og snesevis af værktøjer kan læse det.

Det er også grunden til, at en DXF ikke er et billede. Den gemmer geometri — linjer, buer, cirkler, lag, målsætning — ikke pixels. At omdøbe den til `.jpg` får den ikke til at åbne i en billedfremviser.

## Mulighed 1: åbn den i browseren

Den hurtigste vej, for der er intet at hente og ingen tilmelding.

1. Gå til [app.kulmanlab.com](https://app.kulmanlab.com).
2. Træk din `.dxf`-fil direkte ind på tegnefladen — eller brug knappen **Import** (mappeikonet) i filpanelet.
3. Tegningen indlæses, og visningen tilpasses automatisk til den.

Din fil forlader aldrig computeren. KulmanLab kører udelukkende i browseren, så tegningen bliver læst lokalt i stedet for at blive uploadet til en server.

Derfra kan du panorere og zoome, slå lag til og fra, måle afstande og vinkler, redigere geometrien og eksportere til PDF, PNG, JPEG eller WebP, hvis du blot skal bruge noget printbart at sende videre.

**Hvad den læser fra en DXF:** linjer, cirkler, buer, ellipser, polylinjer, splines, tekst, mål, multihenvisninger og skraveringer, plus filens lag- og linjetypetabeller.

**Hvor den kommer til kort — læs dette, før du regner med den:**

- **Kun 2D.** En DXF med 3D-solider eller masker er den forkerte fil til dette værktøj.
- **Ingen blokke.** Blokreferencer (`INSERT`) behandles ikke, så en tegning bygget af gentagne bloksymboler kommer ind ufuldstændig.
- **DXF, ikke DWG.** Se afsnittet om DWG nedenfor.
- **Kun browsere på computer** — Chrome, Firefox, Safari og Edge. Der findes ingen mobilversion.
- **DXF-eksport indeholder kun geometri.** Redigerer du og eksporterer tilbage til DXF, udelades skraveringer, mål, henvisninger og tekst. Eksportér til det indbyggede JSON-format, hvis alt skal bevares, eller til PDF, hvis du bare skal dele.

Er noget af det afgørende for dig, er du bedre tjent med et af værktøjerne til computeren nedenfor.

## Mulighed 2: gratis programmer til computeren

Installationen er besværet værd, hvis du skal gøre det jævnligt, eller hvis din fil bruger funktioner, som et browserværktøj ikke klarer.

**LibreCAD** — gratis og open source, kun 2D, kører på Windows, macOS og Linux. Tættest på klassisk 2D-tegning og en solid DXF-editor.

**QCAD** — motoren, som LibreCAD voksede ud af. En gratis community-udgave plus en betalt Pro-version med ekstra funktioner.

**FreeCAD** — gratis og open source, rettet mod parametrisk 3D-modellering, men kan importere DXF. Overkill, hvis du bare vil se en 2D-tegning, og med en stejl læringskurve.

**Autodesk Viewer** — Autodesks egen gratis webfremviser. Kun visning, og den kræver login med en Autodesk-konto.

**Inkscape** — ikke CAD, men den importerer DXF og er et fornuftigt valg, hvis du blot skal se formerne eller konvertere dem til SVG.

## "Det er vel i virkeligheden en DWG?"

Meget ofte, ja. DXF og DWG er begge Autodesk-formater, og navnene bruges i flæng, men de er ikke det samme:

| | DXF | DWG |
|---|---|---|
| Format | Åbent, tekstbaseret | Proprietært, binært |
| Formål | Udveksling mellem programmer | AutoCADs eget format |
| Understøttelse andre steder | Bred | Begrænset og ofte ufuldkommen |

Tjek filens egentlige filendelse, før du går på jagt efter en fremviser. Er det `.dwg`, hjælper værktøjerne ovenfor for det meste ikke — heller ikke KulmanLab, der kun understøtter DXF.

Den pålidelige løsning er at få en DXF i stedet: den, der sendte filen, kan åbne den i sit CAD-program og eksportere eller *Gem som* DXF. Næsten alle CAD-programmer til computeren kan det, og det tager omkring ti sekunder. At konvertere DWG selv med en tredjepartskonverter er muligt, men mere tabsgivende — og du betror en andens tegning til et ukendt værktøj.

## Når tegningen åbner, men ser forkert ud

**Tegnefladen er tom.** Som regel ligger geometrien langt fra origo, så visningen peger ud i tomrummet. Brug en *tilpas*- eller *zoom udstrækning*-kommando for at hoppe hen til tegningen. Se også efter, om lag er slået fra — en tegning kan ankomme med de fleste lag frosne.

**Alt er mikroskopisk eller absurd stort.** DXF registrerer ikke sine enheder pålideligt. Den samme tegning kan være lavet i millimeter, centimeter, tommer eller fod, og filen siger ofte ikke hvilken. Mål noget, hvis virkelige størrelse du kender, og skalér ud fra det.

**Teksten mangler eller er skiftet ud.** Skrifttyper indlejres ikke i en DXF. Bruger tegningen en skrifttype, din maskine ikke har, falder teksten tilbage til en anden eller forsvinder. At indlæse den oprindelige skrifttype løser det.

**Dele af tegningen kom ikke med.** Noget i filen bruger en objekttype, dit værktøj ikke læser — typisk blokke, 3D-solider eller proprietære udvidelser skrevet af det program, der lavede den. Prøv et andet værktøj, før du konkluderer, at filen er ødelagt.

**Der åbner slet ikke noget.** Bekræft, at filen virkelig er en DXF: åbn den i en almindelig teksteditor. En ægte DXF begynder med læsbare ASCII-gruppekoder og sektionsnavne som `SECTION` og `HEADER`. Ser du binær støj, er det en DWG eller en binær DXF-variant.

## Hvad du skal vælge

**Skal du bare kigge, én gang?** Åbn den i browseren. At installere en hel CAD-pakke for at læse én fil, nogen har sendt, er en dårlig handel.

**Skal du måle, notere eller printe?** Browserværktøjer klarer det fint, og at printe til PDF i sand skala er som regel præcis det, folk vil have.

**Rigtigt tegnearbejde, gentagne gange?** Installér LibreCAD eller QCAD. Dedikeret software til computeren tjener dig bedre på længere sigt.

**Har du en DWG?** Bed afsenderen om en DXF. Det er hurtigere og sikrere end nogen konverteringsvej.

---

*Relateret: [Import](/da/docs/commands/import/) for hele listen over, hvad KulmanLab læser fra en DXF, [Export Manager](/da/docs/commands/export-manager/) for hvad hvert eksportformat rummer, og [Print Manager](/da/docs/commands/print-manager/) for PDF-output i sand fysisk skala.*
