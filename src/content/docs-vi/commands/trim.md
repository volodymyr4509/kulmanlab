---
title: Lệnh Cắt — Cắt Đoạn Đường Thẳng Tại Giao Điểm trong KulmanLab CAD
description: Lệnh Trim xóa phần của Đường thẳng giữa hai điểm giao nhau liền kề gần con trỏ nhất. Bản xem trước đỏ hiển thị chính xác đoạn nào sẽ bị cắt trước khi nhấp. Trim chỉ hoạt động trên thực thể Đường thẳng — không phải cung, hình tròn hoặc đường đa đoạn.
---

# Cắt

Lệnh `trim` xóa phần của [Đường thẳng](./line) nằm giữa hai điểm giao nhau liền kề, chia đường thẳng thành một hoặc hai đoạn ngắn hơn. Đoạn cần cắt được xác định bởi vị trí con trỏ — di chuyển qua phần bạn muốn xóa và nhấp để cắt.

Cắt chỉ hoạt động trên **thực thể Đường thẳng**. Với các cung, hình tròn, đường đa đoạn và các loại thực thể khác, hãy dùng [Xóa](./delete) hoặc chỉnh sửa điểm kéo.

## Cắt đường thẳng

1. Gõ `trim` trong terminal hoặc nhấp nút **Trim** trên thanh công cụ.
2. **Di chuyển con trỏ qua đoạn đường thẳng** bạn muốn xóa — bản xem trước đỏ tô sáng chính xác phần sẽ bị cắt.
3. **Nhấp** để xóa đoạn đó.

Lệnh vẫn hoạt động sau mỗi lần cắt, vì vậy bạn có thể tiếp tục di chuyển và nhấp để cắt thêm đoạn. Nhấn **Escape** để thoát.

## Cách xác định đoạn cắt

Lệnh chiếu vị trí con trỏ lên đường thẳng đang di chuyển và tìm tất cả điểm giao nhau mà đường thẳng có với các thực thể khác. Các tham số giao nhau này chia đường thẳng thành các đoạn. Đoạn có khoảng chứa hình chiếu của con trỏ được tô sáng và sẽ bị xóa khi nhấp.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Escape` | Thoát chế độ cắt |

## Thực thể được hỗ trợ

| Thực thể | Có thể cắt? |
|----------|------------|
| Đường thẳng | Có |
| Cung, Hình tròn, Hình elip | Không |
| Đường đa đoạn / Hình chữ nhật | Không |
| Văn bản, Spline, Kích thước, Đường dẫn | Không |

## Cắt vs Kéo Dài

| | Cắt | Kéo Dài |
|---|------|------|
| Tác dụng | Xóa đoạn của đường thẳng | Kéo dài điểm cuối đường thẳng đến ranh giới |
| Kích hoạt | Di chuyển qua đoạn cần cắt | Di chuyển gần điểm cuối cần kéo dài |
| Kết quả | Đường thẳng chia hoặc rút ngắn | Điểm cuối đường thẳng di chuyển đến ranh giới |
| Cả hai | Chỉ đường thẳng | Chỉ đường thẳng |
