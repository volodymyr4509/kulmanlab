---
title: LayerMatch — Réassigner les calques d'entités pour correspondre à une source dans KulmanLab CAD
description: La commande LayerMatch réassigne le calque d'une ou plusieurs entités cibles pour correspondre au calque d'une entité source sur laquelle vous cliquez.
keywords: [correspondre calque, égaliser calque CAO, réassigner calque kulmanlab, gestion calques CAO]
group: layer
order: 2
---

# LayerMatch

La commande `LayerMatch` réassigne le calque des entités sélectionnées pour correspondre au calque d'une entité source sur laquelle vous cliquez. C'est la façon la plus rapide de déplacer un groupe d'objets vers le bon calque sans ouvrir le Gestionnaire de Calques.

## Flux de travail

**Pré-sélectionner puis égaliser** :

1. Sélectionnez les entités dont vous souhaitez changer le calque.
2. Tapez `LayerMatch` ou cliquez sur le bouton **Layer Match** de la barre d'outils (icône peinture).
3. **Cliquez sur l'objet source** — celui dont vous souhaitez copier le calque.
4. Toutes les entités sélectionnées sont déplacées vers le calque de l'objet source immédiatement.

**Activer puis sélectionner** :

1. Tapez `LayerMatch` ou cliquez sur le bouton de la barre d'outils sans rien de sélectionné.
2. **Choisissez les objets cibles** — cliquez pour basculer les entités individuelles ou faites glisser pour sélectionner par zone.
3. Appuyez sur **Entrée** ou **Espace** pour confirmer la sélection.
4. **Cliquez sur l'objet source** — son calque est appliqué à toutes les cibles.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Entrée` / `Espace` | Confirmer la sélection cible et passer à la phase de sélection source |
| `Échap` | Réinitialiser — revenir à la sélection cible ou annuler complètement |

## Détails de comportement

- Seule la propriété `layer` est modifiée — la couleur, le type de ligne, l'épaisseur de ligne et la géométrie ne sont pas affectés.
- L'objet source lui-même n'est pas modifié.
- La commande se termine après avoir cliqué sur la source.
- Cliquer sur le canevas vide pendant la phase de sélection source ne fait rien.
