---
title: Lệnh Leader+ — Thêm Cánh Tay Mũi Tên vào Đường Dẫn Đa trong KulmanLab CAD
description: Lệnh Leader+ thêm một cánh tay mũi tên mới vào đường dẫn đa hiện có. Cánh tay mới chia sẻ đoạn gấp khúc, văn bản và tất cả kiểu dáng của đường dẫn đã chọn. Hai lần nhấp — chọn đường dẫn, đặt đầu mũi tên mới.
group: markup
order: 2
---

# Leader+

Lệnh `leader+` thêm một cánh tay mũi tên mới vào một đường dẫn đa hiện có. Cánh tay mới chỉ từ đoạn gấp khúc hiện có của đường dẫn đến đầu mũi tên mới bạn nhấp. Tất cả kiểu dáng đều được kế thừa từ đường dẫn đã chọn.

## Thêm cánh tay

1. Gõ `leader+` trong terminal.
2. **Nhấp một đường dẫn đa hiện có** để chọn nó.
3. **Nhấp đầu mũi tên mới**, hoặc gõ `X,Y` rồi nhấn **Enter** để nhập tọa độ chính xác. Đường xem trước hiển thị từ con trỏ đến đoạn gấp khúc của đường dẫn.

Cánh tay được đặt và lệnh vẫn hoạt động — bạn có thể ngay lập tức nhấp vào đường dẫn khác để thêm thêm cánh tay. Nhấn **Enter**, **Space** hoặc **Escape** để kết thúc.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu gõ tọa độ X |
| `,` | Khóa X và chuyển sang nhập Y |
| `Enter` | Xác nhận tọa độ đã gõ và đặt cánh tay |
| `Enter` / `Space` | Kết thúc (khi không có nhập liệu nào đang diễn ra) |
| `Escape` | Hủy và đặt lại |

## Ghi chú

- Chỉ có thể chọn thực thể **Leader** — nhấp vào bất kỳ loại thực thể nào khác sẽ không có hiệu lực.
- Cánh tay mới bắt đầu từ đoạn gấp khúc hiện có; bạn chỉ chọn vị trí đầu mũi tên.
- Không có giới hạn số lượng cánh tay mà một đường dẫn đa có thể có.

## Các lệnh liên quan

| Lệnh | Tác dụng |
|------|---------|
| [Leader](../leader/) | Tạo một đường dẫn đa hoàn toàn mới |
| [Leader−](../leader-remove/) | Xóa một cánh tay khỏi đường dẫn đa có từ hai cánh tay trở lên |
