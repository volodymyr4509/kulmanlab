---
sidebar_position: 1
title: LayerUnfreezeAll — Dégeler tous les calques dans KulmanLab CAD
description: La commande LayerUnfreezeAll supprime l'indicateur de gel sur tous les calques du dessin en une seule étape.
keywords: [dégeler calque, dégeler tous les calques CAO, gestion calques kulmanlab]
---

# LayerUnfreezeAll

La commande `LayerUnfreezeAll` supprime l'indicateur de gel sur **tous les calques** du dessin instantanément. Aucune sélection ni confirmation n'est nécessaire — elle s'exécute et se termine en une seule étape.

## Utilisation

Tapez `LayerUnfreezeAll` dans le terminal ou cliquez sur le bouton **Unfreeze All** de la barre d'outils (icône soleil). Tous les calques gelés deviennent visibles immédiatement.

## Quand l'utiliser

Généralement utilisée après [LayerIsolate](./layer-isolate) pour restaurer tous les calques à leur état visible normal.

## Détails de comportement

- S'applique à tous les calques indépendamment de leur état actuel.
- N'affecte pas les indicateurs de verrouillage ou de tracé — seul l'indicateur de gel est modifié.
- La commande se termine immédiatement sans invites.
