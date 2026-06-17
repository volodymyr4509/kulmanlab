---
sidebar_position: 5
title: Commande print — Exporter le dessin en PNG, JPEG, WebP ou PDF dans KulmanLab CAD
description: La commande print ouvre le Gestionnaire d'impression — une fenêtre d'export dédiée avec aperçu en temps réel, sélecteur de format, option niveaux de gris et sélection de zone optionnelle. Export jusqu'à 2000×2000 px. Prend en charge PNG, JPEG, WebP et PDF.
keywords: [exporter PNG CAO, exporter PDF CAO, imprimer dessin CAO, gestionnaire impression, export niveaux de gris, export kulmanlab]
---

# Print

La commande `print` ouvre le **Gestionnaire d'impression** — une fenêtre d'export dédiée avec un canevas d'aperçu en temps réel, un sélecteur de format (PNG / JPEG / WebP / PDF), une option niveaux de gris et un recadrage de zone optionnel. Rien n'est envoyé à une imprimante physique ; le résultat est téléchargé comme fichier.

## Ouvrir le Gestionnaire d'impression

Cliquez sur le bouton **Print** dans la barre d'outils ou tapez `print` dans le terminal. Le Gestionnaire d'impression s'ouvre immédiatement en affichant un aperçu du viewport actuel.

## Disposition du Gestionnaire d'impression

La fenêtre a deux panneaux :
- **Barre latérale gauche** — tous les contrôles d'export.
- **Panneau droit** — canevas d'aperçu en temps réel qui se met à jour lors des changements de paramètres.

### Contrôles de la barre latérale

| Contrôle | Description |
|----------|-------------|
| **Change Area** | Recadrer à un rectangle personnalisé sur le canevas (voir ci-dessous) |
| Bouton **Monochrome** | Convertit toutes les lignes en couleur vers le noir — activé par défaut pour un rendu d'impression propre |
| Liste déroulante **Format** | PNG, JPEG, WebP ou PDF |
| Bouton **Export** | Génère et télécharge le fichier |

## Sélectionner une zone d'export personnalisée

Par défaut, l'aperçu montre exactement ce qui était visible sur le canevas quand vous avez ouvert le Gestionnaire d'impression. Pour exporter une région spécifique :

1. Cliquez sur **Change Area** — le Gestionnaire d'impression se cache et le canevas devient interactif.
2. **Cliquez sur le premier coin** du rectangle d'export.
3. **Cliquez sur le coin opposé** — le Gestionnaire d'impression se rouvre avec la zone sélectionnée dans l'aperçu.

Appuyez sur `Échap` pendant la sélection de zone pour annuler et restaurer la zone précédente.

Le canevas d'aperçu se redimensionne dynamiquement pour correspondre au **rapport d'aspect exact** de la zone sélectionnée, de sorte que l'aperçu est précis au pixel près.

## Formats d'export

| Format | Idéal pour | Notes |
|--------|-----------|-------|
| **PNG** | Sans perte, lignes nettes | Fond blanc, sans transparence |
| **JPEG** | Fichier plus petit pour partager | Qualité 95%, légère compression |
| **WebP** | Fichier plus petit pour le web | Même qualité 95%, meilleure compression que JPEG |
| **PDF** | Documents prêts à imprimer | Image intégrée à 150 DPI dans un conteneur PDF |

Le fichier exporté est nommé `kulman-<horodatage>.<ext>` et se télécharge automatiquement.

## Résolution et fond d'export

- Résolution maximale : **2000 × 2000 pixels**, mise à l'échelle proportionnellement à la zone sélectionnée.
- Le fond est toujours **blanc**.
- Les calques marqués comme **non traçables** sont exclus de l'export.

## Référence clavier

| Touche | Action |
|--------|--------|
| `Échap` (pendant la sélection de zone) | Annuler la sélection de zone, restaurer la zone précédente |
| `Échap` (dans le Gestionnaire d'impression) | Fermer le Gestionnaire d'impression |
