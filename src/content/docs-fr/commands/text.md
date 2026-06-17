---
sidebar_position: 7
title: Commande Text — Placer des labels MTEXT dans KulmanLab CAD
description: La commande Text place un label MTEXT multi-ligne avec formatage enrichi. Cliquez sur une position, tapez dans l'éditeur popup, et appuyez sur Échap pour valider. Double-cliquez sur un label existant pour rouvrir l'éditeur.
keywords: [commande text CAO, MTEXT, placer label texte CAO, annotation texte CAO, gras italique CAO, texte multi-ligne CAO, kulmanlab]
---

# Text

La commande `text` place un label de texte multi-ligne. Après avoir cliqué sur une position du canevas, un éditeur popup s'ouvre où vous pouvez taper du contenu, appliquer gras/italique/barré, changer les polices et hauteurs, et insérer des sauts de ligne. Appuyez sur **Échap** pour valider et fermer l'éditeur.

Consultez la page [Éditeur de texte](../interface/text-editor) pour la référence complète de l'éditeur.

## Placer un label de texte

1. Tapez `text` dans le terminal ou cliquez sur le bouton **Text** de la barre d'outils.
2. **Cliquez sur la position d'ancrage** du canevas. Ou tapez `X,Y` et appuyez sur **Entrée**.
3. L'**éditeur de texte popup** s'ouvre au-dessus du nouveau label. Tapez votre contenu.
4. Appuyez sur **Échap** pour valider le label et fermer l'éditeur.

La hauteur par défaut est de **12 unités de dessin**.

## Modifier un label existant

**Double-cliquez** sur n'importe quel label de texte du canevas pour rouvrir l'éditeur.

## Référence clavier

**Phase d'ancrage**

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X |
| `,` | Verrouiller X et passer à la saisie Y |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée saisie |

**Phase d'éditeur de texte**

| Touche | Action |
|--------|--------|
| Tout caractère imprimable | Insérer au curseur |
| `Retour arrière` / `Suppr` | Supprimer le caractère adjacent ou la sélection |
| `Entrée` | Insérer un saut de ligne |
| `←` / `→` | Déplacer le curseur |
| `Origine` / `Fin` | Sauter au début / fin de la ligne |
| `Échap` | Valider et fermer l'éditeur |

## Édition par poignées

Un label de texte sélectionné expose une poignée au point d'ancrage. Faites glisser pour repositionner le label.

## Commandes d'édition supportées

| Commande | Ce qui arrive au texte |
|----------|------------------------|
| [Move](./move) | Déplace le point d'ancrage |
| [Copy](./copy) | Crée un label identique à une nouvelle position |
| [Rotate](./rotate) | Fait pivoter le point d'ancrage et ajoute l'angle |
| [Mirror](./mirror) | Symétrise le point d'ancrage et ajuste la rotation |
| [Scale](./scale) | Met à l'échelle la position d'ancrage et la hauteur de texte |
| [Delete](./delete) | Supprime le label de texte |

## DXF — entité MTEXT

Les labels de texte sont enregistrés comme entités `MTEXT` dans le fichier DXF. Le formatage gras, italique et barré est encodé dans la chaîne de contenu MTEXT. Toutes les propriétés font l'aller-retour sans perte.
