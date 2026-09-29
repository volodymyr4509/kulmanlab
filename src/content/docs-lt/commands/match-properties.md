---
title: Match Properties — objektų savybių kopijavimas KulmanLab CAD
description: MatchProperties komanda nukopijuoja spalvą, sluoksnį ir kitas bendras savybes iš šaltinio objekto į vieną ar kelis tikslinius objektus. Perkelia savybes taip pat kaip darbalaukio CAD įrankiai.
keywords: [savybių atitikimas CAD, objekto savybių kopijavimas, MATCHPROP, sluoksnio ir spalvos atitikimas, savybių perkėlimas, kulmanlab match properties, savybių tepimas, sluoksnio kopijavimas CAD]
group: style
order: 1
---

# Match Properties

Komanda `MatchProperties` nukopijuoja **vaizdines ir sluoksnio savybes** iš šaltinio objekto į vieną ar kelis tikslinius objektus. Perkeliamos tik savybės, kurias bendrai turi šaltinio ir tikslinio objekto tipai — geometrija niekada nekeičiama.

## Kaip aktyvuoti

Spustelėkite įrankių juostos mygtuką **Match Properties** (dažų volelio piktograma) Stroke skydelyje arba terminale įveskite `MatchProperties`.

## Eiga

**Pirmiausia aktyvuoti, tada pasirinkti šaltinį:**

1. Įveskite `MatchProperties` arba spustelėkite įrankių juostos mygtuką, kai nieko iš anksto nepasirinkta.
2. **Spustelėkite šaltinio objektą** — tą, kurio savybes norite nukopijuoti.
3. **Spustelėkite kiekvieną tikslinį objektą**, kad pritaikytumėte šaltinio savybes. Galite spustelėti kelis objektus po vieną.
4. Norėdami pritaikyti grupei iš karto, **nutempkite pasirinkimo rėmelį** ant tikslų.
5. Paspauskite **Enter** arba **Escape**, kad užbaigtumėte.

**Iš anksto pasirinkti šaltinį, tada aktyvuoti:**

1. Spustelėkite vieną objektą, kad jį pasirinktumėte.
2. Aktyvuokite `MatchProperties`. Pasirinktas objektas automatiškai naudojamas kaip šaltinis.
3. Spustelėkite tikslinius objektus arba pasirinkite tempimu, tada užbaikite paspausdami **Enter** arba **Escape**.

## Kokios savybės kopijuojamos

MatchProperties kopijuoja savybes, priklausančias bendrai šaltinio ir tikslo bazinei klasei. Bent šias savybes bendrai turi **visi objektų tipai**:

| Savybė | Aprašymas |
|--------|-----------|
| **Color** | Objekto spalvos indeksas (įskaitant „By Layer" / „By Block") |
| **Layer** | Sluoksnis, kuriam objektas priklauso |

Kai šaltinis ir tikslas yra to paties objekto tipo (pvz., abu yra matmenys), taip pat nukopijuojamos papildomos tipui būdingos savybės — pavyzdžiui, teksto aukštis, rodyklės dydis, pratęsimo linijų nustatymai.

Geometrija (koordinatės, spindulys, ilgis ir t. t.) niekada neveikiama.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Enter` / `Space` | Patvirtina srities pasirinkimą arba užbaigia komandą |
| `Escape` | Užbaigia taikymą (jei šaltinis nustatytas) arba atšaukia |

## Elgsenos detalės

- Pats šaltinio objektas niekada nekeičiamas.
- Kiekvienas spustelėjimas ar pasirinkimas tempimu šaltinio savybes pritaiko iškart — patvirtinimo žingsnio nėra.
- Srities pasirinkimas laikosi standartinių taisyklių: tempimas **į dešinę** griežtam pasirinkimui (visiškai apimta), tempimas **į kairę** kertančiam pasirinkimui (bet kuri sankirta).
- Šaltinio objekto spustelėjimas kaip tikslo ignoruojamas.
- Objektams su tekstu (**Text**, **Dimensions**, **Multileaders**) kopijuojamas tik teksto aukštis — šriftas, pusjuodis, kursyvas ir kiti teksto stiliaus nustatymai nesuderinami.

## Susijusios komandos

- [LayerMatch](../layer-match/) — perkelia pasirinktus objektus į tą patį sluoksnį kaip šaltinis (tik sluoksnio savybė)
- [LayerMakeCurrent](../layer-make-current/) — nustato dabartinį braižymo sluoksnį pagal spustelėtą objektą
