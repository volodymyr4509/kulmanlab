---
sidebar_position: 3
title: Commande Rectangle — Tracer des rectangles alignés sur les axes dans KulmanLab CAD
description: La commande Rectangle crée un rectangle aligné sur les axes à partir de deux coins opposés. Le résultat est une LWPOLYLINE fermée à quatre sommets — identique à toute autre polyligne une fois placée.
keywords: [commande rectangle CAO, tracer rectangle CAO, rectangle aligné axes, polyligne fermée CAO, LWPOLYLINE DXF, édition poignée rectangle, kulmanlab]
---

# Rectangle

La commande `rectangle` trace un rectangle aligné sur les axes défini par deux clics sur des coins opposés. Le résultat est stocké comme une **`LWPOLYLINE` fermée** à quatre sommets. Il n'existe pas de type d'entité rectangle dédié : après création, la forme se comporte exactement comme toute autre [Polyligne](./polyline).

## Tracer un rectangle

1. Tapez `rectangle` dans le terminal ou cliquez sur le bouton **Rectangle** de la barre d'outils.
2. **Cliquez sur le premier coin**, ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. **Cliquez sur le coin opposé** — le rectangle est placé instantanément et la commande se termine.

```
  ● (premier clic)────────────┐
  |                           |
  |   aperçu en direct        |
  └───────────────────────────● (deuxième clic)
```

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X |
| `,` | Verrouiller X et passer à la saisie Y |
| `Entrée` | Confirmer la coordonnée saisie |
| `Échap` | Annuler |

## Édition par poignées

Un rectangle sélectionné affiche des poignées à chaque sommet et au milieu de chaque côté :

| Poignée | Ce qu'elle fait |
|---------|----------------|
| **Coin** | Faites glisser pour déplacer ce sommet ; les deux côtés adjacents s'étirent |
| **Milieu de côté** | Faites glisser pour translater les deux extrémités de ce côté ensemble |

## Commandes d'édition supportées

| Commande | Ce qui arrive au rectangle |
|----------|---------------------------|
| [Move](./move) | Translate les quatre sommets du même déplacement |
| [Copy](./copy) | Crée un rectangle identique à une nouvelle position |
| [Rotate](./rotate) | Fait pivoter les quatre sommets autour du point de base |
| [Mirror](./mirror) | Symétrise les quatre sommets par rapport à l'axe de symétrie |
| [Scale](./scale) | Met à l'échelle les quatre sommets uniformément depuis le point de base |
| [Offset](./offset) | Crée un rectangle parallèle à une distance fixe |
| [Delete](./delete) | Supprime le rectangle du dessin |

## DXF — entité LWPOLYLINE

Les rectangles sont enregistrés comme entités `LWPOLYLINE` fermées à quatre sommets. Il n'existe pas de type `RECTANGLE` dédié en DXF.
