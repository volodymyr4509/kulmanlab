---
sidebar_position: 3
title: Väljare för linjevikt i verktygsfältet — Kontrollera streckbredd i KulmanLab CAD
description: Linjeviktsväljaren i KulmanLab CAD-verktygsfältet ställer in streckbredden som tillämpas på alla nyritade entiteter. Stöder standardvärden för DXF-linjevikt från 0,00 mm till 2,11 mm samt lägena ByLayer och Default.
keywords: [CAD-linjevikt, streckbredd, linjebredd, DXF-linjevikt, ByLayer-linjevikt, kulmanlab]
---

# Lineweight

Bricken **lineweight** i verktygsfältet styr streckbredden som tilldelas varje ny entitet du ritar. Klicka på den för att öppna väljarens rullgardinsmeny.

## Alternativ

| Värde | Betydelse |
|-------|---------|
| **From Layer** | Entiteten ärver linjevikten som definierats på dess lager. Den faktiska bredden som visas beror på lagerinställningen. |
| **Default** | Använder applikationens standardbredd — renderas som en tunn linje (1 px). Åsidosätter inte lagerinställningen i DXF. |
| **0,00 mm – 2,11 mm** | En explicit fast bredd. Entiteten bär detta värde oavsett dess lagers linjevikt. |

Standardvärden för DXF-linjevikt är tillgängliga: 0,00, 0,05, 0,09, 0,13, 0,15, 0,18, 0,20, 0,25, 0,30, 0,35, 0,40, 0,50, 0,53, 0,60, 0,70, 0,80, 0,90, 1,00, 1,06, 1,20, 1,40, 1,58, 2,00 och 2,11 mm.

## Hur den tillämpas

Den valda linjevikten tillämpas på varje entitet som skapas efter ändringen. Den påverkar inte retroaktivt befintliga entiteter.

För att ändra linjevikten för befintliga entiteter, markera dem och redigera fältet **Lineweight** i egenskapspanelen, eller använd [MatchProperties](../../commands/match-properties/) för att kopiera den från en annan entitet.

## Rendering

Linjevikter renderas i en skala av **3,78 px per mm** (96 dpi). En linje på 0,25 mm är cirka 1 px bred på skärmen; en linje på 1,00 mm är cirka 4 px. Mycket tunna värden (0,00 mm och negativa) renderas alltid som minst 0,5 px så att de förblir synliga på vilken zoomnivå som helst.

## DXF-kompatibilitet

Linjeviktsvärden lagras som heltal i hundradelar av en millimeter (t.ex. 25 = 0,25 mm) i DXF-posterna `LWPOLYLINE`, `LINE`, `CIRCLE` och andra entitetsposter. **From Layer** lagras som `-1` och **Default** som `-3`, i enlighet med DXF-specifikationen. Filer genomgår en tur-och-retur utan förlust i vilken DXF-kompatibel applikation som helst.
