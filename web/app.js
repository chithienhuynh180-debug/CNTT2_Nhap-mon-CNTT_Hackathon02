const danhSachBangGia = [
  { ma: "THU-CB", ten: "Thu am co ban", gia: 300000 },
  { ma: "THU-BAND", ten: "Thu nhac ban nhac", gia: 600000 },
  { ma: "MIX", ten: "Mix nhac", gia: 400000 },
  { ma: "MASTER", ten: "Master ban thu", gia: 500000 },
];

function hienThiGoiThu() {
  const bang = document.getElementById("bang-gia");
  for (const muc of danhSachBangGia) {
    const dong = bang.insertRow();
    dong.insertCell().textContent = muc.ma;
    dong.insertCell().textContent = muc.ten;
    dong.insertCell().textContent = muc.gia.toLocaleString("vi-VN");
  }
}

hienThiGoiThuAm();
