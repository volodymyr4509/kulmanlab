---
sidebar_position: 34
title: Match Properties — KulmanLab CAD'de Nesne Özelliklerini Kopyala
description: MatchProperties komutu, renk, katman ve diğer paylaşılan özellikleri kaynak nesneden bir veya daha fazla hedef nesneye kopyalar. Masaüstü CAD araçlarıyla aynı şekilde özellikleri eşleştirir.
keywords: [match properties CAD, nesne özelliklerini kopyala, MATCHPROP, katman renk eşleştir, özellikleri aktar, kulmanlab match properties, özellikleri boyayı, katman kopyala CAD]
---

# Match Properties

`MatchProperties` komutu, **görsel ve katman özelliklerini** kaynak nesneden bir veya daha fazla hedef nesneye kopyalar. Yalnızca kaynak ve hedef nesne türleri arasında paylaşılan özellikler aktarılır — geometri hiçbir zaman değiştirilmez.

## Nasıl Etkinleştirilir

Stil panelindeki **Match Properties** araç çubuğu düğmesine (boya rulosu simgesi) tıklayın veya terminale `MatchProperties` yazın.

## İş Akışı

**Önce etkinleştir, sonra kaynak seç:**

1. Hiçbir şey önceden seçilmemişken `MatchProperties` yazın veya araç çubuğu düğmesine tıklayın.
2. **Kaynak nesneyi tıklayın** — özelliklerini kopyalamak istediğiniz nesne.
3. Kaynak özelliklerini uygulamak için **her hedef nesneyi tıklayın**. Nesneleri teker teker tıklayabilirsiniz.
4. Aynı anda bir gruba uygulamak için hedeflerin üzerine **seçim çerçevesi sürükleyin**.
5. Bitirmek için **Enter** veya **Escape** tuşuna basın.

**Kaynağı önceden seç, sonra etkinleştir:**

1. Tek bir nesneyi seçmek için tıklayın.
2. `MatchProperties`'i etkinleştirin. Seçilen nesne otomatik olarak kaynak olarak kullanılır.
3. Hedef nesneleri tıklayın veya sürükleyerek seçin, ardından bitirmek için **Enter** veya **Escape** tuşuna basın.

## Hangi Özellikler Kopyalanır

MatchProperties, kaynak ile hedef arasındaki paylaşılan temel sınıfa ait özellikleri kopyalar. En azından **tüm nesne türleri** şu özellikleri paylaşır:

| Özellik | Açıklama |
|----------|-------------|
| **Renk** | Nesnenin renk dizini ("Katmana Göre" / "Bloğa Göre" dahil) |
| **Katman** | Nesnenin ait olduğu katman |

Kaynak ve hedef aynı nesne türündeyse (örneğin her ikisi de ölçü), türe özgü ek özellikler de kopyalanır — örneğin metin yüksekliği, ok boyutu, uzatma çizgisi ayarları.

Geometri (koordinatlar, yarıçap, uzunluk vb.) hiçbir zaman etkilenmez.

## Klavye Referansı

| Tuş | İşlem |
|-----|--------|
| `Enter` / `Boşluk` | Alan seçimini onaylar veya komutu bitirir |
| `Escape` | Uygulamayı bitirir (kaynak ayarlanmışsa) veya iptal eder |

## Davranış Ayrıntıları

- Kaynak nesnenin kendisi hiçbir zaman değiştirilmez.
- Her tıklama veya sürükleyerek seçim kaynak özelliklerini anında uygular — onay adımı yoktur.
- Alan seçimi standart kuralları izler: **sağa** sürükleme katı seçim (tamamen içine alınmış), **sola** sürükleme çapraz seçim (herhangi bir kesişim).
- Kaynak nesneyi hedef olarak tıklamak yok sayılır.
- Metin içeren nesneler için (**Metin**, **Ölçüler**, **Çoklu Göstergeler**), yalnızca metin yüksekliği kopyalanır — yazı tipi, kalın, italik ve diğer metin stili ayarları eşleştirilmez.

## İlgili Komutlar

- [LayerMatch](../layer-match/) — seçili nesneleri kaynakla aynı katmana taşır (yalnızca katman özelliği)
- [LayerMakeCurrent](../layer-make-current/) — tıklanan nesneden mevcut çizim katmanını ayarlar
