---
title: Commande Hatch — Remplir une zone avec un motif
description: La commande Hatch remplit la région entourant un point cliqué avec un motif — toute combinaison de lignes, arcs, ellipses et splines qui se referme entoure une région, et toute forme fermée à l'intérieur reste comme une île non remplie.
keywords: [commande hatch CAD, remplir zone CAD, motif de hachures CAD, ANSI31, remplissage SOLID, remplissage de contour CAD, entité DXF HATCH, kulmanlab]
group: shapes
order: 7
---

# Hatch

La commande `hatch` remplit la région entourant un point cliqué avec un motif. Le contour n'est pas dessiné au préalable — il provient de ce qui se trouve déjà sur le canevas, donc quatre [Lines](../line/) distinctes qui se rejoignent bout à bout entourent une région exactement comme le fait une [Polyline](../polyline/) fermée, et toute forme fermée à l'intérieur devient une île que le remplissage laisse intacte.

## Remplir une zone

1. Tapez `hatch` dans le terminal ou cliquez sur le bouton **Hatch** de la barre d'outils (l'icône d'échantillon).
2. **Cliquez sur un point** à l'intérieur de la région que vous voulez remplir.
3. La commande reste active, donc continuez à cliquer pour remplir d'autres zones — chaque clic crée sa propre entité `Hatch`.
4. Appuyez sur **Entrée**, **Espace** ou **Escape** quand vous avez terminé.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   cliquez à l'intérieur du
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   contour extérieur ; le
  └─────────────┘        └─────────────┘   cercle reste une île
```

## Référence clavier

| Touche | Action |
|-----|--------|
| `Enter` / `Space` | Terminer la commande Hatch |
| `Escape` | Terminer la commande Hatch (comme Entrée/Espace) |

## Ce qui peut former un contour

Toute combinaison de ces types d'entités peut former un contour, dans n'importe quelle combinaison, tant qu'elles se connectent bout à bout sans aucun espace :

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (son propre contour fermé)
- [Ellipse](../ellipse/) (fermée, ou un arc elliptique ouvert faisant partie d'une boucle plus grande)
- [Polyline](../polyline/) (ouverte ou fermée) et [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/)

Les entités Text, Multileader et Dimension ne sont jamais traitées comme des contours.

## Îles

Tout ce qui est entièrement fermé à l'intérieur de la région que vous avez cliquée — un cercle, une polyligne fermée, le contour d'un autre hatch — devient une **île** : le remplissage s'arrête à son bord et l'île elle-même reste vide. Placez une forme fermée à l'intérieur d'une autre forme fermée et le remplissage alterne, trou dans un remplissage dans un trou, en suivant la même règle intérieur/extérieur à chaque niveau.

## Quand une sélection échoue

Si le point que vous avez cliqué n'est pas enfermé, ou si le contour a un espace, le terminal explique pourquoi au lieu de ne rien faire silencieusement :

| Message | Signification |
|---------|----------------|
| "no boundary found" | Rien n'a été touché dans aucune direction depuis le point cliqué — il n'y a aucun contour à proximité |
| "point is not enclosed" | Un contour existe à proximité, mais la forme qu'il forme ne contient pas le point que vous avez cliqué |
| "boundary is open" | Le contour le plus proche a un espace quelque part — retracez-le et vérifiez que chaque jonction est exacte |
| "boundary too complex" | La boucle de contour n'a pas pu être fermée dans la limite de parcours — généralement un enchevêtrement d'entités qui se chevauchent |

La commande reste active après un échec de sélection — lisez le message, corrigez le dessin ou cliquez ailleurs, et réessayez.

## Choisir un motif

Chaque nouveau hatch commence rempli avec `ANSI31` (ou quel que soit le motif utilisé par le *dernier* hatch que vous avez modifié) — il n'y a pas de sélecteur de motif avant de dessiner. Pour utiliser un motif différent :

1. Sélectionnez un hatch existant et ouvrez son champ **Pattern** dans le panneau de propriétés — cela ouvre le sélecteur de motifs, une grille d'échantillons nommés groupés selon leur origine.
2. Cliquez sur un motif pour l'appliquer — le remplissage se met à jour immédiatement.

Cette sélection devient aussi la valeur par défaut pour le *prochain* hatch que vous créez avec la commande `hatch`, de la même façon que choisir un calque ou une couleur se répercute. Donc pour hachurer plusieurs nouvelles zones avec un motif particulier : remplissez une zone, réglez son motif une fois, puis continuez à hachurer — chaque remplissage suivant commence déjà avec ce motif appliqué.

Consultez [Hatch Manager](../hatch-manager/) pour téléverser vos propres fichiers de motifs `.pat` et parcourir la bibliothèque complète.

**SOLID** est une entrée ordinaire dans la liste des motifs, pas une case à cocher ou un mode séparé — choisissez-le de la même façon que vous choisiriez ANSI31 ou tout autre motif nommé.

## Propriétés

| Propriété | Signification |
|-----------|----------------|
| Pattern | Le nom du motif, issu du vocabulaire de motifs partagé (voir [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Met à l'échelle l'espacement des lignes du motif — des valeurs plus grandes espacent davantage les lignes du motif |
| Pattern Angle | Fait pivoter le motif indépendamment du contour |
| Origin X / Origin Y | Où la propre répétition du motif est ancrée, en coordonnées du dessin |

Déplacer, faire pivoter, refléter ou mettre à l'échelle un hatch emporte son placement de motif avec lui, donc le remplissage reste aligné avec le contour — vous n'avez pas besoin de régler à nouveau l'échelle ou l'angle après une transformation.

## Édition par poignées du contour

Un hatch sélectionné saisit son contour de la même façon qu'une Polyline saisit ses sommets — une poignée à chaque coin où deux bords se rejoignent, et une au milieu de chaque bord (une boucle fermée comme un hatch de cercle ou d'ellipse saisit plutôt à ses quatre points d'axe).

| Poignée | Ce qu'elle fait |
|---------|------------------|
| **Coin** | Déplace ce coin. Un bord droit suit exactement ; un arc se réajuste pour continuer à passer par ses deux voisins ; un bord d'ellipse ou de spline ne peut atterrir que quelque part sur sa propre courbe, donc le coin se cale sur le point le plus proche dessus |
| **Milieu de bord — bord de ligne, ellipse ou spline** | Fait glisser tout le bord ; les bords des deux côtés sont coupés ou étendus pour rester joints à lui |
| **Milieu de bord — bord d'arc** | **Cambre** l'arc à travers le curseur au lieu de le faire glisser — les deux extrémités restent exactement où elles étaient, et rien d'autre dans le contour ne bouge |
| **Centre** (tout le hatch) | Active [Move](../move/) pour tout le hatch |

Un aperçu de glissement affiche le contour comme un contour en pointillés au lieu d'un remplissage solide pendant que vous faites glisser — le remplissage d'origine reste visible en dessous jusqu'à ce que vous relâchiez, car un aperçu ne peut que peindre par-dessus ce qui existe déjà, jamais en retirer quoi que ce soit.

## DXF — entité HATCH

Les hatchs sont **importés** depuis des entités `HATCH` : KulmanLab lit la géométrie du contour ainsi que le nom, l'échelle et l'angle du motif (codes de groupe DXF 70/41/52) — il ne lit **pas** les définitions de lignes propres du motif intégrées dans le fichier. À la place, le nom du motif est recherché dans la propre bibliothèque de motifs de KulmanLab (valeurs par défaut intégrées plus tout ce que vous avez téléversé dans [Hatch Manager](../hatch-manager/)). Un nom absent de votre bibliothèque revient à ANSI31 afin que le dessin continue à se lire comme hachuré, et une note est enregistrée une fois.

Les boucles délimitées par des splines écrites par d'autres applications (type de bord de contour DXF 4) ne sont pas encore lues.

Les hachures s'**exportent** en DXF sous forme d'entités `HATCH`. Les boucles de contour partent avec le nom du motif (code de groupe 2), l'indicateur de remplissage plein (70) ainsi que l'angle et l'échelle propres à cette hachure (52/41) — et, contrairement au chemin d'import, les définitions de lignes résolues du motif sont également écrites en ligne (78, avec 53/43/44/45/46/79/49). L'asymétrie est voulue : KulmanLab sait résoudre un nom dans sa propre bibliothèque, mais l'application qui reçoit le fichier n'a peut-être pas ce motif, donc les lignes voyagent avec lui.

## Commandes associées

- [Hatch Manager](../hatch-manager/) — parcourir la bibliothèque de motifs et téléverser des fichiers `.pat`
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — emportent tous le placement de motif du hatch avec eux
- [Delete](../delete/) — supprime le hatch sans affecter les entités qui formaient son contour
