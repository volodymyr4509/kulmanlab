---
title: "Préparer un fichier DXF pour la découpe laser"
description: "Pourquoi les services de découpe refusent les DXF et comment corriger le vôtre — contours fermés, unités, saignée et calques. Gratuit dans le navigateur."
keywords: [DXF découpe laser, préparer DXF laser, format fichier découpe laser, DXF refusé découpe, contours fermés DXF, saignée laser kerf, préparer fichier laser, unités DXF laser, calques découpe gravure, éditeur DXF gratuit]
date: 2026-09-02
author: KulmanLab
tag: Guide
---

Un DXF destiné à la découpe laser demande quatre choses : des contours fermés, les bonnes unités, uniquement la géométrie à découper — pas de cotations, de notes ni de hachures — et des calques séparant découpe, marquage et gravure. Ce guide traite chacun de ces points et montre comment vérifier votre fichier avant qu'un prestataire ne le refuse.

Tout cela se fait gratuitement dans le navigateur sur [app.kulmanlab.com](https://app.kulmanlab.com) : rien à installer, aucun compte, et le fichier ne quitte jamais votre ordinateur. C'est le flux de travail pour lequel nous avons conçu KulmanLab au départ, si bien que les limites valables pour d'autres tâches de CAO ne s'appliquent pour l'essentiel pas ici : la découpe laser est en 2D, et le DXF est ce que les services de découpe réclament.

## Pourquoi les fichiers sont refusés

Cinq raisons couvrent la quasi-totalité des cas.

**Contours ouverts.** Une forme qui semble fermée mais présente un interstice minuscule dans un angle n'est pas une région : c'est un ensemble de lignes disjointes. Les machines doivent savoir ce qui est dedans et ce qui est dehors, et un contour ouvert n'a pas de dedans. C'est de loin le motif de refus le plus fréquent.

**Unités fausses ou ambiguës.** Le DXF n'enregistre pas de façon fiable ce que ses nombres signifient. Le même fichier peut être en millimètres, centimètres, pouces ou pieds, et souvent il ne le précise pas. Une pièce qui arrive 25,4 fois trop grande ou trop petite, c'est cela.

**Tout ce qui n'est pas de la géométrie.** Cotations, cartouches, notes, hachures, lignes de construction. La machine essaiera très volontiers de découper vos annotations.

**Lignes en double.** Deux lignes identiques superposées, c'est le laser qui parcourt deux fois le même tracé : temps perdu, bords brûlés, et sur matériau fin un risque d'incendie.

**Tout sur un seul calque.** Si découpe, marquage et gravure ne sont pas séparés, le prestataire ne peut pas les distinguer et vous demandera de renvoyer le fichier.

## Préparer le fichier

Faites glisser votre `.dxf` sur le canevas de [app.kulmanlab.com](https://app.kulmanlab.com), ou utilisez le bouton **Import** du panneau Fichier. Le dessin se charge et la vue s'y ajuste.

**1. Regardez ce que vous avez vraiment.** Tapez `fit` pour tout amener à l'écran. Puis zoomez dans chaque angle de chaque pièce : les interstices sont invisibles à l'échelle du dessin entier et évidents à 10×. C'est cette vérification qui vous évite le courriel de refus.

**2. Supprimez ce qui ne doit pas être découpé.** Lignes de construction, notes, cadres, cotations. `layer-isolate` affiche un calque à la fois, ce qui est la manière de débusquer les restes cachés sous la géométrie utile.

**3. Refermez les interstices.** `trim` rogne les extrémités qui dépassent là où deux lignes se croisent au-delà. Là où les lignes sont trop courtes, faites glisser la poignée d'extrémité sur sa voisine : les poignées s'accrochent, les extrémités se rejoignent donc réellement au lieu de presque se rejoindre.

**4. Vérifiez vos dimensions.** `distance` mesure entre deux points, `area` mesure une région fermée à partir de points cliqués. Mesurez un élément dont vous connaissez la cote réelle. Si l'écart est d'un facteur 25,4, votre fichier est dans le mauvais système d'unités.

**5. Séparez découpe, marquage et gravure.** Placez chaque opération sur son propre calque au nom évident : `CUT`, `SCORE`, `ENGRAVE`. La plupart des prestataires demandent soit cela, soit des fichiers distincts. `layer-manager` les crée et les affecte.

Puis exportez : **Export** → **DXF**. KulmanLab écrit du DXF AC1032 sans fioritures, exactement ce qu'attendent les services de découpe et les logiciels de machine.

## La saignée

Le laser retire de la matière en coupant — de l'ordre de 0,1 à 0,3 mm selon la machine, le matériau et l'épaisseur. Découpez un carré de 50 mm et vous obtenez un carré légèrement sous-dimensionné, et la pièce censée s'y emmancher n'entrera pas.

Deux façons de gérer cela :

**Laisser faire le prestataire.** La plupart des services de découpe compensent eux-mêmes la saignée, et s'ils le font, compenser de votre côté rend les pièces fausses dans l'autre sens. Renseignez-vous avant de modifier quoi que ce soit.

**Le faire vous-même.** `offset` crée une copie parallèle d'une forme à distance fixe : la moitié de la largeur de saignée, vers l'extérieur pour les pièces qui doivent garder leur cote, vers l'intérieur pour les perçages. Cela fonctionne sur les lignes, cercles, arcs, ellipses et polylignes. L'opération porte sur une entité à la fois : c'est donc praticable pour une poignée de cotes critiques, pas pour une plaque de deux cents pièces.

Si la tolérance compte, découpez une pièce d'essai avant d'engager la matière.

## Ce qu'il faut vérifier à l'export DXF

À savoir avant de compter dessus :

- **Décochez l'annotation plutôt que de la supprimer.** Texte, cotations, lignes de repère et hachures s'exportent désormais, donc tout ce que vous laissez dans le dessin se retrouve dans le fichier. Pas besoin de supprimer : l'Export Manager liste chaque type d'entité avec sa propre case, et décocher Text, les lignes de cotation, Leaders et Hatches vous donne un DXF ne contenant que la géométrie de découpe, le dessin restant intact.
- **Le texte sort en `MTEXT`, ce qui n'est pas de la géométrie gravable.** Le lettrage est exporté avec sa mise en forme, mais bien des logiciels machine attendent des contours plutôt que du texte vivant sur un calque de gravure. Vérifiez ce qu'accepte le vôtre avant de bâtir une gravure là-dessus.
- **Les références de bloc ne sont pas importées.** Un dessin construit à partir de symboles de bloc répétés arrive incomplet ; vérifiez le nombre de pièces par rapport à l'original.

Les splines, elles, *sont* exportées. Certains logiciels de machine les gèrent mal et préfèrent les polylignes — si c'est le cas du vôtre, redessinez les courbes en polylignes ou en arcs.

## Une mise en garde sur l'automatisation

KulmanLab n'a **aucun contrôle préalable**. Rien ne recherche les contours ouverts, les lignes en double ou les problèmes d'unités pour vous les signaler. Les vérifications ci-dessus sont manuelles : zoomer, mesurer, regarder.

C'est acceptable pour quelques pièces et fastidieux pour une plaque entièrement imbriquée. Si vous produisez des plaques régulièrement, un outil doté d'un validateur automatique vous servira mieux — et pour des pièces à l'unité, ce qui est le cas de la plupart des gens la plupart du temps, regarder le fichier attentivement repère les mêmes problèmes.

## Avant d'envoyer

- Tous les contours de découpe fermés, angles contrôlés à fort grossissement
- Une cote connue mesurée et correcte
- Plus aucune cotation, note, cadre ni géométrie de construction
- Aucune ligne en double superposée
- Découpe, marquage et gravure sur des calques distincts et clairement nommés
- Saignée : appliquée, ou délibérément laissée au prestataire
- Exporté en DXF puis rouvert une fois pour confirmer que tout est correct

Ce dernier point coûte dix secondes et détecte les surprises d'export avant le prestataire.

---

*À lire aussi : [Import](/fr/docs/commands/import/) pour ce que KulmanLab lit dans un DXF, [Export Manager](/fr/docs/commands/export-manager/) pour le contenu exact de chaque format, [Offset](/fr/docs/commands/offset/) pour la compensation de saignée, et [LayerManager](/fr/docs/commands/layer-manager/) pour préparer les calques de découpe et de gravure.*
