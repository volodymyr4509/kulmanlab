---
title: "Commande Polygon — tracer des polygones réguliers depuis le centre ou un côté dans KulmanLab CAD"
description: "La commande Polygon trace un polygone régulier de 3 à 1024 côtés à partir de son centre et d’un rayon, ou d’un côté. Le résultat est une LWPOLYLINE fermée, donc toutes les commandes de modification de polyligne s’y appliquent."
keywords: ["commande polygone CAD", "tracer un polygone régulier CAD", "hexagone octogone pentagone CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

La commande `Polygone` trace un polygone régulier — tous les côtés et angles égaux — de 3 à 1024 côtés. Tapez `Polygone` dans le terminal. Le résultat est une **`LWPOLYLINE` fermée** : une fois placée, elle se comporte comme n’importe quelle [Polyline](../polyline/) et toutes les modifications de polyligne s’appliquent.

## Tracer un polygone

1. Tapez `Polygone` dans le terminal et saisissez le **nombre de côtés** — un entier de 3 à 1024 — puis appuyez sur **Entrée** ou **Espace**. L’invite est préremplie avec le dernier nombre utilisé (4 la première fois) ; commencez à taper pour le remplacer. Toute autre valeur est refusée et reste dans l’invite pour être corrigée.
2. **Cliquez sur le centre**, ou tapez `X,Y` puis **Entrée** pour une coordonnée exacte. Appuyez d’abord sur `E` pour partir plutôt d’un côté (voir ci-dessous).
3. **Cliquez sur le rayon** — le polygone s’affiche en aperçu — ou tapez le rayon puis **Entrée** ou **Espace**.
4. Le polygone est placé et la commande se termine.

## Options

| Option | Touche | Effet |
|---|---|---|
| Edge | `E` | Le premier point devient l’une des extrémités d’un côté au lieu du centre. Choisissez la seconde extrémité ; les autres sommets sont construits dans le sens antihoraire, à gauche du côté allant de la première à la seconde extrémité. Appuyez de nouveau sur `E` pour revenir au centre. |
| Inside | `I` | Activée par défaut et conservée d’un polygone au suivant. Activée : les sommets sont sur le cercle du rayon donné. Désactivée : le polygone est à l’extérieur de ce cercle, le milieu de chaque côté étant dessus. |

- Un clic place un sommet (Inside activée) ou le milieu d’un côté (Inside désactivée) exactement là où se trouve le curseur ; le curseur fixe donc aussi l’orientation.
- Un rayon saisi n’a rien le long de quoi viser : le polygone est posé avec son côté le plus bas horizontal — sauf si le verrouillage d’angle est actif, auquel cas il suit l’angle verrouillé.
- Chaque option est proposée à sa propre étape et peut être basculée même pendant la saisie d’un nombre.

## Référence clavier

| Touche | Action |
|---|---|
| `0`–`9`, `.` | Saisir le nombre de côtés, le rayon, une coordonnée ou une longueur |
| `E` | Activer ou désactiver Edge (étape du premier point) |
| `I` | Activer ou désactiver Inside (étape du rayon) |
| `Enter` / `Space` | Confirmer le nombre de côtés ou le rayon |
| `Escape` | Annuler |

## DXF — entité LWPOLYLINE

Un polygone est enregistré comme une `LWPOLYLINE` fermée avec un sommet par angle ; DXF n’a pas de type polygone dédié. Toutes les propriétés — coordonnées des sommets, couleur, calque, type de ligne, échelle du type de ligne et épaisseur — sont conservées sans perte, et tout visualiseur DXF le lit comme une polyligne fermée.
