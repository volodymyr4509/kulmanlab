---
sidebar_position: 28
title: Dimension Continue Komutu — KulmanLab CAD'de Mevcut Temel Çizgiden Ölçü Zinciri Oluştur
description: Dimension Continue komutu, son yerleştirilen ölçünün ikinci uzatma çizgisinden yeni ölçüler zinciri oluşturur. Temel ölçünün açısını, kaydırmasını, ok boyutunu ve metin yüksekliğini otomatik olarak devralır. Hem doğrusal hem de hizalı temellerle çalışır.
keywords: [CAD dimension continue, dimcontinue, zincir ölçüler CAD, temel çizgi ölçüsü, ölçü serisini devam ettir, kulmanlab]
---

# Dimension Continue

`dimcontinue` komutu, mevcut bir ölçünün **ikinci uzatma çizgisinden** yeni ölçüler zinciri oluşturur. Her yeni segment aynı ölçüm ekseni üzerinde ve temel ölçüyle aynı ölçü çizgisi kaydırmasında yerleştirilir. Tüm stil özellikleri — ok boyutu, metin yüksekliği, uzatma çizgisi uzunlukları — temel ölçüden otomatik olarak kopyalanır.

## Zincirleme Ölçülerin Görünümü

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (temel   p3           p4
           ext2 → yeni başlangıç)
```

Her dikdörtgen ayrı bir `DIMENSION` nesnesidir. Aynı ölçü çizgisi konumunu ve ölçüm yönünü paylaşırlar.

## Zinciri Başlatma

1. Terminale `dimcontinue` yazın veya araç çubuğundaki **Dimension Continue** düğmesine tıklayın.
2. **Bir ölçü az önce yerleştirildiyse** — komut onu otomatik olarak temel olarak alır (tıklama gerekmez).
3. **Son zamanlarda yerleştirilmiş ölçü yoksa** — temel olarak kullanmak için mevcut bir ölçüyü tıklayın.
4. **Sonraki uzatma çizgisi başlangıç noktasını tıklayın** — imleci hareket ettirdikçe önizleme yeni ölçüyü gösterir. Ya da tam koordinat için `X,Y` yazıp **Enter** tuşuna basın.
5. Zinciri uzatmak için tıklamaya (veya yazmaya) devam edin. Yerleştirilen her ölçü otomatik olarak yeni temel olur.
6. Zinciri tamamlamak için **Enter**, **Boşluk** veya **Escape** tuşuna basın.

## Temel Ölçüden Miras Alınanlar

| Özellik | Temel ölçüden miras alınır |
|----------|---------------------|
| Ölçüm yönü / açısı | Evet — tüm zincir için kilitli |
| Ölçü çizgisi kaydırması (ölçülen noktalardan mesafe) | Evet |
| Ok boyutu | Evet |
| Metin yüksekliği | Evet |
| Uzatma çizgisi kaydırması ve uzatması | Evet |
| Metin hizalaması | Evet |
| Stil adı | Evet |
| Renk, Katman | Miras alınmaz — mevcut katmanı kullanır |

## Ölçüm Yönü Kilitleme

Zincirin ölçüm yönü **temel ölçünün açısına sabitlenir**:

- Doğrusal temel (Y) → tüm devamlar yatay mesafeyi (Δ X) ölçer.
- Doğrusal temel (D) → tüm devamlar dikey mesafeyi (Δ Y) ölçer.
- Herhangi bir açıdaki hizalı temel → tüm devamlar aynı açı boyunca ölçer.

Zincirin ortasında yön değiştirilemez. Farklı bir yönde ölçü almak için yeni bir [Dimension Linear](../dim-linear/) veya [Dimension Aligned](../dim-aligned/) başlatın.

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Yazılan koordinatı onaylar veya giriş yoksa zinciri tamamlar |
| `Boşluk` / `Escape` | Zinciri tamamlar |

## Dimension Continue - Sıfırdan Başlama Karşılaştırması

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Başlangıç noktası | Son temel ölçünün ext2'sinde sabit | İstediğiniz yere tıklayın |
| Açı | Temele kilitli | Serbest |
| Kaydırma | Temeldan miras alınır | İmleç veya yazıyla ayarlanır |
| Stil | Temelden miras alınır | Mevcut stil |
| En iyi | Bir sıra boyunca biriken ölçümler | İlk ölçü veya yön değiştirme |

## Yerleştirme Sonrası Etiketleri Düzenleme — simple mode

Zincirdeki herhangi bir ölçüye **çift tıklayarak** metin düzenleyiciyi **simple** modda açın. Her segment bağımsızdır ve ayrı ayrı düzenlenebilir.

| Özellik | Davranış |
|---------|----------|
| Bold / Italic / Font / Height | **Tüm** etikete aynı anda uygulanır |
| Karakter başına biçimlendirme | Desteklenmez |
| `Enter` | Değeri kaydeder ve düzenleyiciyi kapatır |
| Çok satırlı | Desteklenmez |

Tam referans için [Metin Düzenleyici — simple mode](../../interface/text-editor/#simple-mode) sayfasına bakın.

## DXF — DIMENSION Nesneleri

Zincirdeki her segment DXF dosyasında bağımsız bir `DIMENSION` nesnesi olarak saklanır. Dosyada birbirine bağlı değillerdir — aynı temel ölçüden oluşturulduğu için özellikleri aynıdır, ancak yerleştirme sonrasında her biri ayrı ayrı düzenlenebilir.
