---
title: Extend — Kéo Dài Thực Thể Đến Ranh Giới Gần Nhất
description: Lệnh Extend kéo dài điểm cuối gần nhất của một Line, Arc, Ellipse hoặc Polyline mở đang di chuyển qua đến giao điểm gần nhất với thực thể khác. Bản xem trước trực tiếp hiển thị thực thể được kéo dài trước khi nhấp.
keywords: [lệnh extend CAD, kéo dài đường thẳng CAD, kéo dài cung CAD, kéo dài hình elip CAD, kéo dài đường đa đoạn CAD, kéo dài thực thể đến ranh giới, xem trước hover kéo dài, kulmanlab]
group: edit
order: 9
---

# Extend

Lệnh `KéoDài` kéo dài điểm cuối gần nhất của một [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/) hoặc Polyline mở đang di chuyển qua đến giao điểm gần nhất mà nó sẽ tạo ra với thực thể khác trong bản vẽ. Di chuyển con trỏ gần điểm cuối muốn kéo dài — bản xem trước hiển thị thực thể được kéo dài — sau đó nhấp để áp dụng.

Chỉ những thực thể có điểm cuối thực sự mới có thể được kéo dài. Một [Circle](../circle/) và một Ellipse đầy đủ (360°) luôn là hình khép kín không có điểm cuối, nên không bao giờ có thể kéo dài — tương tự với Polyline đóng hoặc Rectangle. Một Ellipse một phần (cung elip) và một Arc có điểm cuối và được kéo dài theo cách giống như Line.

## Kéo dài một thực thể

1. Gõ `KéoDài` trong terminal hoặc nhấp nút **Extend** trên thanh công cụ.
2. **Di chuyển con trỏ gần một đầu** của thực thể muốn kéo dài — bản xem trước hiển thị nó được kéo dài đến ranh giới gần nhất theo hướng đó.
3. **Nhấp** để áp dụng việc kéo dài.

Lệnh vẫn hoạt động sau mỗi lần kéo dài, vì vậy bạn có thể tiếp tục di chuyển và nhấp để kéo dài thêm thực thể. Nhấn **Enter**, **Space**, hoặc **Escape** để thoát.

```
  Trước:                      Sau:

  ──────           |           ──────────────|
  (đường ngắn)     (ranh giới) (kéo dài đến ranh giới)
```

## Cách chọn điểm cuối

Lệnh xem đầu nào gần con trỏ hơn:

- **Line và Polyline mở** — con trỏ gần điểm cuối hơn kéo dài điểm cuối về phía trước; con trỏ gần điểm đầu hơn kéo dài điểm đầu về phía sau.
- **Arc và Ellipse một phần** — con trỏ gần một trong hai đầu góc hơn làm cung phát triển theo hướng đó, quanh cùng tâm và bán kính (hoặc cùng hình dạng elip), cho đến khi chạm ranh giới tiếp theo.

Một tia — hoặc, đối với Arc và Ellipse, đường tròn hoặc đường cong cơ bản của chính thực thể — được chiếu từ đầu đã chọn, và **giao điểm gần nhất** với bất kỳ thực thể nào khác (không tính bản thân thực thể và các loại bị bỏ qua) trở thành điểm cuối mới.

Nếu không tìm thấy giao điểm nào theo hướng đó, không có bản xem trước nào xuất hiện và nhấp chuột không làm gì cả.

## Loại trừ ranh giới

Các loại thực thể sau bị bỏ qua là ranh giới — một thực thể không kéo dài để gặp chúng:

- Văn bản / Mtext
- Đa đường dẫn
- Spline

Tất cả các loại khác (Line, Arc, Circle, Ellipse, Polyline, Kích thước) đều là ranh giới hợp lệ.

Nếu đoạn đầu tiên hoặc cuối cùng của một Polyline tự nó là một đoạn cung (vẽ bằng công tắc Arc), việc kéo dài nó sẽ làm cung phát triển dọc theo đường tròn của chính nó — giống hệt cách kéo dài một Arc độc lập — thay vì coi nó như một đoạn thẳng.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Enter` / `Space` | Thoát chế độ kéo dài |
| `Escape` | Thoát chế độ kéo dài |

## Thực thể được hỗ trợ

| Thực thể | Có thể kéo dài? |
|----------|------------|
| Line | Có |
| Arc | Có |
| Ellipse | Có — chỉ khi nó đã là cung một phần; hình elip đầy đủ không có điểm cuối |
| Circle | Không — luôn là hình khép kín không có điểm cuối |
| Polyline (mở) | Có |
| Polyline (đóng) / Rectangle | Không — luôn là hình khép kín không có điểm cuối |
| Văn bản, Spline, Kích thước, Đường dẫn | Không |

## Extend vs Trim

| | Extend | Trim |
|---|------|------|
| Tác dụng | Kéo dài điểm cuối của thực thể đến ranh giới | Xóa đoạn của thực thể |
| Kích hoạt | Di chuyển gần điểm cuối để kéo dài | Di chuyển qua đoạn để cắt |
| Kết quả | Điểm cuối di chuyển ra ngoài | Thực thể chia hoặc rút ngắn |
| Thực thể được hỗ trợ | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
