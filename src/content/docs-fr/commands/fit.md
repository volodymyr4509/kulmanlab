---
sidebar_position: 4
title: Commande Fit — Ajuster Toutes les Entités dans le Viewport en un Clic dans KulmanLab CAD
description: La commande Fit calcule le cadre de délimitation de toutes les entités et ajuste le zoom et le déplacement pour que toutes les entités soient visibles avec une petite marge. Double-cliquer avec le bouton central de la souris active Fit sans ouvrir la commande.
keywords: [CAO ajuster vue, zoom pour cadrer, cadrer toutes les entités, commande fit CAO, zoom cadre délimitation, kulmanlab]
---

# Fit

La commande `fit` calcule le cadre de délimitation de toutes les entités du dessin et ajuste à la fois le niveau de zoom et la position de déplacement pour que toutes les entités soient visibles avec une petite marge. C'est la façon la plus rapide de retrouver une vue perdue ou de s'orienter après avoir importé un fichier DXF.

## Ajuster la vue

Cliquez sur le bouton **Fit** dans la barre d'outils ou tapez `fit` dans le terminal. La vue s'ajuste immédiatement et la commande se termine — aucune interaction n'est requise.

**Double-cliquer avec le bouton central de la souris** active la même opération Fit à tout moment sans activer de commande — le raccourci le plus rapide pour retrouver une vue perdue au milieu d'un dessin.

## Comment fonctionne l'ajustement du cadre de délimitation

1. Fit trouve le cadre de délimitation aligné sur les axes encadrant toutes les entités (X min, X max, Y min, Y max).
2. Le niveau de zoom est défini pour que la dimension la plus haute ou la plus large remplisse le canevas avec une marge.
3. La vue est centrée sur le point médian du cadre de délimitation.

| État du dessin | Résultat |
|----------------|----------|
| Plus large que haut | Zoom limité par la largeur |
| Plus haut que large | Zoom limité par la hauteur |
| Entité unique | S'ajuste autour de cette entité |
| Dessin vide | La vue ne change pas |

## Fit vs contrôles de zoom manuels

| | Fit | Zoom In / Zoom Out | Molette de souris |
|---|-----|--------------------|------------------|
| Se centre sur | Toutes les entités | Centre du viewport | Curseur |
| Taille du pas | Automatique (un seul coup) | 1,5× par étape | ~1,1× par cran |
| Idéal pour | Retrouver vue perdue, s'orienter après import | Rapprocher/éloigner depuis le centre | Zoom précis centré sur le curseur |

## Référence clavier

Aucun raccourci clavier pour cette commande. Utilisez le raccourci **double clic avec le bouton central de la souris**.

## Commandes de vue associées

| Commande | Action |
|----------|--------|
| [Pan](./pan) | Déplace le viewport sans zoomer |
| [Zoom In](./zoom-in) | Multiplie le zoom par 1,5× par étape |
| [Zoom Out](./zoom-out) | Divise le zoom par 1,5× par étape |
