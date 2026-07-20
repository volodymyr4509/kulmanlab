---
title: Text — Sanya Alamun MTEXT a KulmanLab CAD
description: Umarnin Text yana sanya alamar rubutu mai layi da yawa da tsari mai wadata. Danna matsayi, rubuta a naʼurar gyaran popup, ka danna Escape don tabbatarwa. Danna sau biyu kowace alama da ke akwai don sake buɗe naʼurar.
keywords: [umarnin text CAD, MTEXT, sanya alamar rubutu CAD, bayanin rubutu CAD, mai-nauyi karkatacce CAD, rubutu mai layi da yawa CAD, kulmanlab]
group: shapes
order: 7
---

# Text

Umarnin `text` yana sanya alamar rubutu mai layi da yawa. Bayan ka danna matsayi a kan canvas, naʼurar gyaran popup tana buɗewa a **rich** mode — za ka iya rubuta abin ciki, yi amfani da mai-nauyi/karkatacce/kan-tsallake ga kowane harafi, canza fonts da tsayi, da sanya karyewar layi. Danna **Escape** don tabbatarwa ka rufe naʼurar.

Duba shafin [Naʼurar Gyaran Rubutu](../../interface/text-editor/) don cikakken bayanin editan, ciki har da kwatance na yanayin **rich** da **simple**.

## Sanya alamar rubutu

1. Rubuta `text` a tashar umarni ko danna maɓallin kayan aiki na **Text**.
2. **Danna matsayin anchor** a kan canvas. Ko rubuta `X,Y` ka danna **Enter** don daidaitawa madaidaiciya.
3. **Popup na naʼurar gyaran rubutu** yana buɗewa a saman sabuwar alama. Rubuta abin cikinka.
4. Danna **Escape** don tabbatar da alamar ka rufe naʼurar.

Tsayi na tsoho shine **12 unit na zane**.

## Gyara alama da ke akwai

**Danna sau biyu** kowace alamar rubutu a kan canvas don sake buɗe naʼurar ga wannan alamar.

## Shigar da daidaitawa ga anchor

Maimakon dannawa, rubuta matsayi madaidaici:

1. Rubuta ƙimar X.
2. Danna `,` — tashar umarni tana nuna `[X], [Y{cursor}]`.
3. Rubuta ƙimar Y.
4. Danna **Enter** don sanya anchor ka buɗe naʼurar.

## Marfe na maɓallan madannai

**Mataki na anchor**

| Maɓalli | Aiki |
|-----|--------|
| `0`–`9`, `.`, `-` | Fara shigar da daidaitawar X |
| `,` | Kulle X ka koma shigar da Y |
| `Backspace` | Share tsohon harafi na ƙarshe da aka rubuta |
| `Enter` | Tabbatar da daidaitawar da aka rubuta |

**Mataki na naʼurar gyaran rubutu** (duba [Naʼurar Gyaran Rubutu](../../interface/text-editor/) don cikakken bayani)

| Maɓalli | Aiki |
|-----|--------|
| Kowane haruf mai buga | Sanya a mai nuni |
| `Backspace` / `Delete` | Share haruf makwabta ko zaɓi |
| `Enter` | Sanya karyewar layi |
| `←` / `→` | Motsa caret |
| `Home` / `End` | Kai zuwa farko / ƙarshe na layi kashi |
| `Escape` | Tabbatarwa ka rufe naʼurar |

## Gyaran grip — sake matsayi

Alamar rubutu da aka zaɓa yana nuna grip ɗaya a tabon anchor:

| Grip | Matsayi | Aikinsa |
|------|----------|--------------|
| **Anchor** | Hagu-ƙasa na rubutu | Ja don sake matsayin alama |

## Zaɓen rubutu

| Hanya | Hali |
|--------|-----------|
| **Danna** | Yana zaɓe idan dannawa ta kasance cikin akwatin dubawa mai juyawa na rubutu |
| **Ja dama** (mai tsauri) | Dukkan kusurwoyi huɗu na akwatin dubawa dole ne su kasance cikin yankin zaɓi |
| **Ja hagu** (mai haɗuwa) | Kowace haɗuwa tsakanin akwatin dubawa na rubutu da yankin zaɓi yana zaɓen ta |

## Umarnin gyara da ake goyon baya

| Umarni | Abin da ke faruwa da rubutu |
|---------|--------------------------|
| [Move](../move/) | Yana motsa tabon anchor |
| [Copy](../copy/) | Yana ƙirƙirar alama iri ɗaya a sabon matsayi |
| [Rotate](../rotate/) | Yana juya matsayin anchor kuma yana ƙara kusurwar zuwa Rotation Degree |
| [Mirror](../mirror/) | Yana yin madubi na tabon anchor a kan axis na madubi (mahrukin rubutu ba a juye shi ba) |
| [Scale](../scale/) | Yana canza girman matsayin anchor kuma yana ninka tsayin da abin girma |
| [Delete](../delete/) | Yana cire alama |

Text ba ta goyon bayan **Offset**, **Trim**, ko **Extend** ba.

## Abubuwan

Idan alamar rubutu ya zaɓa, panel na abubuwa yana nuna:

**Gaba ɗaya**

| Abu | Tsoho | Ma'ana |
|----------|---------|---------|
| Launi | 256 (ByLayer) | Alamar launi ta ACI |
| Layer | `0` | Sanya layer |

**Geometry**

| Abu | Ma'ana |
|----------|---------|
| Position X / Position Y | Daidaitawar tabon anchor |
| Height | Tsayin rubutu na asali a unit na zane (tsoho: **12**) |
| Rotation Degree | Juyawa nagaba-da-kusurwar-agogo a digiri |

**Abubuwan**

| Abu | Ma'ana |
|----------|---------|
| Content | Mahrukin rubutu (ana kiyaye kodun MTEXT a ciki) |
| Attachment Point | Lambar daidaitawa (1 = hagu-sama … 9 = dama-ƙasa) |

Text ba ta da abubuwan Linetype, Linetype Scale, ko Thickness.

## DXF — Abin MTEXT

Alamun rubutu ana ajiye su a matsayin abubuwan **MTEXT** a fayil ɗin DXF. Ana kodada mai-nauyi da karkatacce ta amfani da `\L`, `\K`, `\O`, da sauya font a ciki (`\f`). Ana kodada tsayi ga kowane harafi a matsayin `\H`. Dukkan tsari yana wanzuwa a cikakken juyawar DXF kuma ana iya karanta shi ta LibreCAD, FreeCAD, da wasu manhajoji masu dacewa da DXF.
