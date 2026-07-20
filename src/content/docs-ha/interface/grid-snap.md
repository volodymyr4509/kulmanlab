---
title: Grid & Snap — Daidaita Zane zuwa Grid Daidai a KulmanLab CAD
description: Maɓallan Grid da Snap a KulmanLab CAD suna sanya grid na ƙa'ida a kan canvas kuma suna kulle motsin mai nuni zuwa tabon grid. Fadin grid yana daidaita kansa kai tsaye zuwa matakin zoom na yanzu don haka koyaushe yana nuna ƙimar model mai zagaye.
keywords: [grid CAD, snap zuwa grid, fadin grid, taimakon zane, kulmanlab, ɗigo-ɗigo na grid, snap na orthogonal]
group: interface
order: 1
---

# Grid & Snap

Maɓallan sauyawa guda biyu a control bar suna barka ka sanya grid na ƙa'ida ka kulle mai nuni zuwa mahaɗarsa yayin zanawa.

| Maɓalli | Abin da yake yi |
|--------|-------------|
| **Grid** | Yana nuna grid na ɗigo-ɗigo ko layuka a hoto a kan canvas |
| **Snap** | Yana kulle mai nuni zuwa tabon grid mafi kusa idan babu snap na geometry mafi kusa |

Maɓallan biyun suna aiki daban — za ka iya nuna grid ba tare da snap ba, snap ba tare da nuna grid ba, ko yin amfani da su tare.

## Kunna grid da snap

Danna **Grid** ko **Snap** a kayan aikin control bar. Ana haskaka yanayin mai aiki. Ana ajiye saitunan tsakanin zaman.

Idan an kunna **Snap**, grid yana canza nunin kansa kai tsaye daga layuka zuwa **ɗigo-ɗigo** — ɗigo-ɗigon suna nuna tabon daidai da mai nuni zai snap zuwa gare su.

## Fadin grid mai daidaitawa

Fadin grid yana daidaita kansa kai tsaye yayin da kake zoom don layukan grid su kasance koyaushe a nisa mai daɗi a fuskar allo (~40 px). Matakin koyaushe lamba ce "mai kyau" — ninkin 1, 2, ko 5 a kowace ƙarfin goma:

| Misalin zoom / girman model | Matakin grid |
|---------------------------|-----------|
| An rage zoom (yanki babba) | 100, 500, 1000 … |
| Zoom matsakaici | 10, 20, 50 … |
| An ƙara zoom (dalla-dalla) | 1, 2, 5 … |
| Kusa sosai | 0.1, 0.2, 0.5 … |

Wannan yana nufin kowace tabon snap tana sauka a daidaitawa mai zagaye a model space — babu tarin ɓacewar floating-point.

## Fifikon snap

**Snaps na ƙarshe da mahaɗa koyaushe suna da fifiko fiye da grid.** Mai nuni yana snap zuwa tabon grid ne kawai idan bai kusa da wani mai takarar snap na geometry ba (ƙarshe, tsakiya, tsakiyar da'ira, ko mahaɗa).

Wannan yana nufin za ka iya zana da snap-zuwa-grid an kunna kuma har yanzu ka snap daidai zuwa geometry da ke akwai idan mai nuni ya wuce kusa da ita. Grid gwargwado ne, ba dokar ƙarfi ba.

## Yanayin layout

- **Model space** — ɗigo-ɗigo ko layuka suna cika dukkan yankin canvas mai gani.
- **Layout (paper) space** — ana yanke ɗigo-ɗigo zuwa murabbaʼin takarda kuma ba su fita waje.
- **A cikin viewport** — grid yana bin tsarin daidaitawa na model a girman viewport, don haka ɗigo-ɗigon suna daidaita da unit ɗin model iri ɗaya ba tare da la'akari da girman viewport ba.

## Tsarin aiki na yau da kullum

1. Kunna **Grid** da **Snap** kafin farawa zane da ke bukatar fadi na ƙa'ida.
2. Zoom zuwa matakin da matakin grid ke dace da matakin da kake so (misali zoom har ɗigo-ɗigo suna unit 10 tsakaninsu).
3. Zana — mai nuni yana snap zuwa tabon grid kai tsaye. Geometry da ke akwai har yanzu tana snap yau da kullum idan kana kusa da ita.
4. Kashe **Snap** idan kana bukatar motsi kyauta na mai nuni ko kana son snap zuwa geometry kaɗai.
