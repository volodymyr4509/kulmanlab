---
sidebar_position: 20
title: Commande Fillet — Arrondir un angle entre deux lignes dans KulmanLab CAD
description: La commande Fillet relie deux entités Line avec un arc tangent de rayon spécifié, en raccordant chaque ligne jusqu'au point de tangence. Un aperçu d'arc en pointillés aide à choisir le bon angle avant de cliquer.
keywords: [commande fillet CAO, arrondir angle CAO, arc de congé, arc tangent deux lignes, kulmanlab]
---

# Fillet

La commande `fillet` connecte deux entités **Line** avec un arc tangent de rayon spécifié, en raccordant chaque ligne jusqu'au point de tangence. Un aperçu en pointillés montre l'arc avant que vous cliquiez.

## Créer un congé

1. Tapez `fillet` dans le terminal ou cliquez sur **Fillet** dans la barre d'outils.
2. **Tapez le rayon** et appuyez sur **Entrée** (ou appuyez sur **Entrée** pour utiliser le rayon précédent).
3. **Cliquez sur la première ligne**.
4. **Cliquez sur la deuxième ligne** — le congé est placé.

L'arc est tangent aux deux lignes et les deux lignes sont raccordées jusqu'aux points de tangence.

## Notes

- Fillet fonctionne sur les entités **Line uniquement**.
- Si les deux lignes ne se croisent pas et ne peuvent pas être prolongées pour se croiser, le congé ne peut pas être calculé.
- Un rayon de `0` crée un angle vif (extension/raccordement sans arc).

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Saisie du rayon |
| `Retour arrière` | Supprimer le dernier caractère |
| `Entrée` | Confirmer le rayon |
| `Échap` | Annuler |
