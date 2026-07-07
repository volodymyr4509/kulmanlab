---
sidebar_position: 34
title: Area Komutu — KulmanLab CAD'de Bir Çokgenin Alanını ve Çevresini Ölç
description: Area komutu, 3 veya daha fazla tıklanan noktayla tanımlanan bir çokgenin kapladığı alanı ve çevresini, ayakkabı bağı (shoelace) formülünü kullanarak ölçer. Açı kilitli yönlü giriş ve sonucun tuval üzerinde kalıcı vurgulanmasını destekler.
keywords: [CAD alan ölç, area komutu, çokgen alanı hesapla, çevre ölçümü, ayakkabı bağı formülü, kulmanlab CAD ölçümü]
---

# Area

`area` komutu, üç veya daha fazla tıklanan noktayla tanımlanan bir çokgenin kapladığı alanı ve çevresini ölçer ve her iki sonucu da terminalde 4 ondalık basamak hassasiyetle yazdırır. Bu, [Distance](../distance/) (düz çizgi uzunluğu) ve [Angle](../angle/) (köşedeki iç açı) ile birlikte üçüncü ölçüm komutudur.

## Alan Ölçümünün Anatomisi

```
  ● birinci nokta
   \
    \
     ● ikinci nokta
      \
       \             (kesikli) kapanış kenarı önizlemesi
        ●───────────────┐
      üçüncü nokta      │  (kesikli) imlece giden sonraki kenar önizlemesi
                        ✕ imleç  →  terminal: "Area: 12.3456  Perimeter: 45.6789"
```

- **Köşe noktaları** — tıklanan (veya yazılan) her nokta çokgenin bir köşe noktası olur; onaylanan kenarlar düz çizgiyle çizilir ve iç kısım yarı saydam bir vurguyla doldurulur.
- **Önizleme kenarları** — kesikli çizgiler, son köşe noktasından imlece giden bekleyen kenarı ve imleçten birinci köşe noktasına dönen kapanış kenarını gösterir.
- **Kapanış kenarı** — birinci noktaya asla tekrar tıklamazsınız; Enter tuşuna basmak çokgeni otomatik olarak kapatır.

## Alan Ölçme

1. Terminale `area` yazın veya araç çubuğundaki **Area** düğmesine (Measure panelinin alt satırı) tıklayın.
2. **Birinci noktayı tıklayın** veya tam koordinat için `X,Y` yazıp **Enter** tuşuna basın.
3. Şeklin etrafında sırayla **her ek köşe noktasını** tıklayın. Koordinat girişi her adımda çalışır.
4. En az **3 nokta** yerleştirildikten sonra, çokgeni kapatıp sonucu hesaplamak için **Enter** tuşuna basın (bekleyen bir koordinat veya uzunluk girişi olmadan).
5. Terminal `Area: <değer>  Perimeter: <değer>` yazdırır ve kapalı çokgen — dolgu, kontur ve köşe noktası tutamaçları — tuval üzerinde vurgulu kalır.
6. Sonucu kapatıp komutu sonlandırmak için **herhangi bir yere tıklayın, herhangi bir tuşa basın veya `Escape` tuşuna basın**.

## Açı Kilidi ve Tam Mesafe

Birinci köşe noktası yerleştirildikten sonra, yapılandırılmış açı izleme artışlarından (10°, 15°, 20°, 30°, 45° veya 90°, araç çubuğundaki açılır menüden ayarlanabilir) birine doğru hareket etmek sonraki kenarı o yöne kilitler:

- Kenar önizlemesi kilitli yöne yapışır ve dayanak köşe noktasında bir açı izleme göstergesi çizilir.
- Bir uzunluk yazıp **Enter** tuşuna basarak sonraki köşe noktasını kilitli yön boyunca tam olarak o mesafeye yerleştirin.
- Kilitliyken (uzunluk yazılmadan) tıklamak, köşe noktasını imlecin kilitli yön üzerindeki izdüşümüne yerleştirir.

| Tuş | İşlem |
|-----|--------|
| `0`–`9`, `.` | Kenar uzunluğu değerine ekler |
| `-` | Negatif uzunluk (yalnızca ilk karakter olarak) |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Sonraki köşe noktasını yazılan uzunlukta yerleştirir |

## Çokgeni Kapatma

- Enter, şekli yalnızca **3 veya daha fazla** köşe noktası yerleştirildikten sonra kapatır — daha azında hiçbir etkisi yoktur.
- Son köşe noktasından birinciye dönen kenar otomatik olarak eklenir ve hem alana hem de çevreye dahil edilir.
- Noktalar herhangi bir sırada yerleştirilebilir (saat yönünde veya tersi) — sonuç aynıdır.

## Area - Distance - Angle Karşılaştırması

| | Area | Distance | Angle |
|---|------|---------|-------|
| Ne ölçer | Bir çokgenin alanı ve çevresi | Düz çizgi uzunluğu | Köşedeki iç açı |
| Tıklama sayısı | 3 veya daha fazla, Enter ile kapatılır | 2 | 3 |
| Sonuç biçimi | `12.3456  Perimeter: 45.6789` | `12.3456` (birim) | `45.0000°` |
| Tuval önizlemesi | Kesikli kapanış kenarlı dolgulu çokgen | Birinci noktadan imlece giden çizgi | Köşeden imlece giden iki çizgi |
| Sonuçtan sonra | Herhangi bir girişle kapanır, ardından komut sonlanır | Tıklama yeni bir ölçümü zincirler | Tıklama yeni bir ölçümü zincirler |
| En iyi | Kapalı bölgeler, oda veya panel alanı | Boşluk veya segment uzunluğu | İki özellik arasındaki açılma açısı |

## Koordinat Girişi

Tıklamak yerine herhangi bir köşe noktası için tam konumu yazın:

1. X değerini yazın.
2. `,` tuşuna basın — terminal `[X], [Y{imleç}]` gösterir.
3. Y değerini yazın.
4. Onaylamak için **Enter** tuşuna basın.

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `0`–`9`, `.`, `-` | X koordinatı girişini, veya açı kilidi aktifken kenar uzunluğu girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Yazılan koordinatı veya uzunluğu onaylar; 3+ köşe noktası ve bekleyen giriş yokken çokgeni kapatır |
| `Escape` | Köşe noktaları seçilirken: noktaları iptal eder ve birinci noktadan yeniden başlar; sonuç gösterildikten sonra: kapatır ve komutu sonlandırır |

## Notlar

- Alan, [ayakkabı bağı (shoelace) formülü](https://tr.wikipedia.org/wiki/Ayakkab%C4%B1_ba%C4%9F%C4%B1_form%C3%BCl%C3%BC) ile hesaplanır ve tıklama sırasından bağımsız olarak her zaman pozitif bir değer olarak bildirilir.
- Kendini kesen çokgenler (kesişen kenarlar) yine de sayısal bir sonuç üretir, ancak değer görsel olarak kaplanan bölgeyle eşleşmeyebilir — anlamlı bir alan için kesişmeyen bir tıklama sırası koruyun.
- Sonuçlar yalnızca **terminalde ve tuval üzerinde geçici bir vurgu olarak** gösterilir — çizime kalıcı hiçbir şey eklenmez.
- Distance ve Angle'ın aksine, Area yeni bir ölçümü otomatik olarak **zincirlemez** — sonucu kapattıktan sonra başka bir çokgen ölçmek için `area` komutunu tekrar çalıştırın.
- Hassasiyet, hem alan hem de çevre için her zaman 4 ondalık basamaktır, çizim koordinatlarıyla aynı birimde (birim dönüşümü yoktur).
