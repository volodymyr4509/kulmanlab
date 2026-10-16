---
title: "Příkaz Polygon — kreslení pravidelných mnohoúhelníků ze středu nebo hrany v KulmanLab CAD"
description: "Příkaz Polygon nakreslí pravidelný mnohoúhelník o 3 až 1024 stranách ze středu a poloměru, nebo z jedné hrany. Výsledkem je uzavřená LWPOLYLINE, takže se na něj vztahují všechny příkazy úprav polylinie."
keywords: ["CAD příkaz mnohoúhelník", "kreslení pravidelného mnohoúhelníku CAD", "šestiúhelník osmiúhelník pětiúhelník CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

Příkaz `Mnohoúhelník` nakreslí pravidelný mnohoúhelník — všechny strany a úhly jsou stejné — o 3 až 1024 stranách. Napište `Mnohoúhelník` do terminálu. Výsledkem je **uzavřená `LWPOLYLINE`**, takže se po umístění chová jako každá jiná [Polyline](../polyline/) a platí pro ni všechny úpravy polylinie.

## Kreslení mnohoúhelníku

1. Napište `Mnohoúhelník` do terminálu a zadejte **počet stran** — celé číslo od 3 do 1024 — a stiskněte **Enter** nebo **Space**. Výzva je předvyplněna naposledy použitým počtem (poprvé 4); začněte psát a přepíšete ho. Cokoli jiného se odmítne a zůstane ve výzvě k opravě.
2. **Klikněte na střed**, nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici. Chcete-li začít od hrany, stiskněte nejdřív `E` (viz níže).
3. **Klikněte na poloměr** — mnohoúhelník se živě zobrazuje — nebo napište poloměr a stiskněte **Enter** nebo **Space**.
4. Mnohoúhelník se umístí a příkaz skončí.

## Volby

| Volba | Klávesa | Účinek |
|---|---|---|
| Edge | `E` | První bod se místo středu stane jedním koncem hrany. Zvolte druhý konec; zbylé vrcholy se sestrojí proti směru hodinových ručiček, vlevo od hrany z prvního konce do druhého. Dalším stisknutím `E` se vrátíte ke středu. |
| Inside | `I` | Ve výchozím stavu zapnuto a zachováno z jednoho mnohoúhelníku do dalšího. Zapnuto: vrcholy leží na kružnici daného poloměru. Vypnuto: mnohoúhelník leží vně této kružnice a střed každé hrany je na ní. |

- Kliknutí umístí vrchol (Inside zapnuto) nebo střed hrany (Inside vypnuto) přesně tam, kde je kurzor, takže kurzor určuje i natočení.
- Napsaný poloměr nemá podle čeho mířit, takže mnohoúhelník leží s nejnižší hranou vodorovně — pokud není zapnutý zámek úhlu, který se pak řídí zamčeným úhlem.
- Každá volba se nabízí ve svém kroku a lze ji přepnout i během psaní čísla.

## Přehled kláves

| Klávesa | Akce |
|---|---|
| `0`–`9`, `.` | Zadání počtu stran, poloměru, souřadnice nebo délky |
| `E` | Zapnutí nebo vypnutí Edge (krok prvního bodu) |
| `I` | Zapnutí nebo vypnutí Inside (krok poloměru) |
| `Enter` / `Space` | Potvrzení počtu stran nebo poloměru |
| `Escape` | Zrušení |

## DXF — entita LWPOLYLINE

Mnohoúhelník se uloží jako uzavřená `LWPOLYLINE` s jedním vrcholem na každý roh; DXF nemá vyhrazený typ pro mnohoúhelník. Všechny vlastnosti — souřadnice vrcholů, barva, hladina, typ čáry, měřítko typu čáry a tloušťka — se přenášejí beze ztráty a každý prohlížeč DXF jej přečte jako uzavřenou polylinii.
