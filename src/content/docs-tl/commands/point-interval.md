---
title: "PointInterval Command — maglagay ng mga punto sa takdang pagitan sa kahabaan ng bagay"
description: "Naglalagay ang PointInterval command ng mga punto sa pagitang tina-type mo sa kahabaan ng linya, polyline, arko, bilog, ellipse o spline, mula sa dulong pinakamalapit sa iyong click, at ipinapakita ang mga ito habang tina-type mo ang haba."
keywords: ["mga punto sa pagitan CAD", "mga punto sa takdang layo sa linya CAD", "sukatin sa kahabaan ng bagay CAD", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

Naglalagay ang `PuntoBawatPagitan` command ng mga [punto](../point/) sa takdang pagitan sa kahabaan ng bagay, gaya ng pagmamarka ng mga istasyon sa isang ruta. Hindi nababago ang bagay: ang mga punto ay bagong entity sa kasalukuyang layer at kulay, magagamit sa pag-snap.

## Paglalagay ng mga punto sa pagitan

1. I-type ang `PuntoBawatPagitan` sa terminal o piliin ang **Point Interval** mula sa array dropdown sa Edit panel.
2. **I-click ang bagay malapit sa dulong pagsisimulan** — linya, polyline, arko, bilog, ellipse o spline. Tinatanggihan ang iba pa, at maaari kang pumili ulit.
3. **I-type ang haba ng pagitan.** Ipinapakita ang mga punto sa bagay habang nagta-type ka.
4. Pindutin ang **Enter** o **Space** para ilagay ang mga ito. Natatapos ang command.

## Saan napupunta ang mga punto

- Ang unang punto ay isang pagitan mula sa simula at sumusunod ang iba nang tig-isang pagitan, sinusukat sa kahabaan ng bagay kasama ang mga kurba. Walang punto sa simula mismo.
- Sa bukas na bagay — linya, bukas na polyline, arko, bahagi ng ellipse o bukas na spline — nagsisimula ang pagsukat sa dulong pinakamalapit sa iyong click. Walang marka ang natitira sa malayong dulo: may punto lang ito kapag eksaktong kasya ang pagitan.
- Sa saradong bagay — bilog, saradong polyline, buong ellipse o saradong spline — nagsisimula ang pagsukat sa sariling simula ng bagay, saan ka man mag-click: ang bilog mula sa anggulong 0 pakaliwa, ang saradong polyline mula sa unang vertex nito. Humihinto ang mga punto bago ang simula.
- Tinatanggihan ang habang 0 o mas mababa, mas mahaba sa bagay, o magbibigay ng higit sa 32767 punto: sinasabi ng terminal kung bakit at binubura ito para makapag-type ka ulit.

Binubura ng Backspace ang huling karakter. Nagsisimula ulit ang Escape, para makapili ng ibang bagay. Tinatapos ng Enter o Space ang command bago pumili ng bagay.

---

*Kaugnay: [Point Divide](../point-divide/) para hatiin ang bagay sa ilang pantay na haba, at [Point](../point/) para sa iisang punto.*
