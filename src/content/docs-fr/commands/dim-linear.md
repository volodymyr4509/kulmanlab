---
sidebar_position: 13
title: Commande Dimension Linear — Cotes Horizontales et Verticales dans KulmanLab CAD
description: La commande Dimension Linear mesure la distance horizontale ou verticale entre deux points. La ligne de cote est toujours alignée sur les axes — appuyez sur H ou V pour verrouiller l'orientation, ou laissez la position du curseur le décider automatiquement. Export complet en DXF comme entités DIMENSION.
keywords: [cote linéaire CAO, cote horizontale CAO, cote verticale CAO, dimlinear, verrouillage orientation H V, décalage cote, kulmanlab]
---

# Dimension Linear

La commande `dimlinear` place une cote horizontale ou verticale entre deux origines de lignes d'extension. La ligne de cote est toujours parfaitement horizontale ou parfaitement verticale — elle ne peut pas être placée à un angle arbitraire. Utilisez [Dimension Aligned](./dim-aligned) quand vous avez besoin d'une cote parallèle à une ligne diagonale.

## Anatomie d'une cote linéaire

```
  |←————— 5.00 —————→|
  |                   |
  ●  (ligne ext. 1)   ●  (ligne ext. 2)
  p1                  p2
```

- **Lignes d'extension** — descendent depuis chaque point mesuré perpendiculairement à la ligne de cote.
- **Ligne de cote** — horizontale (mesure la distance X) ou verticale (mesure la distance Y).
- **Valeur** — la distance projetée le long de l'axe choisi, pas la distance réelle point à point.

## Placer une cote linéaire

1. Tapez `dimlinear` dans le terminal ou cliquez sur **Dimension Linear** dans la barre d'outils.
2. **Cliquez sur l'origine de la première ligne d'extension** (p1), ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. **Cliquez sur l'origine de la deuxième ligne d'extension** (p2). La saisie de coordonnées fonctionne aussi ici.
4. **Déplacez le curseur** pour positionner la ligne de cote. L'orientation est détectée automatiquement selon la position du curseur.
5. **Cliquez** pour placer, ou tapez une distance de décalage et appuyez sur **Entrée** pour un placement précis.

## Détection automatique de l'orientation

Quand aucune orientation n'est forcée, la commande lit la position du curseur par rapport aux deux points mesurés :

| Position du curseur | Orientation détectée | Ce qui est mesuré |
|---------------------|---------------------|-------------------|
| Au-dessus ou en dessous des points | Horizontale | Δ X entre p1 et p2 |
| À gauche ou à droite des points | Verticale | Δ Y entre p1 et p2 |

Appuyez sur **H** pour verrouiller horizontal ou **V** pour verrouiller vertical à tout moment pendant la phase de placement. Une fois verrouillée, l'orientation ne change plus en déplaçant le curseur.

## Distance de décalage saisie

Tapez un nombre pendant le placement pour fixer la ligne de cote à une distance exacte des points mesurés :

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Ajouter un chiffre à la distance de décalage |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` / `Espace` | Placer à la distance saisie |

Le côté du curseur (dessus/dessous pour horizontal, gauche/droite pour vertical) détermine le signe — la ligne de cote apparaît du côté où se trouve actuellement le curseur.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Commencer la saisie de coordonnée X (phases p1/p2), ou distance de décalage (phase de placement) |
| `,` | Verrouiller X et passer à la saisie Y (phases p1/p2) |
| `H` | Verrouiller l'orientation horizontale (phase de placement uniquement) |
| `V` | Verrouiller l'orientation verticale (phase de placement uniquement) |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` / `Espace` | Confirmer la coordonnée saisie ou le décalage |
| `Échap` | Annuler |

## Dimension Linear vs Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Axe | Toujours H ou V | Parallèle à la ligne mesurée |
| Mesure | Composante X ou Y seulement | Distance euclidienne réelle |
| Touches H/V | Oui — verrouiller l'orientation | Non — suit toujours p1→p2 |
| Idéal pour | Compositions orthogonales, plans | Éléments diagonaux, coupes angulaires |

## Modifier le libellé — simple mode

**Double-cliquez** sur une cote linéaire placée pour ouvrir l'éditeur de texte en **simple** mode. L'éditeur est prérempli avec la valeur rendue actuelle pour que vous puissiez positionner le curseur et la modifier directement.

| Feature | Comportement |
|---------|-------------|
| Bold / Italic / Font / Height | S'applique à l'**intégralité** du libellé à la fois |
| Formatage par caractère | Non pris en charge |
| `Enter` | Valide la valeur et ferme l'éditeur |
| Multiligne | Non pris en charge |

Voir [Éditeur de texte — simple mode](../interface/text-editor#simple-mode) pour la référence complète.

## Enchaîner les cotes

Pour ajouter d'autres cotes en continuant depuis la dernière ligne d'extension, utilisez [Dimension Continue](./dim-continue) immédiatement après avoir placé celle-ci.

## DXF — entité DIMENSION

Les cotes linéaires sont sauvegardées comme entités `DIMENSION` avec `rotationDeg` défini à `0` (horizontal) ou `90` (vertical). Les origines des lignes d'extension, la position de la ligne de cote, la position du texte, la valeur mesurée, le style de flèche, la hauteur du texte et tous les indicateurs d'affichage sont exportés sans perte.
