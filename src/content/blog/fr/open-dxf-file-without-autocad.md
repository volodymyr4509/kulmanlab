---
title: "Comment ouvrir un fichier DXF sans AutoCAD"
description: "Un fichier .dxf et pas d'AutoCAD ? Ouvrez-le gratuitement dans votre navigateur, sans installation — plus des alternatives et du dépannage."
keywords: [ouvrir fichier DXF, ouvrir DXF sans AutoCAD, visionneuse DXF gratuite, voir DXF en ligne, ouvrir DXF navigateur, lecteur DXF gratuit, afficher fichier DXF, lire DXF, DXF ou DWG, ouvrir DXF Mac]
date: 2026-08-31
author: KulmanLab
tag: Guide
---

Pour ouvrir un fichier DXF sans AutoCAD, faites-le glisser dans un éditeur CAO qui fonctionne dans le navigateur — rien à installer, aucun compte à créer. Des logiciels de bureau gratuits comme LibreCAD et QCAD ouvrent aussi le DXF. Ce guide couvre les deux voies, et que faire quand le dessin s'ouvre vide, minuscule ou sans son texte.

Nous développons l'un des outils ci-dessous — [KulmanLab](https://kulmanlab.com/fr/) — considérez donc cette section comme celle qui est partiale, et les limites qui y sont listées comme la partie où il a fallu être honnête.

## Ce qu'est réellement un fichier DXF

DXF signifie *Drawing Exchange Format* (format d'échange de dessins). Autodesk l'a créé pour que les logiciels de CAO puissent se transmettre des dessins, et il est délibérément ouvert et fondé sur du texte : vous pouvez littéralement ouvrir un `.dxf` dans un éditeur de texte et le lire.

Cette ouverture est la raison pour laquelle vous avez le choix. Le DXF n'est lié à aucun logiciel en particulier, et des dizaines d'outils savent le lire.

C'est aussi la raison pour laquelle un DXF n'est pas une image. Il stocke de la géométrie — lignes, arcs, cercles, calques, cotations — pas des pixels. Le renommer en `.jpg` ne le fera pas s'ouvrir dans une visionneuse d'images.

## Option 1 : l'ouvrir dans votre navigateur

La voie la plus rapide, puisqu'il n'y a rien à télécharger et aucune inscription.

1. Rendez-vous sur [app.kulmanlab.com](https://app.kulmanlab.com).
2. Faites glisser votre fichier `.dxf` directement sur le canevas — ou utilisez le bouton **Import** (icône de dossier) dans le panneau Fichier.
3. Le dessin se charge et la vue s'ajuste automatiquement à son étendue.

Votre fichier ne quitte jamais votre ordinateur. KulmanLab fonctionne entièrement dans le navigateur : le dessin est analysé localement plutôt qu'envoyé sur un serveur.

Vous pouvez ensuite vous déplacer et zoomer, afficher ou masquer des calques, mesurer des distances et des angles, modifier la géométrie et exporter en PDF, PNG, JPEG ou WebP s'il vous faut simplement quelque chose d'imprimable à transmettre.

**Ce qu'il lit dans un DXF :** lignes, cercles, arcs, ellipses, polylignes, splines, texte, cotations, lignes de repère multiples et hachures, ainsi que les tables de calques et de types de ligne du fichier.

**Ses limites — à lire avant de vous y fier :**

- **2D uniquement.** Un DXF contenant des solides ou des maillages 3D n'est pas le bon fichier pour cet outil.
- **Pas de blocs.** Les références de bloc (`INSERT`) ne sont pas analysées : un dessin construit à partir de symboles de bloc répétés arrivera incomplet.
- **DXF, pas DWG.** Voir la section DWG plus bas.
- **Navigateurs de bureau uniquement** — Chrome, Firefox, Safari et Edge. Il n'existe pas de version mobile.
- **L'export DXF ne contient que la géométrie.** Si vous modifiez puis réexportez en DXF, les hachures, cotations, lignes de repère et textes sont omis. Exportez plutôt au format JSON natif pour tout conserver, ou en PDF si vous voulez seulement partager.

Si l'un de ces points est rédhibitoire, l'un des logiciels de bureau ci-dessous vous servira mieux.

## Option 2 : logiciels de bureau gratuits

L'installation en vaut la peine si vous faites cela régulièrement, ou si votre fichier utilise des fonctions qu'un outil dans le navigateur ne gérera pas.

**LibreCAD** — gratuit et open source, 2D uniquement, tourne sous Windows, macOS et Linux. Le plus proche du dessin 2D classique, et un éditeur DXF solide.

**QCAD** — le moteur dont LibreCAD est issu. Une édition communautaire gratuite, plus une version Pro payante avec des fonctions supplémentaires.

**FreeCAD** — gratuit et open source, orienté modélisation paramétrique 3D mais capable d'importer du DXF. Surdimensionné si vous voulez seulement consulter un dessin 2D, et sa courbe d'apprentissage est raide.

**Autodesk Viewer** — la visionneuse web gratuite d'Autodesk. Consultation seule, et il faut se connecter avec un compte Autodesk.

**Inkscape** — ce n'est pas de la CAO, mais il importe le DXF et constitue un choix raisonnable si tout ce qu'il vous faut est voir les formes ou les convertir en SVG.

## « En fait c'est un DWG, non ? »

Très souvent, oui. DXF et DWG sont tous deux des formats Autodesk et on emploie les deux noms indifféremment, mais ce n'est pas la même chose :

| | DXF | DWG |
|---|---|---|
| Format | Ouvert, fondé sur du texte | Propriétaire, binaire |
| Objet | Échange entre logiciels | Format natif d'AutoCAD |
| Prise en charge ailleurs | Large | Limitée et souvent imparfaite |

Vérifiez l'extension réelle du fichier avant de partir en quête d'une visionneuse. Si c'est `.dwg`, les outils ci-dessus ne vous aideront pour la plupart pas — y compris KulmanLab, qui ne prend en charge que le DXF.

La solution fiable consiste à obtenir un DXF : la personne qui vous a envoyé le fichier peut l'ouvrir dans son logiciel de CAO et l'exporter ou faire *Enregistrer sous* en DXF. Presque toutes les applications de CAO de bureau savent le faire, et cela lui prendra une dizaine de secondes. Convertir le DWG vous-même avec un convertisseur tiers est possible, mais plus destructif — et vous confiez le dessin de quelqu'un d'autre à un outil inconnu.

## Quand le dessin s'ouvre mais paraît incorrect

**Le canevas est vide.** En général la géométrie se trouve très loin de l'origine, la vue pointe donc vers du vide. Utilisez une commande *ajuster* ou *zoom étendue* pour rejoindre le dessin. Vérifiez aussi si des calques sont désactivés : un dessin peut arriver avec la plupart de ses calques gelés.

**Tout est microscopique, ou démesurément grand.** Le DXF n'enregistre pas ses unités de manière fiable. Le même dessin peut avoir été réalisé en millimètres, centimètres, pouces ou pieds, et souvent le fichier ne le précise pas. Mesurez un élément dont vous connaissez la taille réelle et mettez à l'échelle à partir de là.

**Le texte manque ou est remplacé.** Les polices ne sont pas incorporées dans un DXF. Si le dessin utilise une police absente de votre machine, le texte bascule sur une autre ou disparaît. Charger la police d'origine règle le problème.

**Des parties du dessin ne sont pas passées.** Un élément du fichier utilise un type d'entité que votre outil ne lit pas — souvent des blocs, des solides 3D ou des extensions propriétaires écrites par le logiciel d'origine. Essayez un deuxième outil avant de conclure que le fichier est corrompu.

**Rien ne s'ouvre du tout.** Confirmez qu'il s'agit bien d'un DXF : ouvrez-le dans un éditeur de texte brut. Un vrai DXF commence par des codes de groupe ASCII lisibles et des noms de section comme `SECTION` et `HEADER`. Si vous voyez du bruit binaire, c'est un DWG ou une variante binaire du DXF.

## Lequel choisir

**Vous voulez juste le regarder, une fois ?** Ouvrez-le dans le navigateur. Installer une suite de CAO pour lire un seul fichier reçu par courriel n'est pas un bon échange.

**Vous devez mesurer, annoter ou imprimer ?** Les outils dans le navigateur s'en sortent très bien, et imprimer en PDF à l'échelle réelle est en général exactement ce que l'on cherche.

**Du vrai travail de dessin, de façon répétée ?** Installez LibreCAD ou QCAD. Un logiciel de bureau dédié vous servira mieux sur la durée.

**Vous avez un DWG ?** Demandez un DXF à l'expéditeur. C'est plus rapide et plus sûr que n'importe quelle voie de conversion.

---

*À lire aussi : [Import](/fr/docs/commands/import/) pour la liste complète de ce que KulmanLab lit dans un DXF, [Export Manager](/fr/docs/commands/export-manager/) pour ce que contient chaque format d'export, et [Print Manager](/fr/docs/commands/print-manager/) pour une sortie PDF à l'échelle physique réelle.*
