// BT1 Tính tiền luong
function tinhTienLuong() {
    var soNgay = document.getElementById("soNgay").value * 1;
    if (soNgay >= 0) {
        var tienLuong = soNgay * 100000;
        var quyDoiNgoaiTe = tienLuong.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        });
        document.getElementById("hienThiTienLuong").innerHTML = "Tiền lương nhận được " + quyDoiNgoaiTe;
    } else if (soNgay < 0){
        document.getElementById("hienThiTienLuong").innerHTML = "Số ngày nhập vào không được bé hơn 0";
    } else {
        document.getElementById("hienThiTienLuong").innerHTML = "Vui lòng không nhập chữ, hãy nhập số";
    }
    
}
document.querySelector(".container .btn-primary").onclick = tinhTienLuong;


// BT2 Tính trung bình
function tinhTrungBinh() {
    var soThuc = document.getElementById("soThuc").value * 1;
    var num1 = parseInt(soThuc / 10000 % 10);
    var num2 = parseInt(soThuc / 1000 % 10);
    var num3 = parseInt(soThuc / 100 % 10);
    var num4 = parseInt(soThuc / 10 % 10);
    var num5 = parseInt(soThuc % 10);

    if (num1 == 0) {
        document.getElementById("hienThiTrungBinh").innerHTML = "Vui lòng nhập đủ 5 số thực";
    } else if (soThuc > 99999) {
        document.getElementById("hienThiTrungBinh").innerHTML = "Chỉ nhập tối đa 5 số thực";
    } else {
        var  tinhTrungBinh = (num1 + num2 + num3 + num4 + num5) / 5;
        console.log(tinhTrungBinh);
        document.getElementById("hienThiTrungBinh").innerHTML = "Giá trị trung bình: " + tinhTrungBinh;
    }
}
document.querySelector(".container .btn-secondary").onclick = tinhTrungBinh;


// BT3 Quy đổi USD => VND
function quyDoi() {
    var tienUSD = document.getElementById("tienUSD").value * 1;
    if (tienUSD > 0) {
        var tinhTienVND = tienUSD * 23500;
    } else if (tienUSD == 0 || tienUSD == -0) {
        document.getElementById("hienThiTienVND").innerHTML = "Vui lòng nhập số tiền muốn quy đổi";
    } else {
        document.getElementById("hienThiTienVND").innerHTML = "Số tiền không được bé hơn 0";
    }
    var quyDoiNgoaiTe = tinhTienVND.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
    });
    document.getElementById("hienThiTienVND").innerHTML = quyDoiNgoaiTe;
}
document.querySelector(".container .btn-success").onclick = quyDoi;


// BT4 Tính chu vi & diện tích HCN
function tinhHCN() {
    var chieuDai = document.getElementById("chieuDai").value * 1;
    console.log(chieuDai);
    var chieuRong = document.getElementById("chieuRong").value * 1;
    console.log(chieuRong);

    if (chieuDai < 0 || chieuRong < 0) {
        document.getElementById("tinhHCN").innerHTML = "Giá trị nhập không được bé hơn 0";
    } else if (chieuDai < chieuRong) {
        document.getElementById("tinhHCN").innerHTML = "Chiều dài không được bé hơn chiều rộng";
    } else if (chieuDai == 0 || chieuRong == 0) {
        document.getElementById("tinhHCN").innerHTML = "Hãy nhập giá trị khác 0";
    } else if (chieuDai == chieuRong) {
        document.getElementById("tinhHCN").innerHTML = "Đây là giá trị hình vuông";
    } else {
        var chuVi = chieuDai * chieuRong;
        var dienTich = (chieuDai + chieuRong) * 2;
        document.getElementById("tinhHCN").innerHTML = "<p>Chu vi của hình chữ nhật: " + chuVi + "</p>" + "<p>Diện tích của hình chữ nhật: " + dienTich + "</p>";
    }
}
document.querySelector(".container .btn-danger").onclick = tinhHCN;


// BT5 Tính tổng 2 ký số
function tinhTong() {
    var kySo = document.getElementById("kySo").value * 1;
    var num4 = parseInt(kySo / 10 % 10);
    var num5 = parseInt(kySo % 10);

    if (soThuc > 99) {  
        document.getElementById("tinhTong").innerHTML = "Chỉ nhập tối đa 2 ký số";
    } else {
        var  tinhTong = num4 + num5;
        console.log(tinhTong);
        document.getElementById("tinhTong").innerHTML = "Tổng ký số: " + tinhTong;
    }
}
document.querySelector(".container .btn-warning").onclick = tinhTong;
