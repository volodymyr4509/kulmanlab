---
sidebar_position: 2
title: Commande Redo — Rétablir les actions annulées dans KulmanLab CAD
description: La commande Redo rétablit la dernière action inversée par Undo, avançant dans la pile d'historique. Redo n'est disponible qu'après un Undo et est effacé dès qu'une nouvelle action de dessin est effectuée.
keywords: [commande redo CAO, rétablir historique CAO, réappliquer action CAO, annuler rétablir CAO, redo persistant navigateur, kulmanlab]
---

# Redo

La commande `redo` avance dans l'historique des annulations, rétablissant les actions qui ont été inversées par [Undo](../undo/). Redo n'est disponible que quand vous avez reculé avec Undo et n'avez pas encore fait un nouveau changement.

## Comment rétablir

- Tapez `redo` dans le terminal, ou
- Cliquez sur le bouton **Redo** de la barre d'outils.

Chaque invocation rétablit une action précédemment annulée. Invoquez-la à plusieurs reprises pour avancer dans toutes les entrées de rétablissement disponibles.

## Comportement de la pile de rétablissement

| Détail | Comportement |
|--------|-------------|
| Disponible après | Un ou plusieurs pas [Undo](../undo/) |
| Effacé par | **Toute nouvelle action de dessin** — ajouter, modifier ou supprimer une entité |
| Stockage | Navigateur, par fichier — survit au rechargement de page (tant qu'aucune nouvelle action n'a été faite avant le rechargement) |
| Profondeur maximale | Jusqu'à 20 entrées (même pool qu'Undo) |

Une fois qu'une nouvelle entité est tracée, supprimée ou modifiée, la pile de rétablissement est effacée et ces entrées ne peuvent pas être récupérées. Seules les actions annulées qui n'ont pas été supplantées par un nouveau travail peuvent être rétablies.

## Redo vs Undo

| | Redo | Undo |
|---|------|------|
| Direction | Avance **en avant** dans les entrées annulées | Recule **en arrière** dans l'historique |
| Disponible quand | Après au moins un Undo, sans nouvelle action effectuée | Au moins une action enregistrée existe |
| Effacé par | Toute nouvelle action de dessin | Rien |

Le bouton Redo de la barre d'outils est grisé quand il n'y a pas d'entrées à rétablir. Utilisez [Undo](../undo/) d'abord pour créer des entrées de rétablissement.
