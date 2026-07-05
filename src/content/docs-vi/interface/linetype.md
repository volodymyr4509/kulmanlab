---
title: Bộ Chọn Kiểu Đường Trên Thanh Công Cụ — Kiểm Soát Mẫu Nét Đứt trong KulmanLab CAD
description: Bộ chọn kiểu đường trong thanh công cụ KulmanLab CAD đặt mẫu nét đứt áp dụng cho tất cả thực thể mới được vẽ. Hỗ trợ tất cả kiểu đường được tải từ tệp DXF hiện tại cộng với các tùy chọn ByLayer, ByBlock và Continuous có sẵn.
---

# Kiểu Đường

Chip **kiểu đường** trong thanh công cụ kiểm soát mẫu nét đứt được gán cho mỗi thực thể mới bạn vẽ. Nhấp để mở dropdown bộ chọn.

## Các tùy chọn

| Giá trị | Ý nghĩa |
|---------|---------|
| **From Layer** | Thực thể kế thừa kiểu đường được định nghĩa trên lớp của nó. Hiển thị là `ByLayer` trong DXF. |
| **ByBlock** | Thực thể kế thừa kiểu đường của khối mà nó thuộc về. |
| **Continuous** | Đường liền không gián đoạn — không có mẫu nét đứt. |
| **Kiểu đường có tên** | Bất kỳ kiểu đường nào được tải từ tệp DXF hiện tại (ví dụ: `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM`, …). Dropdown hiển thị bản xem trước trực tiếp của mỗi mẫu. |

## Cách áp dụng

Kiểu đường được chọn được áp dụng cho mọi thực thể được tạo sau khi thay đổi. Nó không hồi tố ảnh hưởng đến các thực thể hiện có.

Để thay đổi kiểu đường của các thực thể hiện có, chọn chúng và chỉnh sửa trường **Linetype** trong bảng thuộc tính, hoặc dùng [MatchProperties](../../commands/match-properties/) để sao chép nó từ thực thể khác.

## Tỉ lệ kiểu đường

Mỗi thực thể cũng có thuộc tính **Linetype Scale** (mặc định `1`). Mẫu nét đứt được nhân với hệ số này. Giá trị `2` làm cho nét đứt dài gấp đôi; `0.5` làm cho chúng ngắn một nửa.

## Kiểu đường có sẵn

Dropdown chỉ liệt kê các kiểu đường có trong tệp DXF đang được tải. Tệp mới tạo chỉ chứa `ByLayer`, `ByBlock` và `Continuous`. Khi bạn nhập tệp DXF, tất cả kiểu đường được định nghĩa trong bảng `$LTYPE` của tệp đều trở nên khả dụng.

## Tương thích DXF

Tên kiểu đường được lưu dưới dạng chuỗi trong các bản ghi thực thể. `ByLayer` và `ByBlock` là các giá trị sentinel DXF tiêu chuẩn. Tất cả kiểu đường có tên và mẫu nét đứt của chúng được bảo toàn chính xác khi xuất và không bị mất khi xuất nhập trong LibreCAD, FreeCAD và các ứng dụng tương thích DXF khác.
