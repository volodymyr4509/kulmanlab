---
sidebar_position: 9
title: Commande Spline Fit — Tracer des splines interpolantes à travers des points cliqués dans KulmanLab CAD
description: La commande Spline Fit trace une spline cubique passant exactement par chaque point cliqué. La courbe est forcée de toucher chaque coordonnée cliquée exactement. Aller-retour DXF complet en tant qu'entités SPLINE.
keywords: [commande spline fit CAO, spline interpolante CAO, spline à travers points, tracer courbe lisse CAO, entité SPLINE DXF points fit, kulmanlab]
---

# Spline Fit

La commande `splinefit` trace une spline cubique passant par chaque point que vous cliquez — une courbe interpolante. Contrairement à [Spline CV](./spline-cv), où la courbe est seulement attirée vers les sommets de contrôle, ici la courbe est forcée de toucher chaque coordonnée cliquée exactement.

## Tracer une spline par points d'interpolation

1. Tapez `splinefit` dans le terminal ou cliquez sur le bouton **Spline Fit** de la barre d'outils.
2. **Cliquez pour placer des points d'interpolation** — la courbe passera par chacun. Ou tapez `X,Y` et appuyez sur **Entrée**.
3. Appuyez sur **Entrée** pour terminer (au moins 2 points requis).

```
  ●──────●──────●──────●  ← la courbe passe exactement par chaque clic
  p1     p2     p3     p4
```

## Édition par poignées

Une spline fit sélectionnée expose une poignée par point d'interpolation. Faire glisser un point re-interpole toute la courbe pour passer par la nouvelle position.

## Commandes d'édition supportées

| Commande | Ce qui arrive à la spline |
|----------|-----------------------------|
| [Move](./move) | Translate tous les points d'interpolation du même déplacement |
| [Copy](./copy) | Crée une spline identique à une nouvelle position |
| [Rotate](./rotate) | Fait pivoter tous les points autour du point de base |
| [Mirror](./mirror) | Symétrise tous les points par rapport à l'axe de symétrie |
| [Scale](./scale) | Met à l'échelle tous les points uniformément depuis le point de base |
| [Delete](./delete) | Supprime la spline |

## DXF — entité SPLINE (forme points d'interpolation)

Les splines fit sont enregistrées comme entités `SPLINE` dans le fichier DXF, stockant les points d'interpolation et les sommets de contrôle calculés.
