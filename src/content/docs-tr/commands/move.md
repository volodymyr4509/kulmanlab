---
title: Move Komutu — KulmanLab CAD'de Seçili Nesneleri Temel Noktadan Taşı
description: Move komutu, bir veya daha fazla seçili nesneyi temel noktadan hedef noktaya taşır. Ön seçimi, açı kilidini ve kesin mesafe girişini destekler. Taşıma sonrasında nesneler yeni konumda seçili kalır.
keywords: [CAD move komutu, nesneleri taşı CAD, taşıma temel noktası, move açı kilidi, kesin mesafe move, kulmanlab]
group: edit
order: 1
---

# Move

`move` komutu, seçili nesneleri temel noktadan hedef noktaya taşır. Her seçili nesneye uygulanan kayma, temel noktadan hedef noktaya olan vektördür. Taşıma sonrasında tüm nesneler yeni konumda seçili kalır ve daha fazla düzenlemeye hazır olur.

## İki Başlatma Yöntemi

**Önce seç, sonra taşı** — nesneleri seçin, ardından etkinleştirin:

1. Tuvalde bir veya daha fazla nesne seçin.
2. Terminale `move` yazın veya araç çubuğundaki **Move** düğmesine basın.
3. **Temel noktayı tıklayın** veya kesin koordinat için `X,Y` yazıp **Enter** tuşuna basın.
4. **Hedef noktayı tıklayın** — tüm seçili nesneler temel→hedef vektörüne göre kayar. Burada koordinat girişi de çalışır.

**Etkinleştir, sonra seç** — seçim olmadan komutu başlatın:

1. `move` yazın veya araç çubuğu düğmesine basın.
2. **Nesneleri seçin** — tek tek nesneleri değiştirmek için tıklayın veya kutu seçimi için sürükleyin.
3. Seçimi onaylamak için **Enter** veya **Boşluk** tuşuna basın.
4. **Temel noktayı tıklayın**, ardından **hedef noktayı tıklayın** (her iki adımda koordinat girişi kullanılabilir).

```
  Önce:                      Sonra:
  ● temel                     → ● hedef
  [nesne A]                    [taşınan nesne A]
  [nesne B]                    [taşınan nesne B]
```

Tüm seçili nesnelerin önizleme hayaleti, temel noktadan hedef noktaya imleci takip eder ve tıklamadan önce sonucu gösterir.

## Koordinat Girişi

Temel nokta veya hedef nokta adımında tıklamak yerine kesin konum girin:

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Onaylamak için **Enter** tuşuna basın.

## Açı Kilidi ve Kesin Mesafe

Temel noktayı ayarladıktan sonra komut 45°'lik yakalama eksenlerini (0°, 45°, 90°, 135°, …) izler. Yön şu durumda **kilitlenir**: imleç tabanından yeterince uzakta ve eksen boyutunun bir tutamaç boyutu içindeyse. Kilitlendiğinde:

- Önizleme hayaleti eksene yapışır.
- Kesin mesafe boyunca taşımak için mesafeyi yazın ve **Enter** tuşuna basın.
- Tıklama eksene yansıtılır, bu nedenle hedef nokta her zaman tam olarak eksen üzerinde yer alır.

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.` | Mesafe değerine rakam ekler |
| `-` | Negatif mesafe — eksen boyunca yönü değiştirir (yalnızca ilk karakter) |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Girilen mesafeye taşımayı uygular |

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Enter` / `Boşluk` | Seçimi onaylar ve temel nokta aşamasına geçer |
| `0`–`9`, `.`, `-` | X koordinatı girişini veya açı kilitliyken mesafeyi başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Koordinatı onaylar veya girilen mesafeye taşımayı uygular |
| `Escape` | İptal eder ve sıfırlar |

## Tutamaç Üzerinden Move Etkinleştirme

Seçili [Çizgi](../line/)'nin **orta nokta tutamacına** tıklamak, orta nokta temel nokta olarak ve taşıma aşaması aktif olarak Move'u otomatik başlatır. Bu, seçim adımı olmadan tek bir çizgiyi yeniden konumlandırmanın en hızlı yoludur.

## Komut Sırasında Nesne Seçimi

Komut seçim aşamasında başladığında:

| Yöntem | Davranış |
|--------|----------|
| **Tıklama** | İmlecin altındaki nesneyi seçim durumunu değiştirir |
| **Sağa sürükleme** (katı) | Tamamen çerçeve içindeki nesneleri ekler |
| **Sola sürükleme** (çapraz) | Çerçeve sınırını kesen nesneleri ekler |
| **Enter** / **Boşluk** | Seçimi onaylar ve temel nokta aşamasına geçer |

## Taşıdıktan Sonra

Taşınan nesneler yeni konumlarında seçili kalır. Bu şu anlama gelir:
- İnce ayar için **Move**'u tekrar çalıştırabilirsiniz.
- Yeniden seçmeden [Copy](../copy/), [Rotate](../rotate/) veya [Scale](../scale/) çalıştırabilirsiniz.
- Silmek için **Delete** tuşuna basabilirsiniz.

## Move - Copy Karşılaştırması

| | Move | Copy |
|---|------|------|
| Orijinal konum | Boşaltıldı — nesneler artık orada değil | Korundu — orijinaller yerinde kalır |
| Sonuç sayısı | Aynı nesne sayısı | İşlem başına bir ekstra set |
| En iyi | Geometriyi yeniden konumlandırma | Geometriyi çoğaltma |

## Desteklenen Nesneler

Move tüm nesne türleriyle çalışır: Çizgi, Çoklu Çizgi, Dikdörtgen, Daire, Yay, Elips, Metin, Spline, Ölçüler, Göstergeler ve diğerleri.
