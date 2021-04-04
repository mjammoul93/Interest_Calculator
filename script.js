function compute()
{
	
    p = document.getElementById("principal").value;
	if(p<=0){
		alert("Enter a positive numbers");
		document.getElementById("principal").focus();
		return;
	}
	var principal=document.getElementById("principal").value;
	var rate=document.getElementById("rate").value;
	var years=document.getElementById("years").value;
    var current=new Date().getFullYear();
	var futureYear=current*1.0+years*1.0;
	var interest=principal*years*rate/100;
	
	document.getElementById("result").innerHTML='If you deposit <mark>'+principal+'</mark><br>'
											+'at an interest rate of <mark>'+rate+' %.</mark><br>'
											+'You will receive and amount of <mark>'+interest +'</mark>,<br>'
											+'in the year <mark>'+futureYear+'</mark><br>'
	;
	
}

function ReadRanege(){
	var val=document.getElementById("rate").value;
    document.getElementById("rangeResult").innerHTML=val+'%';
}
        