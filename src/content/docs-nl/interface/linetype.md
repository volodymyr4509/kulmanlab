---
title: Lijntype-werkbalkkiezer — Streeppatronen beheren in KulmanLab CAD
description: De lijntypekiezer in de werkbalk van KulmanLab CAD stelt het streeppatroon in dat wordt toegepast op alle nieuw getekende entiteiten. Ondersteunt alle lijntypen die zijn geladen uit het huidige DXF-bestand, plus de ingebouwde opties ByLayer, ByBlock en Continuous.
keywords: [CAD lijntype, streeppatroon, gestreepte lijn, DXF lijntype, ByLayer lijntype, kulmanlab]
group: interface
order: 3
---

# Lijntype

De **lijntype**-chip in de werkbalk bepaalt het streeppatroon dat wordt toegewezen aan elke nieuwe entiteit die u tekent. Klik erop om de keuzelijst te openen.

## Opties

| Waarde | Betekenis |
|-------|---------|
| **Van laag** | Entiteit erft het lijntype dat is gedefinieerd op de laag. Weergegeven als `ByLayer` in DXF. |
| **ByBlock** | Entiteit erft het lijntype van het blok waartoe deze behoort. Heeft geen zichtbaar effect buiten een blok. |
| **Continuous** | Doorlopende lijn zonder streeppatroon. |
| **Benoemde lijntypen** | Elk lijntype geladen vanuit het huidige DXF-bestand (bijv. `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM`, …). De vervolgkeuzelijst toont een live voorvertoning van elk patroon en de bijbehorende definitiestring. |

## Hoe het wordt toegepast

Het geselecteerde lijntype wordt toegepast op elke entiteit die na de wijziging wordt gemaakt. Het heeft geen invloed op bestaande entiteiten met terugwerkende kracht.

Om het lijntype van bestaande entiteiten te wijzigen, selecteert u deze en bewerkt u het veld **Lijntype** in het eigenschappenpaneel, of gebruikt u [MatchProperties](../../commands/match-properties/) om het van een andere entiteit te kopiëren.

## Lijntypeschaal

Elke entiteit heeft ook een eigenschap **Lijntypeschaal** (standaard `1`). Het streeppatroon wordt met deze factor vermenigvuldigd. Een waarde van `2` maakt de strepen twee keer zo lang; `0.5` maakt ze half zo lang. Bewerk dit in het eigenschappenpaneel nadat u een entiteit heeft geselecteerd.

## Beschikbare lijntypen

De vervolgkeuzelijst toont alleen lijntypen die aanwezig zijn in het huidige geladen DXF-bestand. Een net gemaakt bestand bevat alleen `ByLayer`, `ByBlock` en `Continuous`. Wanneer u een DXF importeert, worden alle lijntypen die zijn gedefinieerd in de `$LTYPE`-tabel van het bestand beschikbaar.

Als u een specifiek lijntype nodig heeft (bijv. `DASHED2`) dat niet in de lijst staat, importeert u een DXF-bestand dat het bevat — het lijntype verschijnt dan in de kiezer voor de huidige sessie.

## DXF-compatibiliteit

Lijntypenamen worden opgeslagen als strings in entiteitsrecords. `ByLayer` en `ByBlock` zijn de standaard DXF-sentinelwaarden. Alle benoemde lijntypen en hun streeppatronen worden exact behouden bij export en gaan zonder verlies door een volledige rondgang in LibreCAD, FreeCAD en andere DXF-compatibele toepassingen.
