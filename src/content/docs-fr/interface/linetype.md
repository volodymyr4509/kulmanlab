---
sidebar_position: 2
title: Sélecteur de Type de Ligne dans la Barre d'Outils — Contrôler les Motifs de Tirets dans KulmanLab CAD
description: Le sélecteur de type de ligne dans la barre d'outils de KulmanLab CAD définit le motif de tirets appliqué à toutes les nouvelles entités dessinées. Prend en charge tous les types de ligne chargés depuis le fichier DXF actuel plus les options intégrées ParCalque, ParBloc et Continu.
keywords: [type de ligne CAO, motif tirets, ligne pointillée, type ligne DXF, type ligne ParCalque, kulmanlab]
---

# Linetype

Le chip **linetype** dans la barre d'outils contrôle le motif de tirets assigné à chaque nouvelle entité que vous dessinez. Cliquez dessus pour ouvrir le menu déroulant du sélecteur.

## Options

| Valeur | Signification |
|--------|---------------|
| **From Layer** | L'entité hérite du type de ligne défini dans son calque. Affiché comme `ByLayer` en DXF. |
| **ByBlock** | L'entité hérite du type de ligne du bloc auquel elle appartient. Aucun effet visible en dehors d'un bloc. |
| **Continuous** | Ligne continue solide — sans motif de tirets. |
| **Types de ligne nommés** | Tout type de ligne chargé depuis le fichier DXF actuel (ex. `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM`, …). Le menu déroulant affiche un aperçu en direct de chaque motif et sa chaîne de définition. |

## Comment c'est appliqué

Le type de ligne sélectionné s'applique à chaque entité créée après le changement. Il n'affecte pas rétroactivement les entités existantes.

Pour changer le type de ligne des entités existantes, sélectionnez-les et modifiez le champ **Linetype** dans le panneau de propriétés, ou utilisez [MatchProperties](../commands/match-properties) pour le copier depuis une autre entité.

## Échelle de type de ligne

Chaque entité a aussi une propriété **Linetype Scale** (par défaut `1`). Le motif de tirets est multiplié par ce facteur. Une valeur de `2` rend les tirets deux fois plus longs ; `0,5` les rend deux fois plus courts. Modifiez-la dans le panneau de propriétés après avoir sélectionné une entité.

## Types de ligne disponibles

Le menu déroulant liste uniquement les types de ligne présents dans le fichier DXF actuellement chargé. Un fichier nouvellement créé ne contient que `ByLayer`, `ByBlock` et `Continuous`. Lors de l'importation d'un fichier DXF, tous les types de ligne définis dans la table `$LTYPE` du fichier deviennent disponibles.

Si vous avez besoin d'un type de ligne spécifique (ex. `DASHED2`) qui n'est pas dans la liste, importez un fichier DXF qui le contient — le type de ligne apparaîtra alors dans le sélecteur pour la session actuelle.

## Compatibilité DXF

Les noms de types de ligne sont stockés comme chaînes dans les enregistrements d'entités. `ByLayer` et `ByBlock` sont les valeurs sentinelles standard DXF. Tous les types de ligne nommés et leurs motifs de tirets sont préservés exactement lors de l'export et conservés sans perte dans LibreCAD, FreeCAD et autres applications compatibles DXF.
