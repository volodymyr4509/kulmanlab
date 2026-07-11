---
title: Commande Trim — Couper des segments de ligne aux intersections dans KulmanLab CAD
description: La commande Trim supprime la portion d'une Ligne entre deux points d'intersection adjacents les plus proches du curseur. Un aperçu de survol rouge montre exactement quel segment sera coupé avant de cliquer. Trim fonctionne sur les entités Line uniquement — pas sur les arcs, cercles ou polylignes.
keywords: [commande trim CAO, raccorder ligne CAO, couper ligne intersection, aperçu trim survol, trim ligne uniquement, kulmanlab]
group: edit
order: 8
---

# Trim

La commande `trim` supprime la portion d'une [Line](../line/) qui se trouve entre deux points d'intersection adjacents, divisant la ligne en un ou deux segments plus courts. Le segment à couper est déterminé par la position du curseur — survolez la partie que vous voulez supprimer et cliquez pour la raccorder.

Trim fonctionne sur les **entités Line uniquement**. Pour les arcs, cercles, polylignes et autres types d'entités, utilisez [Delete](../delete/) ou l'édition par poignées.

## Raccorder une ligne

1. Tapez `trim` dans le terminal ou cliquez sur le bouton **Trim** de la barre d'outils.
2. **Survolez le segment de ligne** que vous souhaitez supprimer — un aperçu rouge met en surbrillance exactement la portion qui sera coupée.
3. **Cliquez** pour supprimer ce segment.

La commande reste active après chaque raccord, pour que vous puissiez continuer à survoler et cliquer pour couper d'autres segments. Appuyez sur **Échap** pour quitter.

```
  Avant :                     Après raccord du segment central :

  ──────●──────●──────        ──────●          ●──────
      intersect  intersect       (partie gauche)  (partie droite)
                                 (segment central supprimé)
```

## Comment le segment de raccord est déterminé

La commande projette la position du curseur sur la ligne survolée et trouve tous les points d'intersection que la ligne a avec d'autres entités. Ces paramètres d'intersection divisent la ligne en segments. Le segment dont l'intervalle contient la projection du curseur est mis en surbrillance et sera supprimé au clic.

- Si le curseur est **avant la première intersection** : cette portion de tête de la ligne est supprimée.
- Si le curseur est **entre deux intersections** : cette portion centrale est supprimée ; la ligne se divise en deux.
- Si le curseur est **après la dernière intersection** : cette portion de queue est supprimée.
- Si la ligne **n'a pas d'intersections** avec une autre entité : aucun aperçu n'est affiché et cliquer ne fait rien.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Échap` | Quitter la commande Trim |

## Entités supportées

| Entité | Peut être raccordée ? |
|--------|----------------------|
| Line | Oui |
| Arc, Circle, Ellipse | Non |
| Polyline / Rectangle | Non |
| Text, Spline, Dimension, Leader | Non |

Les entités utilisées comme **limites de coupe** peuvent être de n'importe quel type — seule la ligne en cours de raccord doit être une entité Line.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| Ce qu'elle fait | Supprime un segment d'une ligne | Prolonge un point final de ligne jusqu'à une limite |
| Déclencheur | Survoler le segment à couper | Survoler près du point final à prolonger |
| Résultat | La ligne se divise ou se raccourcit | Le point final de la ligne se déplace jusqu'à la limite |
| Les deux | Lines uniquement | Lines uniquement |
