---
sidebar_position: 1
title: Commande Move — Translater les entités sélectionnées par point de base dans KulmanLab CAD
description: La commande Move translate une ou plusieurs entités sélectionnées par un point de base et une destination. Supporte la pré-sélection, le verrouillage d'angle et la saisie de distance exacte. Tous les types d'entités sont supportés.
keywords: [commande move CAO, translater entités CAO, déplacer objets CAO, verrouillage angle move, distance exacte move, kulmanlab]
---

# Move

La commande `move` translate les entités sélectionnées d'un point de base vers une destination. La distance et la direction de translation sont définies par les deux clics — ou par le verrouillage d'angle et la saisie de distance.

## Déplacer des entités

**Avec pré-sélection :**
1. Sélectionnez les entités en cliquant ou en faisant glisser.
2. Tapez `move` ou cliquez sur **Move** dans la barre d'outils.
3. **Cliquez sur le point de base** — le point de référence de la translation.
4. **Cliquez sur la destination** — la translation s'applique et la commande se termine.

**Sans pré-sélection :**
1. Tapez `move` ou cliquez sur **Move**.
2. **Sélectionnez les entités**, puis appuyez sur **Entrée** ou **Espace**.
3. **Cliquez sur le point de base**, puis **sur la destination**.

## Verrouillage d'angle et saisie de distance

Lors de la phase de destination, le verrouillage d'angle à 45° fonctionne de la même façon que pour la commande [Line](./line). Tapez une distance et appuyez sur **Entrée** pour un déplacement précis.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X, ou distance quand l'angle est verrouillé |
| `,` | Verrouiller X et passer à la saisie Y |
| `Entrée` | Confirmer la coordonnée ou distance, ou confirmer la sélection |
| `Espace` | Confirmer la sélection |
| `Échap` | Annuler |

## DXF

Move modifie directement les coordonnées des entités dans le modèle DXF. Toutes les propriétés (couleur, calque, type de ligne) restent inchangées.
