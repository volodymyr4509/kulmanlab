---
sidebar_position: 21
title: Commande Chamfer — Couper un angle diagonal entre deux lignes dans KulmanLab CAD
description: La commande Chamfer relie deux entités Line ou Polyline avec une coupe diagonale droite. Vous spécifiez deux distances — une le long de chaque entité — et la commande raccorde les deux jusqu'à ces points et insère une ligne de raccordement.
keywords: [commande chamfer CAO, chanfrein ligne CAO, coupe angle diagonale, biseauter angle CAO, kulmanlab]
---

# Chamfer

La commande `chamfer` coupe un angle diagonal droit entre deux entités [Line](./line) ou [Polyline](./polyline). Vous spécifiez la distance de recul le long de chaque entité (d1 et d2), et la commande raccorde les deux entités jusqu'à ces points et insère une ligne de raccordement entre elles.

Des distances égales produisent une coupe symétrique à 45° ; des distances différentes produisent un biseau asymétrique.

Chamfer fonctionne sur les entités **Line et Polyline**.

## Utiliser chamfer

1. Tapez `chamfer` dans le terminal ou cliquez sur le bouton **Chamfer** de la barre d'outils.
2. **Tapez la première distance de chanfrein** (d1 — distance le long de la première entité) et appuyez sur **Entrée**.
3. **Tapez la deuxième distance de chanfrein** (d2 — distance le long de la deuxième entité) et appuyez sur **Entrée**.
4. **Cliquez sur la première entité** — la portion sur laquelle vous cliquez détermine quel côté de l'intersection est conservé.
5. **Survolez la deuxième entité** — un aperçu en pointillés montre la coupe de chanfrein résultante. Déplacez le curseur vers le côté que vous souhaitez conserver.
6. **Cliquez** pour appliquer. Les deux entités sont raccordées et la ligne de chanfrein est insérée.

```
  Avant (d1=5, d2=8) :        Après :

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Sélection du côté

Lorsque deux lignes se croisent, le chanfrein est appliqué sur l'angle défini par les positions de clic — la portion de chaque entité du **même côté que le curseur** est conservée.

- Cliquez près d'une extrémité de la première entité pour sélectionner cette moitié.
- Déplacez le curseur vers la moitié souhaitée de la deuxième entité — l'aperçu en pointillés se met à jour en temps réel.

Pour les Polylignes, la position du clic détermine quel **segment** de la polyligne participe, et le sommet le plus proche du côté de l'intersection est celui qui est raccordé.

## Ce que la commande crée

- L'extrémité de la première entité (ou sommet de polyligne) la plus proche de l'intersection est déplacée vers le point **T1**, situé à d1 le long de la première entité depuis l'intersection.
- L'extrémité de la deuxième entité (ou sommet de polyligne) la plus proche de l'intersection est déplacée vers le point **T2**, situé à d2 le long de la deuxième entité depuis l'intersection.
- Une nouvelle entité Line est insérée de **T1** à **T2**.

La ligne insérée hérite des paramètres actuels d'épaisseur de trait, de couleur, de calque et de type de ligne.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Ajouter un chiffre à la valeur de distance actuelle |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la distance saisie et avancer |
| `Échap` | Annuler et réinitialiser |

## Entités supportées

| Entité | Supportée |
|--------|-----------|
| Line | Oui |
| Polyline / Rectangle | Oui |
| Arc, Circle, Ellipse | Non |
| Text, Spline, Dimension, Leader | Non |

## Chamfer vs Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Type d'angle | Coupe droite | Arc arrondi |
| Entrée | Deux distances (d1, d2) | Un rayon |
| Entité insérée | Line | Arc |
| Entités supportées | Lines et Polylines | Lines uniquement |
