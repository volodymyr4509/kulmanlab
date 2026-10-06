---
title: Commande Trim — Couper des segments aux intersections
description: La commande Trim supprime la portion d'une Line, Arc, Circle, Ellipse ou Polyline entre deux points d'intersection adjacents les plus proches du curseur. Un aperçu montre exactement quel segment sera coupé avant de cliquer.
keywords: [commande trim CAO, raccorder ligne CAO, raccorder cercle CAO, raccorder arc CAO, raccorder ellipse CAO, raccorder polyligne CAO, couper ligne intersection, aperçu trim survol, kulmanlab]
group: edit
order: 8
---

# Trim

La commande `Ajuster` supprime la portion d'une [Line](../line/), d'un [Arc](../arc/), [Circle](../circle/), d'une [Ellipse](../ellipse/) ou [Polyline](../polyline/) qui se trouve entre deux points d'intersection adjacents, divisant l'entité en une ou plusieurs parties restantes. Le segment à couper est déterminé par la position du curseur — survolez la partie que vous voulez supprimer et cliquez pour la raccorder.

## Raccorder une entité

1. Tapez `Ajuster` dans le terminal ou cliquez sur le bouton **Trim** de la barre d'outils.
2. **Survolez le segment** que vous souhaitez supprimer — un aperçu met en surbrillance exactement la portion qui sera coupée.
3. **Cliquez** pour supprimer ce segment.

La commande reste active après chaque raccord, pour que vous puissiez continuer à survoler et cliquer pour couper d'autres segments — sur la même entité ou une autre. Appuyez sur **Entrée**, **Espace** ou **Échap** pour quitter.

```
  Avant :                     Après raccord du segment central :

  ──────●──────●──────        ──────●          ●──────
      intersect  intersect       (partie gauche)  (partie droite)
                                 (segment central supprimé)
```

## Comment le segment de raccord est déterminé

La commande projette la position du curseur sur l'entité survolée et trouve tous les points d'intersection qu'elle a avec d'autres entités. Ces intersections divisent l'entité en segments — pour une Line, un Arc ou une Polyline ouverte, les extrémités propres de l'entité servent de limites fixes supplémentaires. Un Circle ou une Ellipse complets, ou une Polyline fermée (y compris un Rectangle), n'ont pas d'extrémités propres, donc au moins deux points d'intersection sont nécessaires avant de pouvoir les raccorder. Le segment dont l'intervalle contient la projection du curseur est mis en surbrillance et sera supprimé au clic.

- **Line, Arc et Polyline ouverte** — le segment supprimé peut être la portion de tête (avant la première intersection), une portion centrale (entre deux intersections, divisant l'entité en deux parties), ou la portion de queue (après la dernière intersection).
- **Circle, Ellipse et Polyline fermée/Rectangle** — comme il n'y a pas de début ou de fin fixe, seul l'arc entre deux *points d'intersection* peut être supprimé. Avec moins de deux intersections, aucun aperçu n'apparaît et cliquer ne fait rien. Le reste de la forme devient l'unique partie restante.

## Ce que produit le raccord

| Entité | Résultat après raccord |
|--------|------------------------|
| Line | Jusqu'à deux entités Line plus courtes |
| Arc | Jusqu'à deux entités Arc plus courtes |
| Circle | Une entité [Arc](../arc/) — la forme fermée du cercle disparaît, la partie restante est donc stockée comme un arc |
| Ellipse | Une entité Ellipse avec un angle de début et de fin — la partie restante reste une Ellipse, désormais partielle |
| Polyline (ouverte) | Jusqu'à deux entités Polyline plus courtes |
| Polyline (fermée) / Rectangle | Une entité Polyline ouverte — la forme fermée disparaît, la partie restante est donc stockée ouverte |
| Spline | Jusqu'à deux objets Spline plus courts — chaque morceau est la même courbe sur une portion d'elle-même, stockée par points de contrôle (les points d'ajustement d'une spline d'ajustement sont abandonnés) ; une spline fermée laisse un morceau ouvert |

## Référence clavier

| Touche | Action |
|--------|--------|
| `Entrée` / `Espace` | Quitter la commande Trim |
| `Échap` | Quitter la commande Trim |

## Entités supportées

| Entité | Peut être raccordée ? |
|--------|----------------------|
| Line | Oui |
| Arc | Oui |
| Circle | Oui — nécessite 2 points d'intersection ou plus |
| Ellipse | Oui — nécessite 2 points d'intersection ou plus |
| Polyline (ouverte) | Oui |
| Polyline (fermée) / Rectangle | Oui — nécessite 2 points d'intersection ou plus |
| Spline | Oui — une spline fermée nécessite 2 points d'intersection ou plus; une spline est aussi coupée là où elle se croise elle-même |
| Text, Dimension, Leader | Non |

Les objets utilisés comme **limites de coupe** peuvent être Line, Arc, Circle, Ellipse, Polyline ou Spline. Les objets Text, Dimension et Leader n'enregistrent jamais d'intersections ; ils ne peuvent donc pas non plus servir de limites.

Les **segments d'arc** d'une Polyline (dessinés avec le bouton Arc, ou importés) se raccordent exactement comme ses segments droits — survolez la portion d'arc entre deux intersections et cliquez. Le bord raccordé conserve sa courbure ; seule sa longueur change.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| Ce qu'elle fait | Supprime un segment d'une entité | Prolonge un point final de ligne jusqu'à une limite |
| Déclencheur | Survoler le segment à couper | Survoler près du point final à prolonger |
| Résultat | L'entité se divise ou se raccourcit | Le point final de la ligne se déplace jusqu'à la limite |
| Entités supportées | Line, Arc, Circle, Ellipse, Polyline, Spline | Line, Arc, Ellipse, Polyline |
