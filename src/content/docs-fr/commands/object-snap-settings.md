---
title: "Commande ObjectSnapSettings — Réglages de la barre de contrôle"
description: "La commande ObjectSnapSettings ouvre une fenêtre avec tous les réglages de la barre de contrôle — accrochage, tangente, repérage angulaire, épingles, saisie, lasso et affichage —, chacun expliqué à côté de la liste par un petit dessin."
keywords: ["réglages d’accrochage aux objets CAO", "accrochage tangent CAO", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

La commande `ParamètresAccrochage` ouvre une fenêtre qui réunit tous les réglages de la barre de contrôle. Chaque réglage est expliqué à côté de la liste, avec un petit dessin. Ouvrez-la avec le bouton en forme d’engrenage de la barre de contrôle, ou tapez `ParamètresAccrochage`. Modifier un réglage ici revient à basculer son bouton dans la barre.

## Les réglages

### Où le curseur se pose

| Barre de contrôle | Ce qu’il fait |
|---|---|
| `Snap` | Le curseur saute au point de grille le plus proche, pour que les points choisis tombent sur des coordonnées rondes. Un accrochage à un objet proche du curseur reste prioritaire. Le pas de la grille suit le zoom. |
| `TANG` | Pendant qu’une ligne part d’un point, approchez le curseur de l’endroit où elle toucherait tout juste un cercle, un arc, une ellipse ou une spline : il s’y accroche. Fonctionne dans Ligne, Polyligne et d’autres commandes, et en déplaçant l’extrémité d’une ligne ou d’une polyligne. |

### Repères pendant le dessin

| Barre de contrôle | Ce qu’il fait |
|---|---|
| `ANGL` | Quand le curseur approche d’un de ces angles depuis le dernier point, il se verrouille dans cette direction, montrée par un rayon pointillé. Tant qu’il est verrouillé, tapez une longueur et appuyez sur Entrée pour placer le point à cette distance. |
| `Pins` | Laissez le curseur un instant sur un point d’accrochage pour l’épingler. Un point épinglé émet des lignes guides horizontales et verticales ; le curseur s’y accroche ainsi qu’à leurs croisements. |
| `Dist` | Le dernier point épinglé sert de point de départ : quand le curseur se verrouille sur un angle depuis l’épingle, tapez une longueur et appuyez sur Entrée pour placer le point à cette distance. Nécessite les épingles vectorielles. |

### Saisie et sélection

| Barre de contrôle | Ce qu’il fait |
|---|---|
| `Rel` | Un point X,Y saisi se mesure depuis le dernier point choisi, comme s’il commençait par @. Retour arrière retire le @ pour un point dans les coordonnées du dessin. Désactivé, tapez vous-même @ pour un décalage. |
| `Lasso` | Appuyez et faites glisser sur un espace vide pour tracer une boucle libre autour de ce que vous voulez, au lieu d’un rectangle. Ce que la boucle englobe est sélectionné. |

### Affichage

| Barre de contrôle | Ce qu’il fait |
|---|---|
| `Grid` | Affiche la grille de fond. Son pas change avec le zoom. La désactiver n’arrête pas l’accrochage à la grille. |
| `LWT` | Dessine les lignes à leur épaisseur, pour que les lignes plus lourdes paraissent plus épaisses. Désactivé, chaque ligne est dessinée fine, ce qui peut rendre un dessin dense plus lisible. |

**ANGL** a sa propre ligne pour le pas : choisissez 10°, 20°, 30°, 45° ou 90°, ou choisissez **Personnalisé** et tapez n’importe quel angle de 1° à 180°.

L’accrochage tangent, la saisie relative et le lasso sont désactivés par défaut. **Rétablir les valeurs par défaut** remet tous les réglages dans leur état initial.

---

*Voir aussi : [Vector Pins](../../interface/vector-pins/), [Suivi de distance](../../interface/distance-tracking/), [Grille et Accrochage](../../interface/grid-snap/), [Saisie de coordonnées](../../interface/coordinate-entry/)*
