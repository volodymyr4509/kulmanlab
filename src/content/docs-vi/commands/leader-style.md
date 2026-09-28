---
title: Lệnh KiểuĐườngDẫn — Quản lý kiểu đường dẫn
description: Tạo kiểu đường dẫn CAD với đầu mũi tên, điểm gắn chữ, khoảng hở, góc xoay, phông, chiều cao và khung chữ.
keywords: [kiểu đường dẫn CAD, kiểu đa đường dẫn, MLEADERSTYLE, đầu mũi tên CAD, điểm gắn chữ, kiểu DXF, kulmanlab]
group: style
order: 7
---

# LeaderStyle

Lệnh `KiểuĐườngDẫn` mở trình quản lý các kiểu đường dẫn có tên. Mỗi [Đường dẫn](../leader/) mới sẽ sao chép thiết lập của kiểu *hiện tại* khi được tạo.

## Chỉnh sửa kiểu

Nhập `KiểuĐườngDẫn` hoặc bấm **Kiểu đường dẫn** trong bảng chú thích. Dấu ✓ chỉ kiểu hiện tại; dùng biểu tượng bút chì cạnh tên để đổi tên. Bản xem trước cập nhật ngay bằng cùng bộ kết xuất với bản vẽ.

| Trường | Chức năng |
|---|---|
| Điểm gắn chữ | Trên, Giữa, Dưới hoặc Gạch chân |
| Đầu / Cỡ mũi tên | Ký hiệu và kích thước ở đầu mỗi nhánh |
| Khoảng hở đoạn nằm ngang | Khoảng cách giữa đoạn ngang và chữ |
| Góc xoay chữ | Góc của nhãn tính bằng độ |
| Kiểu chữ | Sao chép một lần phông, chiều cao, đậm và nghiêng từ [TextStyle](../text-style/) |
| Phông / Chiều cao chữ | Kiểu chữ và chiều cao của nhãn |
| Đậm / Nghiêng | Định dạng chữ độc lập |
| Khung chữ | Khung chữ nhật quanh nhãn |

**Mới** nhân bản kiểu đang chọn. Không thể đổi tên hoặc xóa `Standard`; cũng không thể xóa kiểu hiện tại. **Đặt làm hiện tại** chỉ ảnh hưởng đến đường dẫn tạo sau đó — đối tượng hiện có không thay đổi. Tên trống, trùng hoặc không hợp lệ trong DXF sẽ khóa **OK**. Kiểu chú thích đã nhập bị ẩn nhưng vẫn được giữ lại.

## Lưu và DXF

KulmanLab nhập và xuất bản ghi `MLEADERSTYLE`. Tên, đầu và cỡ mũi tên, khoảng hở, chiều cao, đính kèm văn bản, khung và cờ chú thích được bảo toàn như các trường của kiểu. Khi xuất, nhóm `342` trỏ đến KiểuChữ có phông, đậm, nghiêng và chiều cao khớp; nếu không khớp thì dùng `Standard`. Tham chiếu DXF này không biến thao tác sao chép một lần trong ứng dụng thành liên kết trực tiếp. Một giá trị đính kèm được ghi vào cả trường DXF trái và phải.

Xem thêm [Leader](../leader/), [LeaderAdd](../leader-add/) và [LeaderRemove](../leader-remove/).
