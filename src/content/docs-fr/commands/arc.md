---
sidebar_position: 5
title: Commande Arc — Tracer des arcs à trois points dans KulmanLab CAD
description: La commande Arc trace un arc circulaire à travers exactement trois points cliqués en utilisant la géométrie du cercle circonscrit. Les poignées de début et de fin permettent de faire glisser les extrémités de l'arc vers un nouvel angle et rayon après placement. Aller-retour DXF complet en tant qu'entités ARC.
keywords: [commande arc CAO, arc trois points CAO, arc cercle circonscrit, tracer arc CAO, entité ARC DXF, édition poignée arc, kulmanlab]
---

# Arc

La commande `arc` trace un arc circulaire à travers trois points que vous cliquez. L'arc est calculé comme le cercle circonscrit unique passant par les trois points — pas besoin de spécifier un centre ou un rayon directement. L'arc va du premier clic au troisième, en passant par le deuxième.

## Tracer un arc

1. Tapez `arc` dans le terminal ou cliquez sur le bouton **Arc** de la barre d'outils.
2. **Cliquez sur le premier point** — une extrémité de l'arc. Ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. **Cliquez sur le deuxième point** — un point par lequel l'arc doit passer (contrôle la courbure et la direction). La saisie de coordonnées fonctionne également ici.
4. **Cliquez sur le troisième point** — l'autre extrémité de l'arc. L'arc est placé et la commande se termine. La saisie de coordonnées fonctionne également ici.

```
           ● (2e clic — point médian sur la courbe)
          / \
         /   \
        ●     ●
      1er      3e
```

Un aperçu de ligne relie les deux premiers clics pendant que vous positionnez le troisième. À partir du deuxième clic, un aperçu d'arc en direct suit le curseur.

> **Points colinéaires** : si les trois points sont sur une droite, l'arc ne peut pas être calculé et aucune entité n'est placée. Déplacez le deuxième point hors de la droite et réessayez.

## Saisie de coordonnées

À chacune des trois étapes, vous pouvez taper une position exacte au lieu de cliquer :

1. Tapez la valeur X.
2. Appuyez sur `,` — le terminal affiche `[X], [Y{cursor}]`.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour placer le point.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X |
| `,` | Verrouiller X et passer à la saisie Y |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée saisie |
| `Échap` | Abandonner tous les points placés et quitter |

## Édition par poignées — ajuster les extrémités et le rayon

Un arc sélectionné expose trois poignées :

| Poignée | Position | Ce qu'elle fait |
|---------|----------|----------------|
| **Centre** | Centre géométrique du cercle circonscrit | Déplace tout l'arc ; rayon et angles inchangés |
| **Début** | Premier point final sur l'arc | Faites glisser pour déplacer le début le long du cercle — modifie l'angle de début et le rayon |
| **Fin** | Dernier point final sur l'arc | Faites glisser pour déplacer la fin le long du cercle — modifie l'angle de fin et le rayon |

Faire glisser une poignée de début ou de fin la repositionne à l'emplacement de glissement et recalcule l'angle et le rayon depuis cette nouvelle position par rapport au centre. L'extrémité opposée reste fixe.

## Sélectionner des arcs

| Méthode | Comportement |
|---------|-------------|
| **Clic** | Sélectionne si le clic tombe près de la courbe de l'arc (pas la corde) |
| **Glisser vers la droite** (strict) | Les points échantillonnés le long de l'arc doivent tous se trouver dans la zone |
| **Glisser vers la gauche** (croisement) | Tout point échantillonné sur l'arc qui tombe dans la zone le sélectionne |

## Commandes d'édition supportées

| Commande | Ce qui arrive à l'arc |
|----------|-----------------------|
| [Move](../move/) | Translate le centre ; rayon et angles inchangés |
| [Copy](../copy/) | Crée un arc identique à une nouvelle position |
| [Rotate](../rotate/) | Fait pivoter le centre et décale les angles de début/fin du montant de rotation |
| [Mirror](../mirror/) | Symétrise le centre et inverse les angles de début/fin par rapport à l'axe de symétrie |
| [Scale](../scale/) | Met à l'échelle la position du centre et multiplie le rayon par le facteur d'échelle |
| [Offset](../offset/) | Crée un arc concentrique à un rayon plus grand ou plus petit, même étendue angulaire |
| [Delete](../delete/) | Supprime l'arc |

## Propriétés

**Général**

| Propriété | Défaut | Signification |
|-----------|--------|---------------|
| Couleur | 256 (ByLayer) | Index couleur ACI |
| Calque | `0` | Affectation de calque |
| Type de ligne | ByLayer | Motif de type de ligne nommé |
| Échelle type de ligne | 1 | Facteur d'échelle du motif de type de ligne |
| Épaisseur | 0 | Épaisseur d'extrusion |

**Géométrie**

| Propriété | Signification |
|-----------|---------------|
| Centre X / Centre Y | Centre du cercle circonscrit |
| Rayon | Rayon du cercle circonscrit |
| Angle de début | Angle en degrés où l'arc commence (mesuré depuis l'axe X positif) |
| Angle de fin | Angle en degrés où l'arc se termine |

## Arc vs Cercle — quand utiliser lequel

| | Arc | Cercle |
|---|-----|--------|
| Étendue | Partielle — du premier au troisième clic | 360° complet |
| Méthode de saisie | Trois points sur la courbe | Centre + rayon (clic ou saisie) |
| Saisie typée | Coordonnée X,Y pour chaque point | Valeur de rayon (le centre accepte aussi X,Y) |
| Redimensionner après placement | Faire glisser les poignées début/fin | Faire glisser n'importe quelle poignée cardinale |
| Idéal pour | Congés, coins arrondis, chemins en arc | Trous complets, caractéristiques rondes |

## DXF — entité ARC

Les arcs sont enregistrés comme entités `ARC` dans le fichier DXF, stockant les coordonnées du centre, le rayon, l'angle de début et l'angle de fin. Toutes les propriétés — notamment la couleur, le calque, le type de ligne, l'échelle de type de ligne et l'épaisseur — font l'aller-retour sans perte. Toute application compatible DXF (LibreCAD, FreeCAD, etc.) lit ces arcs comme des arcs standard.
