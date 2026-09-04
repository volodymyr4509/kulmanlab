---
title: "Cách mở file DXF mà không cần AutoCAD"
description: "Ai đó gửi bạn file .dxf mà máy không có AutoCAD? Mở miễn phí ngay trên trình duyệt, không cần cài đặt — kèm giải pháp thay thế và cách xử lý bản vẽ trắng."
keywords: [mở file DXF, mở DXF không cần AutoCAD, phần mềm xem DXF miễn phí, xem DXF online, mở DXF trên trình duyệt, DXF viewer miễn phí, cách mở file DXF, đọc file DXF, DXF hay DWG, mở DXF trên Mac]
date: 2026-08-31
author: KulmanLab
tag: Hướng dẫn
---

Để mở file DXF mà không cần AutoCAD, hãy kéo thả nó vào một trình biên tập CAD chạy ngay trong trình duyệt — không phải cài gì và cũng không cần tạo tài khoản. Các phần mềm máy tính miễn phí như LibreCAD và QCAD cũng mở được DXF. Bài viết này trình bày cả hai hướng, cùng cách xử lý khi bản vẽ mở ra trắng trơn, bé xíu hoặc mất chữ.

Một trong những công cụ bên dưới là do chúng tôi làm — [KulmanLab](https://kulmanlab.com/vi/) — nên hãy xem phần đó là phần thiên vị, còn những hạn chế liệt kê ở đó là phần chúng tôi buộc phải nói thật.

## File DXF thực chất là gì

DXF là viết tắt của *Drawing Exchange Format* (định dạng trao đổi bản vẽ). Autodesk tạo ra nó để các phần mềm CAD có thể chuyển bản vẽ cho nhau, và nó được thiết kế mở, dựa trên văn bản một cách có chủ đích — bạn có thể mở một file `.dxf` bằng trình soạn thảo văn bản và đọc được nội dung bên trong.

Chính sự cởi mở đó là lý do bạn có nhiều lựa chọn. DXF không bị trói vào một phần mềm nào, và hàng chục công cụ có thể đọc nó.

Đó cũng là lý do DXF không phải là một tấm ảnh. Nó lưu hình học — đường thẳng, cung tròn, đường tròn, lớp, kích thước — chứ không phải điểm ảnh. Đổi tên thành `.jpg` sẽ không khiến nó mở được trong trình xem ảnh.

## Cách 1: mở ngay trên trình duyệt

Đường nhanh nhất, vì chẳng có gì phải tải về và cũng không phải đăng ký.

1. Truy cập [app.kulmanlab.com](https://app.kulmanlab.com).
2. Kéo file `.dxf` thả thẳng lên vùng vẽ — hoặc dùng nút **Import** (biểu tượng thư mục) trên bảng tệp.
3. Bản vẽ được nạp lên và khung nhìn tự động khớp với nó.

File của bạn không bao giờ rời khỏi máy. KulmanLab chạy hoàn toàn trong trình duyệt, nên bản vẽ được phân tích cục bộ chứ không tải lên máy chủ.

Từ đó bạn có thể di chuyển và phóng to thu nhỏ, bật tắt lớp, đo khoảng cách và góc, chỉnh sửa hình học, rồi xuất ra PDF, PNG, JPEG hoặc WebP nếu bạn chỉ cần một thứ in được để gửi đi.

**Những gì đọc được từ DXF:** đường thẳng, đường tròn, cung tròn, elip, đa tuyến, spline, chữ, kích thước, đường dẫn chú thích nhiều nhánh và mặt cắt tô, cùng với bảng lớp và bảng kiểu đường của file.

**Thứ nó ghi ra:** vẫn danh sách ấy. Chỉnh sửa bản vẽ rồi xuất ra, và hình học, chữ kèm định dạng, kích thước, đường dẫn chú thích cùng mặt cắt gạch đều quay trở lại tệp DXF, kèm bảng lớp và kiểu đường còn nguyên — nghĩa là tệp đi và về mà không mất phần chú giải.

**Chỗ còn thiếu — hãy đọc trước khi trông cậy vào nó:**

- **Chỉ 2D.** File DXF chứa khối đặc hoặc lưới 3D là file không phù hợp với công cụ này.
- **Không hỗ trợ block.** Tham chiếu block (`INSERT`) không được phân tích, nên bản vẽ dựng từ các ký hiệu block lặp lại sẽ vào thiếu.
- **DXF, không phải DWG.** Xem phần DWG bên dưới.
- **Chỉ trình duyệt trên máy tính** — Chrome, Firefox, Safari và Edge. Không có bản cho di động.

Nếu bất kỳ điểm nào trong số đó là yếu tố quyết định với bạn, một trong các phần mềm máy tính bên dưới sẽ phục vụ bạn tốt hơn.

## Cách 2: phần mềm máy tính miễn phí

Đáng để cài nếu bạn sẽ làm việc này thường xuyên, hoặc nếu file của bạn dùng những tính năng mà công cụ trên trình duyệt không kham nổi.

**LibreCAD** — miễn phí, mã nguồn mở, chỉ 2D, chạy trên Windows, macOS và Linux. Gần với lối vẽ kỹ thuật 2D cổ điển nhất, và là một trình biên tập DXF chắc chắn.

**QCAD** — nhân mà LibreCAD tách ra từ đó. Có bản cộng đồng miễn phí cùng bản Pro trả phí với thêm tính năng.

**FreeCAD** — miễn phí, mã nguồn mở, hướng tới dựng hình tham số 3D nhưng vẫn nhập được DXF. Quá thừa nếu bạn chỉ muốn xem một bản vẽ 2D, và khá khó học.

**Autodesk Viewer** — trình xem web miễn phí của chính Autodesk. Chỉ xem, và cần đăng nhập bằng tài khoản Autodesk.

**Inkscape** — không phải CAD, nhưng nhập được DXF và là lựa chọn hợp lý nếu bạn chỉ cần nhìn hình dạng hoặc chuyển sang SVG.

## "Thật ra nó là DWG phải không?"

Rất thường xuyên là vậy. DXF và DWG đều là định dạng của Autodesk và người ta hay dùng lẫn hai tên, nhưng chúng không phải một:

| | DXF | DWG |
|---|---|---|
| Định dạng | Mở, dựa trên văn bản | Độc quyền, nhị phân |
| Mục đích | Trao đổi giữa các phần mềm | Định dạng gốc của AutoCAD |
| Hỗ trợ ở nơi khác | Rộng rãi | Hạn chế và thường không trọn vẹn |

Hãy kiểm tra phần mở rộng thật của file trước khi đi tìm trình xem. Nếu là `.dwg`, phần lớn các công cụ nêu trên sẽ không giúp được — kể cả KulmanLab, vốn chỉ hỗ trợ DXF.

Giải pháp chắc ăn là xin lại một file DXF: người gửi có thể mở nó trong phần mềm CAD của họ rồi xuất hoặc *Save As* sang DXF. Gần như mọi ứng dụng CAD trên máy tính đều làm được, và chỉ mất khoảng mười giây. Tự chuyển đổi DWG bằng công cụ của bên thứ ba thì vẫn được, nhưng mất mát nhiều hơn — và bạn đang giao bản vẽ của người khác cho một công cụ không rõ lai lịch.

## Khi bản vẽ mở được nhưng trông sai

**Vùng vẽ trắng trơn.** Thường là do hình học nằm rất xa gốc tọa độ, nên khung nhìn đang chĩa vào khoảng không. Dùng lệnh *fit* hoặc *zoom extents* để nhảy tới bản vẽ. Cũng nên kiểm tra xem có lớp nào đang tắt không — bản vẽ có thể được gửi tới trong tình trạng phần lớn lớp đã bị đóng băng.

**Mọi thứ nhỏ như hạt bụi, hoặc to một cách vô lý.** DXF không ghi lại đơn vị một cách đáng tin cậy. Cùng một bản vẽ có thể được dựng theo milimét, xentimét, inch hay foot, và file thường không nói rõ là đơn vị nào. Hãy đo một vật bạn biết kích thước thật rồi quy đổi tỷ lệ từ đó.

**Chữ bị mất hoặc bị thay thế.** Phông chữ không được nhúng vào DXF. Nếu bản vẽ dùng phông mà máy bạn không có, chữ sẽ rơi về một phông khác hoặc biến mất. Nạp đúng phông gốc là xong.

**Một phần bản vẽ không vào được.** Trong file có thứ dùng loại đối tượng mà công cụ của bạn không đọc — thường là block, khối đặc 3D, hoặc phần mở rộng độc quyền do phần mềm tạo ra nó ghi vào. Hãy thử một công cụ thứ hai trước khi kết luận file bị hỏng.

**Không mở được gì cả.** Xác nhận file đúng là DXF: mở nó bằng trình soạn thảo văn bản thuần. Một file DXF thật bắt đầu bằng các mã nhóm ASCII đọc được và tên phần như `SECTION` và `HEADER`. Nếu bạn thấy toàn ký tự nhiễu nhị phân, đó là DWG hoặc biến thể DXF nhị phân.

## Nên chọn cái nào

**Chỉ cần xem, một lần thôi?** Mở trên trình duyệt. Cài cả một bộ CAD chỉ để đọc một file ai đó gửi qua email là cuộc đổi chác không đáng.

**Cần đo đạc, ghi chú hay in ấn?** Công cụ trên trình duyệt làm tốt việc này, và in ra PDF đúng tỷ lệ thật thường chính là thứ người ta cần.

**Làm công việc vẽ kỹ thuật thực thụ, lặp đi lặp lại?** Hãy cài LibreCAD hoặc QCAD. Phần mềm máy tính chuyên dụng sẽ phục vụ bạn tốt hơn về lâu dài.

**Đang cầm một file DWG?** Hãy xin người gửi một file DXF. Cách đó nhanh hơn và an toàn hơn mọi con đường chuyển đổi.

---

*Liên quan: [Import](/vi/docs/commands/import/) để xem danh sách đầy đủ những gì KulmanLab đọc được từ DXF, [Export Manager](/vi/docs/commands/export-manager/) để biết mỗi định dạng xuất mang theo những gì, và [Print Manager](/vi/docs/commands/print-manager/) để xuất PDF đúng tỷ lệ vật lý thật.*
