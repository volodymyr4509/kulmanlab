---
title: Lệnh Arc — Vẽ Cung Ba Điểm Sử Dụng Phương Pháp Circumcircle
description: Lệnh Arc vẽ cung tròn qua đúng ba điểm bấm sử dụng hình học circumcircle. Điểm kéo đầu và cuối cho phép kéo các điểm cuối cung về vị trí mới sau khi đặt. Lưu DXF đầy đủ dưới dạng thực thể ARC.
keywords: [lệnh cung CAD, cung ba điểm CAD, circumcircle arc, vẽ cung CAD, thực thể ARC DXF, chỉnh sửa điểm kéo cung, kulmanlab]
group: shapes
order: 5
---

# Arc

Lệnh `CungTròn` vẽ cung tròn qua ba điểm bạn bấm. Cung được tính toán là circumcircle duy nhất đi qua cả ba điểm — không cần chỉ định tâm hay bán kính trực tiếp. Cung chạy từ lần bấm đầu tiên đến lần bấm thứ ba, đi qua điểm thứ hai.

## Vẽ Cung

1. Nhập `CungTròn` trong terminal hoặc bấm nút **Arc** trên thanh công cụ.
2. **Bấm điểm đầu tiên** — một đầu của cung. Hoặc nhập `X,Y` và nhấn **Enter** cho tọa độ chính xác.
3. **Bấm điểm thứ hai** — điểm mà cung phải đi qua (kiểm soát độ cong và hướng). Nhập tọa độ cũng được.
4. **Bấm điểm thứ ba** — đầu kia của cung. Cung được đặt và lệnh kết thúc. Nhập tọa độ cũng được.

```
           ● (bấm lần 2 — điểm giữa trên đường cong)
          / \
         /   \
        ●     ●
     lần 1   lần 3
```

Xem trước đường thẳng kết nối hai lần bấm đầu tiên trong khi bạn định vị lần thứ ba. Từ lần bấm thứ hai trở đi, xem trước cung trực tiếp theo dõi con trỏ.

> **Điểm thẳng hàng**: nếu cả ba điểm nằm trên một đường thẳng, cung không thể được tính toán và không có thực thể nào được đặt. Di chuyển điểm thứ hai ra khỏi đường và thử lại.

## Các cách khác để vẽ cung

Ba điểm là mặc định. Ở một số lời nhắc, terminal hiển thị các tùy chọn trong ngoặc vuông, như `[Center=false]` — gõ chữ cái của tùy chọn để bật (`[Center=true]`) và gõ lại để tắt. Kết hợp lại, chúng vẽ cung theo sáu cách nữa:

| Phương pháp | Bật | Bước cuối |
|---|---|---|
| Start, Center, End | `C` | điểm cuối |
| Start, Center, Angle | `C`, `A` | góc |
| Start, Center, Length | `C`, `L` | độ dài dây cung |
| Start, End, Angle | `E` | góc |
| Start, End, Direction | `E`, `D` | hướng tiếp tuyến |
| Start, End, Radius | `E`, `R` | bán kính |

- Ở bước cuối của mọi phương pháp trừ Start, Center, End, gõ một số rồi nhấn **Enter** hoặc **Space**, hoặc di chuyển con trỏ và nhấp — con trỏ được đọc như số đó (một hướng cho góc hoặc hướng tiếp tuyến, một khoảng cách cho độ dài dây cung hoặc bán kính).
- Góc dương đi ngược chiều kim đồng hồ từ điểm đầu, góc âm theo chiều kim đồng hồ. Góc 0° hoặc các vòng đầy đủ không tạo ra cung và terminal sẽ báo.
- Độ dài dây cung hoặc bán kính dương đi đường ngắn, số âm đi đường dài. Dây cung dài hơn đường kính hoặc bán kính nhỏ hơn nửa dây cung bị từ chối và terminal nêu giới hạn.
- Start, Center, End chỉ dùng hướng của điểm cuối tính từ tâm: cung đi ngược chiều kim đồng hồ từ điểm đầu đến nơi hướng đó cắt đường tròn. Hướng tiếp tuyến là hướng, tính bằng độ từ trục X, mà cung rời điểm đầu của nó.
- Để chọn tâm trước điểm đầu, gõ `C` ở lời nhắc đầu tiên.
- Chữ cái của các tùy chọn theo ngôn ngữ giao diện; ở đây hiển thị chữ cái tiếng Anh.

## Nhập Tọa Độ

Tại bất kỳ trong ba bước nào, bạn có thể nhập vị trí chính xác thay vì bấm:

1. Nhập giá trị X.
2. Nhấn `,` — terminal hiển thị `[X], [Y{con trỏ}]`.
3. Nhập giá trị Y.
4. Nhấn **Enter** để đặt điểm.

## Tham Khảo Phím Tắt

| Phím | Hành Động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X |
| `,` | Khóa X và chuyển sang nhập Y |
| `Backspace` | Xóa ký tự cuối cùng đã nhập |
| `Enter` | Xác nhận tọa độ đã nhập |
| `C` `E` `A` `L` `D` `R` | Bật hoặc tắt tùy chọn: `C` Center, `E` End, `A` Angle, `L` Length, `D` Direction, `R` Radius |
| `Escape` | Bỏ tất cả điểm đã đặt và thoát |

## Chỉnh Sửa Điểm Kéo — Điều Chỉnh Điểm Cuối và Bán Kính

Cung được chọn có ba điểm kéo:

| Điểm Kéo | Vị Trí | Chức Năng |
|----------|--------|-----------|
| **Tâm** | Tâm hình học của circumcircle | Di chuyển toàn bộ cung; bán kính và góc không thay đổi |
| **Đầu** | Điểm cuối đầu tiên trên cung | Kéo để di chuyển điểm bắt đầu dọc theo circumcircle — thay đổi cả góc bắt đầu và bán kính |
| **Cuối** | Điểm cuối cuối cùng trên cung | Kéo để di chuyển điểm kết thúc dọc theo circumcircle — thay đổi cả góc kết thúc và bán kính |

## Chọn Cung

| Phương Pháp | Hành Vi |
|-------------|---------|
| **Bấm** | Chọn nếu bấm gần đường cong của cung |
| **Kéo phải** (nghiêm ngặt) | Các điểm mẫu phân bố dọc theo cung phải nằm trong hộp |
| **Kéo trái** (cắt ngang) | Bất kỳ điểm mẫu nào trên cung nằm trong hộp đều chọn nó |

## Lệnh Chỉnh Sửa Được Hỗ Trợ

| Lệnh | Tác Động Lên Cung |
|------|-------------------|
| [Move](../move/) | Dịch chuyển tâm; bán kính và góc không thay đổi |
| [Copy](../copy/) | Tạo cung giống hệt ở vị trí mới |
| [Rotate](../rotate/) | Xoay tâm và dịch chuyển góc bắt đầu/kết thúc theo lượng xoay |
| [Mirror](../mirror/) | Phản chiếu tâm và đảo ngược góc bắt đầu/kết thúc qua trục đối xứng |
| [Scale](../scale/) | Thay đổi tỉ lệ vị trí tâm và nhân bán kính với hệ số tỉ lệ |
| [Offset](../offset/) | Tạo cung đồng tâm ở bán kính lớn hơn hoặc nhỏ hơn, cùng khoảng góc |
| [Delete](../delete/) | Xóa cung |

## Thuộc Tính

**Chung**

| Thuộc Tính | Mặc Định | Ý Nghĩa |
|-----------|----------|---------|
| Color | 256 (ByLayer) | Chỉ số màu ACI |
| Layer | `0` | Gán lớp |
| Linetype | ByLayer | Kiểu đường nét có tên |
| Linetype Scale | 1 | Hệ số tỉ lệ trên kiểu đường nét |
| Thickness | 0 | Độ dày đùn |

**Hình Học**

| Thuộc Tính | Ý Nghĩa |
|-----------|---------|
| Center X / Center Y | Tâm của circumcircle |
| Radius | Bán kính của circumcircle |
| Start Angle | Góc tính theo độ nơi cung bắt đầu |
| End Angle | Góc tính theo độ nơi cung kết thúc |

## Arc vs Circle — Khi Nào Dùng Cái Nào

| | Arc | Circle |
|---|-----|--------|
| Khoảng | Một phần — từ bấm đầu đến bấm thứ ba | Đầy đủ 360° |
| Phương thức nhập | Ba điểm trên đường cong | Tâm + bán kính |
| Chỉnh sửa sau đặt | Kéo điểm kéo đầu/cuối | Kéo bất kỳ điểm kéo hướng chính |
| Tốt nhất cho | Bo góc, góc tròn, đường vòng cung | Lỗ tròn đầy đủ, đặc điểm tròn |

## DXF — Thực Thể ARC

Cung được lưu dưới dạng thực thể `ARC` trong tệp DXF, lưu trữ tọa độ tâm, bán kính, góc bắt đầu và góc kết thúc. Tất cả thuộc tính — màu sắc, lớp, kiểu đường, tỉ lệ kiểu đường và độ dày — truyền đầy đủ không mất mát.
