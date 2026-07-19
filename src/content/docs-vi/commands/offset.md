---
title: Lệnh Offset — Tạo Bản Sao Song Song ở Khoảng Cách Cố Định
description: Lệnh Offset tạo bản sao song song của Đường thẳng, Hình tròn, Cung, Hình elip hoặc Đường đa đoạn ở khoảng cách đã gõ. Khoảng cách được nhập một lần và tái sử dụng cho nhiều lần offset. Nhấp phía xác định hướng bản sao xuất hiện. Hỗ trợ năm loại thực thể.
group: edit
order: 10
---

# Offset

Lệnh `offset` tạo bản sao song song của một thực thể ở khoảng cách vuông góc cố định. Bạn gõ khoảng cách một lần, sau đó nhấp thực thể và chọn một bên — lệnh vẫn sẵn sàng theo cùng khoảng cách để bạn có thể offset nhiều đối tượng trong một phiên.

Các loại thực thể được hỗ trợ: **Đường thẳng, Hình tròn, Cung, Hình elip, Đường đa đoạn** (bao gồm Hình chữ nhật).

## Sử dụng offset

1. Gõ `offset` trong terminal hoặc nhấp nút **Offset** trên thanh công cụ.
2. **Gõ khoảng cách offset** và nhấn **Enter** hoặc **Space**.
3. **Nhấp thực thể** để offset.
4. **Di chuyển con trỏ** sang phía nơi bản sao xuất hiện — bản xem trước trực tiếp theo dõi.
5. **Nhấp** để đặt bản sao offset.

Sau mỗi lần đặt, lệnh quay lại bước 3 theo **cùng khoảng cách**, sẵn sàng cho lần offset tiếp theo. Nhấn **Escape** để đặt lại về bước nhập khoảng cách.

## Hành vi offset theo thực thể

| Thực thể | Cách tính offset |
|----------|----------------|
| **Đường thẳng** | Đường song song dịch chuyển vuông góc với hướng ban đầu |
| **Hình tròn** | Hình tròn đồng tâm; nhấp bên ngoài → bán kính lớn hơn, bên trong → nhỏ hơn |
| **Cung** | Cung đồng tâm ở bán kính mới; cùng khoảng cung góc |
| **Hình elip** | Cả hai bán trục tăng hoặc giảm theo cùng khoảng cách |
| **Đường đa đoạn** | Mỗi đoạn được offset độc lập; các đoạn offset liền kề được viền mép tại góc |

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.` | Thêm chữ số vào giá trị khoảng cách |
| `Backspace` | Xóa ký tự cuối |
| `Enter` / `Space` | Xác nhận khoảng cách đã gõ và chuyển sang chọn thực thể |
| `Escape` | Đặt lại về bước nhập khoảng cách |

## Offset vs Copy

| | Offset | Copy |
|---|------|------|
| Dịch chuyển | Vuông góc với hình học thực thể | Vector tùy ý (cơ sở → đích) |
| Thực thể được hỗ trợ | Đường thẳng, Hình tròn, Cung, Hình elip, Đường đa đoạn | Tất cả loại thực thể |
| Tốt nhất cho | Đường song song, hình tròn đồng tâm, đường bao trong/ngoài | Đặt bản sao tại vị trí tùy ý |
