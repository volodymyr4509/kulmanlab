---
sidebar_position: 1
title: Commande Undo — Revenir en arrière dans l'historique du dessin dans KulmanLab CAD
description: La commande Undo inverse la dernière action de dessin une étape à la fois. Jusqu'à 20 étapes sont stockées par fichier et persistées dans le navigateur entre les rechargements de page.
keywords: [commande undo CAO, historique annulation CAO, inverser action CAO, étapes annulation CAO, annulation persistante navigateur, kulmanlab]
---

# Undo

La commande `undo` inverse la dernière action de dessin une étape à la fois. Jusqu'à 20 étapes sont stockées par fichier et **persistées dans le navigateur** entre les rechargements de page.

## Annuler une action

- Tapez `undo` dans le terminal, cliquez sur **Undo** dans la barre d'outils, ou appuyez sur **Ctrl+Z** (Windows/Linux) / **Cmd+Z** (macOS).

## Notes

- L'annulation est disponible uniquement pour les actions de dessin (créer, modifier, supprimer des entités).
- Effectuer une nouvelle action après avoir annulé efface la pile de rétablissement (Redo).
- L'historique est persisté dans localStorage — il survit aux rechargements de page mais est propre par fichier.

## Raccourci clavier

| Touche | Action |
|--------|--------|
| `Ctrl+Z` / `Cmd+Z` | Annuler la dernière action |
