---
title: Hatch Manager Command — Mag-browse at Mag-upload ng .pat Patterns
description: Ang Hatch Manager command ay nagbubukas ng dialog para mag-browse ng hatch patterns na may live swatch preview, at para mag-upload ng sarili mong .pat pattern files. Ang mga na-upload na file ay naka-save sa browser at binabalewala ang built-in patterns na may parehong pangalan.
keywords: [hatch manager, custom hatch pattern CAD, mag-upload ng pat file, acad.pat, hatch pattern library, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

Ang `TagapamahalaNgPadron` command ay nagbubukas ng dialog para mag-browse ng hatch patterns na may live swatch preview, at para mag-upload ng sarili mong `.pat` pattern files na gagamitin sa [Hatch](../hatch/).

## Pagbukas ng Hatch Manager

I-type ang `TagapamahalaNgPadron` sa terminal. Hiwalay ito sa pattern picker na bumubukas kapag na-click mo ang **Pattern** chip ng isang hatch — pinipili ng picker ang pattern para sa isang hatch, ang Hatch Manager ay kung saan mo idinaragdag o inaalis ang mga `.pat` file.

## Mga Grupo ng Pattern

| Grupo | Nilalaman |
|-------|-----------|
| **User** | Mga pattern mula sa sarili mong na-upload na `.pat` file, na naka-sub-group ayon sa file kung saan nanggaling ang bawat pattern (ipinapakita lamang matapos kang mag-upload ng isa) |
| **Standard** | `SOLID` kasama ang sariling pattern table ng drawing na ito — bawat bagong drawing ay nagsisimula sa parehong built-in na library, katulad ng mga layer at linetype nito |

I-click ang anumang pattern sa listahan (o gamitin ang `↑`/`↓`) para i-preview ito sa kanan — isang swatch na iginuhit gamit ang parehong code na kinaka-fill-an ng canvas, kaya eksakto itong ipapakita ng drawing, kasama ang pangalan, deskripsyon, at bilang ng linya ng pattern.

## Pag-upload ng Custom na Pattern File

1. I-click ang **Add .pat File** sa footer ng dialog.
2. Pumili ng `.pat` file — ang standard na hatch pattern format. Madalas na tinutukoy ng iisang file ang maraming pinangalanang pattern nang sabay-sabay; lahat ng ito ay lumalabas bilang magkakahiwalay na entry na naka-grupo sa ilalim ng pangalan ng file na iyon.
3. Ang mga na-upload na file ay permanenteng naka-save sa browser (IndexedDB), naka-sort ayon sa pinaka-huling idinagdag muna, at awtomatikong nire-reload sa susunod na buksan mo ang KulmanLab CAD.

Ang pag-upload ng file na tumutukoy ng pattern na may parehong pangalan ng isang built-in ay **babalewala** sa default — ito ang suportadong paraan para makuha ang opisyal na pattern definitions ng Autodesk: mag-upload ng tunay na `acad.pat`, at ang mga bersyon nito ng ANSI31 at ng ibang standard na pangalan ay papalit sa sariling approximations ng KulmanLab.

Kung ang isang drawing ay tumutukoy sa isang pangalan ng pattern na wala sa library mo — na-import mula sa isang DXF na gumamit ng pattern mula sa isang `acad.pat` na hindi mo na-upload — nagre-render pa rin ang hatch, gamit ang `ANSI31` bilang panghalili, sa halip na bumalik sa isang patag, walang-pattern na fill.

## Pag-alis ng Pattern File

I-click ang **×** sa tabi ng pangalan ng file sa **User** group para alisin ito kasama ang bawat pattern na tinukoy nito. Anumang hatch na gumagamit na ng isa sa mga pattern na iyon ay agad na babalik sa `ANSI31`. Hindi puwedeng alisin ang mga built-in na **Standard** pattern.

## Keyboard Reference

| Key | Aksyon |
|-----|--------|
| `↑` / `↓` | Ilipat ang seleksyon paitaas o pababa sa listahan ng pattern |
| `Escape` | Isara ang Hatch Manager |

## Mga Kaugnay na Command

- [Hatch](../hatch/) — pinupuno ang isang na-click na area gamit ang kasalukuyang napiling pattern
- [Font Manager](../font-manager/) — ang parehong upload/browse na pattern, para sa custom fonts sa halip na hatch patterns
