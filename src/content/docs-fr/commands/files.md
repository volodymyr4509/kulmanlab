---
sidebar_position: 3
title: Files — Panneau des Fichiers Récents dans KulmanLab CAD
description: La commande Files ouvre le panneau des Fichiers Récents — parcourez tous les dessins sauvegardés dans votre navigateur, restaurez n'importe lequel sur le canevas ou supprimez ceux dont vous n'avez plus besoin.
keywords: [fichiers récents CAO, historique fichiers navigateur CAO, restaurer dessin, rouvrir DXF, stockage navigateur CAO, fichiers KulmanLab, dessins sauvegardés, IndexedDB CAO, gérer dessins]
---

# Files

La commande **Files** ouvre le panneau des **Fichiers Récents** — une liste de tous les dessins qui ont été sauvegardés dans le stockage local de votre navigateur. Utilisez-le pour rouvrir un dessin précédent ou supprimer les fichiers dont vous n'avez plus besoin.

## Comment ouvrir le panneau des Fichiers Récents

Cliquez sur le bouton **Files** dans la barre d'outils (icône historique) dans le panneau Fichier en haut de l'écran. Le panneau s'ouvre sur le côté gauche du canevas.

## Panneau des Fichiers Récents

Chaque entrée dans la liste affiche le nom du fichier et deux boutons d'action :

| Bouton | Action |
|--------|--------|
| ✓ **Restaurer** | Charger le dessin sur le canevas — remplace le contenu actuel |
| ✕ **Supprimer** | Supprimer le fichier du stockage du navigateur définitivement |

Si aucun fichier n'a encore été sauvegardé, le panneau affiche "No files saved".

## Comment les fichiers sont stockés

KulmanLab sauvegarde les dessins dans **IndexedDB** — une base de données persistante dans le navigateur. Cela signifie :

- Les fichiers survivent aux rechargements de page et aux redémarrages du navigateur.
- Les fichiers sont stockés **localement sur votre appareil** — ils ne sont envoyés sur aucun serveur.
- Chaque navigateur et appareil a son propre stockage indépendant. Un dessin sauvegardé dans Chrome sur un ordinateur n'est pas disponible dans Firefox ni sur une autre machine.
- Effacer les données du site du navigateur supprimera tous les fichiers sauvegardés.

## Chargement automatique des fichiers au démarrage

Lors de l'ouverture de KulmanLab CAD, l'application charge automatiquement le **fichier modifié le plus récemment** depuis le stockage. Vous n'avez pas besoin de l'ouvrir manuellement depuis le panneau Files à chaque fois.

## Gérer le stockage

Il n'y a pas de limite fixe au nombre de dessins que vous pouvez sauvegarder, mais le stockage du navigateur est limité. Si vous voyez des avertissements de stockage, supprimez les fichiers plus anciens depuis le panneau Files.

Pour supprimer tous les dessins sauvegardés en une seule fois, utilisez la commande [WipeStorage](./wipestorage).

## Noms de fichiers et versions

Chaque fichier a un horodatage dans son nom (ex. `myplan_May22_14:30:00.dxf`). Cet horodatage est ajouté automatiquement lors de l'[importation](./import) d'un fichier, garantissant que la réimportation du même fichier source crée une nouvelle entrée plutôt que d'écraser la version précédente.

## Commandes associées

- [Import](./import) — charger un dessin depuis votre système de fichiers vers le stockage du navigateur
- [Export](./export) — télécharger un dessin vers votre système de fichiers
- [New File](./new-file) — démarrer un dessin vierge (aussi sauvegardé automatiquement)
- [WipeStorage](./wipestorage) — effacer tous les fichiers sauvegardés du stockage du navigateur
