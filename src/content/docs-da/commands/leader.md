---
title: Leader — Tegn Multileader-annotationer med Pilespids og Tekst
description: "Leader-kommandoen tegner en fire-fase multileader-annotation: pilespids, dogleg-vinkel, tekstposition og indtastet etiket. Tekstretningen justeres automatisk baseret på dogleg-position. Kun import i DXF — ledere skrives ikke ved gemning."
keywords: [CAD leader-kommando, multileader-annotation, leader CAD, pil-etiket-annotation, dogleg-leder, tekstretning CAD, kulmanlab]
group: markup
order: 1
---

# Leader

Kommandoen `leader` tegner en multileader-annotation i fire trin: en pilespids der rører et element, en lederlinje der bøjer ved en dogleg, et tekstanker og en indtastet etiket. Af alle annotationskommandoerne er Leader den eneste, der inkluderer en interaktiv tekstinput-fase med en blinkende markørforhåndsvisning.

## Anatomien af en multileader

```
  ◄── pilespids  (trin 2 — rører elementet)
      \
       \  lederlinje
        \
         ●──── dogleg (trin 3) ──── tekstanker (trin 4)
                                    Etikettekst  (trin 5)
```

- **Pilespids** — den spidse ende placeret ved det element, der annoteres.
- **Dogleg** — vinklen hvor lederlinjen bøjer mod teksten.
- **Tekstanker** — hvor etiketten positioneres. Tekst justeres automatisk til venstre eller højre.

## Tegne en leder

1. Skriv `leader` i terminalen eller klik på **Leader**-knappen i værktøjslinjen.
2. **Klik pilespidsen**, eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
3. **Klik doglegen** — bøjningen i lederlinjen. Vinklen låser til 45°-intervaller; skriv en længde og tryk **Enter** for præcis placering. Eller skriv `X,Y` for at angive en absolut koordinat.
4. **Klik tekstpositionen** — hvor etiketten forankres. Samme muligheder gælder: klik, vinkellås + længde, eller `X,Y`.
5. **Skriv etiketteksten** — forhåndsvisningen på lærredet opdateres live med en blinkende markør. Tryk **Enter** for at placere.

## Koordinatindtastning (alle punktfaser)

Ved ethvert punktplaceringstrin (spids, dogleg, tekstposition) kan du indtaste en eksakt koordinat i stedet for at klikke:

1. Skriv X-værdien (cifre, `.` eller `-`).
2. Tryk `,` — terminalen viser `[X], [Y{markør}]` og bekræfter, at X er låst.
3. Skriv Y-værdien.
4. Tryk **Enter** for at placere punktet.

## Vinkellås (trin 3 og 4)

Efter hvert placeret punkt fæstner kommandoen sig til 45°-akser, når markøren er langt nok væk. Mens låst:
- Forhåndsvisningen fæstner sig til aksen.
- Skriv en længde og tryk **Enter** for at placere det næste punkt i nøjagtigt den afstand.

Vinkellås og koordinatindtastning udelukker hinanden — når du skriver et ciffer uden et forudgående `,`, fortolker kommandoen det som en afstand (vinkellås skal være aktiv). For at indtaste en absolut koordinat i stedet, start med X-tallet efterfulgt af et komma.

## Redigere tekstetiketten

Mens du skriver etiketten i trin 5, kan du navigere og redigere teksten, før du placerer den:

| Tast | Handling |
|-----|--------|
| Ethvert skrivbart tegn | Indsæt ved markørpositionen |
| `←` / `→` | Flyt markøren til venstre eller højre |
| `Backspace` | Slet tegnet til venstre for markøren |
| `Delete` | Slet tegnet til højre for markøren |
| `Enter` | Placér lederen |

## Automatisk tekstretning

Tekstjusteringen tilpasser sig markørpositionen i forhold til doglegen:

| Markørposition | Tekstretning |
|-----------------|---------------|
| Til **højre** for doglegen | Venstre-til-højre fra tekstankeret |
| Til **venstre** for doglegen | Højre-til-venstre (forankret på højre side) |

Ingen manuel justering nødvendig — flyt markøren til den side, hvor du vil have etiketten, så justeres den korrekt.

## Tastaturreference

**Punktfaser (spids, dogleg, tekstposition)**

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Begynd at skrive X-koordinat (derefter `,` for at låse X og indtaste Y) |
| `,` | Bekræft X og gå til Y-indtastning |
| `0`–`9`, `.`, `-` | Byg afstand op mens vinkellåst |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft indtastet koordinat eller afstand |

**Tekstinput-fase**

| Tast | Handling |
|-----|--------|
| Skrivbart tegn | Indsæt ved markøren |
| `←` / `→` | Flyt markøren |
| `Backspace` | Slet til venstre |
| `Delete` | Slet til højre |
| `Enter` | Placér lederen |

| Tast | Handling |
|-----|--------|
| `Escape` | Annullér og nulstil til trin 2 |

## Redigere en eksisterende leder

**Dobbeltklik** en placeret multileader for at genåbne teksteditoren i **rig** tilstand. I rig tilstand kan du anvende fed, kursiv og per-tegn skrifttype- eller højdeoverstyringer, og indsætte linjeskift med `Enter`. Tryk **Escape** for at bekræfte og lukke.

Se [Tekstredigering — rig tilstand](../../interface/text-editor/#rich-mode) for den fulde reference.

## Tilføje og fjerne arme

- For at tilføje en ekstra pilespidsarm på en eksisterende leder: [Leader+](../leader-add/)
- For at fjerne en arm fra en leder der har to eller flere: [Leader−](../leader-remove/)

## DXF — kun import

**Ledere er kun import.** `MLEADER`-entiteter fra DXF-filer læses og vises korrekt, men ledere tegnet i editoren **skrives ikke**, når du gemmer en DXF-fil. Brug ledere til visuel annotation; undgå at stole på dem til rundtur-arbejdsgange.
