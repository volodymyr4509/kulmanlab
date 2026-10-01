---
title: "Lệnh KiểuKíchThước — tạo và quản lý kiểu kích thước có tên"
description: "Tạo và quản lý kiểu kích thước CAD cho mũi tên, đường dóng, dấu tâm, chữ, độ chính xác, căn chỉnh và DXF DIMSTYLE."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# KiểuKíchThước

Lệnh mở hộp thoại để tạo, sửa, xem trước và chọn kiểu kích thước có tên. Kích thước thẳng, song song, bán kính, đường kính và góc mới sao chép kiểu hiện hành khi được tạo; kích thước đã có không liên kết trực tiếp.

## Mở hộp thoại

Nhập lệnh đã bản địa hóa trong terminal hoặc bấm nút **Kiểu kích thước** ở bảng **Chú thích**. Danh sách trái chứa các kiểu hiển thị; dấu chọn cho biết kiểu hiện hành và biểu tượng bút chì dùng để đổi tên.

## Đường và mũi tên

**Mũi tên 1 / Mũi tên 2 · Cỡ mũi tên · Khoảng hở đường gióng · Độ vươn đường gióng · Dấu tâm · Cỡ dấu tâm**

Đặt riêng hai đầu mũi tên, kích thước mũi tên, độ lệch và phần kéo dài của đường dóng, cùng loại và kích thước dấu tâm (`Không`, `Dấu` hoặc `Đường`).

## Văn bản

**Kiểu chữ · Phông chữ · Chiều cao chữ · Khung chữ · Khoảng cách chữ · Điểm gắn chữ · Chữ song song · Độ chính xác · Độ chính xác góc**

Phần chữ điều khiển điền nhanh từ Kiểu chữ, phông, chiều cao, đậm, nghiêng, khung, khoảng cách, một trong chín vị trí gắn, căn theo đường kích thước và độ chính xác thẳng/góc. Kiểu chữ chỉ sao chép giá trị một lần, không phải liên kết trực tiếp.

Xem trước dùng cùng bộ dựng hình với vùng vẽ. Chuyển giữa mẫu thẳng, bán kính, đường kính và góc để kiểm tra mũi tên, dấu tâm, vị trí chữ, độ chính xác và khung.

## Tạo và quản lý kiểu

**Mới** nhân bản kiểu đã chọn. `Standard` không thể đổi tên hoặc xóa; kiểu hiện hành cũng không thể xóa. Tên phải duy nhất, không rỗng và hợp lệ với DXF. Kiểu chú thích nhập vào được ẩn nhưng vẫn bảo toàn.

## Đặt kiểu hiện hành

**Đặt hiện hành** biến kiểu đã chọn thành mẫu cho kích thước mới; danh sách trong bảng Chú thích có cùng lựa chọn. Giá trị được sao chép khi tạo. Dimension Continue kế thừa toàn bộ hình thức của kích thước gốc.

## Lưu hoặc hủy

**OK** áp dụng đồng thời đổi tên, thêm, xóa, thuộc tính và lựa chọn kiểu hiện hành. **Đóng**, bấm nền hoặc `Escape` sẽ hủy thay đổi.

## Tương thích DXF

KulmanLab nhập và xuất bản ghi `DIMSTYLE` có tên, gồm các mũi tên riêng, đường dóng, chữ, độ chính xác, dấu tâm, khung, tham chiếu kiểu chữ và cờ chú thích. Khi nhập, ghi đè `DSTYLE` riêng của thực thể được ưu tiên.

Khi xuất, `STYLE` được tham chiếu dùng chiều cao biến đổi (`40 = 0`) và lưu chiều cao cuối ở nhóm `42`. Nhờ vậy chiều cao kiểu chữ cố định không ghi đè chiều cao chữ riêng của kiểu kích thước.

## Lệnh liên quan

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
