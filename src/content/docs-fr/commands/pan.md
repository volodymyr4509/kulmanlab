---
sidebar_position: 1
title: Commande pan — Navigation par clic et glisser dans KulmanLab CAD
description: La commande pan entre dans un mode de glisser persistant pour déplacer la vue. Cliquez et faites glisser n'importe où sur le canevas pour déplacer la vue sans changer le niveau de zoom. Le glisser avec le bouton central de la souris fonctionne à tout moment sans activer Pan.
keywords: [déplacer vue CAO, commande pan, glisser pour naviguer, déplacer canevas CAO, navigation viewport, kulmanlab]
---

# Pan

La commande `pan` entre dans un mode de glisser persistant pour déplacer la vue — cliquez et faites glisser n'importe où sur le canevas pour déplacer la vue. Le niveau de zoom ne change pas. Le mode Pan reste actif jusqu'à ce que vous appuyiez sur `Échap`, vous pouvez donc glisser plusieurs fois en une seule activation.

## Déplacer la vue

1. Tapez `pan` dans le terminal ou cliquez sur le bouton **Pan** dans la barre d'outils.
2. **Cliquez et faites glisser** n'importe où sur le canevas pour déplacer la vue.
3. Relâchez et faites glisser à nouveau autant de fois que nécessaire.
4. Appuyez sur `Échap` pour quitter le mode Pan.

## Glisser avec le bouton central — déplacer sans activer la commande

La façon la plus rapide de déplacer : **maintenez le bouton central de la souris enfoncé et faites glisser** à tout moment, même pendant qu'une autre commande est active. Aucune activation de commande n'est nécessaire. Relâcher le bouton central revient à l'état précédent.

## Pan vs contrôles de zoom

| Action | Effet | Mode Pan requis ? |
|--------|-------|-------------------|
| Glisser clic gauche (mode Pan) | Déplace le viewport | Oui |
| Glisser clic central | Déplace le viewport | Non — fonctionne toujours |
| Molette de défilement | Zoom vers/depuis le curseur | Non — fonctionne toujours |
| Double clic bouton central | Ajuster toutes les entités | Non — fonctionne toujours |
| [Zoom In](../zoom-in/) / [Zoom Out](../zoom-out/) | Applique le zoom par pas de 1,5× | Non |
| [Fit](../fit/) | Ajuste toutes les entités dans la vue | Non |

## Référence clavier

| Touche | Action |
|--------|--------|
| `Échap` | Quitter le mode Pan |

## Conseils

- Utilisez la molette de défilement pour zoomer vers une zone cible, puis déplacez pour ajuster la position.
- **Double clic avec le bouton central de la souris** active [Fit](../fit/) instantanément — la façon la plus rapide de retrouver une vue perdue.
- Si vous êtes au milieu d'une commande (ex. en plaçant un point final de ligne), glissez avec le clic central pour déplacer sans annuler la commande.
