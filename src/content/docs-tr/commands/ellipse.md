---
title: Ellipse Komutu — KulmanLab CAD'de Merkez ve İki Eksenle Döndürülmüş Elips Çiz
description: Ellipse komutu, üç tıklamayla elips çizer — merkez, birinci eksen ucu (herhangi bir yönde) ve ikinci eksen uzunluğu. İki eksen her zaman dik açılıdır. Yerleştirme sonrasında bağımsız yeniden boyutlandırma için her yarı eksenin kendi tutamacı vardır. DXF'de ELLIPSE nesneleri olarak tam round-trip.
keywords: [CAD ellipse komutu, elips çiz CAD, döndürülmüş elips CAD, elips eksenleri, ELLIPSE DXF nesnesi, elips tutamaç düzenleme, eksen oranı, kulmanlab]
group: shapes
order: 6
---

# Ellipse

`ellipse` komutu, üç tıklamayla elips çizer: bir merkez noktası, birinci (ana) yarı eksenin herhangi bir açıdaki ucu ve ikinci (yardımcı) yarı eksenin uzunluğu. İki eksen her zaman birbirine diktir — ikinci eksen yönü birinciden otomatik olarak türetilir.

## Elips Çizimi

1. Terminale `ellipse` yazın veya araç çubuğundaki **Ellipse** düğmesine tıklayın.
2. **Merkez noktasını tıklayın** veya tam koordinat için `X,Y` yazıp **Enter** tuşuna basın.
3. **Birinci eksen ucunu tıklayın** — birinci yarı eksenin hem yönünü hem de uzunluğunu belirler. Koordinat girişi burada da çalışır.
4. **İkinci eksen uzunluğunu ayarlayın** — imleci birinci eksene dik olarak hareket ettirin, ardından tıklayın veya uzunluk yazın.

```
               ● ← birinci eksen ucu (adım 3)
              /
  merkez ●  /  ← birinci eksen (herhangi bir açı)
            |
            ● ← imleç burada ikinci eksen uzunluğunu ayarlar (adım 4)
```

Elips adım 4 sonrasında yerleştirilir ve komut çıkar.

## Eksen Girişi — Tıklama, Koordinat veya Yazılan Uzunluk

**Merkez (adım 2):** tıklayın veya tam konum için `X,Y` yazın.

**Birinci eksen ucu (adım 3):** tıklayın veya tam koordinat için `X,Y` yazın. Açı kilitleme aynı zamanda 45° artışlara yakalanır — kilitliyken, ucu tam o mesafeye yerleştirmek için bir uzunluk yazıp **Enter** tuşuna basın.

**İkinci eksen (adım 4):** yazılan uzunluk her zaman kullanılabilir — açı kilidi gerekmez. Yön zaten birinci eksene dik olarak sabitlenmiştir; yazma yalnızca uzunluğu belirler.

| Tuş | İşlem |
|-----|--------|
| `0`–`9`, `.` | Eksen uzunluğuna rakam ekler (ikinci eksen aşaması) |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Eksen ucunu yazılan uzunluğa yerleştirir |

## Koordinat Girişi (merkez ve birinci eksen ucu)

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Onaylamak için **Enter** tuşuna basın.

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır (merkez/birinci eksen aşamaları) veya açı kilitliyken eksen uzunluğu |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Yazılan koordinatı veya uzunluğu onaylar |
| `Escape` | İptal eder ve sıfırlar |

## Tutamaç Düzenleme — Bağımsız Eksen Yeniden Boyutlandırma

Seçili bir elips beş tutamaç gösterir:

| Tutamaç | Sayı | Ne yapar |
|------|-------|--------------|
| **Merkez** | 1 | Tüm elipsi taşır; her iki eksen değişmez |
| **Ana eksen uçları** | 2 (uzun eksenin karşıt uçları) | Sürükleyerek ana yarı eksen uzunluğunu yeniden boyutlandırır; yardımcı eksenin mutlak boyutu sabit kalır |
| **Yardımcı eksen uçları** | 2 (kısa eksenin karşıt uçları) | Sürükleyerek yardımcı yarı eksen uzunluğunu yeniden boyutlandırır; ana eksen değişmez |

Ana ve yardımcı eksen tutamaçları bağımsızdır — komutu yeniden çalıştırmadan elipsin şeklini değiştirebilirsiniz.

## Elips Seçimi

| Yöntem | Davranış |
|--------|-----------|
| **Tıklama** | Tıklama elips konturuna yakın düşerse seçer |
| **Sağa sürükleme** (katı) | Elipsin eksen hizalı sınırlayıcı kutusu tamamen seçim kutusunun içine sığmalıdır |
| **Sola sürükleme** (çapraz) | Elips konturunun seçim kutusu sınırını kesen herhangi bir kısmı seçer |

## Desteklenen Düzenleme Komutları

| Komut | Elipse ne olur |
|---------|-----------------------------|
| [Move](../move/) | Merkezi öteleer; her iki eksen değişmez |
| [Copy](../copy/) | Yeni bir merkezde özdeş elips oluşturur |
| [Rotate](../rotate/) | Merkez konumunu ve ana eksen vektörünü aynı açıyla döndürür |
| [Mirror](../mirror/) | Merkezi yansıtır ve ana eksen yönünü yansıtma ekseni üzerinden yeniden hesaplar |
| [Scale](../scale/) | Merkez konumunu ölçekler ve her iki yarı eksen uzunluğunu katsayıyla çarpar |
| [Offset](../offset/) | Sabit bir mesafe kadar dışa veya içe kaydırılmış eşmerkezli elips oluşturur |
| [Delete](../delete/) | Elipsi kaldırır |

## Özellikler

**Genel**

| Özellik | Varsayılan | Anlam |
|----------|---------|---------|
| Renk | 256 (Katmana Göre) | ACI renk dizini |
| Katman | `0` | Katman ataması |
| Çizgi türü | Katmana Göre | Adlandırılmış çizgi türü deseni |
| Çizgi türü ölçeği | 1 | Çizgi türü desenindeki ölçek faktörü |
| Kalınlık | 0 | Ekstrüzyon kalınlığı |

**Geometri**

| Özellik | Anlam |
|----------|---------|
| Merkez X / Merkez Y | Elipsin merkezi |
| Ana Eksen X / Ana Eksen Y | Merkezden ana eksen ucuna vektör (hem yönü hem uzunluğu kodlar) |
| Eksen Oranı | Yardımcı yarı eksenin ana yarı eksene oranı (0 < oran ≤ 1) |
| Başlangıç Açısı / Bitiş Açısı | Derece cinsinden parametrik açılar; tam elips için her ikisi de 0°/360° |

## Elips - Daire Karşılaştırması — Hangisini Kullanmalı

| | Elips | Daire |
|---|---------|--------|
| Eksenler | Herhangi bir açıda iki bağımsız yarı eksen | Bir yarıçap, simetrik |
| Döndürme | Herhangi bir açıda yerleştirilebilir | Döndürme yok |
| Yazılan giriş | Eksen başına uzunluk | Yalnızca yarıçap |
| Tutamaç yeniden boyutlandırma | Ana ve yardımcı bağımsız olarak | Dört kardinal noktanın tamamı eşit |
| En iyi | Eğik görünümler, oval özellikler, perspektif delikler | Simetrik yuvarlak özellikler |

## DXF — ELLIPSE nesnesi

Elipsler DXF dosyasında `ELLIPSE` nesnesi olarak kaydedilir. Format, merkez noktasını, tam ana eksen vektörünü (yön + uzunluk) ve eksen oranını saklar. Döndürme, şekil ve tüm stil özellikleri kayıpsız round-trip yapar. Daire, dejenere bir elips olarak **saklanmaz** — DXF modelinde iki nesne türü ayrı kalır.
