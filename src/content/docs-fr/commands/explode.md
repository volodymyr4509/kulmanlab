---
title: Commande Explode — Décomposer une Polyligne en Entités Ligne et Arc
description: La commande Explode décompose une polyligne en ses entités Ligne et Arc individuelles, une par segment, sur place. Chaque morceau conserve l'épaisseur de trait, la couleur, le calque et le type de ligne de la polyligne source. Fonctionne uniquement avec les entités Polyligne.
keywords: [commande explode CAO, exploser polyligne CAO, décomposer polyligne en lignes, convertir polyligne en ligne et arc, kulmanlab]
group: edit
order: 16
---

# Explode

La commande `Décomposer` décompose une [Polyligne](../polyline/) en ses entités [Ligne](../line/) et [Arc](../arc/) individuelles — une par segment, exactement là où se trouvaient les sommets de la polyligne. Les morceaux remplacent la polyligne sur place et conservent son épaisseur de trait, sa couleur, son calque et son type de ligne.

Explode fonctionne uniquement avec les entités **Polyligne**.

## Utiliser explode

Deux façons de l'exécuter, le même schéma que [Delete](../delete/) :

**Sélectionner d'abord, puis exploser** — le chemin le plus rapide :

1. Sélectionnez une ou plusieurs polylignes sur le canevas.
2. Tapez `Décomposer` dans le terminal, ou cliquez sur le bouton **Explode** dans le panneau Edit.

Les polylignes sélectionnées sont explosées instantanément — pas d'étape de confirmation séparée, puisque quelque chose est déjà sélectionné.

**Activer, puis sélectionner** :

1. Tapez `Décomposer` ou cliquez sur le bouton de la barre d'outils sans rien sélectionné.
2. **Sélectionnez des polylignes** — cliquez pour basculer, ou faites glisser pour sélectionner une zone.
3. Appuyez sur **Entrée** ou **Espace** pour confirmer et exploser les polylignes sélectionnées.

Seules les polylignes sont capturées pendant la sélection — cliquer sur une Ligne, un Cercle ou toute autre entité ne fait rien, et un glissement de zone ignore tout sauf les polylignes à l'intérieur ou traversant la zone.

## Ce qui en ressort

Chaque segment de la polyligne devient sa propre entité :

- Un **segment droit** devient une **Ligne**.
- Un **segment d'arc** (issu de l'[option Arc](../polyline/) de Polyline) devient un **Arc**, correspondant exactement au centre, au rayon et au balayage de la courbe d'origine.

Chaque Ligne et Arc résultant hérite de l'**épaisseur de trait, de la couleur, du calque, du type de ligne et de l'échelle du type de ligne** de la polyligne source — l'apparence de la géométrie ne change en rien, seulement le fait qu'il s'agit désormais de plusieurs entités indépendantes au lieu d'une polyligne connectée.

L'explosion s'annule en une seule étape avec [Undo](../undo/), comme toute autre modification.

## Sélection pendant la commande

| Méthode | Comportement |
|---------|--------------|
| **Clic** | Bascule la polyligne sous le curseur dans/hors de la sélection ; cliquer sur une entité qui n'est pas une polyligne ne fait rien |
| **Glisser à droite** (strict) | Sélectionne uniquement les polylignes entièrement à l'intérieur du rectangle |
| **Glisser à gauche** (croisement) | Sélectionne les polylignes qui croisent la limite du rectangle |
| **Entrée** / **Espace** | Confirme et explose les polylignes sélectionnées |

## Entités supportées

| Entité | Supportée |
|--------|-----------|
| Polyline / Rectangle | Oui |
| Line, Arc, Circle, Ellipse | Non — rien à exploser |
| Text, Spline, Dimension, Leader, Hatch | Non |
