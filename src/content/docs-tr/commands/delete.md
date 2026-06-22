---
sidebar_position: 15
title: Delete Komutu — KulmanLab CAD'de Nesneleri Çizimden Kaldır
description: Delete komutu seçili nesneleri kalıcı olarak kaldırır (geri alınabilir). Önceden seçilmiş nesneler onay adımı olmadan anında silinir. Delete tuşu komutu etkinleştirmeden bile genel kısayol olarak çalışır. Tekli tıklama ve alan seçimini destekler.
keywords: [CAD delete komutu, nesneleri kaldır CAD, nesneleri sil CAD, Delete tuşu CAD, silmeyi geri al CAD, kulmanlab]
---

# Delete

`delete` komutu, seçili nesneleri çizimden kaldırır. Silme işlemleri [Geri Al](./undo) geçmişine kaydedilir ve en fazla 20 adım geri alınabilir. Ayrı bir "silmeyi onayla" iletişim kutusu yoktur — onay tek bir tuş basışıdır.

## İki Silme Yöntemi

**Önce seç, sonra sil** — en hızlı yol:

1. Tuvalde bir veya daha fazla nesne seçin.
2. Terminale `delete` yazın, **Delete** araç çubuğu düğmesine tıklayın **veya doğrudan `Delete` tuşuna basın**.

Nesneler anında kaldırılır — ek onay adımı yoktur.

**Etkinleştir, sonra seç**:

1. Hiçbir şey seçili değilken `delete` yazın veya araç çubuğu düğmesine tıklayın.
2. **Nesneleri seçin** — tıklayarak seçimi değiştirin veya alan seçimi için sürükleyin.
3. Seçili nesneleri onaylamak ve kaldırmak için **Enter**, **Boşluk** veya **Delete** tuşuna basın.

## Delete Tuşu Kısayolu

Klavyedeki `Delete` tuşu **genel kısayol** olarak işlev görür — herhangi bir nesne seçiliyse, Delete komutunu terminalde açmaya gerek kalmadan anında siler. Bu, en hızlı tek adımlı silme iş akışıdır:

```
Nesneyi tıkla → Delete tuşuna bas → tamamlandı
```

## Komut Sırasında Seçim

| Yöntem | Davranış |
|--------|-----------|
| **Tıklama** | İmlecin altındaki nesneyi seçimde açar/kapatır |
| **Sağa sürükleme** (katı) | Yalnızca kutunun tamamen içindeki nesneleri seçer |
| **Sola sürükleme** (çapraz) | Kutu sınırıyla kesişen nesneleri seçer |
| **Enter** / **Boşluk** / **Delete** | Seçili nesneleri onaylar ve siler |

## Silinen Nesneleri Kurtarma

Silme işlemleri [Geri Al](./undo) komutuyla geri alınabilir (terminale `undo` yazın veya araç çubuğu düğmesini kullanın). Dosya başına en fazla **20 adım** geri alınabilir ve geçmiş sayfa yeniden yüklemelerinde de korunur. Kaydetmeden 20'den fazla silme yaptıysanız, önceki silmeler kurtarılamaz.

## Desteklenen Nesneler

Sil komutu her tür nesneyle çalışır — Çizgi, Çoklu Çizgi, Dikdörtgen, Daire, Yay, Elips, Metin, Spline, Ölçü, Gösterge ve diğer tüm nesne türleri.
