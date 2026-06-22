---
sidebar_position: 20
title: Commande Fillet — Arrondir un angle entre deux lignes dans KulmanLab CAD
description: La commande Fillet relie deux entités Line avec un arc tangent de rayon spécifié, en raccordant chaque ligne jusqu'au point de tangence. Un aperçu d'arc en pointillés aide à choisir le bon angle avant de cliquer.
keywords: [commande fillet CAO, arrondir angle CAO, arc de congé, arc tangent deux lignes, kulmanlab]
---

# Fillet

La commande `fillet` arrondit l'angle entre deux entités [Line](./line) en insérant un arc tangent d'un rayon donné et en raccordant chaque ligne jusqu'au point où l'arc commence. Le résultat est un angle lisse et radié reliant les deux lignes.

Fillet fonctionne sur les **entités Line uniquement**.

## Utiliser fillet

1. Tapez `fillet` dans le terminal ou cliquez sur le bouton **Fillet** de la barre d'outils.
2. **Tapez le rayon du congé** et appuyez sur **Entrée**.
3. **Cliquez sur la première ligne** — la portion sur laquelle vous cliquez détermine quel côté de l'intersection est conservé.
4. **Survolez la deuxième ligne** — un aperçu d'arc en pointillés montre le congé résultant. Déplacez le curseur vers le côté que vous souhaitez conserver.
5. **Cliquez** pour appliquer. Les deux lignes sont raccordées et l'arc est inséré.

```
  Avant :                     Après le congé (rayon r) :

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Sélection du côté pour les lignes qui se croisent

Lorsque deux lignes se croisent, le congé est appliqué sur l'angle défini par les positions de clic — la portion de chaque ligne du **même côté que le curseur** est conservée.

- Cliquez près d'une extrémité de la première ligne pour sélectionner cette moitié.
- Déplacez le curseur vers la moitié souhaitée de la deuxième ligne — l'aperçu en pointillés se met à jour en temps réel.

## Ce que la commande crée

- Le point final de la première ligne le plus proche de l'intersection est déplacé vers le point de tangence **T1**.
- Le point final de la deuxième ligne le plus proche de l'intersection est déplacé vers le point de tangence **T2**.
- Une nouvelle entité Arc est insérée de **T1** à **T2**, tangente aux deux lignes.

L'arc inséré hérite des paramètres actuels d'épaisseur de trait, de couleur, de calque et de type de ligne.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Ajouter un chiffre à la valeur du rayon |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer le rayon saisi et passer à la sélection de ligne |
| `Échap` | Annuler et réinitialiser |

## Entités supportées

| Entité | Supportée |
|--------|-----------|
| Line | Oui — en tant que première et deuxième entité |
| Arc, Circle, Ellipse, Polyline | Non |
| Text, Spline, Dimension, Leader | Non |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Type d'angle | Arc arrondi | Coupe droite |
| Entrée | Un rayon | Deux distances (d1, d2) |
| Entité insérée | Arc | Line |
| Entités supportées | Lines uniquement | Lines et Polylines |
