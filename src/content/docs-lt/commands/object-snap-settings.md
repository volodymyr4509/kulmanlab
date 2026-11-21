---
title: "Komanda ObjectSnapSettings — visi valdymo juostos nustatymai"
description: "Komanda ObjectSnapSettings atidaro vieną langą su visais valdymo juostos nustatymais — pritraukimu, liestinės pritraukimu, kampo sekimu, smeigtukais, įvedamais duomenimis, lasu ir rodymu — kiekvienas paaiškintas šalia sąrašo nedideliu piešiniu."
keywords: ["objektų pritraukimo nustatymai CAD", "liestinės pritraukimas CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

Komanda `PritraukimoNustatymai` atidaro vieną langą, kuriame sukaupti visi valdymo juostos nustatymai. Kiekvienas nustatymas paaiškintas šalia sąrašo nedideliu piešiniu. Atidarykite jį krumpliaračio mygtuku valdymo juostoje arba įveskite `PritraukimoNustatymai`. Nustatymo keitimas čia tolygus jo mygtuko perjungimui juostoje.

## Nustatymai

### Kur atsiduria žymeklis

| Valdymo juosta | Ką daro |
|---|---|
| `Snap` | Žymeklis peršoka į artimiausią tinklelio tašką, todėl parinkti taškai atsiduria apvaliose koordinatėse. Pritraukimas prie objekto šalia žymeklio vis tiek turi pirmenybę. Tinklelio žingsnis kinta su mastelio keitimu. |
| `TANG` | Kai linija braižoma nuo taško, nuveskite žymeklį ten, kur ji vos liestų apskritimą, lanką, elipsę ar splainą, ir jis ten prisitrauks. Veikia Linijoje, Polilinijoje ir kitose komandose bei tempiant linijos ar polilinijos galą. |

### Pagalbinės linijos braižant

| Valdymo juosta | Ką daro |
|---|---|
| `ANGL` | Kai žymeklis priartėja prie vieno iš šių kampų nuo paskutinio taško, jis užsifiksuoja ta kryptimi, rodoma brūkšniniu spinduliu. Kol užfiksuotas, įveskite ilgį ir paspauskite Enter, kad taškas būtų tokiu atstumu. |
| `Pins` | Akimirką palaikykite žymeklį ant pritraukimo taško, kad jį prisegtumėte. Prisegtas taškas skleidžia horizontalias ir vertikalias pagalbines linijas, o žymeklis prisitraukia prie jų ir jų sankirtų. |
| `Dist` | Paskutinis prisegtas taškas tampa pradiniu: kai žymeklis užsifiksuoja kampu nuo smeigtuko, įveskite ilgį ir paspauskite Enter, kad taškas būtų tokiu atstumu nuo jo. Reikia vektorinių smeigtukų. |

### Įvestis ir žymėjimas

| Valdymo juosta | Ką daro |
|---|---|
| `Rel` | Įvestas X,Y taškas matuojamas nuo paskutinio parinkto taško, tarsi prasidėtų @. Backspace pašalina @ brėžinio koordinačių taškui. Išjungus @ poslinkiui įveskite patys. |
| `Lasso` | Paspauskite ir tempkite tuščioje vietoje, kad nubrėžtumėte laisvą kilpą aplink tai, ko norite, vietoj stačiakampio. Pažymima tai, ką kilpa apima. |

### Rodymas

| Valdymo juosta | Ką daro |
|---|---|
| `Grid` | Rodo fono tinklelį. Jo tarpai kinta keičiant mastelį. Išjungus pritraukimas prie tinklelio nesustoja. |
| `LWT` | Braižo linijas jų storiu, todėl sunkesnės linijos atrodo storesnės. Išjungus kiekviena linija braižoma plona, todėl tankų brėžinį gali būti lengviau skaityti. |

**ANGL** turi savo eilutę žingsniui: pasirinkite 10°, 20°, 30°, 45° arba 90°, arba pasirinkite **Pasirinktinis** ir įveskite bet kurį kampą nuo 1° iki 180°.

Liestinės pritraukimas, santykinis įvedimas ir lasas pagal numatytuosius nustatymus išjungti. **Atkurti numatytuosius** grąžina visus nustatymus į pradinę būseną.

---

*Susiję: [Vector Pins](../../interface/vector-pins/), [Distance Tracking](../../interface/distance-tracking/), [Grid & Snap](../../interface/grid-snap/), [Koordinačių įvedimas](../../interface/coordinate-entry/)*
