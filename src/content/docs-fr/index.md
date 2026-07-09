---
title: KulmanLab CAD — Référence des commandes
description: Référence des commandes KulmanLab CAD — guide complet de toutes les commandes de dessin, d'édition, d'annotation, de calques, de mesure et de fichiers dans KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, commandes CAO, CAO gratuite navigateur, éditeur DXF en ligne, commandes de dessin, kulmanlab]
---

# KulmanLab CAD — Référence des commandes

Bienvenue dans la référence des commandes **KulmanLab CAD**. [KulmanLab CAD](https://kulmanlab.com) est un outil CAO gratuit basé sur navigateur pour dessiner, éditer et exporter des fichiers DXF — sans installation requise. Utilisez la barre latérale pour parcourir toutes les commandes disponibles groupées par panneau.

## Formes

| Commande | Ce qu'elle fait |
|----------|----------------|
| [Line](./commands/line/) | Trace un segment de droite entre deux points |
| [Polyline](./commands/polyline/) | Trace un chemin ouvert multi-segments |
| [Rectangle](./commands/rectangle/) | Trace un rectangle aligné sur les axes |
| [Circle](./commands/circle/) | Trace un cercle par centre et rayon |
| [Arc](./commands/arc/) | Trace un arc à travers trois points |
| [Ellipse](./commands/ellipse/) | Trace une ellipse par centre et deux axes |
| [Text](./commands/text/) | Place un label de texte sur le canevas |
| [Spline CV](./commands/spline-cv/) | Trace une spline en plaçant des sommets de contrôle |
| [Spline Fit](./commands/spline-fit/) | Trace une spline passant par les points cliqués |

## Édition

| Commande | Ce qu'elle fait |
|----------|----------------|
| [Move](./commands/move/) | Déplace les entités sélectionnées vers une nouvelle position |
| [Copy](./commands/copy/) | Copie les entités sélectionnées vers une nouvelle position |
| [Rotate](./commands/rotate/) | Fait pivoter les entités sélectionnées autour d'un point de base |
| [Mirror](./commands/mirror/) | Symétrise les entités sélectionnées par rapport à une ligne |
| [Scale](./commands/scale/) | Met à l'échelle les entités sélectionnées autour d'un point de base |
| [Align](./commands/align/) | Translate, fait pivoter et redimensionne des entités à l'aide de paires de points |
| [Delete](./commands/delete/) | Supprime les entités sélectionnées du dessin |
| [Trim](./commands/trim/) | Raccorde un segment de ligne à ses intersections |
| [Extend](./commands/extend/) | Prolonge une ligne jusqu'à l'intersection limite la plus proche |
| [Offset](./commands/offset/) | Crée une copie parallèle d'une entité à une distance donnée |
| [Fillet](./commands/fillet/) | Arrondit un angle entre deux lignes avec un arc tangent |
| [Chamfer](./commands/chamfer/) | Coupe un angle diagonal droit entre deux lignes ou polylignes |
| [Undo](./commands/undo/) | Annule la dernière action |
| [Redo](./commands/redo/) | Rétablit la dernière action annulée |

## Annotation

| Commande | Ce qu'elle fait |
|----------|----------------|
| [Leader](./commands/leader/) | Trace une annotation multi-repère avec pointe de flèche et texte |
| [Leader+](./commands/leader-add/) | Ajoute un bras supplémentaire à un multi-repère existant |
| [Leader−](./commands/leader-remove/) | Supprime un bras d'un multi-repère existant |
| [Dimension Linear](./commands/dim-linear/) | Ajoute une cote horizontale ou verticale |
| [Dimension Aligned](./commands/dim-aligned/) | Ajoute une cote alignée sur deux points |
| [Dimension Continue](./commands/dim-continue/) | Enchaîne une nouvelle cote à partir de la dernière |
| [Dimension Radius](./commands/dim-radius/) | Ajoute une cote de rayon à un cercle ou un arc |
| [Dimension Diameter](./commands/dim-diameter/) | Ajoute une cote de diamètre à un cercle |
| [Dimension Angular](./commands/dim-angular/) | Ajoute une cote angulaire à deux lignes, un arc ou un cercle |

## Calque

| Commande | Ce qu'elle fait |
|----------|----------------|
| [LayerMakeCurrent](./commands/layer-make-current/) | Définit le calque actif pour qu'il corresponde au calque de l'entité cliquée |
| [LayerMatch](./commands/layer-match/) | Réassigne les entités sélectionnées au calque d'une entité source |
| [LayerIsolate](./commands/layer-isolate/) | Gèle tous les calques sauf ceux des entités sélectionnées |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | Dégèle tous les calques en une seule étape |

## Mises en page

| Commande | Ce qu'elle fait |
|----------|----------------|
| [ViewportRectangle](./commands/viewport-rectangle/) | Crée une fenêtre de vue dans un layout papier en sélectionnant deux coins |
| [ViewportCopy](./commands/viewport-copy/) | Duplique une fenêtre de vue vers une nouvelle position |
| [PageManager](./commands/page-manager/) | Modifie le format papier et l'échelle du layout actif |

## Navigation

| Commande | Ce qu'elle fait |
|----------|----------------|
| [Pan](./commands/pan/) | Cliquez et faites glisser pour déplacer la fenêtre de vue |
| [Zoom In](./commands/zoom-in/) | Effectue un zoom avant dans la fenêtre de vue |
| [Zoom Out](./commands/zoom-out/) | Effectue un zoom arrière dans la fenêtre de vue |
| [Fit](./commands/fit/) | Ajuste toutes les entités dans la fenêtre de vue |

## Mesure

| Commande | Ce qu'elle fait |
|----------|----------------|
| [Distance](./commands/distance/) | Mesure la distance entre deux points |
| [Angle](./commands/angle/) | Mesure l'angle entre trois points |
| [Area](./commands/area/) | Mesure l'aire et le périmètre d'un polygone |

## Style

| Commande | Ce qu'elle fait |
|----------|----------------|
| [Match Properties](./commands/match-properties/) | Copie la couleur, le calque et d'autres propriétés d'une entité vers d'autres |
| [Font Manager](./commands/font-manager/) | Parcourez, sélectionnez et téléversez des polices TTF personnalisées |

## Fichier

| Commande | Ce qu'elle fait |
|----------|----------------|
| [Import](./commands/import/) | Ouvre un fichier de dessin DXF ou JSON |
| [New File](./commands/new-file/) | Démarre un nouveau dessin vierge |
| [Files](./commands/files/) | Parcourir et restaurer les dessins récents |
| [Print](./commands/print/) | Exporte une zone de dessin en image ou PDF |
| [Export](./commands/export/) | Télécharge le dessin en DXF ou JSON |
| [WipeStorage](./commands/wipestorage/) | Efface tous les dessins du stockage du navigateur |

## Récupération

Si l'application plante à chaque démarrage (par exemple après avoir travaillé avec des coordonnées extrêmement grandes), vous pouvez effacer toutes les données stockées localement en ajoutant `?reset` à l'URL :

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Cela supprime tout de la base de données locale du navigateur et démarre un nouveau dessin vierge. Le paramètre `?reset` se supprime automatiquement de l'URL. Utilisez ceci en dernier recours lorsque [WipeStorage](./commands/wipestorage/) est inaccessible parce que l'application ne se charge pas du tout.

## Comment fonctionnent les commandes

Chaque commande suit le même schéma :

1. **Activer** — cliquez sur le bouton de la barre d'outils ou tapez le nom de la commande dans le terminal en bas de l'écran.
2. **Suivre l'invite** — le terminal indique quelle entrée est attendue ensuite.
3. **Terminer ou annuler** — la plupart des commandes se terminent automatiquement après la dernière entrée. Appuyez sur **Échap** à tout moment pour annuler.

## Sélectionner des objets

Plusieurs commandes d'édition (Move, Copy, Rotate, Mirror, Scale, Delete) partagent le même comportement de sélection :

- **Cliquez** sur une entité pour la sélectionner ou la désélectionner.
- **Faites glisser vers la droite** (de gauche à droite) pour la sélection stricte — seules les entités entièrement dans le cadre sont sélectionnées.
- **Faites glisser vers la gauche** (de droite à gauche) pour la sélection croisée — toute entité qui croise le cadre est sélectionnée.
- Appuyez sur **Entrée** ou **Espace** pour confirmer la sélection et passer à l'étape suivante.
