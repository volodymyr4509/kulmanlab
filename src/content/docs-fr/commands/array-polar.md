---
title: "Commande ArrayPolar — copier des objets autour d’un centre dans KulmanLab CAD"
description: "La commande ArrayPolar copie les objets sélectionnés autour d’un point central — un nombre donné d’éléments répartis sur un tour complet ou une partie de tour, avec des copies qui tournent en faisant le tour ou gardent leur propre orientation."
keywords: ["réseau polaire CAD", "motif circulaire CAD", "copier des objets autour d’un point CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

La commande `ArrayPolar` crée des copies des objets sélectionnés autour d’un point central, réparties uniformément sur un tour complet ou une partie de tour. L’original est le premier élément ; chaque autre élément est une copie tournée autour du centre — ou seulement déplacée autour de lui, si vous désactivez Rotate.

## Créer un réseau polaire

1. Sélectionnez les objets, puis tapez `arraypolar` dans le terminal ou cliquez sur le bouton **Array Polar** de la barre d’outils. Lancée sans sélection, la commande demande d’abord de les sélectionner — confirmez avec **Entrée** ou **Espace**.
2. **Cliquez sur le centre** autour duquel tournent les copies, ou tapez `X,Y` puis **Entrée** pour une coordonnée exacte.
3. Vérifiez le réseau. Toutes les copies s’affichent en aperçu et le terminal indique `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — appuyez sur la lettre d’une option pour la modifier.
4. Appuyez sur **Entrée** ou **Espace** pour créer les copies. Les originaux restent en place et la sélection est effacée.

## Options

| Option | Touche | Effet |
|---|---|---|
| Items | `I` | Combien d’éléments, original compris — un entier de 2 à 1024. Démarre à 6. |
| Angle | `A` | Degrés d’un élément au suivant, dans le sens antihoraire ; un angle négatif va dans le sens horaire. Jusqu’à 180°. |
| Fill | `F` | Degrés du premier élément au dernier. 360 (par défaut) est un tour complet ; un nombre plus petit répartit les éléments sur une partie de tour. Négatif va dans le sens horaire. Jusqu’à 360°. |
| Rotate | `R` | Activée (par défaut) : chaque copie tourne en faisant le tour. Désactivée : chaque copie est déplacée à sa place et regarde dans la même direction que l’original. Bascule sur place — il n’y a pas de nombre à saisir. |

- Angle et Fill sont deux façons d’énoncer la même chose : modifier l’un reformule l’autre. Sur un tour complet, le dernier élément s’arrête un pas avant le premier ; sur une partie de tour, il tombe exactement à l’angle de remplissage.
- Pour modifier un nombre, appuyez sur la lettre de son option. L’invite est préremplie avec la valeur actuelle — tapez pour la remplacer, puis **Entrée** ou **Espace** ; la confirmer inchangée laisse le réseau tel quel.
- Items n’accepte que des entiers ; Angle et Fill acceptent des décimaux et un `-` initial pour le sens horaire. Un angle ou un remplissage de 0 est refusé, tout comme un angle supérieur à 180° ou un remplissage supérieur à 360° — le terminal en donne la raison.
- Un Angle trop petit pour loger tous les éléments abandonne ceux qui n’ont pas de place, et le terminal annonce le nouveau nombre.
- Fonctionne sur tous les types d’entités : chaque copie est l’original tourné autour du centre, ou déplacé, exactement comme le feraient [Rotate](../rotate/) et [Move](../move/).

## Référence clavier

| Touche | Action |
|---|---|
| `Enter` / `Space` | Confirmer la sélection, le réseau ou un nombre saisi |
| `I` `A` `F` `R` | Modifier Items, Angle ou Fill en saisissant un nombre ; basculer Rotate |
| `0`–`9`, `.`, `-` | Saisir le nombre (`.` et `-` seulement pour Angle et Fill, `-` en premier) |
| `Backspace` | Supprimer le dernier caractère saisi |
| `Escape` | Annuler |
