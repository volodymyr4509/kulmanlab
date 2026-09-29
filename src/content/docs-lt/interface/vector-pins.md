---
title: Vector Pins — prisitraukimas išilgai atskaitos linijų per prisegtus taškus
description: Vector Pins leidžia prisegti prisitraukimo tašką užvedus žymeklį pusei sekundės, tada sekti žymeklį brūkšninėmis horizontaliomis ir vertikaliomis atskaitos linijomis per prisegtą tašką — sulygiuokite naują geometriją su esamais taškais be konstrukcinių linijų.
keywords: [vektoriniai smeigtukai, objektų prisitraukimo sekimas, atskaitos linijos, lygiavimo sekimas, prisitraukimo sekimas CAD, konstrukcinės linijos, kulmanlab]
group: interface
order: 2
---

# Vector Pins

**Vector Pins** yra braižymo priemonė, leidžianti sulygiuoti naują geometriją su esamais taškais nebraižant konstrukcinių linijų. Užveskite žymeklį ant prisitraukimo taško pusei sekundės, kad jį *prisegtumėte* — smeigtukas tada projektuoja nematomas horizontalias ir vertikalias atskaitos linijas, o žymeklis prie jų prisitraukia, kai tik priartėja. Tai KulmanLab CAD atitikmuo objektų prisitraukimo sekimui darbalaukio CAD programose.

Funkcija valdoma **Pins** jungikliu valdymo juostoje (šalia Grid, Snap ir ANGL). Ji **pagal numatytuosius nustatymus įjungta**, o nustatymas išlieka tarp sesijų.

## Taško prisegimas

1. Paleiskite komandą, kuri prašo taško — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/) ir taip toliau.
2. Perkelkite žymeklį ant esamos geometrijos prisitraukimo taško — galo, vidurio taško ar centro žymos.
3. **Palaikykite žymeklį nejudinamą 500 ms.** Žymė virsta užpildytu akcento **kvadratu** — taškas dabar prisegtas.
4. Kartokite, kad prisegtumėte tiek taškų, kiek reikia. Kiekvienas smeigtukas toliau projektuoja savo atskaitos linijas.

Prisegimas veikia ir už komandos ribų: užvedus žymeklį ant pasirinkto objekto **rankenėlės** ji prisegama taip pat.

## Sekimas atskaitos linijomis

Kiekvienas prisegtas taškas projektuoja dvi nematomas atskaitos linijas — vieną **horizontalią** ir vieną **vertikalią** — per tikslias savo koordinates. Judant žymekliui:

- Per **12 px** nuo smeigtuko vertikalios linijos žymeklis prie jos prisitraukia: per visą vaizdą per smeigtuką nubrėžiama brūkšninė akcento linija, o **X žymė** rodo prisitraukusią padėtį. Jūsų X koordinatė dabar yra *tiksliai* smeigtuko X.
- Tas pats taikoma horizontaliai linijai ir smeigtuko Y koordinatei.
- Arti vienos kiekvienos orientacijos linijos — net nuo **dviejų skirtingų smeigtukų** — žymeklis prisitraukia prie jų **sankirtos** ir rodomos abi brūkšninės linijos. Taip taškas padedamas tiksliai ties (smeigtuko A X, smeigtuko B Y).

```
                    ┆ (brūkšninė, smeigtuko ■ vertikali linija)
                    ┆
   ■ smeigtukas A ┄┄ ✕ ← žymeklis prisitraukė prie sankirtos:
                    ┆    X iš smeigtuko B, Y iš smeigtuko A
                    ┆
                    ■ smeigtukas B
```

Prisitraukusios koordinatės imamos tiesiai iš smeigtuko, todėl lygiavimas tikslus — jokio apvalinimo ar slankiojo kablelio paklaidų.

## Prisitraukimo pirmenybė

Įprasti geometrijos prisitraukimai — galas, vidurio taškas, centras ir sankirta — **turi pirmenybę** prieš smeigtukų atskaitos linijas. Jei žymeklis arčiau taškinio prisitraukimo nei atskaitos linijos, laimi taškinis prisitraukimas. Smeigtukų sekimas užpildo tarpus tarp geometrijos, niekada neužblokuoja prisitraukimo prie pačios geometrijos.

## Derinimas su kampo užraktu

Vector pins veikia kartu su kampo sekimu (**ANGL** jungiklis valdymo juostoje). Kai komanda užrakino žymeklį kampo sekimo spinduliui:

- Žymeklis lieka apribotas užrakinta kryptimi.
- Prisitraukimas prie smeigtukų pereina į **užrakinto spindulio ir smeigtukų atskaitos linijų sankirtų** taikymą (tik prieš spindulio pradžią).

Tai atsako į klausimus kaip *„kur 45° kryptis nuo mano paskutinio taško kerta to apskritimo centro aukštį?"* — užrakinkite kampą ir žymeklis įsikabina į sankirtos tašką. Prisitraukimas prie spindulio veikia kiekvienoje komandoje su kampo užrakinimu: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader ir ViewportCopy.

## Smeigtukų gyvavimo ciklas

Smeigtukai skirti dabartinei operacijai, o ne kaip nuolatinės žymos. Visi smeigtukai išvalomi, kai:

| Įvykis | Kodėl |
|--------|-------|
| Paleidžiama **nauja komanda** | Kiekviena operacija prasideda su švaria atskaitų aibe |
| Paspaudžiamas **Escape** | Standartinė „atšaukti viską" elgsena |
| **Pins** jungiklis išjungiamas | Funkcijos išjungimas pašalina jos būseną |
| Perjungiama tarp **modelio ir popieriaus erdvės** | Smeigtukų koordinatės būdingos vienai erdvei |

Vienos komandos viduje galite prisegti, braižyti, vėl prisegti ir tęsti — smeigtukai išlieka po kiekvieno spustelėjimo daugiataškėje komandoje, pavyzdžiui, Polyline.

## Tipinė darbo eiga

Nubrėžkite liniją, kuri prasideda tiesiai po apskritimo centru:

1. Įveskite `line` (arba spustelėkite Line mygtuką).
2. Užveskite žymeklį ant apskritimo **centro žymos** pusei sekundės — ji tampa akcento kvadratu.
3. Perkelkite žymeklį žemyn: arti apskritimo vertikalės žymeklis užsirakina ant brūkšninės atskaitos linijos.
4. Spustelėkite — linija prasideda tiksliai ties apskritimo X koordinate.
5. Tęskite liniją kaip įprasta; smeigtukas lieka prieinamas kitiems taškams.

## Pastabos

- 500 ms užvedimas veikia ant bet kurios prisitraukimo žymos, kurią žymeklis gali pasiekti — įskaitant prisitraukimo taškus, kurie atsiranda komandos viduryje.
- Užvedimas ant jau prisegto taško nieko nedaro; atsegimo užvedimu nėra. Smeigtukus išvalykite paspausdami **Escape** arba išjungdami **Pins**.
- Atskaitos linijų prisitraukimo atstumas yra tie patys 12 ekrano pikselių, naudojami įprastam taškiniam prisitraukimui, todėl pojūtis nuoseklus bet kokiu masteliu.
- Prisegti taškai atvaizduojami kaip akcento kvadratai vietoj savo įprastų prisitraukimo žymų.
