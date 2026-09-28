---
title: Lệnh Text — Đặt Nhãn MTEXT trong KulmanLab CAD
description: Lệnh Text đặt nhãn MTEXT nhiều dòng, có định dạng phong phú. Nhấp vị trí, gõ trong trình soạn thảo popup và nhấn Escape để xác nhận. Nhấp đúp bất kỳ nhãn hiện có nào để mở lại trình soạn thảo.
group: markup
order: 0
---

# Text

Lệnh `VănBản` đặt nhãn văn bản nhiều dòng. Sau khi bạn nhấp vị trí trên canvas, trình soạn thảo popup mở ở chế độ **phong phú** — bạn có thể gõ nội dung, áp dụng in đậm/in nghiêng/gạch chân/gạch ngang theo từng ký tự, thay đổi phông chữ và chiều cao, và chèn ngắt dòng. Nhấn **Escape** để xác nhận và đóng trình soạn thảo.

Xem trang [Trình Soạn Thảo Văn Bản](../../interface/text-editor/) để tham khảo đầy đủ trình soạn thảo, bao gồm so sánh chế độ **phong phú** và **đơn giản**.

## Đặt nhãn văn bản

1. Gõ `VănBản` trong terminal hoặc nhấp nút **Text** trên thanh công cụ.
2. **Nhấp vị trí neo** trên canvas. Hoặc gõ `X,Y` rồi nhấn **Enter** để nhập tọa độ chính xác.
3. **Trình soạn thảo văn bản popup** mở phía trên nhãn mới. Gõ nội dung của bạn.
4. Nhấn **Escape** để xác nhận nhãn và đóng trình soạn thảo.

Văn bản mới sao chép phông chữ, chiều cao, đậm, nghiêng, giãn dòng, căn ngang và khung từ [KiểuChữ](../text-style/) hiện hành. Kiểu `Standard` tích hợp dùng chiều cao **1 đơn vị bản vẽ** và căn trái.

## Chỉnh sửa nhãn hiện có

**Nhấp đúp** bất kỳ nhãn văn bản nào trên canvas để mở lại trình soạn thảo cho nhãn đó.

## Tham khảo phím tắt

**Giai đoạn neo**

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X |
| `,` | Khóa X và chuyển sang nhập Y |
| `Backspace` | Xóa ký tự cuối |
| `Enter` | Xác nhận tọa độ đã gõ |

**Giai đoạn trình soạn thảo văn bản** (xem [Trình Soạn Thảo Văn Bản](../../interface/text-editor/) để tham khảo đầy đủ)

| Phím | Hành động |
|------|-----------|
| Bất kỳ ký tự in được | Chèn tại con trỏ |
| `Backspace` / `Delete` | Xóa ký tự lân cận hoặc lựa chọn |
| `Enter` | Chèn ngắt dòng |
| `←` / `→` | Di chuyển dấu gạch nháy |
| `Home` / `End` | Nhảy đến đầu / cuối dòng cứng |
| `Escape` | Xác nhận và đóng trình soạn thảo |

## Các lệnh chỉnh sửa được hỗ trợ

| Lệnh | Tác dụng với văn bản |
|------|---------------------|
| [Move](../move/) | Di chuyển điểm neo |
| [Copy](../copy/) | Tạo nhãn giống hệt tại vị trí mới |
| [Rotate](../rotate/) | Xoay vị trí neo và thêm góc vào Độ Xoay |
| [Mirror](../mirror/) | Phản chiếu điểm neo (chuỗi văn bản không bị lật) |
| [Scale](../scale/) | Chia tỉ lệ điểm neo và nhân chiều cao với hệ số |
| [Delete](../delete/) | Xóa nhãn |

Phần **Thuộc tính** cũng có căn ngang, chiều rộng tham chiếu, giãn dòng và khung.

## DXF — thực thể MTEXT

Nhãn được lưu dưới dạng thực thể **MTEXT**. Đậm và nghiêng dùng `\f`, gạch chân dùng `\L`/`\l`, gạch ngang dùng `\K`/`\k`, còn chiều cao từng ký tự dùng `\H`. Chiều rộng tham chiếu, giãn dòng, căn đoạn, xoay và điểm đính kèm cũng được bảo toàn. Khung được xuất bằng cờ khung MTEXT và tỷ lệ viền tương thích AutoCAD. Xem [KiểuChữ](../text-style/) và [Trình quản lý phông](../font-manager/).
