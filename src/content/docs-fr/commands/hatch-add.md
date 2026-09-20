---
title: Commande HatchAdd — téléverser un fichier de motifs .pat depuis le terminal
description: HatchAdd ouvre le sélecteur de fichiers pour téléverser un fichier .pat sans passer par le Hatch Manager. Tous les motifs qu'il définit sont ajoutés d'un coup.
keywords: [commande hatch add, commande hatchadd, téléverser pat terminal, motif de hachure personnalisé CAO, acad.pat, bibliothèque de motifs, kulmanlab]
group: style
order: 5
---

# HatchAdd

La commande `AjouterHachure` ouvre le sélecteur de fichiers du système pour téléverser un fichier de motifs de hachure `.pat`, sans ouvrir d'abord la boîte de dialogue [Hatch Manager](../hatch-manager/). C'est le même téléversement que déclenche le bouton **Add .pat File** du Hatch Manager — HatchAdd n'est qu'un chemin direct depuis le terminal.

## Téléverser un fichier de motifs

1. Saisissez `AjouterHachure` dans le terminal, ou cliquez sur **Add .pat File** en bas de la boîte de dialogue [Hatch Manager](../hatch-manager/).
2. Choisissez un fichier `.pat` dans le sélecteur système. Seul le format standard de motifs de hachure est accepté.

La commande se termine dès l'ouverture du sélecteur de fichiers — aucune autre invite, aucun clic ni saisie au terminal. Les motifs sont enregistrés et apparaissent dans le groupe **User** dès que le fichier est choisi.

## Ce qui se passe lors du téléversement

- **Un fichier `.pat` est un conteneur, pas un motif unique.** Un seul fichier définit couramment de nombreux motifs nommés, et ils sont tous ajoutés ensemble. C'est là que HatchAdd diffère de [FontAdd](../font-add/), où un `.ttf` correspond à une police.
- **Le fichier lui-même n'est pas conservé.** Il est lu une fois, découpé en ses motifs, et chaque motif est enregistré seul sous son propre nom. C'est pourquoi vous pouvez retirer un motif plus tard sans toucher à ceux arrivés avec lui — et pourquoi le groupe **User** les liste par ordre alphabétique de nom plutôt que par fichier d'origine.
- **Un motif dont le nom correspond à un motif existant le remplace.** C'est la manière prévue d'installer des définitions faisant autorité par-dessus les approximations de KulmanLab : téléversez un vrai `acad.pat`, et ses versions d'`ANSI31` et des autres noms standard prennent le relais.
- **Les motifs sont enregistrés par utilisateur, pas par dessin.** Ils vivent dans le navigateur (IndexedDB), se rechargent tout seuls à la prochaine ouverture de KulmanLab CAD, et sont disponibles dans tous les dessins.
- **Un fichier sans définition de motif valable n'ajoute rien.** La bibliothèque reste exactement telle quelle.

## Référence clavier

HatchAdd n'a pas d'interaction clavier propre — toute la commande se résume à la boîte de dialogue native de sélection de fichiers du navigateur. Annuler cette boîte (ou ne choisir aucun fichier) laisse la bibliothèque de motifs inchangée.

## Commandes associées

| Commande | Ce qu'elle fait |
|----------|----------------|
| [Hatch Manager](../hatch-manager/) | Parcourir la bibliothèque de motifs avec un aperçu en direct et retirer les motifs téléversés |
| [Hatch](../hatch/) | Remplit une région fermée avec un motif de la bibliothèque |
| [FontAdd](../font-add/) | Le même raccourci de téléversement direct pour les polices `.ttf` |
