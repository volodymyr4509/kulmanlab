---
sidebar_position: 1
title: Commande Undo — Revenir en arrière dans l'historique du dessin dans KulmanLab CAD
description: La commande Undo inverse la dernière action de dessin une étape à la fois. Jusqu'à 20 étapes sont stockées par fichier et persistées dans le navigateur entre les rechargements de page. Effectuer une nouvelle action après avoir annulé efface la pile de rétablissement.
keywords: [commande undo CAO, historique annulation CAO, inverser action CAO, étapes annulation CAO, annulation persistante navigateur, kulmanlab]
---

# Undo

La commande `undo` inverse la dernière modification apportée au dessin — une étape par invocation. Chaque ajout, suppression ou modification d'entités est enregistré comme une entrée d'historique distincte. Undo recule dans ces entrées dans l'ordre inverse.

## Comment annuler

- Tapez `undo` dans le terminal, ou
- Cliquez sur le bouton **Undo** de la barre d'outils.

Chaque invocation inverse une action enregistrée. Invoquez-la à plusieurs reprises pour reculer davantage.

## Comportement de l'historique

| Détail | Valeur |
|--------|--------|
| Étapes par fichier | Jusqu'à **20** |
| Stockage | Navigateur (IndexedDB / localStorage), par nom de fichier |
| Survit au rechargement de page | Oui — l'historique est restauré quand vous rouvrez le fichier |
| Nouvelle action après annulation | Efface toutes les entrées de rétablissement avant la position actuelle |
| Entrée la plus ancienne quand plein | Supprimée pour faire place au changement le plus récent |

Chaque mutation d'entité est enregistrée : dessiner de nouvelles entités, supprimer des entités, éditer des points finaux par poignée, appliquer Move, Rotate, Scale, Mirror, Trim, Extend et Offset — tous créent des entrées d'historique.

## Undo vs Redo

| | Undo | Redo |
|---|------|------|
| Direction | Recule **en arrière** dans l'historique | Avance **en avant** dans les entrées annulées |
| Disponible quand | Au moins une action enregistrée existe | Au moins un Undo a été effectué et aucune nouvelle action n'a été prise |
| Effacé par | Rien — l'historique s'accumule jusqu'à la limite de 20 étapes | Toute nouvelle action de dessin |

Utilisez [Redo](./redo) pour rétablir une action annulée. Les boutons de la barre d'outils sont grisés quand la direction respective n'est pas disponible.
