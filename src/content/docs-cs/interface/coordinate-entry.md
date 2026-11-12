---
title: "Zadávání souřadnic — psaní přesných, relativních a polárních bodů"
description: "Kdekoli příkaz žádá bod, napište ho místo kliknutí: X,Y pro přesnou polohu, @X,Y pro měření od posledního bodu a vzdálenost<úhel pro polární bod. Přepínač Rel zahájí každý napsaný bod jako relativní."
keywords: ["zadávání souřadnic CAD", "relativní souřadnice CAD", "polární souřadnice CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Zadávání souřadnic

Kdekoli příkaz žádá bod — začátek [Line](../../commands/line/), roh [Rectangle](../../commands/rectangle/), základní bod [Move](../../commands/move/) nebo úchyt, který táhnete — můžete ho napsat místo kliknutí. Začněte psát číslo a terminál ukáže, co píšete; bod umístíte klávesou **Enter** nebo **Space**.

## Čtyři způsoby zápisu bodu

| Napíšete | Bod leží |
|---|---|
| `100,50` | V X 100, Y 50 |
| `@100,50` | 100 v X a 50 v Y od posledního bodu |
| `100<45` | 100 od počátku, pod úhlem 45° |
| `@100<45` | 100 od posledního bodu, pod úhlem 45° |

Úhly jsou ve stupních, proti směru hodinových ručiček od osy X, takže `@50<90` je 50 přímo nahoru a `@50<180` je 50 doleva. Obě hodnoty mohou být záporné.

## Poslední bod

`@` měří od posledního bodu kliknutého nebo napsaného v kterémkoli příkazu — počítá se poslední kliknutí předchozího příkazu i úchyt, který jste právě přetáhli. Dokud poslední bod není, čte se `@100,50` jako `100,50`. Poslední bod se zapomene při přechodu mezi modelovým prostorem a rozvržením a při otevření výkresu.

## Rel: ve výchozím stavu relativně

Přepínač **Rel** v ovládací liště zahájí každý napsaný bod jako relativní: jakmile napíšete první číslici, vloží se před ni `@`, takže z `100,50` se stane `@100,50`. Stiskněte **Backspace** nad `@`, aby byl tento jeden bod absolutní. Dokud poslední bod není, `@` se nepřidává. Rel je ve výchozím stavu vypnutý a pamatuje se s ostatními přepínači ovládací lišty.

## Klávesy při psaní

| Klávesa | Účinek |
|---|---|
| `0`–`9`, `.`, `-` | Napsat číslo; `-` jen na začátku |
| `@` | Udělat bod relativním, na začátku X |
| `,` nebo **Space** | Ukončit X a přejít na Y |
| `<` | Ukončit X jako vzdálenost a přejít na jeho úhel |
| **Enter** nebo **Space** | Umístit bod, jakmile má Y hodnotu |
| **←** **→** **Home** **End** | Posunout kurzor v psané hodnotě |
| **Backspace** | Smazat před kurzorem; na začátku prázdného Y se vrátit na X |

Bod, který nelze přečíst jako čísla, zůstane v terminálu k opravě. Každý napsaný bod zanechá v historii terminálu řádek tak, jak jste ho napsali — `Zadáno @100<45` — před řádkem příkazu s tím, kam dopadl.

## Napsané body a sledování úhlu

Když je kurzor zamčený na paprsku sledování úhlu, napsané číslo dává vzdálenost podél tohoto paprsku, ne X. Napíšete-li nejprve `@`, začne úplný bod, takže `@100,50` funguje i na zamčeném paprsku.

---

*Související: [Distance Tracking](../distance-tracking/) pro psaní délky podél zamčeného směru a [Vector Pins](../vector-pins/) pro měření od připnutého bodu.*
