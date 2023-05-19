function ganGiaTriChoInput (
    taiKhoanNhanVien,
    tenNhanVien,
    email,
    pass,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
) {
    document.getElementById("tknv").value = taiKhoanNhanVien;
    document.getElementById("name").value = tenNhanVien;
    document.getElementById("email").value = email;
    document.getElementById("password").value = pass;
    document.getElementById("datepicker").value = ngayLam;
    document.getElementById("luongCB").value = luongCoBan;
    document.getElementById("chucvu").value = chucVu;
    document .getElementById ("gioLam").value = gioLam;
}