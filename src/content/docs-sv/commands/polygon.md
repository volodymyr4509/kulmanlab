---
title: "Polygon-kommando — rita regelbundna månghörningar från centrum eller kant i KulmanLab CAD"
description: "Polygon-kommandot ritar en regelbunden månghörning med 3 till 1024 sidor utifrån centrum och en radie, eller utifrån en kant. Resultatet är en sluten LWPOLYLINE, så alla redigeringskommandon för polylinjer gäller."
keywords: ["CAD polygon-kommando", "rita regelbunden månghörning CAD", "sexhörning åttahörning femhörning CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

Kommandot `polygon` ritar en regelbunden månghörning — alla sidor och vinklar lika — med 3 till 1024 sidor. Skriv `polygon` i terminalen. Resultatet är en **sluten `LWPOLYLINE`**, så när den är placerad beter den sig som vilken annan [Polyline](../polyline/) som helst och alla polylinjeredigeringar gäller.

## Rita en polygon

1. Skriv `polygon` i terminalen och ange **antal sidor** — ett heltal från 3 till 1024 — och tryck **Enter** eller **Space**. Uppmaningen är förifylld med senast använda antal (4 första gången); börja skriva för att ersätta det. Allt annat avvisas och blir kvar i uppmaningen för rättning.
2. **Klicka på centrum**, eller skriv `X,Y` och tryck **Enter** för en exakt koordinat. Tryck `E` först för att i stället utgå från en kant (se nedan).
3. **Klicka på radien** — polygonen förhandsvisas live — eller skriv radien och tryck **Enter** eller **Space**.
4. Polygonen placeras och kommandot avslutas.

## Alternativ

| Alternativ | Tangent | Verkan |
|---|---|---|
| Edge | `E` | Första punkten blir ena änden av en kant i stället för centrum. Välj den andra änden; övriga hörn byggs moturs, till vänster om kanten från första till andra änden. Tryck `E` igen för att gå tillbaka till centrum. |
| Inside | `I` | På som standard och behålls från polygon till polygon. På: hörnen ligger på cirkeln med angiven radie. Av: polygonen ligger utanför cirkeln, med mitten av varje kant på den. |

- Ett klick placerar ett hörn (Inside på) eller mitten av en kant (Inside av) exakt där markören är, så markören bestämmer också riktningen.
- En skriven radie har inget att sikta längs, så polygonen läggs med sin lägsta kant vågrät — om inte vinkellås är på, då följer den den låsta vinkeln.
- Varje alternativ erbjuds i sitt eget steg och kan växlas även medan ett tal skrivs.

## Tangentbordsöversikt

| Tangent | Åtgärd |
|---|---|
| `0`–`9`, `.` | Skriv antal sidor, radie, koordinat eller längd |
| `E` | Slå Edge på eller av (steget för första punkten) |
| `I` | Slå Inside på eller av (radiesteget) |
| `Enter` / `Space` | Bekräfta antal sidor eller radie |
| `Escape` | Avbryt |

## DXF — LWPOLYLINE-entitet

En polygon sparas som en sluten `LWPOLYLINE` med en nod per hörn; DXF har ingen egen polygontyp. Alla egenskaper — nodkoordinater, färg, lager, linjetyp, linjetypsskala och tjocklek — följer med utan förlust, och varje DXF-visare läser den som en sluten polylinje.
