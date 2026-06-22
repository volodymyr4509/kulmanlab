---
sidebar_position: 18
title: Offset Komutu — KulmanLab CAD'de Sabit Mesafede Paralel Kopya Oluştur
description: Offset komutu, bir Çizgi, Daire, Yay, Elips veya Çoklu Çizginin yazılan mesafede paralel kopyasını oluşturur. Mesafe bir kez girilir ve birden fazla ofset için yeniden kullanılır. Taraf tıklaması kopyanın hangi yönde görüneceğini belirler. Beş nesne türü desteklenir.
keywords: [CAD offset komutu, paralel kopya CAD, çizgiyi ofsetle CAD, daireyi ofsetle CAD, çoklu çizgiyi ofsetle CAD, eşmerkezli ofset, kulmanlab]
---

# Offset

`offset` komutu, sabit dik mesafede bir nesnenin paralel kopyasını oluşturur. Mesafeyi bir kez yazarsınız, ardından nesneleri tıklayıp taraf seçersiniz — komut, birden fazla nesneyi tek seferinde ofsete almanızı sağlamak için aynı mesafede hazır bekler.

Desteklenen nesne türleri: **Çizgi, Daire, Yay, Elips, Çoklu Çizgi** (Dikdörtgenler dahil).

## Offset Kullanımı

1. Terminale `offset` yazın veya araç çubuğundaki **Offset** düğmesine tıklayın.
2. **Ofset mesafesini yazın** ve **Enter** veya **Boşluk** tuşuna basın.
3. Ofset alınacak **nesneyi tıklayın** — nesne desteklenen bir tür değilse hata mesajı görünür ve farklı bir nesne tıklayabilirsiniz.
4. **İmleci** kopyanın görünmesi gereken tarafa hareket ettirin — canlı önizleme eşlik eder.
5. Ofset kopyasını yerleştirmek için **tıklayın**.

Her yerleştirmeden sonra komut, sonraki ofset için hazır olmak üzere **aynı mesafede** adım 3'e döner. Mesafe girişi adımına sıfırlamak için **Escape** tuşuna basın.

```
  Mesafe: 10

  ─────────────────    ← orijinal çizgi
  ─────────────────    ← ofset kopyası (10 birim aşağıda)
```

## Nesne Başına Ofset Davranışı

| Nesne | Ofset nasıl hesaplanır |
|--------|---------------------------|
| **Çizgi** | Orijinal yöne dik olarak kaydırılmış paralel çizgi |
| **Daire** | Eşmerkezli daire; dışına tıkla → daha büyük yarıçap, içine tıkla → daha küçük yarıçap |
| **Yay** | Yeni yarıçapta eşmerkezli yay; aynı açısal kapsam korunur |
| **Elips** | Her iki yarı eksen aynı mesafede artırılır veya azaltılır |
| **Çoklu Çizgi** | Her segment bağımsız olarak ofsete alınır; komşu ofset segmentler köşelerde gönye yapılır |

**Daire**, **Yay** ve **Elips** için: içe ofset herhangi bir yarıçapı veya yarı ekseni sıfıra veya altına düşürürse, ofset uygulanmaz.

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `0`–`9`, `.` | Mesafe değerine rakam ekler |
| `Backspace` | Son girilen karakteri siler |
| `Enter` / `Boşluk` | Yazılan mesafeyi onaylar ve nesne seçimine geçer |
| `Escape` | Mesafe girişi adımına sıfırlar |

## İş Akışı Notu

**Escape** tuşuna basana kadar mesafe ayarlanmış olarak kalır. Bu, birçok nesneyi aynı aralıkta ofsete almayı verimli kılar — mesafeyi bir kez yazın, ardından her nesne için tıklayıp taraf seçin.

## Offset - Copy Karşılaştırması

| | Offset | Copy |
|---|--------|------|
| Yer değiştirme | Nesnenin geometrisine dik | Keyfi vektör (temel → hedef) |
| Desteklenen nesneler | Çizgi, Daire, Yay, Elips, Çoklu Çizgi | Tüm nesne türleri |
| Mesafe girişi | Nesneyi seçmeden önce yazılır | Seçimden sonra yazılır veya tıklanır |
| En iyi | Paralel çizgiler, eşmerkezli daireler, içe/dışa yollar | Kopyaları keyfi konumlara yerleştirme |
