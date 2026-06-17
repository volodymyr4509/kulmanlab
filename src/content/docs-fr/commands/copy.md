---
sidebar_position: 3
title: Commande Copy — Dupliquer des entités à une nouvelle position dans KulmanLab CAD
description: La commande Copy crée des duplicatas traduits des entités sélectionnées tout en laissant les originaux en place. Supporte la pré-sélection, le verrouillage d'angle et la saisie de distance exacte.
keywords: [commande copy CAO, dupliquer entités CAO, copier objets CAO, cloner géométrie CAO, kulmanlab]
---

# Copy

La commande `copy` crée des copies des entités sélectionnées à une nouvelle position, en laissant les originaux en place. La commande est **collante** : après chaque copie, elle reste active pour placer une autre copie jusqu'à ce que vous appuyiez sur **Entrée** ou **Échap**.

## Copier des entités

**Avec pré-sélection :**
1. Sélectionnez les entités.
2. Tapez `copy` ou cliquez sur **Copy**.
3. **Cliquez sur le point de base**.
4. **Cliquez sur la destination** — la copie est placée et la commande attend la prochaine destination.
5. Continuez à cliquer pour placer d'autres copies. Appuyez sur **Entrée** ou **Échap** pour terminer.

**Sans pré-sélection :**
1. Tapez `copy` ou cliquez sur **Copy**.
2. **Sélectionnez les entités**, puis appuyez sur **Entrée** ou **Espace**.
3. **Cliquez sur le point de base**, puis **sur les destinations**.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Saisie de coordonnée X ou distance |
| `,` | Verrouiller X et passer à Y |
| `Entrée` | Confirmer ou terminer le placement de copies |
| `Espace` | Confirmer la sélection |
| `Échap` | Terminer le placement de copies |
