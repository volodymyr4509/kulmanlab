---
sidebar_position: 3
title: Commande Area — Mesurer l'Aire et le Périmètre d'un Polygone dans KulmanLab CAD
description: La commande Area mesure l'aire délimitée et le périmètre d'un polygone défini par 3 points sélectionnés ou plus, à l'aide de la formule du lacet. Prend en charge la saisie directionnelle avec verrouillage d'angle et un surlignage persistant du résultat sur le canevas.
keywords: [mesurer aire CAO, commande area, calcul aire polygone, mesure de périmètre, formule du lacet, mesure CAO kulmanlab]
---

# Area

La commande `area` mesure l'aire délimitée et le périmètre d'un polygone défini par trois points sélectionnés ou plus, et affiche les deux résultats dans le terminal avec 4 décimales. C'est la troisième commande de mesure, aux côtés de [Distance](../distance/) (longueur en ligne droite) et [Angle](../angle/) (angle intérieur à un sommet).

## Anatomie d'une mesure d'aire

```
  ● premier point
   \
    \
     ● deuxième point
      \
       \             (pointillé) aperçu de l'arête de fermeture
        ●───────────────┐
      troisième point   │  (pointillé) aperçu de la prochaine arête vers le curseur
                        ✕ curseur  →  terminal : "Area: 12.3456  Perimeter: 45.6789"
```

- **Sommets** — chaque point cliqué (ou saisi) devient un sommet du polygone ; les arêtes validées sont tracées en trait plein et l'intérieur est rempli d'un surlignage translucide.
- **Arêtes d'aperçu** — des lignes pointillées montrent l'arête en attente du dernier sommet vers le curseur, ainsi que l'arête de fermeture du curseur vers le premier sommet.
- **Arête de fermeture** — vous ne recliquez jamais sur le premier point ; appuyer sur Entrée ferme le polygone automatiquement.

## Mesurer une aire

1. Tapez `area` dans le terminal ou cliquez sur le bouton **Area** de la barre d'outils (rangée du bas du panneau Measure).
2. **Cliquez sur le premier point**, ou tapez `X,Y` et appuyez sur **Entrée** pour une coordonnée exacte.
3. **Cliquez sur chaque sommet supplémentaire** dans l'ordre autour de la forme. La saisie de coordonnées fonctionne à chaque étape.
4. Une fois au moins **3 points** placés, appuyez sur **Entrée** (sans saisie de coordonnée ou de distance en attente) pour fermer le polygone et calculer le résultat.
5. Le terminal affiche `Area: <valeur>  Perimeter: <valeur>`, et le polygone fermé — remplissage, contour et poignées de sommet — reste surligné sur le canevas.
6. **Cliquez n'importe où, appuyez sur n'importe quelle touche, ou appuyez sur `Échap`** pour masquer le résultat et terminer la commande.

## Verrouillage d'angle et distance exacte

Une fois le premier sommet placé, se déplacer vers l'un des incréments de suivi d'angle configurés (10°, 15°, 20°, 30°, 45° ou 90°, réglables via le menu déroulant de la barre d'outils) verrouille la prochaine arête sur cette direction :

- L'aperçu de l'arête s'aligne sur la direction verrouillée, et un indicateur de suivi d'angle s'affiche au sommet d'ancrage.
- Tapez une longueur et appuyez sur **Entrée** pour placer le prochain sommet exactement à cette distance le long de la direction verrouillée.
- Cliquer pendant le verrouillage (sans longueur saisie) place le sommet à la projection du curseur sur la direction verrouillée.

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Ajouter à la valeur de longueur de l'arête |
| `-` | Longueur négative (premier caractère uniquement) |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Placer le prochain sommet à la longueur saisie |

## Fermer le polygone

- Entrée ne ferme la forme qu'une fois **3 sommets ou plus** placés — en dessous, cela n'a aucun effet.
- L'arête du dernier sommet vers le premier est ajoutée automatiquement et comptée à la fois dans l'aire et le périmètre.
- Les points peuvent être placés dans n'importe quel ordre (horaire ou antihoraire) — le résultat est identique.

## Area vs Distance vs Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| Ce qui est mesuré | Aire délimitée et périmètre d'un polygone | Longueur en ligne droite | Angle intérieur à un sommet |
| Nombre de clics | 3 ou plus, fermé avec Entrée | 2 | 3 |
| Format du résultat | `12.3456  Perimeter: 45.6789` | `12.3456` (unités) | `45.0000°` |
| Aperçu sur le canevas | Polygone rempli avec arête de fermeture pointillée | Ligne du premier point au curseur | Deux lignes du sommet au curseur |
| Après le résultat | Se masque avec n'importe quelle saisie, puis la commande se termine | Un clic enchaîne une nouvelle mesure | Un clic enchaîne une nouvelle mesure |
| Idéal pour | Régions délimitées, surface d'une pièce ou d'un panneau | Longueur d'un espace ou segment | Angle d'ouverture entre deux éléments |

## Saisie de coordonnées

Au lieu de cliquer, tapez une position exacte pour n'importe quel sommet :

1. Tapez la valeur X.
2. Appuyez sur `,` — le terminal affiche `[X], [Y{curseur}]`.
3. Tapez la valeur Y.
4. Appuyez sur **Entrée** pour confirmer.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.`, `-` | Commencer la saisie de coordonnée X, ou la saisie de longueur d'arête en verrouillage d'angle |
| `,` | Verrouiller X et passer à la saisie Y |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` | Confirmer une coordonnée ou une longueur saisie ; avec 3 sommets ou plus et aucune saisie en attente, ferme le polygone |
| `Échap` | Pendant la sélection des sommets : abandonne les points et recommence au premier point ; une fois le résultat affiché : le masque et termine la commande |

## Remarques

- L'aire est calculée avec la [formule du lacet](https://fr.wikipedia.org/wiki/Formule_du_lacet) et est toujours indiquée comme une valeur positive, quel que soit l'ordre des clics.
- Les polygones auto-intersectants (arêtes qui se croisent) produisent tout de même un résultat numérique, mais la valeur peut ne pas correspondre à la région visuellement délimitée — évitez les croisements pour une aire significative.
- Les résultats sont affichés uniquement dans le **terminal et comme surlignage temporaire sur le canevas** — rien n'est ajouté au dessin de façon permanente.
- Contrairement à Distance et Angle, Area n'enchaîne **pas** automatiquement une nouvelle mesure — une fois le résultat masqué, relancez `area` pour mesurer un autre polygone.
- La précision est toujours de 4 décimales pour l'aire et le périmètre, dans les mêmes unités que les coordonnées du dessin (sans conversion d'unités).
