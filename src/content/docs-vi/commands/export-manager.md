---
title: Export Manager — Tải xuống Bản vẽ dưới dạng DXF hoặc JSON
description: Tải bản vẽ dưới dạng DXF hoặc JSON, tích chọn theo từng loại đối tượng những gì sẽ vào tệp. Cả hai đều mang hình học, chữ, kích thước và mặt cắt gạch.
keywords: [xuất DXF, xuất tệp CAD, tải DXF trình duyệt, lưu DXF trực tuyến, xuất JSON CAD, xuất KulmanLab, tải tệp CAD, xuất DXF, lưu bản vẽ vào tệp, tải DXF]
group: file
order: 6
---

# Export Manager

Lệnh `exportmanager` tải bản vẽ hiện tại xuống hệ thống tệp của bạn. Hai định dạng đứng cạnh nhau — **DXF** để tương thích với các công cụ CAD khác và **JSON** để lưu trọn vẹn bên trong KulmanLab CAD — mỗi bên có danh sách riêng về những gì sẽ đưa vào tệp.

## Cách xuất

1. Nhấp nút **Export** trên thanh công cụ (biểu tượng tải xuống) trong bảng tệp, hoặc gõ `exportmanager` trong terminal.
2. Cửa sổ **Export Manager** mở ra với hai cột, **JSON** và **DXF**, mỗi cột liệt kê các loại đối tượng của bản vẽ kèm ô tích và số lượng.
3. Bỏ tích những gì bạn muốn để ra ngoài. Ban đầu mọi thứ đều được tích.
4. Bấm **Export JSON** hoặc **Export DXF**. Tệp tải về thư mục tải xuống mặc định và cửa sổ đóng lại.

Nhấn `Escape` để đóng cửa sổ bật lên mà không xuất.

## Chọn thứ sẽ xuất ra

Cả hai cột đều liệt kê cùng các loại đối tượng, mỗi loại kèm số lượng có trong bản vẽ:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Khi cửa sổ mở ra mọi thứ đều được tích, nên xuất ngay sẽ cho bạn toàn bộ bản vẽ. Bỏ tích một loại để nó nằm ngoài đúng tệp đó.

- **Hai cột độc lập với nhau.** Bỏ tích Hatches ở phía DXF không làm thay đổi thứ **Export JSON** tạo ra — mỗi định dạng giữ lựa chọn riêng.
- **Loại bạn không có sẽ bị làm mờ.** Hàng có số lượng `0` không tích được, nên danh sách đồng thời là một bản kiểm kê nhanh của bản vẽ.
- **Các con số là ảnh chụp tại thời điểm đó.** Chúng được lấy khi cửa sổ mở và không cập nhật nếu bản vẽ thay đổi phía sau. Đóng rồi mở lại để làm mới.
- **Không có gì bị xóa.** Việc bỏ tích chỉ định hình tệp xuất ra; bản thân bản vẽ vẫn nguyên vẹn.

**Linear Dimensions** bao gồm kích thước thẳng, canh theo phương và nối tiếp: cùng một loại đối tượng do ba lệnh khác nhau tạo ra. Bán kính, đường kính và góc mỗi thứ có hàng riêng.

Để làm tệp cắt, bỏ tích Text, bốn hàng kích thước, Leaders và Hatches rồi bấm **Export DXF** — xem [chuẩn bị DXF cho cắt laser](/vi/blog/prepare-dxf-for-laser-cutting/).

## Chọn định dạng

| Định dạng | Phần mở rộng | Tốt nhất cho | Hạn chế |
|-----------|--------------|--------------|---------|
| **JSON** *(gốc)* | `.json` | Lưu công việc để mở lại trong KulmanLab CAD | Không tương thích với các công cụ CAD khác |
| **DXF** | `.dxf` | Chia sẻ với FreeCAD, LibreCAD, v.v. | Giữ lại được bao nhiêu tùy phần mềm nhận |

**Khi nào dùng JSON:** bất cứ khi nào bạn muốn lưu một bản sao đầy đủ của công việc. JSON là định dạng gốc của KulmanLab và bảo toàn chính xác mọi thực thể — bao gồm kích thước, đường dẫn, hatch và tất cả dữ liệu lớp.

**Khi nào dùng DXF:** khi bạn cần chuyển giao bản vẽ cho ai đó đang sử dụng ứng dụng CAD khác. Tệp xuất ra sử dụng định dạng DXF AC1032 và có thể mở được trong hầu hết các công cụ tương thích DXF.

## Những gì được xuất theo từng định dạng

### Xuất JSON

Mỗi loại thực thể đều được bao gồm:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Kích thước (linear, aligned, continued, radius, diameter, góc)
- Leaders (multileader)
- Hatches, bao gồm mẫu, tỷ lệ, góc và điểm gốc của chúng
- Layers và Linetypes

### Xuất DXF

Mỗi loại thực thể đều được bao gồm:

- Lines, Circles, Arcs, Ellipses, Polylines (được xuất dưới dạng `LWPOLYLINE`), Splines
- Text
- Kích thước (linear, aligned, continued, radius, diameter, góc)
- Leaders (multileader)
- Hatches, bao gồm mẫu, tỷ lệ, góc và điểm gốc của chúng
- Layers và Linetypes

Tệp được ghi ở dạng DXF AC1032, nên bản vẽ xuất từ KulmanLab sẽ mở ra với phần chú giải còn nguyên trong các công cụ đọc được DXF khác, thay vì đến nơi chỉ còn hình học trơ.

Còn mỗi phần mềm nhận sẽ xử lý nó ra sao thì vẫn khác nhau — mức hỗ trợ DXF không giống nhau giữa các công cụ, và một bản cũ có thể bỏ qua những đối tượng mà bản mới đọc được. Nếu bản vẽ buộc phải trông y hệt ở mọi nơi, hãy dùng [Print Manager](../print-manager/) để chụp lại thành PDF hoặc ảnh.

## Tên tệp xuất

Tệp đã tải xuống được đặt tên theo tệp bản vẽ hiện tại (ví dụ `myplan.json`). Phần mở rộng thay đổi để khớp với định dạng đã chọn. Bản vẽ chưa từng được đặt tên sẽ xuất ra thành `drawing.dxf` hoặc `drawing.json`.

## Sự khác biệt giữa Export Manager và Print Manager

| Tính năng | Export Manager | Print Manager |
|-----------|-----------------|-----------------|
| Đầu ra | Tệp nguồn vector (.dxf / .json) | Hình ảnh raster (.png / .jpeg / .webp / .pdf) |
| Có thể chỉnh sửa trong công cụ khác | Có (DXF) | Không |
| Bảo toàn layers & linetypes | Có | Không (kết xuất phẳng) |
| Lưu giữ kích thước & leaders | Có | Có |

Dùng **Export Manager** khi bạn cần một tệp có thể chỉnh sửa. Dùng [Print Manager](../print-manager/) khi bạn cần một ảnh chụp nhanh trực quan.

## Các lệnh liên quan

- [Import](../import/) — mở một tệp DXF hoặc JSON
- [Print Manager](../print-manager/) — xuất canvas dưới dạng hình ảnh PNG, JPEG, WebP hoặc PDF
- [File Manager](../file-manager/) — duyệt các bản vẽ đã lưu trong bộ nhớ trình duyệt
