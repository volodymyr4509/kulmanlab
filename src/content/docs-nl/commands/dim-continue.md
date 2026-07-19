---
title: Dimension Continue — Maatvoering Aaneenschakelen vanaf Baseline
description: Het Dimension Continue-commando verlengt een keten van maatvoeringen vanaf de tweede hulplijn van de laatst geplaatste maatvoering. Het erft automatisch de hoek, verschuiving, pijlgrootte en teksthoogte van de basismaatvoering. Werkt met zowel lineaire als uitgelijnde bases.
keywords: [CAD dimension continue, dimcontinue, maatvoeringen aaneenschakelen CAD, baseline maatvoering, doorlopende maatvoeringsreeks, kulmanlab]
group: markup
order: 6
---

# Dimension Continue

Het `dimcontinue`-commando schakelt nieuwe maatvoeringen aaneen vanaf de **tweede hulplijn** van een bestaande maatvoering. Elk nieuw segment wordt op dezelfde meetas en op dezelfde maatlijnverschuiving als de basis geplaatst. Alle stijleigenschappen — pijlgrootte, teksthoogte, hulplijnlengtes — worden automatisch van de basis gekopieerd.

## Hoe aaneengeschakelde maatvoeringen eruitzien

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (basis    p3           p4
           hulplijn2 → nieuwe start)
```

Elk rechthoekje is een aparte `DIMENSION`-entiteit. Ze delen dezelfde maatlijnpositie en meetrichting.

## Een keten starten

1. Typ `dimcontinue` in de terminal of klik op de **Dimension Continue**-werkbalkknop.
2. **Als er net een maatvoering is geplaatst** — het commando neemt deze automatisch als basis (geen klik nodig).
3. **Als er geen recente maatvoering bestaat** — klik op een bestaande maatvoering om deze als basis te gebruiken.
4. **Klik op de oorsprong van de volgende hulplijn** — een preview toont de nieuwe maatvoering terwijl u de cursor beweegt. Of typ `X,Y` en druk op **Enter** voor een exact coördinaat.
5. Blijf klikken (of typen) om de keten te verlengen. Elke geplaatste maatvoering wordt automatisch de nieuwe basis.
6. Druk op **Enter**, **Spatie** of **Escape** om de keten af te ronden.

## Wat wordt geërfd van de basismaatvoering

| Eigenschap | Geërfd van basis |
|----------|---------------------|
| Meetrichting / hoek | Ja — vergrendeld voor de hele keten |
| Maatlijnverschuiving (afstand tot gemeten punten) | Ja |
| Pijlgrootte | Ja |
| Teksthoogte | Ja |
| Hulplijnverschuiving en -verlenging | Ja |
| Tekstuitlijning | Ja |
| Stijlnaam | Ja |
| Kleur, laag | Niet geërfd — gebruikt de huidige laag |

## Vergrendeling van meetrichting

De meetrichting van de keten is **vastgezet op de hoek van de basismaatvoering**:

- Lineaire basis (H) → alle vervolgstukken meten horizontale afstand (Δ X).
- Lineaire basis (V) → alle vervolgstukken meten verticale afstand (Δ Y).
- Uitgelijnde basis op elke hoek → alle vervolgstukken meten langs diezelfde hoek.

U kunt de richting niet halverwege de keten wijzigen. Start een nieuwe [Dimension Linear](../dim-linear/) of [Dimension Aligned](../dim-aligned/) om in een andere richting te maten.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `0`–`9`, `.`, `-` | X-coördinaatinvoer starten |
| `,` | X vergrendelen en doorgaan naar Y-invoer |
| `Backspace` | Laatst getypte teken verwijderen |
| `Enter` | Getypt coördinaat bevestigen, of de keten afronden als er geen invoer bezig is |
| `Spatie` / `Escape` | Keten afronden |

## Dimension Continue versus opnieuw beginnen

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Startpunt | Vast op hulplijn2 van de laatste basis | Overal klikken |
| Hoek | Vergrendeld op basis | Vrij |
| Verschuiving | Geërfd van basis | Ingesteld via cursor of typen |
| Stijl | Geërfd van basis | Huidige stijl |
| Ideaal voor | Cumulatieve metingen langs een rij | Eerste maatvoering of van richting veranderen |

## Labels bewerken na plaatsing — simple-modus

**Dubbelklik** op een maatvoering in de keten om de tekstverwerker in **simple**-modus te openen. Elk segment is onafhankelijk en kan afzonderlijk worden bewerkt.

| Functie | Gedrag |
|---------|-----------|
| Vet / Cursief / Lettertype / Hoogte | Geldt meteen voor het **hele** label |
| Opmaak per teken | Niet ondersteund |
| `Enter` | Bevestigt de waarde en sluit de editor |
| Meerdere regels | Niet ondersteund |

Zie [Tekstverwerker — simple-modus](../../interface/text-editor/#simple-mode) voor de volledige referentie.

## DXF — DIMENSION-entiteiten

Elk segment in de keten wordt opgeslagen als een onafhankelijke `DIMENSION`-entiteit in het DXF-bestand. Ze zijn niet gekoppeld in het bestand — ze delen eigenschappen omdat ze van dezelfde basis zijn gemaakt, maar elk kan na plaatsing afzonderlijk worden bewerkt.
