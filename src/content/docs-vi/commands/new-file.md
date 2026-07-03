---
title: Tệp Mới — Bắt Đầu Bản Vẽ Trắng trong KulmanLab CAD
description: Lệnh New File xóa canvas và mở một bản vẽ trắng mới. Tên tệp có dấu thời gian được tạo tự động và lưu vào bộ nhớ trình duyệt.
---

# Tệp Mới

Lệnh **New File** xóa canvas và bắt đầu một bản vẽ trắng mới. Tên tệp duy nhất có dấu thời gian được tạo tự động.

## Cách tạo tệp mới

Nhấp nút **New File** trên thanh công cụ (biểu tượng trang mới) trong bảng File. Canvas xóa ngay lập tức — không có lời nhắc hoặc hộp thoại xác nhận.

## Nội dung tệp mới

Tệp mới được tạo bắt đầu với:

- **Không có thực thể** nào trên canvas.
- **Một lớp mặc định** có tên `0` với màu trắng và kiểu đường `Continuous`.
- **Tên tệp được tạo** theo định dạng `kulman-Mon01_HH:MM:SS.dxf`.

Tệp được lưu vào bộ nhớ trình duyệt tự động và xuất hiện trong [Tệp Gần Đây](../files/).

## Cảnh báo — công việc chưa lưu bị xóa

Nhấp **New File** xóa tất cả thực thể trên canvas hiện tại mà không có cảnh báo. Nếu bạn muốn giữ bản vẽ hiện tại, hãy [xuất](../export/) nó trước.

## Khi nào dùng Tệp Mới vs Nhập

| Tình huống | Hành động được đề xuất |
|-----------|----------------------|
| Bắt đầu bản vẽ từ đầu | **Tệp Mới** |
| Mở tệp DXF hoặc JSON hiện có | [Nhập](../import/) |
| Sao chép bản vẽ để làm biến thể | [Xuất](../export/) tệp hiện tại, sau đó [Nhập](../import/) bản sao |

## Các lệnh liên quan

- [Nhập](../import/) — mở bản vẽ DXF hoặc JSON hiện có
- [Xuất](../export/) — tải bản vẽ trước khi bắt đầu mới
- [Tệp](../files/) — khôi phục bản vẽ trước đó từ bộ nhớ trình duyệt
