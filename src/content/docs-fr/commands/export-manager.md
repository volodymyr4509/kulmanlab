---
title: Gestionnaire d'exportation — Télécharger des Dessins en DXF ou JSON
description: Téléchargez le dessin en DXF ou en JSON en cochant, par type d'entité, ce qui y entre. Les deux emportent géométrie, texte, cotations, repères et hachures.
keywords: [exporter DXF, exporter fichier CAO, télécharger DXF navigateur, enregistrer DXF en ligne, exporter JSON CAO, export KulmanLab, télécharger fichier CAO, export DXF, enregistrer dessin en fichier, téléchargement DXF]
group: file
order: 6
---

# Gestionnaire d'exportation

La commande `exportmanager` télécharge le dessin courant sur votre système de fichiers. Deux formats côte à côte — **DXF** pour la compatibilité avec les autres outils CAO et **JSON** pour des sauvegardes fidèles au sein de KulmanLab CAD — chacun avec sa propre liste de ce qu'il faut mettre dans le fichier.

## Comment exporter

1. Cliquez sur le bouton **Export** de la barre d'outils (icône de téléchargement) dans le panneau fichier, ou tapez `exportmanager` dans le terminal.
2. La fenêtre **Export Manager** s'ouvre sur deux colonnes, **JSON** et **DXF**, chacune listant les types d'entités du dessin avec une case à cocher et un décompte.
3. Décochez ce que vous voulez laisser de côté. Tout est coché au départ.
4. Cliquez sur **Export JSON** ou **Export DXF**. Le fichier arrive dans votre dossier de téléchargements et la fenêtre se ferme.

Appuyez sur `Échap` pour fermer la fenêtre sans exporter.

## Choisir ce qui est exporté

Les deux colonnes listent les mêmes types d'entités, chacun avec le nombre présent dans le dessin :

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Tout est coché à l'ouverture, un export immédiat vous donne donc le dessin entier. Décochez un type pour l'exclure de ce fichier-là seulement.

- **Les deux colonnes sont indépendantes.** Décocher Hatches côté DXF ne change rien à ce que produit **Export JSON** : chaque format garde sa propre sélection.
- **Ce que vous n'avez pas est grisé.** Une ligne dont le décompte vaut `0` ne peut pas être cochée ; la liste sert donc aussi d'inventaire rapide du dessin.
- **Les décomptes sont un instantané.** Pris à l'ouverture, ils ne se mettent pas à jour si le dessin change derrière. Fermez et rouvrez pour les rafraîchir.
- **Rien n'est supprimé.** Décocher ne façonne que le fichier exporté ; le dessin lui-même reste intact.

**Linear Dimensions** couvre les cotations linéaires, alignées et continues : un seul type d'entité créé par trois commandes différentes. Rayon, diamètre et angle ont chacun leur ligne.

Pour un fichier de découpe, décochez Text, les quatre lignes de cotation, Leaders et Hatches, puis cliquez sur **Export DXF** — voir [préparer un DXF pour la découpe laser](/fr/blog/prepare-dxf-for-laser-cutting/).

## Choisir un format

| Format | Extension | Idéal pour | Limitations |
|--------|-----------|-----------|-------------|
| **JSON** *(natif)* | `.json` | Enregistrer un travail pour le rouvrir dans KulmanLab CAD | Non compatible avec d'autres outils CAO |
| **DXF** | `.dxf` | Partage avec FreeCAD, LibreCAD, etc. | Ce qui subsiste dépend du logiciel destinataire |

**Quand utiliser JSON :** dès que vous voulez enregistrer une copie complète de votre travail. JSON est le format natif de KulmanLab et conserve chaque entité exactement — y compris les cotes, leaders, hachures et toutes les données de calques.

**Quand utiliser DXF :** lorsque vous devez transmettre le dessin à quelqu'un utilisant une autre application CAO. Le fichier exporté utilise le format DXF AC1032 et peut être ouvert dans la plupart des outils compatibles DXF.

## Ce qui est exporté par format

### Export JSON

Chaque type d'entité est inclus :

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Cotes (linéaire, alignée, continue, rayon, diamètre, angle)
- Leaders (multileaders)
- Hatches, y compris leur motif, échelle, angle et origine
- Layers et Linetypes

### Export DXF

Chaque type d'entité est inclus :

- Lines, Circles, Arcs, Ellipses, Polylines (exportées en `LWPOLYLINE`), Splines
- Text
- Cotes (linéaire, alignée, continue, rayon, diamètre, angle)
- Leaders (multileaders)
- Hatches, y compris leur motif, échelle, angle et origine
- Layers et Linetypes

Le fichier est écrit en DXF AC1032 : un dessin exporté depuis KulmanLab s'ouvre donc avec son annotation intacte dans les autres outils compatibles DXF, au lieu d'arriver en géométrie nue.

Ce que chaque logiciel destinataire en fait ensuite varie toujours — la prise en charge du DXF diffère d'un outil à l'autre, et un plus ancien peut ignorer des entités qu'un plus récent lit. Si un dessin doit être identique partout, [Gestionnaire d'impression](../print-manager/) le capture plutôt en PDF ou en image.

## Nom du fichier exporté

Le fichier téléchargé porte le nom du fichier de dessin actuel (p. ex. `myplan.json`). L'extension change pour correspondre au format choisi. Un dessin jamais nommé s'exporte sous le nom `drawing.dxf` ou `drawing.json`.

## Différence entre le Gestionnaire d'exportation et le Gestionnaire d'impression

| Fonctionnalité | Gestionnaire d'exportation | Gestionnaire d'impression |
|-----------------|------------------------------|------------------------------|
| Sortie | Fichier source vectoriel (.dxf / .json) | Image matricielle (.png / .jpeg / .webp / .pdf) |
| Modifiable dans d'autres outils | Oui (DXF) | Non |
| Conserve layers & linetypes | Oui | Non (rendu à plat) |
| Capture cotes & leaders | Oui | Oui |

Utilisez le **Gestionnaire d'exportation** lorsque vous avez besoin d'un fichier modifiable. Utilisez le [Gestionnaire d'impression](../print-manager/) lorsque vous avez besoin d'un instantané visuel.

## Commandes associées

- [Import](../import/) — ouvrir un fichier DXF ou JSON
- [Gestionnaire d'impression](../print-manager/) — exporter le canevas sous forme d'image PNG, JPEG, WebP ou PDF
- [File Manager](../file-manager/) — parcourir les dessins enregistrés dans le stockage du navigateur
