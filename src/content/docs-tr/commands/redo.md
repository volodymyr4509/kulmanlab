---
sidebar_position: 22
title: Redo Komutu — KulmanLab CAD'de Geri Alınan İşlemi Yinele
description: Redo komutu, düzenleme geçmişinde ileri giderek son geri alınan işlemi yineler. Undo sonrasında yeni bir işlem yapıldığında Redo yığını temizlenir. Maksimum derinlik 20 adımdır.
keywords: [CAD redo komutu, işlemi yinele CAD, Ctrl+Y CAD, redo yığını, kulmanlab]
---

# Redo

`redo` komutu, [Undo](./undo) komutuyla geri alınan son işlemi yineler. Undo'dan sonra yeni değişiklikler yaptıysanız, Redo yığını temizlenir — yeni değişiklikler geri alınan dalın yerini alır.

## Nasıl Kullanılır

- Terminale `redo` yazın, veya
- **Ctrl+Y** (Windows/Linux) veya **Cmd+Y** (Mac) tuşlarına basın, veya
- Araç çubuğundaki **Redo** düğmesine basın.

## Redo Yığını Davranışı

| Durum | Redo yığını |
|-------|------------|
| Undo sonrasında | Kullanılabilir — geri alınan adımları içerir |
| Yeni işlem yaptıktan sonra | Temizlenir — yeni değişiklikler dalın yerini alır |
| Redo sonuna kadar yapıldıktan sonra | Boş — yinelenecek adım kalmadı |
| Depolama | Bellekte (IndexedDB'de değil) |
| Maksimum derinlik | 20 adım |

## Redo - Undo Karşılaştırması

| | Redo | Undo |
|---|------|------|
| Yön | Geçmişte ileri | Geçmişte geri |
| Kısayol | Ctrl+Y / Cmd+Y | Ctrl+Z / Cmd+Z |
| Temizlendiğinde | Undo sonrası yeni işlem | Hiçbir zaman (her zaman Undo yapılabilir) |
