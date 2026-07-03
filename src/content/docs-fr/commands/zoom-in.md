---
sidebar_position: 2
title: "Commande Zoom In — Agrandir la Vue 1,5× par Étape dans KulmanLab CAD"
description: "La commande Zoom In multiplie le niveau de zoom actuel par 1,5× et se termine immédiatement. Centré sur le point médian du viewport. Plage de zoom 0,01–10 000. Utilisez la molette de la souris pour zoomer vers le curseur à la place."
keywords: [CAO zoom in, agrandir viewport, commande zoom CAO, pas de zoom 1,5x, kulmanlab]
---

# Zoom In

La commande `zoomin` multiplie le niveau de zoom actuel par **1,5×** et se termine immédiatement, centré sur le point médian du viewport. C'est l'équivalent dans la barre d'outils d'un cran de molette de souris avec zoom vers le centre de l'écran plutôt que vers le curseur.

## Zoomer en avant

Cliquez sur le bouton **Zoom In** dans la barre d'outils ou tapez `zoomin` dans le terminal. Le zoom est appliqué instantanément et la commande se termine — aucun clic sur le canevas n'est requis.

## Comment fonctionne le pas de 1,5×

| Zoom actuel | Après un Zoom In |
|-------------|-----------------|
| 1,00× | 1,50× |
| 1,50× | 2,25× |
| 10,00× | 15,00× |
| 6 667× | 10 000× (limite maximale) |

Le niveau de zoom est toujours affiché dans le **coin inférieur droit** du canevas à côté du libellé `zoom`. La limite supérieure est **10 000×** ; les étapes suivantes ne font rien.

## Bouton Zoom In vs molette de souris

| | Bouton Zoom In | Molette de souris |
|---|----------------|------------------|
| Centre de zoom | Point médian du viewport | Position du curseur |
| Taille du pas | 1,5× par clic | ~1,1× par cran |
| Activation requise | Non | Non — fonctionne toujours |
| Idéal pour | Navigation grossière | Zoom précis vers le curseur |

## Référence clavier

Aucun raccourci clavier pour cette commande. Utilisez la molette de souris à la place — elle fonctionne à tout moment sans activer de commande.

## Commandes de vue associées

| Commande | Action |
|----------|--------|
| [Zoom Out](../zoom-out/) | Divise le zoom par 1,5× par étape |
| [Fit](../fit/) | Réinitialise le zoom pour afficher toutes les entités |
| [Pan](../pan/) | Déplace le viewport sans zoomer |
