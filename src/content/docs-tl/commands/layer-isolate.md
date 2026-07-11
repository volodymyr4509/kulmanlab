---
title: LayerIsolate — I-freeze ang Lahat ng Layer Maliban sa Napili sa KulmanLab CAD
description: Nagfe-freeze ang LayerIsolate command sa bawat layer maliban sa mga ginagamit ng napiling objects, kaya makakapag-focus ka sa specific na geometry nang walang tinatanggal.
keywords: [layer isolate, i-freeze ang layers CAD, i-isolate ang layer kulmanlab, CAD layer management]
group: layer
order: 3
---

# LayerIsolate

Nagfe-freeze ang `LayerIsolate` command sa bawat layer **maliban** sa mga kabilang sa napiling objects. Gamitin ito para mabilis na makapag-focus sa specific na geometry nang hindi itinatago o tinatanggal nang permanente ang iba — i-unfreeze gamit ang [LayerUnfreezeAll](../layer-unfreeze-all/) kapag tapos na.

## Dalawang Paraan Para Simulan

**Mag-pre-select muna, pagkatapos i-isolate** — piliin muna ang entities, saka i-activate:

1. Piliin ang isa o higit pang entities sa canvas.
2. I-type ang `LayerIsolate` sa terminal o i-click ang **Layer Isolate** toolbar button.
3. Mananatiling visible ang mga layer ng napiling entities; agad na fi-freeze ang lahat ng iba.

**I-activate muna, pagkatapos pumili**:

1. I-type ang `LayerIsolate` o i-click ang toolbar button.
2. **Pumili ng objects** — mag-click sa individual entities o mag-drag para pumili ayon sa area.
3. Pindutin ang **Enter** o **Space** para kumpirmahin — ilalapat ang isolation.

## Keyboard reference

| Key | Aksyon |
|-----|--------|
| `Enter` / `Space` | Kumpirmahin ang selection at ilapat ang isolation |
| `Escape` | Kanselahin at i-clear ang selection |

## Detalye ng Pag-uugali

- Lahat ng layer na **hindi** kabilang sa selection ay ise-set sa frozen.
- Mananatiling unfrozen ang mga layer na **kabilang** sa selection, kahit na naka-freeze ito dati.
- Nili-clear ang selection pagkatapos ilapat ang isolation.
- Awtomatikong natatapos ang command pagkatapos itong ilapat.

## Pag-undo ng Isolation

Patakbuhin ang [LayerUnfreezeAll](../layer-unfreeze-all/) para ibalik ang lahat ng layer sa visible nang isang hakbang lang.
