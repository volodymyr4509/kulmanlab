---
sidebar_position: 21
title: Undo Komutu — KulmanLab CAD'de Çizim Geçmişinde Geri Adım At
description: Undo komutu, son çizim işlemini seferinde bir adım tersine çevirir. Dosya başına en fazla 20 adım saklanır ve sayfa yeniden yüklemelerinde tarayıcıda kalıcı olarak tutulur. Geri alındıktan sonra yeni bir işlem yapmak redo yığınını temizler.
keywords: [CAD undo komutu, undo geçmişi CAD, işlemi tersine çevir CAD, undo adımları CAD, tarayıcı kalıcı undo, kulmanlab]
---

# Undo

`undo` komutu, çizimde yapılan son değişikliği tersine çevirir — çağrı başına bir adım. Nesnelerin her eklenmesi, silinmesi veya düzenlenmesi ayrı bir geçmiş girişi olarak kaydedilir. Undo, bu girişlerde ters sırayla geri adım atar.

## Nasıl Geri Alınır

- Terminale `undo` yazın, veya
- **Undo** araç çubuğu düğmesine tıklayın.

Her çağrı, kayıtlı bir işlemi tersine çevirir. Daha geri gitmek için tekrar tekrar çağırın.

## Geçmiş Davranışı

| Ayrıntı | Değer |
|--------|-------|
| Dosya başına adım | En fazla **20** |
| Depolama | Tarayıcı (IndexedDB / localStorage), dosya adı başına |
| Sayfa yeniden yüklemesini atlatır | Evet — dosyayı yeniden açtığınızda geçmiş geri yüklenir |
| Geri alındıktan sonra yeni işlem | Mevcut konumun ilerisindeki tüm redo girişlerini temizler |
| Dolu olduğunda en eski giriş | En yeni değişikliğe yer açmak için bırakılır |

Her nesne mutasyonu kaydedilir: yeni nesne çizme, nesne silme, uç noktaları tutamaçla düzenleme, Move, Rotate, Scale, Mirror, Trim, Extend ve Offset uygulama geçmiş girişleri oluşturur.

## Undo - Redo Karşılaştırması

| | Undo | Redo |
|---|------|------|
| Yön | Geçmişte **geri** adım atar | Geri alınan girişlerde **ileri** adım atar |
| Kullanılabildiğinde | En az bir kayıtlı işlem mevcutsa | En az bir Undo yapıldığında ve yeni işlem yapılmamışsa |
| Şunun tarafından temizlenir | Hiçbir şey — geçmiş 20 adım sınırına kadar birikir | Herhangi bir yeni çizim işlemi |

Geri alınan bir işlemi yeniden uygulamak için [Redo](./redo) kullanın. İlgili yön kullanılabilir olmadığında araç çubuğu düğmeleri grileşir.
