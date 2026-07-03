---
title: Xuất — Tải Bản Vẽ Dưới Dạng DXF hoặc JSON trong KulmanLab CAD
description: Lệnh Export tải bản vẽ hiện tại xuống dưới dạng DXF hoặc JSON (định dạng gốc). JSON lưu giữ tất cả thực thể bao gồm kích thước và đường dẫn; DXF tương thích với các công cụ CAD khác.
---

# Xuất

Lệnh **Export** tải bản vẽ hiện tại xuống hệ thống tệp của bạn. Có hai định dạng: **DXF** để tương thích với các công cụ CAD khác và **JSON** để lưu đầy đủ trong KulmanLab CAD.

## Cách xuất

1. Nhấp nút **Export** trên thanh công cụ (biểu tượng tải xuống) trong bảng File.
2. Cửa sổ **Export Manager** mở ra.
3. Nhấp một thẻ định dạng để chọn — **JSON** hoặc **DXF**.
4. Nhấp nút **Export**. Tệp tự động tải xuống vào thư mục tải xuống mặc định.

## Chọn định dạng

| Định dạng | Phần mở rộng | Tốt nhất cho | Hạn chế |
|-----------|-------------|-------------|---------|
| **JSON** *(gốc)* | `.json` | Lưu công việc để mở lại trong KulmanLab CAD | Không tương thích với các công cụ CAD khác |
| **DXF** | `.dxf` | Chia sẻ với FreeCAD, LibreCAD, v.v. | Kích thước và đường dẫn không được xuất |

## Nội dung được xuất theo định dạng

### Xuất JSON

Tất cả loại thực thể được bao gồm:
- Đường thẳng, hình tròn, cung, hình elip, đường đa đoạn, spline, văn bản
- Kích thước (tuyến tính, căn chỉnh, tiếp tục, bán kính, đường kính)
- Đa đường dẫn
- Định nghĩa lớp và bảng kiểu đường

### Xuất DXF

Chỉ các thực thể hình học được bao gồm:
- Đường thẳng, hình tròn, cung, hình elip, đường đa đoạn (xuất dưới dạng `LWPOLYLINE`), spline, văn bản
- Định nghĩa lớp và bảng kiểu đường

**Không bao gồm trong DXF:** thực thể kích thước và đa đường dẫn.

## Sự khác biệt giữa Xuất và In

| Tính năng | Xuất | In |
|-----------|------|---|
| Đầu ra | Tệp nguồn vector (.dxf / .json) | Hình ảnh raster (.png / .jpeg / .webp / .pdf) |
| Có thể chỉnh sửa trong công cụ khác | Có (DXF) | Không |
| Lưu giữ lớp & kiểu đường | Có | Không (được render phẳng) |
| Ghi chú kích thước & đường dẫn | Chỉ JSON | Có |

## Các lệnh liên quan

- [Nhập](../import/) — mở tệp DXF hoặc JSON
- [In](../print/) — xuất canvas dưới dạng hình ảnh PNG, JPEG, WebP hoặc PDF
- [Tệp](../files/) — duyệt bản vẽ được lưu trong bộ nhớ trình duyệt
