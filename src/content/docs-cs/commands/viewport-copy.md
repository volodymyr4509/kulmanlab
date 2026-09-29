---
title: Příkaz ViewportCopy — duplikace výřezu v KulmanLab CAD
description: Příkaz ViewportCopy zduplikuje vybraný výřez na novou pozici ve stejném rozvržení, přičemž zachová měřítko a nastavení pohledu na model. Podporuje zadání přesných souřadnic, zamykání úhlu a zadání vzdálenosti psaním.
keywords: [kopie výřezu, duplikace výřezu, kopírování výřezu rozvržení, zámek úhlu výřez, přesné souřadnice výřez, kulmanlab]
group: layouts
order: 2
---

# ViewportCopy

Příkaz `ViewportCopy` zkopíruje výřez na novou pozici a zachová jeho měřítko i střed modelu. Dostupný pouze v prostoru rozvržení.

## Kopírování výřezu

1. Přepněte na záložku papírového rozvržení.
2. Volitelně kliknutím vyberte výřez předem.
3. Napište `ViewportCopy` do terminálu nebo klikněte na tlačítko **Viewport Copy** v panelu nástrojů.
4. Pokud nebyl žádný výřez vybrán předem, **klikněte na výřez**, který chcete kopírovat.
5. **Klikněte na základní bod** — vztažný bod posunutí. Nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
6. **Klikněte na cíl** — výřez se umístí o posun základ→cíl. Nebo použijte zadání souřadnic / zámek úhlu.

Po umístění příkaz zůstává aktivní — kliknutím na další cíl umístíte další kopii téhož výřezu. Dokončíte stisknutím **Enter**, **Space** nebo **Escape**.

## Zadávání souřadnic

V krocích základního bodu a cíle můžete místo klikání napsat přesnou souřadnici:

1. Napište hodnotu X.
2. Stiskněte `,` — terminál zobrazí `[X], [Y{kurzor}]`.
3. Napište hodnotu Y.
4. Potvrďte stisknutím **Enter**.

## Zamykání úhlu a přesná vzdálenost

Po nastavení základního bodu příkaz přichytává k osám po 45° (0°, 45°, 90°, 135°, …), když se kurzor zarovná. Při zamknutí:

- Náhled přiskočí k ose.
- Napište vzdálenost a stiskněte **Enter**, čímž kopii umístíte přesně o toto posunutí podél zamčeného směru.

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.` | Připojí číslici k hodnotě vzdálenosti |
| `-` | Záporná vzdálenost (obrátí směr; pouze jako první znak) |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Umístí kopii na napsanou vzdálenost |

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X, nebo vzdálenosti při zamknutém úhlu |
| `,` | Zamkne X a přejde na zadávání Y |
| `Enter` | Potvrdí napsanou souřadnici nebo vzdálenost |
| `Enter` / `Space` | Dokončí (když neprobíhá žádné zadávání) |
| `Escape` | Zruší a resetuje |

## Poznámky

- ViewportCopy je dostupný pouze při aktivní záložce papírového rozvržení.
- Zkopírovaný výřez zdědí stejné měřítko, střed modelu, stav zámku a rozměry jako originál.
- Nový výřez od začátku vytvoříte příkazem [ViewportRectangle](../viewport-rectangle/).
