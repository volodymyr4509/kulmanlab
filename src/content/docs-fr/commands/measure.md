---
title: "Commande Measure — lire distances, longueurs, angles et aires autour du curseur"
description: "La commande Measure lit le dessin autour du curseur quand vous le déplacez — la distance jusqu’à la géométrie la plus proche, la longueur ou le rayon de ce qu’elle rencontre, l’angle où des lignes se rejoignent — et, d’un clic, donne l’aire et le périmètre d’une zone fermée. Rien ne change dans le dessin."
keywords: ["commande mesure CAO", "mesurer aire et périmètre CAO", "mesure de distance en direct CAO", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

La commande `measure` lit le dessin autour du curseur quand vous le déplacez, sans point à choisir : la distance jusqu’à la géométrie la plus proche, la longueur ou l’arrondi de cette géométrie, et l’angle où des lignes se rejoignent. Un clic dans une zone fermée en donne l’aire et le périmètre. Rien ne change dans le dessin.

## Mesurer

1. Tapez `measure` dans le terminal ou cliquez sur **Measure**, le premier bouton du panneau Measure.
2. **Déplacez le curseur.** De là, la commande regarde à droite, en haut, à gauche et en bas la géométrie la plus proche et montre ce qu’elle trouve.
3. **Cliquez dans une zone fermée** pour la remplir et lire son aire et son périmètre — voir ci-dessous.
4. Appuyez sur **Entrée**, **Espace** ou **Échap** pour terminer.

## Ce qu’elle montre

- **Distance d’un côté à l’autre** — de ce que le curseur rencontre d’un côté à ce qu’il rencontre de l’autre, à l’horizontale et à la verticale. Si un seul côté a quelque chose, la distance part du curseur. Chaque extrémité qui rencontre quelque chose porte un petit point plein ; une extrémité au curseur n’en a pas.
- **Longueur ou rayon** — chaque objet atteint par la commande est mis en évidence avec sa longueur, ou son rayon lorsqu’il fait partie d’un cercle.
- **Angle** — là où deux droites atteintes se rejoignent, l’angle entre elles est écrit ; un angle droit est marqué d’un petit carré.

Longueurs et angles sont écrits comme les écrit le [DimensionStyle](../dimension-style/) courant, dans son format d’unités et sa précision.

## Aire et périmètre

Un clic dans une zone fermée la remplit et place son aire et son périmètre dans l’invite et l’historique. La région se trouve comme avec [Hatch](../hatch/) : des lignes séparées qui se rejoignent bout à bout ferment une zone comme une polyligne, et tout ce qui est fermé à l’intérieur est laissé de côté comme un îlot — son bord compte dans le périmètre et son aire est retranchée.

L’aire est un simple nombre d’unités de dessin au carré — les pieds et pouces ne savent pas écrire une aire — tandis que le périmètre suit le format d’unités. Cliquez dans une autre zone pour la mesurer. Si rien de fermé n’entoure le point, le terminal en donne la raison avec les mêmes messages que Hatch : no boundary found, point is not enclosed ou boundary is open.

## Bon à savoir

- Elle mesure par rapport aux lignes, arcs, cercles, ellipses, polylignes et splines ; longueurs et aires sont exactes, y compris pour les ellipses et les splines.
- Les objets des calques gelés sont ignorés ; ceux des calques verrouillés sont mesurés.
- Dans un grand dessin, elle ne regarde que ce qui est proche du curseur et reste donc réactive.

---

*Voir aussi : [Distance](../distance/), [Angle](../angle/) et [Area](../area/) pour les mesures entre des points choisis, et [Hatch](../hatch/) pour la façon dont les zones fermées sont trouvées.*
