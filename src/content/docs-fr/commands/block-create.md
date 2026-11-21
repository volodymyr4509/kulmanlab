---
title: "Commande BlockCreate — Créer un bloc à partir d’objets"
description: "La commande BlockCreate crée un bloc nommé à partir des objets sélectionnés, avec le point de base de votre choix, et les remplace par une référence à ce bloc. Le bloc peut ensuite être placé encore et encore avec BlockInsert."
keywords: ["créer un bloc CAO", "bloc à partir d’objets CAO", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

La commande `CréerBloc` crée un **bloc** : un groupe d’objets nommé, stocké une seule fois dans le dessin et placé autant de fois que vous le voulez avec [Block Insert](../block-insert/). Les objets choisis deviennent le bloc et, dans le dessin, sont remplacés par une référence à lui : rien ne change d’aspect.

## Créer un bloc

1. Sélectionnez d’abord les objets si vous le souhaitez, puis tapez `CréerBloc` ou cliquez sur **Créer un bloc** dans le panneau **Blocs**. Une fenêtre s’ouvre avec la sélection déjà dedans.
2. Tapez un **Nom**. Il ne peut pas être vide, ne peut contenir aucun des caractères `< > / \ " : ; ? * | , =` ni un accent grave, et ne peut pas être le nom d’un autre bloc.
3. Cliquez sur **Sélectionner des objets** pour ajouter ou retirer des objets : la fenêtre se masque, et vous cliquez des objets ou faites glisser une zone. Appuyez sur **Entrée** ou **Espace** pour revenir à la fenêtre, où **Objets** indique leur nombre.
4. Définissez le **Point de base**, le point par lequel le bloc est placé : tapez son X et son Y, ou cliquez sur **Choisir un point** puis sur le canevas (ou tapez X,Y à ce moment). Il démarre à 0,0.
5. Cliquez sur **OK**. Le bloc est enregistré, les objets cèdent la place à une référence à lui au point de base, et le terminal consigne le nom du bloc et le nombre d’objets qu’il contient.

## Bon à savoir

- **OK** reste désactivé tant que quelque chose ne va pas, et le message sous les champs dit quoi : un nom vide ou inutilisable, un nom déjà pris, ou aucun objet.
- **Échap** pendant le choix des objets ou du point de base ramène à la fenêtre, le bloc tel qu’il était. **Échap** dans la fenêtre annule la commande.
- Le bloc est enregistré avec le dessin et écrit en DXF avec ses références.

---

*Voir aussi : [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
