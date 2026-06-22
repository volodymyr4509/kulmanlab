---
sidebar_position: 5
title: Commande Scale — Redimensionner des entités uniformément autour d'un point de base dans KulmanLab CAD
description: La commande Scale redimensionne les entités sélectionnées uniformément par un facteur saisi autour d'un point de base fixe. Le facteur est toujours saisi au clavier — il n'y a pas de mise à l'échelle par clic. Un facteur supérieur à 1 agrandit ; inférieur à 1 réduit. Tous les types d'entités sont supportés.
keywords: [commande scale CAO, redimensionner entités CAO, mise à l'échelle objets CAO, scale uniforme CAO, facteur d'échelle CAO, agrandir réduire CAO, kulmanlab]
---

# Scale

La commande `scale` redimensionne les entités sélectionnées uniformément autour d'un point de base. Toutes les distances depuis le point de base sont multipliées par le facteur d'échelle — un facteur de `2` double toutes les dimensions, `0.5` les divise par deux. Le facteur est toujours saisi en tapant ; il n'y a pas de mise à l'échelle par clic.

## Deux façons de démarrer

**Pré-sélectionner, puis mettre à l'échelle** — sélectionnez d'abord les entités, puis activez :

1. Sélectionnez une ou plusieurs entités sur le canevas.
2. Tapez `scale` dans le terminal ou cliquez sur le bouton **Scale** de la barre d'outils.
3. **Cliquez sur le point de base** — le point fixe qui ne bouge pas pendant la mise à l'échelle. Ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
4. **Tapez le facteur d'échelle** et appuyez sur **Entrée**.

**Activer, puis sélectionner** — démarrez la commande sans rien de sélectionné :

1. Tapez `scale` ou cliquez sur le bouton de la barre d'outils.
2. **Sélectionnez les objets** — cliquez pour basculer, ou faites glisser pour sélectionner par zone.
3. Appuyez sur **Entrée** ou **Espace** pour confirmer la sélection.
4. **Cliquez sur le point de base** (la saisie de coordonnées est disponible), puis tapez le facteur.

```
  Base ●                Base ●
        [entité]   →          [entité plus grande]
  facteur = 2 → les distances depuis ● sont doublées
```

## Saisir le facteur d'échelle

Après que le point de base est placé, le terminal affiche `entrez le facteur d'échelle :` et attend la saisie au clavier :

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Ajouter un chiffre au facteur |
| `-` | Facteur négatif (premier caractère uniquement — inverse puis met à l'échelle) |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Appliquer la mise à l'échelle au facteur saisi |

Le facteur doit être non nul. Valeurs courantes :

| Facteur | Effet |
|---------|-------|
| `2` | Double toutes les dimensions |
| `0.5` | Divise toutes les dimensions par deux |
| `1.5` | Augmente de 50% |
| `-1` | Symétrise par rapport au point de base (équivalent à une rotation de 180°) |

Il n'y a pas d'aperçu en direct pendant la saisie — le résultat mis à l'échelle n'apparaît qu'après avoir appuyé sur **Entrée**.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Entrée` / `Espace` | Confirmer la sélection |
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X (phase point de base), ou facteur d'échelle (phase facteur) |
| `,` | Verrouiller X et passer à la saisie Y (phase point de base) |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée ou appliquer la mise à l'échelle |
| `Échap` | Annuler et réinitialiser |

## Sélection pendant la commande

| Méthode | Comportement |
|---------|-------------|
| **Clic** | Bascule l'entité sous le curseur |
| **Glisser à droite** (strict) | Ajoute les entités entièrement à l'intérieur du cadre |
| **Glisser à gauche** (croisement) | Ajoute les entités qui intersectent le cadre |
| **Entrée** / **Espace** | Confirme la sélection |

## Ce qui est mis à l'échelle

Tous les types d'entités sont supportés. Chaque entité met à l'échelle sa géométrie par rapport au point de base :

| Entité | Ce qui change |
|--------|--------------|
| Line | Les deux points finaux mis à l'échelle depuis le point de base |
| Circle | Centre mis à l'échelle depuis le point de base ; rayon multiplié par le facteur |
| Arc | Centre mis à l'échelle ; rayon multiplié par le facteur ; angles inchangés |
| Ellipse | Centre mis à l'échelle ; les deux longueurs de demi-axe multipliées par le facteur |
| Polyline / Rectangle | Chaque sommet mis à l'échelle depuis le point de base |
| Text | Point d'ancrage mis à l'échelle ; hauteur multipliée par le facteur |
| Spline | Tous les sommets de contrôle / points d'ajustement mis à l'échelle |
