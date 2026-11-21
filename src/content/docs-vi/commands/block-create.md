---
title: "Lệnh BlockCreate — Tạo khối từ các đối tượng"
description: "Lệnh BlockCreate tạo một khối có tên từ các đối tượng đã chọn, với điểm gốc bạn chọn, và thay chúng bằng một tham chiếu đến khối. Sau đó có thể đặt khối nhiều lần bằng BlockInsert."
keywords: ["tạo khối CAD", "khối từ đối tượng CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

Lệnh `TạoKhối` tạo một **khối**: một nhóm đối tượng có tên, lưu một lần trong bản vẽ và đặt bao nhiêu lần tùy ý bằng [Block Insert](../block-insert/). Các đối tượng bạn chọn trở thành khối, và trong bản vẽ chúng được thay bằng một tham chiếu đến khối, nên hình dạng không đổi.

## Tạo một khối

1. Nếu muốn, hãy chọn đối tượng trước, rồi gõ `TạoKhối` hoặc nhấp **Tạo khối** trong bảng **Khối**. Một cửa sổ bật lên với phần đã chọn sẵn.
2. Gõ **Tên**. Không được để trống, không được chứa ký tự nào trong `< > / \ " : ; ? * | , =` hay dấu huyền ngược, và không được trùng tên khối khác.
3. Nhấp **Chọn đối tượng** để thêm hoặc bớt đối tượng: cửa sổ ẩn đi, và bạn nhấp vào đối tượng hoặc kéo một vùng. Nhấn **Enter** hoặc **Space** để quay lại cửa sổ, nơi **Đối tượng** cho biết số lượng.
4. Đặt **Điểm gốc**, điểm dùng để đặt khối: gõ X và Y của nó, hoặc nhấp **Chọn điểm** rồi nhấp trên canvas (hoặc gõ X,Y ở đó). Mặc định là 0,0.
5. Nhấp **OK**. Khối được lưu, các đối tượng nhường chỗ cho một tham chiếu đến khối tại điểm gốc, và terminal ghi tên khối cùng số đối tượng của nó.

## Nên biết

- **OK** vẫn bị vô hiệu hóa khi còn gì đó sai, và thông báo dưới các trường cho biết đó là gì: tên trống hoặc không dùng được, tên đã có, hoặc không có đối tượng.
- **Escape** khi đang chọn đối tượng hoặc điểm gốc sẽ quay lại cửa sổ với khối như trước. **Escape** trong cửa sổ hủy lệnh.
- Khối được lưu cùng bản vẽ và ghi vào DXF cùng các tham chiếu của nó.

---

*Liên quan: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
