---
title: "Lệnh Measure — đọc khoảng cách, độ dài, góc và diện tích quanh con trỏ"
description: "Lệnh Measure đọc bản vẽ quanh con trỏ khi bạn di chuyển nó — khoảng cách đến hình học gần nhất, độ dài hoặc bán kính của thứ nó gặp, góc nơi các đường gặp nhau — và khi nhấp sẽ cho diện tích và chu vi của vùng kín. Không có gì trong bản vẽ thay đổi."
keywords: ["lệnh đo CAD", "đo diện tích và chu vi CAD", "đo khoảng cách trực tiếp CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

Lệnh `Đo` đọc bản vẽ quanh con trỏ khi bạn di chuyển nó, không cần chọn điểm: hình học gần nhất cách bao xa, dài hoặc tròn thế nào, và góc nơi các đường gặp nhau. Nhấp bên trong một vùng kín cho diện tích và chu vi của nó. Không có gì trong bản vẽ thay đổi.

## Đo

1. Gõ `Đo` trong terminal hoặc nhấp **Measure**, nút đầu tiên trong bảng Measure.
2. **Di chuyển con trỏ.** Từ đó lệnh nhìn sang phải, lên, sang trái và xuống để tìm hình học gần nhất và hiển thị những gì tìm thấy.
3. **Nhấp bên trong một vùng kín** để tô đầy nó và đọc diện tích cùng chu vi — xem bên dưới.
4. Nhấn **Enter**, **Space** hoặc **Escape** để kết thúc.

## Những gì nó hiển thị

- **Khoảng cách ngang qua** — từ thứ con trỏ gặp ở một bên đến thứ nó gặp ở bên kia, theo chiều ngang và chiều dọc. Nếu chỉ một bên có gì đó, khoảng cách bắt đầu từ con trỏ. Mỗi đầu gặp thứ gì đó có một chấm đặc nhỏ; đầu ở con trỏ thì không.
- **Độ dài hoặc bán kính** — mỗi đối tượng lệnh chạm tới được làm nổi bật cùng độ dài của nó, hoặc bán kính nếu nó là một phần của đường tròn.
- **Góc** — nơi hai đường thẳng đã chạm tới gặp nhau, góc giữa chúng được ghi; góc vuông được đánh dấu bằng một ô vuông nhỏ.

Độ dài và góc được ghi như [DimensionStyle](../dimension-style/) hiện tại ghi, theo định dạng đơn vị và độ chính xác của nó.

## Diện tích và chu vi

Nhấp bên trong một vùng kín sẽ tô đầy nó và đặt diện tích cùng chu vi vào lời nhắc và lịch sử. Vùng được tìm như [Hatch](../hatch/) tìm: các đường rời gặp nhau đầu nối đầu khép kín một vùng giống như polyline, và mọi thứ kín bên trong bị bỏ qua như một đảo — cạnh của nó tính vào chu vi và diện tích của nó bị trừ đi.

Diện tích là một số thường theo đơn vị bản vẽ bình phương — feet và inch không có cách ghi diện tích — còn chu vi theo định dạng đơn vị. Nhấp bên trong vùng khác để đo nó. Nếu không có gì kín bao quanh điểm, terminal nói lý do bằng cùng thông báo như Hatch: no boundary found, point is not enclosed hoặc boundary is open.

## Nên biết

- Nó đo so với đường thẳng, cung, đường tròn, elip, polyline và spline; độ dài và diện tích chính xác, kể cả với elip và spline.
- Đối tượng trên layer bị đóng băng bị bỏ qua; đối tượng trên layer bị khóa được đo.
- Trong bản vẽ lớn, nó chỉ nhìn những gì gần con trỏ nên vẫn phản hồi nhanh.

---

*Liên quan: [Distance](../distance/), [Angle](../angle/) và [Area](../area/) cho các phép đo giữa những điểm bạn chọn, và [Hatch](../hatch/) cho cách tìm vùng kín.*
