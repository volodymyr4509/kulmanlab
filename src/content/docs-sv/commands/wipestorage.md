---
title: Wipe Storage-kommandot — Rensa all webbläsardata i KulmanLab CAD
description: wipestorage-kommandot raderar permanent alla filer, lager, linjetyper och ångrahistorik som sparats i webbläsaren. Kräver att du skriver YES för att bekräfta. Använd när du återställer en skadad eller överfull lokal databas.
keywords: [CAD rensa lagring, rensa webbläsardata CAD, återställ CAD-app, radera lokala filer CAD, kulmanlab wipestorage]
---

# Wipe Storage

`wipestorage`-kommandot raderar permanent **all data som lagras i webbläsaren** för KulmanLab CAD — varje sparad fil, lager- och linjetypstabell samt ångrahistorik. Sidan laddas om automatiskt efteråt.

:::danger Oåterkalleligt
Denna åtgärd kan inte ångras. Alla filer som lagras i webbläsaren raderas. Exportera alla ritningar du vill behålla som `.json`- eller `.dxf`-filer innan du kör detta kommando.
:::

## När du ska använda det

- Webbläsarens lagring är skadad och appen misslyckas med att ladda eller spara filer.
- Du vill återställa appen fullständigt till ett rent tillstånd.
- Du byter webbläsare eller enhet och behöver inte längre den lokala kopian.

## Så här kör du det

1. Skriv `wipestorage` i terminalen och tryck på **Enter**.
2. Terminalen frågar: *Wipe all browser local storage? Type YES to confirm*
3. Skriv `YES` (valfri versalisering) och tryck på **Enter**.

Appen raderar databasen och laddar om sidan. Om du skriver något annat än `YES` och trycker på **Enter**, eller trycker på **Escape**, avbryts kommandot och ingenting raderas.

## Vad som raderas

| Data | Raderas |
|------|---------|
| Alla filer sparade i webbläsaren | Ja |
| Lager- och linjetypstabeller för varje fil | Ja |
| Ångra-/gör om-historik för varje fil | Ja |

Endast data som lagras lokalt i **denna webbläsare** påverkas. Filer du redan har exporterat som `.json`- eller `.dxf`-filer berörs inte.
