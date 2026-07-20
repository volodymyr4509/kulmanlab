---
title: Mirror — Yin Madubi na Abubuwa a Kan Axis mai Tabo Biyu
description: Umarnin Mirror yana yin madubi na abubuwan da aka zaɓa a kan layin madubi wanda aka bayyana da dannawa biyu. Ana koyaushe riƙe na asali — Mirror yana ƙirƙirar sabbin kwafi masu madubi. Axis ɗin madubi na iya kasancewa a kowace kusurwa kuma yana snap zuwa matakan 45°.
keywords: [umarnin mirror CAD, madubin abubuwa CAD, madubi na daidaici CAD, juyawa abubuwa CAD, axis na madubi CAD, kulmanlab]
group: edit
order: 4
---

# Mirror

Umarnin `mirror` yana ƙirƙirar kwafi masu madubi na abubuwan da aka zaɓa waɗanda aka madubantar a kan axis mai tabo biyu. Ana koyaushe **riƙe na asali** — ba kamar [Move](../move/) ko [Rotate](../rotate/) ba, Mirror ba ya taɓa gyara abubuwan da ke akwai; yana ƙara sababbi kaɗai.

## Hanyoyi biyu na farawa

**Zaɓi tukuna, sannan yi madubi** — zaɓi abubuwa tukuna, sannan kunna:

1. Zaɓi wani abu ɗaya ko fiye a kan canvas.
2. Rubuta `mirror` a tashar umarni ko danna maɓallin kayan aiki na **Mirror**.
3. **Danna tabo na farko** na axis na madubi, ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
4. **Danna tabo na biyu** — ana sanya kwafi masu madubi kuma umarnin yana fita. Shigar da daidaitawa yana aiki a nan ma.

**Kunna, sannan zaɓi** — fara umarnin ba tare da zaɓi ba:

1. Rubuta `mirror` ko danna maɓallin kayan aiki.
2. **Zaɓi abubuwa** — danna don canza zaɓi, ko ja don zaɓi ta yanki.
3. Danna **Enter** ko **Space** don tabbatar da zaɓi.
4. **Danna tabo na farko**, sannan **danna tabo na biyu** na axis na madubi (shigar da daidaitawa ana samu a matakan biyu).

```
  Asali:              Axis na madubi:      Sakamako:
                     |
  [abu A]      →    |    →    [abu A] + [A na madubi]
                     |
```

Preview mai rai na kwafin madubi yana bin mai nuni yayin da kake sanya tabon axis na biyu.

## Axis na madubi

Axis layi ne mara ƙarshe ta tabo biyun da aka danna. Zai iya kasancewa a kowace kusurwa:

- Motsa mai nuni kusa da **axis na snap na 45°** (0°, 45°, 90°, 135°, …) kuma axis yana kulle zuwa wannan kusurwar — mai amfani ga madubantar a kwance, a tsaye, ko a diagonal masu tsafta.
- Danna nesa da yankin snap ga axis mai kusurwa kyauta.

## Shigar da daidaitawa

A kowane mataki na tabon axis, rubuta madaidaicin matsayi maimakon dannawa:

1. Rubuta ƙimar X.
2. Danna `,` — tashar umarni tana nuna `[X], [Y{cursor}]`.
3. Rubuta ƙimar Y.
4. Danna **Enter** don tabbatarwa.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `Enter` / `Space` | Tabbatar da zaɓi |
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X |
| `,` | Kulle X ka koma shigar da Y |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da daidaitawar da aka rubuta |
| `Escape` | Soke ka sake saita |

## Zaɓi a lokacin umarnin

| Hanya | Hali |
|--------|-----------|
| **Danna** | Yana canza zaɓi na abin da ke ƙarƙashin mai nuni |
| **Ja dama** (mai tsauri) | Yana ƙara abubuwan da suke cikakke cikin akwatin |
| **Ja hagu** (mai haɗuwa) | Yana ƙara abubuwan da suke taɓa akwatin |
| **Enter** / **Space** | Yana tabbatar da zaɓi |

## Abin da ake madubantarwa

Ana goyon bayan kowane nauʼin abu. Ana madubantar geometry ta hanyar lissafi a kan axis:

| Abu | Abin da ke canzawa |
|--------|-------------|
| Line | Ƙarshe biyun an madubantar su |
| Circle | An madubantar tsakiya; radius ba ya canzawa |
| Arc | An madubantar tsakiya; ana sake lissafa kusurwar farko da ƙarshe a kan axis |
| Ellipse | An madubantar tsakiya; shugabancin axis babba an juya shi a kan axis |
| Polyline / Rectangle | Kowace vertex an madubantar ta |
| Text | An madubantar tabon anchor; mahrukin rubutu **ba** a juye shi ba |
| Spline | Dukkan control vertices / fit points an madubantar su |

## Mirror da Copy

| | Mirror | Copy |
|---|--------|------|
| Na asali | Koyaushe riƙe | Koyaushe riƙe |
| Matsayin sabon abu | An madubantar a kan axis | An motsa da vector na motsi |
| Mafi kyau don | Ƙira masu daidaici, fasaloli biyu-biyu | Maimaita geometry a kowace shugabanci |
