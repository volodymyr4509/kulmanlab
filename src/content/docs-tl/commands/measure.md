---
title: "Measure Command — basahin ang mga distansya, haba, anggulo at lawak sa paligid ng cursor"
description: "Binabasa ng Measure command ang guhit sa paligid ng cursor habang ginagalaw mo ito — ang distansya sa pinakamalapit na geometry, ang haba o radius ng nakakasalubong nito, ang anggulo kung saan nagtatagpo ang mga linya — at sa isang click ay ibinibigay ang lawak at perimeter ng saradong lugar. Walang nababago sa guhit."
keywords: ["CAD measure command", "sukatin ang lawak at perimeter CAD", "live na pagsukat ng distansya CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

Binabasa ng `measure` command ang guhit sa paligid ng cursor habang ginagalaw mo ito, nang walang pipiliing punto: gaano kalayo ang pinakamalapit na geometry, gaano kahaba o kabilog ito, at ang anggulo kung saan nagtatagpo ang mga linya. Ang pag-click sa loob ng saradong lugar ay nagbibigay ng lawak at perimeter nito. Walang nababago sa guhit.

## Pagsukat

1. I-type ang `measure` sa terminal o i-click ang **Measure**, ang unang button sa Measure panel.
2. **Igalaw ang cursor.** Mula roon, tumitingin ang command sa kanan, itaas, kaliwa at ibaba para sa pinakamalapit na geometry at ipinapakita ang nakita nito.
3. **Mag-click sa loob ng saradong lugar** para punuin ito at basahin ang lawak at perimeter nito — tingnan sa ibaba.
4. Pindutin ang **Enter**, **Space** o **Escape** para tapusin.

## Ang ipinapakita nito

- **Distansya sa kabila** — mula sa nasasalubong ng cursor sa isang panig hanggang sa nasasalubong nito sa kabila, pahalang at patayo. Kung isang panig lang ang may laman, nagsisimula ang distansya sa cursor. Bawat dulong may nasasalubong ay may maliit na punong tuldok; ang dulo sa cursor ay wala.
- **Haba o radius** — bawat bagay na naaabot ng command ay hinihighlight kasama ang haba nito, o radius nito kapag bahagi ito ng bilog.
- **Anggulo** — kung saan nagtatagpo ang dalawang naabot na tuwid na linya, isinusulat ang anggulo sa pagitan nila; minamarkahan ng maliit na parisukat ang tamang anggulo.

Isinusulat ang mga haba at anggulo ayon sa pagsulat ng kasalukuyang [DimensionStyle](../dimension-style/), sa unit format at katumpakan nito.

## Lawak at perimeter

Ang pag-click sa loob ng saradong lugar ay pinupuno ito at inilalagay ang lawak at perimeter nito sa prompt at history. Hinahanap ang rehiyon gaya ng paghahanap ng [Hatch](../hatch/): ang magkakahiwalay na linyang nagtatagpo dulo sa dulo ay nagsasara ng lugar gaya ng polyline, at anumang nakasara sa loob nito ay iniiwan bilang isla — kasama ang gilid nito sa perimeter at binabawas ang lawak nito.

Ang lawak ay simpleng numero sa parisukat na drawing unit — walang paraan ang talampakan at pulgada para isulat ito — habang sumusunod sa unit format ang perimeter. Mag-click sa loob ng ibang lugar para sukatin ito. Kung walang saradong pumapalibot sa punto, sinasabi ng terminal kung bakit gamit ang parehong mensahe ng Hatch: no boundary found, point is not enclosed o boundary is open.

## Mabuting malaman

- Sumusukat ito laban sa mga linya, arko, bilog, ellipse, polyline at spline; eksakto ang haba at lawak, pati sa ellipse at spline.
- Hindi pinapansin ang mga bagay sa frozen na layer; sinusukat ang mga bagay sa naka-lock na layer.
- Sa malaking guhit, ang malapit lang sa cursor ang tinitingnan nito, kaya nananatili itong mabilis.

---

*Kaugnay: [Distance](../distance/), [Angle](../angle/) at [Area](../area/) para sa mga sukat sa pagitan ng mga puntong pipiliin mo, at [Hatch](../hatch/) para sa kung paano hinahanap ang mga saradong lugar.*
