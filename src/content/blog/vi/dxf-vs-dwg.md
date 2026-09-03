---
title: "DXF và DWG khác nhau thế nào?"
description: "DWG là định dạng gốc của AutoCAD, DXF là định dạng trao đổi mở. Khác biệt thật sự nằm ở đâu, bạn cần loại nào, và cách xin file DXF khi được gửi DWG."
keywords: [DXF và DWG, khác nhau DXF DWG, DWG hay DXF, DWG là gì, DXF là gì, chuyển DWG sang DXF, định dạng file CAD, mở file DWG, định dạng DXF, chọn định dạng CAD]
date: 2026-09-02
author: KulmanLab
tag: Hướng dẫn
---

DWG là định dạng tệp gốc của AutoCAD: nhị phân, độc quyền, và Autodesk không công bố đặc tả. DXF là định dạng trao đổi mà Autodesk có công bố, để các phần mềm khác cũng đọc được cùng những bản vẽ ấy. Cùng một hình học, khác cái vỏ đựng — và chỉ một trong hai được tạo ra để đưa tệp cho người ngoài phần mềm của chính bạn.

Chính điểm cuối cùng đó là toàn bộ khác biệt trong thực tế, và nó quyết định bạn nên hỏi xin loại nào.

## Tóm tắt

| | DXF | DWG |
|---|---|---|
| Viết tắt của | Drawing Exchange Format | Drawing |
| Đặc tả công bố | Có, do Autodesk | Không |
| Mã hóa | Văn bản (còn có biến thể nhị phân) | Nhị phân |
| Mục đích | Đưa bản vẽ qua lại giữa các phần mềm | Định dạng làm việc riêng của AutoCAD |
| Kích thước tệp | Lớn hơn | Nhỏ hơn |
| Được phần mềm khác đọc | Rất rộng rãi | Không đồng đều, qua thư viện dựng lại từ phân tích ngược |
| Mang được mọi thứ AutoCAD làm được | Không — một tập con có tài liệu | Có |

## Vì sao lại có tới hai định dạng

Autodesk ra mắt AutoCAD năm 1982 với DWG làm định dạng làm việc. Nó được dựng vì sự tiện lợi của riêng một phần mềm: gọn, nhị phân, và tự do thay đổi bất cứ khi nào AutoCAD cần.

Điều đó khiến nó là thứ dở để gửi cho người khác. Vậy nên Autodesk còn công bố thêm DXF — vẫn bản vẽ ấy nhưng viết ra ở dạng có tài liệu, đọc được, để bất kỳ lập trình viên nào cũng dựa vào đó mà làm. Mở một tệp `.dxf` bằng trình soạn thảo văn bản, bạn sẽ thấy các mã nhóm và tên phần hiện ra bằng ASCII thuần.

Hai định dạng được đánh phiên bản song song. Mỗi bản AutoCAD mang theo một bản sửa đổi DWG và một bản DXF tương ứng; dấu `AC1032` mà đôi khi bạn thấy trong phần đầu tệp chỉ thế hệ AutoCAD 2018 chẳng hạn.

Vậy nên DXF không phải định dạng cũ hơn hay kém hơn. Nó vẫn là bản vẽ ấy, chỉ được cố ý làm cho đọc được.

## Thực tế khác nhau ở chỗ nào

**Tính mở.** Autodesk có tài liệu cho DXF và không có cho DWG. Những phần mềm đọc được DWG — mà cũng nhiều — dựa vào các thư viện hình thành từ việc phân tích ngược định dạng. Cách đó chạy tốt và hoàn toàn chính đáng, nhưng nghĩa là hỗ trợ DWG luôn chậm hơn các bản mới và khác nhau tùy ứng dụng, còn hỗ trợ DXF thì ai cũng có thể tự làm thẳng từ đặc tả.

**Kích thước.** Một tệp DWG nhị phân thường nhỏ hơn hẳn cùng bản vẽ đó ở dạng DXF văn bản. Với dự án lớn điều này có ý nghĩa; với một chi tiết đơn lẻ thì không.

**Độ trung thực.** DWG chứa được mọi thứ AutoCAD có thể diễn đạt, kể cả những kiểu đối tượng mà phần mềm khác không có khái niệm. DXF bao phủ một tập con có tài liệu. Với công việc vẽ 2D thông thường — đường thẳng, cung, đường tròn, đa tuyến, chữ, kích thước, lớp — tập con ấy đã là tất cả những gì bạn cần. Với mô hình dựa nhiều vào đối tượng riêng của AutoCAD, xuất sang DXF sẽ mất một phần.

**Bề rộng hỗ trợ.** Gần như mọi công cụ CAD, CAM và đồ họa vector đều đọc được DXF. Số đọc được DWG ít hơn, và những phần mềm đó thường hỗ trợ kém trọn vẹn hơn.

## Bạn thật sự cần loại nào?

**Ai đó gửi bạn một tệp và bạn không mở được.** Trước hết hãy xem đuôi tệp thật. Phần lớn mọi người gọi cả hai là "DWG", và một nửa số lần thứ nằm trong thư mục tải về của bạn là `.dxf` mà bạn vốn đã mở được. Xem [mở DXF không cần AutoCAD](/vi/blog/open-dxf-file-without-autocad/).

**Bạn gửi cho xưởng cắt laser, xưởng CNC hay đơn vị gia công.** Gần như luôn là DXF. Phần mềm máy và các dịch vụ cắt đều xây quanh nó, còn hình học cắt 2D thì nằm gọn trong tập con có tài liệu. Xem [chuẩn bị DXF cho cắt laser](/vi/blog/prepare-dxf-for-laser-cutting/).

**Bạn gửi cho kiến trúc sư hay kỹ sư làm việc trên AutoCAD.** Hỏi trước. Nhiều người thích DWG vì quy trình của họ mặc định như vậy, còn nếu không thì họ mở DXF cũng chẳng vấn đề gì.

**Bạn lưu trữ lâu dài.** DXF. Một định dạng văn bản có tài liệu thì hai mươi năm sau vẫn đọc được với ai có đặc tả và một trình soạn thảo văn bản. Chính lập luận đó là lý do các định dạng trao đổi tồn tại.

**Ai đó chỉ muốn xem qua.** Không dùng loại nào cả — gửi PDF. Xem [chuyển DXF sang PDF](/vi/blog/convert-dxf-to-pdf/).

## Cách có được DXF khi bạn được gửi DWG

Cách đáng tin là hỏi xin. Người gửi tệp mở nó trong phần mềm CAD của họ rồi *Save As* hoặc *Export* → DXF. Mất chừng mười giây, mọi ứng dụng CAD trên máy tính đều làm được, và tệp ấy ra thẳng từ phần mềm đã tạo nó chứ không phải từ phỏng đoán của một bên thứ ba.

Nếu không thể hỏi, vẫn có các công cụ chuyển đổi. Hai điều cần cân nhắc: chuyển đổi chính là chỗ độ trung thực bị mất, và bạn đang tải bản vẽ của người khác lên một dịch vụ mình không kiểm soát. Với dự án cá nhân thì không sao. Với việc của khách hàng, hãy hỏi.

Khi hỏi xin, nên nêu rõ phiên bản. **DXF R12 là an toàn nhất** — rất cũ, được hỗ trợ khắp nơi, và nếu bản vẽ chỉ là hình học 2D thuần thì chẳng mất gì đáng kể. Đặc biệt phần mềm máy đời cũ dễ chịu với nó hơn nhiều.

## Hai điều người ta hay hiểu sai

**"DXF làm mất dữ liệu."** Chỉ theo nghĩa nó không mang các kiểu đối tượng riêng của AutoCAD. Đường thẳng, cung, đường tròn, đa tuyến, chữ, kích thước và lớp đều qua nguyên vẹn. Với công việc vẽ 2D, mức mất mát thường bằng không.

**"DXF là định dạng cũ."** Nó được đánh phiên bản song hành với DWG từ năm 1982 và đến giờ vẫn thế. Sự nhầm lẫn đến từ chỗ R12 được dùng quá phổ biến làm mốc tương thích, khiến người ta tưởng DXF dừng lại ở đó.

## Công cụ này đứng ở đâu

[KulmanLab](https://kulmanlab.com/vi/) đọc **DXF chứ không đọc DWG**, và điều này đáng nói rõ lý do thay vì coi như một thiếu sót: DXF có tài liệu, nên một bản cài đặt có thể đúng chỉ nhờ đọc đặc tả. DWG thì đồng nghĩa với việc phụ thuộc vào một thư viện dựng lại từ phân tích ngược, ngay trong trình duyệt, cho một định dạng thay đổi theo lịch của Autodesk.

Nếu bạn có `.dwg`, công cụ này sẽ không mở được. Nếu là `.dxf`, bạn mở ngay trong một tab trình duyệt mà chẳng phải cài gì: [app.kulmanlab.com](https://app.kulmanlab.com).

Thứ nó ghi ra là hình học kèm chữ — đường thẳng, đường tròn, cung, elip, đa tuyến, spline và chữ, cùng với lớp và kiểu đường. Mặt cắt gạch, kích thước và đường dẫn chú thích hiện chưa đi vào tệp DXF xuất ra.

---

*Liên quan: [Import](/vi/docs/commands/import/) cho biết KulmanLab đọc chính xác những gì từ một DXF, và [Export Manager](/vi/docs/commands/export-manager/) cho biết mỗi định dạng xuất mang theo những gì.*
