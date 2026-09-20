---
title: Lệnh Hatch Manager — Duyệt và Tải Lên Mẫu .pat
description: Lệnh Hatch Manager mở hộp thoại để duyệt các mẫu hatch với bản xem trước mẫu vải trực tiếp, và để tải lên các tệp mẫu .pat của riêng bạn. Các tệp đã tải lên được lưu trong trình duyệt và che khuất các mẫu tích hợp cùng tên.
keywords: [hatch manager, mẫu hatch tùy chỉnh CAD, tải lên tệp pat, acad.pat, thư viện mẫu hatch, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

Lệnh `QuảnLýMẫuTô` mở hộp thoại để duyệt các mẫu hatch với bản xem trước mẫu vải trực tiếp, và để tải lên các tệp mẫu `.pat` của riêng bạn dùng với [Hatch](../hatch/).

## Mở Hatch Manager

Gõ `QuảnLýMẫuTô` trong terminal. Đây là chức năng tách biệt với bộ chọn mẫu mở ra khi bạn nhấp vào chip **Pattern** của một hatch — bộ chọn chọn một mẫu cho một hatch, Hatch Manager là nơi bạn thêm hoặc xóa các tệp `.pat`.

## Các Nhóm Mẫu

| Nhóm | Nội dung |
|------|----------|
| **User** | Các mẫu từ các tệp `.pat` bạn tự tải lên, được nhóm phụ theo tệp mà mỗi mẫu xuất phát (chỉ hiển thị sau khi bạn tải lên một tệp) |
| **Standard** | `SOLID` cộng với bảng mẫu riêng của bản vẽ này — mỗi bản vẽ mới bắt đầu với cùng thư viện tích hợp, giống như các lớp và kiểu đường của nó |

Nhấp vào bất kỳ mẫu nào trong danh sách (hoặc dùng `↑`/`↓`) để xem trước ở bên phải — một mẫu vải được vẽ bằng cùng đoạn mã dùng để tô canvas, vì vậy đó chính xác là những gì bản vẽ sẽ hiển thị, cùng với tên, mô tả và số lượng đường của mẫu.

## Tải Lên Tệp Mẫu Tùy Chỉnh

1. Nhấp **Add .pat File** ở chân hộp thoại.
2. Chọn một tệp `.pat` — định dạng mẫu hatch tiêu chuẩn. Một tệp duy nhất thường định nghĩa nhiều mẫu có tên cùng một lúc; tất cả xuất hiện dưới dạng các mục riêng biệt được nhóm dưới tên của tệp đó.
3. Các tệp đã tải lên được lưu vĩnh viễn trong trình duyệt (IndexedDB), sắp xếp theo thứ tự tệp thêm gần đây nhất trước, và tự động tải lại vào lần tiếp theo bạn mở KulmanLab CAD.

Việc tải lên một tệp định nghĩa mẫu có cùng tên với một mẫu tích hợp sẽ **che khuất** mặc định — đây là cách được hỗ trợ để có được các định nghĩa mẫu chính thức của Autodesk: tải lên một `acad.pat` thật, và các phiên bản ANSI31 cũng như các tên tiêu chuẩn khác của nó sẽ thay thế các xấp xỉ riêng của KulmanLab.

Nếu một bản vẽ tham chiếu đến tên mẫu không có trong thư viện của bạn — được nhập từ một DXF dùng mẫu từ một `acad.pat` mà bạn chưa tải lên — hatch vẫn được hiển thị, dùng `ANSI31` làm thay thế, thay vì quay về phần tô phẳng, không có mẫu.

## Xóa Tệp Mẫu

Nhấp **×** cạnh tên tệp trong nhóm **User** để xóa nó cùng với mọi mẫu mà nó định nghĩa. Bất kỳ hatch nào đã dùng một trong các mẫu đó sẽ ngay lập tức quay về `ANSI31`. Các mẫu **Standard** tích hợp không thể bị xóa.

## Tham Chiếu Bàn Phím

| Phím | Hành động |
|------|-----------|
| `↑` / `↓` | Di chuyển lựa chọn lên hoặc xuống trong danh sách mẫu |
| `Escape` | Đóng Hatch Manager |

## Các Lệnh Liên Quan

- [Hatch](../hatch/) — tô đầy một vùng đã nhấp bằng mẫu hiện đang được chọn
- [Font Manager](../font-manager/) — mô hình tải lên/duyệt tương tự, dành cho phông chữ tùy chỉnh thay vì mẫu hatch
