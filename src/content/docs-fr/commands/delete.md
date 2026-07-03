---
sidebar_position: 6
title: Commande Delete — Supprimer des entités du dessin dans KulmanLab CAD
description: La commande Delete supprime les entités sélectionnées de façon permanente (annulable). Les entités pré-sélectionnées sont supprimées instantanément sans étape de confirmation. La touche Suppr fonctionne comme raccourci global même sans activer la commande. Supporte la sélection par clic et par zone.
keywords: [commande delete CAO, supprimer entités CAO, effacer objets CAO, touche suppr CAO, annuler suppression CAO, kulmanlab]
---

# Delete

La commande `delete` supprime les entités sélectionnées du dessin. Les suppressions sont enregistrées dans l'historique [Undo](../undo/) et peuvent être annulées avec jusqu'à 20 étapes. Il n'y a pas de dialogue séparé de confirmation — la confirmation est une simple pression de touche.

## Deux façons de supprimer

**Pré-sélectionner, puis supprimer** — le chemin le plus rapide :

1. Sélectionnez une ou plusieurs entités sur le canevas.
2. Tapez `delete` dans le terminal, cliquez sur le bouton **Delete** de la barre d'outils, **ou appuyez directement sur la touche `Suppr`**.

Les entités sont supprimées instantanément — aucune étape de confirmation supplémentaire.

**Activer, puis sélectionner** :

1. Tapez `delete` ou cliquez sur le bouton de la barre d'outils (sans rien de sélectionné).
2. **Sélectionnez les objets** — cliquez pour basculer, ou faites glisser pour sélectionner par zone.
3. Appuyez sur **Entrée**, **Espace**, ou **Suppr** pour confirmer et supprimer les entités sélectionnées.

## Raccourci clavier global

La touche `Suppr` du clavier agit comme un **raccourci global** — si des entités sont actuellement sélectionnées, appuyer dessus les supprime immédiatement, même sans ouvrir la commande Delete dans le terminal. C'est le flux de travail de suppression en une seule étape le plus rapide :

```
Cliquer sur l'entité → appuyer sur Suppr → terminé
```

## Sélection pendant la commande

| Méthode | Comportement |
|---------|-------------|
| **Clic** | Bascule l'entité sous le curseur dans/hors de la sélection |
| **Glisser à droite** (strict) | Sélectionne uniquement les entités entièrement à l'intérieur du cadre |
| **Glisser à gauche** (croisement) | Sélectionne les entités qui intersectent la limite du cadre |
| **Entrée** / **Espace** / **Suppr** | Confirme et supprime les entités sélectionnées |

## Récupérer les entités supprimées

Les suppressions sont annulables avec la commande [Undo](../undo/) (tapez `undo` ou utilisez le bouton de la barre d'outils). Jusqu'à **20 étapes** peuvent être annulées par fichier, et l'historique persiste entre les rechargements de page. Si vous avez dépassé 20 suppressions sans sauvegarder, les suppressions antérieures ne peuvent pas être récupérées.

## Entités supportées

Delete fonctionne sur tous les types d'entités — Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader, et tous les autres.
