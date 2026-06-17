---
sidebar_position: 11
title: "Commande Leader− — Supprimer un bras de pointe de flèche d'un multirépère dans KulmanLab CAD"
description: "La commande Leader− supprime un bras de pointe de flèche d'un multirépère qui en a deux ou plus. Placez le curseur près du bras à supprimer — le bras le plus proche est mis en évidence. La brisure, le texte et les bras restants sont conservés."
keywords: [supprimer bras répère CAO, commande leader-, supprimer flèche répère, supprimer bras multirépère, kulmanlab]
---

# Leader−

La commande `leader-` supprime un bras de pointe de flèche d'un multirépère existant. Le libellé de texte, la brisure et tous les bras restants sont conservés — seul le bras sélectionné est supprimé. Un multirépère avec un seul bras ne peut pas avoir son bras supprimé.

## Supprimer un bras

1. Tapez `leader-` dans le terminal.
2. **Cliquez sur un multirépère** qui a deux bras ou plus. Si le répère sur lequel vous avez cliqué n'a qu'un seul bras, le terminal affiche une erreur et attend une sélection valide.
3. **Déplacez le curseur près du bras** que vous souhaitez supprimer — le bras le plus proche est mis en évidence avec un marqueur.
4. **Cliquez** pour supprimer ce bras.

Le bras est supprimé et la commande reste active — vous pouvez immédiatement cliquer sur un autre répère (ou le même) pour supprimer d'autres bras. Appuyez sur **Entrée**, **Espace** ou **Échap** pour terminer.

```
  Avant :                  Après :
  ◄── bras 1               ◄── bras 1
       \                         \
        ●──── brisure ──── texte   ●──── brisure ──── texte
       /
  bras 2 ──►  ← ce bras supprimé
```

## Comment le bras le plus proche est déterminé

La commande mesure la distance perpendiculaire du curseur aux segments de ligne de chaque bras (y compris le segment du dernier point du bras jusqu'à la brisure). Le bras avec la distance la plus petite est mis en évidence et sera supprimé au clic.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Entrée` / `Espace` | Terminer la suppression de bras |
| `Échap` | Annuler et réinitialiser |

## Notes

- Un répère avec **un seul bras** est protégé — vous devez d'abord ajouter un bras avant d'en supprimer un.
- La position de la brisure et le contenu du texte sont toujours conservés quel que soit le bras supprimé.

## Commandes associées

| Commande | Action |
|----------|--------|
| [Leader](./leader) | Créer un nouveau multirépère depuis zéro |
| [Leader+](./leader-add) | Ajouter un bras à un multirépère existant |
