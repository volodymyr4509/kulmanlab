---
title: LayerIsolate — Đóng Băng Tất Cả Lớp Trừ Lớp Đã Chọn trong KulmanLab CAD
description: Lệnh LayerIsolate đóng băng mọi lớp trừ những lớp được sử dụng bởi các đối tượng đã chọn, giúp bạn tập trung vào hình học cụ thể mà không xóa bất cứ thứ gì.
---

# LayerIsolate

Lệnh `LayerIsolate` đóng băng mọi lớp **trừ** những lớp thuộc về các đối tượng đã chọn. Dùng nó để tập trung nhanh vào hình học cụ thể mà không ẩn hoặc xóa bất cứ thứ gì vĩnh viễn — bỏ đóng băng bằng [LayerUnfreezeAll](../layer-unfreeze-all/) khi xong.

## Hai cách bắt đầu

**Chọn trước, sau đó cô lập** — chọn thực thể trước, rồi kích hoạt:

1. Chọn một hoặc nhiều thực thể trên canvas.
2. Gõ `LayerIsolate` trong terminal hoặc nhấp nút **Layer Isolate** trên thanh công cụ.
3. Các lớp của thực thể đã chọn vẫn hiển thị; tất cả lớp khác bị đóng băng ngay lập tức.

**Kích hoạt, sau đó chọn**:

1. Gõ `LayerIsolate` hoặc nhấp nút thanh công cụ.
2. **Chọn đối tượng** — nhấp từng thực thể hoặc kéo để chọn theo vùng.
3. Nhấn **Enter** hoặc **Space** để xác nhận — cô lập được áp dụng.

## Tham khảo phím tắt

| Phím | Hành động |
|------|-----------|
| `Enter` / `Space` | Xác nhận lựa chọn và áp dụng cô lập |
| `Escape` | Hủy và xóa lựa chọn |

## Chi tiết hành vi

- Tất cả lớp **không** có trong lựa chọn được đặt thành đóng băng.
- Các lớp **có** trong lựa chọn vẫn không đóng băng, ngay cả khi chúng đã bị đóng băng trước đó.
- Lựa chọn được xóa sau khi áp dụng cô lập.

## Hoàn tác cô lập

Chạy [LayerUnfreezeAll](../layer-unfreeze-all/) để khôi phục tất cả lớp về hiển thị trong một bước.
