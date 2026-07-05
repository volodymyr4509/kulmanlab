---
sidebar_position: 16
title: Commande Dimension Radius — Annoter les Rayons des Arcs et Cercles dans KulmanLab CAD
description: La commande Dimension Radius place une cote radiale avec préfixe R sur un arc ou un cercle. Cliquez sur l'entité, puis déplacez le curseur pour orienter la ligne de cote du centre vers la circonférence. Export complet en DXF comme entités DIMENSION de type rayon.
keywords: [cote rayon CAO, dimradius, annoter rayon cercle, cote rayon arc, cote préfixe R, kulmanlab]
---

# Dimension Radius

La commande `dimradius` place une cote de rayon sur un arc ou un cercle. La ligne de cote va du centre à un point sur la circonférence dans la direction du curseur, étiquetée `R <valeur>`. Pour coter un diamètre complet, utilisez [Dimension Diameter](../dim-diameter/).

## Anatomie d'une cote de rayon

```
  ● (centre)
   \
    \  R 5.00
     \
      ●────── texte (côté curseur)
   (point de l'arc)
```

- **Ligne de cote** — du centre à travers un point de l'arc vers le curseur, avec une pointe de flèche sur l'arc.
- **Étiquette** — `R` suivi de la valeur du rayon.

## Placer une cote de rayon

1. Tapez `dimradius` dans le terminal ou cliquez sur **Dimension Radius** dans la barre d'outils.
2. **Cliquez sur un arc ou un cercle** pour le sélectionner.
3. **Déplacez le curseur** pour orienter la ligne de cote — le point de l'arc suit la direction du curseur depuis le centre.
4. **Cliquez** pour placer la cote.

Seules les entités **Arc** et **Circle** peuvent être sélectionnées. Cliquer sur tout autre type d'entité ne fait rien.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Échap` | Annuler |

## Dimension Radius vs Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Mesure | Rayon (centre au bord) | Diamètre (bord à bord en passant par le centre) |
| Ligne de cote | Centre → point de l'arc | Point de l'arc → point de l'arc (en passant par le centre) |
| Préfixe de l'étiquette | `R` | `⌀` |
| Pointes de flèche | Une (sur le point de l'arc) | Deux (sur les deux points de l'arc) |
| Idéal pour | Annoter un côté d'un élément courbe | Annoter les dimensions circulaires complètes |

## Modifier le libellé — simple mode

**Double-cliquez** sur une cote de rayon placée pour ouvrir l'éditeur de texte en **simple** mode. L'éditeur est prérempli avec la valeur rendue actuelle (p. ex. `R 5.00`) pour que vous puissiez positionner le curseur et la modifier directement.

| Feature | Comportement |
|---------|-------------|
| Bold / Italic / Font / Height | S'applique à l'**intégralité** du libellé à la fois |
| Formatage par caractère | Non pris en charge |
| `Enter` | Valide la valeur et ferme l'éditeur |
| Multiligne | Non pris en charge |

Voir [Éditeur de texte — simple mode](../../interface/text-editor/#simple-mode) pour la référence complète.

## DXF — entité DIMENSION de type rayon

Les cotes de rayon sont sauvegardées comme entités `DIMENSION` avec géométrie de type rayon, stockant les coordonnées du centre, la position du point de l'arc et la valeur du rayon mesuré. Toutes les propriétés sont exportées sans perte.
