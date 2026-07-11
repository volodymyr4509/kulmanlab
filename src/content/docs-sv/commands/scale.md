---
title: "Scale-kommandot — Skala om entiteter jämnt kring en basspunkt i KulmanLab CAD"
description: "Scale-kommandot skalar om valda entiteter jämnt med en inskriven faktor kring en fast basspunkt. Faktorn matas alltid in via tangentbordet — det går inte att ställa in skalan genom att klicka. En faktor större än 1 förstorar; mindre än 1 förminskar. Alla entitetstyper stöds."
keywords: [CAD scale-kommando, skala om entiteter CAD, skala objekt CAD, enhetlig skalning CAD, skalfaktor CAD, förstora förminska CAD, kulmanlab]
group: edit
order: 5
---

# Scale

`scale`-kommandot skalar om valda entiteter jämnt kring en basspunkt. Alla avstånd från basspunkten multipliceras med skalfaktorn — en faktor på `2` fördubblar alla mått, `0.5` halverar dem. Faktorn matas alltid in genom att skriva; det går inte att klicka sig till en skala.

## Två sätt att starta

**Förval, sedan skalning** — välj entiteter först, aktivera sedan:

1. Välj en eller flera entiteter på ritytan.
2. Skriv `scale` i terminalen eller klicka på **Scale**-knappen i verktygsfältet.
3. **Klicka på basspunkten** — den fasta punkten som inte flyttas under skalningen. Eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
4. **Skriv skalfaktorn** och tryck **Enter**.

**Aktivera, välj sedan** — starta kommandot utan att något är valt:

1. Skriv `scale` eller klicka på verktygsfältsknappen.
2. **Välj objekt** — klicka för att växla, eller dra för att välja med ett område.
3. Tryck **Enter** eller **Space** för att bekräfta valet.
4. **Klicka på basspunkten** (koordinatinmatning tillgänglig), skriv sedan faktorn.

```
  Bas ●                 Bas ●
        [entitet]   →          [större entitet]
  faktor = 2 → avstånd från ● fördubblas
```

## Skriva in skalfaktorn

När basspunkten är placerad visar terminalen `enter scale factor:` och väntar på inmatning från tangentbordet:

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.` | Lägger till en siffra i faktorn |
| `-` | Negativ faktor (endast första tecknet — inverterar och skalar sedan) |
| `Backspace` | Tar bort senast skrivna tecken |
| `Enter` | Utför skalningen med den inskrivna faktorn |

Faktorn måste vara skild från noll. Vanliga värden:

| Faktor | Effekt |
|--------|--------|
| `2` | Fördubblar alla mått |
| `0.5` | Halverar alla mått |
| `1.5` | Ökar med 50 % |
| `-1` | Speglar över basspunkten (motsvarar en 180°-rotation) |

Det finns ingen levande förhandsvisning medan du skriver — det skalade resultatet visas först efter att du tryckt **Enter**.

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|-----|--------|
| `Enter` / `Space` | Bekräftar valet |
| `0`–`9`, `.`, `-` | Startar X-koordinatinmatning (basspunktsfasen), eller skalfaktor (faktorfasen) |
| `,` | Låser X och går vidare till Y-inmatning (basspunktsfasen) |
| `Backspace` | Tar bort senast skrivna tecken |
| `Enter` | Bekräftar koordinat eller utför skalningen |
| `Escape` | Avbryter och återställer |

## Val under kommandot

| Metod | Beteende |
|--------|-----------|
| **Klick** | Växlar entiteten under markören |
| **Dra höger** (strikt) | Lägger till entiteter som ligger helt inom rutan |
| **Dra vänster** (korsande) | Lägger till entiteter som skär rutan |
| **Enter** / **Space** | Bekräftar valet |

## Vad som skalas

Alla entitetstyper stöds. Varje entitet skalar sin geometri i förhållande till basspunkten:

| Entitet | Vad som ändras |
|--------|-------------|
| Line | Båda ändpunkterna skalas bort från basspunkten |
| Circle | Centrum skalas från basspunkten; radien multipliceras med faktorn |
| Arc | Centrum skalas; radien multipliceras med faktorn; vinklarna oförändrade |
| Ellipse | Centrum skalas; båda halvaxlarnas längd multipliceras med faktorn |
| Polyline / Rectangle | Varje hörnpunkt skalas från basspunkten |
| Text | Ankarpunkt skalas; höjden multipliceras med faktorn |
| Spline | Alla kontrollpunkter/anpassningspunkter skalas |
