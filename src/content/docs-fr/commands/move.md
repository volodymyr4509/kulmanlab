---
title: Commande Move — Translater les entités sélectionnées par point de base dans KulmanLab CAD
description: La commande Move translate une ou plusieurs entités sélectionnées par un point de base et une destination. Supporte la pré-sélection, le verrouillage d'angle et la saisie de distance exacte. Après le déplacement, les entités restent sélectionnées à leur nouvelle position. Tous les types d'entités sont supportés.
keywords: [commande move CAO, translater entités CAO, déplacer objets CAO, verrouillage angle move, distance exacte move, déplacement par poignée CAO, kulmanlab]
group: edit
order: 1
---

# Move

La commande `move` translate les entités sélectionnées d'un point de base vers un point de destination. Le déplacement appliqué à chaque entité sélectionnée est le vecteur du point de base vers la destination. Après le déplacement, toutes les entités restent sélectionnées à leur nouvelle position, prêtes pour d'autres modifications.

## Deux façons de démarrer

**Pré-sélectionner, puis déplacer** — sélectionnez d'abord les entités, puis activez :

1. Sélectionnez une ou plusieurs entités sur le canevas.
2. Tapez `move` dans le terminal ou cliquez sur le bouton **Move** de la barre d'outils.
3. **Cliquez sur le point de base**, ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
4. **Cliquez sur la destination** — toutes les entités sélectionnées se déplacent selon le vecteur base→destination. La saisie de coordonnées fonctionne ici aussi.

**Activer, puis sélectionner** — démarrez la commande sans rien de sélectionné :

1. Tapez `move` ou cliquez sur le bouton de la barre d'outils.
2. **Sélectionnez les objets** — cliquez pour basculer les entités individuelles, ou faites glisser pour sélectionner par zone.
3. Appuyez sur **Entrée** ou **Espace** pour confirmer la sélection.
4. **Cliquez sur le point de base**, puis **cliquez sur la destination** (la saisie de coordonnées est disponible aux deux étapes).

```
  Avant :                    Après :
  ● base                       → ● destination
  [entité A]                      [entité A déplacée]
  [entité B]                      [entité B déplacée]
```

Un aperçu fantôme de toutes les entités sélectionnées suit le curseur du point de base vers la destination, montrant le résultat avant que vous cliquiez.

## Saisie de coordonnées

À l'étape du point de base ou de la destination, tapez une position exacte au lieu de cliquer :

1. Tapez la valeur X.
2. Appuyez sur `,` — le terminal affiche `[X], [Y{curseur}]`.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour confirmer.

## Verrouillage d'angle et distance exacte

Une fois le point de base défini, la commande surveille un axe de verrouillage à 45° (0°, 45°, 90°, 135°, …). La direction **se verrouille** lorsque le curseur est suffisamment loin de la base et à moins d'une largeur de poignée de l'axe. Pendant le verrouillage :

- L'aperçu fantôme se cale sur l'axe.
- Tapez une distance et appuyez sur **Entrée** pour déplacer exactement de cette distance dans la direction verrouillée.
- Cliquer se projette sur l'axe, donc la destination est toujours exactement dessus.

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Ajouter à la valeur de distance |
| `-` | Distance négative — inverse la direction le long de l'axe (premier caractère uniquement) |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Appliquer le déplacement à la distance saisie |

## Référence clavier

| Touche | Action |
|--------|--------|
| `Entrée` / `Espace` | Confirmer la sélection et avancer à la phase point de base |
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X, ou distance quand l'angle est verrouillé |
| `,` | Verrouiller X et passer à la saisie Y |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée ou appliquer le déplacement à la distance saisie |
| `Échap` | Annuler et réinitialiser |

## Activer Move depuis une poignée

Cliquer sur la **poignée de point médian** d'une [Line](../line/) sélectionnée lance Move automatiquement, avec le point médian déjà défini comme point de base et la phase de déplacement active. C'est le moyen le plus rapide de repositionner une seule ligne sans passer par l'étape de sélection.

## Sélection pendant la commande

Lorsque la commande démarre en phase de sélection :

| Méthode | Comportement |
|---------|-------------|
| **Clic** | Bascule l'entité sous le curseur dans/hors de la sélection |
| **Glisser à droite** (strict) | Ajoute les entités entièrement à l'intérieur du cadre |
| **Glisser à gauche** (croisement) | Ajoute les entités qui intersectent la limite du cadre |
| **Entrée** / **Espace** | Confirme la sélection et passe à la phase du point de base |

## Après le déplacement

Les entités déplacées restent sélectionnées à leur nouvelle position. Cela signifie que vous pouvez immédiatement :
- Relancer **Move** pour les ajuster davantage.
- Lancer [Copy](../copy/), [Rotate](../rotate/), ou [Scale](../scale/) sans re-sélectionner.
- Appuyer sur **Suppr** pour les supprimer.

## Move vs Copy

| | Move | Copy |
|---|------|------|
| Position originale | Libérée — les entités n'y sont plus | Conservée — les originaux restent en place |
| Nombre de résultats | Même nombre d'entités | Un ensemble supplémentaire par opération |
| Sélection après | Entités déplacées sélectionnées à la nouvelle position | Entités copiées sélectionnées à la nouvelle position |
| Idéal pour | Repositionner la géométrie | Dupliquer la géométrie |

## Entités supportées

Move fonctionne sur tous les types d'entités : Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader, et tous les autres. Toutes les entités implémentent `translate(dx, dy)`, donc aucune n'est exclue.
