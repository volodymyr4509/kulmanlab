---
title: Lệnh Align — Dịch Chuyển, Xoay và Thu Phóng Thực Thể Bằng Cặp Điểm trong KulmanLab CAD
description: Lệnh Align định vị lại các thực thể đã chọn bằng một hoặc hai cặp điểm nguồn/đích — kết hợp dịch chuyển, xoay và thu phóng đồng nhất tùy chọn trong một thao tác duy nhất. Hoạt động như sự kết hợp của Move + Rotate + Scale.
keywords: [lệnh align CAD, căn chỉnh thực thể CAD, dịch chuyển xoay thu phóng, căn chỉnh theo cặp điểm, tương đương ALIGN của AutoCAD, kulmanlab]
group: edit
order: 6
---

# Align

Lệnh `align` định vị lại các thực thể đã chọn bằng một hoặc hai cặp điểm nguồn/đích. Với một cặp, lệnh hoạt động giống hệt [Move](../move/) (chỉ dịch chuyển). Với hai cặp, lệnh còn xoay vùng chọn sao cho hướng nguồn-đến-nguồn khớp với hướng đích-đến-đích, và có thể tùy chọn thu phóng để chiều dài đoạn nguồn khớp với chiều dài đoạn đích — dịch chuyển, xoay và thu phóng trong một thao tác duy nhất.

## Hai Cách Bắt Đầu

**Chọn trước, rồi căn chỉnh** — chọn thực thể trước, sau đó kích hoạt:

1. Chọn một hoặc nhiều thực thể trên canvas.
2. Gõ `align` trong terminal hoặc nhấp nút **Align** trên thanh công cụ.
3. **Nhấp điểm nguồn thứ nhất (S1)**, rồi **nhấp điểm đích thứ nhất (D1)**.
4. **Nhấp điểm nguồn thứ hai (S2)**, hoặc nhấn **Enter** để áp dụng ngay một căn chỉnh chỉ dịch chuyển.
5. **Nhấp điểm đích thứ hai (D2)**.
6. Trả lời câu hỏi thu phóng: nhấn **Y** để thu phóng, hoặc **N** / **Enter** để giữ nguyên kích thước gốc.

**Kích hoạt, rồi chọn** — bắt đầu lệnh khi không có gì được chọn:

1. Gõ `align` hoặc nhấp nút thanh công cụ.
2. **Chọn đối tượng** — nhấp để bật/tắt thực thể riêng lẻ, hoặc kéo để chọn theo vùng.
3. Nhấn **Enter** hoặc **Space** để xác nhận lựa chọn.
4. Tiếp tục với S1 → D1 → S2 → D2 → câu hỏi thu phóng như trên.

> Terminal chỉ cần đủ số chữ cái để không gây nhầm lẫn — gõ `al` rồi nhấn **Enter** sẽ kích hoạt Align trực tiếp, vì không có lệnh nào khác bắt đầu bằng hai chữ cái đó.

## Cấu Trúc Một Phép Căn Chỉnh

```
  Điểm nguồn (trên thực thể):          Điểm đích:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Kết quả: vùng chọn được dịch chuyển sao cho S1 đến D1, sau đó
  được xoay quanh D1 sao cho hướng S1→S2 khớp với hướng D1→D2 —
  và nếu bạn chọn thu phóng, được thay đổi kích thước sao cho
  |S1S2| trở thành |D1D2|.
```

Bản xem trước bóng theo con trỏ ở mỗi bước: xem trước di chuyển khi đặt D1, sau đó xem trước xoay (nét đứt) khi D2 đang được định vị.

## Căn Chỉnh Một Điểm (chỉ dịch chuyển)

Sau khi đặt D1, nhấn **Enter** thay vì nhấp điểm nguồn thứ hai. Vùng chọn được dịch chuyển theo vector S1→D1 — không xoay hay thu phóng — giống hệt một [Move](../move/) sử dụng S1 làm điểm cơ sở và D1 làm đích.

## Căn Chỉnh Hai Điểm (dịch chuyển + xoay + thu phóng tùy chọn)

Khi cả S2 và D2 đã được đặt:

- **Góc xoay** — chênh lệch giữa hướng đích (`D1 → D2`) và hướng nguồn (`S1 → S2`).
- **Câu hỏi thu phóng** — `scale objects to alignment points? [Yes/No] <N>` xuất hiện, với **No** là mặc định:
  - Nhấn **Y** để đồng thời thu phóng đồng nhất vùng chọn quanh D1 sao cho khoảng cách `S1–S2` trở thành khoảng cách `D1–D2`.
  - Nhấn **N** hoặc **Enter** để giữ nguyên kích thước gốc — chỉ áp dụng dịch chuyển và xoay.

Nhấn bất kỳ phím nào tại câu hỏi thu phóng sẽ áp dụng phép căn chỉnh ngay lập tức — không có bước xác nhận riêng sau khi chọn Yes hoặc No.

## Tham Khảo Phím Tắt

| Phím | Hành động |
|------|-----------|
| `Enter` / `Space` | Xác nhận lựa chọn và chuyển sang giai đoạn S1 |
| `Enter` (ở bước S2) | Bỏ qua xoay — áp dụng căn chỉnh chỉ dịch chuyển bằng S1 và D1 |
| `Y` | Áp dụng căn chỉnh kèm thu phóng |
| `N` / `Enter` (tại câu hỏi thu phóng) | Áp dụng căn chỉnh không thu phóng |
| `Escape` | Khi đang đặt điểm: bỏ các điểm đã đặt và quay lại giai đoạn chọn; khi không có gì được chọn: hủy lệnh |

## Lựa Chọn Trong Khi Thực Hiện Lệnh

Khi lệnh bắt đầu ở giai đoạn chọn:

| Phương pháp | Hành vi |
|--------------|---------|
| **Nhấp** | Bật/tắt thực thể dưới con trỏ trong/ngoài vùng chọn |
| **Kéo sang phải** (nghiêm ngặt) | Thêm các thực thể nằm hoàn toàn trong khung |
| **Kéo sang trái** (giao cắt) | Thêm các thực thể giao với đường viền khung |
| **Enter** / **Space** | Xác nhận lựa chọn và chuyển sang giai đoạn S1 |

## Sau Khi Căn Chỉnh

Các thực thể đã căn chỉnh vẫn được chọn tại vị trí mới, và lệnh tự động kết thúc — chạy lại **Align**, hoặc chuyển sang [Move](../move/), [Rotate](../rotate/), hoặc [Scale](../scale/) mà không cần chọn lại.

## Align so với Move

| | Align | Move |
|---|-------|------|
| Cặp điểm | 1 (chỉ dịch chuyển) hoặc 2 (dịch chuyển + xoay + thu phóng) | 1 (chỉ dịch chuyển) |
| Xoay | Có, với cặp điểm thứ hai | Không |
| Thu phóng | Tùy chọn, với cặp điểm thứ hai | Không |
| Tốt nhất cho | Khớp một hình dạng vào hình dạng khác bằng các điểm tham chiếu | Định vị lại đơn giản |

## Thực Thể Được Hỗ Trợ

Align hoạt động trên mọi loại thực thể mà Move, Rotate và Scale hỗ trợ — các thao tác `translate`, `rotate` và `scale` giống hệt mà các lệnh đó sử dụng được áp dụng tuần tự, vì vậy không loại nào bị loại trừ.
