function clock()
{
var t;
var today=new Date();
var hr=today.getHours();
var min=today.getMinutes();
var sec=today.getSeconds();
document.f1.t1.value=hr+":"+min+":"+sec;
t=setTimeout("clock()",1000);
}

