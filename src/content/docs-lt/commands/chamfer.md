---
title: Chamfer komanda — tiesaus kampo nuskėlimas tarp dviejų linijų
description: Chamfer komanda sujungia du Line ar Polyline objektus tiesiu įstrižu pjūviu. Nurodote du atstumus — po vieną išilgai kiekvieno objekto — ir komanda apkerpa abu iki tų taškų bei įterpia jungiančią liniją.
keywords: [CAD chamfer komanda, linijos nusklembimas CAD, įstrižas kampo pjūvis, kampo nuožulnos CAD, kulmanlab]
group: edit
order: 12
---

# Chamfer

Komanda `chamfer` nuskelia tiesų įstrižą kampą tarp dviejų [Line](../line/) ar [Polyline](../polyline/) objektų. Nurodote, kiek atgal apkirpti išilgai kiekvieno objekto (d1 ir d2), ir komanda apkerpa abu objektus iki tų taškų bei tarp jų įterpia jungiančią liniją.

Vienodi atstumai sukuria simetrišką 45° pjūvį; skirtingi atstumai — nesimetrišką nuožulną.

Chamfer veikia su **Line ir Polyline** objektais.

## Chamfer naudojimas

1. Terminale įveskite `chamfer` arba spustelėkite įrankių juostos mygtuką **Chamfer**.
2. **Įveskite pirmą nusklembimo atstumą** (d1 — atstumas išilgai pirmo objekto) ir paspauskite **Enter**.
3. **Įveskite antrą nusklembimo atstumą** (d2 — atstumas išilgai antro objekto) ir paspauskite **Enter**.
4. **Spustelėkite pirmą objektą** — dalis, ant kurios spustelėjate, nustato, kuri sankirtos pusė paliekama.
5. **Užveskite žymeklį ant antro objekto** — brūkšninė linijos peržiūra rodo gautą nusklembimo pjūvį. Perkelkite žymeklį į pusę, kurią norite palikti.
6. **Spustelėkite**, kad pritaikytumėte. Abu objektai apkarpomi ir įterpiama nusklembimo linija.

```
  Prieš (d1=5, d2=8):         Po:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Pusės pasirinkimas

Kai dvi linijos kertasi, nusklembimas taikomas kampui, nustatytam pagal spustelėjimo vietas — paliekama kiekvieno objekto dalis **toje pačioje pusėje kaip žymeklis**.

- Spustelėkite arti vieno pirmo objekto galo, kad pasirinktumėte tą pusę.
- Perkelkite žymeklį į norimą antro objekto pusę — brūkšninė peržiūra atnaujinama gyvai.

Polilinijoms spustelėjimo vieta nustato, kuri polilinijos **atkarpa** dalyvauja, o artimiausia viršūnė sankirtos pusėje yra ta, kuri apkerpama. Kai abu pasirinkimai patenka į tą pačią polilinija, antras pasirinkimas turi būti tikra pirmos gretima atkarpa — dalijanti tarp jų kampinę viršūnę — kitaip pasirinkimas atmetamas; dvi negretimos atkarpos neturi bendro kampo, kurį nusklembtų.

Polilinijos **lanko atkarpa** niekada nepasirenkama nusklembimui — skaičiuojamos tik tiesios atkarpos, todėl užvedus žymeklį prie lanko dalies, jis praleidžia ją ir pasirenka artimiausią tiesią atkarpą.

## Ką komanda sukuria

- Pirmo objekto galas (ar polilinijos viršūnė), artimiausias sankirtai, perkeliamas į tašką **T1**, esantį d1 atstumu išilgai pirmo objekto nuo sankirtos.
- Antro objekto galas (ar polilinijos viršūnė), artimiausias sankirtai, perkeliamas į tašką **T2**, esantį d2 atstumu išilgai antro objekto nuo sankirtos.
- Įterpiamas naujas Line objektas nuo **T1** iki **T2**.

Įterpta linija paveldi dabartinius linijos storio, spalvos, sluoksnio ir linijos tipo nustatymus.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.` | Prideda skaitmenį prie dabartinio atstumo reikšmės |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Patvirtina įvestą atstumą ir pereina toliau |
| `Escape` | Atšaukia ir atstato |

## Palaikomi objektai

| Objektas | Palaikomas |
|----------|------------|
| Line | Taip |
| Polyline / Rectangle | Taip |
| Arc, Circle, Ellipse | Ne |
| Text, Spline, Dimension, Leader | Ne |

## Chamfer ir Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Kampo tipas | Tiesus pjūvis | Suapvalintas lankas |
| Įvestis | Du atstumai (d1, d2) | Vienas spindulys |
| Įterpiamas objektas | Line | Arc |
| Palaikomi objektai | Lines ir Polylines (tik tiesios atkarpos) | Lines, Arcs ir Polylines (tiesios ar lanko atkarpos) |
