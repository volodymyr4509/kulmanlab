---
title: Pagsubaybay sa distansya — Mag-type ng eksaktong haba mula sa isang naka-pin na punto
description: Hinahayaan ng toggle na Dist na ang pinakahuling vector pin ang maging angkla kung saan sumusukat ang pagsubaybay sa anggulo, kaya makapag-type ka ng eksaktong haba at makapaglagay ng punto sa tumpak na distansya at anggulo mula sa isang umiiral na punto — pati na ang unang punto ng isang hugis.
keywords: [paglalagay ng distansya CAD, pag-type ng eksaktong haba CAD, toggle na Dist, pagsubaybay sa distansya mula sa mga pin, polar tracking CAD, direktang paglalagay ng distansya, kulmanlab]
group: interface
order: 3
---

# Pagsubaybay sa distansya

Ang **pagsubaybay sa distansya** ay nagpapahintulot sa iyong maglagay ng punto sa pamamagitan ng pag-type ng eksaktong haba sa halip na mag-click. Kinokontrol ito ng toggle na **Dist** sa control bar, katabi ng [Pins](../vector-pins/) at ANGL, at **naka-on ito bilang default**, na nananatili ang setting sa pagitan ng mga sesyon.

Makitid ang idinaragdag nito ngunit kapaki-pakinabang: hinahayaan nitong ang **pinakahuling vector pin** ang maging angkla kung saan sumusukat ang pagsubaybay sa anggulo. Kung wala ito, ang isang utos ay makasusukat lamang mula sa puntong nakalap na nito mismo — ibig sabihin, ang *unang* punto ng isang hugis ay walang anumang masusukatan.

## Magkakasabay na gumagana ang tatlong toggle

Hindi nakatayo mag-isa ang pagsubaybay sa distansya. Dapat nasa tamang kalagayan ang dalawa pang toggle bago ka makapag-type ng haba:

| Toggle | Papel |
|--------|-------|
| **Pins** | Nagbibigay ng puntong sanggunian. I-hover ang cursor sa isang snap point nang 500 ms upang i-pin ito — tingnan ang [Vector Pins](../vector-pins/). |
| **ANGL** | Nagbibigay ng anggulo. Nagiging magagamit lamang ang pagsubaybay sa distansya kapag naka-lock na sa anggulo ang cursor, kaya dapat nakatakda ang ANGL sa isang hakbang (10°, 20°, 30°, 45°, 90°) at hindi sa Off. |
| **Dist** | Pinapayagang gamitin ang pin bilang angkla sa halip na ang sariling punto lamang ng utos. |

Kung naka-on ang Pins at Dist ngunit nasa **Off** ang ANGL, walang mangyayari: walang naka-lock na direksyon na masusukatan ng haba.

## Paano magkakabit ang Pins at Dist

Walang kabuluhan ang pagsubaybay sa distansya kapag naka-off ang mga pin, kaya magkasabay ang dalawang toggle:

- Ang **pag-on sa Pins** ay nag-o-on din sa **Dist**.
- Ang **pag-off sa Pins** ay nag-o-off din sa **Dist**.
- Ang **pag-on sa Dist** ay nag-o-on sa **Pins** kung hindi pa ito nakabukas.
- Ang **pag-off sa Dist** ay nag-iiwan sa **Pins na nakabukas**.

Kaya hindi kailanman magiging aktibo ang Dist habang hindi aktibo ang Pins, ngunit maaari mong panatilihin ang pagsubaybay sa pin para sa pagkakahanay at patayin ang pagsubaybay sa distansya — kapaki-pakinabang kapag gusto mo ng mga linyang sanggunian nang hindi nagla-lock ang cursor sa isang pin gayong sa sarili mong huling punto ka sana nagla-lock.

## Paglalagay ng punto sa eksaktong distansya

1. I-on ang **Pins** at **Dist**, at itakda ang **ANGL** sa isang hakbang ng anggulo.
2. Magsimula ng utos na humihingi ng punto — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/), at iba pa.
3. **Mag-pin ng puntong sanggunian**: i-hover ang cursor sa isang umiiral na snap point hanggang maging punong parisukat ang marker.
4. Ilayo ang cursor mula sa pin, humigit-kumulang sa anggulong nais mo. Kapag lumapit ito sa isa sa mga hakbang ng ANGL, **magla-lock** ang direksyon — lilitaw ang isang tagapagpahiwatig ng pagsubaybay mula sa pin.
5. **I-type ang haba** at pindutin ang **Enter** o **Space**. Ilalagay ang punto nang eksakto sa layong iyon mula sa pin, sa gawi ng naka-lock na anggulo.

Sinasabi ng prompt sa terminal kung kailan ka makapag-type. Habang naka-lock, ganito ang mababasa:

```
pick start point or enter length: [ ]
```

at lilitaw sa loob ng mga panaklong ang halagang tina-type mo.

## Bakit mahalaga ang unang punto

Ito ang kasong imposible sana kung wala ito. Sabihin nating kailangang magsimula ang isang linya nang eksaktong 250 yunit sa kanan ng isang umiiral na sulok:

1. Simulan ang [Line](../../commands/line/).
2. I-pin ang umiiral na sulok.
3. Gumalaw pakanan hanggang mag-lock ang direksyon sa 0°.
4. I-type ang `250`, pindutin ang **Enter**.

Nagsisimula na ngayon ang linya sa puntong 250 yunit mula sa sulok, nang walang pantulong na geometry at walang kuwentahan. Kung wala ang Dist, wala pang nakalap na punto ang utos na Line, kaya walang anumang *pagsusukatan* ng na-type na haba — makakapag-click ka lang nang tantiya, o makakaguhit ng pantulong na linya at buburahin ito pagkatapos.

Para sa **ikalawa at mga sumunod** na punto, may sariling angkla na ang utos (ang naunang punto), at iyon ang unang ginagamit. Sinasangguni lamang ang pin bilang alternatibo kapag hindi naka-lock ang sarili mong angkla, kaya ang pag-pin ng isang bagay ay hindi umaagaw ng lock na mayroon ka na.

## Nagyeyelo ang lock kapag nag-type

Sa sandaling magsimula kang mag-type ng mga digit, hihinto na sa pagbabago ang angkla. Alinmang punto ang naka-lock nang dumating ang unang digit ang mananatiling angkla hanggang kumpirmahin mo o laktawan ang laman ng field — ang paggalaw ng mouse sa gitna ng pag-type ay hindi tahimik na maglilipat ng sukat sa ibang pin o sa sariling punto ng utos.

## Sanggunian sa keyboard

| Key | Aksyon |
|-----|--------|
| `0`–`9`, `.` | Idaragdag sa haba |
| `-` | Negatibong haba — binabaligtad ang direksyon sa gawi ng naka-lock na anggulo (unang karakter lamang) |
| `Backspace` | Buburahin ang huling karakter |
| `Enter` / `Space` | Ilalagay ang punto sa na-type na haba |
| `Escape` | Kanselahin ang utos; nabubura ang lock at ang na-type na halaga |

Opsyonal ang pag-type ng haba. Habang naka-lock ang direksyon ay maaari ka pa ring mag-click, at ipoproyekta ang punto sa naka-lock na anggulo.

## Saan ito gumagana

Available ang pagsubaybay sa distansya sa bawat utos na humihingi sa iyong pumili ng mga punto:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) at [ViewportCopy](../../commands/viewport-copy/).

## Tingnan din

- [Vector Pins](../vector-pins/) — pag-pin ng mga punto at pagsubaybay sa mga linyang sanggunian nito
- [Grid & Snap](../grid-snap/) — ang iba pang pantulong sa katumpakan sa control bar
- [Distance](../../commands/distance/) — pagsukat ng umiiral na distansya sa halip na mag-type ng bago
