---
title: Commande Spline Fit — Tracer des splines interpolantes à travers des points cliqués dans KulmanLab CAD
description: La commande Spline Fit trace une spline cubique passant exactement par chaque point cliqué. En interne, la courbe est stockée avec des points d'interpolation et des sommets de contrôle calculés. Faire glisser une poignée de point d'interpolation re-interpole toute la courbe. Aller-retour DXF complet en tant qu'entités SPLINE.
keywords: [commande spline fit CAO, spline interpolante CAO, spline à travers points, tracer courbe lisse CAO, entité SPLINE DXF points fit, édition poignée spline, kulmanlab]
group: shapes
order: 9
---

# Spline Fit

La commande `splinefit` trace une spline cubique passant par chaque point que vous cliquez — une courbe interpolante. Contrairement à [Spline CV](../spline-cv/), où la courbe est seulement attirée vers les sommets de contrôle, ici la courbe est forcée de toucher chaque coordonnée cliquée exactement. En interne, l'éditeur ajuste des sommets de contrôle pour y parvenir, et ces SC sont stockés avec les points d'interpolation dans le fichier DXF.

## Tracer une spline par points d'interpolation

1. Tapez `splinefit` dans le terminal ou cliquez sur le bouton **Spline Fit** de la barre d'outils.
2. **Cliquez pour placer des points d'interpolation** — la courbe passera par chacun. Ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. Appuyez sur **Entrée** pour terminer (au moins 2 points requis).

```
  ●──────●──────●──────●  ← la courbe passe exactement par chaque clic
  p1     p2     p3     p4
```

L'aperçu en direct montre la courbe interpolée actuelle lorsque vous déplacez le curseur, incluant le prochain point prospectif à la position du curseur. Appuyez sur **Échap** pour abandonner tous les points placés et quitter.

## Saisie de coordonnées

Au lieu de cliquer, tapez une position exacte pour tout point d'interpolation :

1. Tapez la valeur X.
2. Appuyez sur `,` — le terminal affiche `[X], [Y{curseur}]`.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour placer le point d'interpolation.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X |
| `,` | Verrouiller X et passer à la saisie Y |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée saisie, ou terminer la spline si aucune saisie n'est en cours et ≥ 2 points existent |
| `Échap` | Abandonner tous les points et quitter |

## Édition par poignées — remodeler via les points d'interpolation

Une spline fit sélectionnée expose une poignée par point d'interpolation :

| Poignée | Position | Ce qu'elle fait |
|---------|----------|----------------|
| **Point d'interpolation** | À chaque position cliquée | Faites glisser pour déplacer ce point d'interpolation — toute la courbe se re-interpole pour passer par la nouvelle position |

Faire glisser une poignée re-ajuste toute la courbe, pas seulement les segments adjacents. Cela diffère de l'édition par poignée de polyligne, où déplacer un sommet ne reforme que les deux segments adjacents.

Il n'y a pas de poignée "déplacer toute la spline". Pour translater toute la spline, utilisez la commande [Move](../move/).

## Sélectionner des splines fit

| Méthode | Comportement |
|---------|-------------|
| **Clic** | Sélectionne si le clic atterrit près d'un point sur la courbe |
| **Glisser à droite** (strict) | Tous les points d'échantillonnage le long de la courbe doivent être à l'intérieur du cadre de sélection |
| **Glisser à gauche** (croisement) | Toute partie de la courbe qui croise la limite du cadre de sélection la sélectionne |

## Commandes d'édition supportées

| Commande | Ce qui arrive à la spline |
|----------|-----------------------------|
| [Move](../move/) | Translate tous les points d'interpolation et SC recalculés du même déplacement |
| [Copy](../copy/) | Crée une spline identique à une nouvelle position |
| [Rotate](../rotate/) | Fait pivoter tous les points d'interpolation autour du point de base choisi |
| [Mirror](../mirror/) | Symétrise tous les points d'interpolation par rapport à l'axe de symétrie |
| [Scale](../scale/) | Met à l'échelle tous les points d'interpolation uniformément depuis le point de base |
| [Delete](../delete/) | Supprime la spline |

Les splines ne supportent pas **Offset**, **Trim**, ni **Extend**.

## Propriétés

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
| Degree | Degré polynomial — toujours 3 (cubique) |
| Fit Points | Coordonnées de tous les points cliqués passant à travers |
| Control Vertices | SC calculés en interne utilisés pour rendre la courbe |

## Spline Fit vs Spline CV — laquelle utiliser

| | Spline Fit | Spline CV |
|---|------------|-----------|
| La courbe passe par les points | Chaque point cliqué exactement | Premier et dernier uniquement (serrés) |
| Effet de l'édition par poignée | Point d'interpolation déplacé → toute la courbe re-interpolée | SC déplacé → courbe attirée vers la nouvelle position |
| Prévisibilité de forme | Haute — la courbe suit les clics | Plus basse — la courbe décale derrière les SC |
| Idéal pour | Courbes devant passer par des coordonnées spécifiques | Courbes esthétiques lisses, chemins libres |

## DXF — entité SPLINE (forme points d'interpolation)

Les splines fit sont enregistrées comme entités `SPLINE` dans le fichier DXF, stockant à la fois les coordonnées des points d'interpolation et les sommets de contrôle calculés. Le `splineFlag` est défini à `8` (spline par points d'interpolation) pour qu'une application de rechargement sache quel ensemble de points afficher comme poignées éditables. Toutes les propriétés — couleur, calque, type de ligne, échelle de type de ligne et épaisseur — font l'aller-retour sans perte. Les applications DXF qui supportent les splines par points d'interpolation (LibreCAD, FreeCAD) afficheront les points d'interpolation comme données éditables principales.
