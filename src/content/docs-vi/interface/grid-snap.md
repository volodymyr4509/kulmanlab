---
title: Lưới & Bắt Điểm — Căn Chỉnh Bản Vẽ theo Lưới Đều trong KulmanLab CAD
description: Các nút bật/tắt Lưới và Bắt Điểm trong KulmanLab CAD phủ lưới tham chiếu lên canvas và khóa chuyển động con trỏ vào các điểm lưới. Khoảng cách lưới tự động thích nghi theo mức phóng to hiện tại để luôn hiển thị các giá trị mô hình tròn.
group: interface
order: 1
---

# Lưới & Bắt Điểm

Hai nút bật/tắt trong thanh điều khiển cho phép bạn phủ lưới tham chiếu và khóa con trỏ vào các giao điểm của nó khi vẽ.

| Nút | Tác dụng |
|-----|---------|
| **Lưới** | Hiển thị lưới chấm hoặc đường trực quan trên canvas |
| **Bắt Điểm** | Khóa con trỏ vào điểm lưới gần nhất khi không có bắt điểm hình học nào gần hơn |

Hai nút bật/tắt này độc lập với nhau — bạn có thể hiển thị lưới mà không bắt điểm, bắt điểm mà không hiển thị lưới, hoặc dùng cả hai cùng nhau.

## Bật lưới và bắt điểm

Nhấp **Lưới** hoặc **Bắt Điểm** trong thanh công cụ thanh điều khiển. Trạng thái hoạt động được tô sáng. Cài đặt được duy trì qua các phiên.

Khi **Bắt Điểm** được bật, lưới tự động chuyển hiển thị từ đường sang **chấm** — các chấm đánh dấu chính xác các điểm mà con trỏ sẽ bắt vào.

## Khoảng cách lưới thích nghi

Khoảng cách lưới tự động điều chỉnh khi bạn phóng to để các đường lưới luôn ở khoảng cách thoải mái trên màn hình (~40 px). Bước luôn là số "đẹp" — bội số của 1, 2 hoặc 5 ở bất kỳ lũy thừa mười nào:

| Ví dụ phóng to / tỉ lệ mô hình | Bước lưới |
|--------------------------------|----------|
| Thu nhỏ (vùng lớn) | 100, 500, 1000 … |
| Phóng to vừa | 10, 20, 50 … |
| Phóng to (chi tiết mịn) | 1, 2, 5 … |
| Rất gần | 0.1, 0.2, 0.5 … |

## Ưu tiên bắt điểm

**Bắt điểm điểm cuối và giao điểm luôn được ưu tiên hơn lưới.** Con trỏ chỉ bắt vào điểm lưới khi nó không gần bất kỳ ứng viên bắt điểm hình học nào (điểm cuối, điểm giữa, tâm hoặc giao điểm).

## Chế độ bố cục

- **Không gian mô hình** — chấm hoặc đường lấp đầy toàn bộ vùng canvas hiển thị.
- **Không gian bố cục (giấy)** — chấm được cắt theo hình chữ nhật giấy.
- **Bên trong khung nhìn** — lưới theo hệ tọa độ mô hình theo tỉ lệ của khung nhìn.

## Quy trình làm việc điển hình

1. Bật **Lưới** và **Bắt Điểm** trước khi bắt đầu bản vẽ yêu cầu khoảng cách đều.
2. Phóng to đến mức nơi bước lưới khớp với gia số mong muốn của bạn.
3. Vẽ — con trỏ tự động bắt vào điểm lưới. Hình học hiện có vẫn bắt điểm bình thường khi bạn đến gần nó.
4. Tắt **Bắt Điểm** khi bạn cần chuyển động con trỏ tự do hoặc muốn chỉ bắt điểm vào hình học.
