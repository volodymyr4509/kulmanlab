---
title: Leader — Multileader-annotaties Tekenen met Pijlpunt en Tekst
description: "De opdracht Leader tekent een multileader met pijlpunt, knik en tekst. Nieuwe verwijslijnen gebruiken de huidige Aanwijsstijl en worden in DXF opgeslagen."
keywords: [CAD leader commando, multileader annotatie, leader CAD, pijl label annotatie, dogleg leader, tekstrichting CAD, kulmanlab]
group: markup
order: 1
---

# Leader

Het `Verwijslijn`-commando tekent een multileader-annotatie in vier stappen: een pijlpunt die een kenmerk raakt, een leaderlijn die knikt bij een dogleg, een tekstanker en een getypt label. Van alle annotatiecommando's is Leader de enige met een interactieve tekstinvoerfase met een knipperende cursorpreview.

## Anatomie van een multileader

```
  ◄── pijlpunt-tip  (stap 2 — raakt het kenmerk)
      \
       \  leaderlijn
        \
         ●──── dogleg (stap 3) ──── tekstanker (stap 4)
                                    Labeltekst  (stap 5)
```

- **Pijlpunt-tip** — het puntige uiteinde dat op het geannoteerde kenmerk wordt geplaatst.
- **Dogleg** — de knik waar de leaderlijn richting de tekst buigt.
- **Tekstanker** — waar het label wordt gepositioneerd. Tekst lijnt automatisch links of rechts uit.

## Een leader tekenen

1. Typ `Verwijslijn` in de terminal of klik op de werkbalkknop **Leader**.
2. **Klik de pijlpunt-tip**, of typ `X,Y` en druk op **Enter** voor een exacte coördinaat.
3. **Klik de dogleg** — de knik in de leader. De hoek vergrendelt op stappen van 45°; typ een lengte en druk op **Enter** voor precieze plaatsing. Of typ `X,Y` om een absolute coördinaat in te voeren.
4. **Klik de tekstpositie** — waar het label verankert. Dezelfde opties gelden: klikken, hoekvergrendeling + lengte, of `X,Y`.
5. **Typ de labeltekst** — de canvaspreview werkt live bij met een knipperende cursor. Druk op **Enter** om te plaatsen.

## Coördinaatinvoer (alle puntfasen)

Bij elke puntkeuzestap (tip, dogleg, tekstpositie) kunt u in plaats van klikken een exacte coördinaat typen:

1. Typ de X-waarde (cijfers, `.`, of `-`).
2. Druk op `,` — de terminal toont `[X], [Y{cursor}]` ter bevestiging dat X vergrendeld is.
3. Typ de Y-waarde.
4. Druk op **Enter** om het punt te plaatsen.

## Hoekvergrendeling (stappen 3 en 4)

Na elk geplaatst punt snapt het commando naar assen van 45° zodra de cursor ver genoeg weg is. Terwijl vergrendeld:
- De preview snapt naar de as.
- Typ een lengte en druk op **Enter** om het volgende punt op die exacte afstand te plaatsen.

Hoekvergrendeling en coördinaatinvoer sluiten elkaar uit — zodra u een cijfer typt zonder voorafgaande `,`, interpreteert het commando dit als een afstand (hoekvergrendeling moet actief zijn). Om in plaats daarvan een absolute coördinaat in te voeren, begint u met het X-getal gevolgd door een komma.

## Tekstlabel bewerken

Terwijl u het label in stap 5 typt, kunt u door de tekst navigeren en deze bewerken voordat u plaatst:

| Toets | Actie |
|-----|--------|
| Elk afdrukbaar teken | Invoegen op de cursorpositie |
| `←` / `→` | Cursor naar links of rechts verplaatsen |
| `Backspace` | Verwijder het teken links van de cursor |
| `Delete` | Verwijder het teken rechts van de cursor |
| `Enter` | Plaats de leader |

## Automatische tekstrichting

De tekstuitlijning past zich aan op basis van de cursorpositie ten opzichte van de dogleg:

| Cursorpositie | Tekstrichting |
|-----------------|---------------|
| Rechts van de dogleg | Van links naar rechts vanaf het tekstanker |
| Links van de dogleg | Van rechts naar links (verankerd aan de rechterkant) |

Geen handmatige aanpassing nodig — beweeg de cursor naar de kant waar u het label wilt en het lijnt correct uit.

## Toetsenbordreferentie

**Puntfasen (tip, dogleg, tekstpositie)**

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | Begin X-coördinaat te typen (dan `,` om X te vergrendelen en Y in te voeren) |
| `,` | X bevestigen en overgaan naar Y-invoer |
| `0`–`9`, `.`, `-` | Afstand opbouwen wanneer hoek vergrendeld is |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` | Getypte coördinaat of afstand bevestigen |

**Tekstinvoerfase**

| Toets | Actie |
|-----|--------|
| Afdrukbaar teken | Invoegen op cursor |
| `←` / `→` | Cursor verplaatsen |
| `Backspace` | Links verwijderen |
| `Delete` | Rechts verwijderen |
| `Enter` | Plaats de leader |

| Toets | Actie |
|-----|--------|
| `Escape` | Annuleren en terugzetten naar stap 2 |

## Een bestaande leader bewerken

**Dubbelklik** op een geplaatste multileader om de teksteditor opnieuw te openen in **rijke** modus. In rijke modus kunt u vet, cursief en per-teken lettertype- of hoogte-overschrijvingen toepassen, en regeleinden invoegen met `Enter`. Druk op **Escape** om te bevestigen en te sluiten.

Zie [Teksteditor — rijke modus](../../interface/text-editor/#rich-mode) voor de volledige referentie.

## Armen toevoegen en verwijderen

- Om een extra pijlpuntarm toe te voegen aan een bestaande leader: [LeaderAdd](../leader-add/)
- Om een arm te verwijderen van een leader met twee of meer: [LeaderRemove](../leader-remove/)

## DXF-compatibiliteit

KulmanLab leest en schrijft `MLEADER`-entiteiten en hun benoemde `MLEADERSTYLE`-records. Pijlpunten, armen, aanlandingsgeometrie, tekst, bevestiging, rotatie, kader en gekoppelde stijl blijven behouden waar DXF ze ondersteunt. Beheer de standaardwaarden voor nieuwe verwijslijnen met [LeaderStyle](../leader-style/).
