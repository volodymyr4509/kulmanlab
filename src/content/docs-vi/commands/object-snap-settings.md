---
title: "Lệnh ObjectSnapSettings — Mọi cài đặt của thanh điều khiển"
description: "Lệnh ObjectSnapSettings mở một cửa sổ chứa mọi cài đặt của thanh điều khiển — bắt điểm, bắt tiếp tuyến, theo dõi góc, ghim, nhập bằng bàn phím, lasso và hiển thị — mỗi cài đặt được giải thích cạnh danh sách kèm hình vẽ nhỏ."
keywords: ["cài đặt bắt điểm đối tượng CAD", "bắt tiếp tuyến CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

Lệnh `CàiĐặtBắtDính` mở một cửa sổ chứa mọi cài đặt của thanh điều khiển. Mỗi cài đặt được giải thích cạnh danh sách, kèm một hình vẽ nhỏ. Mở bằng nút bánh răng trên thanh điều khiển, hoặc gõ `CàiĐặtBắtDính`. Đổi một cài đặt ở đây giống như bật tắt nút của nó trên thanh.

## Các cài đặt

### Nơi con trỏ dừng

| Thanh điều khiển | Tác dụng |
|---|---|
| `Snap` | Con trỏ nhảy tới điểm lưới gần nhất, nên các điểm bạn chọn rơi vào tọa độ chẵn. Bắt dính vào đối tượng gần con trỏ vẫn được ưu tiên. Bước lưới thay đổi theo mức thu phóng. |
| `TANG` | Khi đang vẽ một đường từ một điểm, đưa con trỏ tới gần nơi đường đó vừa chạm một đường tròn, cung, elip hoặc spline thì nó bắt dính vào đó. Dùng được trong Đường thẳng, Đa tuyến và các lệnh khác, và khi kéo đầu mút của đường thẳng hoặc đa tuyến. |

### Đường dẫn khi vẽ

| Thanh điều khiển | Tác dụng |
|---|---|
| `ANGL` | Khi con trỏ tới gần một trong các góc này tính từ điểm cuối, nó khóa theo hướng đó, hiện bằng một tia nét đứt. Trong lúc khóa, gõ độ dài rồi nhấn Enter để đặt điểm ở khoảng cách đó. |
| `Pins` | Để con trỏ dừng một chút trên điểm bắt dính để ghim nó. Điểm đã ghim phát ra các đường dẫn ngang và dọc, và con trỏ bắt dính vào chúng và vào chỗ chúng cắt nhau. |
| `Dist` | Điểm ghim cuối cùng làm điểm bắt đầu: khi con trỏ khóa theo một góc từ ghim, gõ độ dài rồi nhấn Enter để đặt điểm cách nó khoảng đó. Cần bật ghim vectơ. |

### Nhập liệu và chọn

| Thanh điều khiển | Tác dụng |
|---|---|
| `Rel` | Điểm X,Y được gõ được đo từ điểm chọn gần nhất, như thể bắt đầu bằng @. Backspace xóa @ để dùng tọa độ của bản vẽ. Khi tắt, tự gõ @ để nhập độ dời. |
| `Lasso` | Nhấn và kéo trên vùng trống để vẽ một vòng lasso tự do quanh thứ bạn muốn thay vì hình chữ nhật. Những gì vòng bao lấy sẽ được chọn. |

### Hiển thị

| Thanh điều khiển | Tác dụng |
|---|---|
| `Grid` | Hiện lưới nền. Khoảng cách của nó thay đổi khi thu phóng. Tắt nó không dừng việc bắt dính vào lưới. |
| `LWT` | Vẽ các đường theo độ dày của chúng, nên đường nặng hơn trông dày hơn. Khi tắt, mọi đường đều mảnh, có thể giúp bản vẽ dày đặc dễ đọc hơn. |

**ANGL** có hàng riêng cho bước: chọn 10°, 20°, 30°, 45° hoặc 90°, hoặc chọn **Tùy chỉnh** và gõ một góc bất kỳ từ 1° đến 180°.

Bắt tiếp tuyến, nhập tương đối và lasso mặc định tắt. **Khôi phục mặc định** đưa mọi cài đặt về trạng thái ban đầu.

---

*Liên quan: [Vector Pins](../../interface/vector-pins/), [Theo dõi khoảng cách](../../interface/distance-tracking/), [Lưới & Bắt Điểm](../../interface/grid-snap/), [Nhập tọa độ](../../interface/coordinate-entry/)*
