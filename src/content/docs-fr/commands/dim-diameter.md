---
sidebar_position: 17
title: "Commande Dimension Diameter — Annoter les Diamètres Complets des Cercles et Arcs dans KulmanLab CAD"
description: "La commande Dimension Diameter place une cote de diamètre (avec le symbole de diamètre en préfixe) à travers un arc ou un cercle en passant par le centre. Déplacez le curseur pour faire pivoter la ligne de cote à tout angle. Export complet en DXF comme entités DIMENSION de type diamètre."
keywords: [cote diamètre CAO, dimdiameter, annoter diamètre cercle, cote diamètre arc, symbole diamètre CAO, kulmanlab]
---

# Dimension Diameter

La commande `dimdiameter` place une cote de diamètre sur un arc ou un cercle. La ligne de cote couvre le diamètre complet — passant par le centre entre deux points diamétralement opposés de l'arc — et est étiquetée `⌀ <valeur>`. Pour annoter seulement le rayon du centre au bord, utilisez [Dimension Radius](./dim-radius).

## Anatomie d'une cote de diamètre

```
  ●──────────── ⌀ 10.00 ────────────●
  (point de l'arc éloigné)              (point de l'arc proche / côté texte)
```

- **Ligne de cote** — couvre le diamètre complet, avec des pointes de flèche aux deux points d'intersection de l'arc.
- **Point de l'arc proche** — le point de la circonférence du côté du curseur (où l'étiquette de texte est placée).
- **Point de l'arc éloigné** — le point diamétralement opposé.
- **Étiquette** — `⌀` suivi de la valeur du diamètre.

## Placer une cote de diamètre

1. Tapez `dimdiameter` dans le terminal ou cliquez sur **Dimension Diameter** dans la barre d'outils.
2. **Cliquez sur un arc ou un cercle** pour le sélectionner.
3. **Déplacez le curseur** pour faire pivoter la ligne de cote à l'angle souhaité.
4. **Cliquez** pour placer la cote.

Seules les entités **Arc** et **Circle** peuvent être sélectionnées.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Échap` | Annuler |

## Dimension Diameter vs Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Mesure | Diamètre complet (2 × rayon) | Rayon (centre au bord) |
| Ligne de cote | Bord → bord en passant par le centre | Centre → point de l'arc |
| Préfixe de l'étiquette | `⌀` | `R` |
| Pointes de flèche | Deux (sur les deux points de l'arc) | Une (sur le point de l'arc) |
| Idéal pour | Dimensions de trous ou axes circulaires complets | Annoter un côté d'un élément courbe |

## DXF — entité DIMENSION de type diamètre

Les cotes de diamètre sont sauvegardées comme entités `DIMENSION` avec géométrie de type diamètre, stockant les deux positions des points de l'arc et la valeur du diamètre mesuré (2 × rayon). Toutes les propriétés sont exportées sans perte.
