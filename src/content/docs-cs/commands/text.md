---
title: Příkaz Text — umísťování popisků MTEXT v KulmanLab CAD
description: Příkaz Text umístí víceřádkový, bohatě formátovaný popisek MTEXT. Klikněte na pozici, pište ve vyskakovacím editoru a stisknutím Escape potvrďte. Dvojitým kliknutím na kterýkoli existující popisek editor znovu otevřete.
keywords: [CAD příkaz text, MTEXT, umístění textového popisku CAD, textová anotace CAD, tučný kurzíva CAD, víceřádkový text CAD, kulmanlab]
group: markup
order: 0
---

# Text

Příkaz `text` umístí víceřádkový textový popisek. Po kliknutí na pozici na plátně se otevře vyskakovací editor v **rozšířeném** režimu — můžete psát obsah, používat tučné, kurzívu, podtržení a přeškrtnutí po jednotlivých znacích, měnit písma a výšky a vkládat zalomení řádků. Stisknutím **Escape** potvrdíte a editor zavřete.

Úplný přehled editoru, včetně porovnání **rozšířeného** a **jednoduchého** režimu, najdete na stránce [Textový editor](../../interface/text-editor/).

## Umístění textového popisku

1. Napište `text` do terminálu nebo klikněte na tlačítko **Text** v panelu nástrojů.
2. **Klikněte na pozici kotvy** na plátně. Nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. Nad novým popiskem se otevře **vyskakovací textový editor**. Napište obsah.
4. Stisknutím **Escape** popisek potvrdíte a editor zavřete.

Nový Text kopíruje písmo, výšku, tučné, kurzívu, řádkování, vodorovné zarovnání a rámeček z aktuálního [TextStyle](../text-style/). Vestavěný styl `Standard` používá výšku **1 jednotky výkresu** a zarovnání Left.

## Úprava existujícího popisku

**Dvojitým kliknutím** na kterýkoli textový popisek na plátně znovu otevřete editor pro tento popisek.

## Zadání souřadnic kotvy

Místo klikání napište přesnou polohu:

1. Napište hodnotu X.
2. Stiskněte `,` — terminál zobrazí `[X], [Y{kurzor}]`.
3. Napište hodnotu Y.
4. Stisknutím **Enter** umístíte kotvu a otevřete editor.

## Přehled kláves

**Fáze kotvy**

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X |
| `,` | Zamkne X a přejde na zadávání Y |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Potvrdí napsanou souřadnici |

**Fáze textového editoru** (úplný přehled viz [Textový editor](../../interface/text-editor/))

| Klávesa | Akce |
|---------|------|
| Jakýkoli tisknutelný znak | Vloží na pozici kurzoru |
| `Backspace` / `Delete` | Smaže sousední znak nebo výběr |
| `Enter` | Vloží zalomení řádku |
| `←` / `→` | Posune kurzor |
| `Home` / `End` | Skočí na začátek / konec pevného řádku |
| `Escape` | Potvrdí a zavře editor |

## Úprava úchyty — přemístění

Vybraný textový popisek nabízí jeden úchyt v kotevním bodě:

| Úchyt | Poloha | Co dělá |
|-------|--------|---------|
| **Kotva** | Vlevo dole u textu | Tažením popisek přemístíte |

## Výběr textu

| Metoda | Chování |
|--------|---------|
| **Klik** | Vybere, pokud kliknutí padne dovnitř otočeného obalového obdélníku textu |
| **Tažení doprava** (přísný) | Všechny čtyři rohy obalového obdélníku musí ležet uvnitř výběrové oblasti |
| **Tažení doleva** (protínající) | Vybere jakýkoli přesah mezi obalovým obdélníkem textu a výběrovou oblastí |

## Podporované editační příkazy

| Příkaz | Co se s textem stane |
|--------|----------------------|
| [Move](../move/) | Přesune kotevní bod |
| [Copy](../copy/) | Vytvoří shodný popisek na nové pozici |
| [Rotate](../rotate/) | Otočí polohu kotvy a přičte úhel k Rotation Degree |
| [Mirror](../mirror/) | Zrcadlí kotevní bod podle osy zrcadlení (textový řetězec se nepřevrací) |
| [Scale](../scale/) | Změní měřítko polohy kotvy a vynásobí výšku činitelem měřítka |
| [Delete](../delete/) | Odstraní popisek |

Text nepodporuje **Offset**, **Trim** ani **Extend**.

## Vlastnosti

Když je textový popisek vybrán, panel vlastností zobrazí:

**Obecné**

| Vlastnost | Výchozí | Význam |
|----------|---------|--------|
| Color | 256 (ByLayer) | Index barvy ACI |
| Layer | `0` | Přiřazení k hladině |

**Geometrie**

| Vlastnost | Význam |
|----------|--------|
| Position X / Position Y | Souřadnice kotevního bodu |
| Height | Základní výška textu v jednotkách výkresu, při vytvoření zkopírovaná z aktuálního TextStyle |
| Rotation Degree | Otočení proti směru hodinových ručiček ve stupních |

**Vlastnosti**

| Vlastnost | Význam |
|----------|--------|
| Content | Textový řetězec (vložené kódy MTEXT zachovány) |
| Attachment Point | Kód zarovnání (1 = vlevo nahoře … 9 = vpravo dole) |
| Horizontal Alignment | Left, Center, Right nebo Justify v rámci referenční šířky |
| Reference Width | Šířka použitá pro zalamování a zarovnání odstavce; `0` znamená žádnou explicitní šířku |
| Line Spacing | Násobitel použitý mezi řádky textu |
| Frame | Nakreslí kolem textu obdélníkový rámeček |

Text nemá vlastnosti Linetype, Linetype Scale ani Thickness.

## DXF — objekt MTEXT

Textové popisky se v souboru DXF ukládají jako objekty **MTEXT**. Tučné a kurzíva používají vložené kódy přepnutí písma (`\f`), podtržení používá `\L`/`\l`, přeškrtnutí používá `\K`/`\k` a přepsání výšky po jednotlivých znacích používá `\H`. Referenční šířka, řádkování, zarovnání odstavce, otočení a uchycení se také přenášejí. Rámeček textu se exportuje s příznakem rámečku MTEXT a měřítkem okraje kompatibilním s AutoCADem.

## Související příkazy

| Příkaz | Co dělá |
|---|---|
| [TextStyle](../text-style/) | Nastavuje výchozí formátování kopírované novým Textem |
| [FontManager](../font-manager/) | Spravuje písma dostupná pro Text a TextStyle |
