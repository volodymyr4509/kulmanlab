---
title: Suivi de distance — Saisir une longueur exacte depuis un point épinglé
description: Le bouton Dist permet au dernier repère vectoriel de servir d'ancrage depuis lequel le suivi angulaire mesure, afin de saisir une longueur exacte et de placer un point à une distance et un angle précis d'un point existant — y compris le premier point d'une forme.
keywords: [saisie de distance CAO, saisir une longueur exacte CAO, bouton Dist, suivi de distance depuis les repères, suivi polaire CAO, saisie directe de distance, kulmanlab]
group: interface
order: 3
---

# Suivi de distance

**Le suivi de distance** permet de placer un point en saisissant une longueur exacte plutôt qu'en cliquant. Il est commandé par le bouton **Dist** de la barre de contrôle, à côté de [Pins](../vector-pins/) et d'ANGL, et il est **actif par défaut**, le réglage étant conservé d'une session à l'autre.

Ce qu'il apporte est limité mais utile : il laisse le **dernier repère vectoriel posé** servir d'ancrage depuis lequel le suivi angulaire mesure. Sans lui, une commande ne peut mesurer qu'à partir d'un point qu'elle a déjà recueilli elle-même — ce qui veut dire que le *premier* point d'une forme n'a rien depuis quoi mesurer.

## Les trois boutons travaillent ensemble

Le suivi de distance ne se suffit pas à lui-même. Deux autres boutons doivent être dans le bon état avant de pouvoir saisir une longueur :

| Bouton | Rôle |
|--------|------|
| **Pins** | Fournit le point de référence. Survolez un point d'accrochage pendant 500 ms pour l'épingler — voir [Vector Pins](../vector-pins/). |
| **ANGL** | Fournit l'angle. Le suivi de distance ne devient disponible qu'une fois le curseur verrouillé en angle : ANGL doit donc être réglé sur un pas (10°, 20°, 30°, 45°, 90°) et non sur Off. |
| **Dist** | Autorise l'utilisation du repère comme ancrage, et non seulement du point propre à la commande. |

Avec Pins et Dist activés mais ANGL sur **Off**, rien ne se produira : il n'y a aucune direction verrouillée le long de laquelle mesurer une longueur.

## Comment Pins et Dist sont couplés

Le suivi de distance n'a aucun sens si les repères sont désactivés, aussi les deux boutons restent-ils accordés :

- **Activer Pins** active aussi **Dist**.
- **Désactiver Pins** désactive aussi **Dist**.
- **Activer Dist** active **Pins** si ce n'était pas déjà le cas.
- **Désactiver Dist** laisse **Pins activé**.

Dist ne peut donc jamais être actif quand Pins ne l'est pas, mais vous pouvez conserver le suivi par repères pour l'alignement tout en coupant le suivi de distance — pratique si vous voulez des lignes de référence sans que le curseur se verrouille sur un repère alors que vous visiez votre propre dernier point.

## Placer un point à une distance exacte

1. Activez **Pins** et **Dist**, et réglez **ANGL** sur un pas angulaire.
2. Lancez une commande qui demande un point — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/), etc.
3. **Épinglez un point de référence** : survolez un point d'accrochage existant jusqu'à ce que le marqueur devienne un carré plein.
4. Éloignez le curseur du repère, à peu près dans l'angle voulu. Lorsqu'il approche l'un des pas d'ANGL, la direction se **verrouille** — un indicateur de suivi apparaît depuis le repère.
5. **Saisissez la longueur** et appuyez sur **Enter** ou **Espace**. Le point est placé exactement à cette distance du repère, le long de l'angle verrouillé.

L'invite du terminal indique quand vous pouvez saisir. En position verrouillée elle affiche :

```
pick start point or enter length: [ ]
```

et la valeur saisie apparaît entre les crochets.

## Pourquoi le premier point compte

C'est le cas qui serait autrement impossible. Supposons que vous vouliez démarrer une ligne exactement 250 unités à droite d'un angle existant :

1. Lancez [Line](../../commands/line/).
2. Épinglez l'angle existant.
3. Déplacez-vous vers la droite jusqu'à ce que la direction se verrouille à 0°.
4. Saisissez `250`, appuyez sur **Enter**.

La ligne démarre maintenant à 250 unités de l'angle, sans géométrie de construction ni calcul. Sans Dist, la commande Line n'a encore recueilli aucun point : il n'y a donc rien *depuis quoi* mesurer une longueur saisie — vous ne pourriez que cliquer approximativement, ou tracer une ligne de construction et l'effacer ensuite.

Pour le **deuxième point et les suivants**, la commande dispose déjà de son propre ancrage (le point précédent), et c'est lui qui prime. Le repère n'est consulté comme solution de repli que si votre propre ancrage n'est pas verrouillé : épingler quelque chose ne détourne donc pas un verrouillage que vous avez déjà.

## La saisie fige le verrouillage

Dès que vous commencez à taper des chiffres, l'ancrage cesse de changer. Le point verrouillé au moment de la première frappe reste l'ancrage jusqu'à validation ou effacement du champ — bouger la souris en cours de saisie ne basculera pas silencieusement la mesure vers un autre repère ou vers le point propre à la commande.

## Référence clavier

| Touche | Action |
|--------|--------|
| `0`–`9`, `.` | Ajouter à la longueur |
| `-` | Longueur négative — inverse le sens le long de l'angle verrouillé (premier caractère uniquement) |
| `Backspace` | Effacer le dernier caractère |
| `Enter` / `Espace` | Placer le point à la longueur saisie |
| `Échap` | Annuler la commande ; le verrouillage et la valeur saisie sont effacés |

Saisir une longueur reste facultatif. Avec la direction verrouillée, vous pouvez toujours cliquer, et le point est projeté sur l'angle verrouillé.

## Où cela fonctionne

Le suivi de distance est disponible dans toutes les commandes qui demandent de choisir des points :

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) et [ViewportCopy](../../commands/viewport-copy/).

## Voir aussi

- [Vector Pins](../vector-pins/) — épingler des points et suivre leurs lignes de référence
- [Grid & Snap](../grid-snap/) — les autres aides à la précision de la barre de contrôle
- [Distance](../../commands/distance/) — mesurer une distance existante plutôt que d'en saisir une nouvelle
