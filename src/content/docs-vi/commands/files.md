---
title: Files — Bảng Tệp Gần Đây trong KulmanLab CAD
description: Lệnh Files mở bảng Tệp Gần Đây — duyệt tất cả bản vẽ được lưu trong trình duyệt, khôi phục bất kỳ bản vẽ nào lên canvas, hoặc xóa những bản không cần nữa.
group: file
order: 3
---

# Files

Lệnh **Files** mở **Bảng Tệp Gần Đây** — danh sách tất cả bản vẽ đã được lưu vào bộ nhớ cục bộ của trình duyệt. Dùng nó để mở lại bản vẽ trước đó hoặc xóa tệp không cần thiết.

## Cách mở Bảng Tệp Gần Đây

Nhấp nút **Files** trên thanh công cụ (biểu tượng lịch sử) trong bảng File ở đầu màn hình. Bảng mở ở phía bên trái canvas.

## Bảng Tệp Gần Đây

Mỗi mục trong danh sách hiển thị tên tệp và hai nút hành động:

| Nút | Hành động |
|-----|----------|
| ✓ **Khôi phục** | Tải bản vẽ lên canvas — thay thế nội dung hiện tại |
| ✕ **Xóa** | Xóa tệp khỏi bộ nhớ trình duyệt vĩnh viễn |

## Cách tệp được lưu trữ

KulmanLab lưu bản vẽ vào **IndexedDB** — cơ sở dữ liệu trong trình duyệt bền vững. Điều này có nghĩa là:

- Tệp tồn tại qua các lần tải lại trang và khởi động lại trình duyệt.
- Tệp được lưu **cục bộ trên thiết bị của bạn** — không được tải lên bất kỳ máy chủ nào.
- Mỗi trình duyệt và thiết bị có bộ lưu trữ độc lập riêng.
- Xóa dữ liệu trang web của trình duyệt sẽ xóa tất cả tệp đã lưu.

## Tải tệp tự động khi khởi động

Khi mở KulmanLab CAD, ứng dụng tự động tải **tệp được sửa đổi gần đây nhất** từ bộ lưu trữ.

## Quản lý bộ lưu trữ

Để xóa tất cả bản vẽ đã lưu cùng lúc, dùng lệnh [WipeStorage](../wipestorage/).

## Các lệnh liên quan

- [Import](../import/) — tải bản vẽ từ hệ thống tệp vào bộ nhớ trình duyệt
- [Export](../export/) — tải bản vẽ xuống hệ thống tệp
- [New File](../new-file/) — bắt đầu bản vẽ trắng (cũng được lưu tự động)
- [WipeStorage](../wipestorage/) — xóa tất cả tệp đã lưu khỏi bộ nhớ trình duyệt
