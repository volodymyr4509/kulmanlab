---
title: "Nhập tọa độ — gõ điểm chính xác, tương đối và cực"
description: "Bất cứ khi nào một lệnh hỏi điểm, hãy gõ thay vì nhấp: X,Y cho vị trí chính xác, @X,Y để đo từ điểm cuối, và khoảng cách<góc cho điểm cực. Nút Rel làm mọi điểm gõ vào bắt đầu ở dạng tương đối."
keywords: ["nhập tọa độ CAD", "tọa độ tương đối CAD", "tọa độ cực CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Nhập tọa độ

Bất cứ khi nào một lệnh hỏi điểm — điểm đầu của [Line](../../commands/line/), góc của [Rectangle](../../commands/rectangle/), điểm gốc của [Move](../../commands/move/), hay một grip bạn đang kéo — bạn đều có thể gõ thay vì nhấp. Bắt đầu gõ một số và terminal hiển thị những gì bạn gõ; nhấn **Enter** hoặc **Space** để đặt điểm.

## Bốn cách viết một điểm

| Bạn gõ | Điểm nằm ở |
|---|---|
| `100,50` | Tại X 100, Y 50 |
| `@100,50` | Cách điểm cuối 100 theo X và 50 theo Y |
| `100<45` | Cách gốc tọa độ 100, ở góc 45° |
| `@100<45` | Cách điểm cuối 100, ở góc 45° |

Góc tính bằng độ, ngược chiều kim đồng hồ từ trục X, nên `@50<90` là 50 thẳng lên và `@50<180` là 50 sang trái. Cả hai giá trị đều có thể âm.

## Điểm cuối

`@` đo từ điểm cuối cùng được nhấp hoặc gõ trong bất kỳ lệnh nào — lần nhấp cuối của lệnh trước cũng tính, và một grip bạn vừa kéo cũng vậy. Khi chưa có điểm cuối, `@100,50` được đọc là `100,50`. Điểm cuối bị quên khi bạn chuyển giữa model space và layout, và khi mở một bản vẽ.

## Rel: tương đối theo mặc định

Nút **Rel** trên thanh điều khiển làm mọi điểm gõ vào bắt đầu ở dạng tương đối: ngay khi bạn gõ chữ số đầu tiên, một `@` được thêm vào trước, nên `100,50` thành `@100,50`. Nhấn **Backspace** tại `@` để điểm đó thành tuyệt đối. Khi chưa có điểm cuối, không thêm `@`. Rel mặc định tắt và được ghi nhớ cùng các nút khác của thanh điều khiển.

## Phím khi gõ

| Phím | Tác dụng |
|---|---|
| `0`–`9`, `.`, `-` | Gõ số; `-` chỉ ở đầu |
| `@` | Làm điểm thành tương đối, ở đầu X |
| `,` hoặc **Space** | Kết thúc X và chuyển sang Y |
| `<` | Kết thúc X là khoảng cách và chuyển sang góc |
| **Enter** hoặc **Space** | Đặt điểm khi Y đã có giá trị |
| **←** **→** **Home** **End** | Di chuyển con trỏ trong giá trị đang gõ |
| **Backspace** | Xóa trước con trỏ; ở đầu một Y trống thì quay về X |

Điểm không đọc được thành số sẽ ở lại trong terminal để bạn sửa. Mỗi điểm gõ vào để lại một dòng trong lịch sử terminal đúng như bạn gõ — `Đã nhập @100<45` — trước dòng của lệnh cho biết điểm rơi vào đâu.

## Điểm gõ vào và theo dõi góc

Khi con trỏ bị khóa vào một tia theo dõi góc, gõ một số cho khoảng cách dọc theo tia đó thay vì X. Gõ `@` trước sẽ bắt đầu một điểm đầy đủ, nên `@100,50` vẫn dùng được trên tia đã khóa.

---

*Liên quan: [Theo dõi khoảng cách](../distance-tracking/) để gõ độ dài dọc theo hướng đã khóa, và [Vector Pins](../vector-pins/) để đo từ một điểm đã ghim.*
