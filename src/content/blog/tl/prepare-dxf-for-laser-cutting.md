---
title: "Paano maghanda ng DXF file para sa laser cutting"
description: "Bakit tinatanggihan ng mga serbisyo ng pagputol ang DXF at paano ayusin ang iyo — saradong kontorno, yunit, kerf, at layer. Libre sa browser, walang i-install."
keywords: [DXF para sa laser cutting, paghahanda ng DXF laser, format ng file laser cutting, tinanggihang DXF, saradong kontorno DXF, kerf laser cutting, paghahanda ng file laser, yunit ng DXF laser, layer putol ukit, libreng DXF editor]
date: 2026-09-02
author: KulmanLab
tag: Gabay
---

Ang DXF para sa laser cutting ay nangangailangan ng apat na bagay: saradong kontorno, tamang yunit, purong heometriya ng pagputol lamang — walang sukat, tala, o hatch — at mga layer na naghihiwalay sa pagputol, paggasgas, at pag-ukit. Sakop ng gabay na ito ang bawat isa, at kung paano suriin ang iyong file bago ito tanggihan ng isang serbisyo.

Magagawa mo ang lahat ng ito nang libre sa browser sa [app.kulmanlab.com](https://app.kulmanlab.com): walang i-i-install, walang account, at hindi kailanman umaalis ang file sa iyong kompyuter. Ito ang daloy ng trabaho kung bakit orihinal naming ginawa ang KulmanLab, kaya ang mga limitasyong umiiral sa ibang gawaing CAD ay halos hindi umiiral dito: dalawang-dimensyon ang laser cutting, at DXF ang gusto ng mga serbisyo ng pagputol.

## Bakit tinatanggihan ang mga file

Limang dahilan ang halos sumasaklaw sa lahat.

**Bukas na kontorno.** Ang hugis na mukhang sarado pero may sinlaki ng buhok na siwang sa isang sulok ay hindi isang rehiyon — koleksyon ito ng mga linyang hindi magkakadikit. Kailangang malaman ng makina kung ano ang nasa loob at nasa labas, at ang bukas na kontorno ay walang loob. Ito ang pinakakaraniwang dahilan ng pagtanggi, malayo sa iba.

**Mali o malabong yunit.** Hindi maaasahang naitatala ng DXF kung ano ang ibig sabihin ng mga numero nito. Ang parehong file ay maaaring nasa milimetro, sentimetro, pulgada, o talampakan, at kadalasan ay hindi sinasabi ng file kung alin. Ang piyesang dumating na 25.4 beses na mas malaki o mas maliit ay dahil dito.

**Lahat ng hindi heometriya.** Mga sukat, title block, tala, hatch, gabay na linya. Buong gana subukan ng makina na putulin pati ang iyong anotasyon.

**Doble ang linya.** Ang dalawang magkaparehong linyang nakapatong ay nangangahulugang dadaanan ng laser nang dalawang beses ang parehong landas: sayang na oras, nasunog na gilid, at sa manipis na materyal ay panganib ng sunog.

**Lahat nasa iisang layer.** Kung hindi hiwalay ang pagputol, paggasgas, at pag-ukit, hindi matutukoy ng serbisyo ang pagkakaiba at hihilingin nilang magpadala kang muli.

## Paghahanda ng file

I-drag ang iyong `.dxf` sa canvas sa [app.kulmanlab.com](https://app.kulmanlab.com), o gamitin ang pindutang **Import** sa panel ng file. Nagloload ang guhit at iniaayon dito ang tanaw.

**1. Tingnan kung ano talaga ang hawak mo.** I-type ang `fit` para mapasok ang lahat sa tanaw. Pagkatapos ay palakihin ang bawat sulok ng bawat piyesa — hindi nakikita ang mga siwang sa buong sukat ng guhit at napakalinaw sa sampung beses na paglaki. Ang pagsusuring ito ang nagliligtas sa iyo sa email ng pagtanggi.

**2. Burahin ang hindi dapat putulin.** Gabay na linya, tala, hangganan, sukat. Nagpapakita ang `layer-isolate` ng isang layer sa bawat pagkakataon, at ganito natutuklasan ang mga labi na nagtatago sa ilalim ng tunay na heometriya.

**3. Isara ang mga siwang.** Pinuputol ng `trim` ang lumalampas na dulo kung saan naglalampasan ang dalawang linya. Kung kulang ang haba ng linya, i-drag ang grip ng dulo papunta sa katabi nito — kumakapit ang mga grip, kaya tunay na nagkikita ang mga dulo sa halip na halos.

**4. Suriin ang mga sukat.** Sinusukat ng `distance` ang pagitan ng dalawang punto, sinusukat ng `area` ang saradong rehiyon mula sa mga puntong pinindot. Sukatin ang isang bagay na alam mo ang tunay na sukat. Kung 25.4 beses ang lihis, mali ang sistema ng yunit ng iyong file.

**5. Ihiwalay ang pagputol, paggasgas, at pag-ukit.** Ilagay ang bawat gawain sa sarili nitong layer na may malinaw na pangalan: `CUT`, `SCORE`, `ENGRAVE`. Karamihan sa mga serbisyo ay humihingi nito o ng hiwalay na file. Ang `layer-manager` ang lumilikha at nagtatalaga ng mga ito.

Pagkatapos ay i-export: **Export** → **DXF**. Sumusulat ang KulmanLab ng payak na AC1032 DXF, na siyang inaasahan ng mga serbisyo ng pagputol at ng software ng makina.

## Kerf

Nag-aalis ng materyal ang laser habang pumuputol — humigit-kumulang 0.1 hanggang 0.3 mm depende sa makina, materyal, at kapal. Pumutol ka ng parisukat na 50 mm at makakakuha ka ng bahagyang mas maliit na parisukat, at hindi kakasya ang piyesang dapat sanang mahigpit na pumasok doon.

Dalawang paraan para harapin ito:

**Ipaubaya sa serbisyo.** Karamihan sa mga serbisyo ng pagputol ay sila mismo ang nagsasaayos ng kerf, at kung ginagawa nila iyon, ang sarili mong pagsasaayos ay magiging mali ang piyesa sa kabilang direksyon. Magtanong bago ka mag-ayos ng kahit ano.

**Gawin mo mismo.** Gumagawa ang `offset` ng katabing kopya ng isang hugis sa nakatakdang layo — kalahati ng lapad ng kerf, palabas para sa mga piyesang dapat panatilihin ang sukat, papasok para sa mga butas. Gumagana ito sa mga linya, bilog, arko, elipse, at polyline. Isang bagay ang inaasikaso nito sa bawat pagkakataon, kaya praktikal ito sa iilang mahalagang detalye, hindi sa isang sheet na may dalawang daang piyesa.

Kung mahalaga ang tolerance, pumutol ng isang piraso ng pagsubok bago mo italaga ang materyal.

## Ano ang dapat suriin sa pag-export ng DXF

Sulit malaman bago ka umasa rito:

- **Alisan ng tsek ang anotasyon sa halip na burahin ito.** Nae-export na ngayon ang teksto, sukat, leader at hatch, kaya anumang naiwan sa guhit ay napupunta sa file. Hindi kailangang burahin: nakalista sa Export Manager ang bawat uri ng entity na may sariling checkbox, kaya ang pag-alis ng tsek sa Text, sa mga hanay ng sukat, sa Leaders at sa Hatches ay nagbibigay ng DXF na puro heometriya ng putol, habang hindi nagagalaw ang guhit mismo.
- **Lumalabas ang teksto bilang `MTEXT`, at hindi iyon katumbas ng heometriyang puwedeng iukit.** Na-e-export ang letra kasama ang pormat nito, pero maraming software ng makina ang gustong outline sa halip na buhay na teksto sa layer ng ukit. Tingnan kung ano ang tinatanggap ng sa iyo bago magplano ng ukit dito.
- **Hindi ini-import ang block references.** Ang guhit na binuo mula sa paulit-ulit na block symbols ay papasok nang kulang, kaya ihambing ang bilang ng piyesa sa orihinal.

Ang mga spline naman ay *ine-export*. May ilang software ng makina na hindi maganda ang pagtrato rito at mas gusto ang polyline — kung ganoon ang sa iyo, iguhit muli ang mga kurba bilang polyline o arko.

## Isang babala tungkol sa awtomasyon

Ang KulmanLab ay **walang preflight na pagsusuri**. Walang naghahanap ng bukas na kontorno, dobleng linya, o problema sa yunit para iulat sa iyo. Manual ang mga pagsusuri sa itaas: palakihin, sukatin, tingnan.

Ayos lang iyon sa iilang piyesa at nakakapagod sa buong sheet na siksik ang pagkakaayos. Kung regular kang gumagawa ng mga sheet, mas mainam ang kasangkapang may awtomatikong validator — at para sa tig-isang piyesa, na siyang ginagawa ng karamihan sa halos lahat ng pagkakataon, ang maingat na pagtingin sa file ay nakakahuli ng parehong mga problema.

## Bago mo ipadala

- Bawat kontorno ng pagputol ay sarado — sinuri ang mga sulok sa mataas na laki
- Isang kilalang sukat ang nasukat at tama
- Walang natirang sukat, tala, hangganan, o gabay na heometriya
- Walang dobleng linyang magkapatong
- Pagputol, paggasgas, at pag-ukit sa hiwalay at malinaw na pangalang layer
- Kerf: inilapat na, o sinadyang ipinaubaya sa serbisyo
- Na-export bilang DXF at binuksang muli nang isang beses para makumpirmang tama ang itsura

Sampung segundo lang ang huling iyon at nahuhuli nito ang mga sorpresa sa pag-export bago pa ito mahuli ng serbisyo.

---

*Kaugnay: [Import](/tl/docs/commands/import/) para sa binabasa ng KulmanLab mula sa DXF, [Export Manager](/tl/docs/commands/export-manager/) para sa eksaktong dala ng bawat pormat ng export, [Offset](/tl/docs/commands/offset/) para sa pagsasaayos ng kerf, at [LayerManager](/tl/docs/commands/layer-manager/) para sa pagbuo ng layer ng pagputol at pag-ukit.*
