---
title: Redo Komutu — KulmanLab CAD'de Geri Alınan İşlemleri Yeniden Uygula
description: Redo komutu, Undo tarafından tersine çevrilen son işlemi yeniden uygulayarak geçmiş yığınında ileri gider. Redo yalnızca Undo sonrasında kullanılabilir ve herhangi yeni bir çizim işlemi gerçekleştirildiği anda temizlenir.
keywords: [CAD redo komutu, redo geçmişi CAD, işlemi yeniden uygula CAD, undo redo CAD, tarayıcı kalıcı redo, kulmanlab]
group: edit
order: 14
---

# Redo

`redo` komutu, [Undo](../undo/) tarafından tersine çevrilen işlemleri yeniden uygulayarak geri alma geçmişinde ileri gider. Redo yalnızca Undo ile geri adım attığınızda ve henüz yeni bir değişiklik yapmadığınızda kullanılabilir.

## Nasıl Yinelenir

- Terminale `redo` yazın, veya
- **Redo** araç çubuğu düğmesine tıklayın.

Her çağrı, daha önce geri alınan bir işlemi yeniden uygular. Mevcut tüm redo girişlerinde ileri adım atmak için tekrar tekrar çağırın.

## Redo Yığını Davranışı

| Ayrıntı | Davranış |
|--------|-----------|
| Şundan sonra kullanılabilir | Bir veya daha fazla [Undo](../undo/) adımı |
| Şunun tarafından temizlenir | **Herhangi bir yeni çizim işlemi** — nesne ekleme, düzenleme veya silme |
| Depolama | Tarayıcı, dosya başına — sayfa yeniden yüklenmesini atlatır (yeniden yüklemeden önce yeni bir işlem yapılmamışsa) |
| Maksimum derinlik | En fazla 20 giriş (Undo ile aynı havuz) |

Yeni bir nesne çizildiğinde, silindiğinde veya değiştirildiğinde redo yığını temizlenir ve bu girişler kurtarılamaz. Yalnızca yeni çalışmayla geçersiz kılınmamış geri alınan işlemler yeniden uygulanabilir.

## Redo - Undo Karşılaştırması

| | Redo | Undo |
|---|------|------|
| Yön | Geri alınan girişlerde **ileri** adım atar | Geçmişte **geri** adım atar |
| Kullanılabildiğinde | En az bir Undo sonrasında, yeni işlem yapılmadan | En az bir kayıtlı işlem mevcutsa |
| Şunun tarafından temizlenir | Herhangi bir yeni çizim işlemi | Hiçbir şey |

Yinelenecek giriş yokken araç çubuğu Redo düğmesi grileşir. Redo girişleri oluşturmak için önce [Undo](../undo/) kullanın.
