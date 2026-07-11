---
title: Commande Leader+ — Ajouter un bras de pointe de flèche à un multirépère existant dans KulmanLab CAD
description: La commande Leader+ ajoute un nouveau bras de pointe de flèche à un multirépère existant. Le nouveau bras partage la brisure, le texte et tout le style du répère sélectionné. Deux clics — sélectionner le répère, placer la nouvelle pointe.
keywords: [ajouter bras répère CAO, commande leader+, ajouter flèche répère, bras multirépère, kulmanlab]
group: markup
order: 2
---

# Leader+

La commande `leader+` ajoute un nouveau bras de pointe de flèche à un multirépère existant. Le nouveau bras pointe depuis la brisure existante du répère vers une nouvelle pointe de flèche sur laquelle vous cliquez. Tout le style — position de la brisure, texte, type de pointe de flèche et taille — est hérité du répère sélectionné.

## Ajouter un bras

1. Tapez `leader+` dans le terminal.
2. **Cliquez sur un multirépère existant** pour le sélectionner.
3. **Cliquez sur la nouvelle pointe de flèche**, ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte. Une ligne d'aperçu s'affiche du curseur jusqu'à la brisure du répère.

Le bras est placé et la commande reste active — vous pouvez immédiatement cliquer sur un autre répère pour ajouter d'autres bras. Appuyez sur **Entrée**, **Espace** ou **Échap** pour terminer.

```
  Avant :                        Après :
  ◄── bras 1                     ◄── bras 1
       \                               \
        ●──── brisure ──── texte        ●──── brisure ──── texte
                                       /
                              bras 2 ──►  (nouvelle pointe sur laquelle vous avez cliqué)
```

## Saisie de coordonnées pour la pointe

Au lieu de cliquer, vous pouvez taper une position exacte :

1. Tapez la valeur X.
2. Appuyez sur `,` — le terminal confirme que X est verrouillé.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour placer.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Commencer à saisir la coordonnée X |
| `,` | Verrouiller X et passer à la saisie Y |
| `Entrée` | Confirmer la coordonnée saisie et placer le bras |
| `Entrée` / `Espace` | Terminer (quand aucune saisie n'est en cours) |
| `Échap` | Annuler et réinitialiser |

## Notes

- Seules les entités **Multirépère** peuvent être sélectionnées — cliquer sur tout autre type d'entité ne fait rien.
- Le nouveau bras part de la brisure existante ; vous choisissez seulement où va la pointe de flèche.
- Il n'y a pas de limite au nombre de bras que peut avoir un multirépère.

## Commandes associées

| Commande | Action |
|----------|--------|
| [Leader](../leader/) | Créer un nouveau multirépère depuis zéro |
| [Leader−](../leader-remove/) | Supprimer un bras d'un multirépère qui en a deux ou plus |
