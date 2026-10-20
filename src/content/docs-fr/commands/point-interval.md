---
title: "Commande PointInterval — placer des points à distance fixe le long d’un objet"
description: "La commande PointInterval place des points à la distance que vous tapez le long d’une ligne, polyligne, d’un arc, cercle, d’une ellipse ou d’une spline, à partir de l’extrémité près de laquelle vous cliquez, en aperçu pendant que vous tapez la longueur."
keywords: ["points à intervalle CAO", "points à distance fixe sur une ligne CAO", "mesurer le long d’un objet CAO", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

La commande `PointsParIntervalle` place des [points](../point/) à distance fixe le long d’un objet, comme on marque des repères le long d’un tracé. L’objet lui-même ne change pas : les points sont de nouvelles entités sur le calque et dans la couleur courants, pratiques pour l’accrochage.

## Placer des points à intervalle

1. Tapez `PointsParIntervalle` dans le terminal ou choisissez **Point Interval** dans le menu déroulant des réseaux du panneau Edit.
2. **Cliquez sur l’objet près de l’extrémité de départ** — une ligne, polyligne, un arc, cercle, une ellipse ou une spline. Tout autre objet est refusé, et vous pouvez choisir à nouveau.
3. **Tapez la longueur de l’intervalle.** Les points s’affichent en aperçu sur l’objet pendant la saisie.
4. Appuyez sur **Entrée** ou **Espace** pour les placer. La commande se termine.

## Où vont les points

- Le premier point se place à un intervalle du début et les suivants à un intervalle l’un de l’autre, mesurés le long de l’objet, courbes comprises. Aucun point ne va sur le début lui-même.
- Sur un objet ouvert — ligne, polyligne ouverte, arc, ellipse partielle ou spline ouverte — la mesure part de l’extrémité près de laquelle vous avez cliqué. Le reste à l’autre bout n’est pas marqué : l’extrémité éloignée ne reçoit un point que si l’intervalle tombe juste.
- Sur un objet fermé — cercle, polyligne fermée, ellipse complète ou spline fermée — la mesure part du début propre de l’objet, où que vous cliquiez : un cercle depuis l’angle 0 dans le sens antihoraire, une polyligne fermée depuis son premier sommet. Les points s’arrêtent avant le début.
- Une longueur de 0 ou moins, plus grande que l’objet ou qui donnerait plus de 32767 points est refusée : le terminal en donne la raison et l’efface pour que vous puissiez retaper.

Retour arrière efface le dernier caractère. Échap recommence, pour choisir un autre objet. Entrée ou Espace avant d’avoir choisi un objet termine la commande.

---

*Voir aussi : [Point Divide](../point-divide/) pour diviser un objet en un nombre de longueurs égales et [Point](../point/) pour des points isolés.*
