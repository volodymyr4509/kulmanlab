---
sidebar_position: 11
title: "Leader− Command — Alisin ang Arrowhead Arm mula sa Multileader sa KulmanLab CAD"
description: "Inaalis ng Leader− command ang isang arrowhead arm mula sa multileader na may dalawa o higit pa. I-hover malapit sa arm na aalisin — ma-highlight ang pinakamalapit na arm. Napapanatili ang dogleg, text, at natitirang mga arm."
keywords: [CAD leader remove arm, leader- command, alisin ang arrow mula sa leader, multileader arm delete, kulmanlab]
---

# Leader−

Inaalis ng `leader-` command ang isang arrowhead arm mula sa umiiral na multileader. Napapanatili ang text label, dogleg, at lahat ng natitirang arm — ang napiling arm lamang ang tinatanggal. Hindi puwedeng alisin ang arm ng multileader na may isang arm lamang.

## Pag-alis ng Arm

1. I-type ang `leader-` sa terminal.
2. **I-click ang multileader** na may dalawa o higit pang arm. Kung isa lang ang arm ng na-click na leader, magpapakita ang terminal ng error at maghihintay ng valid na seleksyon.
3. **Igalaw ang cursor malapit sa arm** na gusto mong alisin — ma-highlight ang pinakamalapit na arm ng isang marker.
4. **I-click** para alisin ang arm na iyon.

Naaalis ang arm at nananatiling aktibo ang command — puwede mo agad i-click ang ibang leader (o ang parehong isa) para mag-alis pa ng mga arm. Pindutin ang **Enter**, **Space**, o **Escape** para tapusin.

```
  Before:                   After:
  ◄── arm 1                 ◄── arm 1
       \                          \
        ●──── dogleg ──── text     ●──── dogleg ──── text
       /
  arm 2 ──►  ← natanggal ang arm na ito
```

## Paano Tinutukoy ang Pinakamalapit na Arm

Sinusukat ng command ang perpendicular na distansya mula sa cursor papunta sa line segments ng bawat arm (kasama ang segment mula sa huling punto ng arm papunta sa dogleg). Ang arm na may pinakamaliit na distansya ang ma-highlight at aalisin kapag ni-click.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `Enter` / `Space` | Tapusin ang pag-alis ng mga arm |
| `Escape` | Kanselahin at i-reset |

## Mga Tala

- Protektado ang leader na may **isang arm lamang** — kailangan mo munang magdagdag ng arm bago mag-alis.
- Palaging napapanatili ang posisyon ng dogleg at ang laman ng text anuman ang arm na tinanggal.

## Kaugnay na mga Command

| Command | Ano ang ginagawa nito |
|---------|-------------|
| [Leader](../leader/) | Gumawa ng bagong multileader mula sa simula |
| [Leader+](../leader-add/) | Magdagdag ng arm sa umiiral na multileader |
