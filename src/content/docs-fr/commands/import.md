---
title: Import — Ouvrir des fichiers DXF ou JSON dans KulmanLab CAD
description: Utilisez la commande Import pour ouvrir des fichiers DXF ou JSON de KulmanLab dans KulmanLab CAD. Prend en charge les lignes, cercles, arcs, polylignes, splines, textes, cotes et lignes de répère.
keywords: [importer fichier DXF, ouvrir DXF navigateur, importer fichier CAO en ligne, ouvrir fichier DXF, visionneur DXF navigateur, importer JSON CAO, importer KulmanLab, visionneur CAO DXF gratuit, charger dessin, DXF navigateur]
group: file
order: 1
---

# Import

La commande **Import** charge un dessin existant depuis le système de fichiers local dans KulmanLab CAD. Les formats standard **DXF** et le format **JSON** natif de KulmanLab sont tous deux pris en charge.

## Comment importer un fichier

1. Cliquez sur le bouton **Import** dans la barre d'outils (icône dossier) dans le panneau Fichier en haut de l'écran.
2. Le sélecteur de fichiers du navigateur s'ouvre. Naviguez jusqu'à votre fichier de dessin et sélectionnez-le.
3. Le dessin se charge immédiatement sur le canevas. La vue s'ajuste automatiquement à toutes les entités.

Vous pouvez également glisser-déposer un fichier directement sur le canevas.

## Formats de fichier pris en charge

| Format | Extension | Quand l'utiliser |
|--------|-----------|-----------------|
| **DXF** | `.dxf` | Dessins de FreeCAD, LibreCAD ou d'autres outils CAO |
| **JSON** *(natif)* | `.json` | Dessins précédemment enregistrés depuis KulmanLab CAD — fidélité totale |

## Ce qui est importé depuis DXF

KulmanLab analyse les types d'entités DXF suivants :

| Type d'entité | Code DXF | Notes |
|---------------|----------|-------|
| Ligne | `LINE` | |
| Cercle | `CIRCLE` | |
| Arc | `ARC` | |
| Ellipse | `ELLIPSE` | |
| Polyligne | `LWPOLYLINE` | |
| Spline | `SPLINE` | |
| Texte | `TEXT`, `MTEXT` | |
| Cote | `DIMENSION` | |
| Multirépère | `MULTILEADER` | |
| Hatch | `HATCH` | Le nom, l'échelle et l'angle du motif sont lus ; un nom absent de votre bibliothèque de motifs revient à ANSI31. Voir [Hatch](../hatch/) |

Les définitions de calques et les tables de types de ligne sont aussi importées du fichier DXF quand elles sont présentes.

Les entités utilisant des types DXF non pris en charge sont ignorées silencieusement — le reste du dessin se charge quand même.

## Nom et stockage des fichiers

Le fichier importé conserve son nom d'origine. Si ce nom est déjà utilisé par un autre dessin sauvegardé, un suffixe de style Finder/Explorer est ajouté automatiquement (`myplan (2)`, `myplan (3)`, …) afin que l'entrée existante ne soit jamais écrasée. Vous pouvez renommer le fichier ensuite depuis le [File Manager](../file-manager/#renommer-un-fichier).

Le dessin est automatiquement sauvegardé dans le stockage du navigateur (IndexedDB) après l'importation, il apparaît donc dans le panneau [File Manager](../file-manager/) et survit aux rechargements de page.

## Ce qui se passe avec le dessin actuel

L'importation remplace le canevas actuel. Il n'y a pas de fusion ni d'ajout. Si vous avez des modifications non enregistrées, [exportez](../export-manager/) d'abord le dessin actuel.

## Au démarrage

KulmanLab rouvre automatiquement le fichier modifié le plus récemment quand la page se charge. S'il n'existe aucun fichier sauvegardé, un dessin d'exemple par défaut est chargé.

## Résolution de problèmes

| Problème | Cause probable | Solution |
|----------|----------------|----------|
| Le canevas est vide après l'import | Les entités DXF utilisent des types non pris en charge (ex. INSERT) | Les entités ont été ignorées — le terminal liste chaque type ignoré avec un nombre, par exemple `Could not read INSERT: 12`. Un fichier qui n'est pas du tout un dessin valide signale `Could not read <file>: not a valid drawing file` |
| Le bouton Import ne fait rien | Le navigateur a bloqué le sélecteur de fichiers | Cliquez à nouveau sur le bouton ; certains navigateurs nécessitent un nouveau geste de l'utilisateur |
| Les cotes semblent incorrectes | DXF d'un outil qui écrit une géométrie de cotes non standard | Réexportez depuis l'application d'origine en utilisant une version DXF récente |

## Commandes associées

- [Export Manager](../export-manager/) — télécharger le dessin actuel en DXF ou JSON
- [File Manager](../file-manager/) — parcourir et restaurer les dessins sauvegardés dans le navigateur
- [New File](../new-file/) — démarrer un dessin vierge
