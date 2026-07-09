---
sidebar_position: 17
title: Align Komutu — KulmanLab CAD'de Nokta Çiftleriyle Taşı, Döndür ve Ölçekle
description: Align komutu, bir veya iki kaynak/hedef nokta çifti kullanarak seçili nesneleri yeniden konumlandırır — taşıma, döndürme ve isteğe bağlı tek biçimli ölçeklemeyi tek işlemde birleştirir. Birleştirilmiş bir Move + Rotate + Scale gibi çalışır.
keywords: [CAD align komutu, nesneleri hizala CAD, taşıma döndürme ölçekleme, nokta çifti hizalama, AutoCAD ALIGN karşılığı, kulmanlab]
---

# Align

`align` komutu, bir veya iki kaynak/hedef nokta çifti kullanarak seçili nesneleri yeniden konumlandırır. Tek çiftle tam olarak [Move](../move/) gibi davranır (yalnızca taşıma). İki çiftle, seçimi kaynaktan-kaynağa yönü hedeften-hedefe yönüyle eşleşecek şekilde de döndürür ve isteğe bağlı olarak kaynak segment uzunluğu hedef segment uzunluğuyla eşleşecek şekilde ölçekleyebilir — taşıma, döndürme ve ölçekleme tek bir işlemde.

## İki Başlatma Yöntemi

**Önce seç, sonra hizala** — nesneleri seçin, ardından etkinleştirin:

1. Tuvalde bir veya daha fazla nesne seçin.
2. Terminale `align` yazın veya araç çubuğundaki **Align** düğmesine basın.
3. **İlk kaynak noktayı (S1) tıklayın**, ardından **ilk hedef noktayı (D1) tıklayın**.
4. **İkinci kaynak noktayı (S2) tıklayın**, veya hemen yalnızca taşıma içeren bir hizalama uygulamak için **Enter** tuşuna basın.
5. **İkinci hedef noktayı (D2) tıklayın**.
6. Ölçekleme istemini yanıtlayın: ölçeklemek için **Y** tuşuna, orijinal boyutu korumak için **N** / **Enter** tuşuna basın.

**Etkinleştir, sonra seç** — seçim olmadan komutu başlatın:

1. `align` yazın veya araç çubuğu düğmesine basın.
2. **Nesneleri seçin** — tek tek nesneleri değiştirmek için tıklayın veya kutu seçimi için sürükleyin.
3. Seçimi onaylamak için **Enter** veya **Boşluk** tuşuna basın.
4. Yukarıdaki gibi S1 → D1 → S2 → D2 → ölçekleme istemiyle devam edin.

> Terminal, belirsizlik olmaması için yalnızca yeterli sayıda harfe ihtiyaç duyar — `al` yazıp **Enter** tuşuna basmak Align'ı doğrudan etkinleştirir, çünkü başka hiçbir komut adı bu iki harfle başlamaz.

## Bir Hizalamanın Anatomisi

```
  Kaynak noktalar (nesneler üzerinde):  Hedef noktalar:
  ● S1                                  ● D1
   \                                     \
    ● S2                                  ● D2

  Sonuç: seçim, S1'in D1'e gelmesi için taşınır, ardından S1→S2
  yönü D1→D2 yönüyle eşleşecek şekilde D1 etrafında döndürülür —
  ve ölçeklemeyi seçerseniz, |S1S2| |D1D2| olacak şekilde
  yeniden boyutlandırılır.
```

Her adımda imleci bir hayalet önizleme takip eder: D1 yerleştirilirken bir taşıma önizlemesi, ardından D2 konumlandırılırken kesikli bir döndürülmüş önizleme.

## Tek Nokta Hizalama (yalnızca taşıma)

D1 yerleştirildikten sonra, ikinci bir kaynak noktayı tıklamak yerine **Enter** tuşuna basın. Seçim, S1→D1 vektörü kadar taşınır — döndürme veya ölçekleme olmadan — S1'i temel nokta ve D1'i hedef olarak kullanan bir [Move](../move/) ile aynıdır.

## İki Nokta Hizalama (taşıma + döndürme + isteğe bağlı ölçekleme)

S2 ve D2'nin ikisi de yerleştirildiğinde:

- **Döndürme açısı** — hedef yönü (`D1 → D2`) ile kaynak yönü (`S1 → S2`) arasındaki fark.
- **Ölçekleme istemi** — `scale objects to alignment points? [Yes/No] <N>` görüntülenir, varsayılan olarak **No**:
  - `S1–S2` mesafesinin `D1–D2` mesafesi olması için seçimi D1 etrafında tek biçimli olarak da ölçeklemek üzere **Y** tuşuna basın.
  - Orijinal boyutu korumak için **N** veya **Enter** tuşuna basın — yalnızca taşıma ve döndürme uygulanır.

Ölçekleme isteminde bir tuşa basmak, hizalamayı hemen uygular — Evet veya Hayır seçtikten sonra ayrı bir onay adımı yoktur.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Enter` / `Boşluk` | Seçimi onaylar ve S1 aşamasına geçer |
| `Enter` (S2 adımında) | Döndürmeyi atlar — S1 ve D1 kullanarak yalnızca taşıma içeren bir hizalama uygular |
| `Y` | Hizalamayı ölçeklemeyle uygular |
| `N` / `Enter` (ölçekleme isteminde) | Hizalamayı ölçeklemeden uygular |
| `Escape` | Nokta seçerken: noktaları iptal eder ve seçim aşamasına döner; seçim yokken: komutu iptal eder |

## Komut Sırasında Nesne Seçimi

Komut seçim aşamasında başladığında:

| Yöntem | Davranış |
|--------|----------|
| **Tıklama** | İmlecin altındaki nesneyi seçim durumunu değiştirir |
| **Sağa sürükleme** (katı) | Tamamen çerçeve içindeki nesneleri ekler |
| **Sola sürükleme** (çapraz) | Çerçeve sınırını kesen nesneleri ekler |
| **Enter** / **Boşluk** | Seçimi onaylar ve S1 aşamasına geçer |

## Hizaladıktan Sonra

Hizalanan nesneler yeni konumlarında seçili kalır ve komut otomatik olarak sona erer — **Align**'ı tekrar çalıştırın veya yeniden seçmeden [Move](../move/), [Rotate](../rotate/) ya da [Scale](../scale/)'e geçin.

## Align - Move Karşılaştırması

| | Align | Move |
|---|-------|------|
| Nokta çiftleri | 1 (yalnızca taşıma) veya 2 (taşıma + döndürme + ölçekleme) | 1 (yalnızca taşıma) |
| Döndürme | Evet, ikinci bir nokta çiftiyle | Hayır |
| Ölçekleme | İkinci bir nokta çiftiyle isteğe bağlı | Hayır |
| En iyi | Referans noktaları kullanarak bir şekli diğerine oturtma | Basit yeniden konumlandırma |

## Desteklenen Nesneler

Align, Move, Rotate ve Scale tarafından desteklenen tüm nesne türleriyle çalışır — bu komutların kullandığı aynı `translate`, `rotate` ve `scale` işlemleri sırayla uygulanır, bu nedenle hiçbiri hariç tutulmaz.
