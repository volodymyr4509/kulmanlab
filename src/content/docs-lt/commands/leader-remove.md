---
title: "LeaderRemove komanda — rodyklės šakos pašalinimas iš daugiašakės išnašos"
description: "LeaderRemove komanda pašalina vieną rodyklės šaką iš daugiašakės išnašos, turinčios dvi ar daugiau šakų. Užveskite žymeklį šalia šakos, kurią norite pašalinti — artimiausia šaka paryškinama. Lūžis, tekstas ir likusios šakos išsaugomi."
keywords: [CAD išnašos šakos pašalinimas, leaderremove komanda, rodyklės pašalinimas iš išnašos, multileader šakos ištrynimas, kulmanlab]
group: markup
order: 3
---

# LeaderRemove

Komanda `LeaderRemove` pašalina vieną rodyklės šaką iš esamos daugiašakės išnašos. Teksto užrašas, lūžis ir visos likusios šakos išsaugomos — ištrinama tik pasirinkta šaka. Daugiašakės išnašos, turinčios tik vieną šaką, šakos pašalinti negalima.

## Šakos pašalinimas

1. Terminale įveskite `LeaderRemove`.
2. **Spustelėkite daugiašakę išnašą**, turinčią dvi ar daugiau šakų. Jei spustelėta išnaša turi tik vieną šaką, terminalas parodo klaidą ir laukia tinkamo pasirinkimo.
3. **Perkelkite žymeklį šalia šakos**, kurią norite pašalinti — artimiausia šaka paryškinama žymekliu.
4. **Spustelėkite**, kad pašalintumėte tą šaką.

Šaka pašalinama ir komanda lieka aktyvi — galite iškart spustelėti kitą išnašą (ar tą pačią), kad pašalintumėte daugiau šakų. Paspauskite **Enter**, **Space** arba **Escape**, kad užbaigtumėte.

```
  Prieš:                    Po:
  ◄── šaka 1                ◄── šaka 1
       \                          \
        ●──── lūžis ──── tekstas   ●──── lūžis ──── tekstas
       /
  šaka 2 ──►  ← ši šaka pašalinta
```

## Kaip nustatoma artimiausia šaka

Komanda matuoja statmeną atstumą nuo žymeklio iki kiekvienos šakos linijos atkarpų (įskaitant atkarpą nuo paskutinio šakos taško iki lūžio). Šaka su mažiausiu atstumu paryškinama ir bus pašalinta spustelėjus.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Enter` / `Space` | Užbaigia šakų šalinimą |
| `Escape` | Atšaukia ir atstato |

## Pastabos

- Išnaša su **tik viena šaka** apsaugota — prieš šalinant reikia pirmiausia pridėti šaką.
- Lūžio padėtis ir teksto turinys visada išsaugomi nepriklausomai nuo to, kuri šaka pašalinama.

## Susijusios komandos

| Komanda | Ką daro |
|---------|---------|
| [Leader](../leader/) | Sukuria naują daugiašakę išnašą nuo nulio |
| [LeaderAdd](../leader-add/) | Prideda šaką prie esamos daugiašakės išnašos |
