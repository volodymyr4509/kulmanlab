---
title: Export Manager — Tải xuống Bản vẽ dưới dạng DXF hoặc JSON
description: Export Manager tải xuống bản vẽ hiện tại dưới dạng tệp DXF hoặc JSON (gốc). Mỗi định dạng liệt kê chính xác những loại thực thể nào nó mang theo, cạnh nhau, để bạn thấy trước khi tải xuống những gì DXF bỏ qua — hiện tại là hatch, kích thước, đường dẫn và văn bản.
keywords: [xuất DXF, xuất tệp CAD, tải DXF trình duyệt, lưu DXF trực tuyến, xuất JSON CAD, xuất KulmanLab, tải tệp CAD, xuất DXF, lưu bản vẽ vào tệp, tải DXF]
group: file
order: 6
---

# Export Manager

Lệnh `exportmanager` tải xuống bản vẽ hiện tại vào hệ thống tệp của bạn. Có hai định dạng khả dụng, hiển thị dưới dạng thẻ cạnh nhau: **DXF** để tương thích với các công cụ CAD khác và **JSON** để lưu với độ trung thực hoàn toàn trong KulmanLab CAD — mỗi thẻ liệt kê chính xác những loại thực thể nào định dạng đó mang theo.

## Cách xuất

1. Nhấp nút **Export** trên thanh công cụ (biểu tượng tải xuống) trong bảng tệp, hoặc gõ `exportmanager` trong terminal.
2. Cửa sổ bật lên **Export Manager** mở ra hiển thị thẻ JSON và DXF cạnh nhau, mỗi thẻ liệt kê những gì được xuất (và, đối với DXF, những gì bị bỏ qua).
3. Nhấp vào một thẻ để chọn định dạng — **JSON** hoặc **DXF**.
4. Nhấp nút **Export \<FORMAT\>**. Tệp sẽ tự động tải xuống thư mục tải xuống mặc định của bạn.

Nhấn `Escape` để đóng cửa sổ bật lên mà không xuất.

## Chọn định dạng

| Định dạng | Phần mở rộng | Tốt nhất cho | Hạn chế |
|-----------|--------------|--------------|---------|
| **JSON** *(gốc)* | `.json` | Lưu công việc để mở lại trong KulmanLab CAD | Không tương thích với các công cụ CAD khác |
| **DXF** | `.dxf` | Chia sẻ với FreeCAD, LibreCAD, v.v. | Hatch, kích thước, đường dẫn và văn bản không được xuất |

**Khi nào dùng JSON:** bất cứ khi nào bạn muốn lưu một bản sao đầy đủ của công việc. JSON là định dạng gốc của KulmanLab và bảo toàn chính xác mọi thực thể — bao gồm kích thước, đường dẫn, hatch và tất cả dữ liệu lớp.

**Khi nào dùng DXF:** khi bạn cần chuyển giao bản vẽ cho ai đó đang sử dụng ứng dụng CAD khác. Tệp xuất ra sử dụng định dạng DXF AC1032 và có thể mở được trong hầu hết các công cụ tương thích DXF.

## Những gì được xuất theo từng định dạng

### Xuất JSON

Mỗi loại thực thể đều được bao gồm:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Kích thước (linear, aligned, continued, radius, diameter)
- Leaders (multileader)
- Hatches, bao gồm mẫu, tỷ lệ, góc và điểm gốc của chúng
- Layers và Linetypes

### Xuất DXF

Chỉ các thực thể hình học được bao gồm:

- Lines, Circles, Arcs, Ellipses, Polylines (được xuất dưới dạng `LWPOLYLINE`), Splines
- Layers và Linetypes

**Không được xuất sang DXF:** hatch, kích thước, leader và văn bản. Kích thước và leader sử dụng cấu trúc dữ liệu riêng của KulmanLab không thể được biểu diễn trung thực trong DXF tiêu chuẩn; hatch hiện vẫn hoàn toàn không được xuất sang DXF, mặc dù chúng được nhập từ đó; việc xuất văn bản cũng chưa được triển khai. Nếu bản vẽ của bạn có bất kỳ mục nào trong số này, hãy dùng JSON hoặc [Print Manager](../print-manager/) để lưu giữ chúng.

## Tên tệp xuất

Tệp đã tải xuống được đặt tên theo tệp bản vẽ hiện tại (ví dụ `myplan.json`). Phần mở rộng thay đổi để khớp với định dạng đã chọn.

## Sự khác biệt giữa Export Manager và Print Manager

| Tính năng | Export Manager | Print Manager |
|-----------|-----------------|-----------------|
| Đầu ra | Tệp nguồn vector (.dxf / .json) | Hình ảnh raster (.png / .jpeg / .webp / .pdf) |
| Có thể chỉnh sửa trong công cụ khác | Có (DXF) | Không |
| Bảo toàn layers & linetypes | Có | Không (kết xuất phẳng) |
| Lưu giữ kích thước & leaders | Chỉ JSON | Có |

Dùng **Export Manager** khi bạn cần một tệp có thể chỉnh sửa. Dùng [Print Manager](../print-manager/) khi bạn cần một ảnh chụp nhanh trực quan.

## Các lệnh liên quan

- [Import](../import/) — mở một tệp DXF hoặc JSON
- [Print Manager](../print-manager/) — xuất canvas dưới dạng hình ảnh PNG, JPEG, WebP hoặc PDF
- [File Manager](../file-manager/) — duyệt các bản vẽ đã lưu trong bộ nhớ trình duyệt
