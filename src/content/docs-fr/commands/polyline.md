---
sidebar_position: 2
title: Commande Polyline — Tracer des chemins multi-segments comme une seule entité dans KulmanLab CAD
description: La commande Polyline trace n'importe quel nombre de segments connectés stockés comme une seule entité LWPOLYLINE. Les poignées de sommet et de milieu de segment permettent de remodeler toute partie du chemin après création. Supporte l'offset ; ne supporte pas Trim ni Extend.
keywords: [commande polyline CAO, tracer polyligne CAO, chemin multi-segments CAO, LWPOLYLINE DXF, remodeler polyligne, poignée sommet CAO, offset polyligne, kulmanlab]
---

# Polyline

La commande `polyline` trace un chemin connecté de n'importe quel nombre de segments droits, tous stockés comme une seule entité `LWPOLYLINE`. Parce que tout le chemin est un seul objet, le sélectionner sélectionne chaque segment à la fois — déplacez, faites pivoter ou mettez à l'échelle toute la forme en une seule opération. C'est la distinction clé avec les [Lines](../line/) enchaînées, où chaque segment est une entité indépendante.

Les polylignes peuvent également être **fermées** : la commande [Rectangle](../rectangle/) utilise la même entité `LWPOLYLINE` avec un indicateur de fermeture défini.

## Tracer une polyligne

1. Tapez `polyline` dans le terminal ou cliquez sur le bouton **Polyline** de la barre d'outils.
2. **Cliquez sur le premier point**, ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. **Cliquez sur chaque point suivant** — chaque clic ajoute un segment. La saisie de coordonnées fonctionne à chaque étape.
4. Appuyez sur **Entrée** ou **Espace** pour terminer (nécessite au moins 2 points placés).

```
  ●──────●
  1er    2e
          \
           \  segment 3 (en cours — curseur ici)
            ●  ← cliquer pour ajouter, Entrée/Espace pour terminer
```

Appuyer sur **Échap** à tout moment abandonne tous les points placés et quitte la commande.

## Saisie de coordonnées

Au lieu de cliquer, tapez une position exacte pour tout sommet :

1. Tapez la valeur X.
2. Appuyez sur `,` — le terminal affiche `[X], [Y{curseur}]`.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour placer le sommet.

## Verrouillage d'angle et longueur de segment exacte

La même logique de verrouillage à 45° que la commande [Line](../line/#angle-locking-and-exact-length-input) s'applique entre deux points consécutifs. Quand verrouillé sur un axe :

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Ajouter un chiffre à la longueur du segment |
| `-` | Longueur négative — inverse la direction le long de l'axe (premier caractère uniquement) |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Placer le point suivant à la distance saisie |

La longueur accumulée courante apparaît dans le terminal en temps réel. Cliquer pendant le verrouillage se projette sur l'axe pour que le nouveau sommet atterrisse exactement dessus.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X, ou longueur de segment quand l'angle est verrouillé |
| `,` | Verrouiller X et passer à la saisie Y |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée ou longueur saisie, ou terminer la polyligne si rien n'est saisi et ≥ 2 points existent |
| `Espace` | Terminer la polyligne (identique à Entrée quand aucune saisie n'est en cours) |
| `Échap` | Abandonner tous les points et quitter |

## Édition par poignées — sommets et milieux de segments

Une polyligne sélectionnée affiche deux types de poignées :

| Poignée | Position | Ce qu'elle fait |
|---------|----------|----------------|
| **Sommet** | À chaque point placé | Faites glisser pour repositionner ce sommet ; tous les segments connectés s'étirent pour suivre |
| **Milieu de segment** | Centre de chaque segment | Faites glisser pour translater **les deux** extrémités de ce segment ensemble, en conservant la longueur et l'angle du segment intact |

La poignée de milieu de segment est propre aux polylignes — elle permet de faire glisser un segment individuel latéralement sans changer sa longueur. Sur une [Line](../line/), la poignée de point médian active plutôt la commande Move pour l'entité entière.

Il n'y a pas de poignée unique "déplacer toute la polyligne". Pour déplacer tout le chemin, utilisez la commande [Move](../move/).

## Sélectionner des polylignes

| Méthode | Comportement |
|---------|-------------|
| **Clic** | Sélectionne la polyligne si le clic atterrit à distance de test du clic d'un segment |
| **Glisser à droite** (strict) | Tous les sommets doivent être à l'intérieur du cadre |
| **Glisser à gauche** (croisement) | Tout segment qui croise la limite du cadre sélectionne toute la polyligne |

Parce qu'une polyligne est une seule entité, une sélection par croisement qui touche un segment sélectionne tous les segments.

## Commandes d'édition supportées

Les polylignes supportent toutes les transformations générales et l'offset, mais **pas** trim ni extend (ce sont des fonctions [Line](../line/) uniquement) :

| Commande | Ce qui arrive à la polyligne |
|----------|------------------------------|
| [Move](../move/) | Translate tous les sommets du même déplacement |
| [Copy](../copy/) | Crée une polyligne identique à une nouvelle position |
| [Rotate](../rotate/) | Fait pivoter tous les sommets autour du point de base choisi |
| [Mirror](../mirror/) | Symétrise tous les sommets par rapport à l'axe de symétrie |
| [Scale](../scale/) | Met à l'échelle tous les sommets uniformément depuis le point de base |
| [Offset](../offset/) | Crée une polyligne parallèle à une distance perpendiculaire fixe |
| [Delete](../delete/) | Supprime la polyligne du dessin |

## Propriétés

Quand une polyligne est sélectionnée, le panneau des propriétés affiche :

**Général**

| Propriété | Par défaut | Signification |
|-----------|-----------|---------------|
| Color | 256 (ByLayer) | Index de couleur ACI |
| Layer | `0` | Attribution de calque |
| Linetype | ByLayer | Motif de type de ligne nommé |
| Linetype Scale | 1 | Facteur d'échelle sur le motif de type de ligne |
| Thickness | 0 | Épaisseur d'extrusion |

**Géométrie**

| Propriété | Signification |
|-----------|---------------|
| Closed | Si le dernier sommet se connecte au premier |
| Vertex Count | Nombre total de sommets |
| Vertices | Liste de coordonnées de tous les sommets |

## Polyline vs Line — quand utiliser laquelle

| | Polyline | Line |
|---|---------|------|
| Nombre d'entités | Un `LWPOLYLINE` pour tout le chemin | Un `LINE` par segment |
| Forme fermée | Oui (indicateur de fermeture) | Non |
| Trim / Extend | Non | Oui — segment par segment |
| Poignée de milieu de segment | Translate le segment entier | Active Move pour l'entité |
| Idéal pour | Contours, silhouettes, formes à garder entières | Lignes de construction, géométrie à retailler |

## DXF — entité LWPOLYLINE

Les polylignes sont enregistrées comme entités `LWPOLYLINE` dans le fichier DXF. Toutes les propriétés — coordonnées des sommets, indicateur de fermeture, couleur, calque, type de ligne, échelle de type de ligne et épaisseur — font l'aller-retour sans perte. Les rectangles dessinés avec la commande [Rectangle](../rectangle/) sont également enregistrés comme `LWPOLYLINE` (fermé, quatre sommets) et sont indiscernables au niveau DXF.

Les entités `LWPOLYLINE` de toute application compatible DXF (LibreCAD, FreeCAD, etc.) sont relues comme des polylignes entièrement éditables dans l'éditeur.
