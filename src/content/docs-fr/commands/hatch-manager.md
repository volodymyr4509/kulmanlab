---
title: Commande Hatch Manager — Parcourir et téléverser des motifs .pat
description: La commande Hatch Manager ouvre une boîte de dialogue pour parcourir les motifs de hachures avec un aperçu d'échantillon en direct, et pour téléverser vos propres fichiers de motifs .pat. Les fichiers téléversés sont enregistrés dans le navigateur et supplantent les motifs intégrés portant le même nom.
keywords: [hatch manager, motif de hachures personnalisé CAD, téléverser fichier pat, acad.pat, bibliothèque de motifs de hachures, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

La commande `GestionnaireHachures` ouvre une boîte de dialogue pour parcourir les motifs de hachures avec un aperçu d'échantillon en direct, et pour téléverser vos propres fichiers de motifs `.pat` à utiliser avec [Hatch](../hatch/).

## Ouvrir le Hatch Manager

Tapez `GestionnaireHachures` dans le terminal. Ceci est distinct du sélecteur de motifs qui s'ouvre lorsque vous cliquez sur la puce **Pattern** d'un hatch — le sélecteur choisit un motif pour un seul hatch, le Hatch Manager est l'endroit où vous ajoutez ou supprimez des fichiers `.pat`.

## Groupes de motifs

| Groupe | Contenu |
|--------|---------|
| **User** | Motifs issus de vos propres fichiers `.pat` téléversés, sous-groupés selon le fichier d'origine de chaque motif (affiché uniquement une fois que vous en avez téléversé un) |
| **Standard** | `SOLID` plus la propre table de motifs de ce dessin — chaque nouveau dessin commence avec la même bibliothèque intégrée, tout comme ses calques et types de ligne |

Cliquez sur n'importe quel motif de la liste (ou utilisez `↑`/`↓`) pour le prévisualiser à droite — un échantillon dessiné avec le même code que celui qui remplit le canevas, donc c'est exactement ce que le dessin affichera, ainsi que le nom, la description et le nombre de lignes du motif.

## Téléverser un fichier de motifs personnalisé

1. Cliquez sur **Add .pat File** dans le pied de la boîte de dialogue.
2. Choisissez un fichier `.pat` — le format standard des motifs de hachures. Un seul fichier définit souvent de nombreux motifs nommés à la fois ; ils apparaissent tous comme des entrées distinctes groupées sous le nom de ce fichier.
3. Les fichiers téléversés sont enregistrés de façon permanente dans le navigateur (IndexedDB), triés du plus récemment ajouté en premier, et rechargés automatiquement la prochaine fois que vous ouvrez KulmanLab CAD.

Téléverser un fichier qui définit un motif portant le même nom qu'un motif intégré **supplante** la valeur par défaut — c'est la méthode prise en charge pour obtenir les définitions de motifs officielles d'Autodesk : téléversez un véritable `acad.pat`, et ses versions d'ANSI31 et des autres noms standards prennent le relais des approximations propres à KulmanLab.

Si un dessin fait référence à un nom de motif absent de votre bibliothèque — importé depuis un DXF ayant utilisé un motif d'un `acad.pat` que vous n'avez pas téléversé — le hatch s'affiche quand même, en utilisant `ANSI31` comme substitut, plutôt que de revenir à un remplissage plat, sans motif.

## Supprimer un fichier de motifs

Cliquez sur le **×** à côté d'un nom de fichier dans le groupe **User** pour le supprimer ainsi que chaque motif qu'il définissait. Tout hatch utilisant déjà l'un de ces motifs revient immédiatement à `ANSI31`. Les motifs **Standard** intégrés ne peuvent pas être supprimés.

## Référence clavier

| Touche | Action |
|--------|--------|
| `↑` / `↓` | Déplace la sélection vers le haut ou le bas dans la liste des motifs |
| `Escape` | Ferme le Hatch Manager |

## Commandes associées

- [Hatch](../hatch/) — remplit une zone cliquée en utilisant le motif actuellement sélectionné
- [Font Manager](../font-manager/) — le même modèle de téléversement/parcours, pour les polices personnalisées plutôt que les motifs de hachures
