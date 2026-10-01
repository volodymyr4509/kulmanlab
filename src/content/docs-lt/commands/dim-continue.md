---
title: Dimension Continue — matmenų grandinimas nuo esamo bazinio matmens
description: Dimension Continue komanda pratęsia matmenų grandinę nuo paskutinio padėto matmens antrosios pratęsimo linijos. Automatiškai paveldi bazinio matmens kampą, poslinkį, rodyklės dydį ir teksto aukštį. Veikia tiek su linijiniais, tiek su lygiagrečiais baziniais matmenimis.
keywords: [CAD grandininis matmuo, dimcontinue, matmenų grandinimas CAD, bazinis matmuo, nuoseklių matmenų serija, kulmanlab]
group: markup
order: 6
---

# Dimension Continue

Komanda `dimcontinue` grandina naujus matmenis nuo esamo matmens **antrosios pratęsimo linijos**. Kiekvienas naujas segmentas dedamas išilgai tos pačios matavimo ašies ir su tuo pačiu matmens linijos poslinkiu kaip bazinis. Visos stiliaus savybės — rodyklės dydis, teksto aukštis, pratęsimo linijų ilgiai — nukopijuojamos iš bazinio automatiškai.

## Kaip atrodo sugrandinti matmenys

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (bazinio    p3           p4
           ext2 → nauja pradžia)
```

Kiekvienas stačiakampis yra atskiras `DIMENSION` objektas. Jie dalijasi ta pačia matmens linijos padėtimi ir matavimo kryptimi.

## Grandinės pradžia

1. Terminale įveskite `dimcontinue` arba spustelėkite įrankių juostos mygtuką **Dimension Continue**.
2. **Jei ką tik buvo padėtas matmuo** — komanda jį automatiškai perima kaip bazinį (spustelėti nereikia).
3. **Jei neseniai padėto matmens nėra** — spustelėkite bet kurį esamą matmenį, kad jį naudotumėte kaip bazinį.
4. **Spustelėkite kitos pratęsimo linijos pradžią** — judinant žymeklį peržiūra rodo naują matmenį. Arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
5. Toliau spustelėdami (ar rinkdami) pratęsiate grandinę. Kiekvienas padėtas matmuo automatiškai tampa nauju baziniu.
6. Grandinę užbaigiate paspaudę **Enter**, **Space** arba **Escape**.

## Kas paveldima iš bazinio matmens

| Savybė | Paveldima iš bazinio |
|--------|----------------------|
| Matavimo kryptis / kampas | Taip — užrakinta visai grandinei |
| Matmens linijos poslinkis (atstumas nuo matuojamų taškų) | Taip |
| Rodyklės dydis | Taip |
| Teksto aukštis | Taip |
| Pratęsimo linijų poslinkis ir išsikišimas | Taip |
| Teksto lygiavimas | Taip |
| Stiliaus pavadinimas | Taip |
| Spalva, sluoksnis | Nepaveldima — naudojamas dabartinis sluoksnis |

## Matavimo krypties užrakinimas

Grandinės matavimo kryptį **nustato bazinio matmens kampas**:

- Linijinis bazinis (H) → visi tęsiniai matuoja horizontalų atstumą (Δ X).
- Linijinis bazinis (V) → visi tęsiniai matuoja vertikalų atstumą (Δ Y).
- Lygiagretus bazinis bet kokiu kampu → visi tęsiniai matuoja tuo pačiu kampu.

Krypties grandinės viduryje pakeisti negalima. Norėdami žymėti kita kryptimi, pradėkite naują [Dimension Linear](../dim-linear/) ar [Dimension Aligned](../dim-aligned/).

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą |
| `,` | Užrakina X ir pereina prie Y įvedimo |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Patvirtina įvestą koordinatę arba užbaigia grandinę, jei nėra laukiančio įvedimo |
| `Space` / `Escape` | Užbaigia grandinę |

## Dimension Continue ir naujas pradėjimas

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Pradžios taškas | Fiksuotas ties paskutinio bazinio ext2 | Spustelėjimas bet kur |
| Kampas | Užrakintas pagal bazinį | Laisvas |
| Poslinkis | Paveldėtas iš bazinio | Nustatomas žymekliu ar įvedimu |
| Stilius | Paveldėtas iš bazinio | Dabartinis stilius |
| Geriausiai tinka | Kaupiamiesiems matavimams išilgai eilės | Pirmam matmeniui ar krypties pakeitimui |

## Užrašų redagavimas po padėjimo — paprastasis režimas

**Dukart spustelėkite** bet kurį grandinės matmenį, kad atvertumėte teksto redaktorių **paprastuoju** režimu. Kiekvienas segmentas nepriklausomas ir redaguojamas atskirai.

| Funkcija | Elgsena |
|----------|---------|
| Bold / Italic / Font / Height | Taikoma **visam** užrašui iš karto |
| Formatavimas pagal simbolius | Nepalaikoma |
| `Enter` | Patvirtina reikšmę ir uždaro redaktorių |
| Daugiaeilis tekstas | Nepalaikoma |

Pilną nuorodą žr. [Teksto redaktorius — paprastasis režimas](../../interface/text-editor/#paprastasis-režimas).

## DXF — DIMENSION objektai

Kiekvienas grandinės segmentas DXF faile saugomas kaip atskiras `DIMENSION` objektas. Faile jie nesusieti — jie dalijasi savybėmis, nes buvo sukurti iš to paties bazinio, tačiau kiekvieną galima redaguoti atskirai po padėjimo.


## Matmenų stilius

Pirmasis grandinės matmuo paprastai nukopijuoja dabartinį [matmenų stilių](../dimension-style/). Kiekvienas tęsinys paveldi visą pagrindinio matmens išvaizdą, todėl grandinė išlieka vientisa net pakeitus dabartinį stilių.
