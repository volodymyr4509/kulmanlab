---
title: "Commande Zoom Out — Réduire le Zoom du Viewport 1,5× par Étape"
description: "La commande Zoom Out divise le niveau de zoom actuel par 1,5× et se termine immédiatement. Centré sur le point médian du viewport. Utilisez la molette de souris pour zoomer en arrière vers le curseur pour un contrôle plus précis."
keywords: [CAO zoom out, réduire zoom viewport, commande zoom out, vue d'ensemble CAO, pas de zoom 1,5x, kulmanlab]
group: navigate
order: 3
---

# Zoom Out

La commande `zoomout` divise le niveau de zoom actuel par **1,5×** (équivalent à multiplier par ~0,667) et se termine immédiatement, centré sur le point médian du viewport. C'est l'inverse de [Zoom In](../zoom-in/).

## Zoomer en arrière

Cliquez sur le bouton **Zoom Out** dans la barre d'outils ou tapez `zoomout` dans le terminal. Le zoom est appliqué instantanément et la commande se termine — aucun clic sur le canevas n'est requis.

## Comment fonctionne le pas de 1,5×

| Zoom actuel | Après un Zoom Out |
|-------------|------------------|
| 1,50× | 1,00× |
| 2,25× | 1,50× |
| 10,00× | 6,67× |
| 0,015× | 0,01× (limite minimale) |

Le niveau de zoom est toujours affiché dans le **coin inférieur droit** du canevas. La limite inférieure est **0,01×** ; les étapes suivantes ne font rien.

## Bouton Zoom Out vs molette de souris

| | Bouton Zoom Out | Molette de souris |
|---|-----------------|------------------|
| Centre de zoom | Point médian du viewport | Position du curseur |
| Taille du pas | 1,5× par clic | ~1,1× par cran |
| Activation requise | Non | Non — fonctionne toujours |
| Idéal pour | Reculer pour voir plus de contexte | Zoom arrière doux ancré au curseur |

## Référence clavier

Aucun raccourci clavier pour cette commande. Utilisez la molette de souris à la place — elle fonctionne à tout moment sans activer de commande.

## Commandes de vue associées

| Commande | Action |
|----------|--------|
| [Zoom In](../zoom-in/) | Multiplie le zoom par 1,5× par étape |
| [Fit](../fit/) | Réinitialise le zoom pour afficher toutes les entités |
| [Pan](../pan/) | Déplace le viewport sans zoomer |
