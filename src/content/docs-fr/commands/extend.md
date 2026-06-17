---
sidebar_position: 10
title: Commande Extend — Prolonger un point final de ligne jusqu'à la limite la plus proche dans KulmanLab CAD
description: La commande Extend prolonge le point final le plus proche d'une Line survolée jusqu'à l'intersection la plus proche avec une autre entité. Un aperçu en direct montre la ligne prolongée avant de cliquer. Extend fonctionne sur les entités Line uniquement.
keywords: [commande extend CAO, prolonger ligne CAO, étirer ligne jusqu'à limite, point final ligne extend, aperçu extend survol, kulmanlab]
---

# Extend

La commande `extend` prolonge le point final le plus proche d'une **Line** survolée jusqu'à son intersection la plus proche avec une autre entité. Un aperçu en direct montre la ligne prolongée avant de cliquer.

> **Extend fonctionne sur les entités Line uniquement** — pas sur les arcs, cercles, ellipses ou polylignes.

## Prolonger une ligne

1. Tapez `extend` dans le terminal ou cliquez sur **Extend** dans la barre d'outils.
2. **Survolez une ligne** — l'aperçu montre comment elle sera prolongée jusqu'à la limite la plus proche.
3. **Cliquez** pour appliquer le prolongement.
4. Continuez à cliquer sur d'autres lignes ou appuyez sur **Échap** pour quitter.

## Limites

Extend utilise toutes les entités visibles comme limites potentielles — lignes, arcs, cercles, ellipses et polylignes. Les entités Text, Spline et Multileader sont ignorées comme limites.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Échap` | Quitter la commande Extend |
