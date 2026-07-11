---
title: Väljare för linjetyp i verktygsfältet — Kontrollera streckmönster i KulmanLab CAD
description: Linjetypsväljaren i KulmanLab CAD-verktygsfältet ställer in streckmönstret som tillämpas på alla nyritade entiteter. Stöder alla linjetyper laddade från den aktuella DXF-filen samt de inbyggda alternativen ByLayer, ByBlock och Continuous.
keywords: [CAD-linjetyp, streckmönster, streckad linje, DXF-linjetyp, ByLayer-linjetyp, kulmanlab]
group: interface
order: 3
---

# Linetype

Bricken **linetype** i verktygsfältet styr streckmönstret som tilldelas varje ny entitet du ritar. Klicka på den för att öppna väljarens rullgardinsmeny.

## Alternativ

| Värde | Betydelse |
|-------|---------|
| **From Layer** | Entiteten ärver linjetypen som definierats på dess lager. Visas som `ByLayer` i DXF. |
| **ByBlock** | Entiteten ärver linjetypen från blocket den tillhör. Har ingen synlig effekt utanför ett block. |
| **Continuous** | Solid obruten linje — inget streckmönster. |
| **Namngivna linjetyper** | Vilken linjetyp som helst laddad från den aktuella DXF-filen (t.ex. `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM`, …). Rullgardinsmenyn visar en live-förhandsgranskning av varje mönster och dess definitionssträng. |

## Hur den tillämpas

Den valda linjetypen tillämpas på varje entitet som skapas efter ändringen. Den påverkar inte retroaktivt befintliga entiteter.

För att ändra linjetypen för befintliga entiteter, markera dem och redigera fältet **Linetype** i egenskapspanelen, eller använd [MatchProperties](../../commands/match-properties/) för att kopiera den från en annan entitet.

## Linjetypsskala

Varje entitet har också en egenskap **Linetype Scale** (standard `1`). Streckmönstret multipliceras med denna faktor. Ett värde på `2` gör strecken dubbelt så långa; `0.5` gör dem hälften så långa. Redigera det i egenskapspanelen efter att ha markerat en entitet.

## Tillgängliga linjetyper

Rullgardinsmenyn listar endast linjetyper som finns i den aktuellt laddade DXF-filen. En nyskapad fil innehåller endast `ByLayer`, `ByBlock` och `Continuous`. När du importerar en DXF blir alla linjetyper definierade i filens `$LTYPE`-tabell tillgängliga.

Om du behöver en specifik linjetyp (t.ex. `DASHED2`) som inte finns i listan, importera en DXF-fil som innehåller den — linjetypen visas då i väljaren för den aktuella sessionen.

## DXF-kompatibilitet

Linjetypsnamn lagras som strängar i entitetsposter. `ByLayer` och `ByBlock` är standardvärdena i DXF. Alla namngivna linjetyper och deras streckmönster bevaras exakt vid export och genomgår en tur-och-retur utan förlust i LibreCAD, FreeCAD och andra DXF-kompatibla applikationer.
