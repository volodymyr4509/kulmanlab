---
title: "Commande BlockInsert — Placer un bloc parmi ceux du dessin"
description: "La commande BlockInsert ouvre une palette d’aperçus des blocs du dessin. Choisissez-en un, réglez son échelle et sa rotation, puis cliquez ou tapez un point pour le placer, une fois ou à répétition."
keywords: ["insérer un bloc CAO", "palette de blocs CAO", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

La commande `InsérerBloc` ouvre une palette d’aperçus de tous les blocs du dessin et place celui que vous choisissez. Créez des blocs avec [Block Create](../block-create/), ou ouvrez un fichier DXF qui en contient.

## Placer un bloc

1. Tapez `InsérerBloc` ou cliquez sur **Insérer un bloc** dans le panneau **Blocs**. La palette s’ancre à gauche avec une vignette d’aperçu par bloc, douze par page ; les flèches sous les vignettes changent de page.
2. Tapez dans **Rechercher des blocs** pour filtrer les vignettes par nom.
3. Réglez **Échelle** (supérieure à 0) et **Rotation** en degrés. **Répéter le placement** est activé par défaut.
4. Cliquez sur la vignette d’un bloc. Le bloc suit le curseur : cliquez pour le placer par son point de base, ou tapez X,Y pour une position exacte. Une fois le curseur verrouillé sur un angle, vous pouvez taper une longueur.
5. Avec **Répéter le placement** activé, le bloc continue de suivre le curseur pour la copie suivante jusqu’à **Échap**. Désactivé, la commande se termine après une copie.

## Bon à savoir

- Pour supprimer un bloc, cliquez sur la corbeille de sa vignette et confirmez. Un bloc référencé dans le dessin ne peut pas être supprimé : sa vignette indique **Utilisé, impossible de le supprimer**.
- Un dessin sans bloc affiche **Ce dessin ne contient aucun bloc** dans la palette.
- **Échap** ferme la palette quand rien n’est en cours de placement. C’est l’un des panneaux ancrés, dont un seul est affiché à la fois à gauche.

---

*Voir aussi : [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
