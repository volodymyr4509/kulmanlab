---
title: Lệnh Hatch — Tô Đầy Một Vùng Bằng Mẫu
description: Lệnh Hatch tô đầy vùng bao quanh một điểm đã nhấp bằng một mẫu — bất kỳ tổ hợp nào của đường thẳng, cung, hình elip và spline khép kín sẽ bao quanh một vùng, và bất kỳ hình khép kín nào bên trong sẽ vẫn là một đảo không được tô.
keywords: [lệnh hatch CAD, tô đầy vùng CAD, mẫu hatch CAD, ANSI31, tô SOLID, tô viền CAD, thực thể DXF HATCH, kulmanlab]
group: shapes
order: 7
---

# Hatch

Lệnh `MặtCắt` tô đầy vùng bao quanh một điểm đã nhấp bằng một mẫu. Đường viền không được vẽ trước — nó xuất phát từ những gì đã có sẵn trên canvas, vì vậy bốn [Line](../line/) riêng biệt gặp nhau đầu-cuối sẽ bao quanh một vùng giống hệt như một [Polyline](../polyline/) khép kín, và bất kỳ hình khép kín nào bên trong sẽ trở thành một đảo mà phần tô không chạm đến.

## Tô Đầy Một Vùng

1. Gõ `MặtCắt` trong terminal hoặc nhấp nút **Hatch** trên thanh công cụ (biểu tượng mẫu vải).
2. **Nhấp một điểm** bên trong vùng bạn muốn tô đầy.
3. Lệnh vẫn hoạt động, vì vậy tiếp tục nhấp để tô thêm các vùng khác — mỗi lần nhấp tạo ra thực thể `Hatch` riêng của nó.
4. Nhấn **Enter**, **Space**, hoặc **Escape** khi hoàn tất.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   nhấp bên trong đường
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   viền ngoài; hình tròn
  └─────────────┘        └─────────────┘   vẫn là một đảo
```

## Tham khảo phím tắt

| Phím | Hành động |
|-----|--------|
| `Enter` / `Space` | Hoàn tất lệnh Hatch |
| `Escape` | Hoàn tất lệnh Hatch (giống như Enter/Space) |

## Những Gì Có Thể Tạo Thành Đường Viền

Bất kỳ tổ hợp nào của các loại thực thể sau có thể tạo thành đường viền, ở bất kỳ tổ hợp nào, miễn là chúng kết nối đầu-cuối mà không có khoảng hở:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (đường viền khép kín của riêng nó)
- [Ellipse](../ellipse/) (khép kín, hoặc một cung elip mở là một phần của vòng lớn hơn)
- [Polyline](../polyline/) (mở hoặc khép kín) và [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/)

Các thực thể Text, Multileader và Dimension không bao giờ được coi là đường viền.

## Đảo

Bất cứ thứ gì khép kín hoàn toàn bên trong vùng bạn đã nhấp — một hình tròn, một polyline khép kín, đường viền của một hatch khác — trở thành một **đảo**: phần tô dừng lại ở cạnh của nó và bản thân đảo vẫn trống. Đặt một hình khép kín bên trong một hình khép kín khác và phần tô sẽ luân phiên, lỗ trong một phần tô trong một lỗ, tuân theo cùng quy tắc trong/ngoài ở mỗi cấp.

## Khi Một Lần Chọn Thất Bại

Nếu điểm bạn nhấp không được bao quanh, hoặc đường viền có khoảng hở, terminal sẽ giải thích lý do thay vì âm thầm không làm gì:

| Thông báo | Ý nghĩa |
|-----------|---------|
| "no boundary found" | Không có gì được chạm tới ở bất kỳ hướng nào từ điểm đã nhấp — không có đường viền nào gần đó cả |
| "point is not enclosed" | Có một đường viền gần đó, nhưng hình mà nó tạo thành không chứa điểm bạn đã nhấp |
| "boundary is open" | Đường viền gần nhất có một khoảng hở ở đâu đó — hãy dò theo nó và kiểm tra xem mỗi mối nối có chính xác không |
| "boundary too complex" | Vòng đường viền không thể khép kín trong giới hạn duyệt — thường là một mớ hỗn độn các thực thể chồng chéo |

Lệnh vẫn hoạt động sau một lần chọn thất bại — đọc thông báo, sửa bản vẽ hoặc nhấp vào chỗ khác, và thử lại.

## Chọn Mẫu

Mỗi hatch mới bắt đầu được tô bằng `ANSI31` (hoặc bất kỳ mẫu nào mà hatch *cuối cùng* bạn chỉnh sửa đã dùng) — không có bộ chọn mẫu trước khi vẽ. Để dùng mẫu khác:

1. Chọn một hatch đã có và mở trường **Pattern** của nó trong bảng thuộc tính — thao tác này mở bộ chọn mẫu, một lưới các mẫu vải có tên được nhóm theo nguồn gốc của từng mẫu.
2. Nhấp vào một mẫu để áp dụng nó — phần tô cập nhật ngay lập tức.

Lựa chọn đó cũng trở thành mặc định cho hatch *tiếp theo* bạn tạo bằng lệnh `MặtCắt`, theo cách tương tự như việc chọn lớp hoặc màu được mang theo. Vì vậy để hatch nhiều vùng mới bằng một mẫu cụ thể: tô đầy một vùng, đặt mẫu của nó một lần, sau đó tiếp tục hatch — mỗi lần tô sau đó đã bắt đầu với mẫu đó được áp dụng sẵn.

Xem [Hatch Manager](../hatch-manager/) để tải lên các tệp mẫu `.pat` của riêng bạn và duyệt toàn bộ thư viện.

**SOLID** là một mục bình thường trong danh sách mẫu, không phải một hộp kiểm hay chế độ riêng — chọn nó theo cách tương tự như bạn sẽ chọn ANSI31 hoặc bất kỳ mẫu có tên nào khác.

## Thuộc Tính

| Thuộc tính | Ý nghĩa |
|------------|---------|
| Pattern | Tên mẫu, từ từ vựng mẫu dùng chung (xem [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Tỷ lệ khoảng cách giữa các đường của mẫu — giá trị lớn hơn giãn các đường mẫu ra xa nhau hơn |
| Pattern Angle | Xoay mẫu độc lập với đường viền |
| Origin X / Origin Y | Vị trí neo của phần lặp lại riêng của mẫu, theo tọa độ bản vẽ |

Di chuyển, xoay, lật gương, hoặc thay đổi tỷ lệ một hatch sẽ mang theo vị trí mẫu của nó, vì vậy phần tô vẫn thẳng hàng với đường viền — bạn không cần đặt lại tỷ lệ hoặc góc sau khi biến đổi.

## Chỉnh Sửa Bằng Núm Kéo Của Đường Viền

Một hatch được chọn nắm giữ đường viền của nó theo cách tương tự như một Polyline nắm giữ các đỉnh của nó — một núm kéo ở mỗi góc nơi hai cạnh gặp nhau, và một ở giữa mỗi cạnh (một vòng khép kín như hatch của hình tròn hoặc hình elip thay vào đó nắm giữ ở bốn điểm trục của nó).

| Núm kéo | Chức năng |
|---------|-----------|
| **Góc** | Di chuyển góc đó. Một cạnh thẳng theo sát chính xác; một cung điều chỉnh lại để tiếp tục đi qua cả hai cạnh lân cận; một cạnh elip hoặc spline chỉ có thể đáp xuống một nơi nào đó trên đường cong riêng của nó, vì vậy góc sẽ bám vào điểm gần nhất trên đó |
| **Giữa cạnh — cạnh đường thẳng, elip, hoặc spline** | Trượt toàn bộ cạnh; các cạnh ở cả hai bên được cắt hoặc kéo dài để vẫn nối với nó |
| **Giữa cạnh — cạnh cung** | **Uốn cong** cung qua con trỏ thay vì trượt nó — cả hai đầu vẫn giữ nguyên chính xác vị trí cũ, và không có gì khác trong đường viền di chuyển |
| **Tâm** (toàn bộ hatch) | Kích hoạt [Move](../move/) cho toàn bộ hatch |

Bản xem trước khi kéo hiển thị đường viền dưới dạng đường viền nét đứt thay vì phần tô đặc trong khi bạn kéo — phần tô ban đầu vẫn hiển thị bên dưới cho đến khi bạn thả ra, vì bản xem trước chỉ có thể vẽ chồng lên những gì đã có, không bao giờ xóa bỏ bất cứ thứ gì khỏi nó.

## DXF — Thực Thể HATCH

Hatch được **nhập** từ các thực thể `HATCH`: KulmanLab đọc hình học đường viền cùng với tên, tỷ lệ và góc của mẫu (mã nhóm DXF 70/41/52) — nó **không** đọc các định nghĩa đường riêng của mẫu được viết inline trong tệp. Thay vào đó, tên mẫu được tra cứu trong thư viện mẫu riêng của KulmanLab (các mặc định tích hợp cộng với bất cứ thứ gì bạn đã tải lên trong [Hatch Manager](../hatch-manager/)). Một tên không có trong thư viện của bạn sẽ quay về ANSI31 để bản vẽ vẫn được đọc là đã hatch, và một ghi chú được ghi log một lần.

Các vòng bị giới hạn bởi spline được viết bởi các ứng dụng khác (loại cạnh viền DXF 4) chưa được đọc.

Mặt cắt gạch được **xuất** sang DXF dưới dạng đối tượng `HATCH`. Các vòng biên đi ra kèm tên mẫu (mã nhóm 2), cờ tô đặc (70) cùng góc và tỷ lệ của chính mặt cắt đó (52/41) — và khác với đường nhập, các định nghĩa đường của mẫu đã được phân giải cũng được ghi vào trong tệp (78, cùng 53/43/44/45/46/79/49). Sự bất đối xứng này là có chủ ý: KulmanLab có thể tra tên trong thư viện của mình, nhưng ứng dụng nhận tệp có thể không có mẫu đó, nên các đường đi kèm theo.

## Các Lệnh Liên Quan

- [Hatch Manager](../hatch-manager/) — duyệt thư viện mẫu và tải lên các tệp `.pat`
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — tất cả đều mang theo vị trí mẫu của hatch
- [Delete](../delete/) — xóa hatch mà không ảnh hưởng đến các thực thể đã tạo thành đường viền của nó
