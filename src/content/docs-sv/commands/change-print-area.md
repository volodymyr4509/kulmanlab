---
title: ChangePrintArea — beskär Print Managers export till en rektangel
description: Kommandot ChangePrintArea väljer två motstående hörn på ritytan för att ange området som Print Manager exporterar. Stöder inskrivna X,Y-koordinater och snapp, och kommer ihåg området separat för modellrymden och för varje layout.
keywords: [CAD utskriftsområde, beskära CAD-export, change print area kommando, print manager beskärning, CAD exportområde, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

Kommandot `ÄndraUtskriftsområde` anger det rektangulära området som [Print Manager](../print-manager/) exporterar. Det körs på den tomma ritytan med Print Manager dold och tar två motstående hörn — samma två klick som [Rectangle](../rectangle/), så inskrivna koordinater och snapp fungerar precis likadant.

## Välja ett område

1. Skriv `ÄndraUtskriftsområde` i terminalen, eller klicka på **Change Area** i Print Managers sidopanel. Print Manager döljs och ritytan blir interaktiv.
2. **Klicka på det första hörnet**, eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
3. **Klicka på det motstående hörnet**, eller skriv `X,Y` igen.

Print Manager öppnas igen med det nya området i förhandsgranskningen, som anpassas till områdets exakta proportioner.

Hörnen snappar till handtag och skärningar som varje annan punktangivelse, så du kan beskära mot ritad geometri i stället för på ögonmått. Ordningen på de två hörnen spelar ingen roll — motstående hörn definierar samma rektangel.

Tryck `Escape` för att avbryta. Ingenting skrivs, så Print Manager öppnas igen med det område den redan hade.

## Var området kommer ihåg

Valet sparas per kontext, inte globalt:

| Kontext | Plats |
|---|---|
| Modellrymd | En delad plats |
| Varje layout | En egen plats som hålls separat |

Att öppna Print Manager igen i samma layout — eller i modellrymden — återställer den kontextens senaste beskärning i stället för att nollställa den, och att växla mellan layouter lämnar varje layouts område orört.

Detta hålls endast i minnet. Att ladda om sidan rensar alla sparade områden, och Print Manager faller tillbaka på standardvärdena nedan.

## Standardområde

Utan något sparat för den aktuella kontexten öppnas Print Manager på:

| Kontext | Standard |
|---|---|
| Modellrymd | Omslutande rektangel för alla objekt — samma utsträckning som [Fit](../fit/) zoomar till |
| Varje layout | Hela arket |

## Relaterade kommandon

| Kommando | Vad det gör |
|---|---|
| [Print Manager](../print-manager/) | Exportfönstret som området gäller för |
| [Rectangle](../rectangle/) | Samma tvåhörnsangivelse, men ritar en polylinje |
| [Fit](../fit/) | Zoomar till den utsträckning som modellrymden använder som standard |
