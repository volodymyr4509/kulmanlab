---
title: Lệnh Spline Fit — Vẽ Spline Nội Suy Qua Các Điểm Đã Nhấp trong KulmanLab CAD
description: Lệnh Spline Fit vẽ spline bậc ba đi qua mọi điểm bạn nhấp chính xác. Bên trong đường cong được lưu với cả điểm khớp và điểm kiểm soát được tính toán. Kéo điểm kéo điểm khớp sẽ tái nội suy toàn bộ đường cong. Hỗ trợ DXF đầy đủ dưới dạng thực thể SPLINE.
group: shapes
order: 9
---

# Spline Fit

Lệnh `splinefit` vẽ spline bậc ba đi qua mọi điểm bạn nhấp — đường cong nội suy. Không giống như [Spline CV](../spline-cv/), nơi đường cong chỉ bị hút về phía các điểm kiểm soát, ở đây đường cong bị buộc phải chạm vào từng tọa độ đã nhấp chính xác.

## Vẽ spline qua điểm khớp

1. Gõ `splinefit` trong terminal hoặc nhấp nút **Spline Fit** trên thanh công cụ.
2. **Nhấp để đặt điểm khớp** — đường cong sẽ đi qua mỗi điểm.
3. Nhấn **Enter** để kết thúc (yêu cầu ít nhất 2 điểm).

Bản xem trước trực tiếp hiển thị đường cong nội suy hiện tại khi bạn di chuyển con trỏ. Nhấn **Escape** để loại bỏ tất cả điểm và thoát.

## Chỉnh sửa điểm kéo — định hình lại qua điểm khớp

Một spline fit được chọn hiển thị một điểm kéo cho mỗi điểm khớp:

| Điểm kéo | Vị trí | Tác dụng |
|----------|--------|---------|
| **Điểm khớp** | Tại mỗi vị trí đã nhấp | Kéo để di chuyển điểm khớp đó — toàn bộ đường cong được tái nội suy để đi qua vị trí mới |

Kéo một điểm kéo sẽ tái khớp toàn bộ đường cong, không chỉ các đoạn lân cận.

## Spline Fit vs Spline CV — cái nào dùng

| | Spline Fit | Spline CV |
|---|------|------|
| Đường cong đi qua điểm | Mọi điểm đã nhấp chính xác | Chỉ đầu và cuối (kẹp chặt) |
| Tác dụng chỉnh sửa điểm kéo | Điểm khớp di chuyển → toàn bộ đường cong tái nội suy | CV di chuyển → đường cong bị hút |
| Khả năng dự đoán hình dạng | Cao — đường cong theo các lần nhấp | Thấp hơn — đường cong chậm theo CV |
| Tốt nhất cho | Đường cong phải chạm tọa độ cụ thể | Đường cong thẩm mỹ mượt mà, đường tự do |

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X |
| `,` | Khóa X và chuyển sang nhập Y |
| `Backspace` | Xóa ký tự cuối |
| `Enter` | Xác nhận tọa độ đã gõ, hoặc kết thúc spline nếu không có nhập liệu và ≥ 2 điểm tồn tại |
| `Escape` | Loại bỏ tất cả điểm và thoát |

## DXF — thực thể SPLINE (dạng điểm khớp)

Spline fit được lưu dưới dạng thực thể `SPLINE` trong tệp DXF, lưu trữ cả tọa độ điểm khớp và các điểm kiểm soát được tính toán. `splineFlag` được đặt là `8` (spline điểm khớp) để ứng dụng tải lại biết điểm nào để hiển thị dưới dạng điểm kéo có thể chỉnh sửa.
