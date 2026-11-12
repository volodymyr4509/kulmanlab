---
title: "Pag-input ng coordinate — eksakto, relative at polar na punto"
description: "Saanman humingi ng punto ang isang command, i-type ito sa halip na mag-click: X,Y para sa eksaktong posisyon, @X,Y para sukatin mula sa huling punto, at distansya<anggulo para sa polar na punto. Ginagawang relative ng Rel toggle ang bawat punto na tina-type."
keywords: ["CAD coordinate input", "relative coordinates CAD", "polar coordinates CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Pag-input ng coordinate

Saanman humingi ng punto ang isang command — ang simula ng isang [Line](../../commands/line/), isang sulok ng [Rectangle](../../commands/rectangle/), ang base point ng [Move](../../commands/move/), o isang grip na dina-drag mo — maaari mo itong i-type sa halip na mag-click. Magsimulang mag-type ng numero at ipapakita ng terminal ang tina-type mo; pindutin ang **Enter** o **Space** para ilagay ang punto.

## Apat na paraan ng pagsulat ng punto

| Tina-type mo | Ang punto ay |
|---|---|
| `100,50` | Sa X 100, Y 50 |
| `@100,50` | 100 sa X at 50 sa Y mula sa huling punto |
| `100<45` | 100 mula sa origin, sa 45° |
| `@100<45` | 100 mula sa huling punto, sa 45° |

Ang mga anggulo ay nasa degrees, pakaliwa mula sa X axis, kaya ang `@50<90` ay 50 pataas at ang `@50<180` ay 50 pakaliwa. Maaaring negatibo ang alinmang halaga.

## Ang huling punto

Sumusukat ang `@` mula sa huling puntong na-click o na-type sa anumang command — binibilang ang huling click ng nakaraang command, pati ang grip na kade-drag mo lang. Kapag wala pang huling punto, binabasa ang `@100,50` bilang `100,50`. Nakakalimutan ang huling punto kapag lumipat ka sa pagitan ng model space at layout, at kapag nagbukas ng drawing.

## Rel: relative bilang default

Ginagawang relative ng **Rel** toggle sa control bar ang bawat punto na tina-type: pagka-type mo ng unang digit, may `@` na inilalagay sa unahan, kaya nagiging `@100,50` ang `100,50`. Pindutin ang **Backspace** sa ibabaw ng `@` para gawing absolute ang puntong iyon. Kapag wala pang huling punto, walang `@` na idinadagdag. Naka-off ang Rel bilang default at naaalala kasama ng ibang toggle ng control bar.

## Mga key habang nagta-type

| Key | Epekto |
|---|---|
| `0`–`9`, `.`, `-` | I-type ang numero; `-` sa simula lang |
| `@` | Gawing relative ang punto, sa simula ng X |
| `,` o **Space** | Tapusin ang X at lumipat sa Y |
| `<` | Tapusin ang X bilang distansya at lumipat sa anggulo nito |
| **Enter** o **Space** | Ilagay ang punto kapag may halaga na ang Y |
| **←** **→** **Home** **End** | Ilipat ang cursor sa loob ng halagang tina-type |
| **Backspace** | Burahin ang bago ng cursor; sa simula ng walang lamang Y, bumalik sa X |

Ang puntong hindi mabasa bilang mga numero ay nananatili sa terminal para maitama mo. Bawat punto na tina-type ay nag-iiwan ng linya sa history ng terminal ayon sa pagka-type mo — `Na-type @100<45` — bago ang linya ng command kung saan ito napunta.

## Mga tina-type na punto at angle tracking

Kapag naka-lock ang cursor sa isang angle tracking ray, ang pag-type ng numero ay nagbibigay ng distansya sa kahabaan ng ray na iyon sa halip na X. Ang pag-type muna ng `@` ay nagsisimula ng buong punto, kaya gumagana pa rin ang `@100,50` sa naka-lock na ray.

---

*Kaugnay: [Pagsubaybay sa distansya](../distance-tracking/) para mag-type ng haba sa naka-lock na direksyon, at [Vector Pins](../vector-pins/) para sumukat mula sa naka-pin na punto.*
