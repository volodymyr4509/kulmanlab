---
title: Lệnh Đối Xứng — Phản Chiếu Thực Thể Qua Trục Hai Điểm trong KulmanLab CAD
description: Lệnh Mirror phản chiếu các thực thể đã chọn qua đường gương được xác định bởi hai lần nhấp. Các bản gốc luôn được giữ lại — Mirror tạo ra các bản sao được phản chiếu mới. Trục gương có thể theo bất kỳ góc nào và bắt điểm theo gia số 45°.
---

# Đối Xứng

Lệnh `mirror` tạo các bản sao được phản chiếu của các thực thể đã chọn qua trục hai điểm. Các bản gốc **luôn được giữ lại** — không giống như [Di Chuyển](./move) hay [Xoay](./rotate), Đối Xứng không bao giờ sửa đổi thực thể hiện có; nó chỉ thêm thực thể mới.

## Hai cách bắt đầu

**Chọn trước, sau đó đối xứng** — chọn thực thể trước, rồi kích hoạt:

1. Chọn một hoặc nhiều thực thể trên canvas.
2. Gõ `mirror` trong terminal hoặc nhấp nút **Mirror** trên thanh công cụ.
3. **Nhấp điểm đầu tiên** của trục gương, hoặc gõ `X,Y` rồi nhấn **Enter**.
4. **Nhấp điểm thứ hai** — các bản sao được phản chiếu được đặt và lệnh kết thúc.

**Kích hoạt, sau đó chọn** — bắt đầu lệnh khi không có gì được chọn:

1. Gõ `mirror` hoặc nhấp nút thanh công cụ.
2. **Chọn đối tượng** — nhấp để bật/tắt, hoặc kéo để chọn theo vùng.
3. Nhấn **Enter** hoặc **Space** để xác nhận lựa chọn.
4. **Nhấp điểm đầu tiên**, sau đó **nhấp điểm thứ hai** của trục gương.

## Trục gương

Trục là đường vô hạn qua hai điểm được nhấp. Nó có thể theo bất kỳ góc nào:

- Di chuyển con trỏ gần **trục bắt điểm 45°** (0°, 45°, 90°, 135°, …) và trục khóa theo góc đó.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Enter` / `Space` | Xác nhận lựa chọn |
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X |
| `,` | Khóa X và chuyển sang nhập Y |
| `Backspace` | Xóa ký tự cuối |
| `Enter` | Xác nhận tọa độ đã gõ |
| `Escape` | Hủy và đặt lại |

## Những gì được phản chiếu

| Thực thể | Thay đổi gì |
|----------|------------|
| Đường thẳng | Cả hai điểm cuối được phản chiếu |
| Hình tròn | Tâm được phản chiếu; bán kính không đổi |
| Cung | Tâm được phản chiếu; góc bắt đầu và kết thúc được tính lại |
| Hình elip | Tâm được phản chiếu; hướng trục lớn bị đảo qua trục |
| Đường đa đoạn / Hình chữ nhật | Mỗi đỉnh được phản chiếu |
| Văn bản | Điểm neo được phản chiếu; chuỗi văn bản **không** bị đảo ngược |

## Đối Xứng vs Sao Chép

| | Đối Xứng | Sao Chép |
|---|------|------|
| Bản gốc | Luôn được giữ lại | Luôn được giữ lại |
| Vị trí thực thể mới | Được phản chiếu qua trục | Lệch theo vector dịch chuyển |
| Tốt nhất cho | Thiết kế đối xứng, đặc điểm hai bên | Lặp lại hình học theo bất kỳ hướng nào |
