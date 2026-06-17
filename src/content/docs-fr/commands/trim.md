---
sidebar_position: 7
title: Commande Trim — Couper des segments de ligne aux intersections dans KulmanLab CAD
description: La commande Trim supprime la portion d'une Ligne entre deux points d'intersection adjacents les plus proches du curseur. Un aperçu de survol rouge montre exactement quel segment sera coupé. Trim fonctionne sur les entités Line uniquement.
keywords: [commande trim CAO, raccorder ligne CAO, couper ligne intersection, aperçu trim survol, trim ligne uniquement, kulmanlab]
---

# Trim

La commande `trim` supprime la portion d'une **Line** entre deux intersections adjacentes les plus proches du curseur. Un aperçu rouge sur la ligne de survol montre exactement quelle portion sera supprimée avant de cliquer.

> **Trim fonctionne sur les entités Line uniquement** — pas sur les arcs, cercles, ellipses ou polylignes.

## Raccorder une ligne

1. Tapez `trim` dans le terminal ou cliquez sur **Trim** dans la barre d'outils.
2. **Survolez une ligne** — la portion qui sera supprimée s'affiche en rouge.
3. **Cliquez** pour supprimer cette portion.
4. Continuez à cliquer sur d'autres portions ou appuyez sur **Échap** pour quitter.

La commande reste active jusqu'à ce que vous appuyiez sur **Échap**, vous permettant de raccorder plusieurs segments en une seule activation.

## Sélection de l'intersection

La commande identifie toutes les entités qui croisent la ligne survolée. La portion entre les deux intersections les plus proches du curseur est mise en surbrillance. Déplacez le curseur le long de la ligne pour sélectionner une portion différente.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Échap` | Quitter la commande Trim |
