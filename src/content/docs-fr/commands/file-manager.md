---
title: File Manager — Grille de miniatures, renommage et suppression
description: La commande FileManager ouvre une grille de miniatures de chaque dessin sauvegardé — cliquez sur une miniature pour l'ouvrir, renommez-la sur place, ou supprimez-la avec confirmation.
keywords: [gestionnaire de fichiers CAO, fichiers récents CAO, renommer dessin, supprimer dessin, grille de miniatures CAO, restaurer dessin, rouvrir DXF, stockage navigateur CAO, fichiers KulmanLab, dessins sauvegardés, IndexedDB CAO, sauvegarder dessin CAO]
group: file
order: 3
---

# File Manager

La commande `GestionnaireFichiers` ouvre une **grille de miniatures** de tous les dessins qui ont été sauvegardés dans le stockage local de votre navigateur, triée par date de dernière sauvegarde. Utilisez-la pour rouvrir un dessin précédent, le renommer, ou le supprimer.

## Ouvrir le File Manager

- Tapez `GestionnaireFichiers` dans le terminal, **ou**
- Cliquez sur le bouton **File Manager** de la barre d'outils (icône historique) dans le panneau Fichier en haut de l'écran.

Le panneau s'ouvre sur le côté gauche du canevas, et se ferme automatiquement dès que vous démarrez une autre commande ou [importez](../import/) un fichier — il ne reste ainsi jamais affiché au-dessus d'un dessin qu'il ne liste pas encore. Il se rouvre avec une liste à jour à chaque fois.

## La grille de miniatures

Chaque dessin sauvegardé est une carte affichant une miniature rendue en direct, son nom, et la date de dernière mise à jour. Les miniatures sont générées à la volée à chaque ouverture du panneau — rien n'est pré-rendu ni stocké — donc une carte affiche brièvement une icône de remplacement pendant que sa miniature est dessinée. La même icône apparaît aussi si la génération échoue, ou si le dessin n'a réellement encore aucune entité.

| Action | Comment |
|--------|-----|
| **Ouvrir** un dessin | Cliquez sur sa miniature — remplace le contenu actuel du canevas |
| **Renommer** | Cliquez sur l'icône crayon, ou double-cliquez sur le nom |
| **Supprimer** | Cliquez sur l'icône corbeille, puis confirmez |

Si aucun fichier n'a encore été sauvegardé, le panneau affiche "No files saved". S'il y a plus de fichiers que ce qui tient sur un écran, des contrôles **Page 1 of N** apparaissent sous la grille.

La carte du fichier actuellement ouvert dans l'éditeur est signalée par un anneau de couleur d'accentuation et n'a **aucun bouton de suppression** — supprimer le fichier ouvert effacerait ses données sauvegardées alors que le canevas continuerait de l'afficher, et la prochaine modification le sauvegarderait aussitôt à nouveau. Le renommage reste disponible.

## Supprimer un fichier

Cliquer sur l'icône corbeille ne supprime pas immédiatement — cela active une superposition de confirmation sur cette carte ("Delete this file?" avec des boutons **Delete** / **Cancel**), car la suppression est permanente et ne peut pas être annulée. Cliquer sur **Cancel**, cliquer sur l'icône corbeille d'une autre carte, ou cliquer ailleurs sur la carte annule la confirmation en attente sans rien supprimer.

## Renommer un fichier

Cliquez sur l'icône crayon (ou double-cliquez sur le nom du fichier) pour le modifier sur place, puis appuyez sur **Enter** pour confirmer ou **Escape** pour annuler. Un renommage est rejeté si le nouveau nom est :

- vide, ou plus long que 100 caractères,
- déjà utilisé par un autre fichier sauvegardé (insensible à la casse),
- se terminant par un point, ou
- un nom de périphérique réservé par Windows tel que `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9`, ou `LPT1`–`LPT9`.

Les caractères non valides dans un nom de fichier (`\ / : * ? " < > |`) sont supprimés automatiquement pendant la saisie. Le renommage ne change que le libellé — cela n'affecte pas la position du dessin dans la grille, puisqu'elle est triée par date de dernière sauvegarde, pas par nom.

## Sauvegardez votre travail — le stockage du navigateur n'est pas permanent

KulmanLab sauvegarde les dessins dans **IndexedDB**, une base de données intégrée à votre navigateur :

- Les fichiers sont stockés **localement sur votre appareil uniquement** — rien n'est envoyé vers un serveur.
- Chaque navigateur et appareil a son propre stockage indépendant. Un dessin sauvegardé dans Chrome sur un ordinateur n'apparaîtra pas dans Firefox, ni sur un autre appareil.
- Ce stockage **peut être effacé sans avertissement** — en effaçant les données du site ou l'historique de navigation, en cas de manque d'espace disque, en utilisant une fenêtre privée/incognito, en réinstallant le navigateur ou le système d'exploitation, ou en changeant d'appareil. Aucune de ces situations ne vous donne la chance de récupérer ce qui s'y trouvait.

**La seule façon fiable de protéger un dessin est de l'[exporter](../export-manager/) vers votre propre stockage.** Utilisez `.json` (le format natif de KulmanLab) autant que possible — il préserve chaque entité exactement ; utilisez `.dxf` lorsque vous avez besoin de compatibilité avec d'autres outils de CAO. Faites-le pour tout ce dont la perte vous contrarierait, et avant d'effacer les données du navigateur, de changer de navigateur ou d'appareil, ou de ranger la machine pour un moment.

## Chargement automatique du fichier au démarrage

Lors de l'ouverture de KulmanLab CAD, l'application charge automatiquement le **fichier modifié le plus récemment** depuis le stockage. Vous n'avez pas besoin de l'ouvrir manuellement depuis le File Manager à chaque fois.

## Gérer le stockage

Il n'y a pas de limite fixe au nombre de dessins que vous pouvez sauvegarder, mais le stockage du navigateur est limité. Si vous voyez des avertissements de stockage, supprimez les fichiers plus anciens depuis le File Manager — ou mieux, exportez-les d'abord pour ne rien perdre.

Pour supprimer tous les dessins sauvegardés en une seule fois, utilisez la commande [WipeStorage](../wipestorage/).

## Noms de fichiers

Les nouveaux fichiers et les fichiers importés reçoivent un nom simple — aucun horodatage n'est intégré. Si ce nom est déjà pris, un suffixe de style Finder/Explorer est ajouté automatiquement (`plan (2)`, `plan (3)`, …) afin que rien ne soit écrasé. Vous pouvez toujours donner un nom plus clair à un fichier par la suite en utilisant le [renommage](#renommer-un-fichier).

## Commandes associées

- [Import](../import/) — charger un dessin depuis votre système de fichiers vers le stockage du navigateur
- [Export Manager](../export-manager/) — télécharger un dessin vers votre système de fichiers
- [New File](../new-file/) — démarrer un dessin vierge (aussi sauvegardé automatiquement)
- [WipeStorage](../wipestorage/) — effacer tous les fichiers sauvegardés du stockage du navigateur
