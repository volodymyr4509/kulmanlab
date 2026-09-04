---
title: "Cách chuyển DXF sang PDF (đúng tỷ lệ)"
description: "Chuyển DXF sang PDF miễn phí ngay trên trình duyệt — kể cả theo tỷ lệ chính xác như 1:50 trên khổ A3, điều các trang chuyển đổi không làm được."
keywords: [chuyển DXF sang PDF, DXF sang PDF miễn phí, DXF PDF online, DXF PDF tỷ lệ, in DXF đúng tỷ lệ, công cụ chuyển DXF PDF, bản vẽ CAD sang PDF, DXF PDF A3, tỷ lệ 1:50 PDF, DXF sang PDF không cần AutoCAD]
date: 2026-09-03
author: KulmanLab
tag: Hướng dẫn
---

Để chuyển DXF sang PDF, hãy mở nó bằng một trình biên tập CAD chạy trên trình duyệt rồi xuất file: không phải cài gì, không cần tài khoản, và file vẫn nằm trên máy bạn. Còn nếu bản PDF phải đo được chính xác khi in ra, bạn cần một bố cục giấy và một tỷ lệ xác định — và đó đúng là bước mà các dịch vụ chuyển đổi bỏ qua hoàn toàn.

Chính sự khác biệt đó là lý do của cả bài viết này. Một công cụ chuyển đổi file thông thường trả cho bạn một tấm hình của bản vẽ. Một file PDF đúng tỷ lệ trả cho bạn một bản vẽ mà người ta có thể đặt thước lên đo.

## Cách nhanh: chỉ cần xuất ra PDF

Khi bạn chỉ cần một thứ đọc được để gửi đi:

1. Vào [app.kulmanlab.com](https://app.kulmanlab.com) và kéo thả file `.dxf` lên vùng vẽ, hoặc dùng nút **Import** trên bảng tệp.
2. Bấm nút **Print**, hoặc gõ `printmanager`.
3. Đặt **Format** thành **PDF**.
4. Bấm **Export**. File sẽ được tải về.

Vậy thôi. Khung xem trước được vẽ qua đúng cùng một đường mã và cùng độ phân giải với file xuất ra, nên thứ bạn nhìn thấy chính là thứ bạn nhận được, chứ không phải một phiên bản gần đúng.

Có một điều đáng biết: **file PDF giữ lại mọi thứ đang hiển thị trên màn hình** — kích thước, chữ, mặt cắt gạch, đường dẫn chú thích — bố trí đúng như đã vẽ. Việc xuất DXF cũng mang theo tất cả những thứ đó, nên lựa chọn giữa hai bên không nằm ở chỗ cái gì còn lại. Nó nằm ở chỗ người nhận cần gì: PDF nếu họ chỉ phải đọc hoặc in, DXF nếu họ phải chỉnh sửa.

## Cách đúng: chuyển đổi theo tỷ lệ chính xác

Nếu có người sẽ đo hoặc thi công dựa trên bản này, "vừa khít trang giấy" là chưa đủ. Tỷ lệ 1:50 nghĩa là 1 mm trên giấy tương ứng 50 mm ngoài thực tế, và điều đó chỉ đúng khi bạn thiết lập một cách có chủ ý.

1. **Chuyển sang bố cục giấy.** Bấm vào một thẻ bố cục ở đáy màn hình; nút **+** thêm bố cục mới. Bố cục là không gian giấy; không gian mô hình không có trang giấy nào để lấy làm chuẩn tỷ lệ.
2. **Định khổ giấy.** Gõ `pagemanager`, hoặc bấm chuột phải vào thẻ bố cục rồi chọn **Page Manager**. Chọn khổ giấy (A4, A3, A2, Letter…) và hướng giấy.
3. **Đặt khung nhìn.** Gõ `viewportrectangle` rồi chọn hai góc đối diện. Khung nhìn là một ô cửa sổ nhìn vào mô hình của bạn.
4. **Đặt tỷ lệ.** Khi khung nhìn đang hoạt động, dùng **bộ chọn tỷ lệ** trên thanh điều khiển. Chọn một tỷ lệ chuẩn hoặc tự gõ — chấp nhận dạng tỷ số (`1:200`, `5:1`) hoặc số thập phân (`0.005`), rồi nhấn Enter.
5. **Xuất file.** Print Manager → PDF → Export.

File PDF được định kích thước sao cho trang in ra đúng tỷ lệ vật lý thật. Hãy in ở mức 100% — tuyệt đối không dùng "vừa khít trang", vốn lặng lẽ co giãn lại mọi thứ và phá hỏng toàn bộ công sức — khi đó số đo trên giấy sẽ chuẩn.

Nếu sau này bạn đổi khổ giấy hay tỷ lệ, các khung nhìn hiện có sẽ được co giãn theo tỷ lệ tương ứng, nên bố cục không bị vỡ.

## Chọn mức chất lượng

Danh sách **Quality** quy định độ phân giải DPI khi kết xuất PDF:

| Quality | DPI | Dùng khi |
|---|---|---|
| Draft | 72 | Kiểm tra nhanh, file nhẹ nhất |
| Normal | 150 | Mặc định — đủ cho file đính kèm khổ A4 |
| Presentation | 300 | Khi sẽ có người xem kỹ |
| Max | 600 | Khổ lớn, chi tiết nhỏ |

Bề rộng nét được phóng theo độ phân giải, nên ở mọi thiết lập nét vẫn giữ nguyên độ dày *vật lý* trên giấy — chất lượng cao hơn cho nét sắc hơn, chứ không mảnh hơn. Ngoại lệ là nét tóc (bề rộng `0`), theo quy ước luôn giữ đúng một điểm ảnh ở mọi mức.

## Kiểu in

Danh sách **Style** thay đổi cả màu nét lẫn nền trang:

- **Monochrome** — đen đặc trên nền trắng, và đây là mặc định. Đây chính là thứ bạn cần cho bất cứ thứ gì sẽ lên giấy: các lớp nhiều màu đọc rất rõ trên màn hình sẽ thành những mảng xám nhoè trên máy in laser.
- **Default** — mỗi đối tượng giữ màu riêng, nền trang trắng.
- **Blueprint** — nét trắng trên nền xanh Phổ sẫm, theo lối bản vẽ xanh cổ điển. Để trình bày, không phải để mang ra xưởng.

## Chỉ chuyển đổi một phần bản vẽ

**Change Area** cắt phạm vi xuất về đúng hình chữ nhật bạn khoanh trên vùng vẽ. Nó cắt chính file được xuất ra chứ không chỉ khung xem trước, và dùng được cả trong bố cục lẫn trong không gian mô hình.

Các góc khoanh sẽ bắt dính vào nút và giao điểm như mọi thao tác chọn điểm khác, nên bạn có thể cắt bám theo hình học đã vẽ thay vì ước lượng bằng mắt — rất tiện khi một tờ có bốn chi tiết mà bạn chỉ cần cái thứ ba.

## Những gì cách này không làm được

Xin nói thẳng các giới hạn, trước khi bạn trông cậy vào nó:

- **File PDF là ảnh raster đặt trong vỏ PDF, không phải vector.** Ở khổ A4 với chất lượng Normal thì không thể nhận ra. Nhưng ở khổ A1, hoặc khi ai đó phóng thật to vào một chi tiết, file PDF vector từ phần mềm CAD trên máy tính sẽ sắc nét hơn. Với khổ lớn, hãy nâng Quality lên Presentation hoặc Max — nhưng nó vẫn không trở thành vector.
- **Không có gì được gửi tới máy in thật.** Bạn nhận về một file; việc in là chuyện của máy in.
- **Chỉ trình duyệt trên máy tính** — Chrome, Firefox, Safari, Edge. Không có bản cho di động.
- **Chỉ 2D, chỉ DXF chứ không phải DWG.** Nếu file của bạn là `.dwg`, hãy nhờ người gửi xuất sang DXF.

## Khi nào nên dùng thứ khác

**Công cụ chuyển đổi file thông thường** (CloudConvert, Zamzar và tương tự) là đủ nếu bạn thực sự chỉ cần một tấm hình và không quan tâm nó in ra to nhỏ thế nào. Chúng nhanh và đọc được cả những định dạng chẳng ai đọc nổi. Nhưng chúng sẽ không cho bạn 1:50 trên khổ A3.

**CAD trên máy tính** — LibreCAD, QCAD, hoặc AutoCAD nếu bạn có — xuất ra PDF vector và là câu trả lời đúng cho những bản vẽ kỹ thuật khổ lớn sẽ được in tử tế và soi rất kỹ.

**Còn cách này** dành cho khoảng giữa rộng lớn: một file DXF mà hôm nay bạn cần dưới dạng PDF đúng tỷ lệ, còn nguyên ghi chú, mà không phải cài đặt bất cứ thứ gì.

## Trước khi gửi đi

- Tỷ lệ được đặt có chủ ý trong khung nhìn, không phải để mặc theo thứ vừa khít
- Khổ giấy khớp với khổ mà người nhận thực sự sẽ in
- Quality được nâng trên mức Normal nếu in trên khổ lớn hơn A4
- Kiểu Monochrome, trừ khi bạn cố ý muốn có màu
- Đã mở file PDF một lần để kiểm tra trước khi đính kèm
- Đã dặn người nhận in ở mức 100%, không dùng "vừa khít trang"

Dòng cuối cùng đó cứu được nhiều bản vẽ đúng tỷ lệ hơn mọi mục khác trong danh sách này.

---

*Liên quan: [Print Manager](/vi/docs/commands/print-manager/) cho toàn bộ thiết lập xuất file, [Page Manager](/vi/docs/commands/page-manager/) cho khổ giấy và tỷ lệ bố cục, [ViewportRectangle](/vi/docs/commands/viewport-rectangle/) để đặt và định tỷ lệ khung nhìn, và [Import](/vi/docs/commands/import/) cho biết KulmanLab đọc được gì từ một file DXF.*
