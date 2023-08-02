var date=new Date();
var year=date.getFullYear(date.setFullYear("2000"));
document.write("Given year="+year+"<br><br>")
if(year%4==0){
	document.write("this year is leap year"+"<br>")
}
else{
	document.write("this year is not leap year"+"<br>")
}