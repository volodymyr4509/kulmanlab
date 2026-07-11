---
title: Leader Komutu — KulmanLab CAD'de Ok Ucu ve Metinli Çoklu Gösterge Çizgileri Çiz
description: "Leader komutu, dört aşamalı çoklu gösterge ek açıklaması çizer: ok ucu, dirsek, metin konumu ve yazılan etiket. Metin yönü, dirsek konumuna göre otomatik ayarlanır. DXF'de yalnızca içe aktarım — göstergeler kaydedilmez."
keywords: [CAD leader komutu, çoklu gösterge ek açıklaması, gösterge CAD, ok etiket ek açıklaması, dirsekli gösterge, metin yönü CAD, kulmanlab]
group: markup
order: 1
---

# Leader

`leader` komutu, dört adımda çoklu gösterge ek açıklaması çizer: bir özelliğe dokunan ok ucu, dirseğe bükülen gösterge çizgisi, metin çıpası ve yazılan etiket. Tüm ek açıklama komutları arasında, Leader, yanıp sönen imleç önizlemesiyle etkileşimli metin girişi aşaması içeren tek komuttur.

## Çoklu Göstergenin Anatomisi

```
  ◄── ok ucu  (adım 2 — özelliğe dokunur)
      \
       \  gösterge çizgisi
        \
         ●──── dirsek (adım 3) ──── metin çıpası (adım 4)
                                    Etiket metni  (adım 5)
```

- **Ok ucu** — ek açıklama yapılan özelliğe yerleştirilen sivri uç.
- **Dirsek** — gösterge çizgisinin metne doğru büküldüğü yön değişim noktası.
- **Metin çıpası** — etiketin konumlandırıldığı yer. Metin otomatik olarak sola veya sağa hizalanır.

## Gösterge Çizimi

1. Terminale `leader` yazın veya araç çubuğundaki **Leader** düğmesine tıklayın.
2. **Ok ucunu tıklayın** veya tam koordinat için `X,Y` yazıp **Enter** tuşuna basın.
3. **Dirseği tıklayın** — göstergadaki bükülme noktası. Açı 45° artışlara kilitlenir; kesin yerleştirme için bir uzunluk yazıp **Enter** tuşuna basın. Ya da mutlak koordinat girmek için `X,Y` yazın.
4. **Metin konumunu tıklayın** — etiketin çıpalanacağı yer. Aynı seçenekler geçerlidir: tıklayın, açı kilidi + uzunluk veya `X,Y`.
5. **Etiket metnini yazın** — tuval önizlemesi yanıp sönen imleçle canlı güncellenir. Yerleştirmek için **Enter** tuşuna basın.

## Koordinat Girişi (tüm nokta aşamaları)

Herhangi bir nokta seçim adımında (uç, dirsek, metin konumu) tıklamak yerine tam koordinat yazabilirsiniz:

1. X değerini yazın (rakamlar, `.` veya `-`).
2. `,` tuşuna basın — terminal, X'in kilitlendiğini onaylayan `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Noktayı yerleştirmek için **Enter** tuşuna basın.

## Açı Kilitleme (adım 3 ve 4)

Yerleştirilen her noktanın ardından, imleç yeterince uzakta olduğunda komut 45° eksenlerine yakalanır. Kilitliyken:
- Önizleme eksene yakalanır.
- Bir uzunluk yazıp **Enter** tuşuna basarak bir sonraki noktayı tam o mesafeye yerleştirin.

Açı kilitleme ve koordinat girişi birbirini dışlar — önce `,` olmadan bir rakam yazdığınızda, komut bunu mesafe olarak yorumlar (açı kilidi etkin olmalıdır). Bunun yerine mutlak koordinat girmek için X numarasıyla başlayıp virgülle devam edin.

## Metin Etiketi Düzenleme

Adım 5'te etiketi yazarken, yerleştirmeden önce metni gezinebilir ve düzenleyebilirsiniz:

| Tuş | İşlem |
|-----|--------|
| Herhangi bir yazdırılabilir karakter | İmleç konumuna ekler |
| `←` / `→` | İmleci sola veya sağa taşır |
| `Backspace` | İmlecin solundaki karakteri siler |
| `Delete` | İmlecin sağındaki karakteri siler |
| `Enter` | Göstergeyi yerleştirir |

## Otomatik Metin Yönü

Metin hizalaması, dirseğe göre imleç konumuna göre ayarlanır:

| İmleç konumu | Metin yönü |
|-----------------|---------------|
| Dirseğin **sağında** | Metin çıpasından soldan sağa |
| Dirseğin **solunda** | Sağdan sola (sağ taraftan çıpalı) |

El ile ayarlama gerekmez — imleci etiketin istediğiniz tarafa getirin ve otomatik olarak doğru hizalanır.

## Klavye Referansı

**Nokta aşamaları (uç, dirsek, metin konumu)**

| Tuş | İşlem |
|-----|--------|
| `0`–`9`, `.`, `-` | X koordinatı yazmaya başlar (ardından `,` ile X'i kilitle ve Y'ye geç) |
| `,` | X'i onaylar ve Y girişine geçer |
| `0`–`9`, `.`, `-` | Açı kilitliyken mesafe yazar |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Yazılan koordinatı veya mesafeyi onaylar |

**Metin girişi aşaması**

| Tuş | İşlem |
|-----|--------|
| Yazdırılabilir karakter | İmlece ekler |
| `←` / `→` | İmleci taşır |
| `Backspace` | Solu siler |
| `Delete` | Sağı siler |
| `Enter` | Göstergeyi yerleştirir |

| Tuş | İşlem |
|-----|--------|
| `Escape` | İptal eder ve adım 2'ye sıfırlar |

## Mevcut Göstergeyi Düzenleme

Yerleştirilen göstergeye **çift tıklayarak** metin düzenleyiciyi **rich** modda yeniden açın. Rich modda kalın, italik ve karakter başına yazı tipi veya yükseklik geçersiz kılmaları uygulayabilir, `Enter` ile satır sonları ekleyebilirsiniz. Kaydetmek ve kapatmak için **Escape** tuşuna basın.

Tam referans için [Metin Düzenleyici — rich mode](../../interface/text-editor/#rich-mode) sayfasına bakın.

## Kolları Ekleme ve Kaldırma

- Mevcut göstergeye ekstra ok kolu eklemek için: [Leader+](../leader-add/)
- İki veya daha fazla kolu olan göstergeden kol kaldırmak için: [Leader−](../leader-remove/)

## DXF — yalnızca içe aktarım

**Göstergeler yalnızca içe aktarım içindir.** DXF dosyalarındaki `MLEADER` nesneleri doğru şekilde okunur ve görüntülenir, ancak düzenleyicide çizilen göstergeler DXF dosyası kaydedilirken **yazılmaz**. Görsel ek açıklama için göstergeler kullanın; round-trip iş akışları için bunlara güvenmeyin.
