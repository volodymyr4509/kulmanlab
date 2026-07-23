---
title: Align — Flyt, Rotér og Skalér Entiteter med Punktpar
description: Align-kommandoen omplacerer markerede entiteter ved hjælp af ét eller to par kilde-/målpunkter, og kombinerer flytning, rotation og valgfri ensartet skalering i én enkelt operation. Fungerer som en kombineret Move + Rotate + Scale.
keywords: [CAD align-kommando, justér entiteter CAD, flyt rotér skalér, punktparjustering, alternativ til desktop-CAD ALIGN, kulmanlab]
group: edit
order: 6
---

# Align

Kommandoen `align` omplacerer markerede entiteter ved hjælp af ét eller to par kilde-/målpunkter. Med ét par opfører den sig præcis som [Move](../move/) (kun flytning). Med to par roterer den også markeringen, så retningen fra kilde til kilde matcher retningen fra mål til mål, og kan valgfrit skalere den, så kildesegmentets længde matcher målsegmentets længde — flytning, rotation og skalering i én operation.

## To måder at starte på

**Markér først, justér derefter** — markér entiteter først, aktivér derefter:

1. Markér én eller flere entiteter på lærredet.
2. Skriv `align` i terminalen eller klik på **Align**-knappen i værktøjslinjen.
3. **Klik det første kildepunkt (S1)**, klik derefter **det første målpunkt (D1)**.
4. **Klik det andet kildepunkt (S2)**, eller tryk **Enter** for kun at anvende flytning nu.
5. **Klik det andet målpunkt (D2)**.
6. Besvar skaleringsspørgsmålet: tryk **Y** for at skalere, eller **N** / **Enter** for at bevare den originale størrelse.

**Aktivér, markér derefter** — start kommandoen uden noget markeret:

1. Skriv `align` eller klik på værktøjslinjeknappen.
2. **Markér objekter** — klik for at slå enkeltentiteter til/fra, eller træk for at markere efter område.
3. Tryk **Enter** eller **Space** for at bekræfte markeringen.
4. Fortsæt med S1 → D1 → S2 → D2 → skaleringsspørgsmål som ovenfor.

> Terminalen har kun brug for nok bogstaver til at være entydig — at skrive `al` og trykke **Enter** aktiverer Align direkte, da ingen anden kommando starter med de to bogstaver.

## Anatomien af en justering

```
  Kildepunkter (på entiteterne):        Målpunkter:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Resultat: markeringen flyttes så S1 lander på D1, roteres
  derefter omkring D1 så retningen S1→S2 matcher retningen
  D1→D2 — og, hvis du vælger at skalere, ændres størrelsen
  så |S1S2| bliver |D1D2|.
```

En levende spøgelsesforhåndsvisning følger markøren ved hvert trin: en flytteforhåndsvisning mens D1 placeres, derefter en roteret (stiplet) forhåndsvisning når D2 positioneres.

## Etpunktsjustering (kun flytning)

Efter at D1 er placeret, tryk **Enter** i stedet for at klikke et andet kildepunkt. Markeringen flyttes med vektoren S1→D1 — ingen rotation eller skalering — identisk med en [Move](../move/), der bruger S1 som basispunkt og D1 som mål.

## Topunktsjustering (flytning + rotation + valgfri skalering)

Når både S2 og D2 er placeret:

- **Rotationsvinkel** — forskellen mellem målretningen (`D1 → D2`) og kilderetningen (`S1 → S2`).
- **Skaleringsspørgsmål** — `scale objects to alignment points? [Yes/No] <N>` vises, med **No** som standard:
  - Tryk **Y** for også at skalere markeringen ensartet omkring D1, så afstanden `S1–S2` bliver afstanden `D1–D2`.
  - Tryk **N** eller **Enter** for at bevare den originale størrelse — kun flytning og rotation anvendes.

At trykke en tast ved skaleringsspørgsmålet anvender justeringen med det samme — der er ikke et separat bekræftelsestrin efter at have valgt Yes eller No.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekræft markering og gå videre til S1-fasen |
| `Enter` (ved S2-trinnet) | Spring rotation over — anvend kun flytning med S1 og D1 |
| `Y` | Anvend justeringen med skalering |
| `N` / `Enter` (ved skaleringsspørgsmålet) | Anvend justeringen uden skalering |
| `Escape` | Mens du vælger punkter: kassér dem og vend tilbage til markeringsfasen; med intet markeret: annullér kommandoen |

## Markering under kommandoen

Når kommandoen starter i markeringsfasen:

| Metode | Adfærd |
|--------|-----------|
| **Klik** | Slår entiteten under markøren til/fra i markeringen |
| **Træk mod højre** (streng) | Tilføjer entiteter helt inde i boksen |
| **Træk mod venstre** (krydsning) | Tilføjer entiteter der krydser boksens kant |
| **Enter** / **Space** | Bekræfter markeringen og går videre til S1-fasen |

## Efter justeringen

De justerede entiteter forbliver markeret på deres nye position, og kommandoen afsluttes automatisk — kør **Align** igen, eller skift til [Move](../move/), [Rotate](../rotate/) eller [Scale](../scale/) uden at markere igen.

## Align vs Move

| | Align | Move |
|---|-------|------|
| Punktpar | 1 (kun flytning) eller 2 (flytning + rotation + skalering) | 1 (kun flytning) |
| Rotation | Ja, med et andet punktpar | Nej |
| Skalering | Valgfrit, med et andet punktpar | Nej |
| Bedst til | Tilpasning af én form til en anden ved hjælp af referencepunkter | Simpel omplacering |

## Understøttede entiteter

Align fungerer på alle entitetstyper der understøttes af Move, Rotate og Scale — de samme operationer `translate`, `rotate` og `scale`, som disse kommandoer bruger, anvendes i rækkefølge, så intet udelukkes.
