---
title: "Commande Point — placer des points dans le dessin dans KulmanLab CAD"
description: "La commande Point place un point à chaque clic, X,Y saisi ou distance le long d’une direction verrouillée, jusqu’à Entrée, Espace ou Échap. Les points sont dessinés comme un petit point, portent le calque et la couleur courants et voyagent comme entités DXF POINT."
keywords: ["commande point CAO", "placer un point CAO", "entité DXF POINT", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

La commande `point` place un point à chaque choix et reste active jusqu’à ce que vous appuyiez sur Entrée, Espace ou Échap. Un point est une position sans taille : il est dessiné comme un petit point et porte le calque et la couleur courants. Il est enregistré comme entité `POINT`.

## Placer des points

1. Tapez `point` dans le terminal ou cliquez sur **Point**, le dernier bouton du panneau Shapes.
2. **Cliquez** là où va le point, ou tapez `X,Y` puis **Entrée** pour une position exacte. Chaque choix place un point et le terminal consigne ses coordonnées ; la commande reste active pour le suivant.
3. Ou verrouillez une direction depuis une [épingle vectorielle](../../interface/vector-pins/) et tapez une distance — le point tombe exactement à cette distance le long de celle-ci.
4. Appuyez sur **Entrée**, **Espace** ou **Échap** pour terminer. Entrée et Espace ne terminent que lorsque rien n’est en cours de saisie.

## À quoi ressemble un point

Un point est dessiné comme un petit point de 1,5 px de rayon à tous les niveaux de zoom : il reste visible en dézoomant et ne grossit pas en zoomant. Le style de point du dessin (`$PDMODE` et `$PDSIZE`) n’est pas encore lu, donc chaque point est un petit point, quoi que dise un DXF.

## Modifier les points

Un point sélectionné a une poignée, qui le déplace. Une sélection par fenêtre prend un point lorsqu’il est dans la fenêtre, quel que soit le sens du glissement.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) et [Scale](../scale/) agissent sur les points comme sur toute autre entité. La fenêtre des propriétés affiche Position X et Position Y, ainsi que la couleur et le calque.

## DXF — entité POINT

Les points sont lus et écrits dans le DXF comme entités `POINT` avec position, couleur et calque (codes de groupe 10/20, 62 et 8) et voyagent aussi par le JSON enregistré. Ils étaient auparavant ignorés à l’import. [Export Manager](../export-manager/) liste les Points sur leur propre ligne, ce qui permet de les exclure d’un export.

---

*Voir aussi : [Line](../line/) pour la même saisie de coordonnées et [Vector Pins](../../interface/vector-pins/) pour placer un point à une distance fixe le long d’une direction.*
