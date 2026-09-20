---
title: Lệnh Fillet — Bo Tròn Góc Bằng Cung Tiếp Tuyến
description: Lệnh Fillet bo tròn góc giữa hai đoạn Line, Arc hoặc Polyline bằng một cung tiếp tuyến có bán kính xác định. Bo tròn góc của chính một polyline sẽ chèn cung trực tiếp vào trong nó; bo tròn qua một polyline hở sẽ hợp nhất cả hai phía thành một polyline mới.
keywords: [lệnh fillet CAD, bo tròn góc CAD, cung fillet, cung tiếp tuyến, fillet polyline, fillet cung, kulmanlab]
group: edit
order: 11
---

# Fillet

Lệnh `BoTròn` bo tròn góc giữa hai đoạn [Line](../line/), [Arc](../arc/) hoặc [Polyline](../polyline/) bằng cách chèn một cung tiếp tuyến có bán kính cho trước, cắt ngắn (hoặc hợp nhất) các thực thể được chọn đến điểm đó.

Fillet hoạt động trên các thực thể **Line, Arc và Polyline** — bao gồm cả đoạn thẳng hoặc đoạn cung của chính một polyline.

## Sử dụng Fillet

1. Gõ `BoTròn` trong terminal hoặc nhấp nút **Fillet** trên thanh công cụ.
2. **Gõ bán kính bo góc** và nhấn **Enter**.
3. **Nhấp vào đường thẳng, cung hoặc đoạn polyline đầu tiên** — phần bạn nhấp xác định mặt nào của giao điểm được giữ lại.
4. **Di chuyển con trỏ qua thực thể thứ hai** — bản xem trước cung nét đứt hiển thị kết quả bo góc. Di chuyển con trỏ sang phía muốn giữ lại.
5. **Nhấp** để áp dụng.

```
  Trước:                     Sau khi fillet (bán kính r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Chọn phía cho các thực thể giao nhau

Khi hai thực thể giao nhau, fillet được áp dụng tại góc được xác định bởi vị trí nhấp — phần của mỗi thực thể **ở cùng phía với con trỏ** được giữ lại.

- Nhấp gần một đầu của thực thể đầu tiên để chọn nửa đó.
- Di chuyển con trỏ sang nửa mong muốn của thực thể thứ hai — bản xem trước nét đứt cập nhật trực tiếp.

## Những gì lệnh tạo ra

Kết quả phụ thuộc vào những gì bạn đã chọn:

- **Hai thực thể Line/Arc độc lập**, hoặc bất kỳ cặp nào không liên quan đến polyline hở: cả hai đều bị cắt ngắn về các điểm tiếp tuyến **T1**/**T2**, và một thực thể Arc mới được chèn giữa chúng.
- **Hai đoạn của cùng một polyline chia sẻ một đỉnh góc**: không có thực thể mới — fillet trở thành một phần của chính polyline. Đỉnh góc được thay bằng hai điểm tiếp tuyến, và cung giữa chúng được lưu dưới dạng giá trị bulge của cạnh đó — hoàn toàn giống cách một góc polyline được bo tròn đi và về qua DXF.
- **Mọi trường hợp khác liên quan đến polyline hở** — hai polyline hở khác nhau, hoặc một polyline hở và một Line/Arc độc lập: cả hai được hợp nhất thành **một polyline mới duy nhất**, mỗi phía được giữ lại đến điểm tiếp tuyến của nó và nối với nhau bằng cung fillet như một đoạn bulge bổ sung, thay thế các thực thể gốc.

Cung được chèn hoặc kéo dài kế thừa các cài đặt độ dày nét, màu sắc, lớp và kiểu đường hiện tại (hoặc của chính polyline, khi nó hợp nhất vào đó).

## Các góc không có góc thực sự để bo tròn

Nếu hai đoạn được chọn đã gặp nhau tiếp tuyến tại một đỉnh chung — một góc polyline thẳng, hoặc một đường thẳng chuyển tiếp mượt mà vào một đoạn cung tiếp tuyến liên tục — thì không có góc thực sự nào để một đường tròn có thể bo tròn. Fillet phát hiện điều này và từ chối với thông báo `cannot fillet: no tangent circle fits there` thay vì vẽ một vòng lặp không mong muốn.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.` | Thêm chữ số vào giá trị bán kính |
| `Backspace` | Xóa ký tự cuối |
| `Enter` / `Phím cách` | Xác nhận bán kính đã gõ và chuyển sang chọn thực thể |
| `Escape` | Hủy và đặt lại |

## Thực thể được hỗ trợ

| Thực thể | Hỗ trợ |
|----------|--------|
| Line | Có |
| Arc | Có |
| Polyline (đoạn thẳng hoặc đoạn cung) | Có |
| Circle, Ellipse | Không |
| Text, Spline, Dimension, Leader | Không |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|------|------|
| Loại góc | Cung tròn | Vát thẳng |
| Đầu vào | Một bán kính | Hai khoảng cách (d1, d2) |
| Thực thể chèn | Cung | Đường thẳng |
| Thực thể được hỗ trợ | Line, Arc và Polyline (đoạn thẳng hoặc đoạn cung) | Line và Polyline (chỉ đoạn thẳng) |
