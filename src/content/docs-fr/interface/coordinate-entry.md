---
title: "Saisie de coordonnées — taper des points exacts, relatifs et polaires"
description: "Dès qu’une commande demande un point, tapez-le au lieu de cliquer : X,Y pour une position exacte, @X,Y pour mesurer depuis le dernier point, et distance<angle pour un point polaire. Le bouton Rel rend chaque point tapé relatif."
keywords: ["saisie de coordonnées CAO", "coordonnées relatives CAO", "coordonnées polaires CAO", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Saisie de coordonnées

Dès qu’une commande demande un point — le début d’une [Line](../../commands/line/), un coin d’un [Rectangle](../../commands/rectangle/), le point de base d’un [Move](../../commands/move/) ou une poignée que vous faites glisser —, vous pouvez le taper au lieu de cliquer. Commencez à taper un nombre et le terminal affiche la saisie ; appuyez sur **Entrée** ou **Espace** pour placer le point.

## Quatre façons d’écrire un point

| Vous tapez | Le point est |
|---|---|
| `100,50` | En X 100, Y 50 |
| `@100,50` | À 100 en X et 50 en Y du dernier point |
| `100<45` | À 100 de l’origine, à 45° |
| `@100<45` | À 100 du dernier point, à 45° |

Les angles sont en degrés, dans le sens antihoraire depuis l’axe X : `@50<90` est donc 50 vers le haut et `@50<180` 50 vers la gauche. Les deux valeurs peuvent être négatives.

## Le dernier point

`@` mesure depuis le dernier point cliqué ou tapé, dans n’importe quelle commande — le dernier clic de la commande précédente compte, tout comme une poignée que vous venez de faire glisser. Sans dernier point, `@100,50` se lit comme `100,50`. Le dernier point est oublié quand vous passez de l’espace objet à une présentation, et quand un dessin est ouvert.

## Rel : relatif par défaut

Le bouton **Rel** de la barre de contrôle rend chaque point tapé relatif : dès le premier chiffre, un `@` se place devant, et `100,50` devient `@100,50`. Appuyez sur **Retour arrière** sur le `@` pour rendre ce point absolu. Sans dernier point, aucun `@` n’est ajouté. Rel est désactivé par défaut et mémorisé avec les autres boutons de la barre de contrôle.

## Touches pendant la saisie

| Touche | Effet |
|---|---|
| `0`–`9`, `.`, `-` | Taper le nombre ; `-` seulement au début |
| `@` | Rendre le point relatif, au début de X |
| `,` ou **Space** | Terminer X et passer à Y |
| `<` | Terminer X comme distance et passer à son angle |
| **Enter** ou **Space** | Placer le point, une fois Y renseigné |
| **←** **→** **Home** **End** | Déplacer le curseur dans la valeur en cours |
| **Backspace** | Effacer avant le curseur ; au début d’un Y vide, revenir à X |

Un point qui ne se lit pas comme des nombres reste dans le terminal pour que vous le corrigiez. Chaque point tapé laisse une ligne dans l’historique du terminal tel que vous l’avez tapé — `Saisi : @100<45` —, avant la ligne de la commande indiquant où il est arrivé.

## Points tapés et repérage angulaire

Quand le curseur est verrouillé sur un rayon de repérage angulaire, taper un nombre donne une distance le long de ce rayon plutôt qu’un X. Taper `@` d’abord commence un point complet, si bien que `@100,50` fonctionne aussi sur un rayon verrouillé.

---

*Voir aussi : [Suivi de distance](../distance-tracking/) pour taper une longueur le long d’une direction verrouillée, et [Vector Pins](../vector-pins/) pour mesurer depuis un point épinglé.*
