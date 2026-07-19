---
title: LayerMakeCurrent — Définir le calque d'une entité comme courant
description: La commande LayerMakeCurrent définit le calque de dessin courant pour correspondre au calque de l'entité sur laquelle vous cliquez.
keywords: [définir calque courant, calque courant CAO, gestion calques kulmanlab]
group: layer
order: 1
---

# LayerMakeCurrent

La commande `LayerMakeCurrent` définit le **calque de dessin courant** pour correspondre au calque auquel appartient l'entité sur laquelle vous cliquez. Les nouvelles entités seront automatiquement dessinées sur ce calque.

## Utilisation

1. Tapez `LayerMakeCurrent` dans le terminal ou cliquez sur le bouton **Make Current** de la barre d'outils (icône pipette).
2. **Cliquez sur n'importe quelle entité** sur le canevas.
3. Le calque courant est mis à jour pour correspondre au calque de cette entité. La commande se termine immédiatement.

## Détails de comportement

- Si vous cliquez sur le canevas vide (sans entité), le terminal affiche `no object found` et la commande reste active pour que vous puissiez réessayer.
- Seul le paramètre du calque courant est modifié — aucune entité n'est modifiée.
- Le calque mis à jour est reflété dans le sélecteur de calques de la barre d'outils.
