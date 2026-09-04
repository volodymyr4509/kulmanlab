---
title: "Cách chuẩn bị file DXF cho cắt laser"
description: "Vì sao xưởng cắt trả lại file DXF và cách sửa file của bạn — biên dạng kín, đơn vị, mạch cắt và lớp. Miễn phí trên trình duyệt, không cần cài đặt."
keywords: [DXF cắt laser, chuẩn bị file DXF laser, định dạng file cắt laser, DXF bị trả lại, biên dạng kín DXF, bù mạch cắt laser, chuẩn bị file laser, đơn vị DXF laser, lớp cắt khắc, phần mềm DXF miễn phí]
date: 2026-09-02
author: KulmanLab
tag: Hướng dẫn
---

Một file DXF dùng để cắt laser cần bốn thứ: biên dạng kín, đơn vị đúng, chỉ chứa hình học cần cắt — không kích thước, ghi chú hay mặt cắt gạch — và các lớp tách riêng cắt, vạch và khắc. Bài này đi qua từng mục, kèm cách tự kiểm tra file trước khi xưởng trả lại.

Bạn có thể làm tất cả những việc đó miễn phí ngay trên trình duyệt tại [app.kulmanlab.com](https://app.kulmanlab.com): không phải cài gì, không cần tài khoản, và file không bao giờ rời khỏi máy bạn. Đây chính là quy trình mà KulmanLab được tạo ra để phục vụ ngay từ đầu, nên những giới hạn áp dụng cho các công việc CAD khác phần lớn không áp dụng ở đây: cắt laser vốn là hai chiều, và DXF đúng là thứ các xưởng cắt cần.

## Vì sao file bị trả lại

Năm nguyên nhân giải thích gần như toàn bộ.

**Biên dạng hở.** Một hình trông có vẻ kín nhưng có khe hở mảnh như sợi tóc ở một góc thì không phải là một vùng — đó là tập hợp những đoạn thẳng rời nhau. Máy cắt cần biết đâu là trong, đâu là ngoài, mà biên dạng hở thì không có phần trong. Đây là lý do bị trả lại phổ biến nhất, bỏ xa các lý do khác.

**Đơn vị sai hoặc mập mờ.** DXF không ghi lại một cách đáng tin cậy các con số của nó mang nghĩa gì. Cùng một file có thể được vẽ theo milimét, xentimét, inch hay foot, và thường thì file không nói rõ. Chi tiết về tay lớn hoặc nhỏ gấp 25,4 lần chính là do điều này.

**Mọi thứ không phải hình học.** Kích thước, khung tên, ghi chú, mặt cắt gạch, đường dựng hình. Máy sẽ vui vẻ cắt luôn cả phần chú thích của bạn.

**Đường trùng nhau.** Hai đoạn giống hệt chồng lên nhau nghĩa là tia laser đi lại đúng đường đó hai lần: mất thời gian, mép bị cháy sém, và trên vật liệu mỏng còn là nguy cơ cháy.

**Tất cả nằm trên một lớp.** Nếu cắt, vạch và khắc không được tách ra, xưởng không thể phân biệt và sẽ yêu cầu bạn gửi lại.

## Chuẩn bị file

Kéo file `.dxf` thả vào vùng vẽ tại [app.kulmanlab.com](https://app.kulmanlab.com), hoặc dùng nút **Import** trên bảng tệp. Bản vẽ được nạp lên và khung nhìn tự khớp theo.

**1. Xem thật kỹ bạn đang có gì.** Gõ `fit` để đưa toàn bộ vào khung nhìn. Sau đó phóng to từng góc của từng chi tiết — khe hở không thể thấy ở tỷ lệ toàn bản vẽ nhưng lộ rõ khi phóng 10 lần. Chính bước kiểm tra này giúp bạn khỏi nhận email trả lại.

**2. Xóa những gì không được cắt.** Đường dựng hình, ghi chú, khung viền, kích thước. `layer-isolate` hiển thị từng lớp một, và đó là cách tìm ra những thứ sót lại nấp dưới phần hình học thật.

**3. Khép kín các khe hở.** `trim` cắt bỏ phần thừa ở chỗ hai đoạn giao nhau vượt quá. Chỗ đường bị hụt, hãy kéo điểm nút đầu mút sang điểm bên cạnh — các nút hút dính vào nhau, nên hai đầu thật sự chạm nhau chứ không phải suýt chạm.

**4. Kiểm tra kích thước.** `distance` đo giữa hai điểm, `area` đo vùng kín dựa trên các điểm bạn nhấp. Hãy đo một chi tiết mà bạn biết kích thước thật. Nếu lệch đúng 25,4 lần thì file của bạn đang ở sai hệ đơn vị.

**5. Tách riêng cắt, vạch và khắc.** Đặt mỗi công đoạn trên một lớp riêng với tên dễ nhận: `CUT`, `SCORE`, `ENGRAVE`. Phần lớn xưởng hoặc yêu cầu như vậy, hoặc yêu cầu file riêng. `layer-manager` tạo và gán các lớp này.

Sau đó xuất file: **Export** → **DXF**. KulmanLab ghi ra DXF AC1032 thuần túy, đúng thứ mà các xưởng cắt và phần mềm máy mong đợi.

## Mạch cắt

Tia laser lấy đi một phần vật liệu khi cắt — khoảng 0,1 đến 0,3 mm tùy máy, vật liệu và độ dày. Cắt một hình vuông 50 mm, bạn sẽ nhận được hình vuông hơi nhỏ hơn 50 mm, và chi tiết lẽ ra ép khít vào đó sẽ không lọt.

Có hai cách xử lý:

**Để xưởng lo.** Phần lớn xưởng cắt tự bù mạch cắt, và nếu họ đã làm thì bạn bù thêm sẽ khiến chi tiết sai theo chiều ngược lại. Hãy hỏi trước khi chỉnh bất cứ thứ gì.

**Tự làm.** `offset` tạo bản sao song song của một hình ở khoảng cách cố định — bằng nửa bề rộng mạch cắt, hướng ra ngoài với chi tiết cần giữ nguyên kích thước, hướng vào trong với lỗ. Nó dùng được với đường thẳng, đường tròn, cung tròn, elip và đa tuyến. Mỗi lần chỉ xử lý một đối tượng, nên phù hợp với vài vị trí quan trọng chứ không phải cả tấm hai trăm chi tiết.

Nếu dung sai quan trọng, hãy cắt thử một mẫu trước khi dùng hẳn vật liệu.

## Cần kiểm tra gì ở bước xuất DXF

Đáng biết trước khi bạn trông cậy vào nó:

- **Giờ phần chú giải cũng được xuất — hãy tự dọn nó đi.** Chữ, kích thước, đường dẫn chú thích và mặt cắt gạch đều đi vào tệp DXF xuất ra. Với một lần bàn giao thông thường thì đó đúng là điều bạn muốn, nhưng với tệp cắt, điều đó nghĩa là bất cứ thứ gì bạn để lại trong bản vẽ sẽ thực sự nằm trong tệp. Bước xuất không còn lặng lẽ lược bỏ giúp bạn nữa, nên hãy xóa đi, hoặc giữ chúng trên các lớp mà bạn sẽ bỏ trước khi xuất.
- **Chữ ra dưới dạng `MTEXT`, không giống hình học khắc được.** Phần chữ được xuất kèm định dạng, nhưng khá nhiều phần mềm máy muốn đường bao thay vì chữ sống trên lớp khắc. Hãy kiểm tra phần mềm của bạn chấp nhận gì trước khi tính chuyện khắc chữ dựa vào đó.
- **Tham chiếu block không được nhập vào.** Bản vẽ dựng từ các ký hiệu block lặp lại sẽ vào thiếu, nên hãy đối chiếu số lượng chi tiết với bản gốc.

Còn spline thì *có* được xuất. Một số phần mềm máy xử lý spline kém và thích đa tuyến hơn — nếu máy bạn như vậy, hãy vẽ lại các đường cong thành đa tuyến hoặc cung tròn.

## Một lưu ý về tự động hóa

KulmanLab **không có chức năng kiểm tra trước**. Không có gì quét tìm biên dạng hở, đường trùng hay lỗi đơn vị rồi báo cho bạn. Các bước kiểm tra ở trên đều làm thủ công: phóng to, đo, nhìn.

Với vài chi tiết thì ổn, với cả một tấm xếp kín thì mệt. Nếu bạn thường xuyên sản xuất theo tấm, một công cụ có trình kiểm tra tự động sẽ hợp hơn — còn với chi tiết lẻ, tức là phần lớn trường hợp của phần lớn mọi người, xem file thật kỹ cũng phát hiện đúng những vấn đề đó.

## Trước khi gửi đi

- Mọi biên dạng cắt đều kín — các góc đã kiểm ở mức phóng to
- Đã đo một kích thước đã biết và cho kết quả đúng
- Không còn kích thước, ghi chú, khung viền hay đường dựng hình
- Không có đường trùng chồng lên nhau
- Cắt, vạch và khắc nằm trên các lớp riêng, đặt tên rõ ràng
- Mạch cắt: đã bù, hoặc cố ý để xưởng lo
- Đã xuất ra DXF và mở lại một lần để xác nhận trông đúng

Mục cuối chỉ tốn mười giây và phát hiện các bất ngờ khi xuất file trước khi xưởng phát hiện.

---

*Liên quan: [Import](/vi/docs/commands/import/) cho biết KulmanLab đọc được gì từ DXF, [Export Manager](/vi/docs/commands/export-manager/) cho biết mỗi định dạng xuất mang theo những gì, [Offset](/vi/docs/commands/offset/) để bù mạch cắt, và [LayerManager](/vi/docs/commands/layer-manager/) để thiết lập lớp cắt và khắc.*
