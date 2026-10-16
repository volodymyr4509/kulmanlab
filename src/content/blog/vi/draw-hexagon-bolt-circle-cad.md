---
title: "Cách vẽ hình lục giác hoặc vòng tròn bu lông trong CAD (Polygon và mảng cực)"
description: "Vẽ đa giác đều từ tâm và bán kính hoặc từ một cạnh, rồi lặp lại các lỗ trên vòng tròn bu lông bằng mảng cực — miễn phí trong trình duyệt, với giá trị gõ chính xác."
keywords: [vẽ hình lục giác trong CAD, đa giác đều CAD, mảng cực CAD, bản vẽ vòng tròn bu lông, mẫu lỗ CAD, mẫu hình tròn CAD, vẽ đai ốc lục giác, vẽ hình bát giác CAD, đường kính vòng chia PCD, công cụ đa giác CAD miễn phí]
date: 2026-10-11
author: KulmanLab
tag: Hướng dẫn
---

Để vẽ đa giác đều trong CAD, hãy nhập số cạnh, chọn tâm rồi nhập bán kính — hoặc chọn một cạnh và phần còn lại sẽ tự có. Để vẽ vòng tròn bu lông, hãy vẽ một lỗ và lặp lại quanh tâm bằng mảng cực. Hướng dẫn này làm cả hai, với số liệu chính xác, trong trình duyệt tại [app.kulmanlab.com](https://app.kulmanlab.com) — miễn phí, không cần cài đặt, và tệp không bao giờ rời khỏi máy tính của bạn.

Chúng tôi xây dựng [KulmanLab](https://kulmanlab.com), nên các bước dưới đây dùng lệnh của nó. Các ý tưởng — khoảng cách giữa hai mặt phẳng so với giữa hai góc, đường kính vòng chia, bản sao có xoay theo khi đi quanh hay không — giống nhau ở mọi chương trình CAD.

## Vẽ đa giác đều

Đa giác đều có các cạnh và góc bằng nhau: lục giác cho đai ốc, bát giác cho biển báo, ngũ giác cho đường cắt trang trí. Trong KulmanLab đó là lệnh **Polygon**.

1. Gõ `ĐaGiác` trong terminal, hoặc dùng nút Polygon trong bảng Shapes.
2. Nhập **số cạnh** — bất kỳ số nguyên nào từ 3 đến 1024 — và nhấn **Enter**. Lời nhắc được điền sẵn số bạn dùng lần trước.
3. **Nhấp vào tâm**, hoặc gõ `X,Y` cho một điểm chính xác.
4. **Nhấp để chọn bán kính**, hoặc gõ rồi nhấn **Enter**.

Kết quả là một polyline đóng duy nhất, nên mọi thứ bạn làm được với polyline — di chuyển, xoay, offset, đổi tỉ lệ — đều dùng được.

### Giữa hai mặt phẳng hay giữa hai góc?

Đây là chỗ mọi người hay vấp. “Bán kính” có thể là hai khoảng cách khác nhau, và lục giác được xác định bằng khoảng cách này hoặc kia tùy bạn đang vẽ gì:

| | Đo đến | Dùng điển hình |
|---|---|---|
| **Inside bật** (mặc định) | Các góc | Hình phải nằm vừa trong một đường tròn cho trước |
| **Inside tắt** | Trung điểm mỗi cạnh | Hình có độ rộng giữa hai mặt phẳng cho trước — đai ốc, đầu bu lông, cỡ cờ lê |

Nhấn `I` ở lời nhắc bán kính để chuyển. Đai ốc lục giác được bán theo độ rộng giữa hai mặt phẳng, nên hãy dùng **Inside tắt** và gõ *một nửa* giá trị đó. Với đai ốc M8 rộng 13 mm giữa hai mặt:

1. `ĐaGiác`, rồi `6` cho số cạnh, rồi nhấp hoặc gõ tâm.
2. Nhấn `I` để tắt Inside.
3. Gõ `6.5` rồi nhấn **Enter**.

Hai mặt phẳng cách nhau đúng 13 mm; các góc cách tâm 7,51 mm, tức khoảng 15 mm giữa hai góc. Nếu bạn gõ bán kính thay vì nhấp, đa giác sẽ nằm với cạnh thấp nhất ngang, phẳng ở dưới. Nếu nhấp, nó lấy hướng từ nơi bạn nhấp.

### Từ một cạnh

Đôi khi bạn biết độ dài cạnh chứ không biết bán kính — chẳng hạn mặt bàn bát giác có cạnh 20 mm. Nhấn `E` ở lời nhắc điểm đầu tiên để chuyển sang chế độ **Edge**, rồi chọn hai đầu của một cạnh. Các đỉnh còn lại được dựng ngược chiều kim đồng hồ, bên trái cạnh đó. Gõ `0,0` rồi `20,0` sẽ đặt một cạnh 20 mm dọc trục X với đa giác nằm phía trên.

## Vẽ vòng tròn bu lông

Vòng tròn bu lông — “PCD” trên bản vẽ — là vòng các lỗ cách đều nhau quanh một tâm. Bạn vẽ một lỗ rồi lặp lại. Trong KulmanLab đó là **ArrayPolar**.

Lấy sáu lỗ 6,6 mm trên vòng chia đường kính 50 mm, tâm đặt tại gốc tọa độ:

1. **Vẽ lỗ đầu tiên.** Chạy `HìnhTròn`, gõ tâm là `25` `,` `0` — một nửa PCD dọc trục X —, nhấn **Enter**, rồi gõ bán kính `3.3` và nhấn **Enter**.
2. **Chọn nó** bằng cách nhấp vào đường tròn.
3. **Chạy mảng cực.** Gõ `MảngTròn`, hoặc dùng nút ArrayPolar trong bảng Edit.
4. **Chọn tâm của mẫu** — gõ `0,0`.
5. Terminal hiển thị mảng như hiện tại — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — và năm bản sao được xem trước trực tiếp. Nhấn **Enter** để chấp nhận.

Vậy là xong toàn bộ vòng tròn bu lông. Để đổi số lượng, nhấn `I` trước khi xác nhận và gõ số mục — bản gốc tính là một, và góc giữa chúng được tính giúp bạn. Hoặc nhấn `A` và gõ khoảng cách bằng độ; góc điền sẽ được diễn đạt lại cho khớp.

Vài chi tiết quan trọng:

- **Fill** là góc từ mục đầu đến mục cuối. Mặc định 360° trải các mục quanh cả vòng; số nhỏ hơn trải chúng trên một cung — ví dụ một hàng lỗ trên một phần tư vòng. Góc âm đi theo chiều kim đồng hồ.
- **Rotate** quyết định mỗi bản sao có xoay theo khi đi quanh hay không. Với lỗ tròn thì không khác gì. Với rãnh, răng hay giá đỡ thì có: bật — mỗi bản sao hướng vào tâm như bản gốc; tắt — mỗi bản sao giữ hướng của bản gốc và chỉ được di chuyển đến vị trí. Nhấn `R` để chuyển trước khi xác nhận.
- Mảng tạo ra các **bản sao** — bản gốc ở nguyên chỗ, và mỗi mục là một thực thể bình thường mà bạn có thể chỉnh sửa sau đó.

## Ghép lại: một mặt bích

Vẽ một lục giác làm đường viền, một đường tròn ở giữa làm lỗ khoan và một vòng tròn bu lông cho các lỗ lắp. Ba lệnh, mọi kích thước gõ chính xác, không phải đo gì trên màn hình.

Nếu chi tiết đi cắt laser, hãy xóa đường tròn phụ bạn vẽ để tìm vòng chia — nó sẽ bị cắt như mọi thứ khác — và kiểm tra tệp theo hướng dẫn [chuẩn bị DXF cho cắt laser](/vi/blog/prepare-dxf-for-laser-cutting/) của chúng tôi. Đa giác là đường khép kín ngay từ cách tạo, đây là lý do phổ biến nhất khiến dịch vụ cắt từ chối tệp.

## Những gì cách này không làm được

- **Chỉ đa giác đều.** Mọi cạnh đều bằng nhau. Đường viền không đều — hình có một vài cạnh dài hơn — là một [polyline](/vi/docs/commands/polyline/) bạn vẽ từng điểm.
- **Chỉ 2D.** Nó vẽ đường viền phẳng. Bạn sẽ không có đai ốc dựng mô hình hay bu lông có ren.
- **Chỉ trình duyệt máy tính** — Chrome, Firefox, Safari và Edge. Không có bản di động.

---

*Liên quan: [Polygon](/vi/docs/commands/polygon/) và [ArrayPolar](/vi/docs/commands/array-polar/) cho mọi tùy chọn và phím, [Circle](/vi/docs/commands/circle/) để gõ bán kính chính xác, và [ArrayGrid](/vi/docs/commands/array-grid/) để lặp đối tượng theo hàng và cột thay vì quanh một tâm.*
