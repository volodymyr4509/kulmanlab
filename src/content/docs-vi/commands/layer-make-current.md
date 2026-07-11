---
title: LayerMakeCurrent — Đặt Lớp của Thực Thể Làm Lớp Hiện Tại trong KulmanLab CAD
description: Lệnh LayerMakeCurrent đặt lớp vẽ hiện tại khớp với lớp của thực thể được nhấp.
group: layer
order: 1
---

# LayerMakeCurrent

Lệnh `LayerMakeCurrent` đặt **lớp vẽ hiện tại** thành lớp mà thực thể được nhấp thuộc về. Các thực thể mới sau đó sẽ tự động được vẽ trên lớp đó.

## Sử dụng

1. Gõ `LayerMakeCurrent` trong terminal hoặc nhấp nút **Make Current** trên thanh công cụ (biểu tượng ống nhỏ giọt).
2. **Nhấp bất kỳ thực thể nào** trên canvas.
3. Lớp hiện tại được cập nhật để khớp với lớp của thực thể đó. Lệnh kết thúc ngay lập tức.

## Chi tiết hành vi

- Nếu bạn nhấp vào canvas trống (không có thực thể nào), terminal hiển thị `no object found` và lệnh vẫn hoạt động để bạn có thể thử lại.
- Chỉ cài đặt lớp hiện tại được thay đổi — không có thực thể nào bị sửa đổi.
- Lớp đã cập nhật được phản ánh trong bộ chọn lớp trong thanh công cụ.
