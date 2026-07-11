---
title: Commande Rotate — Faire pivoter des entités autour d'un point de base dans KulmanLab CAD
description: La commande Rotate fait pivoter les entités sélectionnées autour d'un point de base choisi. L'angle peut être saisi précisément ou défini par clic — la direction du curseur depuis le point de base jusqu'au clic détermine l'angle. Les angles positifs sont dans le sens antihoraire en coordonnées DXF.
keywords: [commande rotate CAO, faire pivoter entités CAO, rotation objets angle, rotation antihoraire CAO, angle saisi rotation, kulmanlab]
group: edit
order: 3
---

# Rotate

La commande `rotate` fait pivoter les entités sélectionnées autour d'un point de base. Vous spécifiez l'angle de rotation soit en tapant un nombre en degrés, soit en cliquant — l'angle est calculé à partir de la direction entre le point de base et la position du clic.

## Deux façons de démarrer

**Pré-sélectionner, puis faire pivoter** — sélectionnez d'abord les entités, puis activez :

1. Sélectionnez une ou plusieurs entités sur le canevas.
2. Tapez `rotate` dans le terminal ou cliquez sur le bouton **Rotate** de la barre d'outils.
3. **Cliquez sur le point de base** — le centre de rotation. Ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
4. **Tapez un angle et appuyez sur Entrée**, ou **cliquez** pour définir l'angle depuis la direction du curseur.

**Activer, puis sélectionner** — démarrez la commande sans rien de sélectionné :

1. Tapez `rotate` ou cliquez sur le bouton de la barre d'outils.
2. **Sélectionnez les objets** — cliquez pour basculer, ou faites glisser pour sélectionner par zone.
3. Appuyez sur **Entrée** ou **Espace** pour confirmer la sélection.
4. **Cliquez sur le point de base** (la saisie de coordonnées est disponible), puis définissez l'angle.

```
  Avant :            Après (rotation de 90° autour de ●) :
                        ╔══╗
  ●  [entité]    →   ● ║    ║
                        ╚══╝
```

Un aperçu fantôme en direct des entités pivotées suit l'angle du curseur une fois le point de base défini.

## Définir l'angle

**Angle saisi** — tapez un nombre (en degrés) à n'importe quel moment après que le point de base est placé. L'aperçu se cale sur l'angle saisi pendant que vous continuez à ajuster avant d'appuyer sur Entrée.

**Angle par clic** — si aucune valeur n'est saisie, cliquer définit l'angle égal à `atan2(curseurY − baseY, curseurX − baseX)` — la direction du point de base vers le clic, en degrés.

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Ajouter un chiffre à la valeur d'angle |
| `-` | Angle négatif (premier caractère uniquement) |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Appliquer la rotation à l'angle saisi |

## Direction de l'angle

Les angles suivent la **convention DXF** :

- Les valeurs **positives** font pivoter dans le sens **antihoraire** dans les coordonnées de dessin (Y vers le haut).
- Sur l'écran, où l'axe Y est inversé (Y vers le bas), les angles positifs apparaissent dans le **sens horaire**.

Valeurs courantes : `90` = quart de tour, `180` = demi-tour, `-90` = quart de tour dans l'autre sens.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Entrée` / `Espace` | Confirmer la sélection |
| `0`–`9`, `.`, `-` | Démarrer la saisie de coordonnée X (phase point de base), ou valeur d'angle (phase angle) |
| `,` | Verrouiller X et passer à la saisie Y (phase point de base) |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée ou appliquer la rotation |
| `Échap` | Annuler et réinitialiser |

## Sélection pendant la commande

| Méthode | Comportement |
|---------|-------------|
| **Clic** | Bascule l'entité sous le curseur |
| **Glisser à droite** (strict) | Ajoute les entités entièrement à l'intérieur du cadre |
| **Glisser à gauche** (croisement) | Ajoute les entités qui intersectent le cadre |
| **Entrée** / **Espace** | Confirme la sélection |

## Entités supportées

Rotate fonctionne sur tous les types d'entités. La géométrie de chaque entité est pivotée autour du point de base — par exemple, un Circle déplace son centre tandis que le rayon reste le même ; un Arc déplace son centre et décale ses angles de départ et de fin du montant de la rotation ; une entité Text déplace son point d'ancrage et ajoute l'angle à sa propriété Rotation Degree.
