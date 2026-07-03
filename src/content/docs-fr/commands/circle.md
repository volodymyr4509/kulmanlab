---
sidebar_position: 4
title: Commande Circle — Tracer des cercles par centre et rayon dans KulmanLab CAD
description: La commande Circle place un cercle en cliquant sur un point central puis en cliquant ou saisissant le rayon. Quatre poignées cardinales permettent de redimensionner le rayon par glissement sans relancer la commande. Aller-retour DXF complet en tant qu'entités CIRCLE.
keywords: [commande circle CAO, tracer cercle CAO, saisie rayon cercle, redimensionner cercle poignée, entité CIRCLE DXF, dimradius cercle, kulmanlab]
---

# Circle

La commande `circle` trace un cercle défini par un point central et un rayon. Après avoir cliqué sur le centre, vous pouvez définir le rayon soit en cliquant sur un deuxième point du canevas, soit en tapant un nombre exact — les deux options sont disponibles simultanément.

## Tracer un cercle

1. Tapez `circle` dans le terminal ou cliquez sur le bouton **Circle** de la barre d'outils.
2. **Cliquez sur le point central**, ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. Définissez le rayon — soit :
   - **Cliquez sur n'importe quel point** du canevas — la distance depuis le centre devient le rayon, ou
   - **Tapez le rayon** et appuyez sur **Entrée** pour une valeur exacte.

Le cercle est placé immédiatement et la commande se termine.

```
  centre ●
          \  aperçu ligne de rayon
           \
            ● ← cliquez ici, ou tapez un nombre
```

Pendant la phase de rayon, l'aperçu en direct montre le cercle à la distance actuelle du curseur et trace également une ligne de rayon du centre au point actuel.

## Saisie de coordonnées du centre

Au lieu de cliquer, vous pouvez taper la position du centre :

1. Tapez la valeur X.
2. Appuyez sur `,` — le terminal affiche `[X], [Y{curseur}]`.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour placer le centre et passer à la saisie du rayon.

## Saisie de rayon

Après avoir placé le centre, taper immédiatement accumule une valeur de rayon :

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Ajouter un chiffre à la valeur du rayon |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Placer le cercle au rayon saisi |

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X (phase centre), ou chiffre de rayon (phase rayon) |
| `,` | Verrouiller X et passer à la saisie Y (phase centre) |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée ou le rayon saisi |
| `Échap` | Annuler et réinitialiser |

## Édition par poignées — redimensionner le rayon

Un cercle sélectionné expose cinq poignées :

| Poignée | Position | Ce qu'elle fait |
|---------|----------|----------------|
| **Centre** | Point central | Déplace tout le cercle ; le rayon ne change pas |
| **Gauche** | Point le plus à gauche (centre − rayon) | Faites glisser pour définir un nouveau rayon = distance au centre |
| **Droite** | Point le plus à droite (centre + rayon) | Faites glisser pour définir un nouveau rayon = distance au centre |
| **Haut** | Point le plus haut | Faites glisser pour définir un nouveau rayon = distance au centre |
| **Bas** | Point le plus bas | Faites glisser pour définir un nouveau rayon = distance au centre |

Les quatre poignées cardinales se comportent de manière identique — le nouveau rayon est égal à la distance du centre à la position de glissement. Le centre reste fixe.

## Sélectionner des cercles

| Méthode | Comportement |
|---------|-------------|
| **Clic** | Sélectionne si le clic tombe près de la circonférence |
| **Glisser à droite** (strict) | Le carré englobant complet (centre ± rayon) doit être dans le cadre |
| **Glisser à gauche** (croisé) | Toute partie de la circonférence qui croise ou touche la limite du cadre sélectionne le cercle |

## Commandes d'édition supportées

| Commande | Ce qui arrive au cercle |
|----------|------------------------|
| [Move](../move/) | Translate le centre ; rayon inchangé |
| [Copy](../copy/) | Crée un cercle identique à un nouveau centre |
| [Rotate](../rotate/) | Fait pivoter le centre autour du point de base ; rayon inchangé |
| [Mirror](../mirror/) | Symétrise le centre par rapport à l'axe de symétrie ; rayon inchangé |
| [Scale](../scale/) | Met à l'échelle la position du centre et multiplie le rayon par le facteur d'échelle |
| [Offset](../offset/) | Crée un cercle concentrique à un rayon plus grand ou plus petit |
| [Delete](../delete/) | Supprime le cercle |

## Propriétés

**Général**

| Propriété | Défaut | Signification |
|-----------|--------|---------------|
| Couleur | 256 (ByLayer) | Index couleur ACI |
| Calque | `0` | Affectation de calque |
| Type de ligne | ByLayer | Motif de type de ligne nommé |
| Échelle type de ligne | 1 | Facteur d'échelle du motif |
| Épaisseur | 0 | Épaisseur d'extrusion |

**Géométrie**

| Propriété | Signification |
|-----------|---------------|
| Centre X / Centre Y | Coordonnées du point central |
| Rayon | Rayon du cercle en unités de dessin |

## Circle vs Arc — quand utiliser lequel

| | Circle | Arc |
|---|--------|-----|
| Étendue | 360° complet | Partiel — défini par angle de début et de fin |
| Comment tracer | Centre + rayon | Trois points sur la courbe |
| Saisie | Valeur du rayon | Aucune — clic uniquement |
| Poignée de redimensionnement | 4 points cardinaux | Points de début et de fin (angle + rayon) |
| Cotation | Rayon : [Dim Radius](../dim-radius/) · Diamètre : [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| Idéal pour | Trous complets, cercles de boulons, éléments ronds | Congés, courbes partielles, chemins arqués |

## DXF — entité CIRCLE

Les cercles sont enregistrés comme entités `CIRCLE` dans le fichier DXF. Les coordonnées du centre, le rayon, la couleur, le calque, le type de ligne, l'échelle de type de ligne et l'épaisseur font tous l'aller-retour sans perte.
