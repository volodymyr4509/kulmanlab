---
title: "BlockInsert Command — Maglagay ng block mula sa mga block ng drawing"
description: "Binubuksan ng BlockInsert command ang isang palette ng mga preview ng mga block ng drawing. Pumili ng isa, itakda ang scale at rotation, at mag-click o mag-type ng punto para ilagay ito, isang beses o paulit-ulit."
keywords: ["mag-insert ng block CAD", "block palette CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

Binubuksan ng `IpasokAngBlock` command ang isang palette ng mga preview ng bawat block sa drawing at inilalagay ang pinili mo. Gumawa ng mga block gamit ang [Block Create](../block-create/), o magbukas ng DXF file na may mga block.

## Paglalagay ng block

1. I-type ang `IpasokAngBlock` o i-click ang **Ipasok ang block** sa **Mga Block** panel. Nagda-dock ang palette sa kaliwa na may isang preview tile bawat block, labindalawa bawat pahina; binabaligtad ng mga arrow sa ilalim ng mga tile ang pahina.
2. Mag-type sa **Maghanap ng block** para paliitin ang mga tile ayon sa pangalan.
3. Itakda ang **Sukat** (dapat mas malaki sa 0) at **Pag-ikot** sa degrees. Naka-on bilang default ang **Ulitin ang paglalagay**.
4. I-click ang tile ng isang block. Sumusunod ang block sa cursor: mag-click para ilagay ito ayon sa base point nito, o mag-type ng X,Y para sa eksaktong posisyon. Kapag naka-lock ang cursor sa isang anggulo, maaari kang mag-type ng haba.
5. Kapag naka-on ang **Ulitin ang paglalagay**, patuloy na sumusunod ang block sa cursor para sa susunod na kopya hanggang pindutin mo ang **Escape**. Kapag naka-off, natatapos ang command pagkatapos ng isang kopya.

## Mabuting malaman

- Para magtanggal ng block, i-click ang basurahan sa tile nito at kumpirmahin. Hindi matatanggal ang block na may mga reference sa drawing: sinasabi ng tile nito ang **Ginagamit, hindi mabubura**.
- Ang drawing na walang block ay nagpapakita ng **Walang block ang drawing na ito** sa palette.
- Isinasara ng **Escape** ang palette kapag walang inilalagay. Isa ito sa mga naka-dock na panel, na isa lang ang ipinapakita sa kaliwa sa bawat pagkakataon.

---

*Kaugnay: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
