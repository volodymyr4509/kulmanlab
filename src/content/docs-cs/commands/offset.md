---
title: Příkaz Offset — vytvoření rovnoběžných kopií v pevné vzdálenosti
description: Příkaz Offset vytvoří rovnoběžnou kopii objektu Line, Circle, Arc, Ellipse nebo Polyline v napsané vzdálenosti. Vzdálenost se zadává jednou a používá se pro více odsazení. Kliknutí na stranu určuje, kam se kopie umístí. Podporováno je pět typů objektů.
keywords: [CAD příkaz offset, rovnoběžná kopie CAD, odsazení úsečky CAD, odsazení kružnice CAD, odsazení polyline CAD, soustředné odsazení, kulmanlab]
group: edit
order: 10
---

# Offset

Příkaz `offset` vytvoří rovnoběžnou kopii objektu v pevné kolmé vzdálenosti. Vzdálenost napíšete jednou, poté klikáte na objekty a vybíráte stranu — příkaz zůstává připraven se stejnou vzdáleností, takže můžete v jedné relaci odsadit více objektů.

Podporované typy objektů: **Line, Circle, Arc, Ellipse, Polyline** (včetně Rectangle).

## Použití příkazu offset

1. Napište `offset` do terminálu nebo klikněte na tlačítko **Offset** v panelu nástrojů.
2. **Napište vzdálenost odsazení** a stiskněte **Enter** nebo **Space**.
3. **Klikněte na objekt**, který chcete odsadit — pokud objekt není podporovaného typu, objeví se chybová zpráva a můžete kliknout na jiný objekt.
4. **Přesuňte kurzor** na stranu, kde se má kopie objevit — sleduje ho živý náhled.
5. **Kliknutím** umístíte odsazenou kopii.

Po každém umístění se příkaz vrátí ke kroku 3 se **stejnou vzdáleností**, připraven na další odsazení. Stisknutím **Enter** nebo **Space** při čekání na výběr dalšího objektu příkaz dokončíte, nebo **Escape** vás vrátí zpět ke kroku zadání vzdálenosti.

```
  Vzdálenost: 10

  ─────────────────    ← původní úsečka
  ─────────────────    ← odsazená kopie (10 jednotek pod ní)
```

## Chování odsazení podle objektu

| Objekt | Jak se odsazení vypočítá |
|--------|--------------------------|
| **Line** | Rovnoběžná úsečka posunutá kolmo na původní směr |
| **Circle** | Soustředná kružnice; kliknutí vně → větší poloměr, uvnitř → menší poloměr |
| **Arc** | Soustředný oblouk s novým poloměrem; zachován stejný úhlový rozsah |
| **Ellipse** | Obě poloosy zvětšeny nebo zmenšeny o stejnou vzdálenost |
| **Polyline** | Každý segment odsazen samostatně; sousední odsazené segmenty se v rozích spojí na pokosu |

U **Circle**, **Arc** a **Ellipse**: pokud by odsazení dovnitř zmenšilo jakýkoli poloměr nebo poloosu na nulu či méně, odsazení se neprovede.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.` | Připojí číslici k hodnotě vzdálenosti |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` / `Space` (při psaní vzdálenosti) | Potvrdí napsanou vzdálenost a přejde k výběru objektu |
| `Enter` / `Space` (v klidu, při čekání na výběr dalšího objektu) | Dokončí příkaz Offset |
| `Escape` | Vrátí se ke kroku zadání vzdálenosti |

## Poznámka k pracovnímu postupu

Vzdálenost zůstává nastavená, dokud nestisknete **Escape**. Díky tomu je efektivní odsazovat mnoho objektů ve stejném rozestupu — vzdálenost napíšete jednou, pak postupně pro každý objekt kliknete a vyberete stranu.

## Offset vs Copy

| | Offset | Copy |
|---|--------|------|
| Posunutí | Kolmo na geometrii objektu | Libovolný vektor (základ → cíl) |
| Podporované objekty | Line, Circle, Arc, Ellipse, Polyline | Všechny typy objektů |
| Zadání vzdálenosti | Napsána před výběrem objektu | Napsána nebo kliknuta po výběru objektu |
| Nejvhodnější pro | Rovnoběžné úsečky, soustředné kružnice, cesty odsazené dovnitř/ven | Umístění duplikátů do libovolných poloh |
