var arr= [];

function themSo() {
    // lấy dữ liệu
    var soN = document.getElementById("soN").value * 1;
    // thêm số vào mảng
    arr.push(soN);
    document.getElementById("hienThiMang").innerHTML = arr;
}

function tinhTongSoDuong() {
    var tongSoDuong = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            tongSoDuong += arr[i];
        }
    }
    document.getElementById("tongSoDuong").innerHTML = tongSoDuong;
}
document.getElementById("tinhTongSoDuong").onclick = tinhTongSoDuong;

function demSoDuong() {
    var soSoDuong = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            soSoDuong++;
        }
    }
    document.getElementById("soDuong").innerHTML = soSoDuong;
}
document.getElementById("demSoDuong").onclick = demSoDuong;

function timSoNhoNhat() {
    var giaTriNhoNhat = Math.min.apply(Math, arr);
    document.getElementById("soNhoNhat").innerHTML = giaTriNhoNhat;
}
document.getElementById("timSoNhoNhat").onclick = timSoNhoNhat;

function timSoDuongNhoNhat() {
    arrMin = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0 && arr[i] < arrMin) {
            arrMin = arr[i];
        }
    }
    document.getElementById("soDuongNhoNhat").innerHTML = arrMin;
}
document.getElementById("timSoDuongNhoNhat").onclick = timSoDuongNhoNhat;

function timSoChanCuoi() {
    var soChanCuoi = -1;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0 && arr[i] > 0) {
            soChanCuoi = arr[i];
        }
    }
    document.getElementById("soChanCuoi").innerHTML = soChanCuoi;
}
document.getElementById("timSoChanCuoi").onclick = timSoChanCuoi;

function doiCho() {
    var viTri1 = document.getElementById("viTri1").value * 1;
    var viTri2 = document.getElementById("viTri2").value * 1;

    doiChoViTri(arr, viTri1, viTri2);
    document.getElementById("doiViTri").innerHTML = arr;
}
document.getElementById("doiChoViTri").onclick = doiCho;
function doiChoViTri(arr, viTri1, viTri2) {
    if (viTri1 < 0 || viTri1 >= arr.length || viTri2 < 0 || viTri2 >= arr.length) {
    return;
  }
  var temp = arr[viTri1];
  arr[viTri1] = arr[viTri2];
  arr[viTri2] = temp;
}

function sapXepTangDan() {
    arr.sort(function(a, b) {
        return a - b;
    })
    document.getElementById("hienThiMang").innerHTML = arr;
}
document.getElementById("sapXepTangDan").onclick = sapXepTangDan;

function kiemTraSoNguyenTo(n) {
    if(n < 2) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(n); i++) {
        if(n % i == 0) {
            return false;
        }
    }
    return true;
}
function timSoNguyenToDauTien() {
    var ketQua = -1;
    for (var i = 0; i <= arr.length; i++) {
        if(kiemTraSoNguyenTo(arr[i])) {
            ketQua = arr[i];
            break;
        }
    }
    if(ketQua > 1) {
        document.getElementById("soNguyenToDauTien").innerHTML = ketQua;
    } else {
        document.getElementById("soNguyenToDauTien").innerHTML = -1;
    }
}

function demSoNguyen() {
    let dem = 0;
    for (var i = 0; i <= arr.length; i++) {
        if(Number.isInteger(arr[i])) {
            dem++;
        }
    }
    document.getElementById("demSoNguyen").innerHTML = dem;
}

function soSanhSo() {
    let demSoAm = 0;
    let demSoDuong = 0;
    for (var i = 0; i <= arr.length; i++) {
        if(arr[i] < 0) {
            demSoAm++;
        } else  if (arr[i] >= 0) {
            demSoDuong++;
        }
    }
    
    if(demSoAm < demSoDuong) {
        document.getElementById("soSanhSo").innerHTML = "<div>Có tổng cộng: "+ demSoDuong +" số dương</div>" + "<div>Có tổng cộng: "+ demSoAm +" số âm</div>" + "<div>Tổng số âm < Tổng số dương</div>";
    } else if (demSoAm > demSoDuong) {
        document.getElementById("soSanhSo").innerHTML = "<div>Có tổng cộng: "+ demSoDuong +" số dương</div>" + "<div>Có tổng cộng: "+ demSoAm +" số âm</div>" + "<div>Tổng số âm > Tổng số dương</div>";
    } else {
        document.getElementById("soSanhSo").innerHTML = "<div>Có tổng cộng: "+ demSoDuong +" số dương</div>" + "<div>Có tổng cộng: "+ demSoAm +" số âm</div>" + "<div>Tổng số âm = Tổng số dương</div>";
    }
}
document.getElementById("soSanhSo").onclick = soSanhSo;