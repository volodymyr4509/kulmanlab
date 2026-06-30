---
title: Lệnh Kích Thước Tiếp Tục — Nối Tiếp Chuỗi Kích Thước trong KulmanLab CAD
description: Lệnh Dimension Continue kéo dài chuỗi kích thước từ đường gióng thứ hai của kích thước cuối cùng đã đặt. Tự động kế thừa góc, khoảng lệch, kích thước mũi tên và chiều cao văn bản từ kích thước cơ sở. Hoạt động với cả kích thước tuyến tính và căn chỉnh.
---

# Kích Thước Tiếp Tục

Lệnh `dimcontinue` nối tiếp các kích thước mới từ **đường gióng thứ hai** của một kích thước hiện có. Mỗi đoạn mới được đặt dọc theo cùng trục đo và cùng khoảng lệch đường kích thước với kích thước cơ sở. Tất cả thuộc tính kiểu dáng đều được sao chép tự động từ kích thước cơ sở.

## Bắt đầu chuỗi

1. Gõ `dimcontinue` trong terminal hoặc nhấp nút **Dimension Continue** trên thanh công cụ.
2. **Nếu vừa đặt một kích thước** — lệnh tự động chọn nó làm cơ sở (không cần nhấp).
3. **Nếu không có kích thước gần đây** — nhấp bất kỳ kích thước hiện có nào để dùng làm cơ sở.
4. **Nhấp điểm gốc gióng tiếp theo** — bản xem trước hiển thị kích thước mới khi di chuyển con trỏ. Hoặc gõ `X,Y` rồi nhấn **Enter** để nhập tọa độ chính xác.
5. Tiếp tục nhấp (hoặc gõ) để kéo dài chuỗi.
6. Nhấn **Enter**, **Space** hoặc **Escape** để kết thúc chuỗi.

## Thuộc tính kế thừa từ kích thước cơ sở

| Thuộc tính | Kế thừa |
|-----------|---------|
| Hướng/góc đo | Có — khóa cho toàn bộ chuỗi |
| Khoảng lệch đường kích thước | Có |
| Kích thước mũi tên | Có |
| Chiều cao văn bản | Có |
| Màu, Lớp | Không — dùng lớp hiện tại |

## Khóa hướng đo

Hướng đo của chuỗi được **cố định theo góc của kích thước cơ sở**:

- Cơ sở tuyến tính (H) → tất cả phần tiếp theo đo khoảng cách ngang (Δ X).
- Cơ sở tuyến tính (V) → tất cả phần tiếp theo đo khoảng cách dọc (Δ Y).
- Cơ sở căn chỉnh bất kỳ góc nào → tất cả phần tiếp theo đo theo cùng góc đó.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X |
| `,` | Khóa X và chuyển sang nhập Y |
| `Backspace` | Xóa ký tự cuối |
| `Enter` | Xác nhận tọa độ đã gõ, hoặc kết thúc chuỗi nếu không có nhập liệu |
| `Space` / `Escape` | Kết thúc chuỗi |

## Chỉnh sửa nhãn sau khi đặt — chế độ đơn giản

**Nhấp đúp** vào bất kỳ kích thước nào trong chuỗi để mở trình soạn thảo văn bản ở chế độ **đơn giản**. Mỗi đoạn là độc lập và có thể được chỉnh sửa riêng lẻ.

| Tính năng | Hành vi |
|-----------|---------|
| Bold / Italic / Font / Height | Áp dụng cho **toàn bộ nhãn** cùng một lúc |
| Định dạng theo ký tự | Không được hỗ trợ |
| `Enter` | Xác nhận giá trị và đóng trình soạn thảo |
| Nhiều dòng | Không được hỗ trợ |

Xem [Trình Soạn Thảo Văn Bản — chế độ đơn giản](../interface/text-editor#simple-mode) để tham khảo đầy đủ.

## DXF — thực thể DIMENSION

Mỗi đoạn trong chuỗi được lưu dưới dạng thực thể `DIMENSION` độc lập trong tệp DXF. Chúng không được liên kết trong tệp — chúng chia sẻ thuộc tính vì được tạo từ cùng một cơ sở, nhưng mỗi cái có thể được chỉnh sửa độc lập sau khi đặt.
