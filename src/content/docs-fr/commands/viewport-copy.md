---
title: Commande ViewportCopy — Dupliquer une Fenêtre dans KulmanLab CAD
description: La commande ViewportCopy duplique une fenêtre sélectionnée vers une nouvelle position dans la même mise en page, en préservant l'échelle et la configuration de la vue du modèle. Prend en charge la saisie de coordonnées exactes, le verrouillage d'angle et la saisie de distance.
keywords: [copier fenêtre, dupliquer viewport, copier viewport mise en page, verrouillage angle viewport, coordonnée exacte viewport, kulmanlab]
---

# ViewportCopy

La commande `ViewportCopy` copie une fenêtre vers une nouvelle position, en préservant son échelle et le centre du modèle. Disponible uniquement dans l'espace de mise en page.

## Copier une fenêtre

1. Passez à un onglet de mise en page papier.
2. Optionnellement, cliquez sur une fenêtre pour la pré-sélectionner.
3. Tapez `ViewportCopy` dans le terminal ou cliquez sur le bouton **Viewport Copy** dans la barre d'outils.
4. Si aucune fenêtre n'a été pré-sélectionnée, **cliquez sur la fenêtre** à copier.
5. **Cliquez sur le point de base** — la référence pour le décalage. Ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
6. **Cliquez sur la destination** — la fenêtre est placée au décalage base→destination. Ou utilisez la saisie de coordonnées / verrouillage d'angle.

Après le placement, la commande reste active — cliquez sur une autre destination pour placer une autre copie de la même fenêtre. Appuyez sur **Entrée**, **Espace** ou **Échap** pour terminer.

## Saisie de coordonnées

Aux étapes du point de base et de la destination, vous pouvez taper une coordonnée exacte au lieu de cliquer :

1. Tapez la valeur X.
2. Appuyez sur `,` — le terminal affiche `[X], [Y{curseur}]`.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour confirmer.

## Verrouillage d'angle et distance exacte

Après avoir défini le point de base, la commande s'accroche aux axes à 45° (0°, 45°, 90°, 135°, …) quand le curseur s'aligne. Pendant le verrouillage :

- L'aperçu s'accroche à l'axe.
- Tapez une distance et appuyez sur **Entrée** pour placer la copie exactement à ce décalage dans la direction verrouillée.

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Ajouter un chiffre à la valeur de distance |
| `-` | Distance négative (inverse la direction ; seulement comme premier caractère) |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Placer la copie à la distance saisie |

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Commencer la saisie de coordonnée X, ou distance quand l'angle est verrouillé |
| `,` | Fixer X et passer à la saisie Y |
| `Entrée` | Confirmer la coordonnée ou distance saisie |
| `Entrée` / `Espace` | Terminer (quand aucune saisie en cours) |
| `Échap` | Annuler et réinitialiser |

## Notes

- ViewportCopy n'est disponible que lorsqu'un onglet de mise en page papier est actif.
- La fenêtre copiée hérite de la même échelle, du même centre de modèle, du même état de verrouillage et des mêmes dimensions que l'originale.
- Pour créer une nouvelle fenêtre depuis zéro, utilisez [ViewportRectangle](../viewport-rectangle/).
