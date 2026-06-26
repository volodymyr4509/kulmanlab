---
title: LayerUnfreezeAll — Bỏ Đóng Băng Tất Cả Lớp trong KulmanLab CAD
description: Lệnh LayerUnfreezeAll xóa cờ đóng băng trên mọi lớp trong bản vẽ trong một bước.
---

# LayerUnfreezeAll

Lệnh `LayerUnfreezeAll` xóa cờ đóng băng trên **mọi lớp** trong bản vẽ ngay lập tức. Không cần chọn hoặc xác nhận — nó chạy và kết thúc trong một bước.

## Sử dụng

Gõ `LayerUnfreezeAll` trong terminal hoặc nhấp nút **Unfreeze All** trên thanh công cụ (biểu tượng mặt trời). Tất cả lớp bị đóng băng trở nên hiển thị ngay lập tức.

## Khi nào dùng

Thường được dùng sau [LayerIsolate](./layer-isolate) để khôi phục tất cả lớp về trạng thái hiển thị bình thường.

## Chi tiết hành vi

- Áp dụng cho tất cả lớp bất kể trạng thái hiện tại của chúng.
- Không ảnh hưởng đến cờ khóa hoặc in — chỉ cờ đóng băng được thay đổi.
- Lệnh kết thúc ngay lập tức mà không có lời nhắc.
