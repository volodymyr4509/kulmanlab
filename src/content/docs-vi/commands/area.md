---
title: Lệnh Area — Đo Diện Tích và Chu Vi Của Đa Giác trong KulmanLab CAD
description: Lệnh Area đo diện tích khép kín và chu vi của một đa giác được xác định bởi 3 điểm bấm trở lên, sử dụng công thức shoelace. Hỗ trợ nhập hướng khóa góc và làm nổi bật kết quả liên tục trên canvas.
keywords: [đo diện tích CAD, lệnh area, tính diện tích đa giác, đo chu vi, công thức shoelace, kulmanlab CAD đo lường]
group: measure
order: 3
---

# Area

Lệnh `area` đo diện tích khép kín và chu vi của một đa giác được xác định bởi ba điểm bấm trở lên, và in cả hai kết quả trong terminal với 4 chữ số thập phân. Đây là lệnh đo lường thứ ba, cùng với [Distance](../distance/) (độ dài đường thẳng) và [Angle](../angle/) (góc nội tại tại một đỉnh).

## Cấu Trúc Phép Đo Diện Tích

```
  ● điểm đầu tiên
   \
    \
     ● điểm thứ hai
      \
       \             (nét đứt) xem trước cạnh khép kín
        ●───────────────┐
      điểm thứ ba       │  (nét đứt) xem trước cạnh tiếp theo đến con trỏ
                        ✕ con trỏ  →  terminal: "Area: 12.3456  Perimeter: 45.6789"
```

- **Đỉnh** — mỗi điểm bấm (hoặc nhập) trở thành một đỉnh của đa giác; các cạnh đã xác nhận được vẽ bằng nét liền và phần bên trong được tô bằng màu làm nổi bật bán trong suốt.
- **Cạnh xem trước** — các nét đứt hiển thị cạnh đang chờ từ đỉnh cuối cùng đến con trỏ, và cạnh khép kín từ con trỏ quay về đỉnh đầu tiên.
- **Cạnh khép kín** — bạn không bao giờ bấm lại điểm đầu tiên; nhấn Enter sẽ tự động khép kín đa giác.

## Đo Diện Tích

1. Nhập `area` trong terminal hoặc bấm nút **Area** trên thanh công cụ (hàng dưới của bảng Measure).
2. **Bấm điểm đầu tiên**, hoặc nhập `X,Y` và nhấn **Enter** để nhập tọa độ chính xác.
3. **Bấm từng đỉnh bổ sung** theo thứ tự quanh hình dạng. Nhập tọa độ hoạt động ở mỗi bước.
4. Sau khi đặt ít nhất **3 điểm**, nhấn **Enter** (không có tọa độ hoặc khoảng cách đang chờ nhập) để khép kín đa giác và tính kết quả.
5. Terminal in ra `Area: <giá trị>  Perimeter: <giá trị>`, và đa giác đã khép kín — tô màu, đường viền và các điểm điều khiển đỉnh — vẫn được làm nổi bật trên canvas.
6. **Bấm vào bất kỳ đâu, nhấn bất kỳ phím nào, hoặc nhấn `Escape`** để ẩn kết quả và kết thúc lệnh.

## Khóa Góc và Khoảng Cách Chính Xác

Sau khi đặt đỉnh đầu tiên, di chuyển theo hướng một trong các bước theo dõi góc đã cấu hình (10°, 15°, 20°, 30°, 45°, hoặc 90°, có thể đặt qua danh sách thả xuống trên thanh công cụ) sẽ khóa cạnh tiếp theo theo hướng đó:

- Bản xem trước cạnh sẽ khớp vào hướng đã khóa, và một chỉ báo theo dõi góc được vẽ tại đỉnh neo.
- Nhập một độ dài và nhấn **Enter** để đặt đỉnh tiếp theo chính xác ở khoảng cách đó dọc theo hướng đã khóa.
- Bấm khi đang khóa (không nhập độ dài) sẽ đặt đỉnh tại vị trí chiếu của con trỏ lên hướng đã khóa.

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.` | Thêm vào giá trị độ dài cạnh |
| `-` | Độ dài âm (chỉ là ký tự đầu tiên) |
| `Backspace` | Xóa ký tự cuối cùng đã nhập |
| `Enter` | Đặt đỉnh tiếp theo tại độ dài đã nhập |

## Khép Kín Đa Giác

- Enter chỉ khép kín hình dạng sau khi đã đặt **3 đỉnh trở lên** — với số lượng ít hơn, nó không có tác dụng.
- Cạnh từ đỉnh cuối cùng quay về đỉnh đầu tiên được tự động thêm vào và được tính vào cả diện tích lẫn chu vi.
- Các điểm có thể được đặt theo bất kỳ thứ tự nào (theo chiều kim đồng hồ hoặc ngược lại) — kết quả giống nhau.

## Area vs Distance vs Angle

| | Area | Distance | Angle |
|---|------|------|------|
| Đo gì | Diện tích & chu vi của đa giác khép kín | Chiều dài đường thẳng | Góc nội tại tại đỉnh |
| Số lần bấm | 3 trở lên, khép kín bằng Enter | 2 | 3 |
| Định dạng kết quả | `12.3456  Perimeter: 45.6789` | `12.3456` (đơn vị) | `45.0000°` |
| Bản xem trước trên canvas | Đa giác được tô màu với cạnh khép kín nét đứt | Đường từ điểm đầu đến con trỏ | Hai đường từ đỉnh đến con trỏ |
| Sau kết quả | Ẩn đi khi có bất kỳ đầu vào nào, sau đó lệnh kết thúc | Bấm để nối tiếp phép đo mới | Bấm để nối tiếp phép đo mới |
| Tốt nhất cho | Khu vực khép kín, diện tích phòng hoặc tấm | Chiều dài khoảng hở hoặc đoạn | Góc mở giữa hai đặc điểm |

## Nhập Tọa Độ

Thay vì bấm, nhập vị trí chính xác cho bất kỳ đỉnh nào:

1. Nhập giá trị X.
2. Nhấn `,` — terminal hiển thị `[X], [Y{con trỏ}]`.
3. Nhập giá trị Y.
4. Nhấn **Enter** để xác nhận.

## Tham Khảo Phím Tắt

| Phím | Hành động |
|------|-----------|
| `0`–`9`, `.`, `-` | Bắt đầu nhập tọa độ X, hoặc nhập độ dài cạnh khi khóa góc đang hoạt động |
| `,` | Khóa X và chuyển sang nhập Y |
| `Backspace` | Xóa ký tự cuối cùng đã nhập |
| `Enter` | Xác nhận tọa độ hoặc độ dài đã nhập; với 3+ đỉnh và không có đầu vào đang chờ, khép kín đa giác |
| `Escape` | Khi đang chọn đỉnh: bỏ các điểm đã đặt và bắt đầu lại từ điểm đầu tiên; sau khi kết quả hiển thị: ẩn kết quả và kết thúc lệnh |

## Lưu Ý

- Diện tích được tính bằng công thức shoelace và luôn được báo cáo dưới dạng giá trị dương, bất kể thứ tự bấm.
- Các đa giác tự cắt (các cạnh giao nhau) vẫn tạo ra kết quả số, nhưng giá trị có thể không khớp với khu vực được khép kín về mặt hình ảnh — hãy giữ thứ tự bấm không giao nhau để có diện tích có ý nghĩa.
- Kết quả chỉ được hiển thị trong **terminal và dưới dạng làm nổi bật tạm thời trên canvas** — không có gì được thêm vĩnh viễn vào bản vẽ.
- Không giống như Distance và Angle, Area **không** tự động nối tiếp sang phép đo mới — sau khi ẩn kết quả, hãy chạy lại `area` để đo một đa giác khác.
- Độ chính xác luôn là 4 chữ số thập phân cho cả diện tích và chu vi, theo cùng đơn vị với tọa độ bản vẽ (không có chuyển đổi đơn vị).
