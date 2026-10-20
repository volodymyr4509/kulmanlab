---
title: "Commande PointDivide — placer des points à longueurs égales le long d’un objet"
description: "La commande PointDivide divise une ligne, polyligne, un arc, cercle, une ellipse ou une spline en segments de même longueur et place un point à chaque division, en aperçu pendant que vous tapez le nombre de segments."
keywords: ["commande diviser CAO", "diviser une ligne en parts égales CAO", "points le long d’un objet CAO", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

La commande `DiviserParPoints` place des [points](../point/) qui divisent un objet en segments de même longueur. L’objet lui-même ne change pas : les points sont de nouvelles entités sur le calque et dans la couleur courants, pratiques pour l’accrochage.

## Diviser un objet

1. Tapez `DiviserParPoints` dans le terminal ou choisissez **Point Divide** dans le menu déroulant des réseaux du panneau Edit.
2. **Cliquez sur l’objet** — une ligne, polyligne, un arc, cercle, une ellipse ou une spline. Tout autre objet est refusé, et vous pouvez choisir à nouveau.
3. **Tapez le nombre de segments**, un entier de 2 à 32767. Les points s’affichent en aperçu sur l’objet pendant la saisie.
4. Appuyez sur **Entrée** ou **Espace** pour les placer. La commande se termine.

## Où vont les points

- L’espacement se mesure en longueur le long de l’objet, pas en angle : une ellipse ou une spline est donc coupée en morceaux de même longueur. Les segments d’arc d’une polyligne sont suivis le long de leur courbe.
- Sur un objet ouvert — ligne, polyligne ouverte, arc, ellipse partielle ou spline ouverte — les points vont entre les segments, jamais aux extrémités : 5 segments donnent 4 points.
- Sur un objet fermé — cercle, polyligne fermée, ellipse complète ou spline fermée — les points font tout le tour depuis son début, qui reçoit aussi un point : un cercle commence à l’angle 0, une polyligne fermée à son premier sommet. 5 segments donnent 5 points.
- Un nombre hors de 2–32767 est refusé : le terminal en donne la raison et l’efface pour que vous puissiez retaper.

Retour arrière efface le dernier chiffre. Échap recommence, pour choisir un autre objet. Entrée ou Espace avant d’avoir choisi un objet termine la commande.

---

*Voir aussi : [Point Interval](../point-interval/) pour des points à distance fixe, [Point](../point/) pour des points isolés et [ArrayPolar](../array-polar/) pour répéter des objets plutôt que des points.*
