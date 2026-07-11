---
title: Commande Copy — Dupliquer des entités à une nouvelle position dans KulmanLab CAD
description: La commande Copy crée des duplicatas traduits des entités sélectionnées tout en laissant les originaux en place. Supporte la pré-sélection, le verrouillage d'angle et la saisie de distance exacte. Les copies sont placées et la commande se termine ; les originaux restent inchangés.
keywords: [commande copy CAO, dupliquer entités CAO, copier objets CAO, cloner géométrie CAO, verrouillage angle copie, distance exacte copie, kulmanlab]
group: edit
order: 2
---

# Copy

La commande `copy` crée des duplicatas traduits des entités sélectionnées et les place décalées d'un point de base vers une destination — les originaux restent exactement là où ils sont. C'est la différence essentielle avec [Move](../move/) : Copy ajoute de nouvelles entités au dessin ; Move déplace les entités existantes.

## Deux façons de démarrer

**Pré-sélectionner, puis copier** — sélectionnez d'abord les entités, puis activez :

1. Sélectionnez une ou plusieurs entités sur le canevas.
2. Tapez `copy` dans le terminal ou cliquez sur le bouton **Copy** de la barre d'outils.
3. **Cliquez sur le point de base**, ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
4. **Cliquez sur la destination** — les duplicatas apparaissent avec le décalage base→destination. La saisie de coordonnées fonctionne ici aussi.

**Activer, puis sélectionner** — démarrez la commande sans rien de sélectionné :

1. Tapez `copy` ou cliquez sur le bouton de la barre d'outils.
2. **Sélectionnez les objets** — cliquez pour basculer les entités individuelles, ou faites glisser pour sélectionner par zone.
3. Appuyez sur **Entrée** ou **Espace** pour confirmer la sélection.
4. **Cliquez sur le point de base**, puis **cliquez sur la destination** (la saisie de coordonnées est disponible aux deux étapes).

```
  Avant :               Après :
  [entité A]            [entité A]  ← originaux intacts
  [entité B]            [entité B]
                        [copie de A] ← nouvelles entités
                        [copie de B]
```

Un aperçu fantôme des copies suit le curseur du point de base vers la destination.

## Saisie de coordonnées

À l'étape du point de base ou de la destination, tapez une position exacte au lieu de cliquer :

1. Tapez la valeur X.
2. Appuyez sur `,` — le terminal affiche `[X], [Y{curseur}]`.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour confirmer.

## Verrouillage d'angle et distance exacte

Une fois le point de base défini, la commande se cale sur les axes à 45° (0°, 45°, 90°, 135°, …) lorsque le curseur est suffisamment loin et proche de l'axe. Pendant le verrouillage, tapez une distance et appuyez sur **Entrée** pour placer les copies exactement à ce décalage.

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Ajouter à la valeur de distance |
| `-` | Distance négative — inverse la direction le long de l'axe (premier caractère uniquement) |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Placer les copies à la distance saisie |

## Référence clavier

| Touche | Action |
|--------|--------|
| `Entrée` / `Espace` | Confirmer la sélection et avancer à la phase point de base |
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X, ou distance quand l'angle est verrouillé |
| `,` | Verrouiller X et passer à la saisie Y |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée ou appliquer la copie à la distance saisie |
| `Échap` | Annuler et réinitialiser |

## Sélection pendant la commande

| Méthode | Comportement |
|---------|-------------|
| **Clic** | Bascule l'entité sous le curseur dans/hors de la sélection |
| **Glisser à droite** (strict) | Ajoute les entités entièrement à l'intérieur du cadre |
| **Glisser à gauche** (croisement) | Ajoute les entités qui intersectent la limite du cadre |
| **Entrée** / **Espace** | Confirme la sélection |

## Après la copie

Les **originaux restent sélectionnés** — les nouvelles copies sont ajoutées au dessin mais la sélection est effacée et la commande se termine. Pour travailler immédiatement avec les copies, relancez Copy sur la sélection, ou démarrez une nouvelle commande.

## Copy vs Move

| | Copy | Move |
|---|------|------|
| Originaux | Restent en place | Supprimés de la position originale |
| Nombre de résultats | Augmente du nombre d'entités copiées | Inchangé |
| Après l'opération | Originaux toujours sélectionnés | Entités déplacées sélectionnées à la nouvelle position |
| Idéal pour | Répéter la géométrie, mises en page symétriques | Repositionner la géométrie |

## Entités supportées

Copy fonctionne sur tous les types d'entités. Toutes les entités implémentent `translate(dx, dy)` en interne, donc aucune n'est exclue.
