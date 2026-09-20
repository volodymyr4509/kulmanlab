---
title: Extend — Prolonger une Entité jusqu'à la Limite Proche
description: La commande Extend prolonge le point final le plus proche d'une Line, Arc, Ellipse ou Polyline ouverte survolée jusqu'à l'intersection la plus proche avec une autre entité. Un aperçu en direct montre l'entité prolongée avant de cliquer.
keywords: [commande extend CAO, prolonger ligne CAO, prolonger arc CAO, prolonger ellipse CAO, prolonger polyligne CAO, étirer entité jusqu'à limite, aperçu extend survol, kulmanlab]
group: edit
order: 9
---

# Extend

La commande `Prolonger` prolonge le point final le plus proche d'une [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/) ou Polyline ouverte survolée jusqu'à l'intersection la plus proche qu'elle formerait avec une autre entité du dessin. Survolez près du point final que vous souhaitez prolonger — un aperçu montre l'entité prolongée — puis cliquez pour appliquer.

Seules les entités ayant un véritable point final peuvent être prolongées. Un [Circle](../circle/) et une Ellipse complète (360°) sont toujours des formes fermées sans point final, elles ne peuvent donc jamais être prolongées — de même pour une Polyline fermée ou un Rectangle. Une Ellipse partielle (un arc elliptique) et un Arc ont bien des points finaux et se prolongent de la même façon qu'une Line.

## Prolonger une entité

1. Tapez `Prolonger` dans le terminal ou cliquez sur le bouton **Extend** de la barre d'outils.
2. **Survolez près d'une extrémité** de l'entité que vous souhaitez prolonger — l'aperçu la montre prolongée jusqu'à la limite la plus proche dans cette direction.
3. **Cliquez** pour appliquer le prolongement.

La commande reste active après chaque prolongement, pour que vous puissiez continuer à survoler et cliquer pour prolonger d'autres entités. Appuyez sur **Entrée**, **Espace** ou **Échap** pour quitter.

```
  Avant :                      Après :

  ──────           |           ──────────────|
  (ligne courte)   (limite)    (prolongée jusqu'à la limite)
```

## Comment le point final est choisi

La commande regarde de quelle extrémité le curseur est le plus proche :

- **Line et Polyline ouverte** — curseur plus proche du point de fin prolonge la fin vers l'avant ; curseur plus proche du point de départ prolonge le départ vers l'arrière.
- **Arc et Ellipse partielle** — curseur plus proche d'une des extrémités angulaires fait croître l'arc dans cette direction, en suivant le même centre et rayon (ou la même forme d'ellipse), jusqu'à atteindre la prochaine limite.

Un rayon — ou, pour Arc et Ellipse, le cercle ou la courbe sous-jacente propre de l'entité — est émis depuis l'extrémité choisie, et **l'intersection la plus proche** avec toute autre entité (à l'exclusion de l'entité elle-même et des types ignorés) devient le nouveau point final.

Si aucune intersection n'est trouvée dans cette direction, aucun aperçu n'apparaît et le clic ne fait rien.

## Exclusions de limites

Les types d'entités suivants sont ignorés comme limites — une entité ne se prolonge pas pour les rejoindre :

- Text / Mtext
- Multileader
- Spline

Tous les autres types (Line, Arc, Circle, Ellipse, Polyline, Dimension) servent de limites valides.

Si le premier ou le dernier segment d'une Polyline est lui-même un segment d'arc (dessiné avec le bouton Arc), le prolonger fait croître l'arc le long de son propre cercle — comme pour prolonger un Arc autonome — plutôt que de le traiter comme un segment droit.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Entrée` / `Espace` | Quitter la commande Extend |
| `Échap` | Quitter la commande Extend |

## Entités supportées

| Entité | Peut être prolongée ? |
|--------|----------------------|
| Line | Oui |
| Arc | Oui |
| Ellipse | Oui — seulement si c'est déjà un arc partiel ; une ellipse complète n'a pas de point final |
| Circle | Non — toujours une forme fermée sans point final |
| Polyline (ouverte) | Oui |
| Polyline (fermée) / Rectangle | Non — toujours une forme fermée sans point final |
| Text, Spline, Dimension, Leader | Non |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| Ce qu'elle fait | Prolonge le point final d'une entité jusqu'à une limite | Supprime un segment d'une entité |
| Déclencheur | Survoler près du point final à étirer | Survoler le segment à couper |
| Résultat | Le point final se déplace vers l'extérieur | L'entité se divise ou se raccourcit |
| Entités supportées | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
