---
title: File Manager — Grid na Ƙananan Hoto, Sake Suna da Sharewa
description: Umarnin FileManager yana buɗe grid na ƙananan hoto na kowane zane da aka ajiye — danna ƙaramin hoto don buɗe shi, sake suna kai tsaye, ko share da tabbatarwa.
keywords: [sarrafa fayil CAD, fayiloli kwanan nan CAD, sake sunan zane, share zane, grid na ƙananan hoto CAD, mayar da zane, sake buɗe DXF, ajiyar burauza CAD, KulmanLab files, zanen-zane da aka ajiye, IndexedDB CAD, adana zane na CAD]
group: file
order: 3
---

# File Manager

Umarnin `SarrafaFayiloli` yana buɗe **grid na ƙananan hoto** na kowane zane da aka ajiye a ajiyar gida ta burauzarka, an tsara su bisa lokacin da aka ajiye kowanne na ƙarshe. Yi amfani da shi don sake buɗe zane na baya, sake masa suna, ko share shi.

## Buɗe File Manager

- Rubuta `SarrafaFayiloli` a tashar umarni, **ko kuma**
- Danna maɓallin kayan aiki na **File Manager** (alamar tarihi) a panel na File a saman allo.

Panel yana buɗewa a gefen hagu na canvas, kuma yana rufewa kai tsaye da zaran ka fara wani umarni ko ka [shigo da](../import/) wani fayil — don haka bai taɓa dakata a kan zanen da bai riga ya lissafa ba. Yana sake buɗewa da sabon jeri a kowane lokaci.

## Grid na ƙananan hoto

Kowane zane da aka ajiye katin ne mai nuna ƙaramin hoto na kai tsaye, sunansa, da lokacin da aka sabunta shi na ƙarshe. Ana ƙirƙirar ƙananan hotuna nan take a duk lokacin da aka buɗe panel — babu abin da aka riga aka zana ko ajiye — don haka kati yana nuna alamar wuri na ɗan lokaci yayin da ake zana ƙaramin hoton nasa. Wannan alama guda ɗaya kuma tana bayyana idan ƙirƙira ta kasa, ko idan zanen ba shi da abubuwa tukuna.

| Aiki | Yadda |
|--------|-----|
| **Buɗe** zane | Danna ƙaramin hotonsa — yana maye gurbin abin da ke ciki na canvas na yanzu |
| **Sake suna** | Danna alamar fensir, ko danna-danna sau biyu a sunan |
| **Share** | Danna alamar kwandon shara, sannan tabbatar |

Idan babu fayilolin da aka ajiye tukuna, panel yana nuna "No files saved". Idan akwai fayiloli fiye da yadda za su dace a allo ɗaya, sarrafawar **Page 1 of N** tana bayyana ƙarƙashin grid.

Ana yiwa katin fayil ɗin da yake buɗe a editan yanzu alama da zoben launi mai fice, kuma **babu maɓallin sharewa** a kansa — sharewar fayil ɗin da yake buɗe zai share bayanansa da aka ajiye alhali canvas ɗin har yanzu yana nuna shi, kuma gyara na gaba zai sake ajiye shi nan take. Sake masa suna har yanzu ana iya yi.

## Share fayil

Danna alamar kwandon shara ba ya share nan take — yana kunna wani abin tabbatarwa a kan katin ("Delete this file?" tare da maɓallan **Delete** / **Cancel**), tun da sharewa dindindin ce kuma ba za a iya sokewa ba. Danna **Cancel**, danna alamar kwandon shara na wani kati, ko danna wani wuri a kan katin duk suna soke tabbatarwar da ake jira ba tare da share komai ba.

## Sake wa fayil suna

Danna alamar fensir (ko danna-danna sau biyu a sunan fayil) don gyara shi kai tsaye, sannan danna **Enter** don tabbatarwa ko **Escape** don sokewa. Ana ƙin sake suna idan sabon suna:

- babu kome, ko ya wuce haruffa 100,
- an riga an yi amfani da shi ta wata fayil da aka ajiye (ba tare da bambanta babba/ƙarama harafi ba),
- ya ƙare da digo, ko
- suna na na'urar da Windows ta keɓe kamar `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9`, ko `LPT1`–`LPT9`.

Haruffan da ba su dace a sunan fayil ba (`\ / : * ? " < > |`) ana cire su kai tsaye yayin da kake rubutu. Sake suna yana canza suna kaɗai — ba ya shafar matsayin zanen a grid, tun da an tsara shi bisa lokacin ajiyewa na ƙarshe, ba suna ba.

## Adana aikinka — ajiyar burauza ba ta dindindin ba ce

KulmanLab yana ajiye zanen-zane a **IndexedDB**, bayanan da aka gina a cikin burauzarka:

- Ana ajiye fayiloli **a gida a naʼurarka kaɗai** — ba a loda komai zuwa wani uwar garke ba.
- Kowace burauza da naʼura suna da ajiyarsu mai zaman kansa. Zane da aka ajiye a Chrome a kwamfuta ɗaya ba zai bayyana a Firefox ba, ko a wata naʼura.
- Ana iya share wannan ajiya **ba tare da gargaɗi ba** — ta hanyar sharewar bayanan shafi ko tarihin lilo, rashin sarari a diski, amfani da taga mai zaman kansa/incognito, sake shigar da burauza ko OS, ko canza naʼura. Babu ɗayan waɗannan da zai baka dama ka dawo da abin da ke can.

**Hanya tabbatacciya kaɗai don adana zane ita ce ta [fitar da shi](../export-manager/) zuwa ajiyarka. Yi amfani da `.json` (tsarin gida na KulmanLab) idan zai yiwu — yana riƙe kowane abu daidai; yi amfani da `.dxf` idan kana bukatar dacewa da wasu kayan aikin CAD. Yi wannan don duk abin da za ka yi baƙin ciki idan ka rasa shi, kuma kafin sharewar bayanan burauza, canza burauza ko naʼura, ko ajiye na'urar na ɗan lokaci.**

## Loda fayil kai tsaye a farawa

Idan ka buɗe KulmanLab CAD, manhajar tana loda kai tsaye **fayil ɗin da aka canza kwanan nan** daga ajiya. Ba ka bukata ka buɗe shi da hannu daga File Manager a kowane lokaci.

## Sarrafa ajiya

Babu iyaka madaidaiciya a adadin zanen-zanen da za ka iya ajiyewa, amma ajiyar burauza tana da iyaka. Idan ka lura da faɗakarwa na ajiya, share fayiloli tsofaffi daga File Manager — ko mafi kyau, fitar da su tukun kafin kada a rasa komai.

Don cire dukkan zanen-zane da aka ajiye lokaci guda, yi amfani da umarnin [WipeStorage](../wipestorage/).

## Sunayen fayiloli

Sabbin fayiloli da waɗanda aka shigo da su suna samun suna mai sauƙi — ba a ƙara hoton lokaci ba. Idan an riga an yi amfani da wannan suna, ana ƙara wani ƙari irin na Finder/Explorer kai tsaye (`plan (2)`, `plan (3)`, …) don kada a rubuta a kan wani abu. Kullum za ka iya baiwa fayil suna mafi bayyana daga baya ta amfani da [sake suna](#sake-wa-fayil-suna).

## Umarni masu alaƙa

- [Import](../import/) — loda zane daga tsarin fayil naka zuwa ajiyar burauza
- [Export Manager](../export-manager/) — sauke zane zuwa tsarin fayil naka
- [New File](../new-file/) — fara zane mai tsabta (ana ajiye shi kai tsaye ma)
- [WipeStorage](../wipestorage/) — share dukkan fayilolin da aka ajiye daga ajiyar burauza
