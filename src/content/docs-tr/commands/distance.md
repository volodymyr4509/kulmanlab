---
sidebar_position: 32
title: Distance Komutu — KulmanLab CAD'de İki Nokta Arasındaki Mesafeyi Ölç
description: Distance komutu, iki tıklanan nokta arasındaki mesafeyi ölçer ve sonucu terminalde 4 ondalık basamak hassasiyetle görüntüler. Zincir ölçümü ve koordinat girişini destekler.
keywords: [CAD distance komutu, mesafe ölç CAD, uzunluk ölçümü, koordinat mesafesi, kulmanlab]
---

# Distance

`distance` komutu, terminalde görüntülenen iki nokta arasındaki mesafeyi ölçer. Tuvalde hiçbir nesne oluşturulmaz — yalnızca okuma.

## Ölçüm Anatomisi

```
  ● Nokta 1 ←——————————→ ● Nokta 2
                d = ?
```

Mesafe, iki tıklanan nokta arasındaki Öklid uzaklığıdır.

## Zincir Ölçümü

İlk ölçümden sonra (Nokta 1 → Nokta 2) komut aktif kalır ve sonraki tıklamayı bekler. Bu tıklama yeni **Nokta 2** olur (önceki Nokta 2 yeni Nokta 1 olur). Bu, kırık bir yol boyunca mesafeleri ölçmeye olanak tanır:

```
  ● N1 →d1→ ● N2 →d2→ ● N3
```

Her mesafe d1, d2, … terminalde ayrı ayrı görüntülenir.

Zincir ölçümünü tamamlamak için `Escape` tuşuna basın.

## Distance - Angle Karşılaştırması

| | Distance | Angle |
|---|----------|-------|
| Nokta sayısı | 2 | 3 (zirve + 2) |
| Ölçer | Noktalar arası uzunluk | Yönler arasındaki iç açı |
| Sonuç | Çizim birimlerinde tek sayı | Derece cinsinden tek sayı |

## Koordinat Girişi

Herhangi bir nokta girişi adımında tıklamak yerine kesin konum girin:

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Onaylamak için **Enter** tuşuna basın.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Koordinatı onaylar |
| `Escape` | İptal eder ve sıfırlar |

## Notlar

- Sonuçlar **yalnızca terminalde** görüntülenir — tuvalde hiçbir nesne oluşturulmaz.
- Hassasiyet: **4 ondalık basamak**.
- Birimler çizim birimleriyle eşleşir (yerleşik birim dönüşümü yoktur).
