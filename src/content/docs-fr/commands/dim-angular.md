---
sidebar_position: 9
title: Dimension Angular — Mesurer les Angles Entre Lignes, Arcs et Cercles dans KulmanLab CAD
description: La commande DimensionAngular place une annotation de cote angulaire sur des lignes, arcs ou cercles. Elle prend en charge l'angle entre deux lignes, l'arc d'extension et les modes de secteur de cercle.
keywords: [cote angulaire CAO, cote d'angle, mesurer angle entre lignes, DimensionAngular, cote d'arc, annotation angulaire, kulmanlab]
---

# Dimension Angular

La commande `DimensionAngular` place une annotation de **cote angulaire** en arc sur le dessin. Elle mesure et étiquète l'angle entre deux lignes, l'étendue d'un arc ou le secteur d'un cercle.

## Comment activer

Cliquez sur le bouton **Dimension Angular** dans la barre d'outils du panneau Annotations, ou tapez `DimensionAngular` dans le terminal.

## Trois modes de saisie

Le premier clic détermine le mode utilisé :

### Deux lignes

1. **Cliquez sur la première ligne.** La position du curseur détermine quel côté de la ligne est utilisé.
2. **Cliquez sur la deuxième ligne.** Les deux lignes doivent se croiser (l'intersection est calculée automatiquement ; elle n'a pas besoin d'être visible à l'écran).
3. **Cliquez pour placer** l'arc de cote. Déplacez le curseur pour choisir le rayon et quel secteur angulaire est étiqueté — l'annotation suit le curseur vers le côté du sommet où vous vous trouvez.

Les lignes parallèles ne peuvent pas former une cote angulaire ; la commande ignore le deuxième clic si les lignes ne se croisent pas.

### Arc

1. **Cliquez sur un arc.** La cote est créée immédiatement depuis l'angle de départ jusqu'à l'angle d'arrivée de l'arc, en utilisant le centre de l'arc comme sommet.
2. **Cliquez pour placer** l'arc de cote au rayon souhaité.

### Cercle

1. **Cliquez sur un cercle.** Le premier extrémité de l'angle s'accroche au point le plus proche sur le cercle.
2. **Cliquez sur un deuxième point** du cercle pour définir la deuxième extrémité de l'angle.
3. **Cliquez pour placer** l'arc de cote.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Échap` | Annuler et revenir à la première sélection |

## Détails de comportement

- L'arc de cote est toujours dessiné du côté du sommet où vous le placez — déplacez le curseur de l'autre côté du sommet pour passer à l'angle supplémentaire.
- L'angle mesuré s'affiche en degrés et se met à jour en direct pendant que vous déplacez le curseur lors du placement.
- L'annotation résultante est une entité `DimensionAngular` complète stockée dans le calque courant. Ses propriétés d'apparence (taille de flèche, hauteur de texte, longueur de ligne d'extension) peuvent être ajustées dans le panneau Propriétés.
- Les cotes angulaires sont incluses dans l'export JSON mais ne sont pas compatibles avec l'exporteur DXF.

## Modifier le libellé — simple mode

**Double-cliquez** sur une cote angulaire placée pour ouvrir l'éditeur de texte en **simple** mode. L'éditeur est prérempli avec la valeur rendue actuelle pour que vous puissiez positionner le curseur et la modifier directement.

| Feature | Comportement |
|---------|-------------|
| Bold / Italic / Font / Height | S'applique à l'**intégralité** du libellé à la fois |
| Formatage par caractère | Non pris en charge |
| `Enter` | Valide la valeur et ferme l'éditeur |
| Multiligne | Non pris en charge |

Voir [Éditeur de texte — simple mode](../interface/text-editor#simple-mode) pour la référence complète.

## Commandes associées

- [Dimension Linear](../dim-linear/) — cote horizontale ou verticale
- [Dimension Aligned](../dim-aligned/) — cote alignée sur deux points
- [Dimension Radius](../dim-radius/) — cote de rayon pour arcs et cercles
- [Dimension Diameter](../dim-diameter/) — cote de diamètre pour cercles
