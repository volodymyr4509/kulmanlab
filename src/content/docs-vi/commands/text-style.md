---
title: Lệnh KiểuChữ — Quản lý kiểu chữ
description: Tạo kiểu chữ CAD với phông, chiều cao, đậm, nghiêng, giãn dòng, căn chỉnh và khung.
keywords: [kiểu chữ CAD, phông chữ CAD, khung chữ, căn chỉnh văn bản, kiểu DXF, kulmanlab]
group: style
order: 6
---

# TextStyle

Lệnh `KiểuChữ` mở trình quản lý kiểu chữ. Bạn có thể tạo kiểu có tên, sửa các giá trị mặc định và chọn kiểu *hiện hành*. Mỗi [Văn bản](../text/) mới sẽ sao chép các thiết lập của kiểu hiện hành khi được tạo.

## Sử dụng trình quản lý

Nhập `KiểuChữ` hoặc bấm **Kiểu chữ** trong bảng chú thích. Dấu ✓ chỉ kiểu hiện hành; bấm đúp vào một hàng để đặt kiểu đó làm hiện hành.

| Trường | Chức năng |
|---|---|
| Đổi tên | Dùng biểu tượng bút chì cạnh tên để sửa ngay trong danh sách; không thể đổi tên `Standard`. |
| Phông chữ / Chiều cao | Kiểu chữ và chiều cao dương bắt buộc. Giá trị bằng không hoặc âm được đổi thành `1`; trình quản lý chỉ nhận giá trị lớn hơn `0`. |
| Đậm / Nghiêng | Hai định dạng bật tắt độc lập |
| Giãn dòng | Khoảng cách giữa các dòng |
| Căn ngang | Trái, giữa, phải hoặc căn đều |
| Khung | Khung chữ nhật quanh văn bản mới |

Bản xem trước dùng cùng bộ kết xuất với vùng vẽ và hiển thị hai dòng. Phông, chiều cao, đậm, nghiêng, khung, giãn dòng và căn chỉnh cập nhật ngay; số hiển thị là mức thu phóng vừa khung. Kiểu mới mặc định căn **trái**.

**Mới** nhân bản kiểu đang chọn. **Xóa** không thể xóa `Standard` hoặc kiểu hiện hành. **Đặt hiện hành** chỉ ảnh hưởng đến văn bản tạo sau đó; văn bản hiện có không thay đổi. Tên trống, trùng hoặc không hợp lệ trong DXF sẽ khóa **OK**. Kiểu chú thích đã nhập bị ẩn nhưng dữ liệu vẫn được giữ lại.

## Lưu và DXF

**OK** lưu thay đổi; **Đóng** hoặc `Escape` hủy chúng. Dùng `↑` và `↓` để di chuyển trong danh sách. Tên, tệp phông, chiều cao, đậm, nghiêng và cờ chú thích thuộc kiểu chữ DXF. Khung, giãn dòng và căn ngang là giá trị mặc định theo từng văn bản của KulmanLab, không phải trường trong bảng STYLE.

Xem thêm [Text](../text/), [FontManager](../font-manager/) và [MatchProperties](../match-properties/).
