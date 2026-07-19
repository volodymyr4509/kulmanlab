---
title: Lineweight Toolbar Picker — Kontrolin ang Stroke Width
description: Itinatakda ng lineweight picker sa toolbar ng KulmanLab CAD ang stroke width na ilalapat sa lahat ng bagong guhit na entity. Suportado ang standard na DXF lineweight values mula 0.00 mm hanggang 2.11 mm kasama ang ByLayer at Default na mode.
keywords: [CAD lineweight, stroke width, lapad ng linya, DXF lineweight, ByLayer lineweight, kulmanlab]
group: interface
order: 4
---

# Lineweight

Kinokontrol ng **lineweight** chip sa toolbar ang stroke width na naka-assign sa bawat bagong entity na iginuguhit mo. I-click ito para buksan ang picker dropdown.

## Mga Opsyon

| Value | Kahulugan |
|-------|---------|
| **From Layer** | Namamana ng entity ang lineweight na naka-define sa layer nito. Ang aktwal na width na ipinapakita ay depende sa setting ng layer. |
| **Default** | Ginagamit ang default width ng application — na-render bilang manipis na linya (1 px). Hindi ino-override ang layer setting sa DXF. |
| **0.00 mm – 2.11 mm** | Isang explicit na fixed width. Dala ng entity ang value na ito anuman ang lineweight ng layer nito. |

Available ang standard na DXF lineweight values: 0.00, 0.05, 0.09, 0.13, 0.15, 0.18, 0.20, 0.25, 0.30, 0.35, 0.40, 0.50, 0.53, 0.60, 0.70, 0.80, 0.90, 1.00, 1.06, 1.20, 1.40, 1.58, 2.00, at 2.11 mm.

## Paano Ito Nalalapat

Ang napiling lineweight ay nalalapat sa bawat entity na ginawa pagkatapos ng pagbabago. Hindi nito retroactive na naaapektuhan ang mga umiiral nang entity.

Para baguhin ang lineweight ng mga umiiral na entity, piliin ang mga ito at i-edit ang **Lineweight** field sa properties panel, o gamitin ang [MatchProperties](../../commands/match-properties/) para kopyahin ito mula sa ibang entity.

## Rendering

Nire-render ang mga lineweight sa scale na **3.78 px per mm** (96 dpi). Ang linyang 0.25 mm ay humigit-kumulang 1 px ang lapad sa screen; ang linyang 1.00 mm ay humigit-kumulang 4 px. Ang mga napakanipis na value (0.00 mm at negative) ay laging nire-render nang hindi bababa sa 0.5 px para manatiling visible sa anumang zoom level.

## DXF Compatibility

Ang mga lineweight value ay naka-store bilang integers sa hundredths ng millimeter (hal. 25 = 0.25 mm) sa DXF `LWPOLYLINE`, `LINE`, `CIRCLE`, at iba pang entity records. Ang **From Layer** ay naka-store bilang `-1` at ang **Default** bilang `-3`, alinsunod sa DXF specification. Nagro-round-trip ang mga file nang walang loss sa anumang DXF-compatible na application.
