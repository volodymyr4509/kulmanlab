---
title: Commande ViewportRectangle — Créer une Fenêtre de Mise en Page dans KulmanLab CAD
description: La commande ViewportRectangle crée une fenêtre dans une mise en page papier en sélectionnant deux coins opposés. La fenêtre affiche les entités de l'espace modèle à l'échelle par défaut de la mise en page.
keywords: [viewport rectangle, créer viewport, viewport mise en page, viewport espace papier, kulmanlab]
---

# ViewportRectangle

La commande `ViewportRectangle` crée une nouvelle fenêtre dans la mise en page papier active en sélectionnant deux coins opposés. Disponible uniquement dans l'espace de mise en page.

## Créer une fenêtre

1. Passez à une mise en page papier en utilisant l'onglet en bas de l'écran.
2. Tapez `ViewportRectangle` dans le terminal ou cliquez sur le bouton **Viewport Rectangle** dans la barre d'outils.
3. **Cliquez sur le premier coin**, ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
4. **Cliquez sur le coin opposé** — la fenêtre est placée immédiatement. La saisie de coordonnées fonctionne aussi ici.

La nouvelle fenêtre affiche le modèle complet à l'échelle par défaut de la mise en page. Utilisez la molette de la souris dans la fenêtre pour zoomer, ou faites glisser avec le bouton central pour déplacer la vue du modèle.

## Saisie de coordonnées

À chaque étape de coin, vous pouvez taper une coordonnée exacte :

1. Tapez la valeur X.
2. Appuyez sur `,` — le terminal affiche `[X], [Y{curseur}]`.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour placer le point.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Commencer la saisie de coordonnée X |
| `,` | Fixer X et passer à la saisie Y |
| `Entrée` | Confirmer la coordonnée saisie |
| `Échap` | Annuler |

## Modifier une fenêtre

Après avoir placé une fenêtre, cliquez dessus pour la sélectionner :

- **Faites glisser les bords ou coins** pour la redimensionner.
- **Faites glisser la poignée centrale** pour la déplacer.
- Utilisez le **sélecteur d'échelle** dans la barre de contrôle pour définir une échelle exacte (ex. 1:50). Pour saisir une échelle qui n'est pas dans la liste, tapez-la directement dans le champ de saisie en bas du menu déroulant — accepte le format de proportion (`1:200`, `5:1`) ou un décimal simple (`0.005`), puis appuyez sur **Entrée**.
- Cliquez droit sur une fenêtre et utilisez **Lock** pour éviter les modifications accidentelles.

## Notes

- ViewportRectangle n'est disponible que lorsqu'un onglet de mise en page papier est actif. L'exécuter dans l'espace modèle affiche un message d'erreur et quitte.
- Pour copier une fenêtre existante, utilisez [ViewportCopy](./viewport-copy).
