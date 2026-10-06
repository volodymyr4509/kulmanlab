---
title: Lệnh Trim — Cắt Đoạn Tại Giao Điểm
description: Lệnh Trim xóa phần của Line, Arc, Circle, Ellipse hoặc Polyline giữa hai điểm giao nhau liền kề gần con trỏ nhất. Bản xem trước hiển thị chính xác đoạn nào sẽ bị cắt trước khi nhấp.
keywords: [lệnh cắt CAD, cắt đường thẳng CAD, cắt hình tròn CAD, cắt cung CAD, cắt hình elip CAD, cắt đường đa đoạn CAD, cắt tại giao điểm, xem trước hover cắt, kulmanlab]
group: edit
order: 8
---

# Trim

Lệnh `CắtXén` xóa phần của [Line](../line/), [Arc](../arc/), [Circle](../circle/), [Ellipse](../ellipse/) hoặc [Polyline](../polyline/) nằm giữa hai điểm giao nhau liền kề, chia thực thể thành một hoặc nhiều phần còn lại. Đoạn cần cắt được xác định bởi vị trí con trỏ — di chuyển qua phần bạn muốn xóa và nhấp để cắt.

## Cắt một thực thể

1. Gõ `CắtXén` trong terminal hoặc nhấp nút **Trim** trên thanh công cụ.
2. **Di chuyển con trỏ qua đoạn** bạn muốn xóa — bản xem trước tô sáng chính xác phần sẽ bị cắt.
3. **Nhấp** để xóa đoạn đó.

Lệnh vẫn hoạt động sau mỗi lần cắt, vì vậy bạn có thể tiếp tục di chuyển và nhấp để cắt thêm đoạn — trên cùng thực thể hoặc thực thể khác. Nhấn **Enter**, **Space**, hoặc **Escape** để thoát.

```
  Trước:                     Sau khi cắt đoạn giữa:

  ──────●──────●──────        ──────●          ●──────
      giao điểm  giao điểm       (phần trái)  (phần phải)
                                 (đoạn giữa đã bị xóa)
```

## Cách xác định đoạn cắt

Lệnh chiếu vị trí con trỏ lên thực thể đang di chuyển qua và tìm tất cả điểm giao nhau mà thực thể đó có với các thực thể khác. Các giao điểm này chia thực thể thành các đoạn — đối với Line, Arc hoặc Polyline mở, các điểm cuối của chính thực thể đóng vai trò là ranh giới cố định bổ sung. Một Circle hoặc Ellipse đầy đủ, hoặc một Polyline đóng (bao gồm Rectangle), không có điểm cuối riêng, vì vậy cần ít nhất hai điểm giao nhau trước khi có thể cắt. Đoạn có khoảng chứa hình chiếu của con trỏ được tô sáng và sẽ bị xóa khi nhấp.

- **Line, Arc và Polyline mở** — đoạn bị xóa có thể là phần đầu (trước giao điểm đầu tiên), phần giữa (giữa hai giao điểm, chia thực thể thành hai), hoặc phần cuối (sau giao điểm cuối cùng).
- **Circle, Ellipse và Polyline đóng/Rectangle** — vì không có điểm đầu hoặc cuối cố định, chỉ có thể xóa cung giữa hai *điểm giao nhau*. Nếu có ít hơn hai giao điểm, không có bản xem trước nào xuất hiện và nhấp chuột không làm gì cả. Phần còn lại của hình dạng trở thành phần duy nhất còn lại.

## Kết quả của việc cắt

| Thực thể | Kết quả sau khi cắt |
|--------|------------------------|
| Line | Tối đa hai thực thể Line ngắn hơn |
| Arc | Tối đa hai thực thể Arc ngắn hơn |
| Circle | Một thực thể [Arc](../arc/) — hình dạng khép kín của hình tròn biến mất, nên phần còn lại được lưu dưới dạng cung |
| Ellipse | Một thực thể Ellipse với góc đầu và góc cuối — phần còn lại vẫn là Ellipse, giờ là một phần |
| Polyline (mở) | Tối đa hai thực thể Polyline ngắn hơn |
| Polyline (đóng) / Rectangle | Một thực thể Polyline mở — hình dạng đóng biến mất, nên phần còn lại được lưu ở dạng mở |
| Spline | Tối đa hai đối tượng Spline ngắn hơn — mỗi mảnh là cùng một đường cong trên một đoạn nhỏ hơn, lưu bằng các đỉnh điều khiển (điểm khớp của spline Fit bị bỏ); spline kín để lại một mảnh hở |

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Enter` / `Space` | Thoát chế độ cắt |
| `Escape` | Thoát chế độ cắt |

## Thực thể được hỗ trợ

| Thực thể | Có thể cắt? |
|----------|------------|
| Line | Có |
| Arc | Có |
| Circle | Có — cần 2 điểm giao nhau trở lên |
| Ellipse | Có — cần 2 điểm giao nhau trở lên |
| Polyline (mở) | Có |
| Polyline (đóng) / Rectangle | Có — cần 2 điểm giao nhau trở lên |
| Spline | Có — spline kín cần 2 giao điểm trở lên; spline cũng bị cắt tại chỗ nó tự cắt chính nó |
| Văn bản, Kích thước, Đường dẫn | Không |

Các đối tượng dùng làm **ranh giới cắt** có thể là Line, Arc, Circle, Ellipse, Polyline hoặc Spline. Đối tượng Text, Dimension và Leader không bao giờ ghi nhận giao điểm, nên cũng không thể làm ranh giới.

**Đoạn cung** của Polyline (vẽ bằng công tắc Arc, hoặc nhập vào) được cắt hoàn toàn giống như các đoạn thẳng — di chuột qua phần cung giữa hai giao điểm rồi nhấp. Cạnh đã cắt giữ nguyên độ cong; chỉ chiều dài thay đổi.

## Trim vs Extend

| | Trim | Extend |
|---|------|------|
| Tác dụng | Xóa đoạn của thực thể | Kéo dài điểm cuối đường thẳng đến ranh giới |
| Kích hoạt | Di chuyển qua đoạn cần cắt | Di chuyển gần điểm cuối cần kéo dài |
| Kết quả | Thực thể chia hoặc rút ngắn | Điểm cuối đường thẳng di chuyển đến ranh giới |
| Thực thể được hỗ trợ | Line, Arc, Circle, Ellipse, Polyline, Spline | Line, Arc, Ellipse, Polyline |
