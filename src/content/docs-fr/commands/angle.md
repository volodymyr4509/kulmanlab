---
title: Commande Angle — Mesurer l'Angle Intérieur à un Sommet en Utilisant Trois Points dans KulmanLab CAD
description: La commande Angle mesure l'angle intérieur (0°–180°) à un sommet défini par trois points sélectionnés. Cliquez sur le premier extrémité, le sommet et le deuxième extrémité. Le résultat s'affiche dans le terminal avec 4 décimales.
keywords: [mesure angle CAO, angle trois points, angle intérieur CAO, commande mesurer angle, angle sommet, kulmanlab]
group: measure
order: 2
---

# Angle

La commande `angle` mesure l'angle intérieur à un sommet formé par deux segments de ligne à travers trois points sélectionnés. Le résultat — toujours entre 0° et 180° — s'affiche dans le terminal avec 4 décimales. C'est l'une des trois commandes de mesure — [Distance](../distance/) mesure la longueur en ligne droite, et [Area](../area/) mesure l'aire délimitée et le périmètre d'un polygone.

## Anatomie d'une mesure d'angle

```
  ● premier point (extrémité du premier rayon)
   \
    \  aperçu du premier rayon
     \
      ● sommet (étape 3)
     /
    /  aperçu du deuxième rayon (vers le curseur)
   /
  ● troisième point  →  terminal : "Angle: 45.0000°"
```

- **Premier point** — une extrémité de l'angle (étape 2).
- **Sommet** — le coin où l'angle est mesuré (étape 3).
- **Troisième point** — l'autre extrémité de l'angle (étape 4).

## Mesurer un angle

1. Tapez `angle` dans le terminal ou cliquez sur le bouton **Angle** dans la barre d'outils.
2. **Cliquez sur le premier point** — une extrémité de l'angle. Ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. **Cliquez sur le sommet** — le coin où les deux bras se rejoignent. La saisie de coordonnées fonctionne aussi ici.
4. **Cliquez sur le troisième point** — la deuxième extrémité de l'angle. La saisie de coordonnées fonctionne aussi ici. Placer ce point affiche le résultat.
5. **Cliquez à nouveau** (optionnel) pour démarrer une nouvelle mesure depuis ce clic comme nouveau premier point.

## Convention de l'angle intérieur

La commande calcule l'angle en utilisant le produit scalaire des deux rayons depuis le sommet :

- **Toujours intérieur** : le résultat est l'angle le plus petit, entre 0° et 180°.
- L'ordre dans lequel vous cliquez sur les extrémités n'affecte pas le résultat — seule la position du sommet importe.
- Les points colinéaires (les trois sur la même ligne) renvoient 0° ou 180°.

## Enchaîner les mesures

Après l'affichage du résultat, cliquer immédiatement démarre la mesure suivante — le point sélectionné devient le nouveau premier point. La commande ne se termine jamais automatiquement jusqu'à ce que vous appuyiez sur `Échap`.

## Angle vs Distance

| | Angle | Distance |
|---|-------|---------|
| Ce qui est mesuré | Angle intérieur à un sommet | Longueur en ligne droite |
| Nombre de clics | 3 | 2 |
| Format du résultat | `45.0000°` | `12.3456` (unités) |
| Aperçu sur le canevas | Deux lignes du sommet aux extrémités | Ligne du premier point au curseur |
| Idéal pour | Angle d'ouverture entre deux éléments | Longueur d'un espace ou segment |

## Saisie de coordonnées

Au lieu de cliquer, tapez une position exacte pour l'un des trois points :

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
- La précision est toujours de 4 décimales en degrés.
