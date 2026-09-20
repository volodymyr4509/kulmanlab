---
title: Gestionnaire d'impression — Exporter le dessin en PNG, JPEG, WebP ou PDF
description: La commande PrintManager ouvre le Gestionnaire d'impression — une fenêtre d'export dédiée avec un aperçu en temps réel qui correspond exactement au fichier exporté, un réglage Qualité/DPI, un sélecteur de format, un style d'impression Default/Monochrome/Blueprint et une sélection de zone optionnelle. Prend en charge PNG, JPEG, WebP et PDF.
keywords: [exporter PNG CAO, exporter PDF CAO, imprimer dessin CAO, gestionnaire impression, qualité d'impression DPI, export niveaux de gris, style d'impression blueprint, export kulmanlab]
group: file
order: 4
---

# Gestionnaire d'impression

La commande `GestionnaireImpression` ouvre le **Gestionnaire d'impression** — une fenêtre d'export dédiée avec un canevas d'aperçu en temps réel, un sélecteur de format (PNG / JPEG / WebP / PDF), un sélecteur de Style (Default / Monochrome / Blueprint) et un recadrage de zone optionnel. Rien n'est envoyé à une imprimante physique ; le résultat est téléchargé comme fichier.

## Ouvrir le Gestionnaire d'impression

Cliquez sur le bouton **Print** dans la barre d'outils ou tapez `GestionnaireImpression` dans le terminal. Le Gestionnaire d'impression s'ouvre immédiatement en affichant un aperçu du viewport actuel.

L'aperçu est rendu exactement via le même chemin de code, à exactement la même résolution en pixels, que le fichier que vous finirez par exporter — changer la Qualité, le Style ou la zone d'export re-rend immédiatement l'aperçu, donc ce que vous voyez est ce qui est téléchargé, pas une approximation.

## Disposition du Gestionnaire d'impression

La fenêtre a deux panneaux :
- **Barre latérale gauche** — tous les contrôles d'export.
- **Panneau droit** — canevas d'aperçu en temps réel qui se met à jour lors des changements de paramètres.

### Contrôles de la barre latérale

| Contrôle | Description |
|----------|-------------|
| **Change Area** | Recadrer à un rectangle personnalisé sur le canevas (voir ci-dessous) — recadre réellement l'image exportée, y compris sur un layout avec un espace papier, pas seulement l'aperçu à l'écran |
| Liste déroulante **Quality** | Définit la résolution d'export (voir ci-dessous) |
| Liste déroulante **Style** | Default, Monochrome ou Blueprint — voir *Styles d'impression* ci-dessous. Monochrome par défaut pour un rendu d'impression propre |
| Liste déroulante **Format** | PNG, JPEG, WebP ou PDF |
| Bouton **Export** | Génère et télécharge le fichier |

## Styles d'impression

La liste déroulante **Style** contrôle à la fois la couleur d'encre avec laquelle les entités sont dessinées et le fond de page :

| Style | Encre | Fond de page |
|-------|-------|--------------|
| **Default** | La couleur propre de chaque entité | Blanc |
| **Monochrome** *(par défaut)* | Noir uni, quelle que soit la couleur d'entité/de calque | Blanc |
| **Blueprint** | Blanc uni, quelle que soit la couleur d'entité/de calque | Bleu de Prusse profond, avec une grille de référence discrète |

Blueprint reproduit l'aspect d'une impression architecturale cyanotype traditionnelle — des tracés blancs sur une feuille bleu foncé. Sa grille de référence est dimensionnée par rapport à la page plutôt qu'au DPI, elle paraît donc aussi dense à n'importe quel réglage de Qualité au lieu de se densifier avec la résolution.

## Qualité et résolution

Le menu déroulant **Qualité** définit le DPI auquel l'export est rendu :

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(par défaut)* | 150 |
| Presentation | 300 |
| Max | 600 |

Une Qualité plus élevée produit une image plus grande et plus nette à la même taille physique — les épaisseurs de trait s'adaptent avec la résolution, de sorte qu'un trait garde la même épaisseur *physique* sur papier à tout réglage de Qualité, au lieu de paraître plus fin quand le DPI augmente. La seule exception est un trait fin (épaisseur `0`), conventionnellement défini comme « le trait le plus fin que le périphérique de sortie puisse tracer » — il reste à une largeur fixe de 1 pixel à tout niveau de Qualité, exactement comme il se comporte sur le canevas en direct.

Changer la Qualité re-rend immédiatement l'aperçu, afin que vous voyiez la netteté réelle (et le compromis de taille de fichier) avant d'exporter.

## Sélectionner une zone d'export personnalisée

Par défaut, l'aperçu montre le rectangle englobant de toutes les entités de l'espace objet — l'étendue sur laquelle [Fit](../fit/) zoome — ou la feuille entière sur une présentation. Pour exporter une région précise :

1. Cliquez sur **Change Area** — le Gestionnaire d'impression se cache et le canevas devient interactif.
2. **Cliquez sur le premier coin** du rectangle d'export.
3. **Cliquez sur le coin opposé** — le Gestionnaire d'impression se rouvre avec la zone sélectionnée dans l'aperçu.

Appuyez sur `Échap` pendant la sélection de zone pour annuler et restaurer la zone précédente.

Le canevas d'aperçu se redimensionne dynamiquement pour correspondre au **rapport d'aspect exact** de la zone sélectionnée, de sorte que l'aperçu est précis au pixel près.

La zone choisie est mémorisée séparément pour l'espace objet et pour chaque présentation jusqu'au rechargement de la page — voir [ChangePrintArea](../change-print-area/).

## Formats d'export

| Format | Idéal pour | Notes |
|--------|-----------|-------|
| **PNG** | Sans perte, lignes nettes | Fond de page du Style intégré, sans transparence |
| **JPEG** | Fichier plus petit pour partager | Qualité 95%, légère compression |
| **WebP** | Fichier plus petit pour le web | Même qualité 95%, meilleure compression que JPEG |
| **PDF** | Documents prêts à imprimer | Image intégrée dans un conteneur PDF au DPI de la Qualité sélectionnée, dimensionnée pour que la page s'imprime à l'échelle physique réelle |

Le fichier exporté est nommé `kulman-<horodatage>.<ext>` et se télécharge automatiquement.

## Résolution et fond d'export

- **Export de l'espace modèle / viewport** : limité à 2000 × 2000 pixels à la Qualité Normal par défaut (150 DPI), mis à l'échelle proportionnellement à la zone sélectionnée ; la limite évolue aussi avec la Qualité — Draft a une limite plus basse, Presentation et Max une limite plus haute (jusqu'à 8000 × 8000 en Max/600 DPI).
- **Export de layout (espace papier)** : dimensionné directement à partir des dimensions papier du layout au DPI sélectionné — p. ex. une feuille A4 (210 × 297 mm) à Qualité Normal s'exporte à environ 1240 × 1754 px — elle n'est donc pas soumise à la limite de 2000 px du viewport.
- Le fond suit le **Style** d'impression sélectionné — blanc pour Default et Monochrome, bleu de Prusse profond pour Blueprint (voir *Styles d'impression* ci-dessus).
- Les calques marqués comme **non traçables** sont exclus de l'export.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Échap` (pendant la sélection de zone) | Annuler la sélection de zone, restaurer la zone précédente |
| `Échap` (dans le Gestionnaire d'impression) | Fermer le Gestionnaire d'impression |
