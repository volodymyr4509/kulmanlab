---
sidebar_position: 10
title: Commande Leader — Dessiner des annotations multirépères avec flèche et texte dans KulmanLab CAD
description: "La commande Leader dessine une annotation multirépère en quatre phases : pointe de flèche, coude de brisure, position du texte et libellé saisi. La direction du texte s'ajuste automatiquement selon la position du coude. Importation DXF uniquement — les répères ne sont pas écrits lors de l'enregistrement."
keywords: [commande leader CAO, annotation multirépère, répère CAO, annotation flèche texte, répère avec coude, direction texte CAO, kulmanlab]
---

# Leader

La commande `leader` dessine une annotation multirépère en quatre étapes : une pointe de flèche touchant une entité, une ligne de répère coudée au niveau d'une brisure, une ancre de texte et un libellé saisi. De toutes les commandes d'annotation, Leader est la seule qui inclut une phase de saisie de texte interactive avec un curseur clignotant.

## Anatomie d'un multirépère

```
  ◄── pointe de flèche  (étape 2 — touche l'entité)
      \
       \  ligne de répère
        \
         ●──── brisure (étape 3) ──── ancre de texte (étape 4)
                                     Libellé du texte  (étape 5)
```

- **Pointe de flèche** — l'extrémité pointue placée sur l'entité annotée.
- **Brisure** — le coude où la ligne de répère se plie vers le texte.
- **Ancre de texte** — où le libellé est positionné. Le texte s'aligne automatiquement à gauche ou à droite.

## Dessiner un répère

1. Tapez `leader` dans le terminal ou cliquez sur **Leader** dans la barre d'outils.
2. **Cliquez sur la pointe de flèche**, ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. **Cliquez sur la brisure** — le coude dans le répère. L'angle se verrouille par incréments de 45° ; tapez une longueur et appuyez sur **Entrée** pour un placement précis. Ou tapez `X,Y` pour une coordonnée absolue.
4. **Cliquez sur la position du texte** — où le libellé sera ancré. Mêmes options : clic, verrouillage d'angle + longueur, ou `X,Y`.
5. **Tapez le libellé** — l'aperçu sur le canevas se met à jour en temps réel avec un curseur clignotant. Appuyez sur **Entrée** pour placer.

## Saisie de coordonnées (toutes les phases de points)

À chaque étape de sélection de point (pointe, brisure, position du texte), vous pouvez taper une coordonnée exacte au lieu de cliquer :

1. Tapez la valeur X (chiffres, `.` ou `-`).
2. Appuyez sur `,` — le terminal affiche `[X], [Y{curseur}]` confirmant que X est verrouillé.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour placer le point.

## Verrouillage d'angle (étapes 3 et 4)

Après chaque point placé, la commande s'accroche aux axes à 45° lorsque le curseur est suffisamment éloigné. Pendant le verrouillage :
- L'aperçu s'accroche à l'axe.
- Tapez une longueur et appuyez sur **Entrée** pour placer le point suivant à cette distance exacte.

Le verrouillage d'angle et la saisie de coordonnées sont mutuellement exclusifs — dès que vous tapez un chiffre sans `,` précédent, la commande l'interprète comme une distance (le verrouillage d'angle doit être actif). Pour saisir une coordonnée absolue, commencez par le nombre X suivi d'une virgule.

## Édition du libellé de texte

Pendant la saisie du libellé à l'étape 5, vous pouvez naviguer et modifier le texte avant de le placer :

| Touche | Action |
|--------|--------|
| Tout caractère imprimable | Insérer à la position du curseur |
| `←` / `→` | Déplacer le curseur à gauche ou à droite |
| `Retour arrière` | Supprimer le caractère à gauche du curseur |
| `Suppr` | Supprimer le caractère à droite du curseur |
| `Entrée` | Placer le répère |

## Direction automatique du texte

L'alignement du texte s'ajuste selon la position du curseur par rapport à la brisure :

| Position du curseur | Direction du texte |
|---------------------|-------------------|
| À **droite** de la brisure | De gauche à droite depuis l'ancre de texte |
| À **gauche** de la brisure | De droite à gauche (ancré côté droit) |

Aucun ajustement manuel n'est nécessaire — déplacez le curseur du côté où vous voulez le libellé et il s'aligne correctement.

## Référence clavier

**Phases de points (pointe, brisure, position du texte)**

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Commencer à saisir la coordonnée X (puis `,` pour verrouiller X et saisir Y) |
| `,` | Confirmer X et passer à la saisie Y |
| `0`–`9`, `.`, `-` | Accumuler une distance quand l'angle est verrouillé |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée ou distance saisie |

**Phase de saisie du texte**

| Touche | Action |
|--------|--------|
| Caractère imprimable | Insérer au curseur |
| `←` / `→` | Déplacer le curseur |
| `Retour arrière` | Supprimer à gauche |
| `Suppr` | Supprimer à droite |
| `Entrée` | Placer le répère |

| Touche | Action |
|--------|--------|
| `Échap` | Annuler et revenir à l'étape 2 |

## Modifier un répère existant

**Double-cliquez** sur un multirépère placé pour rouvrir l'éditeur de texte en **rich** mode. En rich mode vous pouvez appliquer gras, italique, et des substitutions de police ou hauteur par caractère, et insérer des sauts de ligne avec `Enter`. Appuyez sur **Échap** pour valider et fermer.

Voir [Éditeur de texte — rich mode](../interface/text-editor#rich-mode) pour la référence complète.

## Ajouter et supprimer des bras

- Pour ajouter un bras de pointe de flèche supplémentaire à un répère existant : [Leader+](./leader-add)
- Pour supprimer un bras d'un répère qui en a deux ou plus : [Leader−](./leader-remove)

## DXF — importation uniquement

**Les répères sont en lecture seule.** Les entités `MLEADER` des fichiers DXF sont lues et affichées correctement, mais les répères dessinés dans l'éditeur **ne sont pas écrits** lors de l'enregistrement d'un fichier DXF. Utilisez les répères pour les annotations visuelles ; évitez de vous en remettre à eux pour les flux de travail aller-retour.
