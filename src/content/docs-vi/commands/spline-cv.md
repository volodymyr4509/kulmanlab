---
title: Lệnh Spline CV — Vẽ B-Spline Bằng Cách Đặt Điểm Kiểm Soát trong KulmanLab CAD
description: Lệnh Spline CV vẽ B-spline bậc ba bằng cách đặt các điểm kiểm soát. Đường cong bị hút về phía các điểm kiểm soát nhưng chỉ đi qua điểm đầu và cuối (nút kẹp chặt). Mỗi điểm kéo CV có thể được kéo để định hình lại đường cong sau khi đặt. Hỗ trợ DXF đầy đủ dưới dạng thực thể SPLINE.
group: shapes
order: 8
---

# Spline CV

Lệnh `splinecv` vẽ một **B-spline bậc ba** bằng cách đặt các điểm kiểm soát (CV). Đường cong kết quả bị hút về phía mỗi CV nhưng không đi qua chúng — ngoại trừ ở điểm đầu và điểm cuối, nơi **nút kẹp chặt** neo đường cong chính xác. Điều này cung cấp cho bạn kiểm soát hình dạng trực quan.

## Vẽ spline bằng điểm kiểm soát

1. Gõ `splinecv` trong terminal hoặc nhấp nút **Spline CV** trên thanh công cụ.
2. **Nhấp để đặt điểm kiểm soát** — mỗi lần nhấp thêm một điểm.
3. Nhấn **Enter** để kết thúc (yêu cầu ít nhất 2 điểm).

Bản xem trước trực tiếp cập nhật khi bạn di chuyển con trỏ. Nhấn **Escape** để loại bỏ tất cả điểm đã đặt và thoát.

## Chỉnh sửa điểm kéo — định hình lại qua điểm kiểm soát

Một spline CV được chọn hiển thị một điểm kéo cho mỗi điểm kiểm soát:

| Điểm kéo | Vị trí | Tác dụng |
|----------|--------|---------|
| **Điểm kiểm soát** | Tại mỗi vị trí CV | Kéo để di chuyển CV đó — đường cong định hình lại về phía vị trí mới |

## Spline CV vs Spline Fit — cái nào dùng

| | Spline CV | Spline Fit |
|---|------|------|
| Đường cong đi qua điểm | Chỉ đầu và cuối (kẹp chặt) | Mọi điểm đã nhấp chính xác |
| Kiểm soát hình dạng | Kéo CV về phía một vùng | Di chuyển điểm khớp mà đường cong phải chạm |
| Tác dụng chỉnh sửa điểm kéo | CV di chuyển → đường cong bị hút | Điểm khớp di chuyển → đường cong được tái nội suy |
| Tốt nhất cho | Đường cong thẩm mỹ mượt mà, đường tự do | Đường cong phải chạm tọa độ cụ thể |

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X |
| `,` | Khóa X và chuyển sang nhập Y |
| `Backspace` | Xóa ký tự cuối |
| `Enter` | Xác nhận tọa độ đã gõ, hoặc kết thúc spline nếu không có nhập liệu và ≥ 2 điểm tồn tại |
| `Escape` | Loại bỏ tất cả điểm và thoát |

## DXF — thực thể SPLINE (dạng điểm kiểm soát)

Spline CV được lưu dưới dạng thực thể `SPLINE` trong tệp DXF, lưu trữ bậc, vector nút và tất cả tọa độ điểm kiểm soát. `splineFlag` được đặt là `9` (spline CV) để dạng được bảo toàn khi tải lại.
