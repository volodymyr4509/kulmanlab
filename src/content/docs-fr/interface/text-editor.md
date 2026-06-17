---
sidebar_position: 4
title: Éditeur de Texte — Format de Texte Enrichi dans KulmanLab CAD
description: L'éditeur de texte de KulmanLab CAD permet de placer des étiquettes MTEXT multilignes avec formatage enrichi avec gras, italique, barré, substitutions de police et hauteur par caractère, retour à la ligne et navigation complète avec curseur.
keywords: [éditeur texte CAO, MTEXT, gras italique CAO, formatage texte CAO, texte multiligne CAO, retour ligne CAO, kulmanlab]
---

# Éditeur de Texte

L'éditeur de texte s'ouvre lorsque vous placez une nouvelle étiquette de texte avec la commande `text` ou en double-cliquant sur une entité de texte existante. Il prend en charge le contenu multiligne, le formatage par caractère et le retour à la ligne.

## Ouvrir l'éditeur

| Action | Résultat |
|--------|----------|
| Commande `text` → cliquer sur la position | Crée une nouvelle entité de texte et ouvre l'éditeur |
| Double-clic sur une entité de texte existante | Rouvre l'éditeur pour cette entité |
| `Échap` dans l'éditeur | Ferme l'éditeur et sauvegarde tous les changements |

## Barre d'outils

La barre d'outils flotte au-dessus du cadre de délimitation du texte et reste ancrée à l'entité lors du défilement ou du zoom.

### Gras · Italique · Barré

| Bouton | Raccourci | Ce qu'il fait |
|--------|-----------|---------------|
| **G** | — | Activer/désactiver le gras |
| *I* | — | Activer/désactiver l'italique |
| ~~S~~ | — | Activer/désactiver le barré |

**Comment la bascule s'applique :**

- **Avec une sélection de texte** — le style s'applique exactement aux caractères sélectionnés uniquement.
- **Sans sélection, curseur dans du texte existant** — bascule le style sur toute l'entité (tous les segments).
- **Texte vide ou nouvelle entité** — le style est stocké dans le segment vide et s'applique à chaque caractère que vous tapez à partir de ce moment.

Le bouton apparaît en surbrillance (actif) quand tous les caractères de la sélection actuelle — ou le caractère immédiatement à gauche du curseur — ont ce style défini.

### Police

Le menu déroulant liste un ensemble sélectionné de polices multiplateformes (Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console, Impact). L'option supérieure **Arial** est la police par défaut.

- **Avec une sélection** — remplace la police uniquement pour les caractères sélectionnés.
- **Sans sélection** — applique la police à toute l'entité.

Le menu déroulant reflète la police du caractère à gauche du curseur quand il n'y a pas de sélection.

### Hauteur

Le champ numérique définit la **hauteur de boîte** (hauteur d'une lettre majuscule) en unités de dessin.

- **Avec une sélection** — remplace la hauteur pour les caractères sélectionnés, indépendamment de la hauteur de base de l'entité.
- **Sans sélection** — change la hauteur de base de l'entité (s'applique à tous les caractères sans remplacement de hauteur individuel).

Le champ reflète la hauteur du caractère à gauche du curseur. Laissez-le vide pour utiliser la valeur par défaut de l'entité.

## Curseur et navigation

| Touche | Action |
|--------|--------|
| `←` / `→` | Déplacer le curseur d'un caractère à gauche ou à droite |
| `Début` | Aller au début de la ligne dure actuelle |
| `Fin` | Aller à la fin de la ligne dure actuelle |
| `Maj` + `←` / `→` | Étendre ou réduire la sélection |
| `Retour arrière` | Supprimer le caractère à gauche (ou la sélection) |
| `Suppr` | Supprimer le caractère à droite (ou la sélection) |
| `Entrée` | Insérer un saut de ligne |
| `Échap` | Fermer l'éditeur |

La hauteur du curseur correspond automatiquement à la hauteur de boîte du caractère adjacent, incluant la taille plus petite utilisée pour l'indice et l'exposant.

## Retour à la ligne

Quand une entité de texte a une **largeur de référence** définie, les lignes longues sont automatiquement renvoyées à la ligne aux limites des mots pour tenir dans cette largeur.

Pour définir ou changer la largeur de référence pendant que l'entité est sélectionnée, faites glisser les **poignées de redimensionnement** — les rectangles fins sur les bords gauche et droit du cadre de délimitation en pointillés. Le contenu est redistribué en temps réel pendant que vous faites glisser.

Définir la largeur de référence à zéro (faites glisser les poignées ensemble ou supprimez la valeur dans le panneau de propriétés) supprime le retour à la ligne et laisse les lignes s'étendre librement.

## Texte multiligne

Appuyez sur `Entrée` pour insérer un saut de ligne dur. Chaque ligne dure est indépendante — `Début` et `Fin` naviguent dans la ligne dure actuelle uniquement.

Les sauts de ligne durs et le formatage par caractère sont stockés en utilisant le format MTEXT et survivent à un cycle DXF complet.

## Compatibilité DXF

Les entités de texte sont stockées comme **MTEXT** dans les fichiers DXF. Le gras et l'italique sont encodés comme `\L`, `\K`, `\O` et des commutateurs de police en ligne (`\f`). La hauteur par caractère est encodée comme `\H`. Tout le formatage est préservé à l'export et lisible par LibreCAD, FreeCAD et autres applications compatibles DXF.
