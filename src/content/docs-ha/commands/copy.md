---
title: Copy — Kwafi Abubuwa zuwa Sabon Matsayi
description: Umarnin Copy yana ƙirƙirar kwafi masu motsawa na abubuwan da aka zaɓa yayin barin na asali a wurinsu. Yana goyon bayan zaɓi tukuna, kulle-kusurwa, da shigar da nisa madaidaici. Ana sanya kwafi kuma umarnin yana fita; na asali basu canzawa.
keywords: [umarnin copy CAD, kwafin abubuwa CAD, kwafin abubuwa CAD, kwafin geometry CAD, kulle-kusurwa copy, nisa madaidaici copy, kulmanlab]
group: edit
order: 2
---

# Copy

Umarnin `copy` yana ƙirƙirar kwafi masu motsawa na abubuwan da aka zaɓa kuma yana sanya su a nisa daga tabon tushe zuwa manufa — na asali suna ci gaba da zama daidai inda suke. Wannan shine babban bambanci ɗaya daga [Move](../move/): Copy yana ƙara sabbin abubuwa zuwa zanen; Move yana sake matsayin waɗanda ke akwai.

## Hanyoyi biyu na farawa

**Zaɓi tukuna, sannan kwafi** — zaɓi abubuwa tukuna, sannan kunna:

1. Zaɓi wani abu ɗaya ko fiye a kan canvas.
2. Rubuta `copy` a tashar umarni ko danna maɓallin kayan aiki na **Copy**.
3. **Danna tabon tushe**, ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
4. **Danna manufa** — kwafi suna bayyana a nisan tushe→manufa. Shigar da daidaitawa yana aiki a nan ma.

**Kunna, sannan zaɓi** — fara umarnin ba tare da zaɓi ba:

1. Rubuta `copy` ko danna maɓallin kayan aiki.
2. **Zaɓi abubuwa** — danna don canza zaɓi na kowane abu, ko ja don zaɓi ta yanki.
3. Danna **Enter** ko **Space** don tabbatar da zaɓi.
4. **Danna tabon tushe**, sannan **danna manufa** (shigar da daidaitawa ana samu a matakan biyu).

```
  Kafin:                 Bayan:
  [abu A]                [abu A]  ← na asali ba su canzawa
  [abu B]                [abu B]
                         [kwafin A] ← sabbin abubuwa
                         [kwafin B]
```

Preview mai fatalwa na kwafin yana bin mai nuni daga tabon tushe zuwa manufa.

## Shigar da daidaitawa

A mataki na tabon tushe ko manufa, rubuta madaidaicin matsayi maimakon dannawa:

1. Rubuta ƙimar X.
2. Danna `,` — tashar umarni tana nuna `[X], [Y{cursor}]`.
3. Rubuta ƙimar Y.
4. Danna **Enter** don tabbatarwa.

## Kulle-kusurwa da nisa madaidaici

Bayan an saita tabon tushe, umarnin yana snap zuwa axes na 45° (0°, 45°, 90°, 135°, …) idan mai nuni ya kai nisa da ya isa kuma kusa da axis. Yayin an kulle, rubuta nisa ka danna **Enter** don sanya kwafi a wannan nisa daidai.

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.` | Ƙara zuwa ƙimar nisan |
| `-` | Nisa mara kyau — yana juya shugabanci a kan axis (haruf na farko kaɗai) |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Sanya kwafi a nisan da aka rubuta |

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `Enter` / `Space` | Tabbatar da zaɓi ka ci gaba zuwa mataki na tabon tushe |
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X, ko nisa yayin kulle-kusurwa |
| `,` | Kulle X ka koma shigar da Y |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da daidaitawa ko yin kwafi a nisan da aka rubuta |
| `Escape` | Soke ka sake saita |

## Zaɓi a lokacin umarnin

| Hanya | Hali |
|--------|-----------|
| **Danna** | Yana canza zaɓi na abin da ke ƙarƙashin mai nuni |
| **Ja dama** (mai tsauri) | Yana ƙara abubuwan da suke cikakke cikin akwatin |
| **Ja hagu** (mai haɗuwa) | Yana ƙara abubuwan da suke taɓa gefen akwatin |
| **Enter** / **Space** | Yana tabbatar da zaɓi |

## Bayan kwafin

**Na asali suna ci gaba da zama zaɓaɓɓu** — ana ƙara sabbin kwafin zuwa zanen amma zaɓin ya wanke kuma umarnin yana fita. Don aiki da kwafin nan take, sake gudanar da Copy a kan zaɓin, ko fara sabon umarni.

## Copy da Move

| | Copy | Move |
|---|------|------|
| Na asali | Suna zama a wurinsu | An cire su daga matsayin asali |
| Adadin sakamako | Yana ƙaruwa da adadin abubuwan da aka kwafi | Ba ya canzawa |
| Bayan aiki | Na asali har yanzu zaɓaɓɓu | Abubuwan da aka motsa zaɓaɓɓu a sabon matsayi |
| Mafi kyau don | Maimaita geometry, layouts masu daidaici | Sake matsayin geometry |

## Abubuwan da ake goyon baya

Copy yana aiki akan kowane nauʼin abu. Dukkan abubuwa suna aiwatar da `translate(dx, dy)` a ciki don haka babu wanda aka bari.
