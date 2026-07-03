---
title: Lệnh Làm Lại — Áp Dụng Lại Các Hành Động Đã Hoàn Tác trong KulmanLab CAD
description: Lệnh Redo áp dụng lại hành động cuối cùng đã bị đảo ngược bởi Undo, tiến về phía trước trong ngăn xếp lịch sử. Redo chỉ khả dụng sau khi Undo và bị xóa ngay khi có hành động vẽ mới được thực hiện.
---

# Làm Lại

Lệnh `redo` tiến về phía trước trong lịch sử hoàn tác, áp dụng lại các hành động đã bị đảo ngược bởi [Hoàn Tác](../undo/). Làm Lại chỉ khả dụng khi bạn đã lùi lại bằng Hoàn Tác và chưa thực hiện thay đổi mới.

## Cách làm lại

- Gõ `redo` trong terminal, hoặc
- Nhấp nút **Redo** trên thanh công cụ.

Mỗi lần gọi áp dụng lại một hành động đã bị hoàn tác trước đó. Gọi nhiều lần để tiến về phía trước qua tất cả các mục làm lại có sẵn.

## Hành vi ngăn xếp Làm Lại

| Chi tiết | Hành vi |
|---------|---------|
| Khả dụng sau | Một hoặc nhiều bước [Hoàn Tác](../undo/) |
| Bị xóa bởi | **Bất kỳ hành động vẽ mới nào** — thêm, chỉnh sửa hoặc xóa thực thể |
| Bộ lưu trữ | Trình duyệt, theo tệp — tồn tại qua tải lại trang |
| Độ sâu tối đa | Tối đa 20 mục (cùng bộ với Hoàn Tác) |

## Làm Lại vs Hoàn Tác

| | Làm Lại | Hoàn Tác |
|---|------|------|
| Hướng | Tiến về phía trước qua các mục đã hoàn tác | Lùi về phía sau qua lịch sử |
| Khả dụng khi | Sau ít nhất một Hoàn Tác, không có hành động mới | Ít nhất một hành động được ghi tồn tại |
| Bị xóa bởi | Bất kỳ hành động vẽ mới nào | Không có gì |

Nút Làm Lại trên thanh công cụ bị làm mờ khi không có mục nào để làm lại. Dùng [Hoàn Tác](../undo/) trước để tạo các mục làm lại.
