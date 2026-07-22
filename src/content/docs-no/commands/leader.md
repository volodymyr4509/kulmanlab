---
title: Leader — Tegn Multileader-annotasjoner med Pilspiss og Tekst
description: "Leader-kommandoen tegner en firefase multileader-annotasjon: pilspiss, dogleg-vinkel, tekstposisjon og inntastet etikett. Tekstretningen justeres automatisk basert på dogleg-posisjonen. Kun import i DXF — ledere skrives ikke ved lagring."
keywords: [CAD leader-kommando, multileader-annotasjon, leader CAD, pil-etikett-annotasjon, dogleg-leder, tekstretning CAD, kulmanlab]
group: markup
order: 1
---

# Leader

Kommandoen `leader` tegner en multileader-annotasjon i fire steg: en pilspiss som berører et element, en lederlinje som bøyer ved en dogleg, et tekstanker og en inntastet etikett. Av alle annotasjonskommandoene er Leader den eneste som inkluderer en interaktiv tekstinntastingsfase med en blinkende markørforhåndsvisning.

## Anatomien til en multileader

```
  ◄── pilspiss  (steg 2 — berører elementet)
      \
       \  lederlinje
        \
         ●──── dogleg (steg 3) ──── tekstanker (steg 4)
                                    Etikettekst  (steg 5)
```

- **Pilspiss** — den spisse enden plassert ved elementet som annoteres.
- **Dogleg** — vinkelen der lederlinjen bøyer mot teksten.
- **Tekstanker** — der etiketten posisjoneres. Teksten justeres automatisk til venstre eller høyre.

## Tegne en leder

1. Skriv `leader` i terminalen eller klikk på **Leader**-knappen i verktøylinjen.
2. **Klikk pilspissen**, eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
3. **Klikk doglegen** — bøyen i lederlinjen. Vinkelen låses til 45°-inkrementer; skriv en lengde og trykk **Enter** for presis plassering. Eller skriv `X,Y` for å angi en absolutt koordinat.
4. **Klikk tekstposisjonen** — der etiketten forankres. De samme alternativene gjelder: klikk, vinkellås + lengde, eller `X,Y`.
5. **Skriv etikettteksten** — forhåndsvisningen på lerretet oppdateres live med en blinkende markør. Trykk **Enter** for å plassere.

## Koordinatinntasting (alle punktfaser)

I hvert punktplasseringssteg (spiss, dogleg, tekstposisjon) kan du skrive inn en eksakt koordinat i stedet for å klikke:

1. Skriv X-verdien (sifre, `.` eller `-`).
2. Trykk `,` — terminalen viser `[X], [Y{markør}]` og bekrefter at X er låst.
3. Skriv Y-verdien.
4. Trykk **Enter** for å plassere punktet.

## Vinkellås (steg 3 og 4)

Etter hvert plassert punkt festes kommandoen til 45°-akser når markøren er langt nok unna. Mens låst:
- Forhåndsvisningen festes til aksen.
- Skriv en lengde og trykk **Enter** for å plassere det neste punktet i nøyaktig den avstanden.

Vinkellås og koordinatinntasting utelukker hverandre — når du skriver et siffer uten et forutgående `,`, tolker kommandoen det som en avstand (vinkellås må være aktiv). For å angi en absolutt koordinat i stedet, start med X-tallet etterfulgt av et komma.

## Redigere tekstetiketten

Mens du skriver etiketten i steg 5, kan du navigere og redigere teksten før du plasserer den:

| Tast | Handling |
|-----|--------|
| Ethvert utskrivbart tegn | Sett inn ved markørposisjonen |
| `←` / `→` | Flytt markøren til venstre eller høyre |
| `Backspace` | Slett tegnet til venstre for markøren |
| `Delete` | Slett tegnet til høyre for markøren |
| `Enter` | Plasser lederen |

## Automatisk tekstretning

Tekstjusteringen tilpasser seg markørposisjonen relativt til doglegen:

| Markørposisjon | Tekstretning |
|-----------------|---------------|
| Til **høyre** for doglegen | Venstre-til-høyre fra tekstankeret |
| Til **venstre** for doglegen | Høyre-til-venstre (forankret på høyre side) |

Ingen manuell justering nødvendig — flytt markøren til siden der du vil ha etiketten, så justeres den korrekt.

## Tastaturreferanse

**Punktfaser (spiss, dogleg, tekstposisjon)**

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Begynn å skrive X-koordinat (deretter `,` for å låse X og gå til Y) |
| `,` | Bekreft X og gå til Y-inntasting |
| `0`–`9`, `.`, `-` | Bygg opp avstand mens vinkellåst |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft inntastet koordinat eller avstand |

**Tekstinntastingsfase**

| Tast | Handling |
|-----|--------|
| Utskrivbart tegn | Sett inn ved markøren |
| `←` / `→` | Flytt markøren |
| `Backspace` | Slett til venstre |
| `Delete` | Slett til høyre |
| `Enter` | Plasser lederen |

| Tast | Handling |
|-----|--------|
| `Escape` | Avbryt og tilbakestill til steg 2 |

## Redigere en eksisterende leder

**Dobbeltklikk** en plassert multileader for å åpne teksteditoren på nytt i **rik** modus. I rik modus kan du bruke fet, kursiv og per-tegn skrift- eller høydeoverstyringer, og sette inn linjeskift med `Enter`. Trykk **Escape** for å bekrefte og lukke.

Se [Tekstredigering — rik modus](../../interface/text-editor/#rich-mode) for den fullstendige referansen.

## Legge til og fjerne armer

- For å legge til en ekstra pilspissarm på en eksisterende leder: [Leader+](../leader-add/)
- For å fjerne en arm fra en leder som har to eller flere: [Leader−](../leader-remove/)

## DXF — kun import

**Ledere er kun import.** `MLEADER`-entiteter fra DXF-filer leses og vises korrekt, men ledere tegnet i editoren **skrives ikke** ved lagring av en DXF-fil. Bruk ledere til visuell annotasjon; ikke stol på dem for rundtur-arbeidsflyter.
