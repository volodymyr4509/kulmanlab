---
title: ChangePrintArea — Rogner l'export du Gestionnaire d'impression sur un rectangle
description: La commande ChangePrintArea choisit deux coins opposés sur le canevas pour définir la région exportée par le Gestionnaire d'impression. Prend en charge les coordonnées X,Y saisies et l'accrochage, et mémorise la zone séparément pour l'espace objet et pour chaque présentation.
keywords: [zone d'impression CAO, rogner export CAO, commande change print area, recadrage gestionnaire impression, région d'export CAO, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

La commande `ChangePrintArea` définit la région rectangulaire exportée par le [Gestionnaire d'impression](../print-manager/). Elle s'exécute sur le canevas nu, Gestionnaire masqué, et prend deux coins opposés — les deux mêmes clics que [Rectangle](../rectangle/), si bien que les coordonnées saisies et l'accrochage se comportent exactement comme là-bas.

## Sélectionner une zone

1. Tapez `ChangePrintArea` dans le terminal, ou cliquez sur **Change Area** dans la barre latérale du Gestionnaire d'impression. Le Gestionnaire se masque et le canevas devient interactif.
2. **Cliquez sur le premier coin**, ou tapez `X,Y` puis **Entrée** pour une coordonnée exacte.
3. **Cliquez sur le coin opposé**, ou tapez de nouveau `X,Y`.

Le Gestionnaire d'impression se rouvre avec la nouvelle zone dans l'aperçu, qui s'ajuste à son rapport d'aspect exact.

Les coins s'accrochent aux poignées et aux intersections comme tout autre point, ce qui permet de rogner sur la géométrie dessinée plutôt qu'à l'œil. L'ordre des deux coins est indifférent : des coins opposés définissent le même rectangle.

Appuyez sur `Échap` pour annuler. Rien n'est écrit : le Gestionnaire d'impression se rouvre avec la zone qu'il avait déjà.

## Où la zone est mémorisée

La sélection est enregistrée par contexte, pas globalement :

| Contexte | Emplacement |
|---|---|
| Espace objet | Un emplacement partagé |
| Chaque présentation | Son propre emplacement, conservé à part |

Rouvrir le Gestionnaire d'impression sur la même présentation — ou sur l'espace objet — restaure son dernier recadrage au lieu de le réinitialiser, et passer d'une présentation à l'autre laisse la zone de chacune intacte.

Ceci n'est conservé qu'en mémoire. Recharger la page efface toutes les zones enregistrées, et le Gestionnaire d'impression revient aux valeurs par défaut ci-dessous.

## Zone par défaut

Sans rien d'enregistré pour le contexte courant, le Gestionnaire d'impression s'ouvre sur :

| Contexte | Par défaut |
|---|---|
| Espace objet | Le rectangle englobant de toutes les entités — l'étendue sur laquelle [Fit](../fit/) zoome |
| Chaque présentation | La feuille entière |

## Commandes associées

| Commande | Rôle |
|---|---|
| [Print Manager](../print-manager/) | La fenêtre d'export à laquelle cette zone s'applique |
| [Rectangle](../rectangle/) | Le même clic à deux coins, mais dessine une polyligne |
| [Fit](../fit/) | Zoome sur l'étendue utilisée par défaut dans l'espace objet |
