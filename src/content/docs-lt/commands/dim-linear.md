---
title: Dimension Linear komanda — horizontalūs ir vertikalūs matmenys
description: Dimension Linear komanda matuoja horizontalų ar vertikalų atstumą tarp dviejų taškų. Matmens linija visada lygiuota su ašimi — paspauskite H arba V, kad užrakintumėte orientaciją, arba leiskite ją nustatyti automatiškai pagal žymeklio padėtį. Pilnas DXF keitimasis kaip DIMENSION objektai.
keywords: [CAD linijinis matmuo, horizontalus matmuo CAD, vertikalus matmuo CAD, dimlinear, orientacijos užraktas H V, matmens poslinkis, kulmanlab]
group: markup
order: 4
---

# Dimension Linear

Komanda `dimlinear` deda horizontalų ar vertikalų matmenį tarp dviejų pratęsimo linijų pradžių. Matmens linija visada eina tobulai horizontaliai arba tobulai vertikaliai — jos negalima padėti savavališku kampu. Jei reikia matmens, lygiagretaus įstrižai linijai, naudokite [Dimension Aligned](../dim-aligned/).

## Linijinio matmens anatomija

```
  |←————— 5.00 —————→|
  |                   |
  ●  (pratęs. linija 1)  ●  (pratęs. linija 2)
  p1                  p2
```

- **Pratęsimo linijos** — leidžiamos iš kiekvieno matuojamo taško statmenai matmens linijai.
- **Matmens linija** — horizontali (matuoja X atstumą) arba vertikali (matuoja Y atstumą).
- **Reikšmė** — projektuotas atstumas išilgai pasirinktos ašies, o ne tikrasis atstumas tarp taškų.

## Linijinio matmens padėjimas

1. Terminale įveskite `dimlinear` arba spustelėkite įrankių juostos mygtuką **Dimension Linear**.
2. **Spustelėkite pirmosios pratęsimo linijos pradžią** (p1) arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
3. **Spustelėkite antrosios pratęsimo linijos pradžią** (p2). Koordinačių įvedimas veikia ir čia.
4. **Perkelkite žymeklį**, kad padėtumėte matmens liniją. Orientacija nustatoma automatiškai pagal žymeklio padėtį.
5. **Spustelėkite**, kad padėtumėte, arba įveskite poslinkio atstumą ir paspauskite **Enter**, kad išdėstytumėte tiksliai.

## Automatinis orientacijos nustatymas

Kai orientacija nepriverstinė, komanda skaito žymeklio padėtį dviejų matuojamų taškų atžvilgiu:

| Žymeklio padėtis | Aptikta orientacija | Kas matuojama |
|------------------|--------------------|---------------|
| Virš arba po taškais | Horizontali | Δ X tarp p1 ir p2 |
| Kairėje arba dešinėje nuo taškų | Vertikali | Δ Y tarp p1 ir p2 |

Paspauskite **H**, kad užrakintumėte horizontalią, arba **V**, kad užrakintumėte vertikalią orientaciją bet kuriuo padėjimo fazės momentu. Užrakinus, orientacija nesikeičia judinant žymeklį.

## Poslinkio atstumo įvedimas

Padėdami įveskite skaičių, kad matmens linija būtų užfiksuota tiksliu atstumu nuo matuojamų taškų:

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.` | Prideda skaitmenį prie poslinkio atstumo |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` / `Space` | Padeda matmenį įvestu atstumu |

Žymeklio pusė (virš/po horizontaliam, kairė/dešinė vertikaliam) nustato ženklą — matmens linija atsiranda toje pusėje, kurioje žymeklis šiuo metu yra.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą (p1/p2 fazė) arba poslinkio atstumą (padėjimo fazė) |
| `,` | Užrakina X ir pereina prie Y įvedimo (p1/p2 fazė) |
| `H` | Užrakina horizontalią orientaciją (tik padėjimo fazė) |
| `V` | Užrakina vertikalią orientaciją (tik padėjimo fazė) |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` / `Space` | Patvirtina įvestą koordinatę ar poslinkį |
| `Escape` | Atšaukia |

## Dimension Linear ir Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Ašis | Visada H arba V | Lygiagreti matuojamai jungčiai |
| Matuoja | Tik X arba Y dedamąją | Tikrąjį Euklido atstumą |
| H/V klavišai | Taip — užrakina orientaciją | Ne — visada seka p1→p2 |
| Geriausiai tinka | Stačiakampiams išdėstymams, planams | Įstriemsiems elementams, kampu pjautiems pjūviams |

## Užrašo redagavimas — paprastasis režimas

**Dukart spustelėkite** padėtą linijinį matmenį, kad atvertumėte teksto redaktorių **paprastuoju** režimu. Redaktorius iš anksto užpildomas dabartine atvaizduota reikšme, todėl galite padėti žymeklį ir ją tiesiogiai redaguoti.

| Funkcija | Elgsena |
|----------|---------|
| Bold / Italic / Font / Height | Taikoma **visam** užrašui iš karto |
| Formatavimas pagal simbolius | Nepalaikoma |
| `Enter` | Patvirtina reikšmę ir uždaro redaktorių |
| Daugiaeilis tekstas | Nepalaikoma |

Pilną nuorodą žr. [Teksto redaktorius — paprastasis režimas](../../interface/text-editor/#paprastasis-režimas).

## Matmenų grandinimas

Norėdami pridėti daugiau matmenų, tęsiamų nuo paskutinės pratęsimo linijos, iškart po šio padėjimo naudokite [Dimension Continue](../dim-continue/).

## DXF — DIMENSION objektas

Linijiniai matmenys saugomi kaip `DIMENSION` objektai su `rotationDeg`, nustatytu į `0` (horizontalus) arba `90` (vertikalus). Pratęsimo linijų pradžios, matmens linijos padėtis, teksto padėtis, išmatuota reikšmė, rodyklės stilius, teksto aukštis ir visos rodymo vėliavėlės keliauja be praradimų.


## Matmenų stilius

Nauji matmenys nukopijuoja dabartinį [matmenų stilių](../dimension-style/), įskaitant rodykles, iškeltines linijas, tekstą, tikslumą, lygiavimą, tarpą ir rėmelį. Reikšmės kopijuojamos kuriant; vėlesni stiliaus pakeitimai esamų matmenų nekeičia.
