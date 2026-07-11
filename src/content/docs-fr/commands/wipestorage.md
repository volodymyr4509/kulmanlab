---
title: Commande Wipe Storage — Effacer Toutes les Données du Navigateur dans KulmanLab CAD
description: La commande wipestorage supprime définitivement tous les fichiers, calques, types de ligne et historiques d'annulation sauvegardés dans le navigateur. Nécessite de taper YES pour confirmer. Utilisez-la pour réinitialiser une base de données locale corrompue ou saturée.
keywords: [CAO wipe storage, effacer données navigateur CAO, réinitialiser application CAO, supprimer fichiers locaux CAO, kulmanlab wipestorage]
group: file
order: 6
---

# Wipe Storage

La commande `wipestorage` supprime définitivement **toutes les données stockées dans le navigateur** pour KulmanLab CAD — chaque fichier sauvegardé, table de calques et types de ligne, et historique d'annulation. La page se recharge automatiquement après.

:::danger Irréversible
Cette action ne peut pas être annulée. Tous les fichiers stockés dans le navigateur sont supprimés. Exportez tous les dessins que vous souhaitez conserver en fichiers `.json` ou `.dxf` avant d'exécuter cette commande.
:::

## Quand l'utiliser

- Le stockage du navigateur est corrompu et l'application ne peut pas charger ou sauvegarder des fichiers.
- Vous souhaitez réinitialiser complètement l'application à un état propre.
- Vous changez de navigateur ou d'appareil et n'avez plus besoin de la copie locale.

## Comment l'exécuter

1. Tapez `wipestorage` dans le terminal et appuyez sur **Entrée**.
2. Le terminal demande : *Effacer tout le stockage local du navigateur ? Tapez YES pour confirmer*
3. Tapez `YES` (quelle que soit la casse) et appuyez sur **Entrée**.

L'application supprime la base de données et recharge la page. Si vous tapez autre chose que `YES` et appuyez sur **Entrée**, ou appuyez sur **Échap**, la commande est annulée et rien n'est supprimé.

## Ce qui est supprimé

| Données | Supprimé |
|---------|----------|
| Tous les fichiers sauvegardés dans le navigateur | Oui |
| Tables de calques et types de ligne pour chaque fichier | Oui |
| Historique d'annulation / de rétablissement pour chaque fichier | Oui |

Seules les données stockées localement dans **ce navigateur** sont affectées. Les fichiers que vous avez déjà exportés en `.json` ou `.dxf` ne sont pas touchés.
