---
title: Distance — Auna Nisan Layi Madaidaici Tsakanin Tabo Biyu
description: Umarnin Distance yana auna nisan Euclidean tsakanin tabo biyu da aka danna kuma yana nuna sakamako har zuwa lambobi 4 bayan digit. Danna sake bayan sakamakon don sarƙar sabon awo daga tabon ƙarshe.
keywords: [auna nisa CAD, umarnin distance, awo na tabo-zuwa-tabo, nisan layi madaidaici, awo na CAD kulmanlab]
group: measure
order: 1
---

# Distance

Umarnin `distance` yana auna nisan layi madaidaici (Euclidean) tsakanin tabo biyu da aka danna kuma yana buga sakamako a tashar umarni har zuwa lambobi 4 bayan digit. Yana ɗaya daga cikin umarnin awo guda uku — [Angle](../angle/) yana auna buɗewar kusurwa a wata kusurwa, kuma [Area](../area/) yana auna fili da kewaye na polygon da aka rufe.

## Yanayin auna nisa

```
  ● tabo na farko
   \
    \  layin preview (mai rai)
     \
      ● tabo na biyu    →  tashar umarni: "Distance: 12.3456"
```

- **Tabo na farko** — asalin awo.
- **Tabo na biyu** — ƙarshe; sanya shi yana buga sakamako nan take.
- **Sakamako** — ana nuna shi a tashar umarni, ba a sanya shi a kan canvas ba.

## Auna nisa

1. Rubuta `distance` a tashar umarni ko danna maɓallin kayan aiki na **Distance**.
2. **Danna tabo na farko**, ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
3. **Danna tabo na biyu** — nisan da aka aunata yana bayyana a tashar umarni. Shigar da daidaitawa yana aiki a nan ma.
4. **Danna sake** (na zaɓi) don fara sabon awo. Umarnin yana ci gaba da zama a aiki.

Danna `Escape` a kowane lokaci don sake saita zuwa mataki na 2.

## Sarƙar awo

Bayan sakamako ya bayyana, dannawa nan take yana farawa awo na gaba — tabon da aka danna ya zama sabon tabo na farko. Wannan yana barka ka auna jerin nisa ba tare da sake kunna umarnin ba.

## Distance da Angle

| | Distance | Angle |
|---|---------|-------|
| Abin da yake aunawa | Tsawon layi madaidaici | Kusurwar ciki a wata kusurwa |
| Adadin dannawa | 2 | 3 |
| Tsarin sakamako | `12.3456` (unit) | `45.0000°` |
| Preview na canvas | Layi daga tabo na farko zuwa mai nuni | Layi biyu daga kusurwa zuwa mai nuni |
| Mafi kyau don | Tsawon gibi ko sashi | Buɗewar kusurwa tsakanin fasaloli biyu |

## Shigar da daidaitawa

Maimakon dannawa, rubuta madaidaicin matsayi ga kowace tabo:

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
- Ana bayyana sakamako a irin unit ɗin kamar kanana coordinates na zane (babu canjin unit).
- Daidaito koyaushe lambobi 4 bayan digit.
