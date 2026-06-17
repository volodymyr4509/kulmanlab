---
sidebar_position: 2
title: Commande Polyline — Tracer des chemins multi-segments comme une seule entité dans KulmanLab CAD
description: La commande Polyline trace n'importe quel nombre de segments connectés stockés comme une seule entité LWPOLYLINE. Les poignées de sommet et de milieu de segment permettent de remodeler toute partie du chemin après création. Supporte l'offset ; ne supporte pas Trim ni Extend.
keywords: [commande polyline CAO, tracer polyligne CAO, chemin multi-segments CAO, LWPOLYLINE DXF, remodeler polyligne, poignée sommet CAO, offset polyligne, kulmanlab]
---

# Polyline

La commande `polyline` trace un chemin connecté de n'importe quel nombre de segments droits, tous stockés comme une seule entité `LWPOLYLINE`. Parce que tout le chemin est un seul objet, le sélectionner sélectionne chaque segment à la fois — déplacez, faites pivoter ou mettez à l'échelle toute la forme en une seule opération. C'est la distinction clé avec les [Lines](./line) enchaînées, où chaque segment est une entité indépendante.

## Tracer une polyligne

1. Tapez `polyline` dans le terminal ou cliquez sur le bouton **Polyline** de la barre d'outils.
2. **Cliquez sur le premier point**, ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. **Cliquez sur chaque point suivant** — chaque clic ajoute un segment. La saisie de coordonnées fonctionne à chaque étape.
4. Appuyez sur **Entrée** ou **Espace** pour terminer (nécessite au moins 2 points placés).

Appuyer sur **Échap** à tout moment abandonne tous les points placés et quitte la commande.

## Saisie de coordonnées

Au lieu de cliquer, tapez une position exacte pour tout sommet :

1. Tapez la valeur X.
2. Appuyez sur `,` — le terminal affiche `[X], [Y{curseur}]`.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour placer le sommet.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X, ou longueur de segment quand l'angle est verrouillé |
| `,` | Verrouiller X et passer à la saisie Y |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée ou longueur, ou terminer la polyligne si ≥ 2 points existent |
| `Espace` | Terminer la polyligne |
| `Échap` | Abandonner tous les points et quitter |

## Édition par poignées

Une polyligne sélectionnée affiche deux types de poignées :

| Poignée | Position | Ce qu'elle fait |
|---------|----------|----------------|
| **Sommet** | À chaque point placé | Faites glisser pour repositionner ce sommet |
| **Milieu de segment** | Centre de chaque segment | Faites glisser pour translater les deux extrémités du segment ensemble |

## Commandes d'édition supportées

| Commande | Ce qui arrive à la polyligne |
|----------|------------------------------|
| [Move](./move) | Translate tous les sommets du même déplacement |
| [Copy](./copy) | Crée une polyligne identique à une nouvelle position |
| [Rotate](./rotate) | Fait pivoter tous les sommets autour du point de base |
| [Mirror](./mirror) | Symétrise tous les sommets par rapport à l'axe de symétrie |
| [Scale](./scale) | Met à l'échelle tous les sommets uniformément depuis le point de base |
| [Offset](./offset) | Crée une polyligne parallèle à une distance perpendiculaire fixe |
| [Delete](./delete) | Supprime la polyligne du dessin |

## Propriétés

**Général**

| Propriété | Défaut | Signification |
|-----------|--------|---------------|
| Couleur | 256 (ByLayer) | Index couleur ACI |
| Calque | `0` | Affectation de calque |
| Type de ligne | ByLayer | Motif de type de ligne nommé |
| Échelle type de ligne | 1 | Facteur d'échelle du motif |
| Épaisseur | 0 | Épaisseur d'extrusion |

**Géométrie**

| Propriété | Signification |
|-----------|---------------|
| Fermé | Si le dernier sommet se connecte au premier |
| Nombre de sommets | Nombre total de sommets |
| Sommets | Liste de coordonnées de tous les sommets |

## DXF — entité LWPOLYLINE

Les polylignes sont enregistrées comme entités `LWPOLYLINE` dans le fichier DXF. Toutes les propriétés font l'aller-retour sans perte.
