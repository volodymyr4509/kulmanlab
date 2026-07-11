---
title: Leader− Komutu — KulmanLab CAD'de Göstergeden Ok Kolu Kaldır
description: Leader− komutu, iki veya daha fazla kollu çok segmentli göstergeden bir ok kolunu kaldırır. Kaldırılacak kola imleci yaklaştırın — en yakın kol vurgulanır. Geçiş bölgesi, metin ve diğer tüm kollar korunur.
keywords: [CAD leader remove komutu, gösterge kolu kaldır CAD, MLEADER oku sil, kulmanlab]
group: markup
order: 3
---

# Leader−

`leader-` komutu, mevcut çok segmentli göstergeden bir ok kolunu kaldırır. Metin etiketi, geçiş bölgesi ve diğer tüm koller korunur — yalnızca seçilen kol kaldırılır. Tek kollu çok segmentli göstergenin bu kolu kaldırılamaz.

## Kol Kaldırma

1. Terminale `leader-` yazın.
2. İki veya daha fazla kollu **çok segmentli göstergeye tıklayın**. Tıklanan göstergenin yalnızca bir kolu varsa, terminal hata gösterir ve doğru seçimi bekler.
3. **İmleci kaldırmak istediğiniz kola yaklaştırın** — en yakın kol işaretleyiciyle vurgulanır.
4. **Tıklayın** ve o kolu kaldırın.

Kol kaldırılır ve komut aktif kalır — hemen başka bir göstergeye (veya aynısına) tıklayarak daha fazla kol kaldırabilirsiniz. Tamamlamak için **Enter**, **Boşluk** veya **Escape** tuşuna basın.

```
  Önce:                          Sonra:
  ◄── kol 1                  ◄── kol 1
       \                              \
        ●──── geçiş ──── metin       ●──── geçiş ──── metin
       /
  kol 2 ──►  ← bu kol kaldırıldı
```

## En Yakın Kolun Belirlenmesi

Komut, imlecten her kolun segmentlerine (son kol noktasından geçiş bölgesine olan segment dahil) dik mesafeyi ölçer. En küçük mesafeli kol vurgulanır ve tıklandığında kaldırılır.

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `Enter` / `Boşluk` | Kol kaldırmayı tamamlar |
| `Escape` | İptal eder ve sıfırlar |

## Notlar

- **Yalnızca tek kolu olan** gösterge korunur — kaldırmadan önce bir kol eklemeniz gerekir.
- Hangi kol kaldırılırsa kaldırılsın geçiş bölgesi konumu ve metin içeriği her zaman korunur.

## İlgili Komutlar

| Komut | Ne yapar |
|-------|----------|
| [Leader](../leader/) | Sıfırdan yeni gösterge oluşturur |
| [Leader+](../leader-add/) | Mevcut göstergeye kol ekler |
