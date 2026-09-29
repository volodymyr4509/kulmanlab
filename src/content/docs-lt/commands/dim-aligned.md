---
title: Dimension Aligned komanda — tikrojo atstumo matmenys bet kokiu kampu
description: Dimension Aligned komanda matuoja tikrąjį tiesios linijos atstumą tarp dviejų taškų. Matmens linija eina lygiagrečiai p1→p2 linijai bet kokiu kampu — skirtingai nei Dimension Linear, kuris apribotas horizontalia ar vertikalia kryptimi. Pilnas DXF keitimasis kaip DIMENSION objektai.
keywords: [CAD lygiagretus matmuo, dimaligned, įstrižas matmuo CAD, tikrojo atstumo matmuo, kampu nukreiptas matmuo CAD, kulmanlab]
group: markup
order: 5
---

# Dimension Aligned

Komanda `dimaligned` padeda matmenį, kuris matuoja **tikrąjį tiesios linijos atstumą** tarp dviejų taškų. Matmens linija eina lygiagrečiai linijai, jungiančiai du taškus, todėl gali būti bet kokiu kampu. Tai esminis skirtumas nuo [Dimension Linear](../dim-linear/), kuris apribotas horizontalia ar vertikalia kryptimi.

## Lygiagretaus matmens anatomija

```
     ●  p2
    /|
   / |  (pratęsimo linija 2, statmena matmens linijai)
  /  |
 /←5.00→/
/  /
●  /  (pratęsimo linija 1, statmena matmens linijai)
p1
```

- **Pratęsimo linijos** — statmenos matmens linijai, nubrėžtos nuo kiekvieno matuojamo taško.
- **Matmens linija** — lygiagreti p1→p2, nustumta į vieną pusę pagal žymeklio padėtį.
- **Reikšmė** — tikrasis Euklido atstumas `|p1 – p2|`.

## Lygiagretaus matmens padėjimas

1. Terminale įveskite `dimaligned` arba spustelėkite įrankių juostos mygtuką **Dimension Aligned**.
2. **Spustelėkite pirmosios pratęsimo linijos pradžią** (p1) arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
3. **Spustelėkite antrosios pratęsimo linijos pradžią** (p2). Koordinačių įvedimas veikia ir čia.
4. **Perkelkite žymeklį** į vieną pusę, kad nustatytumėte statmeną matmens linijos poslinkį.
5. **Spustelėkite**, kad padėtumėte, arba įveskite poslinkio atstumą ir paspauskite **Enter**, kad išdėstytumėte tiksliai.

## Įvestas poslinkio atstumas

Padėdami įveskite skaičių, kad matmens linija būtų užfiksuota tiksliu statmenu atstumu nuo p1→p2 linijos:

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.` | Prideda skaitmenį prie poslinkio |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` / `Space` | Padeda įvestu poslinkiu |

Žymeklio pusė nustato, kurioje pusėje atsiranda matmens linija.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą (p1/p2 fazės) arba poslinkio atstumą (padėjimo fazė) |
| `,` | Užrakina X ir pereina prie Y įvedimo (p1/p2 fazės) |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` / `Space` | Patvirtina įvestą koordinatę ar poslinkį |
| `Escape` | Atšaukia |

## Dimension Aligned ir Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Matmens linijos kampas | Lygiagreti p1→p2 — bet koks kampas | Visada horizontali arba vertikali |
| Matuoja | Tikrąjį Euklido atstumą | Tik X arba Y dedamąją |
| H/V orientacijos užraktas | Ne | Taip — klavišai `H` ir `V` |
| Geriausiai tinka | Įstriemsiems elementams, kampu pjautiems pjūviams | Stačiakampiams išdėstymams, į tinklelį suderintoms dalims |

## Užrašo redagavimas — paprastasis režimas

**Dukart spustelėkite** padėtą lygiagretų matmenį, kad atvertumėte teksto redaktorių **paprastuoju** režimu. Redaktorius iš anksto užpildomas dabartine atvaizduota reikšme, todėl galite padėti žymeklį ir ją tiesiogiai redaguoti.

| Funkcija | Elgsena |
|----------|---------|
| Bold / Italic / Font / Height | Taikoma **visam** užrašui iš karto |
| Formatavimas pagal simbolius | Nepalaikoma |
| `Enter` | Patvirtina reikšmę ir uždaro redaktorių |
| Daugiaeilis tekstas | Nepalaikoma |

Pilną nuorodą žr. [Teksto redaktorius — paprastasis režimas](../../interface/text-editor/#paprastasis-režimas).

## Matmenų grandinimas

Norėdami pridėti daugiau matmenų, tęsiamų nuo šio antrosios pratęsimo linijos, naudokite [Dimension Continue](../dim-continue/) — jis užsirakina prie to paties matavimo kampo kaip šis lygiagretus matmuo.

## DXF — DIMENSION objektas (lygiagretaus tipo)

Lygiagretūs matmenys saugomi kaip `DIMENSION` objektai su `dimType = 1` (lygiagretus). Pratęsimo linijų pradžios, matmens linijos padėtis, teksto padėtis, išmatuota reikšmė, pasukimas, rodyklės stilius ir visos rodymo vėliavėlės keliauja tam ir atgal be praradimų.
