---
sidebar_position: 11
title: Commande Offset — Créer des copies parallèles à une distance fixe dans KulmanLab CAD
description: La commande Offset crée une copie parallèle d'une Line, Circle, Arc, Ellipse ou Polyline à une distance saisie. La distance est saisie une fois et réutilisée pour plusieurs offsets. Un clic de côté détermine la direction de la copie. Cinq types d'entités supportés.
keywords: [commande offset CAO, copie parallèle CAO, offset ligne CAO, offset cercle CAO, offset polyligne CAO, offset concentrique, kulmanlab]
---

# Offset

La commande `offset` crée une copie parallèle d'une entité à une distance perpendiculaire fixe. Vous tapez la distance une fois, puis cliquez sur les entités et choisissez un côté — la commande reste prête à la même distance pour que vous puissiez faire un offset sur plusieurs objets en une seule session.

Types d'entités supportés : **Line, Circle, Arc, Ellipse, Polyline** (y compris les Rectangles).

## Utiliser offset

1. Tapez `offset` dans le terminal ou cliquez sur le bouton **Offset** de la barre d'outils.
2. **Tapez la distance d'offset** et appuyez sur **Entrée** ou **Espace**.
3. **Cliquez sur une entité** à décaler — si l'entité n'est pas d'un type supporté, un message d'erreur apparaît et vous pouvez cliquer sur une autre entité.
4. **Déplacez le curseur** vers le côté où la copie doit apparaître — un aperçu en direct suit.
5. **Cliquez** pour placer la copie d'offset.

Après chaque placement, la commande revient à l'étape 3 à la **même distance**, prête pour le prochain offset. Appuyez sur **Échap** pour revenir à l'étape de saisie de distance.

```
  Distance : 10

  ─────────────────    ← ligne originale
  ─────────────────    ← copie d'offset (10 unités en dessous)
```

## Comportement d'offset par entité

| Entité | Comment l'offset est calculé |
|--------|------------------------------|
| **Line** | Ligne parallèle décalée perpendiculairement à la direction originale |
| **Circle** | Cercle concentrique ; clic à l'extérieur → rayon plus grand, à l'intérieur → rayon plus petit |
| **Arc** | Arc concentrique à un nouveau rayon ; même étendue angulaire préservée |
| **Ellipse** | Les deux demi-axes augmentés ou diminués de la même distance |
| **Polyline** | Chaque segment décalé indépendamment ; les segments d'offset adjacents sont ongletés aux coins |

Pour **Circle**, **Arc**, et **Ellipse** : si l'offset vers l'intérieur réduit un rayon ou demi-axe à zéro ou moins, l'offset n'est pas appliqué.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Ajouter un chiffre à la valeur de distance |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` / `Espace` | Confirmer la distance saisie et avancer à la sélection d'entité |
| `Échap` | Revenir à l'étape de saisie de distance |

## Note de flux de travail

La distance reste définie jusqu'à ce que vous appuyiez sur **Échap**. Cela rend efficace le décalage de nombreuses entités au même espacement — tapez la distance une fois, puis cliquez et choisissez le côté pour chaque entité à tour de rôle.

## Offset vs Copy

| | Offset | Copy |
|---|--------|------|
| Déplacement | Perpendiculaire à la géométrie de l'entité | Vecteur arbitraire (base → destination) |
| Entités supportées | Line, Circle, Arc, Ellipse, Polyline | Tous les types d'entités |
| Saisie de distance | Saisie avant de sélectionner l'entité | Saisie ou cliquée après la sélection |
| Idéal pour | Lignes parallèles, cercles concentriques, chemins intérieurs/extérieurs | Placer des duplicatas à des positions arbitraires |
