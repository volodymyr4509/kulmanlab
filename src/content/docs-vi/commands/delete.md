---
title: Lệnh Delete — Xóa Đối Tượng Khỏi Bản Vẽ trong KulmanLab CAD
description: Lệnh Delete xóa vĩnh viễn các đối tượng được chọn (có thể hoàn tác). Các đối tượng được chọn trước bị xóa ngay lập tức mà không cần bước xác nhận. Phím Delete hoạt động như phím tắt toàn cục ngay cả khi không kích hoạt lệnh.
keywords: [lệnh delete CAD, xóa đối tượng CAD, xóa thực thể CAD, phím delete CAD, hoàn tác xóa CAD, kulmanlab]
---

# Delete

Lệnh `delete` xóa các đối tượng được chọn khỏi bản vẽ. Việc xóa được ghi lại trong lịch sử [Undo](./undo) và có thể đảo ngược với tối đa 20 bước. Không có hộp thoại "xác nhận xóa" riêng biệt — xác nhận chỉ là một lần nhấn phím.

## Hai Cách Xóa

**Chọn trước, rồi xóa** — cách nhanh nhất:

1. Chọn một hoặc nhiều đối tượng trên canvas.
2. Nhập `delete` trong terminal, bấm nút **Delete** trên thanh công cụ, **hoặc nhấn phím `Delete`** trực tiếp.

Các đối tượng bị xóa ngay lập tức — không cần bước xác nhận thêm.

**Kích hoạt, rồi chọn**:

1. Nhập `delete` hoặc bấm nút thanh công cụ (khi không có gì được chọn).
2. **Chọn đối tượng** — bấm để chuyển đổi, hoặc kéo để chọn theo vùng.
3. Nhấn **Enter**, **Space**, hoặc **Delete** để xác nhận và xóa các đối tượng được chọn.

## Phím Tắt Delete

Phím `Delete` trên bàn phím hoạt động như **phím tắt toàn cục** — nếu có đối tượng nào đang được chọn, nhấn nó sẽ xóa ngay lập tức, ngay cả khi không mở lệnh Delete trong terminal. Đây là quy trình xóa nhanh nhất một bước:

```
Bấm đối tượng → nhấn phím Delete → xong
```

## Chọn Trong Lệnh

| Phương Pháp | Hành Vi |
|-------------|---------|
| **Bấm** | Chuyển đổi đối tượng dưới con trỏ vào/ra khỏi chọn |
| **Kéo phải** (nghiêm ngặt) | Chỉ chọn đối tượng hoàn toàn bên trong hộp |
| **Kéo trái** (cắt ngang) | Chọn đối tượng giao với ranh giới hộp |
| **Enter** / **Space** / **Delete** | Xác nhận và xóa các đối tượng được chọn |

## Phục Hồi Đối Tượng Đã Xóa

Việc xóa có thể hoàn tác bằng lệnh [Undo](./undo) (nhập `undo` hoặc dùng nút thanh công cụ). Tối đa **20 bước** có thể đảo ngược mỗi tệp, và lịch sử duy trì qua các lần tải lại trang. Nếu bạn đã xóa hơn 20 lần mà không lưu, các lần xóa trước đó không thể phục hồi.

## Thực Thể Được Hỗ Trợ

Delete hoạt động trên mọi loại thực thể — Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader và tất cả các loại khác.
