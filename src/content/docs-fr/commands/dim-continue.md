---
sidebar_position: 15
title: Commande Dimension Continue — Enchaîner les Cotes depuis une Ligne de Base Existante dans KulmanLab CAD
description: La commande Dimension Continue étend une chaîne de cotes depuis la deuxième ligne d'extension de la dernière cote placée. Elle hérite automatiquement de l'angle, du décalage, de la taille de flèche et de la hauteur de texte de la cote de base. Fonctionne avec les bases linéaires et alignées.
keywords: [cote continue CAO, dimcontinue, enchaîner cotes CAO, cote ligne de base, série cotes continues, kulmanlab]
---

# Dimension Continue

La commande `dimcontinue` enchaîne de nouvelles cotes depuis la **deuxième ligne d'extension** d'une cote existante. Chaque nouveau segment est placé le long du même axe de mesure et au même décalage de ligne de cote que la base. Toutes les propriétés de style — taille de flèche, hauteur de texte, longueurs des lignes d'extension — sont copiées automatiquement depuis la base.

## Aspect des cotes enchaînées

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (base    p3           p4
           ext2 → nouveau début)
```

Chaque rectangle est une entité `DIMENSION` indépendante. Elles partagent la même position de ligne de cote et direction de mesure.

## Démarrer une chaîne

1. Tapez `dimcontinue` dans le terminal ou cliquez sur **Dimension Continue** dans la barre d'outils.
2. **Si une cote vient d'être placée** — la commande la prend automatiquement comme base (aucun clic nécessaire).
3. **Si aucune cote récente n'existe** — cliquez sur n'importe quelle cote existante pour l'utiliser comme base.
4. **Cliquez sur l'origine suivante de la ligne d'extension** — un aperçu montre la nouvelle cote pendant que vous déplacez le curseur. Ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
5. Continuez à cliquer (ou à taper) pour étendre la chaîne. Chaque cote placée devient automatiquement la nouvelle base.
6. Appuyez sur **Entrée**, **Espace** ou **Échap** pour terminer la chaîne.

## Ce qui est hérité de la cote de base

| Propriété | Héritée de la base |
|-----------|-------------------|
| Direction/angle de mesure | Oui — verrouillé pour toute la chaîne |
| Décalage de la ligne de cote | Oui |
| Taille de flèche | Oui |
| Hauteur de texte | Oui |
| Décalage et extension des lignes d'extension | Oui |
| Alignement du texte | Oui |
| Nom du style | Oui |
| Couleur, Calque | Non hérité — utilise le calque courant |

## Verrouillage de la direction de mesure

La direction de mesure de la chaîne est **fixée à l'angle de la cote de base** :

- Base linéaire (H) → toutes les continuations mesurent la distance horizontale (Δ X).
- Base linéaire (V) → toutes les continuations mesurent la distance verticale (Δ Y).
- Base alignée à tout angle → toutes les continuations mesurent le long de ce même angle.

Vous ne pouvez pas changer la direction au milieu d'une chaîne. Démarrez une nouvelle [Dimension Linear](../dim-linear/) ou [Dimension Aligned](../dim-aligned/) pour coter dans une direction différente.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Commencer la saisie de coordonnée X |
| `,` | Verrouiller X et passer à la saisie Y |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer la coordonnée saisie, ou terminer la chaîne si aucune saisie en cours |
| `Espace` / `Échap` | Terminer la chaîne |

## Dimension Continue vs repartir de zéro

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Point de départ | Fixé à ext2 de la dernière base | Cliquez n'importe où |
| Angle | Verrouillé à la base | Libre |
| Décalage | Hérité de la base | Défini par curseur ou saisi |
| Style | Hérité de la base | Style courant |
| Idéal pour | Mesures accumulées le long d'une rangée | Première cote ou changement de direction |

## Modifier les libellés après le placement — simple mode

**Double-cliquez** sur n'importe quelle cote de la chaîne pour ouvrir l'éditeur de texte en **simple** mode. Chaque segment est indépendant et peut être édité individuellement.

| Feature | Comportement |
|---------|-------------|
| Bold / Italic / Font / Height | S'applique à l'**intégralité** du libellé à la fois |
| Formatage par caractère | Non pris en charge |
| `Enter` | Valide la valeur et ferme l'éditeur |
| Multiligne | Non pris en charge |

Voir [Éditeur de texte — simple mode](../interface/text-editor#simple-mode) pour la référence complète.

## DXF — entités DIMENSION

Chaque segment de la chaîne est stocké comme une entité `DIMENSION` indépendante dans le fichier DXF. Ils ne sont pas liés dans le fichier — ils partagent des propriétés parce qu'ils ont été créés depuis la même base, mais chacun peut être édité individuellement après le placement.
