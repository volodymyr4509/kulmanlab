---
title: LayerMatch — Gán Lại Lớp Thực Thể để Khớp với Nguồn trong KulmanLab CAD
description: Lệnh LayerMatch gán lại lớp của một hoặc nhiều thực thể mục tiêu để khớp với lớp của thực thể nguồn bạn nhấp.
group: layer
order: 2
---

# LayerMatch

Lệnh `LayerMatch` gán lại lớp của các thực thể đã chọn để khớp với lớp của thực thể nguồn bạn nhấp. Đây là cách nhanh nhất để di chuyển một nhóm đối tượng lên đúng lớp mà không cần mở Trình Quản Lý Lớp.

## Quy trình làm việc

**Chọn trước, sau đó khớp**:

1. Chọn các thực thể muốn thay đổi lớp.
2. Gõ `LayerMatch` hoặc nhấp nút **Layer Match** trên thanh công cụ.
3. **Nhấp đối tượng nguồn** — đối tượng có lớp bạn muốn sao chép.
4. Tất cả thực thể đã chọn chuyển sang lớp của đối tượng nguồn ngay lập tức.

**Kích hoạt, sau đó chọn**:

1. Gõ `LayerMatch` hoặc nhấp nút thanh công cụ khi không có gì được chọn.
2. **Chọn thực thể mục tiêu** — nhấp để bật/tắt từng thực thể hoặc kéo để chọn theo vùng.
3. Nhấn **Enter** hoặc **Space** để xác nhận lựa chọn.
4. **Nhấp đối tượng nguồn** — lớp của nó được áp dụng cho tất cả mục tiêu.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Enter` / `Space` | Xác nhận lựa chọn mục tiêu và chuyển sang giai đoạn chọn nguồn |
| `Escape` | Đặt lại — quay lại chọn mục tiêu hoặc hủy hoàn toàn |

## Chi tiết hành vi

- Chỉ thuộc tính `lớp` được thay đổi — màu sắc, kiểu đường, độ dày đường và hình học không bị ảnh hưởng.
- Đối tượng nguồn không bị sửa đổi.
- Lệnh kết thúc sau khi nguồn được nhấp.
