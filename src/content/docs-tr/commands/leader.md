---
sidebar_position: 29
title: Leader Komutu — KulmanLab CAD'de Metinli Göstergeler Çiz
description: Leader komutu, metinli bir ok çizgisi olan gösterge çizer. Gösterge, ucunda açıklama metni bulunan kıvrımlı bir yola (kollara) sahiptir. Açı yakalamayı, koordinat girişini ve birden fazla kolu destekler. Not — göstergeler yalnızca DXF'den içe aktarılır, DXF'e kaydedilmez.
keywords: [CAD leader komutu, metinli gösterge CAD, ok açıklama, çizgi gösterge CAD, çok segmentli gösterge, kulmanlab]
---

# Leader

`leader` komutu, metin etiketine yönelen ok çizgisi olan gösterge çizer. Gösterge, ilk noktada ok ve sonunda düzenlenebilir metin etiketi bulunan kıvrımlı nokta yolundan (kollar) oluşur.

> **DXF Notu:** Göstergeler yalnızca içe aktarım için kullanılabilir. DXF dosyalarındaki MLEADER nesneleri doğru şekilde okunur ve görüntülenir. Ancak düzenleyicide çizilen göstergeler DXF dosyası kaydedilirken **kaydedilmez**. Göstergeleri kaydetmek için [Export](./export) komutunu JSON formatında kullanın.

## Gösterge Anatomisi

```
  ● Nokta 1 (ok)
   \
    \  kol
     \
      ● Nokta 2
      |__________
                 [Etiket Metni]
```

İlk tıklanan noktaya **ok** eklenir. Enter'dan önceki son nokta, metin etiketinin bağlandığı yerdir.

## Komutun Dört Aşaması

1. **Birinci nokta aşaması** — okun yerleştirileceği yer.
2. **Sonraki noktalar aşaması** — gösterge kollarının oluşturulması. Metne geçmek için Enter tuşuna basın.
3. **Metin girişi aşaması** — etiket metnini yazın.
4. **Onay** — göstergeyi yerleştirmek için Enter tuşuna basın.

## Koordinat Girişi

Herhangi bir nokta aşamasında tıklamak yerine kesin konum girin:

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Onaylamak için **Enter** tuşuna basın.

## Açı Kilidi

Nokta girişi aşamalarında gösterge 45°'lik yakalama eksenlerini izler. İmleç yakın olduğunda 0°, 45°, 90°, 135°, … eksenlerine çekilir. Kilitlenen yön boyunca kesin yerleştirme için mesafeyi yazın ve **Enter** tuşuna basın.

## Metin Etiketini Düzenleme

Metin girişi aşamasında:

| Tuş | İşlem |
|-----|-------|
| Herhangi bir karakter | Etiket metnine ekler |
| `←` / `→` | İmleci metin içinde taşır |
| `Backspace` | İmlecin solundaki karakteri siler |
| `Delete` | İmlecin sağındaki karakteri siler |
| `Enter` | Metni onaylar ve göstergeyi yerleştirir |

## Otomatik Metin Yönü

Metin etiketi yönü son kolun konumuna göre otomatik belirlenir:

| Konum | Metin hizalaması |
|-------|-----------------|
| Kol sağa uzanıyor | Metin uç noktanın solunda |
| Kol sola uzanıyor | Metin uç noktanın sağında |

## Klavye Referansı — Nokta Aşamaları

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Koordinatı onaylar veya kol girişini bitirir (metne geçer) |
| `Escape` | İptal eder ve sıfırlar |

## Klavye Referansı — Metin Aşaması

| Tuş | İşlem |
|-----|-------|
| Herhangi bir karakter | Etiket metnine ekler |
| `←` / `→` | İmleci metin içinde taşır |
| `Backspace` | Solundaki karakteri siler |
| `Delete` | Sağındaki karakteri siler |
| `Enter` | Onaylar ve göstergeyi yerleştirir |
| `Escape` | Metin girişini iptal eder |

## Kolları Ekleme ve Kaldırma

Göstergeyi yerleştirdikten sonra kollarını değiştirebilirsiniz:

- **[Leader Add](./leader-add)** — mevcut göstergeye yeni kol ekler.
- **[Leader Remove](./leader-remove)** — göstergeden kol kaldırır (tek kol kalırsa gösterge silinir).
