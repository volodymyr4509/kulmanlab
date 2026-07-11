---
title: Lệnh Distance — Đo Khoảng Cách Đường Thẳng Giữa Hai Điểm trong KulmanLab CAD
description: Lệnh Distance đo khoảng cách Euclid giữa hai điểm nhấp và hiển thị kết quả đến 4 chữ số thập phân. Nhấp lại sau kết quả để đo chuỗi từ điểm cuối.
group: measure
order: 1
---

# Distance

Lệnh `distance` đo khoảng cách đường thẳng (Euclid) giữa hai điểm nhấp và in kết quả trong terminal đến 4 chữ số thập phân. Đây là một trong ba lệnh đo lường — [Angle](../angle/) đo góc mở tại một đỉnh, và [Area](../area/) đo diện tích và chu vi của một đa giác.

## Đo khoảng cách

1. Gõ `distance` trong terminal hoặc nhấp nút **Distance** trên thanh công cụ.
2. **Nhấp điểm đầu tiên**, hoặc gõ `X,Y` rồi nhấn **Enter** để nhập tọa độ chính xác.
3. **Nhấp điểm thứ hai** — khoảng cách đo được xuất hiện trong terminal. Có thể nhập tọa độ tương tự.
4. **Nhấp lại** (tùy chọn) để bắt đầu đo mới. Lệnh vẫn hoạt động.

Nhấn `Escape` bất kỳ lúc nào để đặt lại về bước 2.

## Nối tiếp đo lường

Sau khi hiển thị kết quả, nhấp ngay lập tức bắt đầu đo tiếp theo — điểm nhấp trở thành điểm đầu tiên mới. Điều này cho phép đo một chuỗi khoảng cách mà không cần kích hoạt lại lệnh.

## Distance vs Angle

| | Distance | Angle |
|---|------|------|
| Đo gì | Chiều dài đường thẳng | Góc nội tại tại đỉnh |
| Số lần nhấp | 2 | 3 |
| Định dạng kết quả | `12.3456` (đơn vị) | `45.0000°` |
| Bản xem trước trên canvas | Đường từ điểm đầu đến con trỏ | Hai đường từ đỉnh đến con trỏ |

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X |
| `,` | Khóa X và chuyển sang nhập Y |
| `Backspace` | Xóa ký tự cuối |
| `Enter` | Xác nhận tọa độ đã gõ |
| `Escape` | Hủy và đặt lại về bước 2 |

## Ghi chú

- Kết quả chỉ hiển thị trong **terminal** — không có gì được thêm vào bản vẽ.
- Kết quả được biểu thị theo cùng đơn vị với tọa độ bản vẽ.
- Độ chính xác luôn là 4 chữ số thập phân.
