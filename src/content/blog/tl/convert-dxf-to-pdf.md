---
title: "Paano gawing PDF ang isang DXF (sa tamang eskala)"
description: "Gawing PDF ang DXF nang libre sa browser — pati sa eksaktong eskala gaya ng 1:50 sa A3, na hindi kayang gawin ng mga converter site. Walang i-install."
keywords: [gawing PDF ang DXF, DXF to PDF libre, DXF PDF online, DXF PDF eskala, i-print ang DXF sa eskala, DXF PDF converter, guhit CAD sa PDF, DXF PDF A3, eskala 1:50 PDF, DXF sa PDF nang walang AutoCAD]
date: 2026-09-03
author: KulmanLab
tag: Gabay
---

Para gawing PDF ang isang DXF, buksan ito sa isang CAD editor na tumatakbo sa browser at i-export: walang i-i-install, walang account, at nananatili sa iyong kompyuter ang file. Kung kailangang tumpak ang sukat ng PDF kapag ipinrint, kailangan mo ng layout ng papel at eksaktong eskala — at iyan mismo ang hakbang na buong-buong nilalaktawan ng mga serbisyong nagko-convert.

Ang pagkakaibang iyon ang buong punto ng gabay na ito. Ang pangkalahatang file converter ay nagbibigay sa iyo ng larawan ng iyong guhit. Ang PDF na may eskala ay nagbibigay ng guhit na mapapatungan ng ruler.

## Ang mabilisang paraan: gumawa lang ng PDF

Kapag kailangan mo lang ng bagay na nababasa para maipadala:

1. Pumunta sa [app.kulmanlab.com](https://app.kulmanlab.com) at i-drag ang `.dxf` mo sa canvas, o gamitin ang pindutang **Import** sa panel ng file.
2. I-click ang pindutang **Print**, o i-type ang `printmanager`.
3. Itakda ang **Format** sa **PDF**.
4. I-click ang **Export**. Mada-download ang file.

Ayun na. Ang preview ay iginuguhit sa parehong daanan ng code at parehong resolusyon ng file na ie-export, kaya ang nakikita mo ay siyang makukuha mo, hindi tantiya lamang.

May isang bagay na sulit malaman: **iniingatan ng PDF ang lahat ng nasa screen** — mga sukat, teksto, hatch, leader — nakaayos nang eksakto gaya ng pagkakaguhit. Dala rin ng pag-export sa DXF ang lahat ng iyon, kaya ang pagpili sa dalawa ay hindi tungkol sa kung ano ang matitira. Tungkol ito sa kailangan ng tatanggap: PDF kung babasahin o ipi-print lang, DXF kung kailangang i-edit.

## Ang tamang paraan: mag-convert sa eksaktong eskala

Kung may susukat o gagawa batay rito, hindi sapat ang "kasya sa pahina". Ang eskalang 1:50 ay nangangahulugang ang 1 mm sa papel ay 50 mm sa totoong buhay, at totoo lang iyon kung sinadya mong itakda.

1. **Lumipat sa layout ng papel.** I-click ang isang layout tab sa ibaba ng screen; ang pindutang **+** ay nagdaragdag ng bago. Ang mga layout ay papel na espasyo; ang model space ay walang pahinang mapag-eeskalahan.
2. **Itakda ang pahina.** I-type ang `pagemanager`, o i-right-click ang layout tab at piliin ang **Page Manager**. Piliin ang sukat ng papel (A4, A3, A2, Letter…) at oryentasyon.
3. **Maglagay ng viewport.** I-type ang `viewportrectangle` at ituro ang dalawang magkabilang sulok. Ang viewport ay bintanang nakatanaw sa iyong modelo.
4. **Itakda ang eskala.** Habang aktibo ang viewport, gamitin ang **tagapili ng eskala** sa control bar. Pumili ng karaniwang ratio o i-type ang sarili mo — tinatanggap nito ang anyong ratio (`1:200`, `5:1`) o payak na desimal (`0.005`), tapos Enter.
5. **I-export.** Print Manager → PDF → Export.

Sinusukat ang PDF nang sa gayon ay maipi-print ang pahina sa tunay na pisikal na eskala. I-print ito sa 100% — huwag na huwag sa "iakma sa pahina", na tahimik na muling nag-eeskala ng lahat at sumisira sa buong pagsisikap — at magiging tumpak ang mga sukat sa papel.

Kung babaguhin mo pagkatapos ang laki ng papel o ang eskala, ang mga umiiral na viewport ay muling ineeskala nang proporsyonal, kaya hindi nagkakawatak-watak ang layout.

## Pagpili ng kalidad

Tinutukoy ng dropdown na **Quality** kung anong DPI iginuguhit ang PDF:

| Quality | DPI | Para saan |
|---|---|---|
| Draft | 72 | Mabilisang tingin, pinakamaliit na file |
| Normal | 150 | Karaniwan — sapat para sa mga kalakip na A4 |
| Presentation | 300 | Kapag titingnang mabuti |
| Max | 600 | Malalaking sukat, pinong detalye |

Ang kapal ng linya ay lumalaki kasabay ng resolusyon, kaya pareho pa rin ang *pisikal* na kapal ng linya sa papel sa anumang setting — ang mas mataas na kalidad ay nagbibigay ng mas malinaw na linya, hindi mas manipis. Ang eksepsiyon ay ang hairline (kapal na `0`), na ayon sa kombensiyon ay nananatiling isang pixel ang lapad sa bawat antas.

## Mga estilo ng pag-print

Binabago ng dropdown na **Style** ang tinta at ang pahina:

- **Monochrome** — buong itim sa puti, at ito ang karaniwan. Ito ang gusto mo para sa anumang mapupunta sa papel: ang makukulay na layer na madaling basahin sa screen ay nagiging maputik na abo sa laser printer.
- **Default** — bawat bagay sa sarili nitong kulay, puting pahina.
- **Blueprint** — puting linya sa malalim na asul-Prussian, sa estilo ng klasikong blueprint. Para sa pagpapakita, hindi para sa taller.

## Pag-convert ng bahagi lamang ng guhit

Ang **Change Area** ay nagpuputol ng export tungo sa isang parihaba na iginuguhit mo sa canvas. Ang aktuwal na na-export na file ang pinuputol nito, hindi lang ang preview, at gumagana ito sa layout gayundin sa model space.

Ang mga sulok ay kumakapit sa grip at interseksiyon tulad ng ibang pagtuturo ng punto, kaya makakapagputol ka batay sa iginuhit na heometriya sa halip na sa tantiya — kapaki-pakinabang kapag apat na detalye ang laman ng isang pahina at ang ikatlo lang ang kailangan mo.

## Ang hindi nito kayang gawin

Mga tapat na limitasyon, bago ka umasa rito:

- **Ang PDF ay raster na larawan sa loob ng lalagyang PDF, hindi vector.** Sa A4 at kalidad na Normal, hindi ito mapapansin. Sa A1, o kapag may nag-zoom nang malapitan sa isang detalye, mas malinaw ang vector na PDF mula sa desktop na CAD. Itaas ang Quality sa Presentation o Max para sa malalaking sukat — pero hindi ito nagiging vector dahil doon.
- **Walang ipinapadala sa pisikal na printer.** Isang file ang makukuha mo; ang pag-print ay trabaho ng printer mo.
- **Mga desktop browser lamang** — Chrome, Firefox, Safari, Edge. Walang bersyon para sa mobile.
- **2D lamang, DXF at hindi DWG.** Kung `.dwg` ang file mo, hilingin sa nagpadala na mag-export ng DXF.

## Kailan gagamit ng iba

**Ang pangkalahatang file converter** (CloudConvert, Zamzar at katulad) ay sapat kung talagang larawan lang ang kailangan mo at wala kang pakialam sa laki ng print. Mabilis sila at kaya nilang basahin ang mga pormat na walang ibang makakabasa. Hindi ka nila bibigyan ng 1:50 sa A3.

**Desktop na CAD** — LibreCAD, QCAD, o AutoCAD kung mayroon ka — ay gumagawa ng vector na PDF at siyang tamang sagot sa malalaking teknikal na guhit na ipi-print nang maayos at susuriing mabuti.

**Ito naman**, para sa malawak na gitna: isang DXF na kailangan mo ngayon bilang tamang-eskala at may-anotasyong PDF, nang walang ini-install.

## Bago mo ipadala

- Sinadyang itakda ang eskala sa viewport, hindi iniwan sa kung ano ang kumasya
- Tugma ang sukat ng papel sa talagang ipi-print ng tatanggap
- Itinaas ang Quality nang lampas sa Normal kung mas malaki sa A4 ang pupuntahan
- Estilong Monochrome, maliban kung sinasadya mong magkulay
- Binuksan ang PDF nang isang beses para suriin bago ikabit
- Sinabihan ang tatanggap na mag-print sa 100%, hindi sa "iakma sa pahina"

Ang huling linyang iyon ang nakakasagip ng mas maraming guhit na may eskala kaysa sa lahat ng iba sa listahang ito.

---

*Kaugnay: [Print Manager](/tl/docs/commands/print-manager/) para sa lahat ng setting ng export, [Page Manager](/tl/docs/commands/page-manager/) para sa sukat ng papel at eskala ng layout, [ViewportRectangle](/tl/docs/commands/viewport-rectangle/) para sa paglalagay at pag-eeskala ng viewport, at [Import](/tl/docs/commands/import/) para sa binabasa ng KulmanLab mula sa isang DXF.*
