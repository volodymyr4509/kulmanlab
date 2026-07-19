---
title: Export — Télécharger des Dessins en DXF ou JSON
description: La commande Export télécharge le dessin actuel en fichier DXF (compatible) ou JSON (natif). JSON préserve toutes les entités y compris les cotes et répères ; DXF est compatible avec d'autres outils CAO.
keywords: [exporter DXF, exporter fichier CAO, télécharger DXF navigateur, sauvegarder DXF en ligne, exporter JSON CAO, export KulmanLab, téléchargement fichier CAO, exportation DXF, sauvegarder dessin en fichier, téléchargement DXF]
group: file
order: 5
---

# Export

La commande **Export** télécharge le dessin actuel vers votre système de fichiers. Deux formats sont disponibles : **DXF** pour la compatibilité avec d'autres outils CAO et **JSON** pour des sauvegardes haute fidélité dans KulmanLab CAD.

## Comment exporter

1. Cliquez sur le bouton **Export** dans la barre d'outils (icône téléchargement) dans le panneau Fichier.
2. La fenêtre contextuelle du **Gestionnaire d'export** s'ouvre.
3. Cliquez sur une carte de format pour le sélectionner — **JSON** ou **DXF**.
4. Cliquez sur le bouton **Export**. Le fichier se télécharge automatiquement vers votre dossier de téléchargements par défaut.

## Choisir un format

| Format | Extension | Idéal pour | Limitations |
|--------|-----------|------------|-------------|
| **JSON** *(natif)* | `.json` | Sauvegarder du travail pour le rouvrir dans KulmanLab CAD | Non compatible avec d'autres outils CAO |
| **DXF** | `.dxf` | Partager avec FreeCAD, LibreCAD, etc. | Les cotes et répères ne sont pas exportés |

**Quand utiliser JSON :** chaque fois que vous voulez sauvegarder une copie complète de votre travail. JSON est le format natif de KulmanLab et préserve chaque entité exactement — y compris les cotes, les répères et toutes les données de calques.

**Quand utiliser DXF :** quand vous devez livrer le dessin à quelqu'un utilisant une autre application CAO. Le fichier exporté utilise le format DXF AC1012 et peut être ouvert dans la plupart des outils compatibles DXF.

## Ce qui est exporté par format

### Export JSON

Tous les types d'entités sont inclus :

- Lignes, cercles, arcs, ellipses, polylignes, splines, texte
- Cotes (linéaire, alignée, continue, rayon, diamètre)
- Multirépères
- Définitions de calques et tables de types de ligne

### Export DXF

Seules les entités géométriques sont incluses :

- Lignes, cercles, arcs, ellipses, polylignes (exportées comme `LWPOLYLINE`), splines, texte
- Définitions de calques et tables de types de ligne

**Non inclus dans DXF :** entités de cotes et multirépères. Ceux-ci utilisent des structures de données spécifiques à KulmanLab qui ne peuvent pas être représentées fidèlement en DXF standard. Si votre dessin comporte des annotations, utilisez JSON ou [Print](../print/) pour les capturer visuellement.

## Nom du fichier exporté

Le fichier téléchargé porte le nom du fichier de dessin actuel (ex. `myplan_May22_14:30:00.json`). L'extension change pour correspondre au format choisi.

## Différence entre Export et Print

| Caractéristique | Export | Print |
|-----------------|--------|-------|
| Sortie | Fichier source vectoriel (.dxf / .json) | Image rastérisée (.png / .jpeg / .webp / .pdf) |
| Modifiable dans d'autres outils | Oui (DXF) | Non |
| Préserve calques et types de ligne | Oui | Non (rendu plat) |
| Capture cotes et répères | JSON uniquement | Oui |

Utilisez **Export** quand vous avez besoin d'un fichier modifiable. Utilisez [Print](../print/) quand vous avez besoin d'un instantané visuel.

## Commandes associées

- [Import](../import/) — ouvrir un fichier DXF ou JSON
- [Print](../print/) — exporter le canevas en image PNG, JPEG, WebP ou PDF
- [Files](../files/) — parcourir les dessins sauvegardés dans le stockage du navigateur
