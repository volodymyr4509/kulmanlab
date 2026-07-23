---
title: Gitter & Snap — Justér Tegninger til et Regelmæssigt Gitter
description: Gitter- og Snap-knapperne i KulmanLab CAD lægger et referencegitter over lærredet og låser markørbevægelsen til gitterpunkter. Gitterafstanden tilpasser sig automatisk til det aktuelle zoomniveau, så den altid viser runde modelværdier.
keywords: [CAD-gitter, snap til gitter, gitterafstand, tegnehjælpemidler, kulmanlab, gitterprikker, ortogonal snap]
group: interface
order: 1
---

# Gitter & Snap

To knapper i kontrollinjen lader dig lægge et referencegitter over lærredet og låse markøren til dets skæringspunkter mens du tegner.

| Knap | Hvad den gør |
|--------|-------------|
| **Grid** | Viser et visuelt prik- eller linjegitter på lærredet |
| **Snap** | Låser markøren til nærmeste gitterpunkt, når intet geometrisk snap er tættere |

De to knapper er uafhængige af hinanden — du kan vise gitteret uden at snappe, snappe uden at vise gitteret, eller bruge begge samtidig.

## Aktivere gitter og snap

Klik på **Grid** eller **Snap** i værktøjslinjen. Aktiv tilstand markeres visuelt. Indstillingerne gemmes på tværs af sessioner.

Når **Snap** er aktiveret, skifter gitteret automatisk visning fra linjer til **prikker** — prikkerne markerer de eksakte punkter markøren vil fæstne sig til.

## Adaptiv gitterafstand

Gitterafstanden justeres automatisk, når du zoomer, så gitterlinjerne altid har en behagelig afstand på skærmen (~40 px). Trinnet er altid et "pænt" tal — et multiplum af 1, 2 eller 5 ved en hvilken som helst tierpotens:

| Eksempel zoom / modelskala | Gittertrin |
|---------------------------|-----------|
| Zoomet ud (stort område) | 100, 500, 1000 … |
| Middel zoom | 10, 20, 50 … |
| Zoomet ind (finere detalje) | 1, 2, 5 … |
| Meget tæt | 0.1, 0.2, 0.5 … |

Det betyder, at hvert snap-punkt lander på en rund koordinat i modelrummet — der akkumuleres ingen flydende-decimal-afvigelser.

## Snap-prioritet

**Endepunkt- og skæringspunkt-snap har altid prioritet over gitteret.** Markøren snapper kun til et gitterpunkt, når den ikke er i nærheden af en geometrisk snap-kandidat (endepunkt, midtpunkt, centrum eller skæringspunkt).

Det betyder, at du kan tegne med snap-til-gitter aktiveret og stadig snappe præcist til eksisterende geometri, når markøren passerer tæt nok på den. Gitteret er en reserveløsning, ikke en overstyring.

## Layout-tilstand

- **Modelrum** — prikker eller linjer fylder hele det synlige lærredsområde.
- **Layout (papir)-rum** — prikker beskæres til papirrektanglet og strækker sig ikke udenfor det.
- **Inde i en viewport** — gitteret følger modelkoordinatsystemet i viewportens skala, så prikkerne stemmer overens med de samme modelenheder uanset viewportens forstørrelse.

## Typisk arbejdsgang

1. Slå **Grid** og **Snap** til, før du starter en tegning der kræver regelmæssig afstand.
2. Zoom til det niveau, hvor gittertrinnet matcher det ønskede interval (f.eks. zoom til prikkerne er 10 enheder fra hinanden).
3. Tegn — markøren snapper automatisk til gitterpunkter. Eksisterende geometri snapper stadig normalt, når du er tæt på den.
4. Slå **Snap** fra, når du har brug for fri markørbevægelse eller kun vil snappe til geometri.
