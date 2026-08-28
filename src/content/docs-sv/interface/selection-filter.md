---
title: Urvalsfilter — Begränsa ett flerval efter egenskap
description: När många entiteter är markerade öppnar en filterikon i egenskapspanelens rubrik ett fönster med levande kryssrutelistor för Typ, Lager, Färg, Linjebredd och Linjetyp, byggda av det som faktiskt finns i markeringen, så att ett stort blandat urval kan begränsas före massredigering.
keywords: [urvalsfilter, filtrera markering CAD, fasettfilter, begränsa markering, massredigering CAD, filter i egenskapspanelen, kulmanlab]
group: interface
order: 7
---

# Urvalsfilter

Att markera många entiteter samtidigt öppnar egenskapspanelen i dess flervalsvy ("Selection (N)"). En **filterikon** bredvid stängknappen låter dig begränsa den markeringen efter egenskap innan du redigerar den i grupp.

## Öppna filtret

1. Markera flera entiteter — dra en markeringsruta, Skift-klicka eller tryck Ctrl+A.
2. Klicka på **filterikonen** (tratten) i egenskapspanelens rubrik.
3. Under knappen öppnas ett fönster med en kryssrutelista för varje egenskap som faktiskt varierar inom markeringen.

## Fasetter

Fönstret kan visa upp till fem fasetter, var och en byggd i realtid från den aktuella markeringen:

| Fasett | Visade värden |
|--------|---------------|
| **Typ** | Entitetstypens namn (Line, Circle, Hatch, …) |
| **Lager** | Lagernamn, med en färgruta som matchar lagret |
| **Färg** | ACI-färgindex |
| **Linjebredd** | Linjebreddens värde |
| **Linjetyp** | Linjetypens namn |

En fasett visas bara om markeringen verkligen innehåller mer än ett distinkt värde för den — att markera tio linjer som alla ligger på samma lager ger ingen Lager-fasett, eftersom en kryssning där inte skulle begränsa något. Entiteter som inte alls bär en viss egenskap (Hatch och Text har till exempel varken linjebredd eller linjetyp) räknas helt enkelt inte in i den fasetten — och utesluts aldrig heller av den.

## Begränsa markeringen

Kryssa i ett eller flera värden i valfri fasett för att begränsa markeringen till entiteter som uppfyller **alla** ikryssade fasetter (en entitet måste matcha minst ett ikryssat värde i *varje* fasett du har rört, inte bara i en). Varje fasetts egna rutor och räknare speglar vad de *andra* ikryssade fasetterna redan har begränsat till, så en fasett döljer aldrig sina egna redan ikryssade alternativ — det vanliga beteendet vid fasetterad sökning.

Antalet träffar uppdateras direkt medan du kryssar i och ur, och markeringen på ritytan begränsas med den — det här är inget rent visningsfilter: de entiteter som inte längre matchar avmarkeras på riktigt, redo för att du ska massredigera exakt den delmängd du filtrerat fram.

## Rensa filtren

Använd fönstrets återställningskontroll för att tömma alla rutor och återgå till hela den ursprungliga markeringen, eller stäng fönstret (det öppnas med ett nytt utgångsläge nästa gång du klickar på filterikonen vid en annan markering).

## Relaterat

- [Match Properties](../../commands/match-properties/) — kopiera egenskaper från en entitet till andra, när du väl har begränsat vilka
- [LayerIsolate](../../commands/layer-isolate/) — ett alternativ på lagernivå när du vill isolera enbart efter lager, oberoende av vad som är markerat
