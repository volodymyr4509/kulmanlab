---
title: Extend — Prolonger l'extrémité d'une ligne à la limite proche
description: La commande Extend prolonge le point final le plus proche d'une Line survolée jusqu'à l'intersection la plus proche avec une autre entité. Un aperçu en direct montre la ligne prolongée avant de cliquer. Extend fonctionne sur les entités Line uniquement et ignore Text, Spline et Multileader comme limites.
keywords: [commande extend CAO, prolonger ligne CAO, étirer ligne jusqu'à limite, point final ligne extend, aperçu extend survol, kulmanlab]
group: edit
order: 9
---

# Extend

La commande `extend` prolonge le point final le plus proche d'une [Line](../line/) survolée jusqu'à l'intersection la plus proche qu'elle formerait avec une autre entité du dessin. Survolez près du point final que vous souhaitez prolonger — un aperçu montre la ligne prolongée — puis cliquez pour appliquer.

Extend fonctionne sur les **entités Line uniquement**. Les limites vers lesquelles la ligne se prolonge peuvent être n'importe quel autre type d'entité sauf Text, Mtext, Multileader et Spline.

## Prolonger une ligne

1. Tapez `extend` dans le terminal ou cliquez sur le bouton **Extend** de la barre d'outils.
2. **Survolez près d'une extrémité d'une ligne** — l'aperçu montre la ligne prolongée jusqu'à la limite la plus proche dans cette direction.
3. **Cliquez** pour appliquer le prolongement.

La commande reste active après chaque prolongement pour que vous puissiez étendre plusieurs lignes en séquence. Appuyez sur **Échap** pour quitter.

```
  Avant :                      Après :

  ──────           |           ──────────────|
  (ligne courte)   (limite)    (prolongée jusqu'à la limite)
```

## Comment le point final est choisi

La commande regarde de quel point final le curseur est le plus proche :

- Curseur **plus proche du point de fin** → la fin est prolongée vers l'avant dans la direction de la ligne.
- Curseur **plus proche du point de départ** → le départ est prolongé vers l'arrière (dans la direction opposée).

Un rayon est émis depuis le point final choisi dans la direction de la ligne, et **l'intersection la plus proche** le long de ce rayon avec toute autre entité (à l'exclusion de la ligne elle-même et des types ignorés) devient le nouveau point final.

Si aucune intersection n'est trouvée dans cette direction, aucun aperçu n'apparaît et le clic ne fait rien.

## Exclusions de limites

Les types d'entités suivants sont ignorés comme limites — une ligne ne se prolonge pas pour les rejoindre :

- Text / Mtext
- Multileader
- Spline

Tous les autres types (Line, Arc, Circle, Ellipse, Polyline, Dimension) servent de limites valides.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Échap` | Quitter la commande Extend |

## Entités supportées

| Entité | Peut être prolongée ? |
|--------|----------------------|
| Line | Oui |
| Arc, Circle, Ellipse | Non |
| Polyline / Rectangle | Non |
| Text, Spline, Dimension, Leader | Non |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| Ce qu'elle fait | Prolonge un point final de ligne jusqu'à une limite | Supprime un segment d'une ligne |
| Déclencheur | Survoler près du point final à étirer | Survoler le segment à couper |
| Résultat | Le point final de la ligne se déplace vers l'extérieur | La ligne se divise ou se raccourcit |
| Les deux | Lines uniquement | Lines uniquement |
