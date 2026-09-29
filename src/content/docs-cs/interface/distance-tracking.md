---
title: Distance Tracking — zadání přesné délky od připnutého bodu
description: Přepínač Dist umožní, aby poslední vektorová špendlík sloužil jako kotva, od které sledování úhlu měří, takže můžete napsat přesnou délku a umístit bod v přesné vzdálenosti a úhlu od existujícího bodu — včetně prvního bodu tvaru.
keywords: [sledování vzdálenosti CAD, zadání přesné vzdálenosti CAD, přepínač dist, sledování vzdálenosti od špendlíků, polární sledování CAD, zadání přesné délky, přímé zadání vzdálenosti, kulmanlab]
group: interface
order: 3
---

# Distance Tracking

**Distance Tracking** umožňuje umístit bod napsáním přesné délky místo kliknutí. Ovládá se přepínačem **Dist** v ovládací liště, vedle [Pins](../vector-pins/) a ANGL, a je **ve výchozím stavu zapnutý**; nastavení se zachovává mezi relacemi.

Přidává úzkou, ale užitečnou věc: umožňuje, aby **poslední vektorový špendlík** sloužil jako kotva, od které sledování úhlu měří. Bez něj může příkaz měřit pouze od bodu, který již sám shromáždil — což znamená, že *první* bod tvaru nemá vůbec od čeho měřit.

## Tři přepínače spolupracují

Distance Tracking není samostatný. Než můžete napsat délku, musí být dva další přepínače ve správném stavu:

| Přepínač | Role |
|----------|------|
| **Pins** | Dodává vztažný bod. Najeďte na bod přichycení na 500 ms a připnete jej — viz [Vector Pins](../vector-pins/). |
| **ANGL** | Dodává úhel. Sledování vzdálenosti je dostupné, až když je kurzor zamknut na úhel, takže ANGL musí být nastaveno na krok (10°, 20°, 30°, 45°, 90°), nikoli na Off. |
| **Dist** | Umožňuje použít špendlík jako kotvu, nikoli jen vlastní bod příkazu. |

Pokud máte Pins a Dist zapnuté, ale ANGL nastavené na **Off**, nic se nestane: neexistuje zamčený směr, podél kterého by se dala měřit délka.

## Jak jsou Pins a Dist spojeny

Sledování vzdálenosti nedává smysl s vypnutými špendlíky, takže oba přepínače jsou udržovány v souladu:

- Zapnutím **Pins** se zapne i **Dist**.
- Vypnutím **Pins** se vypne i **Dist**.
- Zapnutím **Dist** se zapne **Pins**, pokud nebyl zapnutý.
- Vypnutím **Dist** zůstane **Pins** zapnutý.

Dist tedy nikdy nemůže být aktivní, když jsou Pins neaktivní, ale můžete si ponechat sledování špendlíků pro zarovnání a vypnout sledování vzdálenosti — užitečné, pokud chcete vztažné čáry, ale nechcete, aby se kurzor zamykal na špendlík, když jste chtěli zamknout na vlastní poslední bod.

## Umístění bodu v přesné vzdálenosti

1. Zapněte **Pins**, **Dist** a nastavte **ANGL** na krok úhlu.
2. Spusťte příkaz, který žádá o bod — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/) a tak dále.
3. **Připněte vztažný bod**: najeďte na existující bod přichycení, dokud se značka nezmění na vyplněný čtverec.
4. Přesuňte kurzor od špendlíku přibližně pod požadovaným úhlem. Když se přiblíží k jednomu z kroků ANGL, směr se **zamkne** — od špendlíku se objeví indikátor sledování.
5. **Napište délku** a stiskněte **Enter** nebo **Space**. Bod se umístí přesně v této vzdálenosti od špendlíku, podél zamčeného úhlu.

Výzva v terminálu vám řekne, kdy můžete psát. Při zamknutí zní:

```
pick start point or enter length: [ ]
```

a hodnota, kterou napíšete, se objeví v závorkách.

## Proč záleží na prvním bodu

Toto je případ, který by jinak byl nemožný. Představte si, že chcete začít úsečku přesně 250 jednotek vpravo od existujícího rohu:

1. Spusťte [Line](../../commands/line/).
2. Připněte existující roh.
3. Přesouvejte vpravo, dokud se směr nezamkne na 0°.
4. Napište `250`, stiskněte **Enter**.

Úsečka nyní začíná v bodě 250 jednotek od rohu, bez konstrukční geometrie a bez počítání. Bez Dist příkaz Line dosud žádné body neshromáždil, takže není od čeho napsanou délku *měřit* — mohli byste jen přibližně kliknout, nebo nakreslit konstrukční čáru a později ji smazat.

U **druhého a dalších** bodů už příkaz má vlastní kotvu (předchozí bod) a ta se používá jako první. Špendlík se zvažuje jako alternativa, jen když vaše vlastní kotva není zamčená, takže připnutí něčeho nepřebije zámek, který již máte.

## Psaní zamkne zámek

Jakmile začnete psát číslice, kotva se přestane měnit. Bod, který byl zamčen v okamžiku, kdy dopadla první číslice, zůstává kotvou, dokud nepotvrdíte nebo nevymažete pole — pohyb myši uprostřed zadávání tiše nepřepne měření na jiný špendlík nebo na vlastní bod příkazu.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.` | Připojí k délce |
| `-` | Záporná délka — obrátí směr podél zamčeného úhlu (pouze jako první znak) |
| `Backspace` | Smaže poslední znak |
| `Enter` / `Space` | Umístí bod na napsanou délku |
| `Escape` | Zruší příkaz; zámek i napsaná hodnota se vymažou |

Psaní délky je volitelné. Při zamčeném směru můžete stále kliknout a bod se promítne na zamčený úhel.

## Kde funguje

Sledování vzdálenosti je dostupné v každém příkazu, který žádá o výběr bodů:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) a [ViewportCopy](../../commands/viewport-copy/).

## Viz také

- [Vector Pins](../vector-pins/) — připínání bodů a sledování podél jejich vztažných čar
- [Grid & Snap](../grid-snap/) — další pomůcky pro přesnost v ovládací liště
- [Distance](../../commands/distance/) — měření existující vzdálenosti místo psaní nové
