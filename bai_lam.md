# BÀI LÀM – HACKATHON 02

- **Mã đề:** 08
- **Họ tên:** Huỳnh Chí Thiện
- **Lớp:** CNTT2
- **Link repository:** https://github.com/chithienhuynh180-debug/CNTT2_Nhap-mon-CNTT_Hackathon02.git
- **Hệ điều hành (Windows/macOS):** Windows

## 4.2. Thao tác máy tính cơ bản bằng CLI

### Các lệnh đã chạy

```shell
pwd
ls -force
mv .\quy_trinh_thu_am.txt .\docs\
mkdir backup
cp .\data\lich_thu_thang_8.xlsx .\backup\
rm *.tmp
cd .\logs\
ls
cd ..
```

### Kết quả liệt kê toàn bộ dự án (Windows: Get-ChildItem -Recurse -Force; macOS: ls -aR)

```text
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/11/2026   1:36 PM                data
d-r---        11/11/2026   1:34 PM                docs
d-r---        11/11/2026   1:35 PM                evidence
d-----        11/11/2026   1:36 PM                logs
d-r---         11/3/2026   7:08 AM                web
-a----         11/3/2026   7:08 AM             74 .env
-a----         11/3/2026   7:08 AM           2409 bai_lam.md
-a----         11/3/2026   7:08 AM            157 quy_trinh_thu_am.txt
-a----         11/3/2026   7:08 AM             22 temp_808.tmp
```

## 4.3. Lọc log truy cập website

### a) Lệnh lọc các dòng status=500

```shell
select-string "status=500" .\logs\studio.log > .\logs\loi_50
```

### 2 dòng đầu tiên trong logs/loi_500.txt

```text
logs\studio.log:8:2026-08-28 08:25:34 POST /api/dat-lich status=500
logs\studio.log:11:2026-08-28 08:34:07 POST /api/thanh-toan status=500
```

### b) Lệnh đếm số dòng status=404 và kết quả

```shell
(cat .\logs\studio.log | select-string "status=404").count

```

```text
4

```

## 4.4. Chạy script tong_hop (.ps1 hoặc .sh)

### Lệnh chạy (Windows: nếu dùng Phụ lục 2 thì ghi cả 2 lệnh)

```shell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\tong_hop.ps1
```

### Nội dung file logs/tong_hop.txt

```text
# Script: tong_hop.ps1
# Tac gia: Huynh Chi Thien
# Ngay tao: 11/11/2026
Write-Host "Dang tao bao cao..."
"=== BAO CAO SU CO WEBSITE ===" > logs/tong_hop.txt
Get-Content logs/studio.log | Select-String "status=404" >> logs/tong_hop.txt
Get-Content logs/studio.log | Select-String "status=500" | Measure-Object >> logs/tong_hop.txt
Write-Host "Hoan thanh!"
```

## 4.5. README.md và bảo vệ thông tin bí mật

> README.md, .gitignore và .env.example được chấm trực tiếp trên file ở gốc dự án. Đánh dấu `[x]` vào các mục đã làm để tự kiểm tra.

- [x] README.md: Heading 1, mô tả có **in đậm** và *in nghiêng*, bảng, code block, task list, blockquote
- [x] .gitignore có dòng `.env` (tên file đúng, không có đuôi .txt)
- [x] .env.example có đủ tên biến, giá trị để trống (tên file đúng, không có đuôi .txt)

## 4.6. Kiểm tra trang web bằng DevTools (F12) và báo cáo lỗi

### Bảng lỗi

| STT | Tab DevTools phát hiện lỗi | Tên file hoặc thông báo lỗi | Cách khắc phục |
| --- | --- | --- | --- |
| 1 | Console | Failed to load resource: net::ERR_FILE_NOT_FOUND | mở web/index.html bằng VS code, tại dòng 10 src="images/logo-sound.png" đổi thành src="images/logo-soundlab.png" lưu lại và sau đó F5 reload lại trang |
| 2 | Console | app.js:18 Uncaught ReferenceError: hienThiGoiThuAm is not defined | vào app.js trên VS code sửa dòng số 18 thành hienThiGoiThu(); |

> Ảnh chụp màn hình lưu trong thư mục `evidence/` (network.png, console.png).

### Báo cáo lỗi gửi trưởng nhóm

- **Context:** tôi là thực tập viên được giao nhiệm vụ website phòng âm soundlab, tôi truy cập vào web qua thư mục web/index.html 
- **Expected:** một trang web có logo đầy đủ
- **Actual:**bị lỗi và không có logo
- **Log:**đây là lỗi:GET file:///C:/Users/Admin/Desktop/starter-kit/phong_thu_am_website/web/images/logo-sound.png net::ERR_FILE_NOT_FOUND 

### Câu tìm kiếm Google

```text
site:stackoverflow "GET file:///C:/Users/Admin/Desktop/starter-kit/phong_thu_am_website/web/images/logo-sound.png net::ERR_FILE_NOT_FOUND"
```

## 4.7. Excel

> Phần Excel được chấm trực tiếp trên file `data/lich_thu_thang_8.xlsx`, không cần ghi vào đây.
