---
sidebar_position: 11
title: Commande Offset — Créer des copies parallèles à une distance fixe dans KulmanLab CAD
description: La commande Offset crée une copie parallèle d'une Line, Circle, Arc, Ellipse ou Polyline à une distance saisie. La distance est saisie une fois et réutilisée pour plusieurs offsets. Un clic de côté détermine la direction.
keywords: [commande offset CAO, copie parallèle CAO, offset ligne CAO, offset cercle CAO, offset polyligne CAO, offset concentrique, kulmanlab]
---

# Offset

La commande `offset` crée une copie parallèle d'une entité à une distance fixe. La distance est saisie une fois et réutilisée pour tous les offsets suivants dans la même activation.

**Types d'entités supportés :** Line, Circle, Arc, Ellipse, Polyline.

## Créer un offset

1. Tapez `offset` dans le terminal ou cliquez sur **Offset** dans la barre d'outils.
2. **Tapez la distance d'offset** et appuyez sur **Entrée**.
3. **Cliquez sur une entité** — l'aperçu montre l'entité décalée.
4. **Cliquez du côté** de l'entité où vous souhaitez la copie.
5. La copie est placée. Cliquez sur d'autres entités pour continuer avec la même distance, ou appuyez sur **Échap** pour quitter.

## Comportement par type d'entité

| Type | Résultat |
|------|----------|
| **Line** | Ligne parallèle à la distance perpendiculaire |
| **Circle** | Cercle concentrique de rayon plus grand ou plus petit |
| **Arc** | Arc concentrique de même étendue angulaire |
| **Ellipse** | Ellipse concentrique décalée vers l'extérieur ou l'intérieur |
| **Polyline** | Polyligne parallèle décalée vers l'extérieur ou l'intérieur |

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Saisie de la distance d'offset |
| `Retour arrière` | Supprimer le dernier caractère |
| `Entrée` | Confirmer la distance d'offset |
| `Échap` | Quitter la commande Offset |
