---
title: Commande Spline CV — Tracer des B-splines en plaçant des sommets de contrôle dans KulmanLab CAD
description: La commande Spline CV trace une B-spline cubique en plaçant des sommets de contrôle. La courbe est attirée vers les sommets mais ne passe que par le premier et le dernier (nœuds serrés). Chaque poignée SC peut être glissée pour remodeler la courbe après placement. Aller-retour DXF complet en tant qu'entités SPLINE.
keywords: [commande spline CAO, B-spline sommets de contrôle, spline serrée CAO, tracer spline CAO, entité SPLINE DXF, édition poignée spline, kulmanlab]
group: shapes
order: 8
---

# Spline CV

La commande `splinecv` trace une **B-spline cubique** en plaçant des sommets de contrôle (SC). La courbe résultante est attirée vers chaque SC mais ne les traverse pas — sauf au premier et au dernier sommet, où les **nœuds serrés** ancrent la courbe exactement. Cela vous donne un contrôle de forme intuitif : tirez un sommet pour pousser la courbe vers lui sans la forcer à toucher chaque point.

## Tracer une spline par sommets de contrôle

1. Tapez `splinecv` dans le terminal ou cliquez sur le bouton **Spline CV** de la barre d'outils.
2. **Cliquez pour placer des sommets de contrôle** — chaque clic ajoute un sommet. Ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. Appuyez sur **Entrée** pour terminer (au moins 2 sommets requis).

```
  SC ●         ● SC
      \       /
       \     /    ← courbe attirée vers les SC
        \   /         mais ne les traversant pas
  SC ●   ●   ● SC (début/fin : la courbe touche ici)
```

L'aperçu en direct se met à jour lorsque vous déplacez le curseur après chaque sommet, montrant à quoi ressemblera la spline avec le point suivant à la position du curseur. Appuyez sur **Échap** pour abandonner tous les sommets placés et quitter.

## Saisie de coordonnées

Au lieu de cliquer, tapez une position exacte pour tout sommet de contrôle :

1. Tapez la valeur X.
2. Appuyez sur `,` — le terminal affiche `[X], [Y{curseur}]`.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour placer le sommet.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X |
| `,` | Verrouiller X et passer à la saisie Y |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée saisie, ou terminer la spline si aucune saisie n'est en cours et ≥ 2 sommets existent |
| `Échap` | Abandonner tous les sommets et quitter |

## Édition par poignées — remodeler via les sommets de contrôle

Une spline SC sélectionnée expose une poignée par sommet de contrôle :

| Poignée | Position | Ce qu'elle fait |
|---------|----------|----------------|
| **Sommet de contrôle** | À chaque position SC | Faites glisser pour déplacer ce SC — la courbe se reforme vers la nouvelle position |

Il n'y a pas de poignée "déplacer toute la spline". Pour translater toute la spline, utilisez la commande [Move](../move/).

## Sélectionner des splines CV

| Méthode | Comportement |
|---------|-------------|
| **Clic** | Sélectionne si le clic atterrit près d'un point sur la courbe |
| **Glisser à droite** (strict) | Tous les points d'échantillonnage le long de la courbe doivent être à l'intérieur du cadre de sélection |
| **Glisser à gauche** (croisement) | Toute partie de la courbe qui croise la limite du cadre de sélection la sélectionne |

## Commandes d'édition supportées

| Commande | Ce qui arrive à la spline |
|----------|-----------------------------|
| [Move](../move/) | Translate tous les sommets de contrôle du même déplacement |
| [Copy](../copy/) | Crée une spline identique à une nouvelle position |
| [Rotate](../rotate/) | Fait pivoter tous les SC autour du point de base choisi |
| [Mirror](../mirror/) | Symétrise tous les SC par rapport à l'axe de symétrie |
| [Scale](../scale/) | Met à l'échelle tous les SC uniformément depuis le point de base |
| [Delete](../delete/) | Supprime la spline |

Les splines ne supportent pas **Offset**, **Trim**, ni **Extend**.

## Propriétés

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
| Degree | Degré polynomial — toujours 3 (cubique) |
| Control Vertices | Coordonnées de tous les SC |
| Fit Points | Vide pour les splines SC ; renseigné uniquement pour les splines par points d'interpolation |

## Spline CV vs Spline Fit — laquelle utiliser

| | Spline CV | Spline Fit |
|---|-----------|------------|
| La courbe passe par les points | Premier et dernier uniquement (serrés) | Chaque point cliqué exactement |
| Contrôle de forme | Attirer les SC vers une région | Déplacer les points que la courbe doit toucher |
| Effet de l'édition par poignée | SC déplacé → courbe attirée | Point d'interpolation déplacé → courbe re-interpolée |
| Idéal pour | Courbes esthétiques lisses, chemins libres | Courbes devant passer par des coordonnées spécifiques |

## DXF — entité SPLINE (forme sommets de contrôle)

Les splines SC sont enregistrées comme entités `SPLINE` dans le fichier DXF, stockant le degré, le vecteur de nœuds et les coordonnées de tous les sommets de contrôle. Toutes les propriétés — couleur, calque, type de ligne, échelle de type de ligne et épaisseur — font l'aller-retour sans perte. Le `splineFlag` est défini à `9` (spline SC) pour que la forme soit préservée au rechargement. Toute application DXF qui supporte les entités `SPLINE` avec données SC les lit correctement.
