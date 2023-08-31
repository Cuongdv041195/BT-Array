//Mảng Array
var arrNumber = [0]
document.querySelector(".array").innerHTML = arrNumber;

function themPhanTu() {
    var number = +document.querySelector("#number").value;
    arrNumber.push(number);
    document.querySelector(".array").innerHTML = arrNumber;
}
function xoaPhanTu() {
    var number = +document.querySelector("#number").value;
    var index = -1;
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] === number) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        // xóa dữ liệu của mảng tại vị trí tìm thấy
        arrNumber.splice(index, 1);

        // cập nhật lại giao diện
        document.querySelector(".array").innerHTML = arrNumber;
    } else {
        alert("Không tìm thấy cần xóa trong mảng !");
    }
}
//BT1: Tổng các số dương trong mảng
function tinhTongSoDuong() {
    var tongS = 0;
    for (var i = 0; i <= arrNumber.length; i++)
        if (arrNumber[i] > 0)
            tongS += arrNumber[i];
    document.querySelector("#resultBT1").innerHTML = tongS;
}
//BT2: Đếm số dương trong mảng
function demSoDuong() {
    var soDuong = 0;
    for (var i = 0; i <= arrNumber.length; i++)
        if (arrNumber[i] > 0)
            soDuong++
    document.querySelector('#resultBT2').innerHTML = soDuong;
}
//BT3: Tìm số nhỏ nhất trong mảng
function timMin() {
    var min = arrNumber[0];
    for (var i = 0; i <= arrNumber.length; i++)
        if (arrNumber[i] < min)
            min = arrNumber[i];
    document.querySelector('#resultBT3').innerHTML = min;
}
//BT4: Tìm số dương nhỏ nhất trong mảng
// function tim_so_duong_nho_nhat(arr) {
//     var soDuongNhoNhat = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0 && arr[i] < soDuongNhoNhat) {
//             soDuongNhoNhat = arr[i];
//         }
//     }
//     return soDuongNhoNhat;
// }

function timSoDuongNhoNhat() {
    var soDuongNhoNhat = Infinity;
    for (var i = 0; i <= arrNumber.length; i++) {
        if (arrNumber[i] > 0 && arrNumber[i] < soDuongNhoNhat) {
            soDuongNhoNhat = arrNumber[i];
        }
    }
    if (soDuongNhoNhat == Infinity) {
        alert("Không có số dương trong mảng")
    }
    document.querySelector('#resultBT4').innerHTML = soDuongNhoNhat;
    console.log('soDuongNhoNhat: ', soDuongNhoNhat);
}
//BT5: Tìm số chẵn cuối cùng trong mảng
function timSoChanCuoiCung() {
    var soChanCuoiCung = undefined;
    for (var i = arrNumber.length - 1; i >= 0; i--) {
        if (arrNumber[i] % 2 === 0) {
            soChanCuoiCung = arrNumber[i];
            break;
        }
    }
    if (soChanCuoiCung == undefined) {
        alert('Không có số chẵn trong mảng')
        return -1;
    }
    document.querySelector('#resultBT5').innerHTML = soChanCuoiCung;
}

//BT6: Hoán Đổi Vị Trí
function swapValues(arr, number1, number2) {
    [arr[number1], arr[number2]] = [arr[number2], arr[number1]];
}
function hoanDoiViTri() {
    var number1 = document.querySelector("#number1").value;
    console.log('number1: ', number1);
    var number2 = document.querySelector("#number2").value;
    console.log('number2: ', number2);
    [arrNumber[number1], arrNumber[number2]] = [arrNumber[number2], arrNumber[number1]];
    document.querySelector("#resultBT6").innerHTML = arrNumber;
}

//BT7: Sắp xếp tăng dần
function sortArray(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}
function sapXeptangDan() {
    var newArray = sortArray(arrNumber);
    document.querySelector("#resultBT7").innerHTML = newArray;
}

//BT8: Số Nguyên Tố Đầu Tiên 
function findFirstPrime(arr) {
    for (var num of arr) {
      if (num > 1) { 
        var soNguyenTo = true;
        for (var i = 2; i <= Math.sqrt(num); i++) { 
          if (num % i === 0) {
            soNguyenTo = false;
            break;
          }
        }
        if (soNguyenTo) {
          return num;
        }
      }
    }
    return -1;  
  }
  
function timSoNguyenToDauTien(){
    var soNguyenTo = findFirstPrime(arrNumber);
    if (soNguyenTo === -1){
        alert ("Không có số nguyên tố trong mảng")
    }
    document.querySelector("#resultBT8").innerHTML = soNguyenTo;
}

//BT9: Đếm Số Nguyên
var arrNumber2 = [0]
document.querySelector(".array2").innerHTML = arrNumber2;

function themPhanTuMoi() {
    var number2 = +document.querySelector("#number9").value;
    arrNumber2.push(number2);
    document.querySelector(".array2").innerHTML = arrNumber2; 
}
function xoaPhanTuMoi() {
    var number2 = +document.querySelector("#number9").value;
    var index = -1;
    for (var i = 0; i < arrNumber2.length; i++) {
        if (arrNumber2[i] === number2) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        // xóa dữ liệu của mảng tại vị trí tìm thấy
        arrNumber2.splice(index, 1);

        // cập nhật lại giao diện
        document.querySelector(".array2").innerHTML = arrNumber2;
    } else {
        alert("Không tìm thấy cần xóa trong mảng !");
    }
}

function timSoNguyen (arr){
   var demSoNguyen = 0;
    for (var num of arr){
        if (Number.isInteger(num)){
            demSoNguyen++
        } 
    }
    return demSoNguyen;
}
function demSoNguyen(){
    var soNguyen = timSoNguyen(arrNumber2);
    document.querySelector("#resultBT9").innerHTML = soNguyen;
    
}

//BT10: So Sánh Âm Dương
function timSoAmDuong (arr){
    var demSoDuong = 0;
    var demSoAm = 0
    for (var num of arr){
        if (num < 0){
            demSoAm++
        }else if(num > 0){
            demSoDuong++
        }
    }
    return {
        negative: demSoAm, 
        positive: demSoDuong}
    
}
function soSanhAmDuong(){
    var amDuong = timSoAmDuong(arrNumber);
    var content = '';
    if (amDuong.positive > amDuong.negative){
        content = "Số Dương Lớn Hơn Số Âm"
    }else if (amDuong.positive < amDuong.negative){
        content = "Số Dương Bé Hơn Số Âm"
    }else{
        content = "Số Dương Bằng Số Âm"
    }

    document.querySelector("#resultBT10").innerHTML = `${content} <br/> Số Âm Là: ${amDuong.negative} <br/>
    Số Dương Là: ${amDuong.positive}`;
}

// function upperCase(string) {
//     myarr = string.split(" ");
//     newstr = myarr.join('');
//     newstr = string.charAt(0).toUpperCase() + string.slice(1);
//    return  newstr;
//   }

//   function upperCase(string) {
//     var firstLetter = string.charAt(0).toUpperCase() + string.slice(1);
//   return firstLetter;
//   }

  

//   function convertText(str) {
//     const result = str.trim().split(" ");
//     const newResult = result.map((item) => {
//        return item.charAt(0).toUpperCase() + item.slice(1);
//     });
//     const joinResult = newResult.join("");
//     console.debug("newResult:", joinResult);
//     return joinResult;
//  }
//  var abc = "hello world"
//   var content123 = convertText(abc);
//   console.log('content123: ', content123);
