---
title: Kommandoen Tekststil — Administrer tekststile
description: Opret CAD-tekststile med skrifttype, højde, fed, kursiv, linjeafstand, justering og ramme.
keywords: [tekststil CAD, skrifttype CAD, tekstramme, tekstjustering, DXF-stil, kulmanlab]
group: style
order: 6
---

# TextStyle

Kommandoen `Tekststil` åbner stiladministrationen. Opret navngivne stile, rediger deres standardværdier, og vælg den *aktuelle* stil. Ny [Tekst](../text/) kopierer indstillingerne fra den aktuelle stil, når den oprettes.

## Brug af stiladministrationen

Skriv `Tekststil`, eller klik på **Tekststil** i annotationspanelet. ✓ markerer den aktuelle stil; dobbeltklik på en række for at gøre den pågældende stil aktuel.

| Felt | Funktion |
|---|---|
| Omdøb | Brug blyanten ved navnet til at redigere det i listen; `Standard` kan ikke omdøbes. |
| Skrifttype / Højde | Skrifttype og obligatorisk positiv højde. Nul eller negative værdier bliver `1`; styringen accepterer kun værdier over `0`. |
| Fed / Kursiv | Formatering, der slås til og fra uafhængigt |
| Linjeafstand | Afstand mellem tekstlinjerne |
| Vandret justering | Venstre, centreret, højre eller lige margener |
| Ramme | Rektangulær ramme omkring ny tekst |

Forhåndsvisningen bruger samme renderer som lærredet og viser to linjer. Skrifttype, højde, fed, kursiv, ramme, linjeafstand og justering opdateres straks; tallet viser tilpasningszoom. Nye typografier er som standard **venstrejusterede**.

**Ny** kopierer den valgte stil. **Slet** kan ikke fjerne `Standard` eller den aktuelle stil. **Angiv som aktuel** påvirker kun tekst, der oprettes senere; eksisterende tekst ændres ikke. Et tomt, dubleret eller ugyldigt DXF-navn deaktiverer **OK**. Importerede annotative stile skjules, men deres data bevares.

## Lagring og DXF

Navn, skrifttypefiler, fed, kursiv og annotativt flag bevares i DXF-teksttypografier. KulmanLab skriver STYLE-gruppe `40` som `0` (variabel højde) og senest anvendte højde i gruppe `42`; en fast STYLE-højde tilsidesætter derfor ikke måltypografiens egen teksthøjde. Ramme, linjeafstand og vandret justering er KulmanLab-standarder pr. tekst, ikke felter i DXF STYLE-tabellen.
