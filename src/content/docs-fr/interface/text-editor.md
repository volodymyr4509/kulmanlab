---
sidebar_position: 4
title: Éditeur de Texte — Modes Rich et Simple dans KulmanLab CAD
description: L'éditeur de texte de KulmanLab CAD a deux modes — rich (formatage par caractère, multiligne, retour à la ligne pour Text et Multileader) et simple (style uniforme, une ligne pour les entités de cote). Un mode chip dans l'en-tête indique le mode actif.
keywords: [éditeur texte CAO, MTEXT, gras italique CAO, formatage texte CAO, texte multiligne CAO, retour ligne CAO, éditeur texte rich, éditeur texte simple, éditeur texte cote, kulmanlab]
---

# Éditeur de Texte

L'éditeur de texte s'ouvre lorsque vous placez ou double-cliquez sur une entité modifiable. Un petit **mode chip** dans l'en-tête — **rich** (couleur d'accent) ou **simple** (atténué) — indique le mode actif pour l'entité courante.

## Modes de l'éditeur

### Rich mode

Utilisé par : **Text** (labels MTEXT) et annotations **Multileader**.

| Feature | Comportement |
|---------|-------------|
| Bold / Italic / Strikethrough | Par caractère (appliqué à la sélection, ou toute l'entité si aucune sélection) |
| Font et Height | Substitution par caractère, ou valeur par défaut de l'entité |
| `Enter` | Insère un saut de ligne dur |
| `Shift+←/→` | Étend ou réduit une sélection de texte |
| `Home` / `End` | Aller au début / fin de la ligne dure actuelle |
| Retour à la ligne | Pris en charge via les poignées de redimensionnement de largeur de référence |

### Simple mode

Utilisé par : **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

L'éditeur est prérempli avec le libellé rendu actuel de la cote pour que vous puissiez positionner le curseur et modifier la valeur directement.

| Feature | Comportement |
|---------|-------------|
| Bold / Italic / Font / Height | Disponible — s'applique à l'**intégralité** du libellé à la fois |
| Formatage par caractère | Non pris en charge |
| `Enter` | **Valide** la valeur et ferme l'éditeur (pas de saut de ligne) |
| Multiligne | Non pris en charge |
| Retour à la ligne | Non pris en charge |

## Ouvrir l'éditeur

| Action | Résultat |
|--------|----------|
| Commande `text` → cliquer sur la position | Crée une nouvelle entité de texte et ouvre l'éditeur (**rich**) |
| Double-clic sur une entité **Text** existante | Rouvre l'éditeur en **rich** mode |
| Double-clic sur un **Multileader** existant | Ouvre l'éditeur en **rich** mode |
| Double-clic sur une entité de **cote** | Ouvre l'éditeur en **simple** mode |
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

## Copier, couper et coller

| Touche | Action |
|--------|--------|
| `Ctrl+C` / `Cmd+C` | Copier le texte sélectionné |
| `Ctrl+X` / `Cmd+X` | Couper le texte sélectionné |
| `Ctrl+V` / `Cmd+V` | Coller au curseur |

Copier et couper nécessitent une sélection de texte active. Le texte collé est toujours en texte brut — il adopte le formatage (gras, italique, police, hauteur) déjà présent au niveau du curseur plutôt que de conserver le formatage qu'il avait lors de la copie.

En **Rich mode**, les sauts de ligne dans le texte collé sont préservés. En **Simple mode**, les sauts de ligne sont supprimés, car les étiquettes de cote sont sur une seule ligne.

## Retour à la ligne

Quand une entité de texte a une **largeur de référence** définie, les lignes longues sont automatiquement renvoyées à la ligne aux limites des mots pour tenir dans cette largeur.

Pour définir ou changer la largeur de référence pendant que l'entité est sélectionnée, faites glisser les **poignées de redimensionnement** — les rectangles fins sur les bords gauche et droit du cadre de délimitation en pointillés. Le contenu est redistribué en temps réel pendant que vous faites glisser.

Définir la largeur de référence à zéro (faites glisser les poignées ensemble ou supprimez la valeur dans le panneau de propriétés) supprime le retour à la ligne et laisse les lignes s'étendre librement.

## Texte multiligne

Appuyez sur `Entrée` pour insérer un saut de ligne dur. Chaque ligne dure est indépendante — `Début` et `Fin` naviguent dans la ligne dure actuelle uniquement.

Les sauts de ligne durs et le formatage par caractère sont stockés en utilisant le format MTEXT et survivent à un cycle DXF complet.

## Compatibilité DXF

Les entités de texte sont stockées comme **MTEXT** dans les fichiers DXF. Le gras et l'italique sont encodés comme `\L`, `\K`, `\O` et des commutateurs de police en ligne (`\f`). La hauteur par caractère est encodée comme `\H`. Tout le formatage est préservé à l'export et lisible par LibreCAD, FreeCAD et autres applications compatibles DXF.
