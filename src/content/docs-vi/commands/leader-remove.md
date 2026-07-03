---
title: Lệnh Leader− — Xóa Cánh Tay Mũi Tên khỏi Đường Dẫn Đa trong KulmanLab CAD
description: Lệnh Leader− xóa một cánh tay mũi tên khỏi đường dẫn đa có từ hai cánh tay trở lên. Di chuyển gần cánh tay cần xóa — cánh tay gần nhất được tô sáng. Đoạn gấp khúc, văn bản và các cánh tay còn lại được bảo toàn.
---

# Leader−

Lệnh `leader-` xóa một cánh tay mũi tên khỏi một đường dẫn đa hiện có. Nhãn văn bản, đoạn gấp khúc và tất cả cánh tay còn lại được bảo toàn — chỉ cánh tay được chọn bị xóa. Đường dẫn đa chỉ có một cánh tay không thể xóa cánh tay đó.

## Xóa cánh tay

1. Gõ `leader-` trong terminal.
2. **Nhấp một đường dẫn đa** có từ hai cánh tay trở lên. Nếu đường dẫn chỉ có một cánh tay, terminal hiển thị lỗi và chờ lựa chọn hợp lệ.
3. **Di chuyển con trỏ gần cánh tay** muốn xóa — cánh tay gần nhất được tô sáng bằng dấu hiệu.
4. **Nhấp** để xóa cánh tay đó.

Lệnh vẫn hoạt động sau khi xóa — bạn có thể ngay lập tức nhấp vào đường dẫn khác (hoặc cùng đường dẫn) để xóa thêm cánh tay. Nhấn **Enter**, **Space** hoặc **Escape** để kết thúc.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Enter` / `Space` | Kết thúc xóa cánh tay |
| `Escape` | Hủy và đặt lại |

## Ghi chú

- Đường dẫn chỉ có **một cánh tay** được bảo vệ — bạn phải thêm cánh tay trước khi xóa.
- Vị trí đoạn gấp khúc và nội dung văn bản luôn được bảo toàn bất kể cánh tay nào bị xóa.

## Các lệnh liên quan

| Lệnh | Tác dụng |
|------|---------|
| [Đường Dẫn](../leader/) | Tạo đường dẫn đa mới |
| [Leader+](../leader-add/) | Thêm cánh tay vào đường dẫn đa hiện có |
