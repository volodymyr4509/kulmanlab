---
title: LayerMatch — objektų sluoksnių priskyrimas pagal šaltinį
description: LayerMatch komanda priskiria vieno ar kelių tikslinių objektų sluoksnį pagal šaltinio objekto, ant kurio spustelėjate, sluoksnį.
keywords: [sluoksnių atitikimas, sluoksnio priskyrimas CAD, sluoksnio keitimas kulmanlab, CAD sluoksnių valdymas]
group: layer
order: 3
---

# LayerMatch

Komanda `LayerMatch` priskiria pasirinktų objektų sluoksnį pagal šaltinio objekto, ant kurio spustelėjate, sluoksnį. Tai greičiausias būdas perkelti objektų grupę į tinkamą sluoksnį neatidarant [Layer Manager](../layer-manager/).

## Eiga

**Pirmiausia pasirinkti, tada priskirti**:

1. Pasirinkite objektus, kurių sluoksnį norite pakeisti.
2. Įveskite `LayerMatch` arba spustelėkite įrankių juostos mygtuką **Layer Match** (teptuko piktograma).
3. **Spustelėkite šaltinio objektą** — tą, kurio sluoksnį norite nukopijuoti.
4. Visi pasirinkti objektai iškart perkeliami į šaltinio objekto sluoksnį.

**Pirmiausia aktyvuoti, tada pasirinkti**:

1. Įveskite `LayerMatch` arba spustelėkite įrankių juostos mygtuką nieko nepasirinkę.
2. **Pasirinkite tikslinius objektus** — spustelėkite, kad perjungtumėte atskirus objektus, arba tempkite, kad pasirinktumėte sritimi.
3. Paspauskite **Enter** arba **Space**, kad patvirtintumėte pasirinkimą.
4. **Spustelėkite šaltinio objektą** — jo sluoksnis pritaikomas visiems tikslams.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Enter` / `Space` | Patvirtina tikslų pasirinkimą ir pereina į šaltinio pasirinkimo fazę |
| `Escape` | Atstato — grįžta prie tikslų pasirinkimo arba visiškai atšaukia |

## Elgsenos detalės

- Keičiama tik savybė `layer` — spalva, linijos tipas, linijos storis ir geometrija nepaliečiami.
- Pats šaltinio objektas nekeičiamas.
- Komanda baigiasi spustelėjus šaltinį.
- Spustelėjimas ant tuščios drobės šaltinio pasirinkimo fazėje nieko nedaro.
