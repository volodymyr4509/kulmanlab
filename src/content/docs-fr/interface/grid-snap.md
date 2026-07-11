---
title: Grille et Accrochage — Aligner les Dessins sur une Grille Régulière dans KulmanLab CAD
description: Les contrôles de Grille et Accrochage dans KulmanLab CAD superposent une grille de référence sur le canevas et verrouillent le mouvement du curseur sur les points de la grille. L'espacement de la grille s'adapte automatiquement au niveau de zoom actuel pour toujours afficher des valeurs de modèle rondes.
keywords: [grille CAO, accrochage grille, espacement grille, aides au dessin, kulmanlab, points grille, accrochage orthogonal]
group: interface
order: 1
---

# Grille et Accrochage

Deux boutons de bascule dans la barre de contrôle permettent de superposer une grille de référence et de verrouiller le curseur sur ses intersections pendant le dessin.

| Bouton | Ce qu'il fait |
|--------|---------------|
| **Grid** | Affiche une grille visuelle de points ou lignes sur le canevas |
| **Snap** | Verrouille le curseur sur le point de grille le plus proche quand aucun accrochage de géométrie n'est plus proche |

Les deux contrôles sont indépendants — vous pouvez afficher la grille sans accrochage, accrocher sans afficher la grille, ou utiliser les deux ensemble.

## Activer la grille et l'accrochage

Cliquez sur **Grid** ou **Snap** dans la barre d'outils du panneau de contrôle. L'état actif apparaît en surbrillance. Les paramètres sont conservés entre les sessions.

Quand **Snap** est activé, la grille change automatiquement son affichage de lignes en **points** — les points marquent les points exacts auxquels le curseur s'accrochera.

## Espacement adaptatif de la grille

L'espacement de la grille s'ajuste automatiquement lors du zoom pour que les lignes de la grille soient toujours à une distance confortable à l'écran (~40 px). Le pas est toujours un nombre "rond" — un multiple de 1, 2 ou 5 à toute puissance de dix :

| Exemple de zoom / échelle de modèle | Pas de la grille |
|--------------------------------------|-----------------|
| Dézoomé (grande zone) | 100, 500, 1000 … |
| Zoom moyen | 10, 20, 50 … |
| Zoomé (détail fin) | 1, 2, 5 … |
| Très proche | 0,1, 0,2, 0,5 … |

Cela signifie que chaque point d'accrochage tombe sur une coordonnée ronde dans l'espace modèle — aucun décalage en virgule flottante ne s'accumule.

## Priorité d'accrochage

**Les accrochages aux extrémités et intersections ont toujours la priorité sur la grille.** Le curseur s'accroche à un point de grille uniquement quand il n'est pas proche d'un candidat d'accrochage géométrique (extrémité, point médian, centre ou intersection).

Cela signifie que vous pouvez dessiner avec l'accrochage à la grille activé et quand même vous accrocher précisément à la géométrie existante quand le curseur passe suffisamment près. La grille est un repli, pas une priorité.

## Mode de mise en page

- **Espace modèle** — les points ou lignes remplissent toute la zone de canevas visible.
- **Espace de mise en page (papier)** — les points sont découpés au rectangle du papier et ne s'étendent pas au-delà.
- **Dans une fenêtre** — la grille suit le système de coordonnées du modèle à l'échelle de la fenêtre, de sorte que les points s'alignent sur les mêmes unités du modèle quelle que soit l'amplification de la fenêtre.

## Flux de travail typique

1. Activez **Grid** et **Snap** avant de commencer un dessin qui nécessite un espacement régulier.
2. Zoomez au niveau où le pas de la grille correspond à votre incrément souhaité (ex. zoomez jusqu'à ce que les points soient à 10 unités de distance).
3. Dessinez — le curseur s'accroche automatiquement aux points de la grille. La géométrie existante s'accroche toujours normalement quand vous êtes proche.
4. Désactivez **Snap** quand vous avez besoin d'un mouvement libre du curseur ou souhaitez vous accrocher uniquement à la géométrie.
