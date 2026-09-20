---
title: Commande Rectangle — Tracer des rectangles alignés sur les axes
description: La commande Rectangle crée un rectangle aligné sur les axes à partir de deux coins opposés. Le résultat est une LWPOLYLINE fermée à quatre sommets — identique à toute autre polyligne une fois placée, donc chaque commande d'édition de polyligne s'y applique.
keywords: [commande rectangle CAO, tracer rectangle CAO, rectangle aligné axes, polyligne fermée CAO, LWPOLYLINE DXF, édition poignée rectangle, kulmanlab]
group: shapes
order: 3
---

# Rectangle

La commande `Rectangle` trace un rectangle aligné sur les axes défini par deux clics sur des coins opposés. Le résultat est stocké comme une **`LWPOLYLINE` fermée** à quatre sommets — un à chaque coin. Il n'existe pas de type d'entité rectangle dédié : après création, la forme se comporte exactement comme toute autre [Polyligne](../polyline/) et chaque commande d'édition de polyligne s'y applique.

## Tracer un rectangle

1. Tapez `Rectangle` dans le terminal ou cliquez sur le bouton **Rectangle** de la barre d'outils.
2. **Cliquez sur le premier coin**, ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. **Cliquez sur le coin opposé** — le rectangle est placé instantanément et la commande se termine. La saisie de coordonnées fonctionne ici aussi. Ou appuyez plutôt sur `D` pour saisir une largeur et une hauteur exactes — voir [Saisie des dimensions](#saisie-des-dimensions) ci-dessous.

```
  ● (premier clic)────────────┐
  |                           |
  |   l'aperçu en direct suit |
  |   le curseur après étape 2|
  └───────────────────────────● (deuxième clic)
```

Les deux clics peuvent être n'importe quelle paire de coins diagonalement opposés — haut-gauche + bas-droite, ou bas-gauche + haut-droite, etc. L'ordre n'a pas d'importance.

## Saisie de coordonnées

À l'une ou l'autre des étapes de coin, vous pouvez taper une position exacte :

1. Tapez la valeur X.
2. Appuyez sur `,` — le terminal affiche `[X], [Y{curseur}]`.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour placer le coin.

## Saisie des dimensions

Au lieu de cliquer un second coin, appuyez sur `D` juste après le premier coin pour passer à la saisie tapée largeur × hauteur :

1. **Tapez la largeur** et appuyez sur **Entrée**.
2. **Tapez la hauteur** et appuyez sur **Entrée** — l'invite vous demande maintenant de choisir une direction pour le rectangle.
3. **Déplacez le curseur** autour du premier coin — le rectangle s'affiche en direct dans celui des quatre quadrants (haut-gauche, haut-droite, bas-gauche, bas-droite) où se trouve le curseur.
4. **Cliquez** pour le placer dans cette direction.

Appuyez à nouveau sur `D` à l'étape de choix de direction pour ressaisir la largeur et la hauteur, pré-remplies avec ce que vous venez de taper.

La largeur et la hauteur sont mémorisées depuis le dernier rectangle dimensionné : à chaque invite, la valeur précédente apparaît pré-remplie et prête à être confirmée avec **Entrée**, ou vous pouvez simplement commencer à taper pour la remplacer par un nouveau nombre.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X, ou (en mode Saisie des dimensions) le champ largeur/hauteur |
| `,` | Verrouiller X et passer à la saisie Y |
| `D` | Après le premier coin, passer à la Saisie des dimensions ; à l'étape de direction, ressaisir largeur/hauteur |
| `Entrée` | Confirmer la coordonnée, la largeur ou la hauteur saisie |
| `Échap` | Annuler |

Les côtés sont toujours horizontaux et verticaux — il n'y a pas de verrouillage d'angle pour la commande rectangle.

## Édition par poignées — remodeler après création

Un rectangle sélectionné affiche des poignées à chaque sommet et au milieu de chaque côté :

| Poignée | Position | Ce qu'elle fait |
|---------|----------|----------------|
| **Coin** | Chacun des 4 sommets | Faites glisser pour déplacer ce sommet ; les deux côtés adjacents s'étirent pour suivre — le coin opposé reste fixe |
| **Milieu de côté** | Centre de chacun des 4 côtés | Faites glisser pour translater les deux extrémités de ce côté ensemble, en conservant la longueur et l'angle du côté |

Faire glisser une poignée de coin transforme le rectangle en un quadrilatère non rectangulaire. Si vous avez seulement besoin d'un rectangle de taille différente, faites glisser un coin en conservant les côtés globalement orthogonaux, ou supprimez-le et tracez-en un nouveau.

## Sélectionner des rectangles

Parce que le rectangle est une polyligne, la sélection fonctionne de la même façon :

| Méthode | Comportement |
|---------|-------------|
| **Clic** | Sélectionne si le clic atterrit sur l'un des quatre côtés |
| **Glisser à droite** (strict) | Les quatre sommets doivent être à l'intérieur du cadre de sélection |
| **Glisser à gauche** (croisement) | Tout côté qui croise la limite du cadre sélectionne tout le rectangle |

## Commandes d'édition supportées

Toutes les commandes d'édition de polyligne s'appliquent. Trim et Extend sont réservés aux [Line](../line/) et ne fonctionnent pas sur les rectangles :

| Commande | Ce qui arrive au rectangle |
|----------|---------------------------|
| [Move](../move/) | Translate les quatre sommets du même déplacement |
| [Copy](../copy/) | Crée un rectangle identique à une nouvelle position |
| [Rotate](../rotate/) | Fait pivoter les quatre sommets autour du point de base choisi |
| [Mirror](../mirror/) | Symétrise les quatre sommets par rapport à l'axe de symétrie |
| [Scale](../scale/) | Met à l'échelle les quatre sommets uniformément depuis le point de base |
| [Offset](../offset/) | Crée un rectangle parallèle (intérieur ou extérieur) à une distance fixe |
| [Delete](../delete/) | Supprime le rectangle du dessin |

## Propriétés

Quand un rectangle est sélectionné, le panneau des propriétés affiche les mêmes champs que pour toute polyligne :

**Général**

| Propriété | Par défaut | Signification |
|-----------|-----------|---------------|
| Color | 256 (ByLayer) | Index de couleur ACI |
| Layer | `0` | Attribution de calque |
| Linetype | ByLayer | Motif de type de ligne nommé |
| Linetype Scale | 1 | Facteur d'échelle sur le motif de type de ligne |
| Thickness | 0 | Épaisseur d'extrusion |

**Géométrie**

| Propriété | Signification |
|-----------|---------------|
| Closed | Toujours `true` pour un rectangle |
| Vertex Count | Toujours `4` pour un rectangle non modifié |
| Vertices | Coordonnées des quatre coins |

## Rectangle vs Polyline vs Line

| | Rectangle | Polyline | Line |
|---|-----------|---------|------|
| Comment tracer | 2 clics (coins) | Cliquer chaque sommet | Cliquer chaque extrémité |
| Type d'entité | `LWPOLYLINE` fermée | `LWPOLYLINE` ouverte ou fermée | `LINE` par segment |
| Côtés toujours orthogonaux | Oui (à la création) | Non | Non |
| Trim / Extend | Non | Non | Oui |
| Idéal pour | Boîtes, cadres, zones rectangulaires | Contours et chemins arbitraires | Segments individuels, lignes de construction |

## DXF — entité LWPOLYLINE

Les rectangles sont enregistrés comme entités `LWPOLYLINE` fermées à quatre sommets. Toutes les propriétés — coordonnées des sommets, couleur, calque, type de ligne, échelle de type de ligne et épaisseur — font l'aller-retour sans perte.

Il n'existe pas de type `RECTANGLE` dédié en DXF. Quand un fichier est rouvert, la forme apparaît comme une polyligne fermée à quatre sommets plutôt que comme un rectangle. Tout visualiseur ou éditeur DXF qui supporte `LWPOLYLINE` (LibreCAD, FreeCAD, etc.) l'affichera correctement.
