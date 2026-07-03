---
title: Lệnh Bo Góc — Làm Tròn Góc Giữa Hai Đường Thẳng trong KulmanLab CAD
description: Lệnh Fillet kết nối hai thực thể Đường thẳng bằng một cung tiếp tuyến có bán kính xác định, cắt ngắn mỗi đường thẳng trở lại điểm tiếp tuyến. Bản xem trước cung nét đứt giúp chọn góc đúng trước khi nhấp.
---

# Bo Góc

Lệnh `fillet` làm tròn góc giữa hai thực thể [Đường thẳng](../line/) bằng cách chèn một cung tiếp tuyến có bán kính nhất định và cắt ngắn mỗi đường thẳng trở lại điểm nơi cung bắt đầu. Kết quả là một góc mượt mà, có bán kính nối cả hai đường thẳng.

Bo góc chỉ hoạt động trên **thực thể Đường thẳng**.

## Sử dụng bo góc

1. Gõ `fillet` trong terminal hoặc nhấp nút **Fillet** trên thanh công cụ.
2. **Gõ bán kính bo góc** và nhấn **Enter**.
3. **Nhấp đường thẳng đầu tiên** — phần bạn nhấp xác định mặt nào của giao điểm được giữ lại.
4. **Di chuyển con trỏ qua đường thẳng thứ hai** — bản xem trước cung nét đứt hiển thị kết quả bo góc.
5. **Nhấp** để áp dụng. Cả hai đường thẳng bị cắt ngắn và cung được chèn vào.

## Những gì lệnh tạo ra

- Điểm cuối của đường thẳng đầu tiên gần giao điểm nhất được di chuyển đến điểm tiếp tuyến **T1**.
- Điểm cuối của đường thẳng thứ hai gần giao điểm nhất được di chuyển đến điểm tiếp tuyến **T2**.
- Một thực thể Cung mới được chèn từ **T1** đến **T2**, tiếp tuyến với cả hai đường thẳng.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.` | Thêm chữ số vào giá trị bán kính |
| `Backspace` | Xóa ký tự cuối |
| `Enter` | Xác nhận bán kính đã gõ và chuyển sang chọn đường thẳng |
| `Escape` | Hủy và đặt lại |

## Bo Góc vs Vát Góc

| | Bo Góc | Vát Góc |
|---|------|------|
| Loại góc | Cung tròn | Vát thẳng |
| Đầu vào | Một bán kính | Hai khoảng cách (d1, d2) |
| Thực thể chèn | Cung | Đường thẳng |
| Thực thể được hỗ trợ | Chỉ đường thẳng | Đường thẳng và đường đa đoạn |
