---
title: Utos na HatchAdd — mag-upload ng .pat hatch pattern file mula sa terminal
description: Binubuksan ng HatchAdd ang file picker para mag-upload ng .pat pattern file nang hindi muna binubuksan ang Hatch Manager. Sabay-sabay na naidaragdag ang lahat.
keywords: [utos na hatch add, utos na hatchadd, mag-upload ng pat file terminal, pasadyang hatch pattern CAD, acad.pat, aklatan ng hatch pattern, kulmanlab]
group: style
order: 5
---

# HatchAdd

Binubuksan ng utos na `HatchAdd` ang file picker ng system para mag-upload ng `.pat` hatch pattern file, nang hindi muna binubuksan ang dialog na [Hatch Manager](../hatch-manager/). Ito ang parehong upload na pinapatakbo ng button na **Add .pat File** sa Hatch Manager — tuwirang daan lang dito ang HatchAdd mula sa terminal.

## Pag-upload ng pattern file

1. I-type ang `HatchAdd` sa terminal, o i-click ang **Add .pat File** sa ibaba ng dialog na [Hatch Manager](../hatch-manager/).
2. Pumili ng `.pat` file sa system picker. Ang karaniwang pormat ng hatch pattern lamang ang tinatanggap.

Natatapos ang utos sa oras na bumukas ang file picker — wala nang karagdagang tanong, click o terminal input. Nakarehistro ang mga pattern at lumilitaw sa grupong **User** sa oras na mapili ang file.

## Ano ang nangyayari sa pag-upload

- **Lalagyan ang `.pat` file, hindi iisang pattern.** Karaniwang maraming pinangalanang pattern ang tinutukoy ng isang file, at sabay-sabay silang naidaragdag. Dito naiiba ang HatchAdd sa [FontAdd](../font-add/), kung saan isang `.ttf` ay isang font.
- **Hindi iniingatan ang file mismo.** Minsan itong binabasa, hinahati sa mga pattern nito, at bawat pattern ay hiwalay na iniimbak sa sarili nitong pangalan. Kaya nga maaari mong alisin ang isang pattern mamaya nang hindi nagagalaw ang mga kasabay nitong dumating — at kaya nga inililista ng grupong **User** ang mga ito ayon sa alpabetikong pangalan sa halip na kung saang file nanggaling.
- **Ang pattern na katulad ang pangalan ng isang umiiral ay pumapalit dito.** Ito ang suportadong paraan para ilagay ang mapagkakatiwalaang depinisyon sa ibabaw ng mga tantiya ng KulmanLab: mag-upload ng tunay na `acad.pat`, at ang mga bersyon nito ng `ANSI31` at ng iba pang karaniwang pangalan ang mangingibabaw.
- **Iniimbak ang mga pattern kada user, hindi kada guhit.** Nasa browser sila (IndexedDB), kusang nire-reload sa susunod mong pagbukas ng KulmanLab CAD, at magagamit sa bawat guhit.
- **Ang file na walang wastong depinisyon ng pattern ay walang idinaragdag.** Nananatiling gaya ng dati ang aklatan.

## Keyboard reference

Walang sariling keyboard interaction ang HatchAdd — ang buong utos ay ang katutubong file-picker dialog ng browser. Ang pagkansela sa dialog na iyon (o hindi pagpili ng file) ay nag-iiwan sa aklatan ng pattern na hindi nagbabago.

## Kaugnay na commands

| Command | Ano ang ginagawa nito |
|---------|-------------|
| [Hatch Manager](../hatch-manager/) | Tingnan ang aklatan ng pattern na may live na swatch preview, at alisin ang mga na-upload na pattern |
| [Hatch](../hatch/) | Pinupuno ang saradong rehiyon ng pattern mula sa aklatan |
| [FontAdd](../font-add/) | Ang parehong tuwirang-upload na shortcut para sa mga `.ttf` na font |
