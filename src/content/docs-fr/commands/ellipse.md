---
title: Commande Ellipse — Tracer des ellipses pivotées par centre et deux axes dans KulmanLab CAD
description: La commande Ellipse trace une ellipse en trois clics — centre, extrémité du premier axe (toute direction), puis longueur du second axe. Les deux axes sont toujours perpendiculaires. Chaque demi-axe a sa propre poignée pour un redimensionnement indépendant après le placement. Aller-retour DXF complet en tant qu'entités ELLIPSE.
keywords: [commande ellipse CAO, tracer ellipse CAO, ellipse pivotée CAO, axes ellipse, entité ELLIPSE DXF, édition poignée ellipse, rapport d'axes, kulmanlab]
group: shapes
order: 6
---

# Ellipse

La commande `ellipse` trace une ellipse en trois clics : un point central, l'extrémité du premier (grand) demi-axe à n'importe quel angle, et la longueur du second (petit) demi-axe. Les deux axes sont toujours perpendiculaires entre eux — la direction du second axe est dérivée automatiquement du premier.

## Tracer une ellipse

1. Tapez `ellipse` dans le terminal ou cliquez sur le bouton **Ellipse** de la barre d'outils.
2. **Cliquez sur le point central**, ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. **Cliquez sur l'extrémité du premier axe** — définit à la fois la direction et la longueur du premier demi-axe. La saisie de coordonnées fonctionne ici aussi.
4. **Définissez la longueur du second axe** — déplacez le curseur perpendiculairement au premier axe, puis cliquez ou tapez une longueur.

```
               ● ← extrémité du premier axe (étape 3)
              /
  centre ●  /  ← premier axe (tout angle)
            |
            ● ← le curseur ici définit la longueur du second axe (étape 4)
```

L'ellipse est placée après l'étape 4 et la commande se termine.

## Saisie des axes — clic, coordonnée ou longueur tapée

**Centre (étape 2) :** cliquez ou tapez `X,Y` pour une position exacte.

**Extrémité du premier axe (étape 3) :** cliquez, ou tapez `X,Y` pour une coordonnée exacte. Le verrouillage d'angle se cale également sur des incréments de 45° — pendant le verrouillage, tapez une longueur et appuyez sur **Entrée** pour placer l'extrémité à cette distance exacte.

**Second axe (étape 4) :** la longueur tapée est toujours disponible — aucun verrouillage d'angle requis. La direction est déjà fixée perpendiculairement au premier axe ; taper ne définit que la longueur.

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Ajouter un chiffre à la longueur de l'axe (phase du second axe) |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Placer l'extrémité de l'axe à la longueur saisie |

## Saisie de coordonnées (centre et extrémité du premier axe)

1. Tapez la valeur X.
2. Appuyez sur `,` — le terminal affiche `[X], [Y{curseur}]`.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour confirmer.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X (phases centre/premier axe), ou longueur d'axe quand l'angle est verrouillé |
| `,` | Verrouiller X et passer à la saisie Y |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée ou la longueur saisie |
| `Échap` | Annuler et réinitialiser |

## Édition par poignées — redimensionnement indépendant des axes

Une ellipse sélectionnée expose cinq poignées :

| Poignée | Nombre | Ce qu'elle fait |
|---------|--------|----------------|
| **Centre** | 1 | Déplace toute l'ellipse ; les deux axes inchangés |
| **Extrémités de l'axe principal** | 2 (extrémités opposées du grand axe) | Faites glisser pour redimensionner la longueur du demi-axe principal ; la taille absolue du petit axe reste constante |
| **Extrémités de l'axe secondaire** | 2 (extrémités opposées du petit axe) | Faites glisser pour redimensionner la longueur du demi-axe secondaire ; l'axe principal inchangé |

Les poignées des axes principal et secondaire sont indépendantes — vous pouvez remodeler l'ellipse sans relancer la commande.

## Sélectionner des ellipses

| Méthode | Comportement |
|---------|-------------|
| **Clic** | Sélectionne si le clic atterrit près du contour de l'ellipse |
| **Glisser à droite** (strict) | Le cadre de délimitation aligné sur l'axe de l'ellipse doit tenir entièrement dans le cadre de sélection |
| **Glisser à gauche** (croisement) | Toute partie du contour de l'ellipse qui croise la limite du cadre de sélection la sélectionne |

## Commandes d'édition supportées

| Commande | Ce qui arrive à l'ellipse |
|----------|-----------------------------|
| [Move](../move/) | Translate le centre ; les deux axes inchangés |
| [Copy](../copy/) | Crée une ellipse identique à un nouveau centre |
| [Rotate](../rotate/) | Fait pivoter la position du centre et le vecteur de l'axe principal du même angle |
| [Mirror](../mirror/) | Symétrise le centre et recalcule la direction de l'axe principal par rapport à l'axe de symétrie |
| [Scale](../scale/) | Met à l'échelle la position du centre et multiplie les deux demi-axes par le facteur |
| [Offset](../offset/) | Crée une ellipse concentrique décalée vers l'extérieur ou l'intérieur d'une distance fixe |
| [Delete](../delete/) | Supprime l'ellipse |

## Propriétés

**Général**

| Propriété | Par défaut | Signification |
|-----------|-----------|---------------|
| Color | 256 (ByLayer) | Index de couleur ACI |
| Layer | `0` | Attribution de calque |
| Linetype | ByLayer | Motif de type de ligne nommé |
| Linetype Scale | 1 | Facteur d'échelle sur le motif de type de ligne |
| Thickness | 0 | Épaisseur d'extrusion |

**Géométrie**

| Propriété | Signification |
|-----------|---------------|
| Centre X / Centre Y | Centre de l'ellipse |
| Axe principal X / Axe principal Y | Vecteur du centre à l'extrémité de l'axe principal (encode à la fois la direction et la longueur) |
| Rapport d'axes | Rapport du demi-axe secondaire au demi-axe principal (0 < rapport ≤ 1) |
| Angle de départ / Angle de fin | Angles paramétriques en degrés ; les deux sont 0°/360° pour une ellipse complète |

## Ellipse vs Circle — quand utiliser laquelle

| | Ellipse | Circle |
|---|---------|--------|
| Axes | Deux demi-axes indépendants à n'importe quel angle | Un rayon, symétrique |
| Rotation | Peut être placée à n'importe quel angle | Pas de rotation |
| Saisie tapée | Longueur par axe | Rayon uniquement |
| Redimensionnement par poignée | Principal et secondaire indépendamment | Les quatre points cardinaux également |
| Idéal pour | Vues obliques, formes ovales, trous en perspective | Éléments ronds symétriques |

## DXF — entité ELLIPSE

Les ellipses sont enregistrées comme entités `ELLIPSE` dans le fichier DXF. Le format stocke le point central, le vecteur complet de l'axe principal (direction + longueur), et le rapport d'axes. La rotation, la forme et toutes les propriétés de style font l'aller-retour sans perte. Un cercle n'est **pas** stocké comme une ellipse dégénérée — les deux types d'entités restent distincts dans le modèle DXF.
