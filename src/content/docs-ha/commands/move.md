---
title: Move — Motsa Abubuwan da Aka Zaɓa ta Tabon Tushe
description: Umarnin Move yana motsa abu ɗaya ko fiye da aka zaɓa ta tabon tushe da manufa. Yana goyon bayan zaɓi tukuna, kulle-kusurwa, da shigar da nisa madaidaici. Bayan motsi, abubuwan suna ci gaba da zama zaɓaɓɓu a sabon matsayinsu. Ana goyon bayan kowane nauʼin abu.
keywords: [umarnin move CAD, motsa abubuwa CAD, motsa abubuwa CAD, kulle-kusurwa motsi, nisa madaidaici motsi, grip move CAD, kulmanlab]
group: edit
order: 1
---

# Move

Umarnin `move` yana motsa abubuwan da aka zaɓa daga tabon tushe zuwa tabon manufa. Motsi da aka yi amfani da shi ga kowane abu da aka zaɓa shine vector daga tushe zuwa manufa. Bayan motsi dukkan abubuwa suna ci gaba da zama zaɓaɓɓu a sabon matsayinsu, a shirye don ƙarin gyare-gyare.

## Hanyoyi biyu na farawa

**Zaɓi tukuna, sannan motsa** — zaɓi abubuwa tukuna, sannan kunna:

1. Zaɓi wani abu ɗaya ko fiye a kan canvas.
2. Rubuta `move` a tashar umarni ko danna maɓallin kayan aiki na **Move**.
3. **Danna tabon tushe**, ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
4. **Danna manufa** — dukkan abubuwan da aka zaɓa suna motsawa da vector na tushe→manufa. Shigar da daidaitawa yana aiki a nan ma.

**Kunna, sannan zaɓi** — fara umarnin ba tare da zaɓi ba:

1. Rubuta `move` ko danna maɓallin kayan aiki.
2. **Zaɓi abubuwa** — danna don canza zaɓi na abubuwa daban-daban, ko ja don zaɓi ta yanki.
3. Danna **Enter** ko **Space** don tabbatar da zaɓi.
4. **Danna tabon tushe**, sannan **danna manufa** (shigar da daidaitawa ana samu a matakan biyu).

```
  Kafin:                      Bayan:
  ● tushe                       → ● manufa
  [abu A]                      [abu A an motsa]
  [abu B]                      [abu B an motsa]
```

Preview mai fatalwa na dukkan abubuwan da aka zaɓa yana bin mai nuni daga tabon tushe zuwa manufa, yana nuna sakamako kafin ka danna.

## Shigar da daidaitawa

A mataki na tabon tushe ko manufa, rubuta madaidaicin matsayi maimakon dannawa:

1. Rubuta ƙimar X.
2. Danna `,` — tashar umarni tana nuna `[X], [Y{cursor}]`.
3. Rubuta ƙimar Y.
4. Danna **Enter** don tabbatarwa.

## Kulle-kusurwa da nisa madaidaici

Bayan an saita tabon tushe, umarnin yana kula da axis na snap na 45° (0°, 45°, 90°, 135°, …). Shugabancin yana **kulle** idan mai nuni ya kai nisa mai isa daga tushe kuma yana cikin fadi na grip ɗaya na axis. Yayin an kulle:

- Preview mai fatalwa yana snap zuwa axis.
- Rubuta nisa ka danna **Enter** don motsawa daidai wannan nisan a kan shugabancin da aka kulle.
- Danna yana kwabewa a kan axis, don haka manufa koyaushe tana kansa daidai.

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.` | Ƙara zuwa ƙimar nisan |
| `-` | Nisa mara kyau — yana juya shugabanci a kan axis (haruf na farko kaɗai) |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Yi amfani da motsi a nisan da aka rubuta |

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `Enter` / `Space` | Tabbatar da zaɓi ka ci gaba zuwa mataki na tabon tushe |
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X, ko nisa yayin kulle-kusurwa |
| `,` | Kulle X ka koma shigar da Y |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da daidaitawa ko yin amfani da motsi a nisan da aka rubuta |
| `Escape` | Soke ka sake saita |

## Kunna Move daga grip

Dannawa **grip na tsakiya** na [Line](../line/) da aka zaɓa yana kunna Move kai tsaye, tare da tsakiya an riga an saita shi a matsayin tabon tushe kuma mataki na motsi na aiki. Wannan shine hanya mafi sauri don sake matsayin layi ɗaya ba tare da wucewa mataki na zaɓi ba.

## Zaɓi a lokacin umarnin

Idan umarnin ya fara a mataki na zaɓi:

| Hanya | Hali |
|--------|-----------|
| **Danna** | Yana canza zaɓi na abin da ke ƙarƙashin mai nuni |
| **Ja dama** (mai tsauri) | Yana ƙara abubuwan da suke cikakke cikin akwatin |
| **Ja hagu** (mai haɗuwa) | Yana ƙara abubuwan da suke taɓa gefen akwatin |
| **Enter** / **Space** | Yana tabbatar da zaɓi ya matsa zuwa mataki na tabon tushe |

## Bayan motsi

Abubuwan da aka motsa suna ci gaba da zama zaɓaɓɓu a sabon matsayinsu. Wannan yana nufin za ka iya nan take:
- Sake gudanar da **Move** don matsar da su ƙari.
- Gudanar da [Copy](../copy/), [Rotate](../rotate/), ko [Scale](../scale/) ba tare da sake zaɓi ba.
- Danna **Delete** don cire su.

## Move da Copy

| | Move | Copy |
|---|------|------|
| Matsayin asali | An bar shi — abubuwa ba su can ba | An riƙe — na asali suna ci gaba da zama a wurinsu |
| Adadin sakamako | Adadi iri ɗaya na abubuwa | Wani saiti ƙari a kowace fasaha |
| Zaɓi bayan | Abubuwan da aka motsa zaɓaɓɓu a sabon matsayi | Abubuwan da aka kwafi zaɓaɓɓu a sabon matsayi |
| Mafi kyau don | Sake matsayin geometry | Kwafin geometry |

## Abubuwan da ake goyon baya

Move yana aiki akan kowane nauʼin abu: Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader, da sauransu. Dukkan abubuwa suna aiwatar da `translate(dx, dy)` don haka babu wanda aka bari.
