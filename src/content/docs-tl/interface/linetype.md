---
title: Linetype Toolbar Picker — Kontrolin ang Dash Pattern
description: Itinatakda ng linetype picker sa toolbar ng KulmanLab CAD ang dash pattern na ilalapat sa lahat ng bagong guhit na entity. Suportado ang lahat ng linetype na na-load mula sa kasalukuyang DXF file kasama ang built-in na ByLayer, ByBlock, at Continuous na opsyon.
keywords: [CAD linetype, dash pattern, dashed na linya, DXF linetype, ByLayer linetype, kulmanlab]
group: interface
order: 3
---

# Linetype

Kinokontrol ng **linetype** chip sa toolbar ang dash pattern na naka-assign sa bawat bagong entity na iginuguhit mo. I-click ito para buksan ang picker dropdown.

## Mga Opsyon

| Value | Kahulugan |
|-------|---------|
| **From Layer** | Namamana ng entity ang linetype na naka-define sa layer nito. Ipinapakita bilang `ByLayer` sa DXF. |
| **ByBlock** | Namamana ng entity ang linetype ng block na kinabibilangan nito. Walang visible na epekto sa labas ng block. |
| **Continuous** | Solid at unbroken na linya — walang dash pattern. |
| **Named linetypes** | Anumang linetype na na-load mula sa kasalukuyang DXF file (hal. `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM`, …). Ipinapakita ng dropdown ang live preview ng bawat pattern at ang definition string nito. |

## Paano Ito Nalalapat

Ang napiling linetype ay nalalapat sa bawat entity na ginawa pagkatapos ng pagbabago. Hindi nito retroactive na naaapektuhan ang mga umiiral nang entity.

Para baguhin ang linetype ng mga umiiral na entity, piliin ang mga ito at i-edit ang **Linetype** field sa properties panel, o gamitin ang [MatchProperties](../../commands/match-properties/) para kopyahin ito mula sa ibang entity.

## Linetype Scale

May **Linetype Scale** property din ang bawat entity (default `1`). Pinaparami ng factor na ito ang dash pattern. Ang value na `2` ay ginagawang doble ang haba ng mga dash; ang `0.5` ay ginagawang kalahati ang haba. I-edit ito sa properties panel matapos pumili ng entity.

## Mga Available na Linetype

Ang dropdown ay naglilista lang ng mga linetype na nasa kasalukuyang na-load na DXF file. Ang bagong ginawang file ay may `ByLayer`, `ByBlock`, at `Continuous` lang. Kapag nag-import ka ng DXF, magiging available ang lahat ng linetype na naka-define sa `$LTYPE` table ng file.

Kung kailangan mo ng partikular na linetype (hal. `DASHED2`) na wala sa listahan, mag-import ng DXF file na naglalaman nito — lalabas na ang linetype sa picker para sa kasalukuyang session.

## DXF Compatibility

Ang mga pangalan ng linetype ay naka-store bilang strings sa entity records. Ang `ByLayer` at `ByBlock` ay ang standard na DXF sentinel values. Napapanatili nang eksakto ang lahat ng named linetype at ang mga dash pattern nito sa export at nagro-round-trip nang walang loss sa LibreCAD, FreeCAD, at iba pang DXF-compatible na application.
