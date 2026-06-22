---
sidebar_position: 15
title: Delete Komutu — KulmanLab CAD'de Seçili Nesneleri Sil
description: Delete komutu, seçili tüm nesneleri çizimden siler. Klavyedeki Delete tuşu en hızlı kısayoldur. İşlem Undo komutuyla geri alınabilir.
keywords: [CAD delete komutu, nesneleri sil CAD, Delete tuşu CAD, kulmanlab]
---

# Delete

`delete` komutu, çizimden seçili tüm nesneleri kaldırır. İşlem [Undo](./undo) komutuyla geri alınabilir.

## Üç Silme Yöntemi

**Önce seç, sonra sil** (en hızlı):
1. Nesneleri seçin (tıklayın veya kutu sürükleyin).
2. Klavyedeki **Delete** tuşuna basın.

**Araç çubuğu veya terminal üzerinden**:
1. Nesneleri seçin.
2. Terminale `delete` yazın veya **Delete** düğmesine basın.

**Etkinleştir, sonra seç**:
1. `delete` yazın.
2. Nesneleri seçin.
3. Onaylamak için **Enter** veya **Boşluk** tuşuna basın.

## Delete Tuşu — Kısayol

Tuvalde seçili nesneler varsa **Delete** tuşuna (veya **Backspace**) basmak terminale komut girmeden anında onları siler.

## Silmeyi Geri Alma

Nesneleri kurtarmak için silme işleminin hemen ardından [Undo](./undo) (Ctrl+Z / Cmd+Z) kullanın.

## Komut Sırasında Nesne Seçimi

| Yöntem | Davranış |
|--------|----------|
| **Tıklama** | İmlecin altındaki nesneyi değiştirir |
| **Sağa sürükleme** (katı) | Çerçevenin tamamen içindeki nesneleri ekler |
| **Sola sürükleme** (çapraz) | Çerçeve sınırını kesen nesneleri ekler |
| **Enter** / **Boşluk** | Seçimi onaylar ve silmeyi gerçekleştirir |

## Desteklenen Nesneler

Delete tüm nesne türleriyle çalışır: Çizgi, Çoklu Çizgi, Dikdörtgen, Daire, Yay, Elips, Metin, Spline, Ölçüler, Göstergeler ve diğerleri.
