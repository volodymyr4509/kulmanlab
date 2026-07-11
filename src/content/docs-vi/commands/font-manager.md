---
title: Lệnh Font Manager — Tải Lên và Quản Lý Phông Chữ TTF Tùy Chỉnh trong KulmanLab CAD
description: Lệnh Font Manager mở hộp thoại để duyệt, xem trước và chọn phông chữ, cũng như tải lên tệp .ttf của riêng bạn. Phông chữ đã tải lên được lưu trong trình duyệt và được nhúng theo tên trong các bản xuất DXF.
group: style
order: 2
---

# Font Manager

Lệnh `FontManager` mở hộp thoại để duyệt và chọn phông chữ, cũng như tải lên tệp `.ttf` của riêng bạn để sử dụng trong các thực thể [Text](../text/) và [Multileader](../leader/).

## Mở Font Manager

- Gõ `FontManager` trong terminal, **hoặc**
- Nhấp nút **Font Manager** trên thanh công cụ [Trình Soạn Thảo Văn Bản](../../interface/text-editor/).

## Nhóm phông chữ

| Nhóm | Nội dung |
|------|----------|
| **Default** | Phông chữ sans-serif tích hợp sẵn — luôn khả dụng |
| **User** | Phông chữ `.ttf` bạn đã tải lên (chỉ hiển thị sau khi bạn thêm một phông) |
| **Free** | 15 phông Google Fonts đi kèm (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Phông chữ hệ điều hành thông dụng (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Nhấp vào bất kỳ phông chữ nào trong danh sách để xem trước ở bên phải — tên, mẫu bảng chữ cái, pangram và chữ số.

## Tải lên phông chữ tùy chỉnh

1. Nhấp **Add Font** ở cuối hộp thoại (hoặc gõ `Font+` trong terminal để mở trực tiếp hộp thoại chọn tệp).
2. Chọn một tệp `.ttf`. Chỉ hỗ trợ phông chữ TrueType — `.otf` và `.woff`/`.woff2` không được hỗ trợ.
3. Tên tệp (không có phần mở rộng) trở thành tên phông chữ trong nhóm **User**. Ví dụ: tải lên `MyFont.ttf` sẽ thêm một phông chữ tên là `MyFont`.

Phông chữ đã tải lên được lưu vĩnh viễn trong trình duyệt (IndexedDB) và tự động tải lại vào lần tiếp theo bạn mở KulmanLab CAD.

## Xóa phông chữ tùy chỉnh

Di chuột qua một phông chữ trong nhóm **User** và nhấp nút **×** bên cạnh nó. Không thể xóa các phông chữ tích hợp sẵn (Default, Free, System).

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `↑` / `↓` | Di chuyển lựa chọn lên hoặc xuống trong danh sách phông chữ |
| `Escape` | Đóng Font Manager |

## Khả năng tương thích DXF

Tên phông chữ được nhúng trong các thực thể **MTEXT** đã xuất dưới dạng mã định dạng nội tuyến, vì vậy một tệp DXF được xuất và nhập lại qua KulmanLab CAD vẫn giữ được phông chữ đã gán. Các *tệp* phông chữ tùy chỉnh không được nhúng trong DXF — chỉ *tên* phông chữ được nhúng. Nếu bạn nhập lại một bản vẽ tham chiếu đến phông chữ tùy chỉnh mà bạn chưa tải lên trên thiết bị này, văn bản sẽ hiển thị bằng phông chữ mặc định cho đến khi bạn tải lên phông chữ có cùng tên.

## Các lệnh liên quan

- [Text](../text/) — đặt các nhãn văn bản mà lựa chọn phông chữ áp dụng vào
- [Match Properties](../match-properties/) — sao chép chiều cao văn bản, nhưng không sao chép phông chữ, giữa các thực thể
