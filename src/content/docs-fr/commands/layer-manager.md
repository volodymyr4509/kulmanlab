---
title: LayerManager — Gérer tous les calques dans un seul tableau
description: La commande LayerManager ouvre un tableau de tous les calques du dessin, permettant d'ajouter des calques, de supprimer ceux qui ne servent pas et de modifier sur place le gel, le verrouillage, le tracé, la couleur, l'épaisseur et le type de ligne de chacun.
keywords: [gestionnaire de calques, tableau des calques CAO, gérer les calques CAO, ajouter un calque CAO, supprimer un calque CAO, retirer un calque inutilisé, geler verrouiller tracer calque, gestion des calques kulmanlab]
group: layer
order: 1
---

# LayerManager

La commande `LayerManager` ouvre un tableau listant tous les calques du dessin, avec leurs réglages **Freeze**, **Lock**, **Plot**, **Couleur**, **Épaisseur de ligne** et **Type de ligne** modifiables directement dans la ligne. C'est l'endroit central pour ajouter des calques, supprimer ceux qui ne servent pas et ajuster le comportement des existants — les autres commandes de calque ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) font chacune une seule chose précise sans l'ouvrir.

## Ouvrir le Gestionnaire de Calques

- Tapez `LayerManager` dans le terminal, **ou**
- Cliquez sur le bouton **Layer Manager** dans le panneau des calques.

La boîte de dialogue s'ouvre comme un panneau flottant ; rien n'a besoin d'être sélectionné au préalable.

## Le tableau des calques

| Colonne | Ce qu'elle contrôle |
|---------|----------------------|
| Name | Le nom du calque, affiché en lecture seule dans le tableau (défini une seule fois, à la création) |
| Freeze | Masque les entités du calque et les exclut de la sélection jusqu'à ce qu'il soit dégelé |
| Lock | Empêche la modification des entités sur le calque, sans les masquer |
| Plot | Si les entités du calque sont incluses lors de l'impression ou de l'export en PDF |
| Color | La couleur ACI du calque — cliquez sur la pastille pour ouvrir le sélecteur de couleur |
| Lineweight | L'épaisseur de ligne du calque — cliquez sur la puce pour ouvrir le sélecteur d'épaisseur |
| Linetype | Le motif de tirets du calque — cliquez sur la puce pour ouvrir le sélecteur de type de ligne |
| ✕ | Supprime le calque lorsque rien ne l'utilise — voir [Supprimer un calque](#supprimer-un-calque) |

Basculer Freeze, Lock ou Plot prend effet immédiatement — il n'y a pas d'étape de sauvegarde séparée. Les entités réglées sur **ByLayer** pour la couleur, l'épaisseur de ligne ou le type de ligne (le réglage par défaut) reprennent ce que vous définissez ici ; les entités ayant leur propre substitution explicite ne sont pas affectées.

## Ajouter un calque

1. Cliquez sur **+ Add Layer** en bas du tableau.
2. Tapez un nom et appuyez sur **Entrée** pour confirmer, ou **Échap** pour annuler.

Les noms de calque peuvent contenir des lettres, des chiffres, des espaces, et `_`, `-`, `$`. Un nom vide, déjà utilisé, ou contenant tout autre caractère est rejeté avec une erreur affichée en ligne, et la ligne reste ouverte pour un nouvel essai.

Les nouveaux calques démarrent **dégelés, déverrouillés, traçables**, avec la couleur 7 (blanc/noir), l'épaisseur de ligne Default et le type de ligne Continuous — les mêmes réglages que [Import](../import/) attribue au calque `0` dans un dessin vide.

## Supprimer un calque

Chaque ligne se termine par un bouton **✕** qui retire le calque du dessin. La suppression est immédiate — il n'y a pas d'étape de confirmation — mais elle n'est proposée que pour les calques dont rien ne dépend :

| Situation | État du bouton |
|-----------|----------------|
| Le calque est vide | Actif — *Delete layer* |
| Le calque est affecté à au moins une entité | Désactivé — *Cannot delete: assigned to at least one entity* |
| Calque `0` | Aucun bouton |

**« Utilisé » couvre l'ensemble du dessin**, pas seulement ce que vous avez sous les yeux. Une entité posée sur une présentation (espace papier) compte exactement autant qu'une entité de l'espace objet : un calque peut donc paraître vide à l'écran et refuser malgré tout d'être supprimé. Les calques gelés ne font pas exception : le gel masque les entités mais ne les désaffecte pas, si bien qu'un calque gelé contenant des entités reste insupprimable.

Le calque `0` ne peut jamais être supprimé. C'est le calque de repli dont tout dessin dispose à coup sûr, aussi le bouton n'est-il tout simplement pas affiché pour lui plutôt que montré désactivé.

### « …is now in use and can't be deleted »

Il arrive que la ✕ paraisse disponible mais que le clic soit refusé par un bandeau en haut du panneau :

```
"WALLS" is now in use and can't be deleted
```

Ce n'est pas contradictoire. Déterminer quels calques sont utilisés suppose de parcourir toutes les entités du dessin ; le résultat est donc mis en cache et reconstruit uniquement quand le nombre d'entités change — bon marché à quelques centaines d'entités, plus du tout à quelques centaines de milliers. Déplacer une entité existante vers un calque ne change pas ce nombre, si bien que l'état désactivé de la ligne peut être momentanément dépassé. Le clic relance la vérification depuis zéro avant de supprimer quoi que ce soit, ce qui explique que le refus survienne au clic plutôt que de voir le calque disparaître alors que quelque chose y renvoie encore.

Fermez le bandeau par son propre **✕**. Le calque reste intact.

## Ce que vous ne pouvez pas faire ici

Le tableau n'indique pas quel calque est *courant* ; cela se règle depuis la liste déroulante du panneau des calques ou avec [LayerMakeCurrent](../layer-make-current/), pas depuis cette boîte de dialogue. Les noms de calque sont par ailleurs fixés à la création : un calque peut être supprimé puis recréé, mais pas renommé.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Entrée` | Confirmer le nom d'un nouveau calque (pendant la saisie) |
| `Échap` | Annuler l'ajout d'un calque, ou fermer la boîte de dialogue |

## Commandes associées

| Commande | Ce qu'elle fait |
|----------|----------------|
| [LayerMakeCurrent](../layer-make-current/) | Définit le calque actif pour qu'il corresponde au calque de l'entité cliquée |
| [LayerMatch](../layer-match/) | Réassigne les entités sélectionnées au calque d'une entité source |
| [LayerIsolate](../layer-isolate/) | Gèle tous les calques sauf ceux des entités sélectionnées |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Dégèle tous les calques en une seule étape |
