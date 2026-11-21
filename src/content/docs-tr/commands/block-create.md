---
title: "BlockCreate Komutu — Nesnelerden blok oluşturma"
description: "BlockCreate komutu, seçtiğiniz nesnelerden istediğiniz taban noktasıyla adlandırılmış bir blok oluşturur ve onları bloğa tek bir referansla değiştirir. Blok daha sonra BlockInsert ile defalarca yerleştirilebilir."
keywords: ["blok oluştur CAD", "nesnelerden blok CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

`BlokOluştur` komutu bir **blok** oluşturur: çizimde bir kez saklanan ve [Block Insert](../block-insert/) ile istediğiniz kadar yerleştirilen adlandırılmış bir nesne grubu. Seçtiğiniz nesneler blok olur ve çizimde onlara tek bir referans geçer; yani görünümde hiçbir şey değişmez.

## Blok oluşturma

1. İsterseniz önce nesneleri seçin, sonra `BlokOluştur` yazın veya **Bloklar** panelinde **Blok oluştur**'e tıklayın. Seçim zaten içinde olan bir pencere açılır.
2. Bir **Ad** yazın. Boş olamaz, `< > / \ " : ; ? * | , =` karakterlerinden veya ters tırnaktan hiçbirini içeremez ve başka bir bloğun adı olamaz.
3. Nesne eklemek ya da çıkarmak için **Nesneleri seç**'e tıklayın: pencere gizlenir, siz nesnelere tıklarsınız veya bir alan sürüklersiniz. Pencereye dönmek için **Enter** veya **Space**'e basın; **Nesneler** orada kaç nesne olduğunu gösterir.
4. Bloğun yerleştirildiği nokta olan **Taban noktası**'ni ayarlayın: X ve Y'sini yazın ya da **Nokta seç**'e ve ardından tuvale tıklayın (ya da orada X,Y yazın). 0,0'dan başlar.
5. **OK**'e tıklayın. Blok saklanır, nesneler taban noktasında ona bir referansa yer verir ve terminal bloğun adını ve kaç nesne içerdiğini kaydeder.

## Bilmekte yarar var

- Bir şey yanlışken **OK** devre dışı kalır ve alanların altındaki mesaj neyin yanlış olduğunu söyler: boş veya kullanılamaz bir ad, zaten kullanılan bir ad ya da nesne yok.
- Nesne veya taban noktası seçerken **Escape**, bloğu önceki haliyle pencereye döndürür. Penceredeyken **Escape** komutu iptal eder.
- Blok çizimle birlikte kaydedilir ve referanslarıyla birlikte DXF'e yazılır.

---

*İlgili: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
