---
sidebar_position: 21
title: Commande Chamfer — Couper un angle diagonal entre deux lignes dans KulmanLab CAD
description: La commande Chamfer relie deux entités Line ou Polyline avec une coupe diagonale droite. Vous spécifiez deux distances — une le long de chaque entité — et la commande raccorde les deux jusqu'à ces points et insère une ligne de raccordement.
keywords: [commande chamfer CAO, chanfrein ligne CAO, coupe angle diagonale, biseauter angle CAO, kulmanlab]
---

# Chamfer

La commande `chamfer` connecte deux entités **Line** ou **Polyline** avec une coupe diagonale droite. Vous spécifiez deux distances de raccordement — une le long de chaque entité — et la commande raccorde les deux lignes jusqu'à ces points et insère une ligne de raccordement.

## Créer un chanfrein

1. Tapez `chamfer` dans le terminal ou cliquez sur **Chamfer** dans la barre d'outils.
2. **Tapez la première distance** (le long de la première entité) et appuyez sur **Entrée**.
3. **Tapez la deuxième distance** (le long de la deuxième entité) et appuyez sur **Entrée** (ou appuyez sur **Entrée** pour utiliser la même valeur).
4. **Cliquez sur la première entité**.
5. **Cliquez sur la deuxième entité** — le chanfrein est placé.

## Notes

- Fonctionne sur les entités **Line** et **Polyline**.
- Si les deux entités ne se croisent pas et ne peuvent pas être prolongées pour se croiser, le chanfrein ne peut pas être calculé.
- Des distances égales créent un chanfrein à 45°.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Saisie de la distance |
| `Retour arrière` | Supprimer le dernier caractère |
| `Entrée` | Confirmer la distance |
| `Échap` | Annuler |
