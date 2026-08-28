---
title: Theo dõi khoảng cách — Gõ độ dài chính xác từ một điểm đã ghim
description: Nút Dist cho phép ghim vector mới nhất đóng vai trò mốc neo mà việc theo dõi góc đo từ đó, nhờ vậy bạn gõ một độ dài chính xác và đặt điểm ở khoảng cách và góc chuẩn xác so với một điểm sẵn có — kể cả điểm đầu tiên của một hình.
keywords: [nhập khoảng cách CAD, gõ khoảng cách chính xác CAD, nút Dist, theo dõi khoảng cách từ ghim, theo dõi cực CAD, nhập khoảng cách trực tiếp, kulmanlab]
group: interface
order: 3
---

# Theo dõi khoảng cách

**Theo dõi khoảng cách** cho phép bạn đặt một điểm bằng cách gõ độ dài chính xác thay vì nhấp chuột. Nó được điều khiển bằng nút **Dist** trên thanh điều khiển, cạnh [Pins](../vector-pins/) và ANGL, và **bật sẵn theo mặc định**, thiết lập được giữ lại qua các phiên làm việc.

Thứ nó thêm vào thì hẹp nhưng hữu ích: nó cho phép **ghim vector mới nhất** đóng vai trò mốc neo mà việc theo dõi góc đo từ đó. Không có nó, một lệnh chỉ có thể đo từ một điểm mà chính nó đã thu thập được — nghĩa là điểm *đầu tiên* của một hình hoàn toàn không có gì để đo từ đó.

## Ba nút phối hợp với nhau

Theo dõi khoảng cách không tự đứng một mình. Hai nút còn lại phải ở đúng trạng thái trước khi bạn có thể gõ độ dài:

| Nút | Vai trò |
|-----|---------|
| **Pins** | Cung cấp điểm tham chiếu. Rê con trỏ lên một điểm bắt trong 500 ms để ghim nó — xem [Vector Pins](../vector-pins/). |
| **ANGL** | Cung cấp góc. Theo dõi khoảng cách chỉ khả dụng khi con trỏ đã khóa vào một góc, nên ANGL phải đặt ở một bước (10°, 20°, 30°, 45°, 90°) chứ không phải Off. |
| **Dist** | Cho phép dùng ghim làm mốc neo thay vì chỉ dùng điểm của chính lệnh đó. |

Nếu Pins và Dist đang bật nhưng ANGL để **Off** thì sẽ không có gì xảy ra: không có hướng nào bị khóa để đo độ dài dọc theo.

## Pins và Dist gắn với nhau ra sao

Theo dõi khoảng cách vô nghĩa khi ghim bị tắt, nên hai nút luôn đi cùng nhịp:

- **Bật Pins** cũng **bật Dist**.
- **Tắt Pins** cũng **tắt Dist**.
- **Bật Dist** sẽ **bật Pins** nếu nó chưa bật.
- **Tắt Dist** vẫn **để Pins bật**.

Vì vậy Dist không bao giờ hoạt động khi Pins đang tắt, nhưng bạn có thể giữ việc theo dõi ghim để căn chỉnh mà vẫn tắt theo dõi khoảng cách — tiện khi bạn muốn có đường tham chiếu mà không để con trỏ khóa vào một ghim trong lúc bạn định khóa vào điểm cuối cùng của chính mình.

## Đặt một điểm ở khoảng cách chính xác

1. Bật **Pins** và **Dist**, rồi đặt **ANGL** ở một bước góc.
2. Khởi động một lệnh yêu cầu điểm — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/), v.v.
3. **Ghim một điểm tham chiếu**: rê con trỏ lên một điểm bắt sẵn có cho đến khi dấu hiệu biến thành ô vuông đặc.
4. Đưa con trỏ ra xa ghim, theo đúng khoảng góc bạn muốn. Khi nó tới gần một trong các bước của ANGL, hướng sẽ **khóa lại** — một chỉ báo theo dõi xuất hiện từ ghim.
5. **Gõ độ dài** rồi nhấn **Enter** hoặc **Space**. Điểm được đặt cách ghim đúng chừng ấy, dọc theo góc đã khóa.

Dòng nhắc trong terminal cho biết khi nào bạn có thể gõ. Lúc đang khóa, nó hiện:

```
pick start point or enter length: [ ]
```

và giá trị bạn gõ xuất hiện trong dấu ngoặc vuông.

## Vì sao điểm đầu tiên mới là điều đáng nói

Đây chính là trường hợp mà nếu không có tính năng này thì không thể làm được. Giả sử một đường thẳng phải bắt đầu cách một góc sẵn có đúng 250 đơn vị về bên phải:

1. Khởi động [Line](../../commands/line/).
2. Ghim góc sẵn có đó.
3. Di chuyển sang phải cho đến khi hướng khóa ở 0°.
4. Gõ `250`, nhấn **Enter**.

Đường thẳng giờ bắt đầu tại điểm cách góc đó 250 đơn vị, không cần hình dựng phụ và không phải tính toán. Không có Dist, lệnh Line chưa thu thập được điểm nào, nên chẳng có gì *để đo* độ dài vừa gõ — bạn chỉ có thể nhấp áng chừng, hoặc vẽ một đường dựng rồi xóa đi sau.

Với điểm **thứ hai trở đi**, lệnh đã có mốc neo của riêng nó (điểm trước đó) và mốc ấy được dùng trước. Ghim chỉ được xét đến như phương án thay thế khi mốc neo của bạn chưa khóa, nên việc ghim một thứ gì đó không cướp mất khóa mà bạn đang có.

## Gõ phím làm đông cứng khóa

Ngay khi bạn bắt đầu gõ chữ số, mốc neo thôi thay đổi. Điểm nào đang khóa vào lúc chữ số đầu tiên được nhập sẽ vẫn là mốc neo cho đến khi bạn xác nhận hoặc xóa trống ô nhập — di chuyển chuột giữa chừng sẽ không âm thầm chuyển phép đo sang một ghim khác hay sang điểm của chính lệnh đó.

## Tham chiếu bàn phím

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.` | Thêm vào độ dài |
| `-` | Độ dài âm — đảo chiều dọc theo góc đã khóa (chỉ ở ký tự đầu tiên) |
| `Backspace` | Xóa ký tự cuối |
| `Enter` / `Space` | Đặt điểm ở độ dài vừa gõ |
| `Escape` | Hủy lệnh; khóa và giá trị đã gõ đều bị xóa |

Việc gõ độ dài là tùy chọn. Khi hướng đã khóa, bạn vẫn có thể nhấp chuột, và điểm sẽ được chiếu lên góc đã khóa.

## Nơi tính năng này hoạt động

Theo dõi khoảng cách có mặt trong mọi lệnh yêu cầu bạn chỉ định điểm:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) và [ViewportCopy](../../commands/viewport-copy/).

## Xem thêm

- [Vector Pins](../vector-pins/) — ghim điểm và theo dõi dọc theo các đường tham chiếu của chúng
- [Grid & Snap](../grid-snap/) — những công cụ hỗ trợ độ chính xác khác trên thanh điều khiển
- [Distance](../../commands/distance/) — đo một khoảng cách sẵn có thay vì gõ một độ dài mới
