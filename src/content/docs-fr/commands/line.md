---
title: Commande Line — Tracer, enchaîner, raccorder et prolonger des lignes dans KulmanLab CAD
description: La commande Line trace des segments de droite individuels pouvant être enchaînés bout à bout. Les lignes sont le seul type d'entité sur lequel Trim et Extend fonctionnent. Aller-retour DXF complet en tant qu'entités LINE.
keywords: [commande line CAO, tracer ligne droite CAO, enchaîner segments de ligne, raccorder ligne CAO, prolonger ligne CAO, verrouillage angle CAO, entité DXF LINE, kulmanlab]
group: shapes
order: 1
---

# Line

La commande `line` trace des segments de droite individuels stockés comme entités `LINE` séparées dans le modèle DXF. Après chaque segment, la commande reste active et réutilise le point final comme nouveau point de départ, vous permettant de construire des chemins connectés un segment à la fois. Contrairement à une [Polyligne](../polyline/), les lignes enchaînées restent des entités indépendantes — chacune peut être raccordée, prolongée ou supprimée sans affecter ses voisines.

## Tracer des lignes

1. Tapez `line` dans le terminal ou cliquez sur le bouton **Line** de la barre d'outils.
2. **Cliquez sur le point de départ**, ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. **Cliquez sur le point final** — le segment est placé et le point final devient le nouveau point de départ. La saisie de coordonnées fonctionne également ici.
4. Continuez à cliquer (ou à taper) pour enchaîner d'autres segments.
5. Appuyez sur **Entrée** ou **Échap** pour arrêter.

```
  ●──────────●──────────●──────────●
 début    2e clic    3e clic    Entrée pour terminer
            (devient automatiquement le prochain départ)
```

Vous n'avez besoin que d'un seul segment ? Appuyez sur **Entrée** ou **Échap** juste après l'étape 3.

## Saisie de coordonnées

Au lieu de cliquer, tapez une position exacte pour le départ ou tout point suivant :

1. Tapez la valeur X (chiffres, `.` ou `-`).
2. Appuyez sur `,` — le terminal affiche `[X], [Y{curseur}]`.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour placer le point.

## Verrouillage d'angle et saisie de longueur exacte

En déplaçant le curseur après avoir placé un point, la commande surveille un axe d'accrochage à 45° (0°, 45°, 90°, 135°, …). L'angle se **verrouille** quand :

- le curseur est au moins **5 × taille de poignée** de l'ancre, **et**
- est à moins d'**1 taille de poignée** de distance perpendiculaire de l'axe le plus proche.

Lorsqu'il est verrouillé, l'aperçu s'accroche à l'axe et vous pouvez saisir une longueur exacte :

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Ajouter un chiffre à la valeur de longueur |
| `-` | Longueur négative — inverse la direction le long de l'axe (premier caractère uniquement) |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Placer le point final à la distance saisie |

La valeur accumulée s'affiche en temps réel dans le terminal (ex. `click end point or enter length: 12.5`). Cliquer pendant le verrouillage projette le clic sur l'axe, le point final se trouve toujours exactement sur celui-ci.

Revenir près du point d'ancre désactive le verrouillage.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X, ou distance quand l'angle est verrouillé |
| `,` | Verrouiller X et passer à la saisie Y |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée ou longueur saisie, ou terminer la chaîne si rien n'est saisi |
| `Échap` | Terminer la chaîne et quitter |

## Édition par poignées — étirer les points finaux

Une ligne sélectionnée affiche trois poignées :

| Poignée | Position | Ce qu'elle fait |
|---------|----------|----------------|
| **Départ** | Premier point final | Faites glisser pour repositionner — la fin reste fixe |
| **Point médian** | Centre de la ligne | Active **Move** pour toute la ligne |
| **Fin** | Deuxième point final | Faites glisser pour repositionner — le départ reste fixe |

Étirer un point final n'affecte jamais l'autre. Cela diffère de l'édition par poignées de [Polyligne](../polyline/), où déplacer un sommet reforme tout le chemin.

## Sélectionner des lignes

| Méthode | Comportement |
|---------|-------------|
| **Clic** | Sélectionne la ligne si le clic est à portée du segment |
| **Glisser à droite** (strict) | La ligne est sélectionnée uniquement si les deux points finaux sont dans le cadre |
| **Glisser à gauche** (croisé) | La ligne est sélectionnée si une partie du segment croise le cadre |

## Commandes d'édition supportées

Les lignes sont la **seule** entité sur laquelle opèrent [Trim](../trim/) et [Extend](../extend/). Toutes les commandes de transformation standard s'appliquent également :

| Commande | Ce qui arrive à une ligne |
|----------|--------------------------|
| [Move](../move/) | Translate les deux points finaux du même déplacement |
| [Copy](../copy/) | Crée une ligne identique à une nouvelle position |
| [Rotate](../rotate/) | Fait pivoter les deux points finaux autour du point de base choisi |
| [Mirror](../mirror/) | Symétrise les deux points finaux par rapport à l'axe de symétrie |
| [Scale](../scale/) | Met à l'échelle les deux points finaux uniformément depuis le point de base |
| [Offset](../offset/) | Crée une ligne parallèle à une distance perpendiculaire fixe |
| [Trim](../trim/) | Coupe la ligne aux intersections — **lignes uniquement** |
| [Extend](../extend/) | Étire le point final le plus proche jusqu'à atteindre une limite — **lignes uniquement** |
| [Delete](../delete/) | Supprime la ligne du dessin |

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
| Départ X / Départ Y | Coordonnées du premier point final |
| Fin X / Fin Y | Coordonnées du deuxième point final |

## Line vs Polyligne — quand utiliser laquelle

| | Line | Polyligne |
|---|------|-----------|
| Nombre d'entités | Un `LINE` par segment | Un `LWPOLYLINE` pour tout le chemin |
| Trim / Extend | Oui — segment par segment | Non |
| Forme fermée | Non | Oui (indicateur de fermeture) |
| Édition par poignées | Étirer les points finaux individuels | Déplacer tout sommet le long du chemin |
| Idéal pour | Lignes de construction, segments individuels, géométrie à raccorder | Contours, profils, formes à conserver entières |

## DXF — entité LINE

Les lignes sont enregistrées comme entités `LINE` dans le fichier DXF. Chaque propriété — coordonnées de départ/fin, couleur, calque, type de ligne, échelle de type de ligne et épaisseur — fait l'aller-retour sans perte. Lorsque vous ouvrez un DXF contenant des entités `LINE`, elles deviennent des objets `Line` entièrement éditables dans l'éditeur.
