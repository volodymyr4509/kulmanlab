---
sidebar_position: 40
title: ViewportCopy Komutu — KulmanLab CAD'de Görünüm Penceresini Kopyala
description: ViewportCopy komutu, mevcut kağıt yerleşim görünüm penceresini yeni bir konuma kopyalar. Orijinalin ölçeğini, model merkezini, kilidini ve boyutlarını devralır.
keywords: [CAD viewport copy komutu, görünüm penceresini kopyala CAD, yerleşim viewport kopyala, kulmanlab]
---

# ViewportCopy

`viewport copy` komutu, mevcut kağıt yerleşim görünüm penceresini yeni bir konuma kopyalar. Yeni görünüm penceresi orijinalin tam ayarlarını devralır.

> **Not:** ViewportCopy yalnızca **sayfa uzayında (Layout)** kullanılabilir. Model uzayında komut hata mesajı gösterir.

## Ön Seçim veya Komut Sırasında Seçim

**Önce seç**:
1. Kopyalanacak görünüm penceresini seçin.
2. `viewport copy` yazın veya **ViewportCopy** düğmesine basın.
3. **Temel noktayı tıklayın**.
4. **Hedef noktayı tıklayın** — kopya yerleştirilir ve komut tamamlanır.

**Etkinleştir, sonra seç**:
1. `viewport copy` yazın veya düğmeye basın.
2. Seçmek için **görünüm penceresine tıklayın**.
3. **Temel noktayı tıklayın**, ardından **hedef noktayı tıklayın**.

## Koordinat Girişi

Temel veya hedef nokta adımında tıklamak yerine kesin konum girin:
1. X yazın, `,` tuşuna basın, Y yazın, **Enter** tuşuna basın.

## Açı Kilidi ve Kesin Mesafe

Temel noktayı ayarladıktan sonra 45°'lik eksenlere kilitlenir. Kesin kaymaya kopyalamak için mesafeyi girin ve **Enter** tuşuna basın.

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.` | Mesafeye rakam ekler |
| `-` | Negatif mesafe (yalnızca ilk karakter) |
| `Backspace` | Son karakteri siler |
| `Enter` | Kopyayı girilen mesafeye yerleştirir |

## Klavye Referansı

| Tuş | İşlem |
|-----|-------|
| `0`–`9`, `.`, `-` | X koordinatı veya mesafe girişini başlatır |
| `,` | X'i kilitler ve Y girişine geçer |
| `Backspace` | Son girilen karakteri siler |
| `Enter` | Koordinatı veya mesafeyi onaylar |
| `Escape` | İptal eder ve sıfırlar |

## Kopyanın Devraldıkları

| Öznitelik | Devralır mı? |
|-----------|-------------|
| Ölçek (Scale) | Evet |
| Model merkezi (model uzayındaki konum) | Evet |
| Kilit (Lock) | Evet |
| Boyutlar (Genişlik × Yükseklik) | Evet |
