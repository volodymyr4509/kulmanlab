---
title: "Commande StyleTexte — Créer et gérer les styles de texte"
description: "Créez et gérez des styles de texte CAO avec police, hauteur, gras, italique, interligne, alignement et cadre. Le nouveau texte utilise le style courant."
keywords: [style de texte CAO, police CAO, style de texte nommé, gestionnaire de styles, cadre de texte CAO, alignement de texte CAO, style DXF, kulmanlab]
group: style
order: 6
---

# TextStyle

La commande `StyleTexte` ouvre le gestionnaire des styles de texte. Elle permet de créer et modifier des styles nommés et de choisir le style *courant*. Tout nouveau [Texte](../text/) copie ses réglages lors de sa création.

## Ouvrir la boîte de dialogue

- Saisissez `StyleTexte` dans le terminal, ou
- cliquez sur **Style de texte** dans le panneau **Annoter**.

Les styles visibles sont à gauche et les propriétés du style sélectionné à droite. ✓ indique le style courant. Un double-clic sélectionne un style et le rend immédiatement courant.

## Modifier les propriétés

| Champ | Fonction |
|-------|----------|
| Renommer | Utilisez le crayon près du nom pour le modifier dans la liste ; `Standard` ne peut pas être renommé. |
| Police | Police issue de la liste du [Gestionnaire de polices](../font-manager/). |
| Hauteur | Hauteur de texte positive obligatoire. Une valeur nulle ou négative devient `1` ; le gestionnaire n’accepte que les valeurs supérieures à `0`. |
| Gras / Italique | Active chaque mise en forme indépendamment. |
| Interligne | Multiplicateur de l'espace entre les lignes. |
| Alignement horizontal | Valeur par défaut : gauche, centre, droite ou justifié. |
| Cadre | Trace un cadre rectangulaire autour du nouveau texte. |

L’aperçu trace un pangramme sur deux lignes avec le même moteur que le canevas. Police, hauteur, gras, italique, cadre, interligne et alignement se mettent à jour immédiatement ; l’indicateur affiche le zoom d’ajustement. Les nouveaux styles sont alignés **à gauche** par défaut.

Les styles annotatifs importés depuis DXF sont actuellement masqués, car l'échelle annotative n'est pas encore rendue. Leurs enregistrements sont conservés.

## Créer, supprimer et définir comme courant

- **Nouveau** duplique le style sélectionné sous le nom `Style1`, `Style2`, etc.
- **Supprimer** n'est disponible que si le style n'est ni `Standard` ni courant.
- **Définir courant** applique le style sélectionné aux futurs textes. Le même choix existe dans la liste du panneau Annoter.

Un style sert de modèle au moment de la création. Le modifier ensuite ne change pas les textes existants.

## Enregistrer et clavier

**OK** applique toutes les modifications. **Fermer** ou `Escape` les annule.

| Touche | Action |
|--------|--------|
| `↑` / `↓` | Déplacer la sélection dans la liste |
| `Escape` | Annuler les modifications et fermer |

## Compatibilité DXF

Le nom, les fichiers de police, le gras, l’italique et l’indicateur annotatif sont conservés dans les styles de texte DXF. KulmanLab écrit le groupe `40` de STYLE à `0` (hauteur variable) et la dernière hauteur utilisée dans le groupe `42` ; une hauteur STYLE fixe ne remplace donc pas celle du style de cote. Le cadre, l’interligne et l’alignement horizontal sont des valeurs KulmanLab par texte, et non des champs de la table STYLE DXF.

## Commandes associées

| Commande | Fonction |
|----------|----------|
| [Text](../text/) | Dessine un texte avec le style courant |
| [FontManager](../font-manager/) | Gère les polices disponibles et personnalisées |
| [MatchProperties](../match-properties/) | Copie la hauteur du texte vers d'autres objets |
