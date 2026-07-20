---
title: Angle — Auna Kusurwar Ciki a Wata Kusurwa Ta Amfani da Tabo Uku
description: Umarnin Angle yana auna kusurwar ciki (0°–180°) a wata kusurwa da aka bayyana ta tabo uku da aka danna. Danna ƙarshen-farko, kusurwa, ƙarshen-biyu. Sakamako ana nuna shi a tashar umarni har zuwa lambobi 4 bayan digit.
keywords: [auna kusurwa CAD, kusurwar tabo uku, kusurwar ciki CAD, umarnin auna kusurwa, kusurwar vertex, kulmanlab]
group: measure
order: 2
---

# Angle

Umarnin `angle` yana auna kusurwar ciki a wata kusurwa da aka kafa daga sassa biyu na layi ta cikin tabo uku da aka danna. Sakamako — koyaushe tsakanin 0° da 180° — ana nuna shi a tashar umarni har zuwa lambobi 4 bayan digit. Yana ɗaya daga cikin umarnin awo guda uku — [Distance](../distance/) yana auna tsawon layi madaidaici, kuma [Area](../area/) yana auna fili da kewaye na polygon da aka rufe.

## Yanayin auna kusurwa

```
  ● tabo na farko (ƙarshen radiyo na farko)
   \
    \  preview na radiyo na farko
     \
      ● kusurwa (mataki na 3)
     /
    /  preview na radiyo na biyu (zuwa mai nuni)
   /
  ● tabo na uku  →  tashar umarni: "Angle: 45.0000°"
```

- **Tabo na farko** — ƙarshe ɗaya na kusurwar (mataki na 2).
- **Kusurwa** — kusurwar da ake auna kusurwar a kanta (mataki na 3).
- **Tabo na uku** — ƙarshen dayan na kusurwar (mataki na 4).

## Auna kusurwa

1. Rubuta `angle` a tashar umarni ko danna maɓallin kayan aiki na **Angle**.
2. **Danna tabo na farko** — ƙarshen radiyo ɗaya na kusurwar. Ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
3. **Danna kusurwar** — kusurwar da radiyoyin biyu suke haɗuwa a kai. Shigar da daidaitawa yana aiki a nan ma.
4. **Danna tabo na uku** — ƙarshen radiyo na biyu. Shigar da daidaitawa yana aiki a nan ma. Sanya wannan tabon yana buga sakamakon.
5. **Danna sake** (na zaɓi) don fara sabon awo daga wannan dannawar a matsayin sabon tabo na farko.

## Ka'idar kusurwar ciki

Umarnin yana lissafa kusurwar ta amfani da dot product na radiyoyin biyu daga kusurwar:

- **Koyaushe ciki**: sakamako shine ƙaramar kusurwa, tsakanin 0° da 180°.
- Tsarin da ka danna tabon ƙarshe ba ya shafar sakamako — matsayin kusurwar kaɗai yake da mahimmanci.
- Tabo masu haɗuwa a layi ɗaya (dukkan uku a layi ɗaya) suna dawo da 0° ko 180°.

## Sarƙar awo

Bayan sakamako ya bayyana, dannawa nan take yana farawa awo na gaba — tabon da aka danna ya zama sabon tabo na farko. Umarnin ba ya taɓa fita kai tsaye har sai ka danna `Escape`.

## Angle da Distance

| | Angle | Distance |
|---|-------|---------|
| Abin da yake aunawa | Kusurwar ciki a wata kusurwa | Tsawon layi madaidaici |
| Adadin dannawa | 3 | 2 |
| Tsarin sakamako | `45.0000°` | `12.3456` (unit) |
| Preview na canvas | Layi biyu daga kusurwa zuwa ƙarshen biyu | Layi daga tabo na farko zuwa mai nuni |
| Mafi kyau don | Buɗewar kusurwa tsakanin fasaloli biyu | Tsawon gibi ko sashi |

## Shigar da daidaitawa

Maimakon dannawa, rubuta madaidaicin matsayi ga kowane ɗaya daga cikin tabo uku:

1. Rubuta ƙimar X.
2. Danna `,` — tashar umarni tana nuna `[X], [Y{cursor}]`.
3. Rubuta ƙimar Y.
4. Danna **Enter** don tabbatarwa.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X |
| `,` | Kulle X ka koma shigar da Y |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da daidaitawar da aka rubuta |
| `Escape` | Soke ka koma mataki na 2 |

## Bayanan ƙari

- Ana nuna sakamako a **tashar umarni kaɗai** — babu abin da aka ƙara zuwa zanen.
- Daidaito koyaushe lambobi 4 bayan digit ne a digiri.
