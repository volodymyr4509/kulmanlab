---
title: "Commande Explode — décomposer une polyligne ou un bloc en ses parties"
description: "La commande Explode décompose une polyligne en ses entités Line et Arc, ou une référence de bloc en les entités que dessine son bloc, sur place. Les morceaux ont exactement l’aspect de l’original."
keywords: [commande explode CAO, exploser polyligne CAO, décomposer polyligne en lignes, convertir polyligne en ligne et arc, kulmanlab]
group: edit
order: 19
---

# Explode

La commande `Décomposer` décompose une [Polyligne](../polyline/) en ses entités [Ligne](../line/) et [Arc](../arc/) individuelles — une par segment, exactement là où se trouvaient les sommets de la polyligne. Les morceaux remplacent la polyligne sur place et conservent son épaisseur de trait, sa couleur, son calque et son type de ligne.

Explode fonctionne sur les entités **Polyline** et les **références de bloc**.

## Utiliser explode

Deux façons de l'exécuter, le même schéma que [Delete](../delete/) :

**Sélectionner d'abord, puis exploser** — le chemin le plus rapide :

1. Sélectionnez une ou plusieurs polylignes sur le canevas.
2. Tapez `Décomposer` dans le terminal ou choisissez **Explode** dans le menu déroulant du panneau Edit.

Les polylignes sélectionnées sont explosées instantanément — pas d'étape de confirmation séparée, puisque quelque chose est déjà sélectionné.

**Activer, puis sélectionner** :

1. Tapez `Décomposer` ou choisissez **Explode** dans le menu déroulant sans rien de sélectionné.
2. **Sélectionnez des polylignes ou des références de bloc** — cliquez pour basculer, ou faites glisser pour sélectionner par zone.
3. Appuyez sur **Entrée** ou **Espace** pour confirmer et exploser les polylignes sélectionnées.

Seules les polylignes et les références de bloc sont prises en compte pendant la sélection — cliquer sur une Line, un Circle ou toute autre entité ne fait rien, et un glissement de zone ignore tout le reste à l’intérieur ou en travers.

## Ce qui en ressort

Chaque segment de la polyligne devient sa propre entité :

- Un **segment droit** devient une **Ligne**.
- Un **segment d'arc** (issu de l'[option Arc](../polyline/) de Polyline) devient un **Arc**, correspondant exactement au centre, au rayon et au balayage de la courbe d'origine.

Chaque Ligne et Arc résultant hérite de l'**épaisseur de trait, de la couleur, du calque, du type de ligne et de l'échelle du type de ligne** de la polyligne source — l'apparence de la géométrie ne change en rien, seulement le fait qu'il s'agit désormais de plusieurs entités indépendantes au lieu d'une polyligne connectée.

Une **référence de bloc** devient les entités que dessine son bloc, placées là où la référence les montrait. Les entités que le bloc garde masquées — les autres états d’un bloc dynamique — sont laissées de côté ; chaque attribut devient un Text simple portant sa valeur ; les morceaux dessinés ByBlock prennent la couleur de la référence, et ceux du calque 0 son calque. Un bloc imbriqué ressort comme une référence de bloc à part entière, que vous pouvez décomposer à son tour. Une référence mise à l’échelle différemment en X et en Y n’est pas prise en compte, car ses cercles devraient devenir des ellipses.

L'explosion s'annule en une seule étape avec [Undo](../undo/), comme toute autre modification.

## Sélection pendant la commande

| Méthode | Comportement |
|---------|--------------|
| **Clic** | Ajoute ou retire de la sélection la polyligne ou la référence de bloc sous le curseur ; cliquer sur une autre entité ne fait rien |
| **Glisser vers la droite** (strict) | Sélectionne seulement les polylignes et références de bloc entièrement dans le cadre |
| **Glisser vers la gauche** (traversant) | Sélectionne les polylignes et références de bloc qui coupent le bord du cadre |
| **Entrée** / **Espace** | Confirme et décompose la sélection |

## Entités supportées

| Entité | Supportée |
|--------|-----------|
| Polyline / Rectangle | Oui |
| Référence de bloc | Oui, sauf si elle est mise à l’échelle différemment en X et en Y |
| Line, Arc, Circle, Ellipse | Non — rien à exploser |
| Text, Spline, Dimension, Leader, Hatch | Non |
