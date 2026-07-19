---
title: Match Properties — Eigenschappen Kopiëren in KulmanLab CAD
description: Het MatchProperties-commando kopieert kleur, laag en andere gedeelde eigenschappen van een bronentiteit naar een of meer doelentiteiten. Matcht eigenschappen op dezelfde manier als desktop-CAD-tools.
keywords: [eigenschappen matchen CAD, entiteitseigenschappen kopiëren, MATCHPROP, laag kleur matchen, eigenschappen overdragen, kulmanlab match properties, eigenschappen verven, laag kopiëren CAD]
group: style
order: 1
---

# Match Properties

Het `MatchProperties`-commando kopieert **visuele en laageigenschappen** van een bronentiteit naar een of meer doelentiteiten. Alleen eigenschappen die worden gedeeld tussen het bron- en doeltype worden overgedragen — geometrie wordt nooit gewijzigd.

## Activeren

Klik op de **Match Properties**-werkbalkknop (verfrollericoon) in het Style-paneel, of typ `MatchProperties` in de terminal.

## Werkwijze

**Eerst activeren, dan bron kiezen:**

1. Typ `MatchProperties` of klik op de werkbalkknop zonder iets voorgeselecteerd.
2. **Klik op de bronentiteit** — die waarvan u de eigenschappen wilt kopiëren.
3. **Klik op elke doelentiteit** om de broneigenschappen toe te passen. U kunt meerdere entiteiten één voor één aanklikken.
4. Om op een groep tegelijk toe te passen, **sleept u een selectievak** over de doelen.
5. Druk op **Enter** of **Escape** om te voltooien.

**Eerst bron voorselecteren, dan activeren:**

1. Klik op één entiteit om deze te selecteren.
2. Activeer `MatchProperties`. De geselecteerde entiteit wordt automatisch als bron gebruikt.
3. Klik op doelentiteiten of sleep-selecteer, druk daarna op **Enter** of **Escape** om te voltooien.

## Welke eigenschappen worden gekopieerd

MatchProperties kopieert eigenschappen die tot een gedeelde basisklasse tussen bron en doel behoren. Op zijn minst delen **alle entiteitstypen** deze eigenschappen:

| Eigenschap | Beschrijving |
|----------|-------------|
| **Kleur** | De kleurindex van de entiteit (inclusief "By Layer" / "By Block") |
| **Laag** | De laag waartoe de entiteit behoort |

Wanneer bron en doel hetzelfde entiteitstype zijn (bijv. beide zijn maatvoeringen), worden ook aanvullende typespecifieke eigenschappen gekopieerd — bijvoorbeeld teksthoogte, pijlgrootte, instellingen voor hulplijnen.

Geometrie (coördinaten, radius, lengte, enz.) wordt nooit beïnvloed.

## Toetsenbordreferentie

| Toets | Actie |
|-----|--------|
| `Enter` / `Spatie` | Gebiedsselectie bevestigen of commando voltooien |
| `Escape` | Toepassen voltooien (als bron is ingesteld) of annuleren |

## Gedragsdetails

- De bronentiteit zelf wordt nooit gewijzigd.
- Elke klik of sleep-selectie past de broneigenschappen direct toe — er is geen bevestigingsstap.
- Gebiedsselectie volgt de standaardregels: sleep **rechts** voor strikte selectie (volledig omsloten), sleep **links** voor kruisende selectie (elke overlap).
- Klikken op de bronentiteit als doel wordt genegeerd.
- Voor entiteiten met tekst (**Text**, **Dimensions**, **Multileaders**) wordt alleen de teksthoogte gekopieerd — lettertype, vet, cursief en andere tekststijl-instellingen worden niet gematcht.

## Gerelateerde commando's

- [LayerMatch](../layer-match/) — verplaats geselecteerde entiteiten naar dezelfde laag als een bron (alleen laageigenschap)
- [LayerMakeCurrent](../layer-make-current/) — stel de huidige tekenlaag in vanaf een aangeklikte entiteit
