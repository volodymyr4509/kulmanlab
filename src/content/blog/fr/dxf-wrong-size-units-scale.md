---
title: "Pourquoi votre DXF s'ouvre à la mauvaise taille (et comment y remédier)"
description: "Un DXF qui s'ouvre 25,4 fois trop petit ou 1000 fois trop grand est une erreur d'unités, pas un fichier corrompu. Identifier le rapport, remettre à l'échelle, vérifier."
keywords: [DXF mauvaise échelle, DXF mauvaise taille, unités DXF, DXF mm ou pouces, DXF importé trop petit, facteur d'échelle DXF, DXF 25.4, corriger échelle DXF, unités DXF incohérentes, redimensionner DXF]
date: 2026-09-04
author: KulmanLab
tag: Guide
---

Un DXF s'ouvre et la pièce censée faire 40 mm de large en mesure 1,575. Ou bien un plan arrive de la taille d'un pâté de maisons. Le fichier n'est pas cassé et personne n'a rien fait de travers — le dessin est juste, et c'est le nombre qui l'accompagnait qui s'est perdu en route.

Cela vaut la peine d'être compris avant de redimensionner quoi que ce soit, car la correction prend dix secondes une fois que vous savez à quel rapport vous avez affaire, et c'est en devinant qu'on finit par couper deux fois la mauvaise taille.

## Le DXF ne transporte presque pas les unités

Un DXF stocke des coordonnées sous forme de nombres bruts. Une ligne de `0,0` à `40,0` fait quarante *quelque chose* de long. Le format n'attache aucune unité à une coordonnée, et il n'y aurait nulle part où le faire : le nombre *est* la géométrie.

Ce qui s'en rapproche le plus est une variable d'en-tête nommée `$INSUNITS`, un code unique pour tout le fichier : `1` pour les pouces, `4` pour les millimètres, `6` pour les mètres, et ainsi de suite. Deux choses la rendent plus faible qu'elle n'en a l'air. C'est une seule valeur pour un dessin entier, elle ne peut donc pas décrire un fichier assemblé à partir de sources mélangées. Et elle est indicative, pas contractuelle : beaucoup d'applications ne la lisent qu'au moment d'*insérer* un dessin dans un autre et l'ignorent quand vous ouvrez simplement le fichier, au motif raisonnable que celui qui ouvre un dessin sait en général ce qu'il a dessiné.

Ainsi « 40 » voyage intact, et « millimètres » non. Chaque DXF à la mauvaise taille que vous recevrez tient dans cette phrase.

## Identifiez d'abord le rapport

Mesurez un élément dont vous connaissez réellement la taille — un diamètre de perçage, un bord de tôle, un entraxe normalisé. Divisez la taille attendue par la taille mesurée. Le résultat est presque toujours l'un de ceux-ci :

| Rapport | Ce qui s'est passé |
|---|---|
| **25,4** | Dessiné en pouces, lu en millimètres |
| **0,03937** | Dessiné en millimètres, lu en pouces |
| **1000** | Dessiné en mètres, lu en millimètres |
| **0,001** | Dessiné en millimètres, lu en mètres |
| **12** | Pieds lus comme des pouces |
| **304,8** | Pieds lus comme des millimètres |

Si votre nombre y figure, vous avez une erreur d'unités et rien d'autre, et la suite prend une minute.

S'il n'y figure pas — 1,37, disons, ou 3,2 — arrêtez-vous. Ce n'est pas un problème d'unités, et redimensionner produira un dessin faux d'une manière bien plus difficile à repérer. Passez à la dernière section.

## La correction

Il vous faut de quoi mesurer et de quoi mettre à l'échelle. N'importe quel outil de CAO le fait ; voici la marche à suivre dans [KulmanLab](https://kulmanlab.com/fr/), qui ouvre un DXF dans un onglet de navigateur sans rien installer :

1. Ouvrez le fichier — glissez-le sur la page, ou utilisez [Import](/fr/docs/commands/import/).
2. Lancez [Distance](/fr/docs/commands/distance/) et cliquez les deux extrémités de votre élément connu. L'accrochage compte ici : visez les vrais points d'extrémité, pas quelque part à côté, sinon vous intégrez votre propre erreur dans le facteur.
3. Divisez. Taille connue ÷ taille mesurée. Un perçage de 40 mm qui affiche 1,575 donne 40 ÷ 1,575 ≈ **25,4**.
4. Sélectionnez tout, lancez [Scale](/fr/docs/commands/scale/), choisissez un point de base et tapez le facteur.

Le point de base reste fixe pendant que tout le reste bouge : placez-le donc là où vous pouvez raisonner — un coin de la pièce, ou l'origine. Pour un dessin sur le point de partir en découpe, l'origine est en général le choix sensé.

Il est utile que KulmanLab n'ait aucun réglage d'unités propre. Les coordonnées ne sont que des nombres, ce qui est exactement l'état dans lequel vous voulez un dessin pendant que vous cherchez ce que ses nombres veulent dire. Aucune conversion ne se fait dans votre dos, et il n'y a rien contre quoi lutter.

## Vérifiez la correction avant de lui faire confiance

Mesurez un *deuxième* élément, ailleurs dans le dessin, dont vous connaissez aussi la taille réelle. Puis contrôlez-le.

C'est l'étape que l'on saute, et la seule qui attrape le mauvais cas. Si la deuxième mesure tombe juste, le dessin était uniformément dans les mauvaises unités et il est désormais uniformément dans les bonnes. Terminé.

Si la deuxième mesure est *toujours* fausse, et fausse d'une autre quantité, ce n'était jamais une simple erreur d'unités. Vous venez de mettre à l'échelle un dessin incohérent, ce qui est pire que le point de départ, car l'erreur n'est plus un rapport net que quelqu'un pourrait repérer.

[Area](/fr/docs/commands/area/) est ici un bon deuxième avis, surtout sur des panneaux. L'aire varie comme le *carré* du facteur : une erreur de longueur de 25,4 apparaît donc comme une erreur d'aire de 645 — un écart dont on se convainc difficilement qu'il n'existe pas.

## L'éviter la prochaine fois

Les unités se perdent entre les personnes, donc la solution est là aussi.

**Indiquez l'unité quand vous envoyez le fichier.** Une ligne dans le message. « Toutes les cotes en mm. » Cela ne coûte rien et supprime tout le problème.

**Joignez une cote de référence.** Donnez une mesure réelle — « la plaque extérieure fait 300 mm de large ». Le destinataire peut alors vérifier le fichier au lieu de le supposer, et si quelque chose a mal tourné il le corrige en une minute sans revenir vers vous.

**Demandez, quand c'est vous qui recevez.** Si un fichier arrive sans unités indiquées et que vous vous apprêtez à couper de la matière, un message coûte moins cher qu'une plaque gâchée.

**Dessinez dans les unités attendues en sortie.** La découpe laser, la CNC et la plupart des procédés de fabrication attendent des millimètres. Si le fichier va là, dessinez en millimètres et il ne reste aucune conversion à rater. Voir [préparer un DXF pour la découpe laser](/fr/blog/prepare-dxf-for-laser-cutting/).

## Quand ce n'est pas un problème d'unités

Si votre rapport n'était pas une conversion d'unités nette, les causes probables sont d'une autre nature :

- **Le dessin mélange les échelles.** Quelqu'un en a dessiné une partie à 1:1 et y a collé un détail à 1:5, ou un bloc a été inséré avec un facteur d'échelle jamais corrigé. Réparez la géométrie fautive, pas le fichier entier.
- **Vous avez mesuré de la géométrie de l'espace papier.** Un cartouche ou un cadre d'annotation est dessiné à la taille de la feuille, pas à celle du modèle. Mesurez quelque chose qui appartient à l'objet réel.
- **Vous avez mesuré la mauvaise chose.** Un perçage nominal de 40 mm peut être dessiné à 39,8 pour l'ajustement, et un panneau « 300 mm » peut faire 300 jusqu'à l'extérieur d'une feuillure invisible. Choisissez un élément à l'arête sans ambiguïté.

Dans chacun de ces cas, la réponse est de découvrir ce qu'est vraiment le dessin, pas de le mettre à l'échelle. Un dessin dont les parties se contredisent continuera de vous coûter de la matière jusqu'à ce que quelqu'un l'ouvre et regarde.

---

*À lire aussi : [Distance](/fr/docs/commands/distance/) pour mesurer, [Scale](/fr/docs/commands/scale/) pour la correction, [Area](/fr/docs/commands/area/) pour le deuxième avis, et [Export Manager](/fr/docs/commands/export-manager/) pour ce que chaque format emporte quand vous renvoyez le fichier.*
