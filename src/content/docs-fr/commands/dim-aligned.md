---
title: Dimension Aligned — Cotes de Distance Réelle à Tout Angle
description: La commande Dimension Aligned mesure la distance réelle en ligne droite entre deux points. La ligne de cote est parallèle à la ligne p1→p2 à tout angle — contrairement à Dimension Linear qui est limitée à l'horizontal ou vertical. Export complet en DXF comme entités DIMENSION.
keywords: [cote alignée CAO, dimaligned, cote diagonale CAO, cote distance réelle, cote angulaire CAO, kulmanlab]
group: markup
order: 5
---

# Dimension Aligned

La commande `dimaligned` place une cote qui mesure la **distance réelle en ligne droite** entre deux points. La ligne de cote est parallèle à la ligne reliant les deux points, elle peut donc être à tout angle. C'est la différence clé avec [Dimension Linear](../dim-linear/), qui est limitée à l'horizontal ou au vertical.

## Anatomie d'une cote alignée

```
     ● p2
    /|
   / |  (ligne d'extension 2, perpendiculaire à la ligne de cote)
  /  |
 /←5.00→/
/  /
●  /  (ligne d'extension 1, perpendiculaire à la ligne de cote)
p1
```

- **Lignes d'extension** — perpendiculaires à la ligne de cote, tracées depuis chaque point mesuré.
- **Ligne de cote** — parallèle à p1→p2, décalée d'un côté selon la position du curseur.
- **Valeur** — la distance euclidienne réelle `|p1 – p2|`.

## Placer une cote alignée

1. Tapez `dimaligned` dans le terminal ou cliquez sur **Dimension Aligned** dans la barre d'outils.
2. **Cliquez sur l'origine de la première ligne d'extension** (p1), ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. **Cliquez sur l'origine de la deuxième ligne d'extension** (p2). La saisie de coordonnées fonctionne aussi ici.
4. **Déplacez le curseur** d'un côté pour établir le décalage perpendiculaire de la ligne de cote.
5. **Cliquez** pour placer, ou tapez une distance de décalage et appuyez sur **Entrée** pour un placement précis.

## Distance de décalage saisie

Tapez un nombre pendant le placement pour fixer la ligne de cote à une distance perpendiculaire exacte de la ligne p1→p2 :

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Ajouter un chiffre au décalage |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` / `Espace` | Placer au décalage saisi |

Le côté du curseur détermine de quel côté apparaît la ligne de cote.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Commencer la saisie de coordonnée X (phases p1/p2), ou distance de décalage (phase de placement) |
| `,` | Verrouiller X et passer à la saisie Y (phases p1/p2) |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` / `Espace` | Confirmer la coordonnée saisie ou le décalage |
| `Échap` | Annuler |

## Dimension Aligned vs Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Angle de la ligne de cote | Parallèle à p1→p2 — tout angle | Toujours horizontal ou vertical |
| Mesure | Distance euclidienne réelle | Composante X ou Y seulement |
| Verrouillage H/V | Non | Oui — touches `H` et `V` |
| Idéal pour | Éléments diagonaux, coupes angulaires | Compositions orthogonales, pièces alignées sur grille |

## Modifier le libellé — simple mode

**Double-cliquez** sur une cote alignée placée pour ouvrir l'éditeur de texte en **simple** mode. L'éditeur est prérempli avec la valeur rendue actuelle pour que vous puissiez positionner le curseur et la modifier directement.

| Feature | Comportement |
|---------|-------------|
| Bold / Italic / Font / Height | S'applique à l'**intégralité** du libellé à la fois |
| Formatage par caractère | Non pris en charge |
| `Enter` | Valide la valeur et ferme l'éditeur |
| Multiligne | Non pris en charge |

Voir [Éditeur de texte — simple mode](../../interface/text-editor/#simple-mode) pour la référence complète.

## Enchaîner les cotes

Pour ajouter d'autres cotes en continuant depuis la deuxième ligne d'extension de celle-ci, utilisez [Dimension Continue](../dim-continue/) — elle se verrouille au même angle de mesure que cette cote alignée.

## DXF — entité DIMENSION (type aligné)

Les cotes alignées sont sauvegardées comme entités `DIMENSION` avec `dimType = 1` (aligné). Les origines des lignes d'extension, la position de la ligne de cote, la position du texte, la valeur mesurée, la rotation, le style de flèche et tous les indicateurs d'affichage sont exportés sans perte.
