---
title: Array Grid Komutu — Nesneleri Satır ve Sütunlarda Tekrarlayın
description: Array Grid komutu, seçili nesnelerden dikdörtgen bir kopya ızgarası oluşturur — satır sayısını, sütun sayısını ve aralarındaki boşluğu doğrudan terminale yazın, nokta tıklamaya gerek yok.
keywords: [CAD array komutu, arraygrid, dikdörtgen array CAD, ızgara deseni CAD, nesneleri tekrarla CAD, array kopyala CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

`ArrayGrid` komutu, seçili nesnelerden dikdörtgen bir kopya ızgarası oluşturur — satır sayısını, sütun sayısını ve aralarındaki boşluğu girin, hepsi terminale yazılır. Orijinal seçim satır 0, sütun 0 hücresini kaplar; diğer her hücre ötelenmiş bir kopyadır.

## İki Başlatma Yöntemi

**Önce seç, sonra array** — nesneleri seçin, ardından etkinleştirin:

1. Tuvalde bir veya daha fazla nesne seçin.
2. Terminale `arraygrid` yazın (`arr` yeterli — belirsizlik yok) veya araç çubuğundaki **Array Grid** düğmesine basın.
3. **Satır** sayısını yazın ve **Enter** tuşuna basın.
4. **Sütun** sayısını yazın ve **Enter** tuşuna basın.
5. **Satırlar arası boşluğu** yazın ve **Enter** tuşuna basın.
6. **Sütunlar arası boşluğu** yazın ve **Enter** tuşuna basın — ızgara hemen oluşturulur.

**Etkinleştir, sonra seç** — seçim olmadan komutu başlatın:

1. `arraygrid` yazın veya araç çubuğu düğmesine basın.
2. **Nesneleri seçin** — tek tek nesneleri değiştirmek için tıklayın veya kutu seçimi için sürükleyin.
3. Seçimi onaylamak için **Enter** veya **Boşluk** tuşuna basın.
4. Yukarıdaki gibi satırlar → sütunlar → satır boşluğu → sütun boşluğu ile devam edin.

```
  2 satır x 3 sütun:

  [B] [B] [B]   <- satır 1 (ötelenmiş kopyalar)
  [A] [A] [A]   <- satır 0: orijinal seçim, kopyalar sağa doğru
```

> Terminalin yalnızca belirsizliği ortadan kaldıracak kadar harfe ihtiyacı vardır — `arr` yazıp **Enter** tuşuna basmak Array Grid'i doğrudan etkinleştirir, çünkü başka hiçbir komut adı bu üç harfle başlamaz (Arc, Area, Align ve Angle daha erken ayrışır).

## Satırlar, sütunlar ve boşluk

| İstem | Kabul eder | Notlar |
|-------|-----------|--------|
| Satırlar | Pozitif tam sayılar (1, 2, 3…) | Yalnızca rakamlar — ondalık nokta veya işaret yok |
| Sütunlar | Pozitif tam sayılar (1, 2, 3…) | Yalnızca rakamlar — ondalık nokta veya işaret yok |
| Satır boşluğu | İşaretli ondalık (örn. `10`, `-5.5`) | Satırlar arası mesafe; negatif yönü tersine çevirir |
| Sütun boşluğu | İşaretli ondalık (örn. `10`, `-5.5`) | Sütunlar arası mesafe; negatif yönü tersine çevirir |

1 satır ve 1 sütunla kopya oluşturulmaz — komut çizimi değiştirmeden çıkar.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Enter` / `Boşluk` | Seçimi onaylar ve satır istemine geçer |
| `0`–`9` | Satır veya sütun için rakam girer |
| `0`–`9`, `.`, `-` | Satır/sütun boşluğu için rakam girer (`-` yalnızca ilk karakter olarak) |
| `Backspace` | Geçerli istemin son yazılan karakterini siler |
| `Enter` | Geçerli istemi onaylar ve bir sonrakine geçer |
| `Escape` | Yazılan satır/sütun/boşluk değerlerini temizler ve seçim aşamasına döner |

## Komut Sırasında Nesne Seçimi

| Yöntem | Davranış |
|--------|----------|
| **Tıklama** | İmlecin altındaki nesneyi seçim durumunu değiştirir |
| **Sağa sürükleme** (katı) | Çerçevenin tamamen içindeki nesneleri ekler |
| **Sola sürükleme** (çapraz) | Çerçeve sınırını kesen nesneleri ekler |
| **Enter** / **Boşluk** | Seçimi onaylar ve satır istemine geçer |

## Array'den sonra

Yeni kopyalar çizime eklenir ve komut çıkar — orijinal seçim temizlenir. **Array Grid**'i tekrar çalıştırın veya yeni bir komut başlatın.

## Array Grid - Copy Karşılaştırması

| | Array Grid | Copy |
|---|-----------|------|
| Nokta seçimi | Yok — satır, sütun ve boşluk yazılır | Temel nokta ve hedef tıklanır (veya yazılır) |
| Oluşturulan kopyalar | Satır × Sütun − 1 | Kopyalama işlemi başına tam olarak 1 |
| Düzen | Düzenli dikdörtgen ızgara | Herhangi bir yerde, herhangi bir kaymada |
| En iyi | Düzenli bir desende bir birimi tekrarlama (delikler, fayanslar, bağlantı elemanları) | Rastgele bir konumda tek bir kopya |

## Desteklenen Nesneler

Array Grid tüm nesne türleriyle çalışır. Tüm nesneler dahili olarak `translate(dx, dy)` uygular — [Copy](../copy/) ve [Move](../move/) tarafından kullanılan aynı işlem — bu nedenle hiçbiri hariç tutulmaz.
