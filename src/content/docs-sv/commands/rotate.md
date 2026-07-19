---
title: "Rotate-kommandot — Rotera entiteter kring en basspunkt"
description: "Rotate-kommandot roterar valda entiteter kring en vald basspunkt. Vinkeln kan skrivas in exakt eller ställas in genom att klicka — markörens riktning från basspunkten till klicket avgör vinkeln. Positiva vinklar är moturs i DXF-koordinater."
keywords: [CAD rotate-kommando, rotera entiteter CAD, rotera objekt vinkel, moturs rotation CAD, inskriven vinkel rotation, kulmanlab]
group: edit
order: 3
---

# Rotate

`rotate`-kommandot roterar valda entiteter kring en basspunkt. Du anger rotationsvinkeln antingen genom att skriva ett tal i grader eller genom att klicka — vinkeln beräknas utifrån riktningen mellan basspunkten och klickpositionen.

## Två sätt att starta

**Förval, sedan rotation** — välj entiteter först, aktivera sedan:

1. Välj en eller flera entiteter på ritytan.
2. Skriv `rotate` i terminalen eller klicka på **Rotate**-knappen i verktygsfältet.
3. **Klicka på basspunkten** — rotationscentrum. Eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
4. **Skriv en vinkel och tryck Enter**, eller **klicka** för att ställa in vinkeln utifrån markörens riktning.

**Aktivera, välj sedan** — starta kommandot utan att något är valt:

1. Skriv `rotate` eller klicka på verktygsfältsknappen.
2. **Välj objekt** — klicka för att växla, eller dra för att välja med ett område.
3. Tryck **Enter** eller **Space** för att bekräfta valet.
4. **Klicka på basspunkten** (koordinatinmatning tillgänglig), ställ sedan in vinkeln.

```
  Före:              Efter (90° rotation kring ●):
                        ╔══╗
  ●  [entitet]   →   ● ║    ║
                        ╚══╝
```

En levande ghost-förhandsvisning av de roterade entiteterna följer markörens vinkel när basspunkten väl är satt.

## Ställa in vinkeln

**Inskriven vinkel** — skriv ett tal (i grader) när som helst efter att basspunkten är placerad. Förhandsvisningen fångas till den inskrivna vinkeln medan du fortsätter justera innan du trycker Enter.

**Klickad vinkel** — om inget inskrivet värde finns sätter ett klick vinkeln lika med `atan2(cursorY − baseY, cursorX − baseX)` — riktningen från basspunkten till klicket, i grader.

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.` | Lägger till en siffra i vinkelvärdet |
| `-` | Negativ vinkel (endast första tecknet) |
| `Backspace` | Tar bort senast skrivna tecken |
| `Enter` | Utför rotationen med den inskrivna vinkeln |

## Vinkelriktning

Vinklar följer **DXF-konventionen**:

- **Positiva** värden roterar **moturs** i ritningskoordinater (Y-upp).
- På skärmen, där Y-axeln är omvänd (Y-ner), ser positiva vinklar ut att gå **medurs**.

Vanliga värden: `90` = kvartsvarv, `180` = halvvarv, `-90` = motsatt kvartsvarv.

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|-----|--------|
| `Enter` / `Space` | Bekräftar valet |
| `0`–`9`, `.`, `-` | Startar X-koordinatinmatning (basspunktsfasen), eller vinkelvärde (vinkelfasen) |
| `,` | Låser X och går vidare till Y-inmatning (basspunktsfasen) |
| `Backspace` | Tar bort senast skrivna tecken |
| `Enter` | Bekräftar koordinat eller utför rotationen |
| `Escape` | Avbryter och återställer |

## Val under kommandot

| Metod | Beteende |
|--------|-----------|
| **Klick** | Växlar entiteten under markören |
| **Dra höger** (strikt) | Lägger till entiteter som ligger helt inom rutan |
| **Dra vänster** (korsande) | Lägger till entiteter som skär rutan |
| **Enter** / **Space** | Bekräftar valet |

## Entiteter som stöds

Rotate fungerar på alla entitetstyper. Varje entitets geometri roteras kring basspunkten — till exempel flyttar en Circle sitt centrum medan radien förblir densamma; en Arc flyttar sitt centrum och förskjuter sina start- och slutvinklar med rotationsbeloppet; en Text-entitet flyttar sin ankarpunkt och lägger till vinkeln till sin egenskap Rotation Degree.
