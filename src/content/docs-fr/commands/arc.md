---
sidebar_position: 5
title: Commande Arc — Tracer des arcs à trois points dans KulmanLab CAD
description: La commande Arc trace un arc circulaire à travers exactement trois points cliqués en utilisant la géométrie du cercle circonscrit. Les poignées de début et de fin permettent de faire glisser les extrémités de l'arc après placement. Aller-retour DXF complet en tant qu'entités ARC.
keywords: [commande arc CAO, arc trois points CAO, arc cercle circonscrit, tracer arc CAO, entité ARC DXF, édition poignée arc, kulmanlab]
---

# Arc

La commande `arc` trace un arc circulaire à travers trois points que vous cliquez. L'arc est calculé comme le cercle circonscrit unique passant par les trois points — pas besoin de spécifier un centre ou un rayon directement. L'arc va du premier clic au troisième, en passant par le deuxième.

## Tracer un arc

1. Tapez `arc` dans le terminal ou cliquez sur le bouton **Arc** de la barre d'outils.
2. **Cliquez sur le premier point** — une extrémité de l'arc. Ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. **Cliquez sur le deuxième point** — un point par lequel l'arc doit passer (contrôle la courbure et la direction). La saisie de coordonnées fonctionne également ici.
4. **Cliquez sur le troisième point** — l'autre extrémité de l'arc. L'arc est placé et la commande se termine.

```
           ● (2e clic — point médian sur la courbe)
          / \
         /   \
        ●     ●
      1er      3e
```

> **Points colinéaires** : si les trois points sont sur une droite, l'arc ne peut pas être calculé. Déplacez le deuxième point hors de la droite.

## Saisie de coordonnées

À chacune des trois étapes, vous pouvez taper une position exacte au lieu de cliquer.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X |
| `,` | Verrouiller X et passer à la saisie Y |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée saisie |
| `Échap` | Abandonner tous les points placés et quitter |

## Édition par poignées

Un arc sélectionné expose trois poignées :

| Poignée | Position | Ce qu'elle fait |
|---------|----------|----------------|
| **Centre** | Centre géométrique | Déplace tout l'arc ; rayon et angles inchangés |
| **Début** | Premier point final | Faites glisser pour déplacer le début le long du cercle |
| **Fin** | Dernier point final | Faites glisser pour déplacer la fin le long du cercle |

## Commandes d'édition supportées

| Commande | Ce qui arrive à l'arc |
|----------|-----------------------|
| [Move](./move) | Translate le centre ; rayon et angles inchangés |
| [Copy](./copy) | Crée un arc identique à une nouvelle position |
| [Rotate](./rotate) | Fait pivoter le centre et décale les angles |
| [Mirror](./mirror) | Symétrise le centre et inverse les angles |
| [Scale](./scale) | Met à l'échelle le centre et multiplie le rayon |
| [Offset](./offset) | Crée un arc concentrique à un rayon différent |
| [Delete](./delete) | Supprime l'arc |

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
| Centre X / Centre Y | Centre du cercle circonscrit |
| Rayon | Rayon du cercle circonscrit |
| Angle de début | Angle en degrés où l'arc commence |
| Angle de fin | Angle en degrés où l'arc se termine |

## DXF — entité ARC

Les arcs sont enregistrés comme entités `ARC` dans le fichier DXF, stockant les coordonnées du centre, le rayon, l'angle de début et de fin. Toutes les propriétés font l'aller-retour sans perte.
