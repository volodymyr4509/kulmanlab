---
title: Utvalgsfilter — Snevre inn et flervalg etter egenskap
description: Når mange enheter er valgt, åpner et filterikon i egenskapspanelets topptekst et vindu med levende avkryssingslister for Type, Lag, Farge, Linjebredde og Linjetype, bygget av det som faktisk finnes i utvalget, slik at et stort og blandet utvalg kan snevres inn før masseredigering.
keywords: [utvalgsfilter, filtrere utvalg CAD, fasettfilter, snevre inn utvalg, masseredigering CAD, filter i egenskapspanelet, kulmanlab]
group: interface
order: 7
---

# Utvalgsfilter

Å velge mange enheter samtidig åpner egenskapspanelet i flervalgsvisningen ("Selection (N)"). Et **filterikon** ved siden av lukkeknappen lar deg snevre inn det utvalget etter egenskap før du redigerer det samlet.

## Åpne filteret

1. Velg flere enheter — dra en valgramme, Skift-klikk eller trykk Ctrl+A.
2. Klikk **filterikonet** (trakten) i egenskapspanelets topptekst.
3. Under knappen åpnes et vindu med en avkryssingsliste for hver egenskap som faktisk varierer innenfor utvalget.

## Fasetter

Vinduet kan vise inntil fem fasetter, hver bygget direkte fra det gjeldende utvalget:

| Fasett | Viste verdier |
|--------|---------------|
| **Type** | Navnet på enhetstypen (Line, Circle, Hatch, …) |
| **Lag** | Lagnavn, med en fargeprøve som svarer til laget |
| **Farge** | ACI-fargeindeks |
| **Linjebredde** | Verdien for linjebredde |
| **Linjetype** | Navnet på linjetypen |

En fasett vises bare hvis utvalget faktisk inneholder mer enn én distinkt verdi for den — å velge ti linjer som alle ligger på samme lag gir ingen Lag-fasett, siden en avkryssing der ikke ville snevre inn noe. Enheter som ikke bærer en gitt egenskap i det hele tatt (Hatch og Text har for eksempel verken linjebredde eller linjetype), telles rett og slett ikke med i den fasetten — og utelukkes aldri av den heller.

## Snevre inn utvalget

Kryss av én eller flere verdier i en hvilken som helst fasett for å snevre utvalget inn til enheter som oppfyller **alle** avkryssede fasetter (en enhet må treffe minst én avkrysset verdi i *hver* fasett du har rørt, ikke bare i én). Hver fasetts egne bokser og tellinger gjenspeiler hva de *andre* avkryssede fasettene allerede har snevret inn til, slik at en fasett aldri skjuler sine egne allerede avkryssede valg — den vanlige oppførselen ved fasettsøk.

Antall treff oppdateres fortløpende mens du krysser av og fjerner avkryssinger, og selve utvalget på tegneflaten snevres inn sammen med det — dette er ikke bare et visningsfilter: enhetene som ikke lenger passer, blir faktisk avmarkert, klare til at du masseredigerer nøyaktig den delmengden du har filtrert fram.

## Fjerne filtrene

Bruk vinduets tilbakestillingskontroll for å tømme alle avkryssinger og gå tilbake til hele det opprinnelige utvalget, eller lukk vinduet (det åpnes med et friskt utgangspunkt neste gang du klikker filterikonet på et annet utvalg).

## Relatert

- [Match Properties](../../commands/match-properties/) — kopiere egenskaper fra én enhet til andre, når du først har snevret inn hvilke
- [LayerIsolate](../../commands/layer-isolate/) — et alternativ på lagnivå når du vil isolere kun etter lag, uavhengig av hva som er valgt
