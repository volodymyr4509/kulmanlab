---
title: Naʼurar Gyaran Rubutu — Yanayin Rich da Simple a KulmanLab CAD
description: Naʼurar gyaran rubutu ta KulmanLab CAD tana da yanayi biyu — rich (tsari ga kowane harafi, layi da yawa, nade-kalma ga Text da Multileader) da simple (salo iri ɗaya, layi guda ɗaya ga abubuwan girma-girma). Chip na yanayi a kanun yana nuna wace yanayi mai aiki.
keywords: [naʼurar gyaran rubutu CAD, MTEXT, mai-nauyi karkatacce CAD, tsarin rubutu CAD, rubutu mai layi da yawa CAD, nade-kalma CAD, naʼurar gyaran rubutu rich, naʼurar gyaran rubutu simple, naʼurar gyaran girma-girma, font na musamman CAD, loda ttf CAD, kulmanlab]
group: interface
order: 5
---

# Text Editor

Naʼurar gyaran rubutu tana buɗewa idan ka sanya ko danna sau biyu abin da za a iya gyarawa. **Chip na yanayi** kaɗan a kanun — **rich** (launin accent) ko **simple** (mai duhu) — yana nuna wace yanayi mai aiki ga abin na yanzu.

## Yanayin naʼurar

### Yanayin Rich

Ana amfani a: **Text** (alamun MTEXT) da bayanin **Multileader**.

| Fasali | Hali |
|---------|-----------|
| Bold / Italic / Strikethrough | Ga kowane harafi (yana aiki ga zaɓi, ko dukkan abin idan babu zaɓi) |
| Font da Height | Canjin ga kowane harafi, ko tsoho na dukkan abin |
| Alignment (Left / Center / Right / Justify) | **Rubutu kaɗai** — ba a samuwa ga Multileader |
| `Enter` | Yana sanya karyewar layi kashi |
| `Shift+←/→` | Yana faɗaɗawa ko rage zaɓen rubutu |
| `Home` / `End` | Kai zuwa farko / ƙarshe na layin kashi na yanzu |
| Nade-kalma | Ana goyon bayansa ta grips na sake-girma na fadi-ƙaida |

### Yanayin Simple

Ana amfani a: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

An riga an cika naʼurar da alamar da ake nunawa na girma-girma na yanzu don ka iya sanya mai nuni ka gyara ƙimar kai tsaye.

| Fasali | Hali |
|---------|-----------|
| Bold / Italic / Font / Height | A samuwa — yana shafar dukkan **alamar** lokaci guda |
| Tsari ga kowane harafi | Ba a goyon baya |
| `Enter` | **Yana tabbatarwa** ƙima ya rufe naʼurar (babu karyewar layi) |
| Layi da yawa | Ba a goyon baya |
| Nade-kalma | Ba a goyon baya |

## Buɗe naʼurar

| Aiki | Sakamako |
|--------|--------|
| umarni `text` → danna matsayi | Yana ƙirƙirar sabuwar abin rubutu ya buɗe naʼurar (**rich**) |
| Danna sau biyu abin **Text** da ke akwai | Yana sake buɗe naʼurar a yanayin **rich** |
| Danna sau biyu **Multileader** da ke akwai | Yana buɗe naʼurar a yanayin **rich** |
| Danna sau biyu abin **girma-girma** | Yana buɗe naʼurar a yanayin **simple** |
| `Escape` a cikin naʼurar | Yana rufe naʼurar ya riƙe dukkan canje-canje |

## Kayan aiki

Kayan aiki yana iyo a saman akwatin dubawa na rubutu kuma yana ci gaba da kwaɓe zuwa abin yayin da kake pan ko zoom.

### Mai-nauyi · Karkatacce · Kan-tsallake

| Maɓalli | Gajeriyar hanya | Aikinsa |
|--------|----------|--------------|
| **B** | — | Kunna/kashe mai-nauyi |
| *I* | — | Kunna/kashe karkatacce |
| ~~S~~ | — | Kunna/kashe kan-tsallake |

**Yadda kunnawa take shafarwa:**

- **Da zaɓen rubutu** — salon yana shafar harufan da aka zaɓa kaɗai.
- **Babu zaɓi, mai nuni a rubutu da ke akwai** — yana kunna/kashe salon a dukkan abin (dukkan sassa).
- **Rubutu babu-kome ko sabuwar abu** — ana ajiye salon a sashen babu-kome kuma yana shafar kowace haruf da ka rubuta daga wannan lokacin gaba.

Maɓallin yana bayyana mai haske (aiki) idan kowace haruf a zaɓin na yanzu — ko harafin da ke nan take zuwa hagu na mai nuni — yana da wannan salo an saita.

### Font

Dropdown yana kungiyar fonts da ake da su zuwa **Default** (sans-serif da aka gina), **User** (fonts naka da ka loda, idan akwai), **Free** (saiti na Google Fonts da aka haɗa), da **System** (fonts na OS na yau da kullum kamar Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console, da Impact).

- **Da zaɓi** — yana canza font ga harufan da aka zaɓa kaɗai.
- **Babu zaɓi** — yana shafar font ga dukkan abin.

Dropdown yana nuna font na harafin zuwa hagu na mai nuni idan babu zaɓi.

Ba a iyakance ga jerin da aka gina ba — danna maɓallin **Font Manager** a kayan aiki don loda fayil ɗin `.ttf` naka ka ƙara shi zuwa ƙungiyar **User**. Duba [Font Manager](../../commands/font-manager/) don bayanai.

### Height

Filin lamba yana saita **cap height** (tsayin babban haruf) a unit na zane.

- **Da zaɓi** — yana canza tsayi ga harufan da aka zaɓa, daban da tsayin asali na abin.
- **Babu zaɓi** — yana canza tsayin asali na abin (yana shafar dukkan harufan da ba su da canjin tsayi na kansu).

Filin yana nuna tsayin harafin zuwa hagu na mai nuni. Bar shi babu-kome don yin amfani da tsoho na abin.

### Daidaitawa

Maɓallai huɗu — **Align Left**, **Align Center**, **Align Right**, **Justify** — suna saita daidaitawar sakin layi. Ana samu ga abubuwan **Text** kaɗai; alamun Multileader da na girma-girma ba sa nuna waɗannan maɓallan.

- Danna maɓalli yana sake daidaita kowace layi a cikin akwatin dubawa da ke akwai na abin — ba ya motsa maki na sakawa ko canza girman akwatin.
- Danna maɓallin da ke aiki tuni yana share canjin, ya koma zuwa ginshiƙin da maki na haɗi na abin ke nunawa.
- **Justify** yana miƙe tazarar tsakanin kalmomi don kowace layi ta cika fadin layi gaba ɗaya.

## Mai nuni da kewayawa

| Maɓalli | Aiki |
|-----|--------|
| `←` / `→` | Motsa caret haruf ɗaya hagu ko dama |
| `Home` | Kai zuwa farkon layin kashi na yanzu |
| `End` | Kai zuwa ƙarshen layin kashi na yanzu |
| `Shift` + `←` / `→` | Faɗaɗawa ko rage zaɓin |
| `Backspace` | Share haruf zuwa hagu (ko zaɓin) |
| `Delete` | Share haruf zuwa dama (ko zaɓin) |
| `Enter` | Sanya karyewar layi |
| `Escape` | Rufe naʼurar |

Tsayin mai nuni yana daidaitawa kai tsaye da cap height na harafin makwabta, ciki har da girman ƙarami da ake amfani da shi ga subscript da superscript.

## Kwafi, yanke, da manna

| Maɓalli | Aiki |
|-----|--------|
| `Ctrl+C` / `Cmd+C` | Kwafi rubutun da aka zaɓa |
| `Ctrl+X` / `Cmd+X` | Yanke rubutun da aka zaɓa |
| `Ctrl+V` / `Cmd+V` | Manna a mai nuni |

Kwafi da yanke suna bukatar zaɓen rubutu mai aiki. Rubutu da aka manna koyaushe sauƙi ne — yana ɗaukar tsarin (mai-nauyi, karkatacce, font, tsayi) da ke wurin mai nuni maimakon ɗaukar tsarin da yake da shi lokacin da aka kwafe shi.

A **yanayin rich**, ana kiyaye karyewar layi a rubutun da aka manna. A **yanayin simple**, ana cire karyewar layi, domin alamun girma-girma layi guda ɗaya ne.

## Nade-kalma

Idan abin rubutu yana da **reference width** an saita, layuka masu tsawo ana nade su a hankali a iyakokin kalma don su dace da wannan fadin.

Don saita ko canza reference width yayin da abin ya zaɓa, ja **grips na sake-girma** — murabbaʼan bakin ciki a gefunan hagu da dama na akwatin dubawa mai ɗigo-ɗigo. Abin ciki yana sake gudana a lokaci na rai yayin da kake ja.

Saita reference width zuwa sifili (ja grips tare ko share ƙimar a panel na abubuwa) yana cire nade-kalma kuma yana barka layuka su girma cikin yardar kaina.

## Rubutu mai layi da yawa

Danna `Enter` don sanya karyewar layi kashi. Kowace layin kashi mai zaman kansa ne — `Home` da `End` suna kewayawa ne kawai a cikin layin kashi na yanzu.

Ana ajiye karyewar layi kashi da tsari ga kowane harafi ta amfani da tsarin MTEXT kuma suna wanzuwa a cikakken juyawar DXF.

## Dacewa da DXF

Ana ajiye alamun rubutu a matsayin **MTEXT** a fayilolin DXF. Ana kodada mai-nauyi da karkatacce a matsayin `\L`, `\K`, `\O`, da sauya font a ciki (`\f`). Ana kodada tsayi ga kowane harafi a matsayin `\H`. Ana kiyaye dukkan tsari a fitarwa kuma ana iya karanta shi ta LibreCAD, FreeCAD, da wasu manhajoji masu dacewa da DXF.
