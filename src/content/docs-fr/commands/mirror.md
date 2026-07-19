---
title: Commande Mirror — Symétriser des entités par rapport à un axe
description: La commande Mirror symétrise les entités sélectionnées par rapport à une ligne de symétrie définie par deux clics. Les originaux sont toujours conservés — Mirror crée de nouvelles copies symétriques. L'axe peut être à n'importe quel angle et se verrouille à des incréments de 45°.
keywords: [commande mirror CAO, symétriser entités CAO, symétrie axiale CAO, retourner objets CAO, axe de symétrie CAO, kulmanlab]
group: edit
order: 4
---

# Mirror

La commande `mirror` crée des copies symétriques des entités sélectionnées réfléchies par rapport à un axe défini par deux points. Les originaux sont **toujours conservés** — contrairement à [Move](../move/) ou [Rotate](../rotate/), Mirror ne modifie jamais les entités existantes ; elle en ajoute seulement de nouvelles.

## Deux façons de démarrer

**Pré-sélectionner, puis symétriser** — sélectionnez d'abord les entités, puis activez :

1. Sélectionnez une ou plusieurs entités sur le canevas.
2. Tapez `mirror` dans le terminal ou cliquez sur le bouton **Mirror** de la barre d'outils.
3. **Cliquez sur le premier point** de l'axe de symétrie, ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
4. **Cliquez sur le deuxième point** — les copies symétriques sont placées et la commande se termine. La saisie de coordonnées fonctionne ici aussi.

**Activer, puis sélectionner** — démarrez la commande sans rien de sélectionné :

1. Tapez `mirror` ou cliquez sur le bouton de la barre d'outils.
2. **Sélectionnez les objets** — cliquez pour basculer, ou faites glisser pour sélectionner par zone.
3. Appuyez sur **Entrée** ou **Espace** pour confirmer la sélection.
4. **Cliquez sur le premier point**, puis **cliquez sur le deuxième point** de l'axe de symétrie (la saisie de coordonnées est disponible aux deux étapes).

```
  Original :         Axe de symétrie :        Résultat :
                     |
  [entité A]    →    |    →    [entité A] + [A symétrisée]
                     |
```

Un aperçu en direct des copies symétriques suit le curseur pendant que vous positionnez le deuxième point de l'axe.

## Axe de symétrie

L'axe est une ligne infinie passant par les deux points cliqués. Il peut être à n'importe quel angle :

- Déplacez le curseur près d'un **axe de verrouillage à 45°** (0°, 45°, 90°, 135°, …) et l'axe se verrouille à cet angle — utile pour des réflexions horizontales, verticales ou diagonales nettes.
- Cliquez loin de la zone de verrouillage pour un axe en angle libre.

## Saisie de coordonnées

À l'une ou l'autre des étapes du point d'axe, tapez une position exacte au lieu de cliquer :

1. Tapez la valeur X.
2. Appuyez sur `,` — le terminal affiche `[X], [Y{curseur}]`.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour confirmer.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Entrée` / `Espace` | Confirmer la sélection |
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X |
| `,` | Verrouiller X et passer à la saisie Y |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée saisie |
| `Échap` | Annuler et réinitialiser |

## Sélection pendant la commande

| Méthode | Comportement |
|---------|-------------|
| **Clic** | Bascule l'entité sous le curseur |
| **Glisser à droite** (strict) | Ajoute les entités entièrement à l'intérieur du cadre |
| **Glisser à gauche** (croisement) | Ajoute les entités qui intersectent le cadre |
| **Entrée** / **Espace** | Confirme la sélection |

## Ce qui est symétrisé

Tous les types d'entités sont supportés. La géométrie est réfléchie par rapport à l'axe mathématiquement :

| Entité | Ce qui change |
|--------|--------------|
| Line | Les deux points finaux réfléchis |
| Circle | Centre réfléchi ; rayon inchangé |
| Arc | Centre réfléchi ; angles de départ et de fin recalculés par rapport à l'axe |
| Ellipse | Centre réfléchi ; direction de l'axe principal inversée par rapport à l'axe |
| Polyline / Rectangle | Chaque sommet réfléchi |
| Text | Point d'ancrage réfléchi ; la chaîne de texte n'est **pas** inversée |
| Spline | Tous les sommets de contrôle / points d'ajustement réfléchis |

## Mirror vs Copy

| | Mirror | Copy |
|---|--------|------|
| Originaux | Toujours conservés | Toujours conservés |
| Position de la nouvelle entité | Réfléchie par rapport à un axe | Décalée par un vecteur de déplacement |
| Idéal pour | Conceptions symétriques, éléments bilatéraux | Répéter la géométrie dans n'importe quelle direction |
