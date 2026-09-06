---
title: "Vì sao tệp DXF của bạn mở ra sai kích thước (và cách sửa)"
description: "Một DXF mở ra nhỏ hơn 25,4 lần hoặc lớn hơn 1000 lần là do lệch đơn vị, không phải tệp hỏng. Cách nhận ra tỷ lệ, chỉnh lại và kiểm chứng."
keywords: [DXF sai tỷ lệ, DXF sai kích thước, đơn vị DXF, DXF mm hay inch, DXF nhập vào quá nhỏ, hệ số tỷ lệ DXF, DXF 25.4, sửa tỷ lệ DXF, đơn vị DXF không khớp, chỉnh kích thước DXF]
date: 2026-09-04
author: KulmanLab
tag: Hướng dẫn
---

Một tệp DXF mở ra, và chi tiết lẽ ra rộng 40 mm lại đo được 1,575. Hoặc một mặt bằng đến nơi to bằng cả một dãy phố. Tệp không hỏng và cũng chẳng ai làm sai điều gì — bản vẽ vẫn đúng, thứ thất lạc dọc đường là con số đi kèm nó.

Điều này đáng hiểu trước khi bạn chỉnh tỷ lệ bất cứ thứ gì, bởi việc sửa chỉ mất mười giây một khi bạn biết mình đang đối mặt với tỷ lệ nào, còn đoán mò là cách để cắt sai kích thước tới hai lần.

## DXF hầu như không mang theo đơn vị

DXF lưu tọa độ dưới dạng những con số trần trụi. Một đoạn từ `0,0` đến `40,0` dài bốn mươi *cái gì đó*. Định dạng này không gắn đơn vị vào tọa độ, và cũng chẳng có chỗ nào để gắn — con số chính là hình học.

Thứ gần nhất là một biến trong phần đầu tệp tên `$INSUNITS`, một mã duy nhất cho cả tệp: `1` là inch, `4` là milimét, `6` là mét, và cứ thế. Hai điều khiến nó yếu hơn vẻ ngoài. Nó là một giá trị cho cả bản vẽ, nên không thể mô tả một tệp ghép từ nhiều nguồn khác nhau. Và nó mang tính gợi ý chứ không ràng buộc: nhiều phần mềm chỉ đọc nó khi *chèn* bản vẽ này vào bản vẽ khác, và bỏ qua hoàn toàn khi bạn chỉ mở tệp — với lý lẽ hợp lý rằng người mở một bản vẽ thường biết mình đã vẽ gì.

Vậy nên "40" đi đến nơi nguyên vẹn còn "milimét" thì không. Mọi tệp DXF sai kích thước bạn từng nhận đều gói gọn trong câu ấy.

## Xác định tỷ lệ trước đã

Hãy đo một chi tiết mà bạn thực sự biết kích thước thật: đường kính lỗ, cạnh tấm, khoảng cách bắt vít tiêu chuẩn. Lấy kích thước đáng lẽ phải có chia cho kích thước đo được. Kết quả gần như luôn là một trong những con số này:

| Tỷ lệ | Chuyện gì đã xảy ra |
|---|---|
| **25,4** | Vẽ bằng inch, bị đọc thành milimét |
| **0,03937** | Vẽ bằng milimét, bị đọc thành inch |
| **1000** | Vẽ bằng mét, bị đọc thành milimét |
| **0,001** | Vẽ bằng milimét, bị đọc thành mét |
| **12** | Foot bị đọc thành inch |
| **304,8** | Foot bị đọc thành milimét |

Nếu con số của bạn nằm trong bảng, bạn chỉ gặp chuyện lệch đơn vị chứ không gì khác, và phần còn lại mất một phút.

Nếu không — chẳng hạn 1,37 hay 3,2 — hãy dừng lại. Đó không phải vấn đề đơn vị, và chỉnh tỷ lệ sẽ tạo ra một bản vẽ sai theo kiểu khó phát hiện hơn nhiều. Hãy nhảy tới mục cuối.

## Cách sửa

Bạn cần thứ để đo và thứ để chỉnh tỷ lệ. Phần mềm CAD nào cũng làm được; đây là cách làm trong [KulmanLab](https://kulmanlab.com/vi/), mở DXF ngay trong một tab trình duyệt mà không cần cài gì:

1. Mở tệp — kéo thả vào trang, hoặc dùng [Import](/vi/docs/commands/import/).
2. Chạy [Distance](/vi/docs/commands/distance/) rồi bấm hai đầu của chi tiết bạn đã biết. Việc bắt điểm rất quan trọng ở đây: hãy bắt đúng điểm đầu mút, đừng bấm đâu đó gần gần, nếu không bạn sẽ nướng luôn sai số của mình vào hệ số.
3. Chia. Kích thước đã biết ÷ kích thước đo được. Một lỗ 40 mm hiển thị 1,575 cho ra 40 ÷ 1,575 ≈ **25,4**.
4. Chọn tất cả, chạy [Scale](/vi/docs/commands/scale/), chọn một điểm gốc và gõ hệ số.

Điểm gốc đứng yên trong khi mọi thứ khác dịch chuyển, nên hãy đặt nó ở nơi bạn lý giải được — một góc của chi tiết, hoặc gốc tọa độ. Với bản vẽ sắp mang đi cắt, gốc tọa độ thường là lựa chọn hợp lý.

Có một điều tiện ở đây: KulmanLab không có thiết lập đơn vị riêng. Tọa độ chỉ là những con số, và đó đúng là trạng thái bạn muốn bản vẽ ở trong khi đang tìm hiểu những con số ấy nghĩa là gì. Không có phép quy đổi nào chạy sau lưng bạn, cũng không có gì để phải chống lại.

## Kiểm chứng trước khi tin

Hãy đo một chi tiết *thứ hai*, ở chỗ khác trong bản vẽ, mà bạn cũng biết kích thước thật. Rồi đối chiếu.

Đây là bước người ta hay bỏ qua, và là bước duy nhất bắt được trường hợp tệ. Nếu phép đo thứ hai giờ đã đúng, bản vẽ vốn đồng loạt sai đơn vị và nay đồng loạt đúng. Xong.

Nếu phép đo thứ hai *vẫn* sai, mà lại sai một lượng khác, thì đây chưa bao giờ là chuyện lệch đơn vị đơn giản. Bạn vừa chỉnh tỷ lệ một bản vẽ không nhất quán, và như thế còn tệ hơn lúc đầu, vì sai số không còn là một tỷ lệ gọn gàng để ai đó nhận ra.

[Area](/vi/docs/commands/area/) là ý kiến thứ hai hữu ích ở đây, nhất là với vật liệu tấm. Diện tích thay đổi theo *bình phương* của hệ số, nên sai số chiều dài 25,4 lần hiện ra thành sai số diện tích 645 lần — một chênh lệch khó mà tự thuyết phục cho qua.

## Để lần sau không tái diễn

Đơn vị thất lạc giữa người với người, nên cách khắc phục cũng nằm ở đó.

**Nói rõ đơn vị khi gửi tệp.** Một dòng trong tin nhắn. "Mọi kích thước tính bằng mm." Chẳng tốn gì mà xóa sạch cả vấn đề.

**Gửi kèm một kích thước tham chiếu.** Cho biết một số đo thật — "tấm ngoài rộng 300 mm". Giờ người nhận có thể kiểm chứng tệp thay vì phỏng đoán, và nếu quả có gì sai, họ sửa trong một phút mà không cần quay lại hỏi bạn.

**Hãy hỏi, khi bạn là người nhận.** Nếu một tệp đến mà không ghi đơn vị và bạn sắp cắt vật liệu từ nó, một tin nhắn rẻ hơn một tấm vật liệu hỏng.

**Vẽ bằng đơn vị mà đầu ra mong đợi.** Cắt laser, CNC và phần lớn quy trình chế tạo đều mong đợi milimét. Nếu tệp đi về hướng đó, hãy vẽ bằng milimét, thế là chẳng còn phép quy đổi nào để sai. Xem [chuẩn bị DXF cho cắt laser](/vi/blog/prepare-dxf-for-laser-cutting/).

## Khi đó không phải vấn đề đơn vị

Nếu tỷ lệ của bạn không phải một phép quy đổi đơn vị gọn ghẽ, các nguyên nhân khả dĩ thuộc loại khác hẳn:

- **Bản vẽ trộn nhiều tỷ lệ.** Ai đó vẽ một phần ở 1:1 rồi dán vào một chi tiết ở 1:5, hoặc một block được chèn kèm hệ số tỷ lệ mà không bao giờ sửa lại. Hãy sửa đúng phần hình học có lỗi, đừng động vào cả tệp.
- **Bạn đã đo hình học trong không gian giấy.** Khung tên hay khung ghi chú được vẽ theo khổ giấy, không theo kích thước mô hình. Hãy đo thứ thuộc về vật thể thật.
- **Bạn đo nhầm chỗ.** Một lỗ danh nghĩa 40 mm có thể được vẽ 39,8 để lắp khít, và tấm "300 mm" có thể là 300 tính tới mép ngoài của một rãnh bạn không thấy. Hãy chọn chi tiết có cạnh rõ ràng.

Trong mọi trường hợp ấy, câu trả lời là tìm ra bản vẽ thực sự là gì, chứ không phải chỉnh tỷ lệ nó. Một bản vẽ mà các phần mâu thuẫn với nhau sẽ còn ngốn vật liệu của bạn cho tới khi có người mở nó ra và nhìn cho kỹ.

---

*Liên quan: [Distance](/vi/docs/commands/distance/) để đo, [Scale](/vi/docs/commands/scale/) để sửa, [Area](/vi/docs/commands/area/) cho ý kiến thứ hai, và [Export Manager](/vi/docs/commands/export-manager/) để biết mỗi định dạng mang theo những gì khi bạn gửi trả.*
