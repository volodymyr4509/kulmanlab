---
title: Undo Command — Umatras sa Drawing History sa KulmanLab CAD
description: Binabaligtad ng Undo command ang huling drawing action nang isang hakbang sa isang pagkakataon. Hanggang 20 hakbang ang naka-store bawat file at napapanatili sa browser kahit mag-reload ng page. Ang paggawa ng bagong action pagkatapos mag-undo ay nag-cle-clear ng redo stack.
keywords: [CAD undo command, undo history CAD, ibalik ang aksyon CAD, undo steps CAD, browser persistent undo, kulmanlab]
group: edit
order: 13
---

# Undo

Binabaligtad ng `undo` command ang huling pagbabago sa drawing — isang hakbang kada invocation. Bawat pagdaragdag, pagtanggal, o pag-edit ng entity ay itinatala bilang hiwalay na history entry. Umaatras ang Undo sa mga entry na ito sa reverse order.

## Paano Mag-undo

- I-type ang `undo` sa terminal, o
- I-click ang **Undo** button sa toolbar.

Bawat invocation ay bumabaligtad ng isang itinalang aksyon. Ulitin ito para umatras pa nang mas malayo.

## Ugali ng History

| Detalye | Value |
|--------|-------|
| Bilang ng hakbang bawat file | Hanggang **20** |
| Storage | Browser (IndexedDB / localStorage), bawat file name |
| Nananatili kahit mag-reload ng page | Oo — nire-restore ang history kapag binuksan mo ulit ang file |
| Bagong aksyon pagkatapos mag-undo | Kinukuha ang lahat ng redo entries na nasa unahan ng kasalukuyang posisyon |
| Pinakamatandang entry kapag puno na | Tinatanggal para magkaroon ng puwang ang pinakabagong pagbabago |

Itinatala ang bawat entity mutation: ang pagguhit ng bagong entity, pagtanggal ng entity, grip-editing ng mga endpoint, at ang pag-apply ng Move, Rotate, Scale, Mirror, Trim, Extend, at Offset ay lahat gumagawa ng history entries.

## Undo kumpara sa Redo

| | Undo | Redo |
|---|------|------|
| Direksyon | Umaatras sa history | Sumusulong sa mga na-undo na entry |
| Available kapag | May kahit isang itinalang aksyon | May kahit isang Undo na nagawa at wala pang bagong aksyon na ginawa |
| Kinu-clear ng | Wala — naipupon ang history hanggang sa 20-step na limitasyon | Anumang bagong drawing action |

Gamitin ang [Redo](../redo/) para i-apply muli ang na-undo na aksyon. Naka-grey out ang mga toolbar button kapag hindi available ang kani-kanilang direksyon.
