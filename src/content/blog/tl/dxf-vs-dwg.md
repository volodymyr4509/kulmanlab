---
title: "DXF at DWG: ano ang pagkakaiba?"
description: "Ang DWG ay katutubong pormat ng AutoCAD, ang DXF ang bukas na palitan. Ano ang magkaiba, alin ang kailangan mo, at paano makakuha ng DXF kapag DWG ang natanggap."
keywords: [DXF at DWG, pagkakaiba ng DXF at DWG, DWG o DXF, ano ang DWG, ano ang DXF, DWG papuntang DXF, mga pormat ng file CAD, pagbukas ng DWG, pormat na DXF, aling pormat CAD]
date: 2026-09-02
author: KulmanLab
tag: Gabay
---

Ang DWG ang katutubong pormat ng file ng AutoCAD: binary, pag-aari, at hindi idinodokumento ng Autodesk. Ang DXF naman ang pormat ng palitan na inilalathala ng Autodesk para mabasa rin ng ibang programa ang parehong mga guhit. Parehong heometriya, magkaibang lalagyan — at isa lang sa dalawa ang ginawa para maiabot ang file sa mga taong nasa labas ng sarili mong software.

Ang huling puntong iyon ang buong praktikal na pagkakaiba, at iyon ang nagpapasya kung ano ang dapat mong hingin.

## Ang maikling bersyon

| | DXF | DWG |
|---|---|---|
| Kahulugan | Drawing Exchange Format | Drawing |
| Nailathalang espesipikasyon | Oo, ng Autodesk | Hindi |
| Pag-encode | Teksto (may binary na uri rin) | Binary |
| Layunin | Paglilipat ng guhit sa pagitan ng mga programa | Sariling pormat sa trabaho ng AutoCAD |
| Laki ng file | Mas malaki | Mas maliit |
| Nababasa ng ibang software | Napakalawak | Pabagu-bago, sa pamamagitan ng mga aklatang binuo mula sa pagsusuri |
| Dala ang lahat ng kayang gawin ng AutoCAD | Hindi — isang dokumentadong bahagi lamang | Oo |

## Bakit may dalawang pormat

Inilabas ng Autodesk ang AutoCAD noong 1982 na DWG ang pormat sa trabaho. Ginawa ito para sa ginhawa ng iisang programa: siksik, binary, at malayang magbago kailanman kailanganin ng AutoCAD.

Kaya nga masamang bagay itong ipadala kaninuman. Kaya naglathala rin ang Autodesk ng DXF — ang parehong guhit na isinulat sa dokumentado at nababasang anyo, na maaaring sundin ng sinumang developer. Buksan ang isang `.dxf` sa text editor at makikita mo ang mga group code at pangalan ng seksyon sa payak na ASCII.

Sabay silang binibigyan ng bersyon. Bawat labas ng AutoCAD ay may kaakibat na rebisyon ng DWG at katumbas na rebisyon ng DXF; ang markang `AC1032` na minsang nakikita sa ulo ng file ay tumutukoy, halimbawa, sa henerasyong AutoCAD 2018.

Kaya hindi mas luma o mas mababa ang DXF. Iisang guhit din iyon, sinadyang gawing nababasa.

## Ano ang talagang nagkakaiba sa praktika

**Pagiging bukas.** Idinodokumento ng Autodesk ang DXF at hindi ang DWG. Ang mga programang nagbabasa ng DWG — at marami sila — ay nakasandal sa mga aklatang nabuo mula sa pagsusuri ng pormat. Gumagana ito nang maayos at ganap na lehitimo, pero ibig sabihin ay laging nahuhuli ang suporta sa DWG sa mga bagong labas at nagkakaiba-iba sa bawat aplikasyon, samantalang ang suporta sa DXF ay maaaring ipatupad ninuman diretso mula sa espesipikasyon.

**Laki.** Kadalasang mas maliit nang malaki ang binary na DWG kaysa sa parehong guhit bilang ASCII na DXF. Sa malaking proyekto mahalaga ito; sa isang piyesa hindi.

**Katapatan.** Nakakapaglaman ang DWG ng lahat ng kayang ipahayag ng AutoCAD, pati mga uri ng bagay na walang konsepto sa ibang programa. Ang DXF ay sumasaklaw sa isang dokumentadong bahagi. Para sa karaniwang 2D na paggawa ng guhit — linya, arko, bilog, polyline, teksto, sukat, layer — sapat na ang bahaging iyon. Sa modelong nakasandig sa pag-aaring bagay ng AutoCAD, may nawawala kapag ini-export sa DXF.

**Lawak ng suporta.** Halos lahat ng kasangkapang CAD, CAM at vector ay nagbabasa ng DXF. Mas kakaunti ang nagbabasa ng DWG, at ang mga iyon ay madalas na hindi ganap ang suporta.

## Alin ba talaga ang kailangan mo?

**May nagpadala sa iyo ng file at hindi mo mabuksan.** Tingnan muna ang tunay na extension. Karamihan ay "DWG" ang tawag sa dalawa, at kalahati ng pagkakataon ay `.dxf` pala ang nasa downloads mo na kaya mo nang buksan. Tingnan ang [pagbukas ng DXF nang walang AutoCAD](/tl/blog/open-dxf-file-without-autocad/).

**Ipapadala mo sa laser cutting, CNC shop, o tagagawa.** DXF, halos palagi. Ang software ng makina at mga serbisyo ng pagputol ay nakabuo sa paligid nito, at ang 2D na heometriya ng pagputol ay maluwag na kasya sa dokumentadong bahagi. Tingnan ang [paghahanda ng DXF para sa laser cutting](/tl/blog/prepare-dxf-for-laser-cutting/).

**Ipapadala mo sa arkitekto o inhinyerong nagtatrabaho sa AutoCAD.** Magtanong. Marami ang mas gusto ang DWG dahil iyon ang inaasahan ng kanilang daloy ng trabaho, at kung hindi naman, bubuksan nila nang maayos ang DXF.

**Nag-aarkibo ka para sa mahabang panahon.** DXF. Ang dokumentadong pormat na teksto ay mababasa pa rin makalipas ang dalawampung taon ng sinumang may espesipikasyon at text editor. Iyan mismong argumento ang buong dahilan kung bakit may mga pormat ng palitan.

**May gustong tumingin lang.** Wala sa dalawa — magpadala ng PDF. Tingnan ang [paggawang PDF ng DXF](/tl/blog/convert-dxf-to-pdf/).

## Paano makakuha ng DXF kapag DWG ang ipinadala sa iyo

Ang maaasahang paraan ay humingi. Bubuksan ng nagpadala ang file sa sarili niyang programang CAD at gagawa ng *Save As* o *Export* → DXF. Aabutin ito ng mga sampung segundo, kaya ito ng bawat desktop na aplikasyong CAD, at ang file ay lalabas mula sa software na lumikha nito sa halip na mula sa hula ng ibang partido tungkol dito.

Kung hindi puwedeng magtanong, may mga converter naman. Dalawang bagay ang timbangin: sa pag-convert mismo nawawala ang katapatan, at ina-upload mo ang guhit ng iba sa serbisyong wala ka sa kontrol. Sa proyektong libangan, ayos lang. Sa trabahong may kliyente, magtanong.

Kapag humihingi, mabuting banggitin ang bersyon. **Pinakaligtas ang DXF R12** — napakaluma, suportado saanman, at kung payak na 2D na heometriya ang guhit ay wala namang mahalagang mawawala. Lalo na ang mas lumang software ng makina ay higit na magkasundo rito.

## Dalawang bagay na nagkakamali ang mga tao

**"May nawawala sa DXF."** Sa diwa lamang na hindi nito dala ang pag-aaring uri ng bagay ng AutoCAD. Ang mga linya, arko, bilog, polyline, teksto, sukat at layer ay dumadaan nang buo. Sa gawaing 2D, kadalasang zero ang nawawala.

**"Lumang pormat ang DXF."** Binibigyan ito ng bersyon katabi ng DWG mula 1982 at ganoon pa rin hanggang ngayon. Ang kalituhan ay dahil sa lawak ng paggamit ng R12 bilang target ng compatibility kaya inaakalang doon huminto ang DXF.

## Saan nakatayo ang kasangkapang ito

Ang [KulmanLab](https://kulmanlab.com/tl/) ay nagbabasa ng **DXF, hindi DWG**, at sulit sabihin kung bakit sa halip na ituring itong pagkukulang: dokumentado ang DXF, kaya maaaring tama ang isang implementasyon sa pamamagitan lamang ng pagbabasa ng espesipikasyon. Ang DWG ay mangangahulugan ng pagsandal sa aklatang binuo mula sa pagsusuri, sa loob ng browser, para sa pormat na nagbabago ayon sa iskedyul ng Autodesk.

Kung `.dwg` ang hawak mo, hindi ito bubuksan nito. Kung `.dxf`, mabubuksan mo sa isang tab ng browser nang walang ini-install: [app.kulmanlab.com](https://app.kulmanlab.com).

Ang isinusulat nitong pabalik ay heometriya kasama ang teksto — mga linya, bilog, arko, elipse, polyline, spline at teksto, kasama ang mga layer at uri ng linya. Ang hatch, sukat, at leader ay sa ngayon ay hindi pumapasok sa na-export na DXF.

---

*Kaugnay: [Import](/tl/docs/commands/import/) para sa eksaktong binabasa ng KulmanLab mula sa isang DXF, at [Export Manager](/tl/docs/commands/export-manager/) para sa dala ng bawat pormat ng export.*
