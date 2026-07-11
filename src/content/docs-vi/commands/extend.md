---
title: Lệnh Extend — Kéo Dài Điểm Cuối Đường Thẳng Đến Ranh Giới Gần Nhất trong KulmanLab CAD
description: Lệnh Extend kéo dài điểm cuối gần nhất của một Đường thẳng đến giao điểm gần nhất với thực thể khác. Bản xem trước trực tiếp hiển thị đường thẳng được kéo dài trước khi nhấp. Extend chỉ hoạt động trên thực thể Đường thẳng.
group: edit
order: 9
---

# Extend

Lệnh `extend` kéo dài điểm cuối gần nhất của một [Line](../line/) đến giao điểm gần nhất mà nó sẽ tạo ra với thực thể khác trong bản vẽ. Di chuyển con trỏ gần điểm cuối muốn kéo dài — bản xem trước hiển thị đường thẳng được kéo dài — sau đó nhấp để áp dụng.

Kéo dài chỉ hoạt động trên **thực thể Đường thẳng**. Các ranh giới mà đường thẳng kéo dài đến có thể là bất kỳ loại thực thể nào ngoại trừ Văn bản, Mtext, Đa đường dẫn và Spline.

## Kéo dài đường thẳng

1. Gõ `extend` trong terminal hoặc nhấp nút **Extend** trên thanh công cụ.
2. **Di chuyển con trỏ gần một đầu của đường thẳng** — bản xem trước hiển thị đường thẳng được kéo dài đến ranh giới gần nhất theo hướng đó.
3. **Nhấp** để áp dụng việc kéo dài.

Lệnh vẫn hoạt động sau mỗi lần kéo dài để bạn có thể kéo dài nhiều đường thẳng liên tiếp. Nhấn **Escape** để thoát.

## Cách chọn điểm cuối

Lệnh xem điểm cuối nào gần con trỏ hơn:

- Con trỏ **gần điểm cuối hơn** → điểm cuối được kéo dài về phía trước theo hướng đường thẳng.
- Con trỏ **gần điểm bắt đầu hơn** → điểm bắt đầu được kéo dài về phía sau (theo hướng ngược lại).

## Loại trừ ranh giới

Các loại thực thể sau bị bỏ qua là ranh giới:
- Văn bản / Mtext
- Đa đường dẫn
- Spline

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Escape` | Thoát chế độ kéo dài |

## Extend vs Trim

| | Extend | Trim |
|---|------|------|
| Tác dụng | Kéo dài điểm cuối đường thẳng đến ranh giới | Xóa đoạn của đường thẳng |
| Kích hoạt | Di chuyển gần điểm cuối để kéo dài | Di chuyển qua đoạn để cắt |
| Kết quả | Điểm cuối đường thẳng di chuyển ra ngoài | Đường thẳng chia hoặc rút ngắn |
| Cả hai | Chỉ đường thẳng | Chỉ đường thẳng |
