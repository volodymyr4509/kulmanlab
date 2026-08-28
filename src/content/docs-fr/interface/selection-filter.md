---
title: Filtre de sélection — Restreindre une sélection multiple par propriété
description: Lorsque de nombreuses entités sont sélectionnées, une icône de filtre dans l'en-tête du panneau des propriétés ouvre une fenêtre avec des listes à cocher dynamiques pour Type, Calque, Couleur, Épaisseur de ligne et Type de ligne, construites à partir du contenu réel de la sélection, afin de restreindre une sélection large et hétérogène avant une édition groupée.
keywords: [filtre de sélection, filtrer la sélection CAO, filtre à facettes, restreindre la sélection, édition groupée CAO, filtre du panneau des propriétés, kulmanlab]
group: interface
order: 7
---

# Filtre de sélection

Sélectionner beaucoup d'entités à la fois ouvre le panneau des propriétés dans sa vue de sélection multiple (« Selection (N) »). Une **icône de filtre** à côté du bouton de fermeture permet de restreindre cette sélection par propriété avant de l'éditer en bloc.

## Ouvrir le filtre

1. Sélectionnez plusieurs entités — tracez un cadre de sélection, cliquez avec Maj ou appuyez sur Ctrl+A.
2. Cliquez sur l'**icône de filtre** (entonnoir) dans l'en-tête du panneau des propriétés.
3. Une fenêtre s'ouvre sous le bouton, avec une liste à cocher pour chaque propriété qui varie réellement dans la sélection.

## Facettes

La fenêtre peut afficher jusqu'à cinq facettes, chacune construite en direct à partir de la sélection courante :

| Facette | Valeurs affichées |
|---------|-------------------|
| **Type** | Nom du type d'entité (Line, Circle, Hatch, …) |
| **Calque** | Nom du calque, avec une pastille de couleur correspondante |
| **Couleur** | Index de couleur ACI |
| **Épaisseur de ligne** | Valeur d'épaisseur de ligne |
| **Type de ligne** | Nom du type de ligne |

Une facette n'apparaît que si la sélection contient effectivement plus d'une valeur distincte pour elle — sélectionner dix lignes toutes sur le même calque n'affichera pas de facette Calque, puisque la cocher ne restreindrait rien. Les entités qui ne portent pas une propriété donnée (Hatch et Text n'ont ni épaisseur ni type de ligne, par exemple) ne sont simplement pas comptées dans cette facette — et elles n'en sont jamais exclues non plus.

## Restreindre la sélection

Cochez une ou plusieurs valeurs dans n'importe quelle facette pour restreindre la sélection aux entités correspondant à **toutes** les facettes cochées (une entité doit correspondre à au moins une valeur cochée dans *chaque* facette que vous avez touchée, pas seulement dans une). Les cases et les compteurs de chaque facette reflètent ce que les *autres* facettes cochées ont déjà restreint, de sorte qu'une facette ne masque jamais ses propres options déjà cochées — le comportement classique de la recherche à facettes.

Le nombre de résultats se met à jour en direct au fil des cases cochées et décochées, et la sélection sur le canevas est restreinte en conséquence : ce n'est pas un simple filtre d'affichage, les entités qui ne correspondent plus sont réellement désélectionnées, prêtes pour que vous éditiez en bloc exactement le sous-ensemble filtré.

## Effacer les filtres

Utilisez la commande de réinitialisation de la fenêtre pour décocher toutes les cases et revenir à la sélection d'origine complète, ou fermez la fenêtre (elle rouvrira sur une base neuve la prochaine fois que vous cliquerez sur l'icône de filtre avec une autre sélection).

## Voir aussi

- [Match Properties](../../commands/match-properties/) — copier les propriétés d'une entité vers d'autres, une fois que vous avez restreint lesquelles
- [LayerIsolate](../../commands/layer-isolate/) — une alternative à l'échelle du calque quand vous voulez isoler par calque seul, indépendamment de la sélection courante
