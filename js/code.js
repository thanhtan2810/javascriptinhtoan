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
// function tinh(A,B){
//     var A=parseInt(document.getElementById('txtA').value);
//     var B=parseInt(document.getElementById('txtB').value);
//     var c=document.getElementById("btn");
    
//      c=A+B;
//     alert("tổng của bạn là:"+c);
// }
function tinh(){
    var dateobj=new Date();
    alert(dateobj)
    //var a=document.getElementById("btn").innerHTML=dateobj;    
}
function doichu(){
    var b = document.getElementById("btn1").innerHTML="hi1";
    alert(b);
}
function batden(){
    var c=document.getElementById("btn2").src='pic_bulboff.gif';

}
function tatden(){
    var d=document.getElementById("btn3").src='pic_bulboff.gif';
}
// function tinhtong(){
//     var a=parseInt (document.getElementById("txtA").value);
//     var b=parseInt (document.getElementById("txtB").value);
//     var c=document.getElementById("btn4").innerHTML=a+b;
//     alert(c);
// }
//Hàm trong javascrip
function tinhtong(a,b){
    return a+b;
}
    c=document.getElementById('btn4').innerHTML=tinhtong(4,5)
//xử lí các đối tượng nhiều biến
// var xe={ kieu:"dep",mau:"do",lop:"345"};
// document.getElementById("demo").innerHTML= "xe nay"+xe.kieu;
// var xe={ keu:"xe",aa:"a",q:"asd"};
// document.getElementById("demo1").innerHTML=xe.aa;
var person={
    Ho:"Lê",Holot: "Thanh" ,Ten:"Tan"
}
function fullname(){
    return person.Ho+" "+person.Holot+" "+person.Ten;
}
document.getElementById("demo2").innerHTML=fullname()
function b(){
var a=document.getElementById("btn1").innerHTML=Date();
}function tinhs(){
var x="sdasdasdasdasdasd"
alert(document.getElementById("btn5").innerHTML=x.length);
}
function dodaichuoi(){
var x="facebook'youtube' messennger";
var  t=x.indexOf("youtube");//đo khoảng cách từ  chữ đến chữ y là 9 kí tự khoong  tính vị trí của chữ y
alert(document.getElementById("btn6").innerHTML=t);
}
function dodaichuoi1(){
    var v="facebook'youtube' messennger";
    var t=v.lastIndexOf("e");
    alert(document.getElementById("btn7").innerHTML=t);
}