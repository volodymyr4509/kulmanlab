---
title: LeaderAdd komanda — rodyklės šakos pridėjimas prie esamos daugiašakės išnašos
description: LeaderAdd komanda prideda naują rodyklės šaką prie esamos daugiašakės išnašos. Nauja šaka dalijasi lūžiu, tekstu ir visu pasirinktos išnašos stiliumi. Du spustelėjimai — pasirinkite išnašą, padėkite naują smaigalį.
keywords: [CAD išnašos šakos pridėjimas, leaderadd komanda, rodyklės pridėjimas prie išnašos, multileader šaka, kulmanlab]
group: markup
order: 2
---

# LeaderAdd

Komanda `LeaderAdd` prideda naują rodyklės šaką prie esamos daugiašakės išnašos. Nauja šaka eina nuo esamo išnašos lūžio iki naujo rodyklės smaigalio, ant kurio spustelėjate. Visas stilius — lūžio padėtis, tekstas, rodyklės tipas ir dydis — paveldimas iš pasirinktos išnašos.

## Šakos pridėjimas

1. Terminale įveskite `LeaderAdd`.
2. **Spustelėkite esamą daugiašakę išnašą**, kad ją pasirinktumėte.
3. **Spustelėkite naują rodyklės smaigalį** arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę. Peržiūros linija rodoma nuo žymeklio iki išnašos lūžio.

Šaka padedama ir komanda lieka aktyvi — galite iškart spustelėti kitą išnašą, kad pridėtumėte daugiau šakų. Paspauskite **Enter**, **Space** arba **Escape**, kad užbaigtumėte.

```
  Prieš:                         Po:
  ◄── šaka 1                     ◄── šaka 1
       \                               \
        ●──── lūžis ──── tekstas        ●──── lūžis ──── tekstas
                                       /
                                  šaka 2 ──►  (naujas smaigalys, ant kurio spustelėjote)
```

## Smaigalio koordinačių įvedimas

Užuot spustelėję, galite įvesti tikslią padėtį:

1. Įveskite X reikšmę.
2. Paspauskite `,` — terminalas patvirtina, kad X užrakintas.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad padėtumėte.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės rinkimą |
| `,` | Užrakina X ir pereina prie Y įvedimo |
| `Enter` | Patvirtina įvestą koordinatę ir padeda šaką |
| `Enter` / `Space` | Užbaigia (kai nevyksta joks įvedimas) |
| `Escape` | Atšaukia ir atstato |

## Pastabos

- Galima pasirinkti tik **Multileader** objektus — spustelėjimas ant bet kurio kito objekto tipo nieko nedaro.
- Nauja šaka prasideda nuo esamo lūžio; jūs pasirenkate tik tai, kur eis rodyklės smaigalys.
- Daugiašakės išnašos šakų skaičius neribojamas.

## Susijusios komandos

| Komanda | Ką daro |
|---------|---------|
| [Leader](../leader/) | Sukuria visiškai naują daugiašakę išnašą nuo nulio |
| [LeaderRemove](../leader-remove/) | Pašalina šaką iš išnašos, turinčios dvi ar daugiau šakų |
