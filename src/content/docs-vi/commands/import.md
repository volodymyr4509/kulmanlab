---
title: Import — Mở Tệp DXF hoặc JSON trong KulmanLab CAD
description: Dùng lệnh Import để mở các tệp DXF hoặc JSON của KulmanLab trong KulmanLab CAD. Hỗ trợ đường thẳng, hình tròn, cung, đường đa đoạn, spline, văn bản, kích thước và đường dẫn.
group: file
order: 1
---

# Import

Lệnh **Import** tải một bản vẽ hiện có từ hệ thống tệp cục bộ vào KulmanLab CAD. Cả định dạng **DXF** tiêu chuẩn và định dạng **JSON** của KulmanLab đều được hỗ trợ.

## Cách nhập tệp

1. Nhấp nút **Import** trên thanh công cụ (biểu tượng thư mục) trong bảng File ở đầu màn hình.
2. Hộp chọn tệp của trình duyệt mở ra. Điều hướng đến tệp bản vẽ và chọn nó.
3. Bản vẽ tải lên canvas ngay lập tức. Khung nhìn tự động vừa khung tất cả thực thể.

Ngoài ra, bạn có thể kéo và thả tệp trực tiếp lên canvas.

## Định dạng tệp được hỗ trợ

| Định dạng | Phần mở rộng | Khi nào dùng |
|-----------|-------------|-------------|
| **DXF** | `.dxf` | Bản vẽ từ FreeCAD, LibreCAD hoặc các công cụ CAD khác |
| **JSON** *(gốc)* | `.json` | Bản vẽ đã lưu trước đó từ KulmanLab CAD — toàn bộ |

## Những gì được nhập từ DXF

KulmanLab phân tích các loại thực thể DXF sau:

| Loại thực thể | Mã DXF |
|--------------|--------|
| Đường thẳng | `LINE` |
| Hình tròn | `CIRCLE` |
| Cung | `ARC` |
| Hình elip | `ELLIPSE` |
| Đường đa đoạn | `LWPOLYLINE` |
| Spline | `SPLINE` |
| Văn bản | `TEXT`, `MTEXT` |
| Kích thước | `DIMENSION` |
| Đa đường dẫn | `MULTILEADER` |
| Hatch | `HATCH` |

Đối với Hatch, tên, tỷ lệ và góc của mẫu được đọc; tên không có trong thư viện mẫu của bạn sẽ quay về ANSI31. Xem [Hatch](../hatch/).

Các thực thể sử dụng loại DXF không được hỗ trợ sẽ bị bỏ qua yên lặng — phần còn lại của bản vẽ vẫn tải.

## Đặt tên tệp và lưu trữ

Tệp được nhập giữ nguyên tên gốc. Nếu tên đó đã được dùng bởi một bản vẽ đã lưu khác, một hậu tố kiểu Finder/Explorer sẽ được tự động thêm vào (`myplan (2)`, `myplan (3)`, …) để mục hiện có không bao giờ bị ghi đè. Bạn có thể đổi tên tệp sau đó từ [File Manager](../file-manager/#doi-ten-mot-tep). Bản vẽ tự động được lưu vào bộ nhớ trình duyệt (IndexedDB) sau khi nhập, xuất hiện trong bảng [File Manager](../file-manager/) và tồn tại qua các lần tải lại trang.

## Điều gì xảy ra với bản vẽ hiện tại

Import thay thế canvas hiện tại. Không có tính năng hợp nhất hoặc thêm vào. Nếu bạn có thay đổi chưa lưu, hãy [Export Manager](../export-manager/) bản vẽ hiện tại trước.

## Xử lý sự cố

| Vấn đề | Nguyên nhân có thể | Cách khắc phục |
|--------|-----------------|--------------|
| Canvas trống sau khi nhập | Thực thể DXF dùng loại không được hỗ trợ (ví dụ: INSERT) | Các thực thể bị bỏ qua — terminal liệt kê từng loại bị bỏ qua kèm số lượng, ví dụ `Could not read INSERT: 12`. Tệp hoàn toàn không phải bản vẽ hợp lệ sẽ báo `Could not read <file>: not a valid drawing file` |
| Nút nhập không phản hồi | Trình duyệt chặn hộp chọn tệp | Nhấp nút thêm một lần nữa |

## Các lệnh liên quan

- [Export Manager](../export-manager/) — tải bản vẽ hiện tại dưới dạng DXF hoặc JSON
- [File Manager](../file-manager/) — duyệt và khôi phục bản vẽ đã lưu trong trình duyệt
- [New File](../new-file/) — bắt đầu bản vẽ trắng
