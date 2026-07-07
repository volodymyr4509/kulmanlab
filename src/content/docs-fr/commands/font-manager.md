---
title: Commande Font Manager — Téléverser et Gérer des Polices TTF Personnalisées dans KulmanLab CAD
description: La commande Font Manager ouvre un dialogue pour parcourir, prévisualiser et sélectionner des polices, et pour téléverser vos propres fichiers .ttf. Les polices téléversées sont enregistrées dans le navigateur et intégrées par leur nom dans les exports DXF.
keywords: [font manager, police personnalisée CAO, téléverser ttf, typographie personnalisée CAO, google fonts CAO, police de texte CAO, kulmanlab]
---

# Font Manager

La commande `FontManager` ouvre un dialogue pour parcourir et sélectionner des polices, et pour téléverser vos propres fichiers `.ttf` à utiliser dans les entités [Text](../text/) et [Multileader](../leader/).

## Ouvrir le Font Manager

- Tapez `FontManager` dans le terminal, **ou**
- Cliquez sur le bouton **Font Manager** dans la barre d'outils de l'[éditeur de texte](../../interface/text-editor/).

## Groupes de polices

| Groupe | Contenu |
|--------|---------|
| **Default** | La police sans-serif intégrée — toujours disponible |
| **User** | Vos propres polices `.ttf` téléversées (affiché uniquement une fois que vous en avez ajouté une) |
| **Free** | 15 Google Fonts regroupées (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Polices courantes du système d'exploitation (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Cliquez sur n'importe quelle police de la liste pour afficher son aperçu à droite — nom, échantillon de l'alphabet, un pangramme et des chiffres.

## Téléverser une police personnalisée

1. Cliquez sur **Add Font** en bas du dialogue (ou tapez `Font+` dans le terminal pour ouvrir directement le sélecteur de fichiers).
2. Choisissez un fichier `.ttf`. Seules les polices TrueType sont prises en charge — `.otf` et `.woff`/`.woff2` ne le sont pas.
3. Le nom du fichier (sans l'extension) devient le nom de la police dans le groupe **User**. Par exemple, téléverser `MyFont.ttf` ajoute une police nommée `MyFont`.

Les polices téléversées sont enregistrées de façon permanente dans le navigateur (IndexedDB) et se rechargent automatiquement la prochaine fois que vous ouvrez KulmanLab CAD.

## Supprimer une police personnalisée

Survolez une police du groupe **User** et cliquez sur le bouton **×** situé à côté. Les polices intégrées (Default, Free, System) ne peuvent pas être supprimées.

## Référence clavier

| Touche | Action |
|--------|--------|
| `↑` / `↓` | Déplacer la sélection vers le haut ou le bas dans la liste des polices |
| `Escape` | Fermer le Font Manager |

## Compatibilité DXF

Le nom de la police est intégré dans les entités **MTEXT** exportées sous forme de code de formatage en ligne, de sorte qu'un DXF qui fait un aller-retour dans KulmanLab CAD conserve son affectation de police. Les *fichiers* de police personnalisés ne sont pas intégrés dans le DXF — seul le *nom* de la police l'est. Si vous réimportez un dessin qui référence une police personnalisée que vous n'avez pas téléversée sur cet appareil, le texte s'affiche avec la police par défaut jusqu'à ce que vous téléversiez une police portant ce même nom.

## Commandes associées

- [Text](../text/) — place les labels de texte auxquels s'appliquent les choix de police
- [Match Properties](../match-properties/) — copie la hauteur du texte, mais pas la police, entre entités
