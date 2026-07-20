---
title: ViewportCopy — Kwafi Viewport a KulmanLab CAD
description: Umarnin ViewportCopy yana kwafin viewport da aka zaɓa zuwa sabon matsayi a layout iri ɗaya, yana kiyaye girma da saitunan kallon model. Yana goyon bayan shigar da daidaitawa madaidaici, kulle-kusurwa, da shigar da nisa da aka rubuta.
keywords: [kwafin viewport, kwafin viewport, kwafin layout na viewport, kulle-kusurwa viewport, daidaitawa madaidaici viewport, kulmanlab]
group: layouts
order: 2
---

# ViewportCopy

Umarnin `ViewportCopy` yana kwafin viewport zuwa sabon matsayi, yana kiyaye girmarsa da tsakiyar model. Ana samuwa ne kawai a layout space.

## Kwafin viewport

1. Sauya zuwa lasifikar layout na takarda.
2. Idan kana so, danna viewport don zaɓen ta tukuna.
3. Rubuta `ViewportCopy` a tashar umarni ko danna maɓallin kayan aiki na **Viewport Copy**.
4. Idan ba a zaɓi viewport tukuna ba, **danna viewport** don kwafi.
5. **Danna tabon tushe** — ma'anar don motsi. Ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
6. **Danna manufa** — ana sanya viewport a nisan tushe→manufa. Ko yi amfani da shigar da daidaitawa / kulle-kusurwa.

Bayan sanyawa, umarnin yana ci gaba da zama a aiki — danna wata manufa don sanya wani kwafi na viewport ɗin iri ɗaya. Danna **Enter**, **Space**, ko **Escape** don kammalawa.

## Shigar da daidaitawa

A matakan tabon tushe da manufa za ka iya rubuta daidaitawa madaidaiciya maimakon dannawa:

1. Rubuta ƙimar X.
2. Danna `,` — tashar umarni tana nuna `[X], [Y{cursor}]`.
3. Rubuta ƙimar Y.
4. Danna **Enter** don tabbatarwa.

## Kulle-kusurwa da nisa madaidaici

Bayan an saita tabon tushe, umarnin yana snap zuwa axes na 45° (0°, 45°, 90°, 135°, …) idan mai nuni ya daidaita. Yayin an kulle:

- Preview yana snap zuwa axis.
- Rubuta nisa ka danna **Enter** don sanya kwafi a wannan nisan daidai a kan shugabancin da aka kulle.

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.` | Ƙara lamba zuwa ƙimar nisan |
| `-` | Nisa mara kyau (yana juya shugabanci; haruf na farko kaɗai) |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Sanya kwafi a nisan da aka rubuta |

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X, ko nisa yayin kulle-kusurwa |
| `,` | Kulle X ka koma shigar da Y |
| `Enter` | Tabbatar da daidaitawa ko nisa da aka rubuta |
| `Enter` / `Space` | Kammalawa (idan babu shigarwa a tsari) |
| `Escape` | Soke ka sake saita |

## Bayanan ƙari

- ViewportCopy tana samuwa ne kawai idan lasifikar layout na takarda tana aiki.
- Viewport da aka kwafi yana gado girma, tsakiyar model, matsayin kulle, da girma-girma iri ɗaya kamar na asali.
- Don ƙirƙirar sabon viewport daga fara, yi amfani da [ViewportRectangle](../viewport-rectangle/).
