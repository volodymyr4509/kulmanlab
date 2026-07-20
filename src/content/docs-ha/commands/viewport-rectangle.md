---
title: ViewportRectangle — Ƙirƙiri Viewport a Layout
description: Umarnin ViewportRectangle yana ƙirƙirar viewport a layout na takarda ta zaɓen kusurwoyi biyu masu adawa. Viewport yana nuna abubuwan model space a girman tsoho na layout.
keywords: [murabbaʼi viewport, ƙirƙira viewport, viewport na layout, viewport na paper space, kulmanlab]
group: layouts
order: 1
---

# ViewportRectangle

Umarnin `ViewportRectangle` yana ƙirƙirar sabon viewport a layout na takarda mai aiki ta zaɓen kusurwoyi biyu masu adawa. Ana samuwa ne kawai a layout space.

## Ƙirƙirar viewport

1. Sauya zuwa layout na takarda ta amfani da lasifikar a ƙasan allo.
2. Rubuta `ViewportRectangle` a tashar umarni ko danna maɓallin kayan aiki na **Viewport Rectangle**.
3. **Danna kusurwa ta farko**, ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
4. **Danna kusurwa mai adawa** — ana sanya viewport nan take. Shigar da daidaitawa yana aiki a nan ma.

Sabon viewport yana nuna cikakken model a girman tsoho na layout. Yi amfani da gilashin gilma a cikin viewport don zoom, ko ja da maɓallin tsakiya don pan kallon model.

## Shigar da daidaitawa

A kowace kusurwa za ka iya rubuta daidaitawa madaidaici:

1. Rubuta ƙimar X.
2. Danna `,` — tashar umarni tana nuna `[X], [Y{cursor}]`.
3. Rubuta ƙimar Y.
4. Danna **Enter** don sanya tabon.

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X |
| `,` | Kulle X ka koma shigar da Y |
| `Enter` | Tabbatar da daidaitawar da aka rubuta |
| `Escape` | Soke |

## Gyara viewport

Bayan sanya viewport, danna ta don zaɓen ta:

- **Ja gefuna ko kusurwoyi** don sake girma.
- **Ja grip na tsakiya** don matsar da ita.
- Yi amfani da **mai zaɓen girma** a control bar don saita girma daidai (misali 1:50). Don shigar da girma wanda ba ya cikin jerin, rubuta shi kai tsaye a filin shigarwa a ƙasan dropdown — yana karɓar tsari na adadi (`1:200`, `5:1`) ko lamba mai raka'a (`0.005`), sannan danna **Enter**.
- Danna dama a viewport ka yi amfani da **Lock** don hana canje-canje kwatsam.

## Bayanan ƙari

- ViewportRectangle tana samuwa ne kawai idan lasifikar layout na takarda tana aiki. Gudanar da ta a model space yana nuna saƙon kuskure kuma yana fita.
- Don kwafin viewport da ke akwai, yi amfani da [ViewportCopy](../viewport-copy/).
