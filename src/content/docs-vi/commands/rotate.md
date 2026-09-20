---
title: Lệnh Rotate — Xoay Thực Thể Quanh Điểm Cơ Sở trong KulmanLab CAD
description: Lệnh Rotate xoay các thực thể đã chọn quanh điểm cơ sở đã chọn. Góc có thể được gõ chính xác hoặc đặt bằng nhấp — hướng con trỏ từ điểm cơ sở đến lần nhấp xác định góc. Góc dương là ngược chiều kim đồng hồ trong tọa độ DXF.
group: edit
order: 3
---

# Rotate

Lệnh `Xoay` xoay các thực thể đã chọn quanh điểm cơ sở. Bạn chỉ định góc xoay bằng cách gõ số độ hoặc bằng cách nhấp — góc được tính từ hướng giữa điểm cơ sở và vị trí nhấp.

## Hai cách bắt đầu

**Chọn trước, sau đó xoay** — chọn thực thể trước, rồi kích hoạt:

1. Chọn một hoặc nhiều thực thể trên canvas.
2. Gõ `Xoay` trong terminal hoặc nhấp nút **Rotate** trên thanh công cụ.
3. **Nhấp điểm cơ sở** — tâm xoay. Hoặc gõ `X,Y` rồi nhấn **Enter**.
4. **Gõ góc và nhấn Enter**, hoặc **nhấp** để đặt góc theo hướng con trỏ.

**Kích hoạt, sau đó chọn** — bắt đầu lệnh khi không có gì được chọn:

1. Gõ `Xoay` hoặc nhấp nút thanh công cụ.
2. **Chọn đối tượng** — nhấp để bật/tắt, hoặc kéo để chọn theo vùng.
3. Nhấn **Enter** hoặc **Space** để xác nhận lựa chọn.
4. **Nhấp điểm cơ sở**, sau đó đặt góc.

## Đặt góc

**Góc đã gõ** — gõ số (theo độ) bất kỳ lúc nào sau khi đặt điểm cơ sở.

**Góc nhấp** — nếu không có giá trị đã gõ, nhấp đặt góc bằng `atan2(cursorY − baseY, cursorX − baseX)`.

## Xoay một bản sao

Nhấn **C** tại lời nhắc góc — trước khi gõ bất kỳ chữ số nào — để bật/tắt chế độ **Copy**, cùng kiểu tùy chọn nội tuyến mà tùy chọn Arc của [Polyline](../polyline/) sử dụng. Lời nhắc hiển thị trạng thái hiện tại là `[Copy=true]` / `[Copy=false]`, và nhấn **C** lần nữa sẽ chuyển nó trở lại.

Khi Copy bật, áp dụng phép xoay để nguyên vùng chọn gốc tại chỗ và thay vào đó thêm các bản sao mới, đã xoay của mỗi thực thể được chọn. Khi Copy tắt (mặc định), vùng chọn xoay tại chỗ như bình thường.

## Hướng góc

Góc tuân theo **quy ước DXF**:

- Giá trị **dương** xoay **ngược chiều kim đồng hồ** trong tọa độ bản vẽ (Y hướng lên).
- Trên màn hình, nơi trục Y bị đảo ngược (Y hướng xuống), góc dương xuất hiện **theo chiều kim đồng hồ**.

Giá trị phổ biến: `90` = quay 1/4 vòng, `180` = quay nửa vòng, `-90` = quay ngược 1/4 vòng.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Enter` / `Space` | Xác nhận lựa chọn |
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X (giai đoạn điểm cơ sở), hoặc giá trị góc |
| `,` | Khóa X và chuyển sang nhập Y (giai đoạn điểm cơ sở) |
| `C` | Bật/tắt chế độ Copy (giai đoạn góc, trước khi gõ bất kỳ chữ số nào) |
| `Backspace` | Xóa ký tự cuối |
| `Enter` | Xác nhận tọa độ hoặc áp dụng xoay |
| `Escape` | Hủy và đặt lại |
