---
title: "PointDivide Command — maglagay ng mga punto sa magkakapantay na haba sa kahabaan ng bagay"
description: "Hinahati ng PointDivide command ang isang linya, polyline, arko, bilog, ellipse o spline sa mga bahaging pantay ang haba at naglalagay ng punto sa bawat hatian, ipinapakita habang tina-type mo ang bilang ng bahagi."
keywords: ["CAD divide command", "hatiin ang linya sa pantay na bahagi CAD", "mga punto sa kahabaan ng bagay CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

Naglalagay ang `BahagiinSaPunto` command ng mga [punto](../point/) na humahati sa isang bagay sa mga bahaging pantay ang haba. Hindi nababago ang bagay: ang mga punto ay bagong entity sa kasalukuyang layer at kulay, magagamit sa pag-snap.

## Paghahati ng bagay

1. I-type ang `BahagiinSaPunto` sa terminal o piliin ang **Point Divide** mula sa array dropdown sa Edit panel.
2. **I-click ang bagay** — linya, polyline, arko, bilog, ellipse o spline. Tinatanggihan ang iba pa, at maaari kang pumili ulit.
3. **I-type ang bilang ng bahagi**, buong numero mula 2 hanggang 32767. Ipinapakita ang mga punto sa bagay habang nagta-type ka.
4. Pindutin ang **Enter** o **Space** para ilagay ang mga ito. Natatapos ang command.

## Saan napupunta ang mga punto

- Sinusukat ang pagitan bilang haba sa kahabaan ng bagay, hindi bilang anggulo, kaya ang ellipse o spline ay hinahati sa mga pirasong pantay ang haba. Sinusundan ang mga arc segment ng polyline sa kahabaan ng kurba nito.
- Sa bukas na bagay — linya, bukas na polyline, arko, bahagi ng ellipse o bukas na spline — napupunta ang mga punto sa pagitan ng mga bahagi, hindi kailanman sa mga dulo: 5 bahagi ay nagbibigay ng 4 na punto.
- Sa saradong bagay — bilog, saradong polyline, buong ellipse o saradong spline — umiikot ang mga punto mula sa simula nito, na may punto rin: nagsisimula ang bilog sa anggulong 0, ang saradong polyline sa unang vertex nito. 5 bahagi ay nagbibigay ng 5 punto.
- Tinatanggihan ang numerong labas sa 2–32767: sinasabi ng terminal kung bakit at binubura ito para makapag-type ka ulit.

Binubura ng Backspace ang huling digit. Nagsisimula ulit ang Escape, para makapili ng ibang bagay. Tinatapos ng Enter o Space ang command bago pumili ng bagay.

---

*Kaugnay: [Point Interval](../point-interval/) para sa mga punto sa takdang pagitan, [Point](../point/) para sa iisang punto, at [ArrayPolar](../array-polar/) para ulitin ang mga bagay sa halip na mga punto.*
