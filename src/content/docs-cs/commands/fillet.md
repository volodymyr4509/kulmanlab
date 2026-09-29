---
title: Příkaz Fillet — zaoblení rohu tečným obloukem
description: Příkaz Fillet zaoblí roh mezi dvěma segmenty Line, Arc nebo Polyline tečným obloukem zadaného poloměru. Zaoblení vlastního rohu polyline vloží oblouk přímo do ní; zaoblení mezi otevřenými polyline sloučí obě strany do jedné nové polyline.
keywords: [CAD příkaz fillet, zaoblení rohu CAD, oblouk zaoblení, tečný oblouk, zaoblení polyline, zaoblení oblouku, kulmanlab]
group: edit
order: 11
---

# Fillet

Příkaz `fillet` zaoblí roh mezi dvěma segmenty [Line](../line/), [Arc](../arc/) nebo [Polyline](../polyline/) vložením tečného oblouku zadaného poloměru, přičemž vybrané objekty ořízne (nebo sloučí) až na místo, kde oblouk začíná.

Fillet funguje na objektech **Line, Arc a Polyline** — včetně přímých nebo obloukových segmentů samotné polyline.

## Použití příkazu fillet

1. Napište `fillet` do terminálu nebo klikněte na tlačítko **Fillet** v panelu nástrojů.
2. **Napište poloměr zaoblení** a stiskněte **Enter**.
3. **Klikněte na první úsečku, oblouk nebo segment polyline** — část, na kterou kliknete, určuje, která strana případného průsečíku se ponechá.
4. **Najeďte kurzorem na druhý objekt** — přerušovaný náhled oblouku ukáže výsledné zaoblení. Kurzor přesuňte na stranu, kterou chcete ponechat.
5. **Kliknutím** zaoblení použijete.

```
  Před:                       Po zaoblení (poloměr r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Volba strany u protínajících se objektů

Když se dva objekty kříží, zaoblení se použije na roh určený pozicemi kliknutí — ponechá se část každého objektu na **stejné straně jako kurzor**.

- Kliknutím poblíž jednoho konce prvního objektu vyberete tuto polovinu.
- Kurzor přesuňte na požadovanou polovinu druhého objektu — přerušovaný náhled se aktualizuje živě.

## Co příkaz vytvoří

Výsledek závisí na tom, co jste vybrali:

- **Dvě samostatné Line/Arc**, nebo jakákoli dvojice, která nezahrnuje otevřenou polyline: obě se ořežou zpět k tečným bodům **T1**/**T2** a mezi ně se vloží nový objekt Arc.
- **Dva segmenty téže polyline sdílející rohový vrchol**: žádný nový objekt — zaoblení se stane součástí samotné polyline. Rohový vrchol se nahradí dvěma tečnými body a oblouk mezi nimi se uloží jako vybočení (bulge) dané hrany, přesně tak, jak se zaoblený roh polyline přenáší přes DXF.
- **Cokoli jiného zahrnující otevřenou polyline** — dvě různé otevřené polyline, nebo otevřená polyline a samostatná Line/Arc: obě se sloučí do **jedné nové polyline**, každá strana se ponechá až po svůj tečný bod a spojí se obloukem zaoblení jako dalším segmentem s vybočením, čímž nahradí původní objekty.

Vložený nebo prodloužený oblouk zdědí aktuální nastavení tloušťky čáry, barvy, hladiny a typu čáry (nebo vlastní nastavení polyline, když se do ní vkládá).

## Rohy bez skutečného úhlu k zaoblení

Pokud se dva vybrané segmenty už na společném vrcholu stýkají tečně — přímý roh polyline nebo úsečka hladce přecházející v tečně navazující obloukový segment — není co zaoblovat. Fillet to rozpozná a odmítne s hláškou `cannot fillet: no tangent circle fits there`, místo aby nakreslil zbloudilou smyčku.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.` | Připojí číslici k hodnotě poloměru |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` / `Space` | Potvrdí napsaný poloměr a přejde k výběru objektů |
| `Escape` | Zruší a resetuje |

## Podporované objekty

| Objekt | Podporováno |
|--------|-------------|
| Line | Ano |
| Arc | Ano |
| Polyline (přímý nebo obloukový segment) | Ano |
| Circle, Ellipse | Ne |
| Text, Spline, Dimension, Leader | Ne |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Typ rohu | Zaoblený oblouk | Přímé seříznutí |
| Vstup | Jeden poloměr | Dvě vzdálenosti (d1, d2) |
| Vložený objekt | Arc | Line |
| Podporované objekty | Lines, Arcs a Polylines (přímé nebo obloukové segmenty) | Lines a Polylines (pouze přímé segmenty) |
