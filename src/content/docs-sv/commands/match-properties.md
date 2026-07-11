---
title: Match Properties — Kopiera entitetsegenskaper i KulmanLab CAD
description: MatchProperties-kommandot kopierar färg, lager och andra delade egenskaper från en källentitet till en eller flera målentiteter. Matchar egenskaper på samma sätt som CAD-program för skrivbordet gör.
keywords: [matcha egenskaper CAD, kopiera entitetsegenskaper, MATCHPROP, matcha lagerfärg, överför egenskaper, kulmanlab match properties, måla egenskaper, kopiera lager CAD]
group: style
order: 1
---

# Match Properties

`MatchProperties`-kommandot kopierar **visuella egenskaper och lageregenskaper** från en källentitet till en eller flera målentiteter. Endast egenskaper som delas mellan käll- och målentitetstyperna överförs — geometrin ändras aldrig.

## Så här aktiverar du kommandot

Klicka på verktygsfältsknappen **Match Properties** (ikon med målarrulle) i Style-panelen, eller skriv `MatchProperties` i terminalen.

## Arbetsflöde

**Aktivera först, välj sedan källa:**

1. Skriv `MatchProperties` eller klicka på verktygsfältsknappen utan att något är förvalt.
2. **Klicka på källentiteten** — den vars egenskaper du vill kopiera.
3. **Klicka på varje målentitet** för att applicera källans egenskaper. Du kan klicka på flera entiteter en i taget.
4. För att applicera på en grupp på en gång, **dra en markeringsruta** över målen.
5. Tryck **Enter** eller **Escape** för att avsluta.

**Förvälj källan, aktivera sedan:**

1. Klicka på en enskild entitet för att markera den.
2. Aktivera `MatchProperties`. Den markerade entiteten används automatiskt som källa.
3. Klicka på målentiteter eller dra för att markera, tryck sedan **Enter** eller **Escape** för att avsluta.

## Vilka egenskaper kopieras

MatchProperties kopierar egenskaper som tillhör en delad basklass mellan källan och målet. Som lägst delar **alla entitetstyper** dessa egenskaper:

| Egenskap | Beskrivning |
|----------|-------------|
| **Color** | Entitetens färgindex (inkluderar "By Layer" / "By Block") |
| **Layer** | Lagret som entiteten tillhör |

När källan och målet är av samma entitetstyp (t.ex. båda är dimensioner) kopieras även ytterligare typspecifika egenskaper — till exempel texthöjd, pilstorlek, inställningar för förlängningslinjer.

Geometri (koordinater, radie, längd, etc.) påverkas aldrig.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `Enter` / `Space` | Bekräfta områdesmarkering eller avsluta kommandot |
| `Escape` | Avsluta appliceringen (om källa är satt) eller avbryt |

## Beteendedetaljer

- Källentiteten i sig ändras aldrig.
- Varje klick eller dragmarkering applicerar källans egenskaper omedelbart — det finns inget bekräftelsesteg.
- Områdesmarkering följer de vanliga reglerna: dra **åt höger** för strikt markering (helt inneslutet), dra **åt vänster** för korsande markering (vilken överlappning som helst).
- Att klicka på källentiteten som ett mål ignoreras.
- För entiteter med text (**Text**, **Dimensions**, **Multileaders**) kopieras endast texthöjden — typsnitt, fetstil, kursiv stil och andra textstilsinställningar matchas inte.

## Relaterade kommandon

- [LayerMatch](../layer-match/) — flytta markerade entiteter till samma lager som en källa (endast lageregenskap)
- [LayerMakeCurrent](../layer-make-current/) — sätt det aktuella ritlagret från en klickad entitet
