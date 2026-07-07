---
title: KulmanLab CAD — Tài Liệu Tham Khảo Lệnh
description: Tài liệu tham khảo lệnh KulmanLab CAD — hướng dẫn đầy đủ về mọi lệnh vẽ, chỉnh sửa, chú thích, lớp, đo lường và tệp trong KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, lệnh CAD, CAD trình duyệt miễn phí, chỉnh sửa DXF trực tuyến, lệnh vẽ, kulmanlab lệnh]
---

# KulmanLab CAD — Tài Liệu Tham Khảo Lệnh

Chào mừng bạn đến với tài liệu tham khảo lệnh **KulmanLab CAD**. [KulmanLab CAD](https://kulmanlab.com) là công cụ CAD miễn phí chạy trên trình duyệt để vẽ, chỉnh sửa và xuất tệp DXF — không cần cài đặt. Sử dụng thanh bên để duyệt tất cả các lệnh được nhóm theo bảng điều khiển.

## Hình Dạng

| Lệnh | Chức năng |
|------|-----------|
| [Line](./commands/line/) | Vẽ đường thẳng giữa hai điểm |
| [Polyline](./commands/polyline/) | Vẽ đường đa đoạn nhiều khúc |
| [Rectangle](./commands/rectangle/) | Vẽ hình chữ nhật căn theo trục |
| [Circle](./commands/circle/) | Vẽ hình tròn theo tâm và bán kính |
| [Arc](./commands/arc/) | Vẽ cung qua ba điểm |
| [Ellipse](./commands/ellipse/) | Vẽ hình elip theo tâm và hai trục |
| [Text](./commands/text/) | Đặt nhãn văn bản lên canvas |
| [Spline CV](./commands/spline-cv/) | Vẽ spline bằng cách đặt các điểm kiểm soát |
| [Spline Fit](./commands/spline-fit/) | Vẽ spline đi qua các điểm được bấm |

## Chỉnh Sửa

| Lệnh | Chức năng |
|------|-----------|
| [Move](./commands/move/) | Di chuyển các đối tượng được chọn đến vị trí mới |
| [Copy](./commands/copy/) | Sao chép các đối tượng được chọn đến vị trí mới |
| [Rotate](./commands/rotate/) | Xoay các đối tượng được chọn quanh điểm cơ sở |
| [Mirror](./commands/mirror/) | Đối xứng các đối tượng được chọn qua một đường |
| [Scale](./commands/scale/) | Thay đổi tỉ lệ các đối tượng được chọn quanh điểm cơ sở |
| [Delete](./commands/delete/) | Xóa các đối tượng được chọn khỏi bản vẽ |
| [Trim](./commands/trim/) | Cắt đoạn đường thẳng tại các giao điểm |
| [Extend](./commands/extend/) | Kéo dài đường thẳng đến giao điểm ranh giới gần nhất |
| [Offset](./commands/offset/) | Tạo bản sao song song của đối tượng ở khoảng cách cho trước |
| [Fillet](./commands/fillet/) | Bo góc giữa hai đường thẳng bằng cung tiếp tuyến |
| [Chamfer](./commands/chamfer/) | Vát góc thẳng giữa hai đường thẳng hoặc đường đa đoạn |
| [Undo](./commands/undo/) | Hoàn tác thao tác vừa thực hiện |
| [Redo](./commands/redo/) | Làm lại thao tác vừa hoàn tác |

## Chú Thích

| Lệnh | Chức năng |
|------|-----------|
| [Leader](./commands/leader/) | Vẽ chú thích đa đầu mũi tên với đầu mũi và văn bản |
| [Leader+](./commands/leader-add/) | Thêm một cánh tay vào chú thích đa đầu mũi tên hiện có |
| [Leader−](./commands/leader-remove/) | Xóa một cánh tay khỏi chú thích đa đầu mũi tên |
| [Dimension Linear](./commands/dim-linear/) | Thêm kích thước ngang hoặc dọc |
| [Dimension Aligned](./commands/dim-aligned/) | Thêm kích thước căn chỉnh theo hai điểm |
| [Dimension Continue](./commands/dim-continue/) | Tiếp nối kích thước mới từ kích thước cuối |
| [Dimension Radius](./commands/dim-radius/) | Thêm kích thước bán kính cho hình tròn hoặc cung |
| [Dimension Diameter](./commands/dim-diameter/) | Thêm kích thước đường kính cho hình tròn |
| [Dimension Angular](./commands/dim-angular/) | Thêm kích thước góc cho hai đường thẳng, cung, hoặc hình tròn |

## Lớp

| Lệnh | Chức năng |
|------|-----------|
| [LayerMakeCurrent](./commands/layer-make-current/) | Đặt lớp hiện tại theo lớp của đối tượng được bấm |
| [LayerMatch](./commands/layer-match/) | Gán lại các đối tượng được chọn về lớp của đối tượng nguồn |
| [LayerIsolate](./commands/layer-isolate/) | Đóng băng tất cả các lớp trừ những lớp của đối tượng được chọn |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | Bỏ đóng băng tất cả các lớp trong một bước |

## Bố Cục

| Lệnh | Chức năng |
|------|-----------|
| [ViewportRectangle](./commands/viewport-rectangle/) | Tạo khung nhìn trong bố cục giấy bằng cách chọn hai góc |
| [ViewportCopy](./commands/viewport-copy/) | Sao chép khung nhìn sang vị trí mới |
| [PageManager](./commands/page-manager/) | Chỉnh sửa kích thước giấy và tỉ lệ cho bố cục đang hoạt động |

## Điều Hướng

| Lệnh | Chức năng |
|------|-----------|
| [Pan](./commands/pan/) | Bấm và kéo để di chuyển khung nhìn |
| [Zoom In](./commands/zoom-in/) | Phóng to khung nhìn |
| [Zoom Out](./commands/zoom-out/) | Thu nhỏ khung nhìn |
| [Fit](./commands/fit/) | Vừa khít tất cả đối tượng vào khung nhìn |

## Đo Lường

| Lệnh | Chức năng |
|------|-----------|
| [Distance](./commands/distance/) | Đo khoảng cách giữa hai điểm |
| [Angle](./commands/angle/) | Đo góc giữa ba điểm |
| [Area](./commands/area/) | Đo diện tích và chu vi của đa giác |

## Kiểu Dáng

| Lệnh | Chức năng |
|------|-----------|
| [Match Properties](./commands/match-properties/) | Sao chép màu sắc, lớp và các thuộc tính khác từ một đối tượng sang đối tượng khác |
| [Font Manager](./commands/font-manager/) | Duyệt, chọn và tải lên phông chữ TTF tùy chỉnh |

## Tệp

| Lệnh | Chức năng |
|------|-----------|
| [Import](./commands/import/) | Mở tệp bản vẽ DXF hoặc JSON |
| [New File](./commands/new-file/) | Bắt đầu bản vẽ trống mới |
| [Files](./commands/files/) | Duyệt và khôi phục các bản vẽ gần đây |
| [Print](./commands/print/) | Xuất vùng bản vẽ dưới dạng hình ảnh hoặc PDF |
| [Export](./commands/export/) | Tải xuống bản vẽ dưới dạng DXF hoặc JSON |
| [WipeStorage](./commands/wipestorage/) | Xóa tất cả bản vẽ khỏi bộ nhớ trình duyệt |

## Khôi Phục

Nếu ứng dụng bị lỗi khi khởi động (ví dụ: sau khi làm việc với tọa độ rất lớn), bạn có thể xóa tất cả dữ liệu được lưu trữ cục bộ bằng cách thêm `?reset` vào URL:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Thao tác này xóa mọi thứ khỏi cơ sở dữ liệu cục bộ của trình duyệt và bắt đầu bản vẽ trống mới. Tham số `?reset` tự xóa khỏi URL sau đó. Chỉ sử dụng tính năng này như biện pháp cuối cùng khi [WipeStorage](./commands/wipestorage/) không thể truy cập do ứng dụng không tải được.

## Cách Các Lệnh Hoạt Động

Mỗi lệnh đều tuân theo cùng một quy trình:

1. **Kích hoạt** — bấm nút thanh công cụ hoặc nhập tên lệnh trong terminal ở phía dưới màn hình.
2. **Làm theo gợi ý** — terminal hiển thị dữ liệu đầu vào tiếp theo cần nhập.
3. **Hoàn thành hoặc hủy** — hầu hết các lệnh kết thúc tự động sau đầu vào cuối cùng. Nhấn **Escape** bất kỳ lúc nào để hủy.

## Chọn Đối Tượng

Một số lệnh chỉnh sửa (Move, Copy, Rotate, Mirror, Scale, Delete) có cùng cách chọn đối tượng:

- **Bấm** vào đối tượng để chọn hoặc bỏ chọn.
- **Kéo sang phải** (trái sang phải) để chọn nghiêm ngặt — chỉ chọn các đối tượng hoàn toàn nằm trong hộp.
- **Kéo sang trái** (phải sang trái) để chọn cắt ngang — chọn bất kỳ đối tượng nào giao với hộp.
- Nhấn **Enter** hoặc **Space** để xác nhận chọn và tiến hành bước tiếp theo.

## Giao Diện

| Tính Năng | Mô Tả |
|-----------|-------|
| [Lưới & Bắt Điểm](./interface/grid-snap/) | Hiển thị lưới tham chiếu và khóa con trỏ vào các điểm lưới |
| [Kiểu Đường](./interface/linetype/) | Điều khiển kiểu đường nét đứt cho các đối tượng mới |
| [Độ Dày Đường](./interface/lineweight/) | Điều khiển độ dày nét cho các đối tượng mới |
| [Trình Chỉnh Sửa Văn Bản](./interface/text-editor/) | Định dạng văn bản nhiều dòng với chữ đậm, nghiêng và các tùy chọn khác |
