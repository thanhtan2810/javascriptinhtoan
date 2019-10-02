// (// var obj=document.getElementById("site-title")
// // var content=obj.innerHTML;
// // alert(content);
// // gọi Id site-title ra và hiển thị thông báo)
// (// var objs =document.getElementsByTagName("h3");
// // var content=objs[0].innerHTML;
// // alert(content);
// // truy cập vào phần tử thứ 0 của thẻ h3 và hiển thị thông báo ra)
// (var obj=document.querySelector("#h1.content");
//( var content=obj.innerHTML;
// alert(content);
//  truy cập tới id(h1) có class là content để hiển thị ra thông báo)
// (var obj= document.querySelector("#h1.content");
// obj.innerHTML="đây là nôi dung mới "
// truy cập tới id h1 ts class content và đổi thông tin của thẻ Html)
// var objs=document.getElementsByTagName("h1");
//  objs[0].setAttribute('class','newcss')
// // thêm css newcss cho 1 class) 
// var obj =document.getElementById("mybtn");
// obj.style.backgroundColor="red";
// // thêm thẳng css vào trong btn lun không 
function tinh(A,B){
    var A=parseInt(document.getElementById('txtA').value);
    var B=parseInt(document.getElementById('txtB').value);
    var c=document.getElementById("btn");
    
     c=A+B;
    alert("tổng của bạn là:"+c);
}