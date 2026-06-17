---
sidebar_position: 8
title: Commande Spline CV — Tracer des B-splines en plaçant des sommets de contrôle dans KulmanLab CAD
description: La commande Spline CV trace une B-spline cubique en plaçant des sommets de contrôle. La courbe est attirée vers les sommets mais ne passe que par le premier et le dernier (nœuds serrés). Aller-retour DXF complet en tant qu'entités SPLINE.
keywords: [commande spline CAO, B-spline sommets de contrôle, spline serrée CAO, tracer spline CAO, entité SPLINE DXF, édition poignée spline, kulmanlab]
---

# Spline CV

La commande `splinecv` trace une **B-spline cubique** en plaçant des sommets de contrôle (SC). La courbe résultante est attirée vers chaque SC mais ne les traverse pas — sauf au premier et au dernier sommet, où les **nœuds serrés** ancrent la courbe exactement.

## Tracer une spline par sommets de contrôle

1. Tapez `splinecv` dans le terminal ou cliquez sur le bouton **Spline CV** de la barre d'outils.
2. **Cliquez pour placer les sommets de contrôle** — chaque clic ajoute un sommet. Ou tapez `X,Y` et appuyez sur **Entrée**.
3. Appuyez sur **Entrée** pour terminer (au moins 2 sommets requis).

Appuyer sur **Échap** abandonne tous les sommets placés et quitte la commande.

## Édition par poignées

Une spline SC sélectionnée expose une poignée par sommet de contrôle. Faites glisser pour déplacer ce SC — la courbe se reforme vers la nouvelle position.

## Commandes d'édition supportées

| Commande | Ce qui arrive à la spline |
|----------|-----------------------------|
| [Move](./move) | Translate tous les sommets de contrôle du même déplacement |
| [Copy](./copy) | Crée une spline identique à une nouvelle position |
| [Rotate](./rotate) | Fait pivoter tous les SC autour du point de base |
| [Mirror](./mirror) | Symétrise tous les SC par rapport à l'axe de symétrie |
| [Scale](./scale) | Met à l'échelle tous les SC uniformément depuis le point de base |
| [Delete](./delete) | Supprime la spline |

## Spline CV vs Spline Fit — laquelle utiliser

| | Spline CV | Spline Fit |
|---|-----------|------------|
| La courbe passe par les points | Premier et dernier uniquement | Chaque point cliqué exactement |
| Contrôle de forme | Attirer les SC vers une région | Déplacer les points que la courbe doit toucher |
| Idéal pour | Courbes esthétiques lisses, chemins libres | Courbes devant passer par des coordonnées spécifiques |

## DXF — entité SPLINE (forme sommets de contrôle)

Les splines SC sont enregistrées comme entités `SPLINE` dans le fichier DXF, stockant le degré, le vecteur de nœuds et les coordonnées de tous les sommets de contrôle.
