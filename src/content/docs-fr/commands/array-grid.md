---
title: Commande Array Grid — Répéter des entités en lignes et colonnes
description: La commande Array Grid crée une grille rectangulaire de copies à partir des entités sélectionnées — tapez le nombre de lignes, de colonnes et l'espacement entre elles directement dans le terminal, sans avoir à cliquer de points.
keywords: [commande array CAO, arraygrid, array rectangulaire CAO, motif de grille CAO, répéter entités CAO, copier array CAO, kulmanlab]
group: edit
order: 15
---

# Array Grid

La commande `ArrayGrid` crée une grille rectangulaire de copies à partir des entités sélectionnées — saisissez le nombre de lignes, le nombre de colonnes et l'espacement entre elles, le tout tapé dans le terminal. La sélection d'origine occupe la cellule ligne 0, colonne 0 ; chaque autre cellule est une copie translatée.

## Deux façons de démarrer

**Pré-sélectionner, puis array** — sélectionnez d'abord les entités, puis activez :

1. Sélectionnez une ou plusieurs entités sur le canevas.
2. Tapez `arraygrid` dans le terminal (`arr` suffit — c'est sans ambiguïté) ou cliquez sur le bouton **Array Grid** de la barre d'outils.
3. Tapez le nombre de **lignes** et appuyez sur **Entrée**.
4. Tapez le nombre de **colonnes** et appuyez sur **Entrée**.
5. Tapez l'**espacement entre les lignes** et appuyez sur **Entrée**.
6. Tapez l'**espacement entre les colonnes** et appuyez sur **Entrée** — la grille est créée immédiatement.

**Activer, puis sélectionner** — démarrez la commande sans rien de sélectionné :

1. Tapez `arraygrid` ou cliquez sur le bouton de la barre d'outils.
2. **Sélectionnez les objets** — cliquez pour basculer les entités individuelles, ou faites glisser pour sélectionner par zone.
3. Appuyez sur **Entrée** ou **Espace** pour confirmer la sélection.
4. Continuez avec lignes → colonnes → espacement des lignes → espacement des colonnes comme ci-dessus.

```
  2 lignes x 3 colonnes :

  [B] [B] [B]   <- ligne 1 (copies translatées)
  [A] [A] [A]   <- ligne 0 : sélection d'origine, copies vers la droite
```

> Le terminal n'a besoin que des lettres suffisantes pour être sans ambiguïté — taper `arr` et appuyer sur **Entrée** active directement Array Grid, car aucun autre nom de commande ne commence par ces trois lettres (Arc, Area, Align et Angle divergent plus tôt).

## Lignes, colonnes et espacement

| Invite | Accepte | Remarques |
|--------|---------|-----------|
| Lignes | Entiers positifs (1, 2, 3…) | Chiffres uniquement — pas de point décimal ni de signe |
| Colonnes | Entiers positifs (1, 2, 3…) | Chiffres uniquement — pas de point décimal ni de signe |
| Espacement des lignes | Décimal signé (ex. `10`, `-5.5`) | Distance entre les lignes ; négatif inverse la direction |
| Espacement des colonnes | Décimal signé (ex. `10`, `-5.5`) | Distance entre les colonnes ; négatif inverse la direction |

Avec 1 ligne et 1 colonne, aucune copie n'est créée — la commande se termine sans modifier le dessin.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Entrée` / `Espace` | Confirme la sélection et avance à l'invite des lignes |
| `0`–`9` | Saisit des chiffres pour les lignes ou les colonnes |
| `0`–`9`, `.`, `-` | Saisit des chiffres pour l'espacement des lignes/colonnes (`-` uniquement en premier caractère) |
| `Retour arrière` | Supprime le dernier caractère saisi de l'invite actuelle |
| `Entrée` | Confirme l'invite actuelle et avance à la suivante |
| `Échap` | Efface les valeurs de lignes/colonnes/espacement saisies et revient à la phase de sélection |

## Sélection pendant la commande

| Méthode | Comportement |
|---------|-------------|
| **Clic** | Bascule l'entité sous le curseur dans/hors de la sélection |
| **Glisser à droite** (strict) | Ajoute les entités entièrement à l'intérieur du cadre |
| **Glisser à gauche** (croisement) | Ajoute les entités qui intersectent la limite du cadre |
| **Entrée** / **Espace** | Confirme la sélection et avance à l'invite des lignes |

## Après l'array

Les nouvelles copies sont ajoutées au dessin et la commande se termine — la sélection d'origine est effacée. Relancez **Array Grid**, ou démarrez une nouvelle commande.

## Array Grid vs Copy

| | Array Grid | Copy |
|---|-----------|------|
| Sélection de points | Aucune — lignes, colonnes et espacement sont tapés | Le point de base et la destination sont cliqués (ou tapés) |
| Copies créées | Lignes × colonnes − 1 | Exactement 1 par opération de copie |
| Disposition | Grille rectangulaire régulière | N'importe où, à n'importe quel décalage |
| Idéal pour | Répéter une unité selon un motif régulier (trous, carreaux, fixations) | Un seul duplicata à une position arbitraire |

## Entités supportées

Array Grid fonctionne sur tous les types d'entités. Toutes les entités implémentent `translate(dx, dy)` en interne, la même opération utilisée par [Copy](../copy/) et [Move](../move/), donc aucune n'est exclue.
