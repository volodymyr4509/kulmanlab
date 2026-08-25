---
title: Commande ClipboardCopy — Copier des entités dans le presse-papiers système
description: La commande ClipboardCopy écrit les entités sélectionnées dans le presse-papiers système sous forme de texte JSON, avec les calques et types de ligne auxquels elles font référence, afin de les coller dans un autre dessin ou un autre onglet du navigateur avec ClipboardPaste.
keywords: [copier presse-papiers CAO, copier des entités entre dessins, copier objets CAO presse-papiers, Ctrl+C CAO, copier entre onglets, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

La commande `ClipboardCopy` écrit les entités sélectionnées dans votre **presse-papiers système** sous forme de texte JSON. Comme elle utilise le véritable presse-papiers et non un tampon interne, la géométrie copiée survit en dehors du dessin : collez-la dans un autre fichier, un deuxième onglet du navigateur ou une fenêtre ouverte plus tard avec [ClipboardPaste](../clipboard-paste/).

C'est la différence avec [Copy](../copy/) : Copy duplique des entités à l'intérieur du dessin courant en un seul geste, tandis que ClipboardCopy les dépose quelque part où elles pourront être récupérées depuis un dessin entièrement différent.

## Deux façons de démarrer

**Présélectionner, puis copier** — la voie rapide :

1. Sélectionnez une ou plusieurs entités sur le canevas.
2. Appuyez sur `Ctrl+C` (`Cmd+C` sur macOS), ou tapez `ClipboardCopy` dans le terminal.
3. Les entités sont écrites immédiatement dans le presse-papiers et la commande se termine.

**Activer, puis sélectionner** — démarrer sans rien de sélectionné :

1. Appuyez sur `Ctrl+C` ou tapez `ClipboardCopy` avec une sélection vide.
2. L'invite affiche **pick objects to copy — Enter or Space to confirm**.
3. **Sélectionnez des objets** — cliquez pour basculer des entités individuelles, ou faites glisser pour sélectionner par zone.
4. Appuyez sur **Enter** ou **Espace** pour copier la sélection et quitter.

Appuyer sur **Enter** ou **Espace** sans rien de sélectionné met simplement fin à la commande sans toucher au presse-papiers.

## Ce qui est copié

Le contenu du presse-papiers transporte plus que la géométrie brute, afin qu'un collage dans un dessin étranger reste correct :

| Élément | Rôle |
|---------|------|
| **Entités** | La forme sérialisée complète de chaque entité sélectionnée |
| **Point de référence** | Le coin inférieur gauche de l'étendue combinée de la sélection — ce que ClipboardPaste ancre au curseur |
| **Calques** | Uniquement les calques réellement référencés par les entités copiées, par nom |
| **Types de ligne** | Uniquement les types de ligne réellement référencés par les entités copiées, par nom |

Seules les entrées de table *référencées* voyagent avec la copie, et non les tables complètes de calques et de types de ligne du dessin source. Les motifs de hachure ne sont pas embarqués et n'ont pas besoin de l'être : la table de motifs d'un dessin est le jeu par défaut intégré, et les fichiers `.pat` que vous avez téléversés résident dans un stockage propre à l'utilisateur déjà partagé entre onglets — une hachure collée retrouve donc son motif toute seule.

## Confirmation

En cas de succès, le terminal indique le nombre d'entités écrites :

```
3 entities copied to clipboard
```

Si le navigateur refuse l'accès au presse-papiers, le terminal affiche **Copy failed: clipboard access denied** et rien n'est écrit. Il s'agit d'une décision de permission du navigateur, pas d'une erreur de dessin — voir [Permissions du presse-papiers](#permissions-du-presse-papiers) ci-dessous.

## Sélection pendant la commande

| Méthode | Comportement |
|---------|--------------|
| **Clic** | Bascule l'entité sous le curseur dans/hors de la sélection |
| **Glisser vers la droite** (stricte) | Ajoute les entités entièrement à l'intérieur du cadre |
| **Glisser vers la gauche** (capture) | Ajoute les entités qui croisent la limite du cadre |
| **Enter** / **Espace** | Confirme la sélection et copie |

## Référence clavier

| Touche | Action |
|--------|--------|
| `Ctrl+C` / `Cmd+C` | Activer ClipboardCopy |
| `Enter` / `Espace` | Copier la sélection courante, ou quitter si rien n'est sélectionné |
| `Échap` | Annuler sans copier |

## Permissions du presse-papiers

Écrire dans le presse-papiers système requiert une permission du navigateur. En pratique, une copie déclenchée par une frappe est accordée sans invite dans les navigateurs de bureau actuels, mais une page ayant perdu le focus, ou un navigateur aux réglages stricts, peut la refuser. Si le message d'accès refusé apparaît, cliquez une fois sur le canevas pour redonner le focus à la page et réessayez.

Comme le contenu est du texte JSON ordinaire, tout ce que vous copiez ensuite le remplace — une ligne de texte, une URL. Recopiez avant de coller si vous avez utilisé le presse-papiers pour autre chose entre-temps.

## Entités prises en charge

ClipboardCopy fonctionne avec tous les types d'entités. Celles-ci sont sérialisées avec le mécanisme utilisé par l'export natif `.json`, donc rien n'est perdu au passage.

## Voir aussi

- [ClipboardPaste](../clipboard-paste/) — relire le presse-papiers et placer les entités
- [Copy](../copy/) — dupliquer des entités dans le dessin courant
- [Export Manager](../export-manager/) — enregistrer un dessin entier en DXF ou JSON
