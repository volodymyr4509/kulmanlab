---
title: "BlockCreate Command — Gumawa ng block mula sa mga bagay"
description: "Gumagawa ang BlockCreate command ng may-pangalang block mula sa mga napiling bagay, na may base point na pinili mo, at pinapalitan ang mga ito ng isang reference dito. Maaari nang ilagay muli ang block nang paulit-ulit gamit ang BlockInsert."
keywords: ["gumawa ng block CAD", "block mula sa mga bagay CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

Gumagawa ang `GumawaNgBlock` command ng **block**: isang may-pangalang grupo ng mga bagay na nase-save nang isang beses sa drawing at inilalagay nang kasingdalas ng gusto mo gamit ang [Block Insert](../block-insert/). Ang mga piniling bagay ang nagiging block, at sa drawing ay pinapalitan sila ng isang reference dito, kaya walang nagbabago sa hitsura.

## Paggawa ng block

1. Piliin muna ang mga bagay kung gusto, saka i-type ang `GumawaNgBlock` o i-click ang **Gumawa ng block** sa **Mga Block** panel. Magbubukas ang isang popup na may napili na.
2. Mag-type ng **Pangalan**. Hindi ito maaaring walang laman, hindi maaaring maglaman ng alinman sa `< > / \ " : ; ? * | , =` o backtick, at hindi maaaring pangalan ng ibang block.
3. I-click ang **Pumili ng mga bagay** para magdagdag o magtanggal ng mga bagay: nagtatago ang popup, at nagki-click ka ng mga bagay o nagda-drag ng lugar. Pindutin ang **Enter** o **Space** para bumalik sa popup, kung saan ipinapakita ng **Mga bagay** ang bilang.
4. Itakda ang **Batayang punto**, ang punto kung saan inilalagay ang block: i-type ang X at Y nito, o i-click ang **Pumili ng punto** at saka mag-click sa canvas (o mag-type ng X,Y doon). Nagsisimula ito sa 0,0.
5. I-click ang **OK**. Nase-save ang block, nagbibigay-daan ang mga bagay sa isang reference dito sa base point, at itinatala ng terminal ang pangalan ng block at kung ilang bagay ang laman nito.

## Mabuting malaman

- Nananatiling naka-disable ang **OK** habang may mali, at sinasabi ng mensahe sa ilalim ng mga field kung ano: walang laman o hindi magamit na pangalan, pangalang gamit na, o walang bagay.
- Ang **Escape** habang pumipili ng mga bagay o base point ay bumabalik sa popup nang ang block ay kung paano ito dati. Ang **Escape** sa popup ay nagka-cancel ng command.
- Nase-save ang block kasama ng drawing at isinusulat sa DXF kasama ng mga reference nito.

---

*Kaugnay: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
