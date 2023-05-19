var arrNhanVien = [];

renderGiaoDien();

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
                <td>
                    <button class="btn btn-danger me-3" onclick="xoaNhanVien('${nhanVien.taiKhoanNhanVien}')">
                    <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="btn btn-warning" onclick="editNhanVien('${nhanVien.taiKhoanNhanVien}')" 
                    id="btnEdit"
                    data-toggle="modal"
                    data-target="#myModal">
                    <i class="fa-solid fa-pen"></i>
                    </button>
                </td>
        </tr>
        `;
    }
    document.getElementById("tableDanhSach").innerHTML = content;
}

function themnhanVien() {
    var nhanVien = layGiaTriInput();

    arrNhanVien.push(nhanVien);
    renderGiaoDien();

    ganGiaTriChoInput("", "", "", "", "", "", "", "");
    document.getElementById("btnCapNhat").style.display = "none";
}
document.getElementById("btnThemNV").onclick = themnhanVien;


function xoaNhanVien(taiKhoanNhanVien) {
    var index = timViTriNhanVien(taiKhoanNhanVien);
    if (index != -1) {
        arrNhanVien.splice(index, 1);
        renderGiaoDien();
    }
}

function editNhanVien(taiKhoanNhanVien) {
    var index = timViTriNhanVien(taiKhoanNhanVien);
    // document.getElementById("btnThemNV").style.display = "none";
    // document.getElementById("btnCapNhat").style.display = "block";
    var nhanVien = arrNhanVien[index];
    console.log(nhanVien);
    ganGiaTriChoInput(
        nhanVien.taiKhoanNhanVien, 
        nhanVien.tenNhanVien, 
        nhanVien.email, 
        nhanVien.pass, 
        nhanVien.ngayLam, 
        nhanVien.luongCoBan, 
        nhanVien.chucVu, 
        nhanVien.gioLam
    );
    // document.getElementById("btnThemNV").style.display = "block";
    // document.getElementById("btnCapNhat").style.display = "none";
    document.getElementById("tknv").readOnly = true;
}

function capNhatThongTinNhanVien() {
    var nhanVienDaChinhSua = layGiaTriInput();
    console.log(nhanVienDaChinhSua);
    var index = timViTriNhanVien(nhanVienDaChinhSua.taiKhoanNhanVien);
    console.log(index);
    arrNhanVien[index] = nhanVienDaChinhSua;
    renderGiaoDien();
}
document.getElementById("btnCapNhat").onclick = capNhatThongTinNhanVien;