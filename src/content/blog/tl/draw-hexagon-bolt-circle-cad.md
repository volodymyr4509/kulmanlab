---
title: "Paano Gumuhit ng Hexagon o Bolt Circle sa CAD (Polygon at Polar Array)"
description: "Gumuhit ng regular na polygon mula sa gitna at radius o mula sa isang gilid, pagkatapos ay ulitin ang mga butas sa isang bolt circle gamit ang polar array — libre sa iyong browser, na may eksaktong na-type na mga halaga."
keywords: [gumuhit ng hexagon sa CAD, regular na polygon CAD, polar array CAD, guhit ng bolt circle, pattern ng butas CAD, pabilog na pattern CAD, guhit ng hex nut, gumuhit ng octagon CAD, pitch circle diameter PCD, libreng polygon tool CAD]
date: 2026-10-11
author: KulmanLab
tag: Gabay
---

Para gumuhit ng regular na polygon sa CAD, ibigay ang bilang ng gilid, piliin ang gitna, pagkatapos ay radius — o pumili ng isang gilid at susunod na ang iba. Para gumuhit ng bolt circle, gumuhit ng isang butas at ulitin ito sa paligid ng gitna gamit ang polar array. Ginagawa ng gabay na ito ang pareho, na may eksaktong mga numero, sa browser sa [app.kulmanlab.com](https://app.kulmanlab.com) — libre, walang i-install, at hindi kailanman lumalabas ang file sa iyong computer.

Kami ang gumawa ng [KulmanLab](https://kulmanlab.com), kaya gumagamit ang mga hakbang sa ibaba ng mga command nito. Ang mga ideya — across-flats laban sa across-corners, pitch circle diameter, kung umiikot ba ang mga kopya habang nagpapaligid — ay pareho sa anumang CAD program.

## Gumuhit ng regular na polygon

Ang regular na polygon ay may magkakapantay na gilid at anggulo: hexagon para sa nut, octagon para sa karatula, pentagon para sa pandekorasyong hiwa. Sa KulmanLab, ito ang command na **Polygon**.

1. I-type ang `polygon` sa terminal, o gamitin ang Polygon button sa Shapes panel.
2. Ilagay ang **bilang ng gilid** — anumang buong numero mula 3 hanggang 1024 — at pindutin ang **Enter**. Naka-prefill ang prompt ng bilang na ginamit mo noong huli.
3. **I-click ang gitna**, o mag-type ng `X,Y` para sa eksaktong punto.
4. **I-click ang radius**, o i-type ito at pindutin ang **Enter**.

Isang saradong polyline ang resulta, kaya gumagana ang lahat ng magagawa mo sa polyline — ilipat, paikutin, i-offset, i-scale.

### Across flats o across corners?

Dito madalas madapa ang mga tao. Ang "radius" ay maaaring mangahulugan ng dalawang magkaibang distansya, at ang hexagon ay tinutukoy sa isa o sa isa pa depende sa iyong iginuguhit:

| | Sinusukat hanggang | Karaniwang gamit |
|---|---|---|
| **Inside on** (default) | Mga sulok | Hugis na dapat magkasya sa loob ng isang ibinigay na bilog |
| **Inside off** | Gitna ng bawat gilid | Hugis na may ibinigay na lapad across flats — mga nut, ulo ng bolt, laki ng wrench |

Pindutin ang `I` sa radius prompt para magpalit. Ibinebenta ang hex nut ayon sa lapad nito across flats, kaya gamitin ang **Inside off** at i-type ang *kalahati* nito. Para sa M8 nut na 13 mm across flats:

1. `polygon`, pagkatapos `6` para sa mga gilid, pagkatapos i-click o i-type ang gitna.
2. Pindutin ang `I` para i-off ang Inside.
3. I-type ang `6.5` at pindutin ang **Enter**.

Eksaktong 13 mm ang pagitan ng mga patag; umaabot ang mga sulok ng 7.51 mm mula sa gitna, humigit-kumulang 15 mm across corners. Kung i-type mo ang radius sa halip na i-click, nakapuwesto ang polygon na pahalang ang pinakamababang gilid, patag sa ibaba. Kung i-click mo, kukunin nito ang oryentasyon mula sa pinag-click-an mo.

### Mula sa isang gilid

Minsan alam mo ang haba ng gilid, hindi ang radius — halimbawa, octagonal na tabletop na may 20 mm na gilid. Pindutin ang `E` sa prompt ng unang punto para lumipat sa **Edge** mode, pagkatapos piliin ang dalawang dulo ng isang gilid. Binubuo ang natitirang mga sulok nang pakaliwa, sa kaliwa ng gilid na iyon. Ang pag-type ng `0,0` at pagkatapos ay `20,0` ay maglalagay ng 20 mm na gilid sa kahabaan ng X axis na nasa itaas nito ang polygon.

## Gumuhit ng bolt circle

Ang bolt circle — "PCD" sa mga guhit — ay singsing ng pantay-pantay na butas sa paligid ng gitna. Gumuguhit ka ng isang butas at inuulit ito. Sa KulmanLab, iyon ang **ArrayPolar**.

Kumuha ng anim na 6.6 mm na butas sa 50 mm na pitch circle diameter, nakasentro sa origin:

1. **Iguhit ang unang butas.** Patakbuhin ang `circle`, i-type ang gitna bilang `25` `,` `0` — kalahati ng PCD sa kahabaan ng X axis —, pindutin ang **Enter**, pagkatapos i-type ang radius na `3.3` at pindutin ang **Enter**.
2. **Piliin ito** sa pag-click sa bilog.
3. **Patakbuhin ang polar array.** I-type ang `arraypolar`, o gamitin ang ArrayPolar button sa Edit panel.
4. **Piliin ang gitna ng pattern** — i-type ang `0,0`.
5. Ipinapakita ng terminal ang array kung ano ito ngayon — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — at live na pino-preview ang limang kopya. Pindutin ang **Enter** para tanggapin.

Iyon na ang buong bolt circle. Para sa ibang bilang, pindutin ang `I` bago kumpirmahin at i-type ang bilang ng item — bilang isa ang orihinal, at kinakalkula para sa iyo ang anggulo sa pagitan nila. O pindutin ang `A` at i-type na lang ang pagitan sa digri; ire-restate ang fill angle para tumugma.

Ilang detalyeng mahalaga:

- Ang **Fill** ay ang anggulo mula sa unang item hanggang sa huli. Ang default na 360° ay nagkakalat ng mga item sa buong bilog; ang mas maliit na numero ay nagkakalat sa kanila sa isang arko — hanay ng mga butas sa isang kapat na ikot, halimbawa. Ang negatibong anggulo ay pakanan.
- Ang **Rotate** ang nagpapasya kung umiikot ang bawat kopya habang nagpapaligid. Sa mga bilog na butas, walang pagkakaiba. Sa slot, ngipin, o bracket, mayroon: on — nakaharap sa gitna ang bawat kopya gaya ng orihinal; off — pinananatili ng bawat kopya ang oryentasyon ng orihinal at inililipat lang sa puwesto. Pindutin ang `R` para magpalit bago kumpirmahin.
- Gumagawa ang array ng mga **kopya** — nananatili ang orihinal kung nasaan ito, at ang bawat item ay karaniwang entity na maaari mong i-edit pagkatapos.

## Pagsamahin ang lahat: isang flange

Gumuhit ng hexagon para sa outline, bilog sa gitna para sa bore, at bolt circle para sa mga butas ng pagkakabit. Tatlong command, bawat sukat ay eksaktong na-type, at walang kailangang sukatin sa screen.

Kung papunta ang piyesa sa laser cutter, burahin ang anumang construction circle na iginuhit mo para mahanap ang pitch circle — puputulin din ito gaya ng lahat ng iba — at suriin ang file gamit ang gabay namin sa [paghahanda ng DXF para sa laser cutting](/tl/blog/prepare-dxf-for-laser-cutting/). Saradong landas na ang polygon sa pamamagitan ng pagkakagawa, na siyang pinakakaraniwang dahilan kung bakit tinatanggihan ng mga cutting service ang mga file.

## Ang hindi nito magagawa

- **Mga regular na polygon lang.** Pantay ang lahat ng gilid. Ang hindi regular na outline — hugis na may ilang mas mahabang gilid — ay isang [polyline](/tl/docs/commands/polyline/) na iginuguhit mo punto por punto.
- **2D lang.** Gumuguhit ito ng mga patag na outline. Hindi ito magbibigay ng modeled na nut o may-thread na bolt.
- **Mga desktop browser lang** — Chrome, Firefox, Safari, at Edge. Walang mobile version.

---

*Kaugnay: [Polygon](/tl/docs/commands/polygon/) at [ArrayPolar](/tl/docs/commands/array-polar/) para sa lahat ng opsyon at key, [Circle](/tl/docs/commands/circle/) para sa pag-type ng eksaktong radius, at [ArrayGrid](/tl/docs/commands/array-grid/) para sa pag-uulit ng mga bagay sa mga hilera at kolum sa halip na sa paligid ng gitna.*
