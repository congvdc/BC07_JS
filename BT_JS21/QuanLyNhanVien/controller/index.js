var arrNhanVien = [];

function renderGiaoDien() {
    var content = "";
    for (var i = 0; i < arrNhanVien.length; i++) {
        var nhanVien = arrNhanVien[i];
        var luongNhanVien = nhanVien.tinhLuong();
        var xepHang = nhanVien.xepHang();
        content += `
        <tr>
                <td>${nhanVien.taiKhoanNhanVien}</td>
                <td>${nhanVien.tenNhanVien}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngayLam}</td>
                <td>${nhanVien.chucVu}</td>									
                <td>${luongNhanVien.toFixed(0)}</td>
                <td>${xepHang}</td>
                <td></td>
        </tr>
        `;
    }
    document.getElementById("tableDanhSach").innerHTML = content;
}

function themnhanVien() {
    var taiKhoanNhanVien = document.getElementById("tknv").value;
    var tenNhanVien = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCoBan = document.getElementById("luongCB").value * 1;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value * 1;

    var nhanVien = new NhanVien(
        taiKhoanNhanVien,
        tenNhanVien,
        email,
        pass,
        ngayLam,
        luongCoBan,
        chucVu,
        gioLam
    );
    arrNhanVien.push(nhanVien);
    renderGiaoDien();
}
document.getElementById("btnThemNV").onclick = themnhanVien;