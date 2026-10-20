---
title: "Lệnh PointDivide — đặt điểm cách đều theo chiều dài dọc một đối tượng"
description: "Lệnh PointDivide chia một đường thẳng, polyline, cung, đường tròn, elip hoặc spline thành các đoạn dài bằng nhau và đặt một điểm tại mỗi vị trí chia, xem trước khi bạn gõ số đoạn."
keywords: ["lệnh chia CAD", "chia đường thành các phần bằng nhau CAD", "điểm dọc đối tượng CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

Lệnh `ChiaĐềuBằngĐiểm` đặt các [điểm](../point/) chia một đối tượng thành các đoạn dài bằng nhau. Bản thân đối tượng không đổi: các điểm là thực thể mới trên layer và màu hiện tại, tiện để bắt điểm.

## Chia một đối tượng

1. Gõ `ChiaĐềuBằngĐiểm` trong terminal hoặc chọn **Point Divide** từ menu thả xuống của mảng trong bảng Edit.
2. **Nhấp vào đối tượng** — đường thẳng, polyline, cung, đường tròn, elip hoặc spline. Thứ khác bị từ chối và bạn có thể chọn lại.
3. **Gõ số đoạn**, một số nguyên từ 2 đến 32767. Các điểm được xem trước trên đối tượng khi bạn gõ.
4. Nhấn **Enter** hoặc **Space** để đặt chúng. Lệnh kết thúc.

## Điểm nằm ở đâu

- Khoảng cách được tính theo chiều dài dọc đối tượng, không theo góc, nên elip hoặc spline được cắt thành các mảnh dài bằng nhau. Các đoạn cung của polyline được đi theo đường cong của chúng.
- Trên đối tượng hở — đường thẳng, polyline hở, cung, một phần elip hoặc spline hở — điểm nằm giữa các đoạn, không bao giờ ở hai đầu: 5 đoạn cho 4 điểm.
- Trên đối tượng kín — đường tròn, polyline kín, elip đầy đủ hoặc spline kín — điểm đi hết một vòng từ điểm đầu của nó, nơi cũng có một điểm: đường tròn bắt đầu ở góc 0, polyline kín ở đỉnh đầu tiên. 5 đoạn cho 5 điểm.
- Số ngoài khoảng 2–32767 bị từ chối: terminal nêu lý do và xóa nó để bạn gõ lại.

Backspace xóa chữ số cuối. Escape bắt đầu lại để chọn đối tượng khác. Enter hoặc Space trước khi chọn đối tượng sẽ kết thúc lệnh.

---

*Liên quan: [Point Interval](../point-interval/) để đặt điểm cách nhau một khoảng cố định, [Point](../point/) cho điểm đơn, và [ArrayPolar](../array-polar/) để lặp đối tượng thay vì điểm.*
