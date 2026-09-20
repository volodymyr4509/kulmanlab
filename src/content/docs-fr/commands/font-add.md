---
title: FontAdd — Téléverser une police TTF personnalisée depuis le terminal
description: La commande FontAdd ouvre le sélecteur de fichiers du système pour téléverser une police .ttf, sans ouvrir d'abord le dialogue Font Manager. C'est le même téléversement que déclenche le bouton « Add Font » du Font Manager, disponible ici comme commande de terminal à part entière.
keywords: [commande font add, commande fontadd, téléverser ttf terminal, police personnalisée CAO, kulmanlab]
group: style
order: 3
---

# FontAdd

La commande `AjouterPolice` ouvre le sélecteur de fichiers du système pour téléverser une police `.ttf` personnalisée, sans ouvrir d'abord le dialogue [Font Manager](../font-manager/). C'est le même téléversement que déclenche le bouton **Add Font** du Font Manager — FontAdd n'est qu'un raccourci direct depuis le terminal.

## Téléverser une police

1. Tapez `AjouterPolice` dans le terminal, ou cliquez sur **Add Font** en bas du dialogue [Font Manager](../font-manager/).
2. Choisissez un fichier `.ttf` dans le sélecteur système. Seules les polices TrueType sont prises en charge — `.otf` et `.woff`/`.woff2` ne le sont pas.

La commande se termine dès que le sélecteur de fichiers s'ouvre — il n'y a ni clic ni saisie terminal supplémentaire. La police est enregistrée et apparaît dans le groupe **User** dès que le fichier est choisi.

## Ce qui se passe lors du téléversement

- Le nom du fichier (sans l'extension) devient le nom de la police. Téléverser `MyFont.ttf` ajoute une police nommée `MyFont`.
- Téléverser un fichier dont le nom correspond à une police personnalisée existante la **remplace**.
- La police est enregistrée de façon permanente dans le navigateur (IndexedDB) et se recharge automatiquement la prochaine fois que vous ouvrez KulmanLab CAD — elle n'est pas liée au dessin en cours.

## Référence clavier

FontAdd n'a pas d'interaction clavier propre — toute la commande consiste en le sélecteur de fichiers natif du navigateur. Annuler ce dialogue (ou ne choisir aucun fichier) laisse la liste des polices inchangée.

## Commandes associées

| Commande | Ce qu'elle fait |
|----------|----------------|
| [Font Manager](../font-manager/) | Parcourir, prévisualiser, sélectionner et supprimer des polices, y compris vos propres téléversements |
| [Text](../text/) | Place les labels de texte auxquels s'appliquent les choix de police |
