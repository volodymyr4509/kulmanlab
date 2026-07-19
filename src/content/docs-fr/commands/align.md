---
title: Align — Translater, pivoter, redimensionner par paire de points
description: La commande Align repositionne les entités sélectionnées à l'aide d'une ou deux paires de points source/destination — combinant translation, rotation et une mise à l'échelle uniforme facultative en une seule opération. Fonctionne comme un Move + Rotate + Scale combinés.
keywords: [commande align CAO, aligner entités CAO, translater pivoter redimensionner, alignement par paire de points, équivalent ALIGN AutoCAD, kulmanlab]
group: edit
order: 6
---

# Align

La commande `align` repositionne les entités sélectionnées à l'aide d'une ou deux paires de points source/destination. Avec une paire, elle se comporte exactement comme [Move](../move/) (translation seule). Avec deux paires, elle fait aussi pivoter la sélection pour que la direction source-à-source corresponde à la direction destination-à-destination, et peut éventuellement la redimensionner pour que la longueur du segment source corresponde à celle du segment destination — translation, rotation et mise à l'échelle en une seule opération.

## Deux façons de démarrer

**Pré-sélectionner, puis aligner** — sélectionnez d'abord les entités, puis activez :

1. Sélectionnez une ou plusieurs entités sur le canevas.
2. Tapez `align` dans le terminal ou cliquez sur le bouton **Align** de la barre d'outils.
3. **Cliquez sur le premier point source (S1)**, puis **sur le premier point destination (D1)**.
4. **Cliquez sur le second point source (S2)**, ou appuyez sur **Entrée** pour appliquer dès maintenant un alignement de translation seule.
5. **Cliquez sur le second point destination (D2)**.
6. Répondez à l'invite de mise à l'échelle : appuyez sur **Y** pour redimensionner, ou **N** / **Entrée** pour conserver la taille d'origine.

**Activer, puis sélectionner** — démarrez la commande sans rien de sélectionné :

1. Tapez `align` ou cliquez sur le bouton de la barre d'outils.
2. **Sélectionnez les objets** — cliquez pour basculer les entités individuelles, ou faites glisser pour sélectionner par zone.
3. Appuyez sur **Entrée** ou **Espace** pour confirmer la sélection.
4. Continuez avec S1 → D1 → S2 → D2 → invite de mise à l'échelle comme ci-dessus.

> Le terminal n'a besoin que du nombre de lettres suffisant pour être non ambigu — taper `al` puis appuyer sur **Entrée** active directement Align, car aucune autre commande ne commence par ces deux lettres.

## Anatomie d'un alignement

```
  Points source (sur les entités) :    Points destination :
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Résultat : la sélection est translatée pour que S1 arrive sur D1,
  puis pivotée autour de D1 pour que la direction S1→S2 corresponde
  à la direction D1→D2 — et, si vous choisissez de redimensionner,
  redimensionnée pour que |S1S2| devienne |D1D2|.
```

Un aperçu fantôme suit le curseur à chaque étape : un aperçu de déplacement pendant le placement de D1, puis un aperçu pivoté (en pointillés) une fois D2 en cours de positionnement.

## Alignement à un point (translation seule)

Une fois D1 placé, appuyez sur **Entrée** au lieu de cliquer sur un second point source. La sélection est translatée selon le vecteur S1→D1 — sans rotation ni mise à l'échelle — identique à un [Move](../move/) utilisant S1 comme point de base et D1 comme destination.

## Alignement à deux points (translation + rotation + mise à l'échelle facultative)

Une fois S2 et D2 tous deux placés :

- **Angle de rotation** — la différence entre la direction destination (`D1 → D2`) et la direction source (`S1 → S2`).
- **Invite de mise à l'échelle** — `scale objects to alignment points? [Yes/No] <N>` apparaît, avec **No** par défaut :
  - Appuyez sur **Y** pour aussi redimensionner uniformément la sélection autour de D1 afin que la distance `S1–S2` devienne la distance `D1–D2`.
  - Appuyez sur **N** ou **Entrée** pour conserver la taille d'origine — seules la translation et la rotation sont appliquées.

Appuyer sur une touche à l'invite de mise à l'échelle applique immédiatement l'alignement — il n'y a pas d'étape de confirmation séparée après avoir choisi Oui ou Non.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Entrée` / `Espace` | Confirmer la sélection et avancer à la phase S1 |
| `Entrée` (à l'étape S2) | Ignorer la rotation — appliquer un alignement de translation seule avec S1 et D1 |
| `Y` | Appliquer l'alignement avec mise à l'échelle |
| `N` / `Entrée` (à l'invite de mise à l'échelle) | Appliquer l'alignement sans mise à l'échelle |
| `Échap` | Pendant le placement des points : abandonne les points et revient à la phase de sélection ; sans rien de sélectionné : annule la commande |

## Sélection pendant la commande

Lorsque la commande démarre en phase de sélection :

| Méthode | Comportement |
|---------|-------------|
| **Clic** | Bascule l'entité sous le curseur dans/hors de la sélection |
| **Glisser à droite** (strict) | Ajoute les entités entièrement à l'intérieur du cadre |
| **Glisser à gauche** (croisement) | Ajoute les entités qui intersectent la limite du cadre |
| **Entrée** / **Espace** | Confirme la sélection et passe à la phase S1 |

## Après l'alignement

Les entités alignées restent sélectionnées à leur nouvelle position, et la commande se termine automatiquement — relancez **Align**, ou passez à [Move](../move/), [Rotate](../rotate/) ou [Scale](../scale/) sans re-sélectionner.

## Align vs Move

| | Align | Move |
|---|-------|------|
| Paires de points | 1 (translation seule) ou 2 (translation + rotation + mise à l'échelle) | 1 (translation seule) |
| Rotation | Oui, avec une seconde paire de points | Non |
| Mise à l'échelle | Facultative, avec une seconde paire de points | Non |
| Idéal pour | Ajuster une forme sur une autre à l'aide de points de référence | Repositionnement simple |

## Entités supportées

Align fonctionne sur tous les types d'entités supportés par Move, Rotate et Scale — les mêmes opérations `translate`, `rotate` et `scale` utilisées par ces commandes sont appliquées en séquence, donc aucune n'est exclue.
