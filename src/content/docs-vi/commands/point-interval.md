---
title: "Lệnh PointInterval — đặt điểm cách nhau một khoảng cố định dọc một đối tượng"
description: "Lệnh PointInterval đặt các điểm cách nhau theo độ dài bạn gõ dọc một đường thẳng, polyline, cung, đường tròn, elip hoặc spline, bắt đầu từ đầu mút bạn nhấp gần hơn, và xem trước khi bạn gõ độ dài."
keywords: ["đặt điểm theo khoảng CAD", "điểm cách đều trên đường thẳng CAD", "đo dọc đối tượng CAD", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

Lệnh `ĐiểmTheoKhoảng` đặt các [điểm](../point/) cách nhau một khoảng cố định dọc một đối tượng, như cắm mốc dọc một tuyến. Bản thân đối tượng không đổi: các điểm là thực thể mới trên layer và màu hiện tại, tiện để bắt điểm.

## Đặt điểm theo khoảng

1. Gõ `ĐiểmTheoKhoảng` trong terminal hoặc chọn **Point Interval** từ menu thả xuống của mảng trong bảng Edit.
2. **Nhấp vào đối tượng gần đầu mút muốn bắt đầu** — đường thẳng, polyline, cung, đường tròn, elip hoặc spline. Thứ khác bị từ chối và bạn có thể chọn lại.
3. **Gõ độ dài khoảng.** Các điểm được xem trước trên đối tượng khi bạn gõ.
4. Nhấn **Enter** hoặc **Space** để đặt chúng. Lệnh kết thúc.

## Điểm nằm ở đâu

- Điểm đầu tiên cách điểm bắt đầu một khoảng, các điểm còn lại nối tiếp cách nhau một khoảng, đo dọc đối tượng kể cả đoạn cong. Không đặt điểm tại chính điểm bắt đầu.
- Trên đối tượng hở — đường thẳng, polyline hở, cung, một phần elip hoặc spline hở — việc đo bắt đầu từ đầu mút bạn nhấp gần hơn. Phần dư ở đầu xa không được đánh dấu: đầu xa chỉ có điểm khi khoảng chia vừa khít.
- Trên đối tượng kín — đường tròn, polyline kín, elip đầy đủ hoặc spline kín — việc đo bắt đầu từ điểm đầu của chính đối tượng, dù bạn nhấp ở đâu: đường tròn từ góc 0 ngược chiều kim đồng hồ, polyline kín từ đỉnh đầu tiên. Các điểm dừng trước điểm bắt đầu.
- Độ dài bằng 0 hoặc nhỏ hơn, dài hơn đối tượng, hoặc cho hơn 32767 điểm bị từ chối: terminal nêu lý do và xóa nó để bạn gõ lại.

Backspace xóa ký tự cuối. Escape bắt đầu lại để chọn đối tượng khác. Enter hoặc Space trước khi chọn đối tượng sẽ kết thúc lệnh.

---

*Liên quan: [Point Divide](../point-divide/) để chia đối tượng thành một số độ dài bằng nhau, và [Point](../point/) cho điểm đơn.*
