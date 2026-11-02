---
title: "Umarnin Explode — raba polyline ko block zuwa sassansa"
description: "Umarnin Explode yana raba polyline zuwa abubuwan Line da Arc ɗinsa, ko block reference zuwa abubuwan da block ɗinsa ke zanawa, a wurin. Guntayen suna kama da asalin daidai."
keywords: [umarnin explode CAD, fashe polyline CAD, rarraba polyline zuwa layuka, canza polyline zuwa line da arc, kulmanlab]
group: edit
order: 19
---

# Explode

Umarnin `Wargaza` yana rarraba [Polyline](../polyline/) zuwa abubuwan [Line](../line/) da [Arc](../arc/) daban-daban nata — ɗaya ga kowane sashi, daidai inda kusurwoyin polyline da kansa suke. Guntuwan suna maye gurbin polyline a wurinta kuma suna riƙe da kaurin layi, launi, Layer, da linetype nata.

Explode yana aiki a kan abubuwan **Polyline** da **block references**.

## Amfani da explode

Hanyoyi biyu don gudanar da ita, tsari iri ɗaya da [Delete](../delete/):

**Zaɓi da farko, sannan explode** — hanya mafi sauri:

1. Zaɓi polyline ɗaya ko fiye a kan canvas.
2. Rubuta `Wargaza` a tashar umarni, ko zaɓi **Explode** daga jerin zaɓin kwamitin Edit.

Ana fashe polyline ɗin da aka zaɓa nan take — babu wani mataki na tabbatarwa daban, tunda an riga an zaɓi wani abu.

**Kunna umarnin, sannan zaɓi**:

1. Rubuta `Wargaza` ko zaɓi **Explode** daga jerin zaɓi ba tare da an zaɓi komai ba.
2. **Zaɓi polylines ko block references** — danna don sauyawa, ko ja don zaɓar ta yanki.
3. Danna **Enter** ko **Space** don tabbatarwa da fashe polylines da aka zaɓa.

Yayin zaɓe, polylines da block references kaɗai ake ɗauka — danna Line, Circle ko wani abu daban ba ya yin komai, kuma jan yanki yana watsi da duk sauran abin da ke ciki ko ya ratsa shi.

## Abin da ke fitowa

Kowane sashin polyline yana zama abu nasa:

- **Sashi madaidaici** yana zama **Line**.
- **Sashin baka** (daga [zaɓin Arc](../polyline/) na Polyline) yana zama **Arc**, wanda ya dace daidai da tsakiya, radius, da zagayawar bakan asali.

Kowace Line da Arc da aka samu tana gadon **kaurin layi, launi, Layer, linetype, da ma'aunin linetype** na polyline na asali — babu abin da ya canza a kamannin geometry, sai dai yanzu waɗannan abubuwa masu zaman kansu ne da yawa maimakon polyline guda ɗaya mai haɗi.

**Block reference** yana zama abubuwan da block ɗinsa ke zanawa, a wurin da reference ya nuna su. Ana barin abubuwan da block ke ɓoyewa — sauran yanayin dynamic block; kowane attribute yana zama Text na yau da kullum tare da ƙimarsa; guntayen da aka zana ByBlock suna ɗaukar launin reference, kuma na layer 0 suna ɗaukar layer ɗinsa. Block da ke ciki yana fitowa a matsayin block reference nasa, wanda za ka iya raba shi ma. Ba a ɗaukar reference da aka canza girmansa daban a X da Y, domin da'irorinsa za su zama ellipse.

Ana iya soke fashewar a matsayi ɗaya tare da [Undo](../undo/), kamar kowane gyara.

## Zaɓi yayin umarnin

| Hanya | Hali |
|-------|------|
| **Danna** | Yana sa ko cire polyline ko block reference da ke ƙarƙashin kibiya a zaɓin; danna wani abu daban ba ya yin komai |
| **Ja zuwa dama** (tsattsauran) | Yana zaɓar polylines da block references da ke cikin akwatin gaba ɗaya kaɗai |
| **Ja zuwa hagu** (ratsawa) | Yana zaɓar polylines da block references da ke yanke iyakar akwatin |
| **Enter** / **Space** | Yana tabbatarwa kuma yana raba zaɓin |

## Abubuwan da ake goyon baya

| Abu | Ana Goyon Baya |
|--------|-----------|
| Polyline / Rectangle | Eh |
| Block reference | Ee, sai dai idan girmansa ya bambanta a X da Y |
| Line, Arc, Circle, Ellipse | A'a — babu abin fashewa |
| Text, Spline, Dimension, Leader, Hatch | A'a |
