---
title: Scale — Canza Girman Abubuwa Iri Ɗaya a Kewayen Tabon Tushe
description: Umarnin Scale yana canza girman abubuwan da aka zaɓa iri ɗaya da abin da aka rubuta a kewayen tabon tushe kwaɓe. Ana koyaushe shigar da abin ta madannai — babu danna-don-saita-girma. Abin fiye da 1 yana ƙaruwa; ƙasa da 1 yana raguwa. Ana goyon bayan kowane nauʼin abu.
keywords: [umarnin scale CAD, canza girman abubuwa CAD, canza girman abubuwa CAD, girma iri ɗaya CAD, abin girma CAD, ƙaruwa raguwa CAD, kulmanlab]
group: edit
order: 5
---

# Scale

Umarnin `scale` yana canza girman abubuwan da aka zaɓa iri ɗaya a kewayen tabon tushe. Ana ninka dukkan nisa daga tabon tushe da abin girma — abin `2` yana ninka dukkan girma-girma sau biyu, `0.5` yana rabe su. Ana koyaushe shigar da abin ta rubutu; babu danna-don-saita-girma.

## Hanyoyi biyu na farawa

**Zaɓi tukuna, sannan canza girma** — zaɓi abubuwa tukuna, sannan kunna:

1. Zaɓi wani abu ɗaya ko fiye a kan canvas.
2. Rubuta `scale` a tashar umarni ko danna maɓallin kayan aiki na **Scale**.
3. **Danna tabon tushe** — tabon tsayayye da ba ya motsawa yayin canza girma. Ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
4. **Rubuta abin girma** ka danna **Enter**.

**Kunna, sannan zaɓi** — fara umarnin ba tare da zaɓi ba:

1. Rubuta `scale` ko danna maɓallin kayan aiki.
2. **Zaɓi abubuwa** — danna don canza zaɓi, ko ja don zaɓi ta yanki.
3. Danna **Enter** ko **Space** don tabbatar da zaɓi.
4. **Danna tabon tushe** (shigar da daidaitawa ana samu), sannan rubuta abin.

```
  Tushe ●                Tushe ●
        [abu]   →          [abu mafi girma]
  abin = 2 → nisa daga ● an ninka sau biyu
```

## Rubuta abin girma

Bayan an sanya tabon tushe tashar umarni tana nuna `enter scale factor:` kuma tana jira shigarwa ta madannai:

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.` | Ƙara lamba zuwa abin |
| `-` | Abin mara kyau (haruf na farko kaɗai — yana juyawa sannan yana canza girma) |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Yi amfani da girma a abin da aka rubuta |

Abin dole ne ya kasance ba sifili ba. Ƙima gama gari:

| Abin | Sakamako |
|--------|--------|
| `2` | Yana ninka dukkan girma-girma sau biyu |
| `0.5` | Yana rabe dukkan girma-girma |
| `1.5` | Yana ƙaruwa da 50% |
| `-1` | Yana yin madubi a kan tabon tushe (daidai da juyawa na 180°) |

Babu preview mai rai yayin rubutu — sakamako na girma yana bayyana ne kawai bayan an danna **Enter**.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `Enter` / `Space` | Tabbatar da zaɓi |
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X (mataki na tabon tushe), ko abin girma (mataki na abin) |
| `,` | Kulle X ka koma shigar da Y (mataki na tabon tushe) |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da daidaitawa ko yin amfani da girma |
| `Escape` | Soke ka sake saita |

## Zaɓi a lokacin umarnin

| Hanya | Hali |
|--------|-----------|
| **Danna** | Yana canza zaɓi na abin da ke ƙarƙashin mai nuni |
| **Ja dama** (mai tsauri) | Yana ƙara abubuwan da suke cikakke cikin akwatin |
| **Ja hagu** (mai haɗuwa) | Yana ƙara abubuwan da suke taɓa akwatin |
| **Enter** / **Space** | Yana tabbatar da zaɓi |

## Abin da ake canza girman

Ana goyon bayan dukkan nauʼukan abu. Kowane abu yana canza girman geometry ɗinsa dangane da tabon tushe:

| Abu | Abin da ke canzawa |
|--------|-------------|
| Line | Ƙarshe biyun an canza girmansu daga tabon tushe |
| Circle | Tsakiya an canza girmanta daga tabon tushe; radius an ninka shi da abin |
| Arc | Tsakiya an canza girmanta; radius an ninka shi da abin; kusurwoyi basu canzawa |
| Ellipse | Tsakiya an canza girmanta; tsawon semi-axis biyu an ninka su da abin |
| Polyline / Rectangle | Kowace vertex an canza girmanta daga tabon tushe |
| Text | Tabon anchor an canza girmansa; tsayin an ninka shi da abin |
| Spline | Dukkan control vertices / fit points an canza girmansu |
