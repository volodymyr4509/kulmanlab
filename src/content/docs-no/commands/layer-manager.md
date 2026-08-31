---
title: LayerManager — Administrer Alle Lag i Én Tabell
description: Kommandoen LayerManager åpner en tabell over alle lag i tegningen, der du kan legge til lag, slette ubrukte og redigere hvert lags frysing, låsing, utskrift, farge, linjebredde og linjetype rett i raden.
keywords: [lagbehandler, CAD lagtabell, håndtere lag CAD, legge til lag CAD, slette lag CAD, fjerne ubrukt lag, frys lås skriv ut lag, kulmanlab laghåndtering]
group: layer
order: 1
---

# LayerManager

Kommandoen `LayerManager` åpner en tabell som viser hvert lag i tegningen, med innstillingene **Freeze**, **Lock**, **Plot**, **Farge**, **Linjebredde** og **Linjetype** redigerbare rett i raden. Det er det sentrale stedet for å legge til lag, slette ubrukte og justere hvordan eksisterende oppfører seg — de øvrige lagkommandoene ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) gjør hver sin avgrensede ting uten å åpne den.

## Åpne Layer Manager

- Skriv `LayerManager` i terminalen, **eller**
- Klikk på **Layer Manager**-knappen i lagpanelet.

Dialogen åpnes som et flytende panel; ingenting trenger å være markert på forhånd.

## Lagtabellen

| Kolonne | Hva den styrer |
|---------|-------------------|
| Name | Lagets navn, vist skrivebeskyttet i tabellen (angitt én gang, ved opprettelse) |
| Freeze | Skjuler lagets entiteter og utelukker dem fra markering til det fjernes frysing |
| Lock | Hindrer redigering av entiteter på laget, uten å skjule dem |
| Plot | Om lagets entiteter inkluderes ved utskrift eller PDF-eksport |
| Color | Lagets ACI-farge — klikk på fargeprøven for å åpne fargevelgeren |
| Lineweight | Lagets linjetykkelse — klikk på chippen for å åpne linjetykkelsevelgeren |
| Linetype | Lagets strekmønster — klikk på chippen for å åpne linetype-velgeren |
| ✕ | Sletter laget når ingenting bruker det — se [Slette et lag](#slette-et-lag) |

Å slå av/på Freeze, Lock eller Plot har umiddelbar effekt — det er ikke noe eget lagringssteg. Entiteter satt til **ByLayer** for farge, linjetykkelse eller linetype (standardverdien) følger det du angir her; entiteter med sin egen eksplisitte overstyring påvirkes ikke.

## Legge til et lag

1. Klikk på **+ Add Layer** nederst i tabellen.
2. Skriv et navn og trykk **Enter** for å bekrefte, eller **Escape** for å avbryte.

Lagnavn kan inneholde bokstaver, tall, mellomrom og `_`, `-`, `$`. Et navn som er tomt, allerede i bruk, eller inneholder et annet tegn, avvises med en innebygd feilmelding, og raden forblir åpen for et nytt forsøk.

Nye lag starter som **ufrosne, ulåste, plottbare**, med farge 7 (hvit/svart), linjetykkelse Default og linetype Continuous — de samme standardverdiene som [Import](../import/) tildeler lag `0` i en tom tegning.

## Slette et lag

Hver rad avsluttes med en **✕**-knapp som fjerner laget fra tegningen. Slettingen skjer umiddelbart — det finnes ikke noe bekreftelsestrinn — men tilbys bare for lag som ingenting avhenger av:

| Situasjon | Knappens tilstand |
|-----------|-------------------|
| Laget er tomt | Aktiv — *Delete layer* |
| Laget er tilordnet minst én enhet | Deaktivert — *Cannot delete: assigned to at least one entity* |
| Lag `0` | Ingen knapp i det hele tatt |

**"I bruk" gjelder hele tegningen**, ikke bare det du ser på. En enhet som ligger på en layout (papirrom) teller nøyaktig like mye som en i modellrom, så et lag kan se tomt ut på skjermen og likevel nekte å bli slettet. Frosne lag er ikke annerledes: frysing skjuler enheter, men opphever ikke tilordningen deres, så et frossent lag som holder enheter forblir uslettelig.

Lag `0` kan aldri slettes. Det er reservelaget hver tegning garantert har, så knappen tegnes rett og slett ikke for det i stedet for å vises deaktivert.

### "…is now in use and can't be deleted"

Av og til ser ✕ tilgjengelig ut, men klikket avvises med et banner øverst i panelet:

```
"WALLS" is now in use and can't be deleted
```

Det er ingen motsigelse. Å finne ut hvilke lag som er i bruk betyr å gå gjennom hver enhet i tegningen, så resultatet mellomlagres og bygges bare på nytt når antallet enheter endres — billig ved hundrevis av enheter, ikke ved hundretusener. Å flytte en eksisterende enhet til et lag endrer ikke antallet, så radens deaktiverte tilstand kan et øyeblikk være utdatert. Klikket sjekker på nytt fra bunnen før noe slettes, og derfor skjer avvisningen ved klikket i stedet for at laget forsvinner mens noe fortsatt viser til det.

Lukk banneret med dets eget **✕**. Laget er urørt.

## Hva du ikke kan gjøre her

Tabellen viser ikke hvilket lag som er *gjeldende*; det settes fra nedtrekkslisten i lagpanelet eller med [LayerMakeCurrent](../layer-make-current/), ikke fra denne dialogen. Lagnavn ligger dessuten fast fra opprettelsen — et lag kan slettes og opprettes på nytt, men ikke gis nytt navn.

## Tastaturreferanse

| Tast | Handling |
|------|----------|
| `Enter` | Bekreft navnet på et nytt lag (mens du legger til) |
| `Escape` | Avbryt tillegg av et lag, eller lukk dialogen |

## Relaterte kommandoer

| Kommando | Hva den gjør |
|---------|-------------|
| [LayerMakeCurrent](../layer-make-current/) | Sett gjeldende lag til å samsvare med en klikket entitets lag |
| [LayerMatch](../layer-match/) | Tildel markerte entiteter på nytt til laget for en kildeentitet |
| [LayerIsolate](../layer-isolate/) | Frys alle lag unntatt de markerte entitetenes |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Fjern frysing av alle lag i ett steg |
