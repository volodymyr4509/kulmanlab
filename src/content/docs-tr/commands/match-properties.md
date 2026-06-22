---
sidebar_position: 34
title: Match Properties Komutu — KulmanLab CAD'de Nesneler Arasında Özellik Kopyala
description: Match Properties komutu, renk, katman, çizgi türü ve türe özgü özellikleri kaynak nesneden hedeflere kopyalar. Araç çubuğundaki "fırça" düğmesiyle veya komutla etkinleştirin.
keywords: [CAD match properties komutu, özellikleri kopyala CAD, nesne stilini aktar, katman renk eşleştirme, kulmanlab]
---

# Match Properties

`match properties` komutu, bir kaynak nesneden bir veya daha fazla hedef nesneye özellikleri (renk, katman, çizgi türü, çizgi türü ölçeği ve türe özgü özellikler) kopyalar. Metin programlarındaki "biçim boyacısı"na benzer.

## Etkinleştirme

Araç çubuğundaki **fırça** simgesine tıklayın veya terminale `match properties` yazın.

## İki Hedef Seçme Yöntemi

**Önce etkinleştir, sonra seç** — en esnek yöntem:

1. `match properties` yazın veya fırça düğmesine tıklayın.
2. **Kaynak nesneyi tıklayın** — özelliklerini kopyalamak istediğiniz nesne.
3. **Hedef nesneleri tıklayın** — tıklanan her nesne kaynak özelliklerini alır. Birden fazla hedef için **seçim çerçevesi sürükleyebilirsiniz**.
4. Tamamlamak için **Escape** tuşuna basın.

**Hedefleri önceden seçme**:

1. Komutu başlatmadan önce **hedef nesneleri seçin**.
2. `match properties` yazın — komut yalnızca kaynak ister.
3. **Kaynak nesneyi tıklayın** — özellikler uygulanır ve komut tamamlanır.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Escape` | Komutu tamamlar |

## Hangi Özellikler Kopyalanır

| Özellik | Kopyalanır mı? |
|---------|---------------|
| Renk | Evet |
| Katman | Evet |
| Çizgi türü | Evet |
| Çizgi türü ölçeği | Evet |
| Türe özgü (örneğin metin boyutu) | Evet |
| Geometri (şekil, boyut, konum) | Hayır |

## Davranış Ayrıntıları

- Kaynak nesne **değişmez**.
- Komut aktif kalır — birden fazla hedefi arka arkaya tıklayabilirsiniz.
- Hedef ve kaynak aynı türdeyse (örneğin iki daire), türe özgü özellikler de kopyalanır.

## İlgili Komutlar

- [Layer Match](./layer-match) — yalnızca katmanı kopyalar
- [Layer Isolate](./layer-isolate) — seçime göre katmanları izole eder
