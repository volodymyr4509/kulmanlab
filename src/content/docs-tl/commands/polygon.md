---
title: "Polygon Command — Gumuhit ng regular na polygon mula sa gitna o gilid sa KulmanLab CAD"
description: "Ang Polygon command ay gumuguhit ng regular na polygon na may 3 hanggang 1024 gilid mula sa gitna at radius, o mula sa isang gilid. Ang resulta ay saradong LWPOLYLINE, kaya lahat ng polyline edit command ay nalalapat."
keywords: ["CAD polygon command", "gumuhit ng regular na polygon CAD", "hexagon octagon pentagon CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

Ang `polygon` command ay gumuguhit ng regular na polygon — pantay ang lahat ng gilid at anggulo — na may 3 hanggang 1024 gilid. I-type ang `polygon` sa terminal. Ang resulta ay **saradong `LWPOLYLINE`**, kaya kapag nailagay na ay kumikilos ito tulad ng anumang [Polyline](../polyline/) at lahat ng polyline edit ay nalalapat.

## Pagguhit ng polygon

1. I-type ang `polygon` sa terminal at ilagay ang **bilang ng gilid** — buong numero mula 3 hanggang 1024 — pagkatapos ay pindutin ang **Enter** o **Space**. Naka-prefill ang prompt ng huling bilang na ginamit mo (4 sa unang beses); magsimulang mag-type para palitan ito. Anumang iba pa ay tinatanggihan at nananatili sa prompt para itama.
2. **I-click ang gitna**, o mag-type ng `X,Y` at pindutin ang **Enter** para sa eksaktong coordinate. Pindutin muna ang `E` para magsimula sa isang gilid (tingnan sa ibaba).
3. **I-click ang radius** — live na na-preview ang polygon — o i-type ang radius at pindutin ang **Enter** o **Space**.
4. Nailalagay ang polygon at natatapos ang command.

## Mga opsyon

| Opsyon | Key | Epekto |
|---|---|---|
| Edge | `E` | Ang unang punto ay nagiging isang dulo ng gilid sa halip na gitna. Piliin ang ikalawang dulo; ang natitirang mga sulok ay binubuo nang pakaliwa, sa kaliwa ng gilid mula sa unang dulo patungo sa ikalawa. Pindutin muli ang `E` para bumalik sa gitna. |
| Inside | `I` | Naka-on bilang default at pinananatili mula sa isang polygon hanggang sa susunod. On: nasa bilog ng ibinigay na radius ang mga sulok. Off: nasa labas ng bilog na iyon ang polygon, at nasa bilog ang gitna ng bawat gilid. |

- Naglalagay ang click ng sulok (Inside on) o gitna ng gilid (Inside off) eksakto kung nasaan ang cursor, kaya ang cursor din ang nagtatakda ng oryentasyon.
- Walang direksyong mapupuntirya ang na-type na radius, kaya nakapuwesto ang polygon na pahalang ang pinakamababang gilid — maliban kung naka-on ang angle locking, kung saan susundin nito ang naka-lock na anggulo.
- Iniaalok ang bawat opsyon sa sarili nitong hakbang at maaaring palitan kahit habang nagta-type ng numero.

## Sanggunian sa keyboard

| Key | Aksyon |
|---|---|
| `0`–`9`, `.` | I-type ang bilang ng gilid, radius, coordinate, o haba |
| `E` | I-on o i-off ang Edge (hakbang ng unang punto) |
| `I` | I-on o i-off ang Inside (hakbang ng radius) |
| `Enter` / `Space` | Kumpirmahin ang bilang ng gilid o radius |
| `Escape` | Kanselahin |

## DXF — LWPOLYLINE entity

Sine-save ang polygon bilang saradong `LWPOLYLINE` na may isang vertex bawat sulok; walang nakalaang polygon type ang DXF. Lahat ng property — coordinate ng vertex, kulay, layer, linetype, linetype scale, at kapal — ay naililipat nang walang nawawala, at binabasa ito ng anumang DXF viewer bilang saradong polyline.
