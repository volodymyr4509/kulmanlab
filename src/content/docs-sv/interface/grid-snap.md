---
title: Rutnät & Snap — Justera ritningar mot ett regelbundet rutnät i KulmanLab CAD
description: Reglagen Grid och Snap i KulmanLab CAD lägger ett referensrutnät ovanpå ritytan och låser markörrörelsen till rutnätspunkter. Rutnätsavståndet anpassas automatiskt till den aktuella zoomnivån så att det alltid visar runda modellvärden.
keywords: [CAD-rutnät, snap till rutnät, rutnätsavstånd, ritningshjälpmedel, kulmanlab, rutnätspunkter, ortogonal snap]
group: interface
order: 1
---

# Rutnät & Snap

Två reglageknappar i kontrollfältet låter dig lägga ett referensrutnät ovanpå ritytan och låsa markören till dess skärningspunkter medan du ritar.

| Knapp | Vad den gör |
|--------|-------------|
| **Grid** | Visar ett visuellt punkt- eller linjerutnät på ritytan |
| **Snap** | Låser markören till närmaste rutnätspunkt när ingen geometrisnap är närmare |

De två reglagen är oberoende av varandra — du kan visa rutnätet utan att snappa, snappa utan att visa rutnätet, eller använda båda tillsammans.

## Aktivera rutnät och snap

Klicka på **Grid** eller **Snap** i kontrollfältets verktygsfält. Aktivt tillstånd markeras. Inställningarna sparas mellan sessioner.

När **Snap** är aktiverat växlar rutnätet automatiskt visning från linjer till **punkter** — punkterna markerar de exakta punkter som markören kommer att snappa till.

## Adaptivt rutnätsavstånd

Rutnätsavståndet justeras automatiskt när du zoomar så att rutnätslinjerna alltid har ett bekvämt avstånd på skärmen (~40 px). Steget är alltid ett "snyggt" tal — en multipel av 1, 2 eller 5 vid vilken tiopotens som helst:

| Exempel zoom / modellskala | Rutnätssteg |
|---------------------------|-----------|
| Utzoomad (stort område) | 100, 500, 1000 … |
| Medelzoom | 10, 20, 50 … |
| Inzoomad (finjustering) | 1, 2, 5 … |
| Mycket nära | 0.1, 0.2, 0.5 … |

Detta innebär att varje snappunkt hamnar på en rund koordinat i modellutrymmet — inga flyttalsavvikelser ackumuleras.

## Snap-prioritet

**Ändpunkts- och skärningssnap har alltid företräde framför rutnätet.** Markören snappar till en rutnätspunkt endast när den inte är i närheten av någon geometrisnap-kandidat (ändpunkt, mittpunkt, centrum eller skärningspunkt).

Detta innebär att du kan rita med snap-till-rutnät aktiverat och ändå snappa exakt till befintlig geometri när markören passerar tillräckligt nära den. Rutnätet är en reservlösning, inte en överstyrning.

## Layoutläge

- **Modellutrymme** — punkter eller linjer fyller hela den synliga rityteytan.
- **Layout (papper)** — punkter klipps till pappersrektangeln och sträcker sig inte utanför den.
- **Inuti ett viewport** — rutnätet följer modellkoordinatsystemet vid viewportens skala, så punkterna riktas mot samma modellenheter oavsett viewportens förstoring.

## Typiskt arbetsflöde

1. Slå på **Grid** och **Snap** innan du börjar en ritning som kräver regelbundet avstånd.
2. Zooma till den nivå där rutnätssteget matchar önskat inkrement (t.ex. zooma tills punkterna är 10 enheter isär).
3. Rita — markören snappar automatiskt till rutnätspunkter. Befintlig geometri snappar fortfarande normalt när du är nära den.
4. Stäng av **Snap** när du behöver fri markörrörelse eller bara vill snappa till geometri.
