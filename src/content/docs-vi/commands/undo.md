---
title: Lệnh Hoàn Tác — Lùi Lại Qua Lịch Sử Vẽ trong KulmanLab CAD
description: Lệnh Undo đảo ngược hành động vẽ cuối cùng từng bước một. Tối đa 20 bước được lưu trữ theo tệp và được duy trì trong trình duyệt qua các lần tải lại trang. Thực hiện hành động mới sau khi hoàn tác sẽ xóa ngăn xếp làm lại.
---

# Hoàn Tác

Lệnh `undo` đảo ngược thay đổi cuối cùng trong bản vẽ — một bước mỗi lần gọi. Mỗi lần thêm, xóa hoặc chỉnh sửa thực thể được ghi lại là một mục lịch sử riêng biệt. Hoàn Tác lùi lại qua các mục này theo thứ tự ngược lại.

## Cách hoàn tác

- Gõ `undo` trong terminal, hoặc
- Nhấp nút **Undo** trên thanh công cụ.

Mỗi lần gọi đảo ngược một hành động đã ghi. Gọi nhiều lần để lùi xa hơn.

## Hành vi lịch sử

| Chi tiết | Giá trị |
|---------|--------|
| Bước theo tệp | Tối đa **20** |
| Bộ lưu trữ | Trình duyệt (IndexedDB / localStorage), theo tên tệp |
| Tồn tại qua tải lại trang | Có — lịch sử được khôi phục khi bạn mở lại tệp |
| Hành động mới sau hoàn tác | Xóa tất cả mục làm lại trước vị trí hiện tại |
| Mục cũ nhất khi đầy | Bị xóa để nhường chỗ cho thay đổi mới nhất |

## Hoàn Tác vs Làm Lại

| | Hoàn Tác | Làm Lại |
|---|------|------|
| Hướng | Lùi **về phía sau** qua lịch sử | Tiến **về phía trước** qua các mục đã hoàn tác |
| Khả dụng khi | Ít nhất một hành động được ghi tồn tại | Ít nhất một Hoàn Tác đã được thực hiện và không có hành động mới |
| Bị xóa bởi | Không có gì — lịch sử tích lũy đến giới hạn 20 bước | Bất kỳ hành động vẽ mới nào |

Dùng [Làm Lại](./redo) để áp dụng lại hành động đã hoàn tác. Các nút thanh công cụ bị làm mờ khi hướng tương ứng không khả dụng.
