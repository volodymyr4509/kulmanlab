---
title: LayerManager — Hantera alla lager i en enda tabell
description: Kommandot LayerManager öppnar en tabell över alla lager i ritningen, där du kan lägga till lager, ta bort oanvända och redigera varje lagers frysning, låsning, utskrift, färg, linjebredd och linjetyp direkt i raden.
keywords: [lagerhanterare, CAD lagertabell, hantera lager CAD, lägga till lager CAD, ta bort lager CAD, ta bort oanvänt lager, frys lås skriv ut lager, kulmanlab lagerhantering]
group: layer
order: 1
---

# LayerManager

Kommandot `Lagerhanterare` öppnar en tabell som listar varje lager i ritningen, med inställningarna **Freeze**, **Lock**, **Plot**, **Färg**, **Linjebredd** och **Linjetyp** redigerbara direkt i raden. Det är den centrala platsen för att lägga till lager, ta bort oanvända och justera hur befintliga beter sig — de övriga lagerkommandona ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) gör var och en en enda avgränsad sak utan att öppna den.

## Öppna Layer Manager

- Skriv `Lagerhanterare` i terminalen, **eller**
- Klicka på knappen **Layer Manager** i lagerpanelen.

Dialogrutan öppnas som en flytande panel; inget behöver vara markerat i förväg.

## Lagertabellen

| Kolumn | Vad den styr |
|--------|----------------|
| Name | Lagrets namn, visas skrivskyddat i tabellen (anges en gång, vid skapandet) |
| Freeze | Döljer lagrets entiteter och utesluter dem från markering tills det fryses upp |
| Lock | Förhindrar redigering av entiteter på lagret, utan att dölja dem |
| Plot | Om lagrets entiteter inkluderas vid utskrift eller PDF-export |
| Color | Lagrets ACI-färg — klicka på färgrutan för att öppna färgväljaren |
| Lineweight | Lagrets linjebredd — klicka på chippen för att öppna linjebreddsväljaren |
| Linetype | Lagrets streckmönster — klicka på chippen för att öppna linjetypsväljaren |
| ✕ | Tar bort lagret när ingenting använder det — se [Ta bort ett lager](#ta-bort-ett-lager) |

Att slå på/av Freeze, Lock eller Plot får omedelbar effekt — det finns inget separat sparsteg. Entiteter som är satta till **ByLayer** för färg, linjebredd eller linjetyp (standardvärdet) följer det du ställer in här; entiteter med en egen explicit override påverkas inte.

## Lägga till ett lager

1. Klicka på **+ Add Layer** längst ner i tabellen.
2. Skriv ett namn och tryck på **Enter** för att bekräfta, eller **Escape** för att avbryta.

Lagernamn får innehålla bokstäver, siffror, mellanslag samt `_`, `-`, `$`. Ett namn som är tomt, redan används, eller innehåller något annat tecken avvisas med ett infogat felmeddelande, och raden förblir öppen för ett nytt försök.

Nya lager börjar som **ofrysta, olåsta, plottbara**, med färg 7 (vit/svart), linjebredd Default och linjetyp Continuous — samma standardvärden som [Import](../import/) tilldelar lager `0` i en tom ritning.

## Ta bort ett lager

Varje rad avslutas med en **✕**-knapp som tar bort lagret ur ritningen. Borttagningen sker direkt — det finns inget bekräftelsesteg — men erbjuds bara för lager som ingenting är beroende av:

| Situation | Knappens tillstånd |
|-----------|--------------------|
| Lagret är tomt | Aktiv — *Delete layer* |
| Lagret är tilldelat minst en entitet | Inaktiverad — *Cannot delete: assigned to at least one entity* |
| Lager `0` | Ingen knapp alls |

**"Används" gäller hela ritningen**, inte bara det du tittar på. En entitet som ligger på en layout (pappersrymd) räknas precis lika mycket som en i modellrymden, så ett lager kan se tomt ut på skärmen och ändå vägra att tas bort. Frysta lager är inget undantag: frysning döljer entiteter men tar inte bort deras tilldelning, så ett fryst lager som håller entiteter förblir omöjligt att ta bort.

Lager `0` kan aldrig tas bort. Det är reservlagret som varje ritning garanterat har, så knappen ritas helt enkelt inte ut för det i stället för att visas inaktiverad.

### "…is now in use and can't be deleted"

Ibland ser ✕ tillgänglig ut men klicket avvisas med en banner högst upp i panelen:

```
"WALLS" is now in use and can't be deleted
```

Det är ingen motsägelse. Att ta reda på vilka lager som används innebär att gå igenom varje entitet i ritningen, så resultatet cachas och byggs bara om när antalet entiteter ändras — billigt vid hundratals entiteter, inte vid hundratusentals. Att flytta en befintlig entitet till ett lager ändrar inte antalet, så radens inaktiverade tillstånd kan för ett ögonblick vara föråldrat. Klicket kontrollerar om från grunden innan något tas bort, och därför sker avslaget vid klicket i stället för att lagret försvinner medan något fortfarande refererar till det.

Stäng bannern med dess egen **✕**. Lagret är orört.

## Vad du inte kan göra här

Tabellen visar inte vilket lager som är *aktuellt*; det ställs in från lagerpanelens rullgardinsmeny eller med [LayerMakeCurrent](../layer-make-current/), inte från den här dialogen. Lagernamn ligger dessutom fast vid skapandet — ett lager kan tas bort och skapas på nytt, men inte byta namn.

## Snabbreferens tangentbord

| Tangent | Åtgärd |
|---------|--------|
| `Enter` | Bekräfta namnet på ett nytt lager (medan du lägger till) |
| `Escape` | Avbryt att lägga till ett lager, eller stäng dialogrutan |

## Relaterade kommandon

| Kommando | Vad det gör |
|---------|-------------|
| [LayerMakeCurrent](../layer-make-current/) | Ställ in det aktuella lagret till samma lager som en klickad entitet |
| [LayerMatch](../layer-match/) | Omtilldela markerade entiteter till lagret för en källentitet |
| [LayerIsolate](../layer-isolate/) | Frys alla lager utom de för de markerade entiteterna |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Frys upp alla lager i ett steg |
