---
title: "Convertir un DXF en PDF (à la bonne échelle)"
description: "Convertissez un DXF en PDF gratuitement dans le navigateur — y compris à une échelle exacte comme 1:50 sur A3, ce que les convertisseurs ne font pas."
keywords: [convertir DXF en PDF, DXF vers PDF gratuit, DXF PDF en ligne, DXF PDF échelle, imprimer DXF à l'échelle, convertisseur DXF PDF, plan CAO en PDF, DXF PDF A3, échelle 1:50 PDF, DXF PDF sans AutoCAD]
date: 2026-09-03
author: KulmanLab
tag: Guide
---

Pour convertir un DXF en PDF, ouvrez-le dans un éditeur de CAO qui fonctionne dans le navigateur et exportez : rien à installer, aucun compte, et le fichier reste sur votre ordinateur. Si le PDF doit être mesurable une fois imprimé, il vous faut une présentation papier et une échelle exacte — précisément l'étape que les convertisseurs sautent.

C'est toute la raison d'être de ce guide. Un convertisseur de fichiers généraliste vous donne une image de votre dessin. Un PDF à l'échelle vous donne un dessin sur lequel on peut poser une règle.

## La voie rapide : produire un PDF, simplement

Quand il vous faut seulement quelque chose de lisible à envoyer :

1. Ouvrez [app.kulmanlab.com](https://app.kulmanlab.com) et faites glisser votre `.dxf` sur le canevas, ou utilisez le bouton **Import** du panneau Fichier.
2. Cliquez sur **Print**, ou tapez `printmanager`.
3. Réglez **Format** sur **PDF**.
4. Cliquez sur **Export**. Le fichier se télécharge.

C'est tout. L'aperçu est rendu par le même chemin de code et à la même résolution que le fichier exporté : ce que vous voyez est ce que vous obtenez, pas une approximation.

Un point utile à connaître : **le PDF conserve tout ce qui est à l'écran** — cotations, texte, hachures, lignes de repère — disposé exactement comme dessiné. L'export DXF emporte tout cela aussi ; le choix entre les deux ne porte donc pas sur ce qui survit, mais sur ce dont le destinataire a besoin : PDF s'il doit seulement le lire ou l'imprimer, DXF s'il doit le modifier.

## La bonne voie : convertir à une échelle exacte

Si quelqu'un doit mesurer ou fabriquer à partir de ce document, « ça tient sur la page » ne suffit pas. Une échelle 1:50 signifie qu'un millimètre sur le papier vaut 50 mm en réalité, et cela n'est vrai que si vous la réglez délibérément.

1. **Passez en présentation papier.** Cliquez sur un onglet de présentation en bas de l'écran ; le bouton **+** en ajoute une. Les présentations sont l'espace papier ; l'espace objet n'a pas de page sur laquelle mettre à l'échelle.
2. **Définissez la feuille.** Tapez `pagemanager`, ou faites un clic droit sur l'onglet et choisissez **Page Manager**. Choisissez le format papier (A4, A3, A2, Letter…) et l'orientation.
3. **Placez une fenêtre.** Tapez `viewportrectangle` et désignez deux coins opposés. La fenêtre est une ouverture sur votre modèle.
4. **Réglez l'échelle.** La fenêtre étant active, utilisez le **sélecteur d'échelle** de la barre de contrôle. Choisissez un rapport standard ou saisissez le vôtre : il accepte le format de rapport (`1:200`, `5:1`) ou un décimal (`0.005`), puis Entrée.
5. **Exportez.** Print Manager → PDF → Export.

Le PDF est dimensionné pour que la page s'imprime à l'échelle physique réelle. Imprimez-le à 100 % — jamais avec « ajuster à la page », qui remet tout à l'échelle en silence et anéantit le travail — et les mesures sur le papier seront justes.

Si vous changez ensuite de format papier ou d'échelle, les fenêtres existantes sont remises à l'échelle proportionnellement : la présentation ne s'effondre pas.

## Choisir la qualité

Le menu **Quality** fixe la résolution à laquelle le PDF est rendu :

| Quality | PPP | Pour quoi |
|---|---|---|
| Draft | 72 | Vérification rapide, fichier le plus léger |
| Normal | 150 | Par défaut — suffisant pour une pièce jointe A4 |
| Presentation | 300 | Quand on va le regarder de près |
| Max | 600 | Grand format, détails fins |

Les épaisseurs de trait suivent la résolution : un trait garde la même épaisseur *physique* sur le papier à tous les réglages — une qualité supérieure donne un trait plus net, pas plus fin. L'exception est le trait fin (épaisseur `0`), qui reste par convention d'un pixel à tous les niveaux.

## Styles d'impression

Le menu **Style** change l'encre et la page :

- **Monochrome** — noir plein sur blanc, et le réglage par défaut. C'est ce qu'il faut pour le papier : des calques colorés lisibles à l'écran deviennent des gris boueux sur une imprimante laser.
- **Default** — chaque entité dans sa propre couleur, page blanche.
- **Blueprint** — traits blancs sur bleu de Prusse profond, à la manière d'un cyanotype classique. Pour présenter, pas pour l'atelier.

## Ne convertir qu'une partie du dessin

**Change Area** recadre l'export sur un rectangle que vous tracez sur le canevas. C'est le fichier exporté qui est recadré, pas seulement l'aperçu, et cela fonctionne aussi bien sur une présentation qu'en espace objet.

Les coins s'accrochent aux poignées et aux intersections comme n'importe quel autre point : vous pouvez donc recadrer sur la géométrie dessinée plutôt qu'à l'œil — pratique quand une feuille porte quatre détails et que vous ne voulez que le troisième.

## Ce que cela ne fait pas

Les limites, franchement, avant de vous y fier :

- **Le PDF est une image matricielle dans un conteneur PDF, pas du vectoriel.** En A4 et qualité Normal, cela ne se voit pas. En A1, ou si quelqu'un zoome fortement sur un détail, un PDF vectoriel issu d'un logiciel de CAO de bureau sera plus net. Montez Quality à Presentation ou Max pour le grand format — cela ne le rend pas vectoriel pour autant.
- **Rien ne part vers une imprimante physique.** Vous obtenez un fichier ; l'impression, c'est l'affaire de votre imprimante.
- **Navigateurs de bureau uniquement** — Chrome, Firefox, Safari, Edge. Pas de version mobile.
- **2D uniquement, DXF et non DWG.** Si votre fichier est un `.dwg`, demandez à l'expéditeur d'exporter en DXF.

## Quand recourir à autre chose

**Un convertisseur généraliste** (CloudConvert, Zamzar et consorts) convient si vous voulez vraiment juste une image et que la taille d'impression vous est égale. Ils sont rapides et gèrent des formats que personne d'autre ne lit. Ils ne vous donneront pas du 1:50 sur A3.

**La CAO de bureau** — LibreCAD, QCAD, ou AutoCAD si vous l'avez — produit des PDF vectoriels et reste la bonne réponse pour des plans techniques grand format destinés à être imprimés correctement et examinés de près.

**Ceci**, pour le vaste entre-deux : un DXF dont vous avez besoin aujourd'hui sous forme de PDF annoté et correctement mis à l'échelle, sans rien installer.

## Avant d'envoyer

- Échelle réglée délibérément dans la fenêtre, pas laissée sur ce qui rentrait
- Format papier conforme à ce sur quoi le destinataire va réellement imprimer
- Quality au-dessus de Normal si cela dépasse le A4
- Style Monochrome, sauf si vous voulez de la couleur à dessein
- PDF ouvert une fois pour vérification avant de le joindre
- Destinataire prévenu d'imprimer à 100 %, et non « ajusté à la page »

Cette dernière ligne sauve plus de dessins à l'échelle que tout le reste de la liste.

---

*À lire aussi : [Print Manager](/fr/docs/commands/print-manager/) pour tous les réglages d'export, [Page Manager](/fr/docs/commands/page-manager/) pour le format papier et l'échelle de la présentation, [ViewportRectangle](/fr/docs/commands/viewport-rectangle/) pour placer et mettre à l'échelle les fenêtres, et [Import](/fr/docs/commands/import/) pour ce que KulmanLab lit dans un DXF.*
