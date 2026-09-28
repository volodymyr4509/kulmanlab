---
title: Commande Text — Placer des labels MTEXT dans KulmanLab CAD
description: La commande Text place un label MTEXT multi-ligne avec formatage enrichi. Cliquez sur une position, tapez dans l'éditeur popup, et appuyez sur Échap pour valider. Double-cliquez sur un label existant pour rouvrir l'éditeur.
keywords: [commande text CAO, MTEXT, placer label texte CAO, annotation texte CAO, gras italique CAO, texte multi-ligne CAO, kulmanlab]
group: markup
order: 0
---

# Text

La commande `Texte` place un label de texte multi-ligne. Après avoir cliqué sur une position du canevas, un éditeur popup s'ouvre en **rich** mode — vous pouvez taper du contenu, appliquer gras/italique/souligné/barré par caractère, changer les polices et hauteurs, et insérer des sauts de ligne. Appuyez sur **Échap** pour valider et fermer l'éditeur.

Consultez la page [Éditeur de texte](../../interface/text-editor/) pour la référence complète de l'éditeur, incluant une comparaison des modes **rich** et **simple**.

## Placer un label de texte

1. Tapez `Texte` dans le terminal ou cliquez sur le bouton **Text** de la barre d'outils.
2. **Cliquez sur la position d'ancrage** du canevas. Ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. L'**éditeur de texte popup** s'ouvre au-dessus du nouveau label. Tapez votre contenu.
4. Appuyez sur **Échap** pour valider le label et fermer l'éditeur.

Un nouveau texte copie la police, la hauteur, le gras, l’italique, l’interligne, l’alignement horizontal et le cadre du [StyleTexte](../text-style/) courant. Le style intégré `Standard` utilise une hauteur de **1 unité de dessin** et un alignement à gauche.

## Modifier un label existant

**Double-cliquez** sur n'importe quel label de texte du canevas pour rouvrir l'éditeur de ce label.

## Saisie de coordonnées pour l'ancrage

Au lieu de cliquer, tapez une position exacte :

1. Tapez la valeur X.
2. Appuyez sur `,` — le terminal affiche `[X], [Y{curseur}]`.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour placer l'ancrage et ouvrir l'éditeur.

## Référence clavier

**Phase d'ancrage**

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X |
| `,` | Verrouiller X et passer à la saisie Y |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée saisie |

**Phase d'éditeur de texte** (voir [Éditeur de texte](../../interface/text-editor/) pour la référence complète)

| Touche | Action |
|--------|--------|
| Tout caractère imprimable | Insérer au curseur |
| `Retour arrière` / `Suppr` | Supprimer le caractère adjacent ou la sélection |
| `Entrée` | Insérer un saut de ligne |
| `←` / `→` | Déplacer le curseur |
| `Origine` / `Fin` | Sauter au début / fin de la ligne dure |
| `Échap` | Valider et fermer l'éditeur |

## Édition par poignées — repositionnement

Un label de texte sélectionné expose une poignée au point d'ancrage :

| Poignée | Position | Ce qu'elle fait |
|---------|----------|----------------|
| **Ancrage** | En bas à gauche du texte | Faites glisser pour repositionner le label |

## Sélectionner du texte

| Méthode | Comportement |
|---------|-------------|
| **Clic** | Sélectionne si le clic atterrit dans le cadre de délimitation pivoté du texte |
| **Glisser à droite** (strict) | Les quatre coins du cadre de délimitation doivent être à l'intérieur de la zone de sélection |
| **Glisser à gauche** (croisement) | Tout chevauchement entre le cadre de délimitation du texte et la zone de sélection le sélectionne |

## Commandes d'édition supportées

| Commande | Ce qui arrive au texte |
|----------|------------------------|
| [Move](../move/) | Déplace le point d'ancrage |
| [Copy](../copy/) | Crée un label identique à une nouvelle position |
| [Rotate](../rotate/) | Fait pivoter la position d'ancrage et ajoute l'angle à Rotation Degree |
| [Mirror](../mirror/) | Symétrise le point d'ancrage par rapport à l'axe de symétrie (la chaîne de texte n'est pas inversée) |
| [Scale](../scale/) | Met à l'échelle la position d'ancrage et multiplie la hauteur par le facteur d'échelle |
| [Delete](../delete/) | Supprime le label |

Le texte ne supporte pas **Offset**, **Trim**, ni **Extend**.

## Propriétés

Quand un label de texte est sélectionné, le panneau des propriétés affiche :

**Général**

| Propriété | Par défaut | Signification |
|-----------|-----------|---------------|
| Color | 256 (ByLayer) | Index de couleur ACI |
| Layer | `0` | Attribution de calque |

**Géométrie**

| Propriété | Signification |
|-----------|---------------|
| Position X / Position Y | Coordonnées du point d'ancrage |
| Hauteur | Hauteur de base en unités de dessin, copiée depuis le StyleTexte courant à la création |
| Rotation Degree | Rotation dans le sens antihoraire en degrés |

**Propriétés**

| Propriété | Signification |
|-----------|---------------|
| Content | La chaîne de texte (codes inline MTEXT préservés) |
| Attachment Point | Code d'alignement (1 = haut-gauche … 9 = bas-droite) |

Le texte n'a pas de propriétés Linetype, Linetype Scale, ni Thickness.

La section **Propriétés** contient aussi l’alignement horizontal, la largeur de référence, l’interligne et le cadre.

## DXF — entité MTEXT

Les libellés sont stockés sous forme d’entités **MTEXT**. Gras et italique utilisent `\f`, le soulignement `\L`/`\l`, le barré `\K`/`\k` et les hauteurs par caractère `\H`. Largeur de référence, interligne, alignement de paragraphe, rotation et attache sont également conservés. Le cadre est exporté avec l’indicateur MTEXT et une échelle de bord compatible AutoCAD. Voir [StyleTexte](../text-style/) et [Gestionnaire de polices](../font-manager/).
