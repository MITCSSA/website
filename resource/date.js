var d=new Date();
var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var monthname=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
var result = weekday[d.getDay()] + ", " + monthname[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

document.write(result.link("http://cssa.mit.edu/forum/index.php?act=calendar"));