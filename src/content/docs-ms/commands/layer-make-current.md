---
title: LayerMakeCurrent — Tetapkan Lapisan Entiti sebagai Semasa
description: Arahan LayerMakeCurrent menetapkan lapisan lukisan semasa agar sepadan dengan lapisan entiti yang diklik.
keywords: [buat lapisan semasa, tetapkan lapisan semasa CAD, pengurusan lapisan kulmanlab]
group: layer
order: 1
---

# LayerMakeCurrent

Arahan `LayerMakeCurrent` menetapkan **lapisan lukisan semasa** kepada lapisan mana yang dimiliki entiti yang diklik. Entiti baharu kemudiannya akan dilukis pada lapisan tersebut secara automatik.

## Penggunaan

1. Taip `LayerMakeCurrent` dalam terminal atau klik butang bar alat **Make Current** (ikon penitis mata).
2. **Klik mana-mana entiti** pada kanvas.
3. Lapisan semasa dikemas kini untuk sepadan dengan lapisan entiti tersebut. Arahan selesai serta-merta.

## Butiran tingkah laku

- Jika anda mengklik kanvas kosong (tiada entiti ditemui), terminal menunjukkan `no object found` dan arahan kekal aktif supaya anda boleh mencuba lagi.
- Hanya tetapan lapisan semasa yang berubah — tiada entiti yang diubah suai.
- Lapisan yang dikemas kini ditunjukkan dalam pemilih lapisan dalam bar alat.
