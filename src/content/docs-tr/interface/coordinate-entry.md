---
title: "Koordinat girişi — kesin, göreli ve kutupsal noktaları yazın"
description: "Bir komut nokta istediğinde tıklamak yerine yazın: kesin konum için X,Y, son noktadan ölçmek için @X,Y ve kutupsal nokta için mesafe<açı. Rel düğmesi yazılan her noktayı göreli başlatır."
keywords: ["koordinat girişi CAD", "göreli koordinatlar CAD", "kutupsal koordinatlar CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Koordinat girişi

Bir komut nokta istediğinde — bir [Line](../../commands/line/) başlangıcı, bir [Rectangle](../../commands/rectangle/) köşesi, bir [Move](../../commands/move/) taban noktası ya da sürüklediğiniz bir tutamaç — tıklamak yerine yazabilirsiniz. Bir sayı yazmaya başlayın, terminal yazdığınızı gösterir; noktayı yerleştirmek için **Enter** veya **Space**'e basın.

## Bir noktayı yazmanın dört yolu

| Yazdığınız | Nokta |
|---|---|
| `100,50` | X 100, Y 50'de |
| `@100,50` | Son noktadan X'te 100, Y'de 50 ötede |
| `100<45` | Orijinden 100 uzakta, 45°'de |
| `@100<45` | Son noktadan 100 uzakta, 45°'de |

Açılar derece cinsindendir ve X ekseninden saat yönünün tersine ölçülür; yani `@50<90` 50 yukarı, `@50<180` 50 soladır. İki değer de negatif olabilir.

## Son nokta

`@`, herhangi bir komutta tıklanan veya yazılan son noktadan ölçer — önceki komutun son tıklaması da, az önce sürüklediğiniz bir tutamaç da sayılır. Henüz son nokta yoksa `@100,50`, `100,50` olarak okunur. Son nokta, model alanı ile bir yerleşim arasında geçtiğinizde ve bir çizim açıldığında unutulur.

## Rel: varsayılan olarak göreli

Kontrol çubuğundaki **Rel** düğmesi yazılan her noktayı göreli başlatır: ilk rakamı yazdığınız anda önüne bir `@` gelir, böylece `100,50` `@100,50` olur. O noktayı mutlak yapmak için `@` üzerinde **Backspace**'e basın. Henüz son nokta yoksa `@` eklenmez. Rel varsayılan olarak kapalıdır ve kontrol çubuğunun diğer düğmeleriyle birlikte hatırlanır.

## Yazarken tuşlar

| Tuş | Etki |
|---|---|
| `0`–`9`, `.`, `-` | Sayıyı yazın; `-` yalnızca başında |
| `@` | Noktayı göreli yapın, X'in başında |
| `,` veya **Space** | X'i bitirip Y'ye geçin |
| `<` | X'i mesafe olarak bitirip açısına geçin |
| **Enter** veya **Space** | Y bir değer aldığında noktayı yerleştirin |
| **←** **→** **Home** **End** | İmleci yazılan değer içinde taşıyın |
| **Backspace** | İmlecin önünü silin; boş bir Y'nin başında X'e dönün |

Sayı olarak okunamayan bir nokta, düzeltmeniz için terminalde kalır. Yazılan her nokta, terminal geçmişinde yazdığınız haliyle bir satır bırakır — `Girildi: @100<45` — ve ardından komutun noktanın nereye düştüğünü gösteren satırı gelir.

## Yazılan noktalar ve açı izleme

İmleç bir açı izleme ışınına kilitliyken bir sayı yazmak, X yerine o ışın boyunca bir mesafe verir. Önce `@` yazarsanız tam bir nokta başlar; böylece `@100,50` kilitli bir ışında da çalışır.

---

*İlgili: kilitli bir yön boyunca uzunluk yazmak için [Mesafe takibi](../distance-tracking/) ve sabitlenmiş bir noktadan ölçmek için [Vector Pins](../vector-pins/).*
