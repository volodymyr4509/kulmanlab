---
sidebar_position: 21
title: Undo Komutu — KulmanLab CAD'de Son İşlemi Geri Al
description: Undo komutu, son düzenleme işlemini geri alır ve çizimi önceki durumuna döndürür. Terminal veya Ctrl+Z tuş kombinasyonu aracılığıyla kullanılabilir.
keywords: [CAD undo komutu, işlemi geri al CAD, Ctrl+Z CAD, kulmanlab]
---

# Undo

`undo` komutu, son düzenleme işlemini geri alır. Her Undo çalıştırması düzenleme geçmişinde bir adım daha geriye gider.

## İşlemi Geri Alma

- Terminale `undo` yazın, veya
- **Ctrl+Z** (Windows/Linux) veya **Cmd+Z** (Mac) tuşlarına basın, veya
- Araç çubuğundaki **Undo** düğmesine basın.

## Neler Geri Alınabilir

- Nesneler çizme (Line, Polyline, Circle vb.)
- Nesneleri düzenleme (Move, Copy, Rotate, Delete vb.)
- Özellik değişiklikleri
- Katman değişiklikleri

## Sınırlamalar

Bazı işlemler geri alınamaz veya sınırlı geri alma desteğine sahiptir — örneğin [WipeStorage](./wipestorage) aracılığıyla depoyu temizleme.

## Undo - Redo Karşılaştırması

| | Undo | Redo |
|---|------|------|
| Yön | Zamanda geri | Zamanda ileri |
| Tuş | Ctrl+Z / Cmd+Z | Ctrl+Y / Cmd+Y |
| Geri alır | Son yapılan işlemi | Son geri alınan işlemi |
