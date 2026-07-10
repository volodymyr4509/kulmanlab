---
sidebar_position: 5
title: Vector Pins — Accrocher le Curseur aux Lignes de Référence des Points Épinglés dans KulmanLab CAD
description: Les Vector Pins permettent d'épingler un point d'accrochage en le survolant une demi-seconde, puis de suivre le curseur le long de lignes de référence horizontales et verticales en pointillés passant par le point épinglé — alignez la nouvelle géométrie sur des points existants sans lignes de construction.
keywords: [vector pins, repérage d'accrochage aux objets, lignes de référence, repérage d'alignement, suivi d'accrochage CAO, lignes de construction, kulmanlab]
---

# Vector Pins

Les **Vector Pins** sont une aide au dessin qui permet d'aligner la nouvelle géométrie sur des points existants sans tracer de lignes de construction. Survolez un point d'accrochage pendant une demi-seconde pour l'*épingler* — l'épingle projette alors des lignes de référence horizontales et verticales invisibles, et le curseur s'y accroche dès qu'il s'en approche. C'est l'équivalent dans KulmanLab CAD du repérage d'accrochage aux objets des applications CAO de bureau.

La fonctionnalité est contrôlée par le bouton **Pins** de la barre de contrôle (à côté de Grid, Snap et ANGL). Elle est **activée par défaut**, et le réglage persiste d'une session à l'autre.

## Épingler un point

1. Lancez une commande qui demande un point — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/), etc.
2. Déplacez le curseur sur un point d'accrochage de la géométrie existante — un marqueur d'extrémité, de milieu ou de centre.
3. **Maintenez le curseur immobile pendant 500 ms.** Le marqueur devient un **carré** plein de couleur d'accent — le point est épinglé.
4. Répétez pour épingler autant de points que nécessaire. Chaque épingle continue de projeter ses lignes de référence.

L'épinglage fonctionne aussi hors commande : survoler une **poignée** d'une entité sélectionnée l'épingle de la même façon.

## Suivi le long des lignes de référence

Chaque point épinglé projette deux lignes de référence invisibles — une **horizontale** et une **verticale** — passant par ses coordonnées exactes. Quand vous déplacez le curseur :

- À moins de **12 px** de la ligne verticale d'une épingle, le curseur s'y accroche : une ligne pointillée de couleur d'accent est tracée à travers l'épingle sur toute la vue, et un **marqueur X** montre la position accrochée. Votre coordonnée X est désormais *exactement* le X de l'épingle.
- Il en va de même pour la ligne horizontale et la coordonnée Y de l'épingle.
- Près d'une ligne de chaque orientation — même provenant de **deux épingles différentes** — le curseur s'accroche à leur **intersection**, et les deux lignes pointillées s'affichent. Cela place un point exactement en (X de l'épingle A, Y de l'épingle B).

```
                    ┆ (pointillés, ligne verticale de l'épingle ■)
                    ┆
   ■ épingle A ┄┄┄┄ ✕ ← curseur accroché à l'intersection :
                    ┆    X de l'épingle B, Y de l'épingle A
                    ┆
                    ■ épingle B
```

Les coordonnées accrochées sont prises directement sur l'épingle : l'alignement est exact — sans arrondi ni dérive de virgule flottante.

## Priorité d'accrochage

Les accrochages géométriques normaux — extrémité, milieu, centre et intersection — **ont priorité** sur les lignes de référence des épingles. Si le curseur est plus proche d'un accrochage ponctuel que d'une ligne de référence, l'accrochage ponctuel gagne. Le suivi des épingles comble les vides entre les géométries ; il ne bloque jamais l'accrochage à la géométrie elle-même.

## Combinaison avec le verrouillage d'angle

Les vector pins fonctionnent de pair avec le suivi d'angle (le bouton **ANGL** de la barre de contrôle). Quand une commande a verrouillé le curseur sur un rayon de suivi d'angle :

- Le curseur reste contraint à la direction verrouillée.
- L'accrochage aux épingles vise alors les **intersections du rayon verrouillé avec les lignes de référence des épingles** (uniquement en avant de l'origine du rayon).

Cela répond à des questions comme *« où la direction à 45° depuis mon dernier point croise-t-elle la hauteur du centre de ce cercle ? »* — verrouillez l'angle, et le curseur s'enclenche au point de croisement. L'accrochage au rayon fonctionne dans toutes les commandes à verrouillage d'angle : Line, Polyline, Arc, Circle, Move, Copy, Area, Leader et ViewportCopy.

## Cycle de vie des épingles

Les épingles sont destinées à l'opération en cours, pas à servir de marqueurs permanents. Toutes les épingles sont effacées quand :

| Événement | Raison |
|-----------|--------|
| Une **nouvelle commande** démarre | Chaque opération commence avec un jeu de références propre |
| **Échap** est pressé | Comportement standard « tout annuler » |
| Le bouton **Pins** est désactivé | Désactiver la fonctionnalité supprime son état |
| Passage entre **espace modèle et espace papier** | Les coordonnées des épingles sont propres à un espace |

Au sein d'une même commande, vous pouvez épingler, dessiner, épingler à nouveau et continuer — les épingles survivent à chaque clic d'une commande multi-points comme Polyline.

## Flux de travail typique

Tracer une ligne qui commence directement sous le centre d'un cercle :

1. Tapez `line` (ou cliquez sur le bouton Line).
2. Survolez le **marqueur de centre** du cercle une demi-seconde — il devient un carré de couleur d'accent.
3. Déplacez le curseur vers le bas : près de la verticale du cercle, le curseur se cale sur la ligne de référence pointillée.
4. Cliquez — la ligne commence exactement à la coordonnée X du cercle.
5. Poursuivez la ligne normalement ; l'épingle reste disponible pour les points suivants.

## Remarques

- Le survol de 500 ms fonctionne sur tout marqueur d'accrochage que le curseur peut atteindre — y compris les points d'accrochage qui apparaissent en cours de commande.
- Survoler un point déjà épinglé ne fait rien ; il n'y a pas de désépinglage par survol. Effacez les épingles avec **Échap** ou en désactivant **Pins**.
- La distance d'accrochage des lignes de référence est la même que celle de l'accrochage ponctuel normal, 12 pixels d'écran, pour une sensation cohérente à tout niveau de zoom.
- Les points épinglés s'affichent sous forme de carrés de couleur d'accent à la place de leurs marqueurs d'accrochage habituels.
