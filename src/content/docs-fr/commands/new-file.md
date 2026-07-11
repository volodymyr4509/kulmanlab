---
title: New File — Démarrer un dessin vierge dans KulmanLab CAD
description: La commande New File vide le canevas et ouvre un nouveau dessin vierge. Un nom de fichier avec horodatage est généré automatiquement et sauvegardé dans le stockage du navigateur.
keywords: [nouveau fichier CAO, nouveau dessin, canevas vierge CAO, créer nouveau dessin en ligne, démarrer nouveau DXF, nouveau fichier KulmanLab, réinitialiser canevas, vider dessin]
group: file
order: 2
---

# New File

La commande **New File** vide le canevas et commence un nouveau dessin vierge. Un nom de fichier unique avec horodatage est généré automatiquement.

## Comment créer un nouveau fichier

Cliquez sur le bouton **New File** dans la barre d'outils (icône nouvelle page) dans le panneau Fichier. Le canevas est vidé immédiatement — sans invites ni dialogues de confirmation.

## Ce que contient le nouveau fichier

Un fichier nouvellement créé commence avec :

- **Aucune entité** sur le canevas.
- **Un calque par défaut** nommé `0` avec une couleur blanche et un type de ligne `Continuous`.
- Un **nom de fichier généré** au format `kulman-Mon01_HH:MM:SS.dxf` (ex. `kulman-May22_14:30:00.dxf`).

Le fichier est automatiquement sauvegardé dans le stockage du navigateur et apparaît dans [Fichiers Récents](../files/).

## Avertissement — le travail non enregistré est perdu

Cliquer sur **New File** supprime toutes les entités du canevas actuel sans avertissement. Si vous souhaitez conserver le dessin actuel, [exportez-le](../export/) d'abord.

## Quand utiliser New File vs Import

| Situation | Action recommandée |
|-----------|-------------------|
| Démarrer un dessin depuis zéro | **New File** |
| Ouvrir un fichier DXF ou JSON existant | [Import](../import/) |
| Copier un dessin pour travailler sur une variante | [Exportez](../export/) le fichier actuel, puis [importez](../import/) la copie |

## Commandes associées

- [Import](../import/) — ouvrir un dessin DXF ou JSON existant
- [Export](../export/) — télécharger le dessin avant d'en commencer un nouveau
- [Files](../files/) — restaurer un dessin précédent depuis le stockage du navigateur
