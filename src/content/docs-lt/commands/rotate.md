---
title: Rotate komanda — objektų pasukimas aplink bazinį tašką
description: Rotate komanda pasuka pasirinktus objektus aplink pasirinktą bazinį tašką. Kampą galima įvesti tiksliai arba nustatyti spustelėjimu. Copy jungiklis (klavišas C) pasuka dublikatus vietoj originalų. Teigiami kampai DXF koordinatėse yra prieš laikrodžio rodyklę.
keywords: [CAD rotate komanda, objektų pasukimas CAD, objektų pasukimas kampu, pasukimas ir kopija CAD, pasukimas prieš laikrodžio rodyklę CAD, įvestas kampas rotate, kulmanlab]
group: edit
order: 3
---

# Rotate

Komanda `rotate` pasuka pasirinktus objektus aplink bazinį tašką. Pasukimo kampą nurodote arba įvesdami skaičių laipsniais, arba spustelėdami — kampas apskaičiuojamas iš krypties tarp bazinio taško ir spustelėjimo vietos.

## Du būdai pradėti

**Pirmiausia pasirinkti, tada pasukti** — pirma pasirinkite objektus, tada aktyvuokite:

1. Drobėje pasirinkite vieną ar kelis objektus.
2. Terminale įveskite `rotate` arba spustelėkite įrankių juostos mygtuką **Rotate**.
3. **Spustelėkite bazinį tašką** — sukimosi centrą. Arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
4. **Įveskite kampą ir paspauskite Enter** arba **spustelėkite**, kad nustatytumėte kampą pagal žymeklio kryptį.

**Pirmiausia aktyvuoti, tada pasirinkti** — pradėkite komandą nieko nepasirinkę:

1. Įveskite `rotate` arba spustelėkite įrankių juostos mygtuką.
2. **Pasirinkite objektus** — spustelėkite, kad perjungtumėte, arba tempkite, kad pasirinktumėte sritimi.
3. Paspauskite **Enter** arba **Space**, kad patvirtintumėte pasirinkimą.
4. **Spustelėkite bazinį tašką** (galimas koordinačių įvedimas), tada nustatykite kampą.

```
  Prieš:             Po (pasukimas 90° aplink ●):
                        ╔══╗
  ●  [objektas]  →   ● ║    ║
                        ╚══╝
```

Gyva pasuktų objektų šešėlinė peržiūra seka žymeklio kampą, kai nustatytas bazinis taškas.

## Kampo nustatymas

**Įvestas kampas** — įveskite skaičių (laipsniais) bet kada po bazinio taško padėjimo. Peržiūra prisitraukia prie įvesto kampo, o prieš paspaudžiant Enter galite toliau koreguoti.

**Kampas spustelėjimu** — jei įvestos reikšmės nėra, spustelėjimas nustato kampą, lygų `atan2(cursorY − baseY, cursorX − baseX)` — krypčiai nuo bazinio taško iki spustelėjimo, laipsniais.

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.` | Prideda skaitmenį prie kampo reikšmės |
| `-` | Neigiamas kampas (tik pirmas simbolis) |
| `C` | Perjungia Copy režimą (prieš renkant bet kokius skaitmenis) |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Pritaiko pasukimą įvestu kampu |

## Kopijos pasukimas

Paspauskite **C** kampo raginime — prieš renkant bet kokius skaitmenis — kad perjungtumėte **Copy** režimą, tas pats įterptosios parinkties principas, kurį naudoja [Polyline](../polyline/) `Arc` jungiklis. Raginimas rodo dabartinę būseną kaip `[Copy=true]` / `[Copy=false]`, o dar kartą paspaudus **C** ji grąžinama atgal.

Įjungus Copy, pritaikius pasukimą, pradinis pasirinkimas paliekamas nepaliestas vietoje, o vietoj to pridedamos **naujos, pasuktos kiekvieno pasirinkto objekto kopijos**. Išjungus Copy (numatytoji), pasirinkimas pasukamas vietoje kaip įprasta.

## Kampo kryptis

Kampai laikosi **DXF konvencijos**:

- **Teigiamos** reikšmės sukasi **prieš laikrodžio rodyklę** brėžinio koordinatėse (Y aukštyn).
- Ekrane, kur Y ašis apversta (Y žemyn), teigiami kampai atrodo **pagal laikrodžio rodyklę**.

Įprastos reikšmės: `90` = ketvirtis apsisukimo, `180` = pusė apsisukimo, `-90` = priešingas ketvirtis apsisukimo.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Enter` / `Space` | Patvirtina pasirinkimą |
| `0`–`9`, `.`, `-` | Pradeda X koordinatės įvedimą (bazinio taško fazė) arba kampo reikšmę (kampo fazė) |
| `,` | Užrakina X ir pereina prie Y įvedimo (bazinio taško fazė) |
| `C` | Perjungia Copy režimą (kampo fazė, prieš renkant bet kokius skaitmenis) |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Patvirtina koordinatę arba pritaiko pasukimą |
| `Escape` | Atšaukia ir atstato |

## Pasirinkimas komandos metu

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Perjungia žymeklio nurodytą objektą |
| **Tempimas į dešinę** (griežtas) | Prideda objektus, visiškai esančius rėmelyje |
| **Tempimas į kairę** (kertantis) | Prideda objektus, kertančius rėmelį |
| **Enter** / **Space** | Patvirtina pasirinkimą |

## Palaikomi objektai

Rotate veikia su kiekvienu objekto tipu. Kiekvieno objekto geometrija pasukama aplink bazinį tašką — pavyzdžiui, Circle perkelia savo centrą, o spindulys lieka toks pat; Arc perkelia centrą ir pastumia pradžios bei galo kampus pasukimo dydžiu; Text objektas perkelia savo inkaro tašką ir prideda kampą prie savybės Rotation Degree.
