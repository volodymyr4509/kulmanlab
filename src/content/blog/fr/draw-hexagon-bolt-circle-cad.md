---
title: "Comment dessiner un hexagone ou un cercle de perçage en CAO (Polygon et réseau polaire)"
description: "Dessinez un polygone régulier à partir d’un centre et d’un rayon ou d’un côté, puis répétez des trous sur un cercle de perçage avec un réseau polaire — gratuit dans votre navigateur, avec des valeurs exactes saisies."
keywords: [dessiner un hexagone en CAO, polygone régulier CAO, réseau polaire CAO, cercle de perçage plan, répartition de trous CAO, motif circulaire CAO, dessin écrou hexagonal, dessiner un octogone CAO, diamètre primitif PCD, outil polygone CAO gratuit]
date: 2026-10-11
author: KulmanLab
tag: Guide
---

Pour dessiner un polygone régulier en CAO, indiquez le nombre de côtés, choisissez le centre puis un rayon — ou choisissez un côté et le reste suit. Pour dessiner un cercle de perçage, dessinez un trou et répétez-le autour du centre avec un réseau polaire. Ce guide fait les deux, avec des chiffres exacts, dans un navigateur sur [app.kulmanlab.com](https://app.kulmanlab.com) — gratuit, sans installation, et le fichier ne quitte jamais votre ordinateur.

Nous développons [KulmanLab](https://kulmanlab.com), donc les étapes ci-dessous utilisent ses commandes. Les idées — cote sur plats ou sur angles, diamètre du cercle primitif, copies qui tournent ou non en faisant le tour — sont les mêmes dans tout logiciel de CAO.

## Dessiner un polygone régulier

Un polygone régulier a des côtés et des angles égaux : un hexagone pour un écrou, un octogone pour un panneau, un pentagone pour une découpe décorative. Dans KulmanLab, c’est la commande **Polygon**.

1. Tapez `Polygone` dans le terminal, ou utilisez le bouton Polygon du panneau Shapes.
2. Saisissez le **nombre de côtés** — tout entier de 3 à 1024 — et appuyez sur **Entrée**. L’invite est préremplie avec le nombre utilisé la dernière fois.
3. **Cliquez sur le centre**, ou tapez `X,Y` pour un point exact.
4. **Cliquez sur le rayon**, ou tapez-le et appuyez sur **Entrée**.

Le résultat est une seule polyligne fermée : tout ce qu’on peut faire sur une polyligne — déplacer, faire pivoter, décaler, mettre à l’échelle — fonctionne.

### Sur plats ou sur angles ?

C’est là que l’on trébuche. « Rayon » peut désigner deux distances différentes, et un hexagone se spécifie par l’une ou l’autre selon ce que vous dessinez :

| | Mesuré jusqu’aux | Usage typique |
|---|---|---|
| **Inside activée** (par défaut) | Sommets | Une forme qui doit tenir dans un cercle donné |
| **Inside désactivée** | Milieux de chaque côté | Une forme de largeur sur plats donnée — écrous, têtes de vis, tailles de clé |

Appuyez sur `I` à l’invite du rayon pour basculer. Un écrou hexagonal se vend par sa largeur sur plats ; utilisez donc **Inside désactivée** et saisissez la *moitié*. Pour un écrou M8 de 13 mm sur plats :

1. `Polygone`, puis `6` pour les côtés, puis cliquez ou saisissez le centre.
2. Appuyez sur `I` pour désactiver Inside.
3. Tapez `6.5` et appuyez sur **Entrée**.

Les plats sont exactement à 13 mm ; les sommets sont à 7,51 mm du centre, soit environ 15 mm sur angles. Si vous tapez le rayon au lieu de cliquer, le polygone se pose avec son côté le plus bas horizontal, à plat. Si vous cliquez, il prend son orientation de l’endroit où vous cliquez.

### À partir d’un côté

Parfois vous connaissez la longueur d’un côté, pas un rayon — par exemple un plateau octogonal de 20 mm de côté. Appuyez sur `E` à l’invite du premier point pour passer en mode **Edge**, puis choisissez les deux extrémités d’un côté. Les autres sommets sont construits dans le sens antihoraire, à gauche de ce côté. Taper `0,0` puis `20,0` place un côté de 20 mm le long de l’axe X, avec le polygone au-dessus.

## Dessiner un cercle de perçage

Un cercle de perçage — ou cercle primitif, « PCD » sur les plans — est un anneau de trous équirépartis autour d’un centre. Vous dessinez un trou, puis vous le répétez. Dans KulmanLab, c’est **ArrayPolar**.

Prenons six trous de 6,6 mm sur un diamètre primitif de 50 mm, centré sur l’origine :

1. **Dessinez le premier trou.** Lancez `Cercle`, saisissez le centre `25` `,` `0` — la moitié du PCD le long de l’axe X —, appuyez sur **Entrée**, puis saisissez le rayon `3.3` et appuyez sur **Entrée**.
2. **Sélectionnez-le** en cliquant sur le cercle.
3. **Lancez le réseau polaire.** Tapez `RéseauPolaire`, ou utilisez le bouton ArrayPolar du panneau Edit.
4. **Choisissez le centre du motif** — tapez `0,0`.
5. Le terminal affiche le réseau tel qu’il est — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — et les cinq copies s’affichent en aperçu. Appuyez sur **Entrée** pour accepter.

C’est tout le cercle de perçage. Pour un autre nombre, appuyez sur `I` avant de confirmer et saisissez le nombre d’éléments — l’original compte pour un, et l’angle entre eux est calculé. Ou appuyez sur `A` et saisissez plutôt l’écart en degrés ; l’angle de remplissage est reformulé en conséquence.

Quelques détails qui comptent :

- **Fill** est l’angle du premier élément au dernier. Les 360° par défaut répartissent les éléments sur le cercle entier ; un nombre plus petit les répartit sur un arc — une rangée de trous sur un quart de tour, par exemple. Un angle négatif va dans le sens horaire.
- **Rotate** décide si chaque copie tourne en faisant le tour. Pour des trous ronds, cela ne change rien. Pour une rainure, une dent ou une équerre, si : activée, chaque copie regarde le centre comme l’original ; désactivée, chaque copie garde l’orientation de l’original et est seulement déplacée à sa place. Appuyez sur `R` pour basculer avant de confirmer.
- Le réseau crée des **copies** — l’original reste où il est, et chaque élément est une entité ordinaire que vous pouvez modifier ensuite.

## Tout assembler : une bride

Dessinez un hexagone pour le contour, un cercle au centre pour l’alésage et un cercle de perçage pour les trous de fixation. Trois commandes, chaque cote saisie exactement, rien à mesurer à l’écran.

Si la pièce part chez un découpeur laser, supprimez tout cercle de construction dessiné pour trouver le cercle primitif — il serait découpé comme le reste — et vérifiez le fichier avec notre guide pour [préparer un DXF pour la découpe laser](/fr/blog/prepare-dxf-for-laser-cutting/). Le polygone est un tracé fermé par construction, ce qui est la première cause de rejet des fichiers par les services de découpe.

## Ce que cela ne fait pas

- **Polygones réguliers uniquement.** Tous les côtés sont égaux. Un contour irrégulier — une forme dont certains côtés sont plus longs — est une [polyligne](/fr/docs/commands/polyline/) que vous dessinez point par point.
- **2D uniquement.** On dessine des contours plats. Vous n’obtiendrez pas un écrou modélisé ni une vis filetée.
- **Navigateurs de bureau uniquement** — Chrome, Firefox, Safari et Edge. Il n’existe pas de version mobile.

---

*Voir aussi : [Polygon](/fr/docs/commands/polygon/) et [ArrayPolar](/fr/docs/commands/array-polar/) pour toutes les options et touches, [Circle](/fr/docs/commands/circle/) pour saisir des rayons exacts et [ArrayGrid](/fr/docs/commands/array-grid/) pour répéter des objets en lignes et colonnes plutôt qu’autour d’un centre.*
