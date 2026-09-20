---
title: Commande Fillet — Arrondir un angle avec un arc tangent
description: La commande Fillet arrondit un angle entre deux segments Line, Arc ou Polyline avec un arc tangent de rayon spécifié. Arrondir le propre coin d'une polyligne insère l'arc directement dedans ; arrondir à travers une polyligne ouverte fusionne les deux côtés en une nouvelle polyligne.
keywords: [commande fillet CAO, arrondir angle CAO, arc de congé, arc tangent, congé polyligne, congé arc, kulmanlab]
group: edit
order: 11
---

# Fillet

La commande `Raccord` arrondit un angle entre deux segments [Line](../line/), [Arc](../arc/) ou [Polyline](../polyline/) en insérant un arc tangent d'un rayon donné, en raccordant (ou en fusionnant) les entités choisies jusqu'à ce point.

Fillet fonctionne avec les entités **Line, Arc et Polyline** — y compris les segments droits ou d'arc d'une polyligne.

## Utiliser fillet

1. Tapez `Raccord` dans le terminal ou cliquez sur le bouton **Fillet** de la barre d'outils.
2. **Tapez le rayon du congé** et appuyez sur **Entrée**.
3. **Cliquez sur la première ligne, arc ou segment de polyligne** — la portion sur laquelle vous cliquez détermine quel côté de l'intersection est conservé.
4. **Survolez la deuxième entité** — un aperçu d'arc en pointillés montre le congé résultant. Déplacez le curseur vers le côté que vous souhaitez conserver.
5. **Cliquez** pour appliquer.

```
  Avant :                     Après le congé (rayon r) :

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Sélection du côté pour les entités qui se croisent

Lorsque deux entités se croisent, le congé est appliqué sur l'angle défini par les positions de clic — la portion de chaque entité du **même côté que le curseur** est conservée.

- Cliquez près d'une extrémité de la première entité pour sélectionner cette moitié.
- Déplacez le curseur vers la moitié souhaitée de la deuxième entité — l'aperçu en pointillés se met à jour en temps réel.

## Ce que la commande crée

Le résultat dépend de ce que vous avez sélectionné :

- **Deux Lines/Arcs indépendants**, ou toute paire n'impliquant pas de polyligne ouverte : les deux sont raccordés jusqu'aux points de tangence **T1**/**T2**, et une nouvelle entité Arc est insérée entre eux.
- **Deux segments d'une même polyligne partageant un sommet de coin** : aucune nouvelle entité — le congé devient partie intégrante de la polyligne elle-même. Le sommet du coin est remplacé par les deux points de tangence, et l'arc entre eux est stocké comme le bulge de cette arête, exactement comme un coin de polyligne arrondi fait l'aller-retour via DXF.
- **Tout le reste impliquant une polyligne ouverte** — deux polylignes ouvertes différentes, ou une polyligne ouverte et une Line/Arc indépendante : les deux sont fusionnées en une **seule nouvelle polyligne**, chaque côté étant conservé jusqu'à son point de tangence et relié par l'arc de congé comme un segment de bulge supplémentaire, remplaçant les entités d'origine.

L'arc inséré ou prolongé hérite des paramètres actuels d'épaisseur de trait, de couleur, de calque et de type de ligne (ou de ceux de la polyligne elle-même, lorsqu'il s'y intègre).

## Angles sans véritable coin à arrondir

Si les deux segments sélectionnés se rejoignent déjà tangentiellement en un sommet commun — un coin de polyligne droit, ou une ligne se prolongeant en douceur dans un segment d'arc à continuation tangentielle — il n'y a pas de véritable coin qu'un cercle puisse arrondir. Fillet détecte ce cas et refuse avec `cannot fillet: no tangent circle fits there` plutôt que de tracer une boucle indésirable.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Ajouter un chiffre à la valeur du rayon |
| `Retour arrière` | Supprimer le dernier caractère saisi |
| `Entrée` / `Espace` | Confirmer le rayon saisi et passer à la sélection d'entité |
| `Échap` | Annuler et réinitialiser |

## Entités supportées

| Entité | Supportée |
|--------|-----------|
| Line | Oui |
| Arc | Oui |
| Polyline (segment droit ou arc) | Oui |
| Circle, Ellipse | Non |
| Text, Spline, Dimension, Leader | Non |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Type d'angle | Arc arrondi | Coupe droite |
| Entrée | Un rayon | Deux distances (d1, d2) |
| Entité insérée | Arc | Line |
| Entités supportées | Lines, Arcs et Polylines (segments droits ou d'arc) | Lines et Polylines (segments droits uniquement) |
