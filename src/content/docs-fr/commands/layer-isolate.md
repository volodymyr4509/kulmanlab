---
title: LayerIsolate — Geler tous les calques sauf ceux sélectionnés
description: La commande LayerIsolate gèle tous les calques sauf ceux utilisés par les objets sélectionnés, vous permettant de vous concentrer sur une géométrie spécifique sans rien supprimer.
keywords: [isoler calque, geler calques CAO, isoler calque kulmanlab, gestion calques CAO]
group: layer
order: 3
---

# LayerIsolate

La commande `LayerIsolate` gèle tous les calques **sauf** ceux qui appartiennent aux objets sélectionnés. Utilisez-la pour vous concentrer rapidement sur une géométrie spécifique sans rien masquer ni supprimer définitivement — dégelez avec [LayerUnfreezeAll](../layer-unfreeze-all/) quand vous avez terminé.

## Deux façons de la démarrer

**Pré-sélectionner puis isoler** — sélectionnez les entités d'abord puis activez :

1. Sélectionnez une ou plusieurs entités sur le canevas.
2. Tapez `LayerIsolate` dans le terminal ou cliquez sur le bouton **Layer Isolate** de la barre d'outils.
3. Les calques des entités sélectionnées restent visibles ; tous les autres sont gelés immédiatement.

**Activer puis sélectionner** :

1. Tapez `LayerIsolate` ou cliquez sur le bouton de la barre d'outils.
2. **Choisissez des objets** — cliquez sur des entités individuelles ou faites glisser pour sélectionner par zone.
3. Appuyez sur **Entrée** ou **Espace** pour confirmer — l'isolation est appliquée.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Entrée` / `Espace` | Confirmer la sélection et appliquer l'isolation |
| `Échap` | Annuler et effacer la sélection |

## Détails de comportement

- Tous les calques **non** représentés dans la sélection sont définis comme gelés.
- Les calques **représentés** restent dégelés, même s'ils étaient gelés auparavant.
- La sélection est effacée après l'application de l'isolation.
- La commande se termine automatiquement après l'application.

## Annuler l'isolation

Exécutez [LayerUnfreezeAll](../layer-unfreeze-all/) pour restaurer tous les calques à l'état visible en une seule étape.
