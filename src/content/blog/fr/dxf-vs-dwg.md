---
title: "DXF ou DWG : quelle différence ?"
description: "Le DWG est le format natif d'AutoCAD, le DXF le format d'échange ouvert. Ce qui change vraiment, lequel choisir, et comment obtenir un DXF quand on vous envoie un DWG."
keywords: [DXF ou DWG, différence DXF DWG, DWG ou DXF, qu'est-ce que le DWG, qu'est-ce que le DXF, DWG vers DXF, formats de fichiers CAO, ouvrir un DWG, format DXF, quel format CAO]
date: 2026-09-02
author: KulmanLab
tag: Guide
---

Le DWG est le format de fichier natif d'AutoCAD : binaire, propriétaire et non documenté par Autodesk. Le DXF est le format d'échange qu'Autodesk publie afin que d'autres logiciels puissent lire les mêmes dessins. Même géométrie, contenant différent — et un seul des deux est fait pour transmettre des fichiers à des gens extérieurs à votre propre logiciel.

Ce dernier point constitue toute la différence pratique, et c'est lui qui détermine ce que vous devriez demander.

## En bref

| | DXF | DWG |
|---|---|---|
| Signifie | Drawing Exchange Format | Drawing |
| Spécification publiée | Oui, par Autodesk | Non |
| Encodage | Texte (existe aussi en variante binaire) | Binaire |
| Objet | Faire circuler des dessins entre logiciels | Le format de travail propre à AutoCAD |
| Taille de fichier | Plus grande | Plus petite |
| Lu par les autres logiciels | Très largement | De façon inégale, via des bibliothèques rétro-conçues |
| Porte tout ce qu'AutoCAD sait faire | Non — un sous-ensemble documenté | Oui |

## Pourquoi deux formats

Autodesk a lancé AutoCAD en 1982 avec le DWG comme format de travail. Il est conçu pour la commodité d'un seul logiciel : compact, binaire, et libre d'évoluer dès qu'AutoCAD en a besoin.

Cela en fait un mauvais candidat à l'envoi. Autodesk a donc publié en parallèle le DXF : le même dessin écrit sous une forme documentée et lisible, contre laquelle n'importe quel développeur peut travailler. Ouvrez un `.dxf` dans un éditeur de texte et vous verrez des codes de groupe et des noms de section en ASCII lisible.

Les deux sont versionnés de concert. Chaque version d'AutoCAD apporte une révision du DWG et une révision correspondante du DXF ; le marqueur `AC1032` qu'on aperçoit parfois dans l'en-tête d'un fichier désigne par exemple la génération AutoCAD 2018.

Le DXF n'est donc ni le format le plus ancien ni le format mineur. C'est le même dessin, rendu lisible à dessein.

## Ce qui change réellement en pratique

**Ouverture.** Autodesk documente le DXF et ne documente pas le DWG. Les logiciels qui lisent le DWG — et ils sont nombreux — s'appuient sur des bibliothèques issues de la rétro-ingénierie du format. Cela fonctionne bien et c'est parfaitement légitime, mais la prise en charge du DWG accuse un retard sur les nouvelles versions et varie d'une application à l'autre, tandis que celle du DXF s'implémente directement à partir de la spécification.

**Taille.** Un DWG binaire est généralement bien plus léger que le même dessin en DXF ASCII. Sur un gros projet cela compte ; sur une pièce isolée, non.

**Fidélité.** Le DWG contient tout ce qu'AutoCAD sait exprimer, y compris des types d'objets dont les autres logiciels n'ont aucune notion. Le DXF couvre un sous-ensemble documenté. Pour du dessin 2D ordinaire — lignes, arcs, cercles, polylignes, texte, cotations, calques — ce sous-ensemble suffit amplement. Pour un modèle reposant sur des objets propriétaires d'AutoCAD, l'export en DXF en perd une partie.

**Étendue de la prise en charge.** Pratiquement tous les outils de CAO, de FAO et de dessin vectoriel lisent le DXF. Moins nombreux sont ceux qui lisent le DWG, et ceux-là le gèrent souvent moins complètement.

## Lequel vous faut-il vraiment ?

**On vous a envoyé un fichier et vous n'arrivez pas à l'ouvrir.** Vérifiez d'abord l'extension réelle. La plupart des gens disent « DWG » pour les deux, et une fois sur deux le fichier dans vos téléchargements est un `.dxf` que vous pouviez déjà ouvrir. Voir [ouvrir un DXF sans AutoCAD](/fr/blog/open-dxf-file-without-autocad/).

**Vous l'envoyez à un service de découpe laser, un atelier CNC ou un fabricant.** DXF, quasiment toujours. Les logiciels de machine et les services de découpe sont bâtis autour, et la géométrie de découpe 2D tient sans peine dans le sous-ensemble documenté. Voir [préparer un DXF pour la découpe laser](/fr/blog/prepare-dxf-for-laser-cutting/).

**Vous l'envoyez à un architecte ou un ingénieur qui travaille sur AutoCAD.** Demandez. Beaucoup préfèrent le DWG parce que c'est ce que leur flux attend, et ils ouvriront très bien un DXF sinon.

**Vous archivez pour le long terme.** DXF. Un format texte documenté restera lisible dans vingt ans par quelqu'un muni de la spécification et d'un éditeur de texte. C'est précisément la raison d'être des formats d'échange.

**Quelqu'un veut simplement le regarder.** Ni l'un ni l'autre — envoyez un PDF. Voir [convertir un DXF en PDF](/fr/blog/convert-dxf-to-pdf/).

## Obtenir un DXF quand on vous a envoyé un DWG

La voie fiable consiste à demander. La personne qui a envoyé le fichier l'ouvre dans son logiciel de CAO et fait *Enregistrer sous* ou *Exporter* → DXF. Cela prend une dizaine de secondes, toute application de CAO de bureau sait le faire, et le fichier sort du logiciel qui l'a créé plutôt que de la supposition d'un tiers à son sujet.

Si demander n'est pas envisageable, des convertisseurs existent. Deux points à peser : la conversion est l'endroit où la fidélité se perd, et vous téléversez le dessin de quelqu'un d'autre vers un service que vous ne maîtrisez pas. Pour un projet personnel, cela va. Pour un travail client, demandez.

Quand vous en réclamez un, précisez une version. **Le DXF R12 est le plus sûr** : très ancien, universellement pris en charge, et pour de la géométrie 2D simple il ne perd rien d'important. Les logiciels de machine anciens s'en accommodent bien mieux.

## Deux idées fausses répandues

**« Le DXF fait perdre des données. »** Seulement au sens où il ne transporte pas les types d'objets propriétaires d'AutoCAD. Lignes, arcs, cercles, polylignes, texte, cotations et calques passent intacts. Pour du travail de dessin 2D, la perte est généralement nulle.

**« Le DXF, c'est l'ancien format. »** Il est versionné en parallèle du DWG depuis 1982 et l'est toujours. La confusion vient de ce que le R12 sert si couramment de cible de compatibilité qu'on suppose que le DXF s'est arrêté là.

## Où se situe cet outil

[KulmanLab](https://kulmanlab.com/fr/) lit le **DXF, pas le DWG**, et il vaut la peine d'en dire la raison plutôt que d'en faire un oubli : le DXF est documenté, une implémentation peut donc être correcte en lisant la spécification. Le DWG supposerait de dépendre d'une bibliothèque rétro-conçue, dans un navigateur, pour un format qui évolue au calendrier d'Autodesk.

Si vous avez un `.dwg`, cet outil ne l'ouvrira pas. Si vous avez un `.dxf`, vous pouvez l'ouvrir dans un onglet de navigateur sans rien installer : [app.kulmanlab.com](https://app.kulmanlab.com).

Ce qu'il réécrit, c'est de la géométrie plus du texte — lignes, cercles, arcs, ellipses, polylignes, splines et texte, avec les calques et les types de ligne. Les hachures, cotations et lignes de repère n'arrivent pour l'instant pas dans le DXF exporté.

---

*À lire aussi : [Import](/fr/docs/commands/import/) pour ce que KulmanLab lit exactement dans un DXF, et [Export Manager](/fr/docs/commands/export-manager/) pour ce que porte chaque format d'export.*
