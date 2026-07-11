---
title: Mirror Komutu — KulmanLab CAD'de Nesneleri Eksen Boyunca Aynala
description: Mirror komutu, seçili nesnelerin iki nokta tarafından tanımlanan bir eksen boyunca ayna görüntülerini oluşturur. Orijinaller her zaman korunur — Mirror yalnızca yeni yansıtılmış kopyalar ekler. Ayna ekseni herhangi bir açıda olabilir ve 45° katlarına yapışır.
keywords: [CAD mirror komutu, ayna yansıması CAD, nesne simetrisi CAD, nesneleri yansıt, ayna ekseni CAD, kulmanlab]
group: edit
order: 4
---

# Mirror

`mirror` komutu, seçili nesnelerin iki nokta tarafından tanımlanan eksen boyunca ayna görüntülerini oluşturur. Orijinaller **her zaman korunur** — [Move](../move/) veya [Rotate](../rotate/) komutlarının aksine, Mirror mevcut nesneleri değiştirmez; yalnızca yenilerini ekler.

## İki Başlatma Yöntemi

**Önce seç, sonra aynala** — nesneleri seçin, ardından etkinleştirin:

1. Tuvalde bir veya daha fazla nesne seçin.
2. Terminale `mirror` yazın veya araç çubuğundaki **Mirror** düğmesine basın.
3. **Ayna ekseninin birinci noktasını tıklayın** veya kesin koordinat için `X,Y` yazıp **Enter** tuşuna basın.
4. **İkinci noktayı tıklayın** — ayna kopyalar yerleştirilir ve komut tamamlanır. Burada koordinat girişi de çalışır.

**Etkinleştir, sonra seç** — seçim olmadan komutu başlatın:

1. `mirror` yazın veya araç çubuğu düğmesine basın.
2. **Nesneleri seçin** — değiştirmek için tıklayın veya kutu seçimi için sürükleyin.
3. Seçimi onaylamak için **Enter** veya **Boşluk** tuşuna basın.
4. **Birinci noktayı tıklayın**, ardından **ayna ekseninin ikinci noktasını tıklayın** (her iki adımda koordinat girişi kullanılabilir).

```
  Orijinal:         Eksen:       Sonuç:
                    |
  [nesne A]   →   |   →   [nesne A] + [ayna A]
                    |
```

Ayna kopyalarının canlı önizlemesi, eksenin ikinci noktasını konumlandırırken imleci takip eder.

## Ayna Ekseni

Eksen, iki tıklanan noktadan geçen sonsuz düz çizgidir. Herhangi bir açıda olabilir:

- İmleci **45°'lik yakalama eksenine** (0°, 45°, 90°, 135°, …) yaklaştırın — eksen o açıya kilitlenir, temiz yatay, dikey veya köşegen yansımalar için kullanışlıdır.
- Yakalama alanının dışına tıklayarak isteğe bağlı açıda eksen oluşturun.

## Koordinat Girişi

Herhangi bir eksen nokta girişi adımında tıklamak yerine kesin konum girin:

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Onaylamak için **Enter** tuşuna basın.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Enter` / `Boşluk` | Seçimi onaylar |
| `0`–`9`, `.`, `-` | X koordinatı girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Girilen koordinatı onaylar |
| `Escape` | İptal eder ve sıfırlar |

## Komut Sırasında Nesne Seçimi

| Yöntem | Davranış |
|--------|----------|
| **Tıklama** | İmlecin altındaki nesneyi değiştirir |
| **Sağa sürükleme** (katı) | Tamamen çerçeve içindeki nesneleri ekler |
| **Sola sürükleme** (çapraz) | Çerçeve sınırını kesen nesneleri ekler |
| **Enter** / **Boşluk** | Seçimi onaylar |

## Ne Yansıtılır

Tüm nesne türleri desteklenir. Geometri eksene göre matematiksel olarak yansıtılır:

| Nesne | Ne değişir |
|-------|-----------|
| Çizgi | Her iki uç nokta yansıtılır |
| Daire | Merkez yansıtılır; yarıçap değişmez |
| Yay | Merkez yansıtılır; başlangıç ve bitiş açıları eksene göre yeniden hesaplanır |
| Elips | Merkez yansıtılır; ana eksen yönü eksene göre yansıtılır |
| Çoklu çizgi / Dikdörtgen | Her köşe yansıtılır |
| Metin | Ekleme noktası yansıtılır; metin dizisi **ters çevrilmez** |
| Spline | Tüm kontrol köşeleri / uyum noktaları yansıtılır |

## Mirror - Copy Karşılaştırması

| | Mirror | Copy |
|---|--------|------|
| Orijinaller | Her zaman korunur | Her zaman korunur |
| Yeni nesnelerin konumu | Eksene göre yansıtılmış | Taşıma vektörüne göre kaydırılmış |
| En iyi | Simetrik parçalar, çift taraflı özellikler | Herhangi bir yönde geometriyi çoğaltma |
