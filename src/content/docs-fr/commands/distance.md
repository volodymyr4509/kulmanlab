---
title: Distance — Mesurer la Distance en Ligne Droite Entre Deux Points
description: La commande Distance mesure la distance euclidienne entre deux points sélectionnés et affiche le résultat avec 4 décimales. Cliquez à nouveau après le résultat pour enchaîner une nouvelle mesure depuis le dernier point.
keywords: [mesurer distance CAO, commande distance, mesure point à point, distance en ligne droite, mesure CAO kulmanlab]
group: measure
order: 1
---

# Distance

La commande `distance` mesure la distance en ligne droite (euclidienne) entre deux points sélectionnés et affiche le résultat dans le terminal avec 4 décimales. C'est l'une des trois commandes de mesure — [Angle](../angle/) mesure l'ouverture angulaire à un sommet, et [Area](../area/) mesure l'aire délimitée et le périmètre d'un polygone.

## Anatomie d'une mesure de distance

```
  ● premier point
   \
    \  ligne d'aperçu (en direct)
     \
      ● deuxième point    →  terminal : "Distance: 12.3456"
```

- **Premier point** — origine de la mesure.
- **Deuxième point** — point final ; le placer affiche le résultat immédiatement.
- **Résultat** — affiché dans le terminal, rien n'est placé sur le canevas.

## Mesurer une distance

1. Tapez `distance` dans le terminal ou cliquez sur le bouton **Distance** dans la barre d'outils.
2. **Cliquez sur le premier point**, ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. **Cliquez sur le deuxième point** — la distance mesurée apparaît dans le terminal. La saisie de coordonnées fonctionne aussi ici.
4. **Cliquez à nouveau** (optionnel) pour démarrer une nouvelle mesure. La commande reste active.

Appuyez sur `Échap` à tout moment pour revenir à l'étape 2.

## Enchaîner les mesures

Après l'affichage du résultat, cliquer immédiatement démarre la mesure suivante — le point sélectionné devient le nouveau premier point. Cela permet de mesurer une séquence de distances sans réactiver la commande.

## Distance vs Angle

| | Distance | Angle |
|---|---------|-------|
| Ce qui est mesuré | Longueur en ligne droite | Angle intérieur à un sommet |
| Nombre de clics | 2 | 3 |
| Format du résultat | `12.3456` (unités) | `45.0000°` |
| Aperçu sur le canevas | Ligne du premier point au curseur | Deux lignes du sommet au curseur |
| Idéal pour | Longueur d'un espace ou segment | Angle d'ouverture entre deux éléments |

## Saisie de coordonnées

Au lieu de cliquer, tapez une position exacte pour l'un ou l'autre des points :

1. Tapez la valeur X.
2. Appuyez sur `,` — le terminal affiche `[X], [Y{curseur}]`.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour confirmer.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Commencer la saisie de coordonnée X |
| `,` | Verrouiller X et passer à la saisie Y |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée saisie |
| `Échap` | Annuler et revenir à l'étape 2 |

## Notes

- Les résultats sont affichés uniquement dans le **terminal** — rien n'est ajouté au dessin.
- Le résultat est exprimé dans les mêmes unités que les coordonnées du dessin (sans conversion d'unités).
- La précision est toujours de 4 décimales.
