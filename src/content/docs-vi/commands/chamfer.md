---
title: Lệnh Chamfer — Vát Góc Thẳng Giữa Hai Đường Thẳng trong KulmanLab CAD
description: Lệnh Chamfer kết nối hai thực thể Line hoặc Polyline bằng đường cắt chéo thẳng. Bạn chỉ định hai khoảng cách — một dọc theo mỗi thực thể — và lệnh cắt bớt cả hai đến những điểm đó rồi chèn một đường kết nối.
keywords: [lệnh chamfer CAD, vát góc đường thẳng CAD, cắt góc chéo, vát góc CAD, kulmanlab]
---

# Chamfer

Lệnh `chamfer` vát góc thẳng chéo giữa hai thực thể [Line](../line/) hoặc [Polyline](../polyline/). Bạn chỉ định khoảng cắt lùi dọc theo mỗi thực thể (d1 và d2), và lệnh cắt bớt cả hai thực thể đến những điểm đó rồi chèn một đường kết nối giữa chúng.

Sử dụng khoảng cách bằng nhau tạo ra đường cắt 45° đối xứng; khoảng cách khác nhau tạo ra vát góc không đối xứng.

Chamfer hoạt động trên các thực thể **Line và Polyline**.

## Sử Dụng Chamfer

1. Nhập `chamfer` trong terminal hoặc bấm nút **Chamfer** trên thanh công cụ.
2. **Nhập khoảng cách chamfer đầu tiên** (d1 — khoảng cách dọc theo thực thể đầu tiên) và nhấn **Enter**.
3. **Nhập khoảng cách chamfer thứ hai** (d2 — khoảng cách dọc theo thực thể thứ hai) và nhấn **Enter**.
4. **Bấm thực thể đầu tiên** — phần bạn bấm quyết định bên nào của giao điểm được giữ lại.
5. **Di chuột qua thực thể thứ hai** — xem trước đường đứt nét hiển thị đường cắt chamfer kết quả. Di chuyển con trỏ sang bên muốn giữ lại.
6. **Bấm** để áp dụng. Cả hai thực thể được cắt bớt và đường chamfer được chèn vào.

```
  Trước (d1=5, d2=8):        Sau:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Chọn Phía

Khi hai đường thẳng giao nhau, chamfer được áp dụng tại góc được xác định bởi vị trí bấm — phần của mỗi thực thể **ở cùng phía với con trỏ** được giữ lại.

- Bấm gần một đầu của thực thể đầu tiên để chọn nửa đó.
- Di chuyển con trỏ sang nửa mong muốn của thực thể thứ hai — xem trước đường đứt nét cập nhật trực tiếp.

## Lệnh Tạo Ra Gì

- Điểm cuối của thực thể đầu tiên gần giao điểm nhất được di chuyển đến điểm **T1**, nằm cách giao điểm d1 dọc theo thực thể đầu tiên.
- Điểm cuối của thực thể thứ hai gần giao điểm nhất được di chuyển đến điểm **T2**, nằm cách giao điểm d2 dọc theo thực thể thứ hai.
- Một thực thể Line mới được chèn từ **T1** đến **T2**.

Đường được chèn vào kế thừa cài đặt độ dày đường, màu sắc, lớp và kiểu đường hiện tại.

## Tham Khảo Phím Tắt

| Phím | Hành Động |
|------|-----------|
| `0`–`9`, `.` | Thêm chữ số vào giá trị khoảng cách hiện tại |
| `Backspace` | Xóa ký tự cuối cùng đã nhập |
| `Enter` | Xác nhận khoảng cách đã nhập và tiếp tục |
| `Escape` | Hủy và đặt lại |

## Thực Thể Được Hỗ Trợ

| Thực Thể | Hỗ Trợ |
|----------|---------|
| Line | Có |
| Polyline / Rectangle | Có |
| Arc, Circle, Ellipse | Không |
| Text, Spline, Dimension, Leader | Không |

## Chamfer vs Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Loại góc | Cắt thẳng | Cung tròn |
| Đầu vào | Hai khoảng cách (d1, d2) | Một bán kính |
| Thực thể được chèn | Line | Arc |
| Thực thể được hỗ trợ | Lines và Polylines | Chỉ Lines |
