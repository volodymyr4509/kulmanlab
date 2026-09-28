---
title: Teksteditor — Rich- en simple-modus in KulmanLab CAD
description: De teksteditor van KulmanLab CAD heeft twee modi — rich (opmaak per teken, meerdere regels, automatisch afbreken voor Text en Multileader) en simple (uniforme stijl, één regel voor maatvoeringsentiteiten). Een mode chip in de kopregel toont welke modus actief is.
keywords: [CAD teksteditor, MTEXT, vet cursief CAD, tekstopmaak CAD, meerregelige tekst CAD, automatisch afbreken CAD, rich teksteditor, simple teksteditor, maatvoeringstekst editor, aangepast lettertype CAD, ttf uploaden CAD, kulmanlab]
group: interface
order: 6
---

# Teksteditor

De teksteditor opent wanneer u een bewerkbare entiteit plaatst of erop dubbelklikt. Een kleine **mode chip** in de kopregel — **rich** (accentkleur) of **simple** (gedempt) — toont welke modus actief is voor de huidige entiteit.

## Editormodi

### Rich mode

Gebruikt door: **Text** (MTEXT-labels) en **Multileader**-annotaties.

| Functie | Gedrag |
|---------|-----------|
| Vet / Cursief / Onderstrepen / Doorhalen | Per teken (toegepast op selectie, of hele entiteit als er geen selectie is) |
| Lettertype en hoogte | Overschrijving per teken, of standaardwaarde voor de hele entiteit |
| Alignment (Left / Center / Right / Justify) | **Alleen tekst** — niet beschikbaar voor Multileader |
| `Enter` | Voegt een harde regelafbreking in |
| `Shift+←/→` | Breidt een tekstselectie uit of verkleint deze |
| `Home` / `End` | Spring naar begin / einde van de huidige harde regel |
| Automatisch afbreken | Ondersteund via de formaatgrepen voor de referentiebreedte |

### Simple mode

Gebruikt door: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

De editor wordt vooraf gevuld met het weergegeven label van de huidige maatvoering, zodat u de cursor kunt positioneren en de waarde direct kunt bewerken.

| Functie | Gedrag |
|---------|-----------|
| Vet / Cursief / Onderstrepen / Doorhalen / Lettertype / Hoogte | Beschikbaar — geldt voor het **gehele** label tegelijk |
| Opmaak per teken | Niet ondersteund |
| `Enter` | **Bevestigt** de waarde en sluit de editor (geen regelafbreking) |
| Meerdere regels | Niet ondersteund |
| Automatisch afbreken | Niet ondersteund |

## De editor openen

| Actie | Resultaat |
|--------|--------|
| `text`-commando → klik op positie | Maakt een nieuwe tekstentiteit en opent de editor (**rich**) |
| Dubbelklik op een bestaande **Text**-entiteit | Opent de editor opnieuw in **rich**-modus |
| Dubbelklik op een bestaande **Multileader** | Opent de editor in **rich**-modus |
| Dubbelklik op een **maatvoerings**entiteit | Opent de editor in **simple**-modus |
| `Escape` binnen de editor | Sluit de editor en behoudt alle wijzigingen |

## Werkbalk

De werkbalk zweeft boven het begrenzingsvak van de tekst en blijft verankerd aan de entiteit terwijl u pant of zoomt. Onderstaande sneltoetsen gebruiken **Ctrl** op Windows/Linux en **Cmd** op Mac — de tooltip van elke knop toont de juiste toets voor uw platform.

### Vet · Cursief · Onderstrepen · Doorhalen

| Knop | Sneltoets | Functie |
|--------|----------|--------------|
| **B** | `Ctrl+B` / `Cmd+B` | Vet in-/uitschakelen |
| *I* | `Ctrl+I` / `Cmd+I` | Cursief in-/uitschakelen |
| <u>U</u> | `Ctrl+U` / `Cmd+U` | Onderstrepen in-/uitschakelen |
| ~~S~~ | `Ctrl+Shift+X` / `Cmd+Shift+X` | Doorhalen in-/uitschakelen |

**Hoe het schakelen wordt toegepast:**

- **Met een tekstselectie** — de stijl wordt uitsluitend toegepast op de geselecteerde tekens.
- **Geen selectie, cursor in bestaande tekst** — schakelt de stijl voor de hele entiteit (alle segmenten).
- **Lege tekst of nieuwe entiteit** — de stijl wordt opgeslagen op het lege segment en toegepast op elk teken dat u vanaf dat moment typt.

De knop verschijnt gemarkeerd (actief) wanneer elk teken in de huidige selectie — of het teken direct links van de cursor — die stijl heeft ingesteld.

### Lettertype

De vervolgkeuzelijst groepeert de beschikbare lettertypen in **Default** (het ingebouwde schreefloze lettertype), **User** (uw eigen geüploade lettertypen, indien aanwezig), **Free** (een set gebundelde Google Fonts) en **System** (veelgebruikte besturingssysteemlettertypen zoals Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console en Impact).

- **Met een selectie** — overschrijft het lettertype alleen voor de geselecteerde tekens.
- **Geen selectie** — past het lettertype toe op de hele entiteit.

De vervolgkeuzelijst toont het lettertype van het teken links van de cursor wanneer er geen selectie is.

Niet beperkt tot de ingebouwde lijst — klik op de knop **Font Manager** in de werkbalk om uw eigen `.ttf`-bestand te uploaden en toe te voegen aan de groep **User**. Zie [Font Manager](../../commands/font-manager/) voor meer details.

### Hoogte

Het getalveld stelt de **kapitaalhoogte** (hoogte van een hoofdletter) in tekeneenheden in.

- **Met een selectie** — overschrijft de hoogte voor de geselecteerde tekens, onafhankelijk van de basishoogte van de entiteit.
- **Geen selectie** — wijzigt de basishoogte van de entiteit (geldt voor alle tekens zonder individuele hoogteoverschrijving).

Het veld toont de hoogte van het teken links van de cursor. Laat het leeg om de standaardwaarde van de entiteit te gebruiken.

### Uitlijning

Vier knoppen — **Align Left** (`Ctrl+Shift+L` / `Cmd+Shift+L`), **Align Center** (`Ctrl+Shift+E` / `Cmd+Shift+E`), **Align Right** (`Ctrl+Shift+R` / `Cmd+Shift+R`), **Justify** (`Ctrl+Shift+J` / `Cmd+Shift+J`) — stellen de alineauitlijning in. Alleen beschikbaar voor **Text**-entiteiten; Multileader- en maatvoeringslabels tonen deze knoppen niet.

- Door op een knop te klikken wordt elke regel opnieuw uitgelijnd binnen het bestaande begrenzingsvak van de entiteit — het verplaatst het invoegpunt niet en verandert het vak niet van grootte.
- Door op de al actieve knop te klikken wordt de overschrijving gewist, terug naar de kolom die wordt geïmpliceerd door het aanhechtingspunt van de entiteit.
- **Justify** rekt de spatiëring tussen woorden uit zodat elke regel de volledige regelbreedte vult.

## Cursor en navigatie

| Toets | Actie |
|-----|--------|
| `←` / `→` | Cursor één teken naar links of rechts verplaatsen |
| `Home` | Spring naar het begin van de huidige harde regel |
| `End` | Spring naar het einde van de huidige harde regel |
| `Shift` + `←` / `→` | Selectie uitbreiden of verkleinen |
| `Backspace` | Teken links verwijderen (of de selectie) |
| `Delete` | Teken rechts verwijderen (of de selectie) |
| `Enter` | Regelafbreking invoegen |
| `Escape` | Editor sluiten |

De cursorhoogte komt automatisch overeen met de kapitaalhoogte van het aangrenzende teken, inclusief het kleinere formaat dat wordt gebruikt voor subscript en superscript.

## Kopiëren, knippen en plakken

| Toets | Actie |
|-----|--------|
| `Ctrl+C` / `Cmd+C` | Geselecteerde tekst kopiëren |
| `Ctrl+X` / `Cmd+X` | Geselecteerde tekst knippen |
| `Ctrl+V` / `Cmd+V` | Plakken bij de cursor |

Kopiëren en knippen vereisen een actieve tekstselectie. Geplakte tekst is altijd platte tekst — deze neemt de opmaak (vet, cursief, lettertype, hoogte) over die al bij de cursor aanwezig is, in plaats van de opmaak te behouden die de tekst had bij het kopiëren.

In **rich mode** blijven regelafbrekingen in de geplakte tekst behouden. In **simple mode** worden regelafbrekingen verwijderd, omdat maatvoeringslabels uit één regel bestaan.

## Automatisch afbreken

Wanneer voor een tekstentiteit een **referentiebreedte** is ingesteld, worden lange regels op woordgrenzen zacht afgebroken om binnen die breedte te passen.

Om de referentiebreedte in te stellen of te wijzigen terwijl de entiteit is geselecteerd, sleept u de **formaatgrepen** — de dunne rechthoeken aan de linker- en rechterrand van het gestreepte begrenzingsvak. De inhoud wordt in realtime opnieuw ingedeeld terwijl u sleept.

Door de referentiebreedte op nul in te stellen (de grips naar elkaar toe slepen of de waarde in het eigenschappenpaneel verwijderen) wordt automatisch afbreken uitgeschakeld en kunnen regels vrij groeien.

## Meerregelige tekst

Druk op `Enter` om een harde regelafbreking in te voegen. Elke harde regel is onafhankelijk — `Home` en `End` navigeren alleen binnen de huidige harde regel.

Harde regelafbrekingen en opmaak per teken worden opgeslagen met behulp van het MTEXT-formaat en blijven behouden bij een volledige DXF-rondgang.

## DXF-compatibiliteit

Tekstlabels worden opgeslagen als **MTEXT**. Vet en cursief gebruiken `\f`, onderstrepen `\L`/`\l`, doorhalen `\K`/`\k` en hoogten per teken `\H`. Referentiebreedte, regelafstand, alinea-uitlijning, rotatie en aanhechting blijven ook behouden. Een kader wordt geëxporteerd met de MTEXT-kadervlag en een AutoCAD-compatibele randschaal. Zie [Tekststijl](../text-style/) en [Lettertypebeheer](../font-manager/).
