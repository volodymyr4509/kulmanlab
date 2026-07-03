---
title: Lệnh Angle — Đo Góc Nội Tại Tại Một Đỉnh Qua Ba Điểm trong KulmanLab CAD
description: Lệnh Angle đo góc nội tại (0°–180°) tại đỉnh được xác định bởi ba điểm bấm. Bấm điểm đầu, đỉnh, điểm cuối. Kết quả hiển thị trong terminal với 4 chữ số thập phân.
keywords: [đo góc CAD, góc ba điểm, góc nội tại CAD, lệnh đo góc, góc đỉnh, kulmanlab]
---

# Angle

Lệnh `angle` đo góc nội tại tại đỉnh được tạo bởi hai đoạn thẳng qua ba điểm bấm. Kết quả — luôn nằm trong khoảng 0° đến 180° — được hiển thị trong terminal với 4 chữ số thập phân. Đây là một trong hai lệnh đo lường — [Distance](../distance/) đo độ dài đường thẳng.

## Cấu Trúc Phép Đo Góc

```
  ● điểm đầu tiên (cuối của tia thứ nhất)
   \
    \  xem trước tia thứ nhất
     \
      ● đỉnh (bước 3)
     /
    /  xem trước tia thứ hai (theo con trỏ)
   /
  ● điểm thứ ba  →  terminal: "Angle: 45.0000°"
```

- **Điểm đầu tiên** — một đầu của góc (bước 2).
- **Đỉnh** — góc được đo tại đây (bước 3).
- **Điểm thứ ba** — đầu kia của góc (bước 4).

## Đo Góc

1. Nhập `angle` trong terminal hoặc bấm nút **Angle** trên thanh công cụ.
2. **Bấm điểm đầu tiên** — một đầu của góc. Hoặc nhập `X,Y` và nhấn **Enter** cho tọa độ chính xác.
3. **Bấm đỉnh** — góc nơi hai cánh gặp nhau. Nhập tọa độ cũng được.
4. **Bấm điểm thứ ba** — đầu cánh thứ hai. Nhập tọa độ cũng được. Đặt điểm này in kết quả.
5. **Bấm lại** (tùy chọn) để bắt đầu phép đo mới từ điểm bấm đó làm điểm đầu tiên mới.

## Quy Ước Góc Nội Tại

Lệnh tính góc bằng tích vô hướng của hai tia từ đỉnh:

- **Luôn là nội tại**: kết quả là góc nhỏ hơn, từ 0° đến 180°.
- Thứ tự bấm các điểm đầu không ảnh hưởng đến kết quả — chỉ vị trí đỉnh mới quan trọng.
- Các điểm thẳng hàng (cả ba trên một đường) trả về 0° hoặc 180°.

## Nối Tiếp Các Phép Đo

Sau khi kết quả xuất hiện, bấm ngay lập tức bắt đầu phép đo tiếp theo — điểm bấm trở thành điểm đầu tiên mới. Lệnh không tự thoát cho đến khi bạn nhấn `Escape`.

## Angle vs Distance

| | Angle | Distance |
|---|-------|---------|
| Đo gì | Góc nội tại tại đỉnh | Độ dài đường thẳng |
| Số lần bấm | 3 | 2 |
| Định dạng kết quả | `45.0000°` | `12.3456` (đơn vị) |
| Xem trước trên canvas | Hai đường từ đỉnh đến hai đầu | Đường từ điểm đầu đến con trỏ |
| Tốt nhất cho | Góc mở giữa hai đặc điểm | Chiều dài khoảng hở hoặc đoạn |

## Nhập Tọa Độ

Thay vì bấm, nhập vị trí chính xác cho bất kỳ trong ba điểm:

1. Nhập giá trị X.
2. Nhấn `,` — terminal hiển thị `[X], [Y{con trỏ}]`.
3. Nhập giá trị Y.
4. Nhấn **Enter** để xác nhận.

## Tham Khảo Phím Tắt

| Phím | Hành Động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X |
| `,` | Khóa X và chuyển sang nhập Y |
| `Backspace` | Xóa ký tự cuối cùng đã nhập |
| `Enter` | Xác nhận tọa độ đã nhập |
| `Escape` | Hủy và đặt lại về bước 2 |

## Lưu Ý

- Kết quả chỉ được hiển thị trong **terminal** — không có gì được thêm vào bản vẽ.
- Độ chính xác luôn là 4 chữ số thập phân theo độ.
