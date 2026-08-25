---
title: Commande ClipboardPaste — Coller des entités depuis le presse-papiers système
description: La commande ClipboardPaste lit dans le presse-papiers système les entités écrites auparavant par ClipboardCopy et les place à un point d'insertion choisi, en ajoutant les calques et types de ligne manquants au dessin de destination.
keywords: [coller presse-papiers CAO, coller des entités entre dessins, coller objets CAO, Ctrl+V CAO, coller entre onglets, fusion de calques au collage, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

La commande `ClipboardPaste` lit les entités que [ClipboardCopy](../clipboard-copy/) a écrites dans le **presse-papiers système** et les place dans le dessin courant à un point que vous choisissez. Comme il s'agit du vrai presse-papiers système, la source peut être un autre dessin, un autre onglet du navigateur ou une session ouverte plus tôt dans la journée.

## Comment coller

1. Appuyez sur `Ctrl+V` (`Cmd+V` sur macOS), ou tapez `ClipboardPaste` dans le terminal.
2. L'invite affiche **reading clipboard…** pendant que le navigateur transmet le texte du presse-papiers.
3. Une fois chargée, l'invite devient **pick insertion point** et un aperçu de la géométrie suit votre curseur.
4. **Cliquez** pour placer les entités. Elles sont ajoutées au dessin et restent sélectionnées.

L'aperçu est ancré par le **point de référence** de la copie — le coin inférieur gauche de l'étendue combinée de la sélection d'origine. Ce coin se trouve sous votre curseur, si bien que la disposition relative des entités copiées est préservée exactement.

## Ce qui se passe au collage

| Étape | Comportement |
|-------|--------------|
| **Nouvelles identités** | Chaque entité collée reçoit un nouvel identifiant, donc coller deux fois donne deux ensembles indépendants |
| **Translation** | Les entités sont décalées de curseur − point de référence |
| **Fusion des calques** | Tout calque référencé absent du dessin de destination est ajouté par nom |
| **Fusion des types de ligne** | Tout type de ligne référencé absent du dessin de destination est ajouté par nom |
| **Sélection** | La sélection précédente est effacée et les entités collées deviennent la sélection |

### Fusion des calques et types de ligne

Les entrées de table manquantes sont ajoutées ; **celles qui existent sont laissées telles quelles**. Si le presse-papiers transporte un calque nommé `WALLS` en rouge et que la destination possède déjà un calque `WALLS` en bleu, la définition de la destination l'emporte et les entités collées la rejoignent — elles seront bleues. Un collage ne redéfinit rien dans le dessin de destination.

Cela compte lors de copies entre dessins aux conventions de calques différentes : vérifiez le [Layer Manager](../layer-manager/) après un collage inter-dessins si les couleurs ne sont pas celles attendues.

## Quand le presse-papiers n'a rien à coller

ClipboardPaste n'accepte que les contenus produits par ClipboardCopy. Tout le reste — texte brut, URL, image, JSON d'une autre application — est rejeté et le terminal indique :

```
Clipboard has no copied entities
```

Si le navigateur refuse totalement l'accès au presse-papiers, le message est **Clipboard access denied**. Les deux mettent fin à la commande sans modifier le dessin.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Ctrl+V` / `Cmd+V` | Activer ClipboardPaste |
| `Échap` | Annuler — les entités sont abandonnées et rien n'est ajouté |

Annuler pendant la phase de lecture est sans risque : si le presse-papiers répond après que vous avez déjà annulé ou lancé une autre commande, le résultat tardif est ignoré plutôt que d'interrompre ce qui est actif à ce moment-là.

## Copier entre onglets

Le flux de travail inter-dessins habituel :

1. Ouvrez le dessin source, sélectionnez la géométrie, appuyez sur `Ctrl+C`.
2. Passez à l'autre onglet — ou ouvrez un second onglet de l'application et chargez un autre fichier.
3. Appuyez sur `Ctrl+V` et cliquez un point d'insertion.

Les deux onglets ont la même origine et partagent le presse-papiers système : rien n'est téléversé et aucun serveur n'intervient. Le contenu reste du texte JSON dans votre propre presse-papiers du début à la fin.

## Entités prises en charge

Tout type d'entité que ClipboardCopy sait écrire, ClipboardPaste sait le relire — avec la sérialisation utilisée par le format natif `.json`.

## Voir aussi

- [ClipboardCopy](../clipboard-copy/) — écrire la sélection dans le presse-papiers
- [Copy](../copy/) — dupliquer des entités dans le dessin courant
- [Layer Manager](../layer-manager/) — inspecter les calques apportés par un collage
