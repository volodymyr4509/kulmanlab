---
sidebar_position: 1
title: Match Properties — Copier les propriétés d'entités dans KulmanLab CAD
description: La commande MatchProperties copie la couleur, le calque et d'autres propriétés partagées d'une entité source vers une ou plusieurs entités cibles. Correspond aux propriétés de la même façon que les outils CAO de bureau.
keywords: [correspondre propriétés CAO, copier propriétés entité, MATCHPROP, correspondre calque et couleur, transférer propriétés, match properties kulmanlab, peindre propriétés, copier calque CAO]
---

# Match Properties

La commande `MatchProperties` copie les **propriétés visuelles et de calque** d'une entité source vers une ou plusieurs entités cibles. Seules les propriétés partagées entre les types d'entité source et cible sont transférées — la géométrie n'est jamais modifiée.

## Comment l'activer

Cliquez sur le bouton **Match Properties** dans la barre d'outils (icône rouleau de peinture) dans le panneau Style, ou tapez `MatchProperties` dans le terminal.

## Flux de travail

**Activer d'abord, puis sélectionner la source :**

1. Tapez `MatchProperties` ou cliquez sur le bouton de la barre d'outils sans rien de pré-sélectionné.
2. **Cliquez sur l'entité source** — celle dont vous souhaitez copier les propriétés.
3. **Cliquez sur chaque entité cible** pour appliquer les propriétés de la source. Vous pouvez cliquer sur plusieurs entités une par une.
4. Pour appliquer à un groupe à la fois, **faites glisser un cadre de sélection** sur les cibles.
5. Appuyez sur **Entrée** ou **Échap** pour terminer.

**Pré-sélectionner la source puis activer :**

1. Cliquez sur une seule entité pour la sélectionner.
2. Activez `MatchProperties`. L'entité sélectionnée est automatiquement utilisée comme source.
3. Cliquez sur les entités cibles ou faites glisser pour sélectionner, puis **Entrée** ou **Échap** pour terminer.

## Quelles propriétés sont copiées

MatchProperties copie les propriétés appartenant à une classe de base partagée entre la source et la cible. Au minimum, **tous les types d'entité** partagent ces propriétés :

| Propriété | Description |
|-----------|-------------|
| **Couleur** | L'index de couleur de l'entité (inclut "Par Calque" / "Par Bloc") |
| **Calque** | Le calque auquel appartient l'entité |

Quand la source et la cible sont du même type d'entité (ex. toutes deux des cotes), des propriétés supplémentaires spécifiques au type sont aussi copiées — par exemple, la hauteur du texte, la taille de la flèche, la configuration des lignes d'extension.

La géométrie (coordonnées, rayon, longueur, etc.) n'est jamais affectée.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Entrée` / `Espace` | Confirmer la sélection par zone ou terminer la commande |
| `Échap` | Terminer l'application (si la source est définie) ou annuler |

## Détails de comportement

- L'entité source n'est jamais modifiée.
- Chaque clic ou glisser applique les propriétés de la source immédiatement — il n'y a pas d'étape de confirmation.
- La sélection par zone suit les règles standard : glissez vers la **droite** pour une sélection stricte (totalement encadré), glissez vers la **gauche** pour une sélection croisée (toute intersection).
- Cliquer sur l'entité source en tant que cible est ignoré.

## Commandes associées

- [LayerMatch](./layer-match) — déplacer les entités sélectionnées vers le même calque qu'une source (propriété de calque uniquement)
- [LayerMakeCurrent](./layer-make-current) — définir le calque de dessin courant depuis une entité sur laquelle on clique
