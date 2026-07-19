---
title: Vector Pins — Bắt Điểm Theo Đường Tham Chiếu Qua Điểm Đã Ghim
description: Vector Pins cho phép bạn ghim một điểm bắt bằng cách giữ con trỏ trên nó nửa giây, sau đó theo dõi con trỏ dọc theo các đường tham chiếu ngang và dọc nét đứt đi qua điểm đã ghim — căn chỉnh hình học mới với các điểm hiện có mà không cần đường dựng hình.
keywords: [vector pins, theo dõi bắt điểm đối tượng, đường tham chiếu, theo dõi căn chỉnh, theo dõi bắt điểm CAD, đường dựng hình, kulmanlab]
group: interface
order: 2
---

# Vector Pins

**Vector Pins** là một công cụ hỗ trợ vẽ cho phép căn chỉnh hình học mới với các điểm hiện có mà không cần vẽ đường dựng hình. Giữ con trỏ trên một điểm bắt trong nửa giây để *ghim* nó — ghim sau đó chiếu các đường tham chiếu ngang và dọc vô hình, và con trỏ sẽ bắt vào chúng mỗi khi đến gần. Đây là tính năng tương đương của KulmanLab CAD với theo dõi bắt điểm đối tượng trong các ứng dụng CAD trên máy tính.

Tính năng được điều khiển bằng nút bật/tắt **Pins** trên thanh điều khiển (cạnh Grid, Snap và ANGL). Nó **bật theo mặc định**, và cài đặt được giữ nguyên giữa các phiên làm việc.

## Ghim một điểm

1. Bắt đầu một lệnh yêu cầu điểm — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/), v.v.
2. Di chuyển con trỏ lên một điểm bắt của hình học hiện có — điểm cuối, trung điểm hoặc dấu tâm.
3. **Giữ con trỏ đứng yên trong 500 ms.** Dấu hiệu biến thành **hình vuông** đặc màu nhấn — điểm đã được ghim.
4. Lặp lại để ghim bao nhiêu điểm tùy nhu cầu. Mỗi ghim tiếp tục chiếu các đường tham chiếu của nó.

Việc ghim cũng hoạt động ngoài lệnh: giữ con trỏ trên một **điểm điều khiển** của thực thể đang được chọn sẽ ghim nó theo cách tương tự.

## Theo dõi dọc theo đường tham chiếu

Mỗi điểm đã ghim chiếu hai đường tham chiếu vô hình — một **ngang** và một **dọc** — đi qua tọa độ chính xác của nó. Khi bạn di chuyển con trỏ:

- Trong phạm vi **12 px** từ đường dọc của một ghim, con trỏ bắt vào đường đó: một đường nét đứt màu nhấn được vẽ xuyên qua ghim trên toàn khung nhìn, và **dấu X** cho thấy vị trí đã bắt. Tọa độ X của bạn giờ *chính xác* bằng X của ghim.
- Điều tương tự áp dụng cho đường ngang với tọa độ Y của ghim.
- Gần một đường của mỗi hướng — thậm chí từ **hai ghim khác nhau** — con trỏ bắt vào **giao điểm** của chúng, và cả hai đường nét đứt được hiển thị. Điều này đặt một điểm chính xác tại (X của ghim A, Y của ghim B).

```
                    ┆ (nét đứt, đường dọc của ghim ■)
                    ┆
   ■ ghim A ┄┄┄┄┄┄┄ ✕ ← con trỏ bắt vào giao điểm:
                    ┆    X từ ghim B, Y từ ghim A
                    ┆
                    ■ ghim B
```

Tọa độ được bắt lấy trực tiếp từ ghim, nên việc căn chỉnh là chính xác — không làm tròn hay sai lệch dấu phẩy động.

## Độ ưu tiên bắt điểm

Các bắt điểm hình học thông thường — điểm cuối, trung điểm, tâm và giao điểm — **được ưu tiên** hơn các đường tham chiếu của ghim. Nếu con trỏ gần một bắt điểm hơn là gần đường tham chiếu, bắt điểm thắng. Theo dõi ghim lấp đầy khoảng trống giữa các hình; nó không bao giờ chặn việc bắt vào chính hình học.

## Kết hợp với khóa góc

Vector pins hoạt động cùng với theo dõi góc (nút **ANGL** trên thanh điều khiển). Khi một lệnh đã khóa con trỏ vào tia theo dõi góc:

- Con trỏ vẫn bị ràng buộc theo hướng đã khóa.
- Bắt điểm ghim chuyển sang nhắm vào **giao điểm của tia đã khóa với các đường tham chiếu của ghim** (chỉ phía trước gốc tia).

Điều này trả lời các câu hỏi như *"hướng 45° từ điểm cuối cùng của tôi cắt độ cao tâm của đường tròn kia ở đâu?"* — khóa góc, và con trỏ sẽ khớp vào điểm giao cắt. Bắt điểm theo tia hoạt động trong mọi lệnh có khóa góc: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader và ViewportCopy.

## Vòng đời của ghim

Ghim dành cho thao tác đang thực hiện, không phải dấu vĩnh viễn. Tất cả ghim bị xóa khi:

| Sự kiện | Lý do |
|---------|-------|
| Một **lệnh mới** được kích hoạt | Mỗi thao tác bắt đầu với bộ tham chiếu sạch |
| Nhấn **Escape** | Hành vi hủy-tất-cả tiêu chuẩn |
| Tắt nút **Pins** | Tắt tính năng sẽ xóa trạng thái của nó |
| Chuyển giữa **không gian mô hình và giấy** | Tọa độ ghim chỉ thuộc về một không gian |

Trong một lệnh, bạn có thể ghim, vẽ, ghim tiếp và tiếp tục — ghim tồn tại qua mỗi cú nhấp của lệnh nhiều điểm như Polyline.

## Quy trình làm việc điển hình

Vẽ một đường thẳng bắt đầu ngay bên dưới tâm của một đường tròn:

1. Gõ `line` (hoặc nhấp nút Line).
2. Giữ con trỏ trên **dấu tâm** của đường tròn nửa giây — nó biến thành hình vuông màu nhấn.
3. Di chuyển con trỏ xuống dưới: gần đường dọc của đường tròn, con trỏ khóa vào đường tham chiếu nét đứt.
4. Nhấp — đường thẳng bắt đầu chính xác tại tọa độ X của đường tròn.
5. Tiếp tục vẽ đường như bình thường; ghim vẫn khả dụng cho các điểm tiếp theo.

## Ghi chú

- Việc giữ 500 ms hoạt động trên bất kỳ dấu bắt điểm nào con trỏ có thể chạm tới — kể cả các điểm bắt xuất hiện giữa lệnh.
- Giữ con trỏ trên điểm đã ghim không có tác dụng gì; không có bỏ ghim bằng cách giữ chuột. Xóa ghim bằng **Escape** hoặc tắt **Pins**.
- Khoảng cách bắt cho đường tham chiếu là cùng 12 pixel màn hình như bắt điểm thông thường, nên cảm giác nhất quán ở mọi mức thu phóng.
- Các điểm đã ghim hiển thị dưới dạng hình vuông màu nhấn thay cho dấu bắt điểm thông thường.
