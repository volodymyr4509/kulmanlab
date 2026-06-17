---
sidebar_position: 6
title: Commande Ellipse — Tracer des ellipses pivotées par centre et deux axes dans KulmanLab CAD
description: La commande Ellipse trace une ellipse en trois clics — centre, extrémité du premier axe (toute direction), puis longueur du second axe. Les deux axes sont toujours perpendiculaires. Aller-retour DXF complet en tant qu'entités ELLIPSE.
keywords: [commande ellipse CAO, tracer ellipse CAO, ellipse pivotée CAO, axes ellipse, entité ELLIPSE DXF, édition poignée ellipse, kulmanlab]
---

# Ellipse

La commande `ellipse` trace une ellipse en trois clics : un point central, l'extrémité du premier demi-axe (à n'importe quel angle), et la longueur du second demi-axe. Les deux axes sont toujours perpendiculaires.

## Tracer une ellipse

1. Tapez `ellipse` dans le terminal ou cliquez sur le bouton **Ellipse** de la barre d'outils.
2. **Cliquez sur le point central**, ou tapez `X,Y` et appuyez sur **Entrée**.
3. **Cliquez sur l'extrémité du premier axe** — définit la direction et la longueur du premier demi-axe.
4. **Définissez la longueur du second axe** — déplacez le curseur perpendiculairement au premier axe, puis cliquez ou tapez une longueur.

## Édition par poignées

Une ellipse sélectionnée expose cinq poignées :

| Poignée | Ce qu'elle fait |
|---------|----------------|
| **Centre** | Déplace toute l'ellipse ; les deux axes inchangés |
| **Extrémités de l'axe principal** (2) | Faites glisser pour redimensionner le demi-axe principal |
| **Extrémités de l'axe secondaire** (2) | Faites glisser pour redimensionner le demi-axe secondaire |

## Commandes d'édition supportées

| Commande | Ce qui arrive à l'ellipse |
|----------|-----------------------------|
| [Move](./move) | Translate le centre ; les deux axes inchangés |
| [Copy](./copy) | Crée une ellipse identique à un nouveau centre |
| [Rotate](./rotate) | Fait pivoter le centre et le vecteur de l'axe principal |
| [Mirror](./mirror) | Symétrise le centre et recalcule la direction de l'axe principal |
| [Scale](./scale) | Met à l'échelle le centre et multiplie les deux demi-axes par le facteur |
| [Offset](./offset) | Crée une ellipse concentrique décalée vers l'extérieur ou l'intérieur |
| [Delete](./delete) | Supprime l'ellipse |

## Propriétés

**Géométrie**

| Propriété | Signification |
|-----------|---------------|
| Centre X / Centre Y | Centre de l'ellipse |
| Axe principal X / Y | Vecteur du centre à l'extrémité de l'axe principal |
| Rapport d'axes | Rapport du demi-axe secondaire au demi-axe principal (0 < rapport ≤ 1) |

## DXF — entité ELLIPSE

Les ellipses sont enregistrées comme entités `ELLIPSE` dans le fichier DXF. Le format stocke le point central, le vecteur complet de l'axe principal et le rapport d'axes. Toutes les propriétés font l'aller-retour sans perte.
