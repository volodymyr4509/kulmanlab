---
title: Lệnh Leader — Vẽ Chú Thích Đa Đường Dẫn với Mũi Tên và Văn Bản
description: "Lệnh Leader vẽ đa đường dẫn có đầu mũi tên, đoạn gấp và văn bản. Đường dẫn mới dùng KiểuĐườngDẫn hiện tại và được lưu vào DXF."
group: markup
order: 1
---

# Leader

Lệnh `ĐườngChúThích` vẽ chú thích đa đường dẫn bốn bước: một mũi tên chạm vào đặc điểm, một đường dẫn gấp khúc ở đoạn gấp khúc, neo văn bản và nhãn đã gõ. Trong tất cả lệnh chú thích, Leader là lệnh duy nhất bao gồm giai đoạn nhập văn bản tương tác với bản xem trước con trỏ nhấp nháy.

## Cấu trúc đường dẫn đa

- **Đầu mũi tên** — đầu nhọn đặt tại đặc điểm được chú thích.
- **Đoạn gấp khúc** — khủy nơi đường dẫn gấp lại hướng về văn bản.
- **Neo văn bản** — nơi nhãn được đặt. Văn bản tự động căn lề trái hoặc phải.

## Vẽ đường dẫn

1. Gõ `ĐườngChúThích` trong terminal hoặc nhấp nút **Leader** trên thanh công cụ.
2. **Nhấp đầu mũi tên**, hoặc gõ `X,Y` rồi nhấn **Enter**.
3. **Nhấp đoạn gấp khúc** — chỗ gấp trong đường dẫn. Khóa góc đến các gia số 45°.
4. **Nhấp vị trí văn bản** — nơi nhãn neo.
5. **Gõ văn bản nhãn** — bản xem trước canvas cập nhật trực tiếp với con trỏ nhấp nháy. Nhấn **Enter** để đặt.

## Hướng văn bản tự động

Căn chỉnh văn bản tự động điều chỉnh theo vị trí con trỏ so với đoạn gấp khúc:

| Vị trí con trỏ | Hướng văn bản |
|----------------|--------------|
| Bên **phải** của đoạn gấp khúc | Từ trái sang phải từ neo văn bản |
| Bên **trái** của đoạn gấp khúc | Từ phải sang trái (neo ở phía phải) |

## Chỉnh sửa đường dẫn hiện có

**Nhấp đúp** vào đường dẫn đa đã đặt để mở lại trình soạn thảo văn bản ở chế độ **phong phú**. Ở chế độ phong phú bạn có thể áp dụng in đậm, in nghiêng và ghi đè phông chữ hoặc chiều cao theo từng ký tự, và chèn ngắt dòng bằng `Enter`. Nhấn **Escape** để xác nhận và đóng.

Xem [Trình Soạn Thảo Văn Bản — chế độ phong phú](../../interface/text-editor/#rich-mode) để tham khảo đầy đủ.

## Thêm và xóa cánh tay

- Để thêm cánh tay mũi tên phụ vào đường dẫn hiện có: [LeaderAdd](../leader-add/)
- Để xóa một cánh tay khỏi đường dẫn có từ hai cánh tay trở lên: [LeaderRemove](../leader-remove/)

## Tham khảo phím tắt

**Giai đoạn chọn điểm (đầu mũi tên, đoạn gấp khúc, vị trí văn bản)**

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu gõ tọa độ X (sau đó `,` để khóa X và nhập Y) |
| `,` | Xác nhận X và chuyển sang nhập Y |
| `Backspace` | Xóa ký tự cuối |
| `Enter` | Xác nhận tọa độ hoặc khoảng cách |

**Giai đoạn nhập văn bản**

| Phím | Hành động |
|------|-----------|
| Ký tự in được | Chèn tại con trỏ |
| `←` / `→` | Di chuyển con trỏ |
| `Backspace` | Xóa bên trái |
| `Delete` | Xóa bên phải |
| `Enter` | Đặt đường dẫn |

| Phím | Hành động |
|------|-----------|
| `Escape` | Hủy và đặt lại về bước 2 |

## Tương thích DXF

KulmanLab đọc và ghi thực thể `MLEADER` cùng bản ghi `MLEADERSTYLE` có tên. Đầu mũi tên, nhánh, hình học đoạn ngang, văn bản, điểm gắn, góc xoay, khung và kiểu liên kết được giữ lại khi DXF hỗ trợ. Quản lý giá trị mặc định cho đường dẫn mới bằng [LeaderStyle](../leader-style/).
