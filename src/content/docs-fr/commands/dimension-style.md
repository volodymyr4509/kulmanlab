---
title: "Commande StyleCote — créer et gérer des styles de cote nommés"
description: "Créez et gérez des styles de cote CAO pour les flèches, lignes d’attache, marques de centre, texte, précision, alignement et DIMSTYLE DXF."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# StyleCote

La commande ouvre une boîte de dialogue permettant de créer, modifier, prévisualiser et sélectionner des styles de cote nommés. Toute nouvelle cote linéaire, alignée, radiale, diamétrale ou angulaire copie le style courant à sa création ; les cotes existantes ne restent pas liées.

## Ouvrir la boîte de dialogue

Saisissez la commande localisée dans le terminal ou cliquez sur le bouton **Style de cote** du panneau **Annoter**. La liste de gauche contient les styles visibles ; une coche indique le style courant et le crayon permet de le renommer.

## Lignes et flèches

**Flèche 1 / Flèche 2 · Taille des flèches · Décalage des lignes d'attache · Prolongement des lignes d'attache · Marque de centre · Taille de la marque de centre**

Réglez séparément les deux pointes de flèche, leur taille, le décalage et le dépassement des lignes d’attache, ainsi que le type et la taille de la marque de centre (`Aucune`, `Marque` ou `Lignes`).

## Texte

**Style de texte · Police · Hauteur du texte · Cadre du texte · Écart du texte · Attache du texte · Texte aligné · Précision · Précision angulaire**

La section texte contrôle le remplissage rapide depuis un style de texte, la police, la hauteur, le gras, l’italique, le cadre, l’écart, l’une des neuf positions d’attache, l’alignement sur la ligne de cote et les précisions linéaire et angulaire. Le style de texte copie les valeurs une fois, sans liaison dynamique.

L’aperçu utilise les mêmes moteurs de rendu que le canevas. Passez entre les exemples linéaire, radial, diamétral et angulaire pour vérifier flèches, marques de centre, placement du texte, précision et cadres.

## Créer et gérer les styles

**Nouveau** duplique le style sélectionné. `Standard` ne peut être ni renommé ni supprimé, et le style courant ne peut pas être supprimé. Les noms doivent être uniques, non vides et valides pour DXF. Les styles annotatifs importés restent masqués, mais sont conservés.

## Définir le style courant

**Définir courant** fait du style choisi le modèle des nouvelles cotes ; la liste du panneau Annoter offre le même choix. Les valeurs sont copiées à la création. Dimension Continue hérite plutôt de l’apparence complète de sa cote de base.

## Enregistrer ou abandonner

**OK** applique ensemble renommages, ajouts, suppressions, propriétés et choix du style courant. **Fermer**, un clic sur l’arrière-plan ou `Escape` abandonne les changements.

## Compatibilité DXF

KulmanLab importe et exporte les enregistrements `DIMSTYLE` nommés, notamment les flèches distinctes, lignes d’attache, texte, précision, marques de centre, cadre, référence au style de texte et indicateur annotatif. À l’importation, les remplacements `DSTYLE` propres à l’entité sont prioritaires.

À l’exportation, le `STYLE` référencé utilise une hauteur variable (`40 = 0`) et mémorise la dernière hauteur dans le groupe `42`. Une hauteur fixe de style de texte ne peut ainsi pas remplacer celle du style de cote.

## Commandes associées

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
