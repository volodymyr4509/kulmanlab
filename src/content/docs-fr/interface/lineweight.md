---
title: Sélecteur d'Épaisseur de Ligne — Contrôler la Largeur de Trait
description: Le sélecteur d'épaisseur de ligne dans la barre d'outils de KulmanLab CAD définit la largeur de trait appliquée à toutes les nouvelles entités dessinées. Prend en charge les valeurs standard d'épaisseur de ligne DXF de 0,00 mm à 2,11 mm plus les modes ParCalque et Défaut.
keywords: [épaisseur ligne CAO, largeur trait, largeur ligne, épaisseur ligne DXF, épaisseur ligne ParCalque, kulmanlab]
group: interface
order: 4
---

# Lineweight

Le chip **lineweight** dans la barre d'outils contrôle la largeur de trait assignée à chaque nouvelle entité que vous dessinez. Cliquez dessus pour ouvrir le menu déroulant du sélecteur.

## Options

| Valeur | Signification |
|--------|---------------|
| **From Layer** | L'entité hérite de l'épaisseur de ligne définie dans son calque. La largeur réelle affichée dépend de la configuration du calque. |
| **Default** | Utilise la largeur par défaut de l'application — rendue comme une ligne fine (1 px). Ne remplace pas la configuration du calque en DXF. |
| **0,00 mm – 2,11 mm** | Une largeur fixe explicite. L'entité porte cette valeur indépendamment de l'épaisseur de ligne de son calque. |

Les valeurs standard d'épaisseur de ligne DXF sont disponibles : 0,00, 0,05, 0,09, 0,13, 0,15, 0,18, 0,20, 0,25, 0,30, 0,35, 0,40, 0,50, 0,53, 0,60, 0,70, 0,80, 0,90, 1,00, 1,06, 1,20, 1,40, 1,58, 2,00 et 2,11 mm.

## Comment c'est appliqué

L'épaisseur de ligne sélectionnée s'applique à chaque entité créée après le changement. Elle n'affecte pas rétroactivement les entités existantes.

Pour changer l'épaisseur de ligne des entités existantes, sélectionnez-les et modifiez le champ **Lineweight** dans le panneau de propriétés, ou utilisez [MatchProperties](../../commands/match-properties/) pour le copier depuis une autre entité.

## Rendu

Les épaisseurs de ligne sont rendues à une échelle de **3,78 px par mm** (96 dpi). Une ligne de 0,25 mm fait environ 1 px de large à l'écran ; une ligne de 1,00 mm fait environ 4 px. Les valeurs très fines (0,00 mm et négatives) sont toujours rendues à un minimum de 0,5 px pour rester visibles à tout niveau de zoom.

## Compatibilité DXF

Les valeurs d'épaisseur de ligne sont stockées comme entiers en centièmes de millimètre (ex. 25 = 0,25 mm) dans les enregistrements d'entités DXF `LWPOLYLINE`, `LINE`, `CIRCLE` et autres. **From Layer** est stocké comme `-1` et **Default** comme `-3`, conformément à la spécification DXF. Les fichiers sont préservés sans perte dans toute application compatible DXF.
