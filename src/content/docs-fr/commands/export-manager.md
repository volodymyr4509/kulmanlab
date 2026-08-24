---
title: Gestionnaire d'exportation — Télécharger des Dessins en DXF ou JSON
description: Le Gestionnaire d'exportation télécharge le dessin actuel sous forme de fichier DXF ou JSON (natif). Chaque format liste exactement quels types d'entités il transporte, côte à côte, afin que vous voyiez avant de télécharger ce que DXF laisse de côté — actuellement les hachures, cotes, leaders et texte.
keywords: [exporter DXF, exporter fichier CAO, télécharger DXF navigateur, enregistrer DXF en ligne, exporter JSON CAO, export KulmanLab, télécharger fichier CAO, export DXF, enregistrer dessin en fichier, téléchargement DXF]
group: file
order: 6
---

# Gestionnaire d'exportation

La commande `exportmanager` télécharge le dessin actuel vers votre système de fichiers. Deux formats sont disponibles, affichés sous forme de cartes côte à côte : **DXF** pour la compatibilité avec d'autres outils CAO et **JSON** pour des sauvegardes haute fidélité au sein de KulmanLab CAD — chaque carte liste exactement quels types d'entités ce format transporte.

## Comment exporter

1. Cliquez sur le bouton **Export** de la barre d'outils (icône de téléchargement) dans le panneau fichier, ou tapez `exportmanager` dans le terminal.
2. La fenêtre **Gestionnaire d'exportation** s'ouvre, affichant les cartes JSON et DXF côte à côte, chacune listant ce qui est exporté (et, pour DXF, ce qui est laissé de côté).
3. Cliquez sur une carte pour sélectionner le format — **JSON** ou **DXF**.
4. Cliquez sur le bouton **Export \<FORMAT\>**. Le fichier est téléchargé automatiquement dans votre dossier de téléchargements par défaut.

Appuyez sur `Échap` pour fermer la fenêtre sans exporter.

## Choisir un format

| Format | Extension | Idéal pour | Limitations |
|--------|-----------|-----------|-------------|
| **JSON** *(natif)* | `.json` | Enregistrer un travail pour le rouvrir dans KulmanLab CAD | Non compatible avec d'autres outils CAO |
| **DXF** | `.dxf` | Partage avec FreeCAD, LibreCAD, etc. | Les hachures, cotes, leaders et le texte ne sont pas exportés |

**Quand utiliser JSON :** dès que vous voulez enregistrer une copie complète de votre travail. JSON est le format natif de KulmanLab et conserve chaque entité exactement — y compris les cotes, leaders, hachures et toutes les données de calques.

**Quand utiliser DXF :** lorsque vous devez transmettre le dessin à quelqu'un utilisant une autre application CAO. Le fichier exporté utilise le format DXF AC1032 et peut être ouvert dans la plupart des outils compatibles DXF.

## Ce qui est exporté par format

### Export JSON

Chaque type d'entité est inclus :

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Cotes (linéaire, alignée, continue, rayon, diamètre)
- Leaders (multileaders)
- Hatches, y compris leur motif, échelle, angle et origine
- Layers et Linetypes

### Export DXF

Seules les entités géométriques sont incluses :

- Lines, Circles, Arcs, Ellipses, Polylines (exportées en `LWPOLYLINE`), Splines
- Layers et Linetypes

**Non exportés en DXF :** hachures, cotes, leaders et texte. Les cotes et leaders utilisent des structures de données propres à KulmanLab qui ne peuvent pas être représentées fidèlement en DXF standard ; les hachures ne s'exportent pas du tout en DXF pour l'instant, bien qu'elles s'importent depuis celui-ci ; l'export du texte n'est pas non plus implémenté. Si votre dessin contient l'un de ces éléments, utilisez JSON ou le [Gestionnaire d'impression](../print-manager/) pour les capturer.

## Nom du fichier exporté

Le fichier téléchargé porte le nom du fichier de dessin actuel (p. ex. `myplan.json`). L'extension change pour correspondre au format choisi.

## Différence entre le Gestionnaire d'exportation et le Gestionnaire d'impression

| Fonctionnalité | Gestionnaire d'exportation | Gestionnaire d'impression |
|-----------------|------------------------------|------------------------------|
| Sortie | Fichier source vectoriel (.dxf / .json) | Image matricielle (.png / .jpeg / .webp / .pdf) |
| Modifiable dans d'autres outils | Oui (DXF) | Non |
| Conserve layers & linetypes | Oui | Non (rendu à plat) |
| Capture cotes & leaders | JSON uniquement | Oui |

Utilisez le **Gestionnaire d'exportation** lorsque vous avez besoin d'un fichier modifiable. Utilisez le [Gestionnaire d'impression](../print-manager/) lorsque vous avez besoin d'un instantané visuel.

## Commandes associées

- [Import](../import/) — ouvrir un fichier DXF ou JSON
- [Gestionnaire d'impression](../print-manager/) — exporter le canevas sous forme d'image PNG, JPEG, WebP ou PDF
- [File Manager](../file-manager/) — parcourir les dessins enregistrés dans le stockage du navigateur
