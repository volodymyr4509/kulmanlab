---
title: Commande StyleRepère — Gérer les styles de repère
description: Créez des styles de repère CAO avec pointe, attache, écart, rotation, police, hauteur et cadre de texte.
keywords: [style de repère CAO, style multirepère, MLEADERSTYLE, pointe de flèche CAO, attache du texte, style DXF, kulmanlab]
group: style
order: 7
---

# LeaderStyle

La commande `StyleRepère` ouvre le gestionnaire des styles de repère nommés. Chaque nouveau [Repère](../leader/) copie les réglages du style *courant* lors de sa création.

## Modifier un style

Saisissez `StyleRepère` ou cliquez sur **Style de repère** dans le panneau d’annotation. ✓ indique le style courant ; le crayon près du nom permet de le renommer. L’aperçu est actualisé immédiatement avec le même moteur de rendu que le dessin.

| Champ | Fonction |
|---|---|
| Attache du texte | Haut, Milieu, Bas ou Souligné |
| Pointe / Taille des flèches | Symbole et taille à l’extrémité de chaque branche |
| Écart du palier | Espace entre le palier et le texte |
| Rotation du texte | Angle de l’étiquette en degrés |
| Style de texte | Copie une fois police, hauteur, gras et italique depuis un [TextStyle](../text-style/) |
| Police / Hauteur du texte | Police et hauteur de l’étiquette |
| Gras / Italique | Mise en forme indépendante |
| Cadre du texte | Cadre rectangulaire autour de l’étiquette |

**Nouveau** duplique le style sélectionné. `Standard` ne peut être ni renommé ni supprimé ; le style courant ne peut pas non plus être supprimé. **Définir courant** ne concerne que les futurs repères : les objets existants ne changent pas. Un nom vide, en double ou invalide pour DXF bloque **OK**. Les styles annotatifs importés sont masqués mais conservés.

## Enregistrement et DXF

KulmanLab importe et exporte les enregistrements `MLEADERSTYLE`. Nom, pointe et taille de flèche, écart, hauteur, attache, cadre et indicateur annotatif sont conservés comme champs du style. À l’export, le groupe `342` vise le StyleTexte dont la police, le gras, l’italique et la hauteur correspondent ; sinon `Standard` est utilisé. Cette référence DXF ne transforme pas la copie ponctuelle en liaison dynamique. L’unique valeur d’attache est écrite dans les champs DXF gauche et droit.

Voir aussi [Leader](../leader/), [LeaderAdd](../leader-add/) et [LeaderRemove](../leader-remove/).
