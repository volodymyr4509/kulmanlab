---
title: Lệnh Scale — Thay Đổi Kích Thước Thực Thể Đồng Đều Quanh Điểm Cơ Sở trong KulmanLab CAD
description: Lệnh Scale thay đổi kích thước các thực thể đã chọn đồng đều theo hệ số đã gõ quanh điểm cơ sở cố định. Hệ số luôn được nhập bằng bàn phím — không có tính năng nhấp để đặt tỉ lệ. Hệ số lớn hơn 1 phóng to; nhỏ hơn 1 thu nhỏ. Mọi loại thực thể đều được hỗ trợ.
group: edit
order: 5
---

# Scale

Lệnh `scale` thay đổi kích thước các thực thể đã chọn đồng đều quanh điểm cơ sở. Tất cả khoảng cách từ điểm cơ sở được nhân với hệ số tỉ lệ — hệ số `2` tăng gấp đôi tất cả kích thước, `0.5` giảm một nửa chúng. Hệ số luôn được nhập bằng cách gõ; không có tính năng nhấp để đặt tỉ lệ.

## Hai cách bắt đầu

**Chọn trước, sau đó chia tỉ lệ** — chọn thực thể trước, rồi kích hoạt:

1. Chọn một hoặc nhiều thực thể trên canvas.
2. Gõ `scale` trong terminal hoặc nhấp nút **Scale** trên thanh công cụ.
3. **Nhấp điểm cơ sở** — điểm cố định không di chuyển trong quá trình chia tỉ lệ.
4. **Gõ hệ số tỉ lệ** và nhấn **Enter**.

**Kích hoạt, sau đó chọn** — bắt đầu lệnh khi không có gì được chọn:

1. Gõ `scale` hoặc nhấp nút thanh công cụ.
2. **Chọn đối tượng** — nhấp để bật/tắt, hoặc kéo để chọn theo vùng.
3. Nhấn **Enter** hoặc **Space** để xác nhận lựa chọn.
4. **Nhấp điểm cơ sở**, sau đó gõ hệ số.

## Gõ hệ số tỉ lệ

| Hệ số | Tác dụng |
|-------|---------|
| `2` | Tăng gấp đôi tất cả kích thước |
| `0.5` | Giảm một nửa tất cả kích thước |
| `1.5` | Tăng 50% |
| `-1` | Đối xứng qua điểm cơ sở (bằng xoay 180°) |

Không có bản xem trước trực tiếp khi gõ — kết quả chia tỉ lệ chỉ xuất hiện sau khi nhấn **Enter**.

## Những gì được chia tỉ lệ

| Thực thể | Thay đổi gì |
|----------|------------|
| Đường thẳng | Cả hai điểm cuối được chia tỉ lệ từ điểm cơ sở |
| Hình tròn | Tâm được chia tỉ lệ; bán kính được nhân với hệ số |
| Cung | Tâm được chia tỉ lệ; bán kính được nhân; góc không đổi |
| Hình elip | Tâm được chia tỉ lệ; cả hai bán trục được nhân |
| Đường đa đoạn / Hình chữ nhật | Mỗi đỉnh được chia tỉ lệ từ điểm cơ sở |
| Văn bản | Điểm neo được chia tỉ lệ; chiều cao được nhân với hệ số |
| Spline | Tất cả điểm kiểm soát / điểm khớp được chia tỉ lệ |

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Enter` / `Space` | Xác nhận lựa chọn |
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X (giai đoạn điểm cơ sở), hoặc hệ số tỉ lệ |
| `,` | Khóa X và chuyển sang nhập Y (giai đoạn điểm cơ sở) |
| `Backspace` | Xóa ký tự cuối |
| `Enter` | Xác nhận tọa độ hoặc áp dụng tỉ lệ |
| `Escape` | Hủy và đặt lại |
