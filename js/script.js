(function(){
	var canv = document.getElementById("canv");
	var context = canv.getContext("2d");
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(300,0);
	context.lineTo(86,400);
	context.lineTo(0,400);
	context.closePath();
	context.fillStyle="rgba(10,50,91,0.8)";
	context.fill();
}());
(function (){
	document.getElementById('inner').onmousemove = function(){
		this.style.display = 'none';
		document.getElementById('contacts').style.marginLeft = '-1500px';
	};
	document.getElementById('over').onmousemove = function(){
		document.getElementById('inner').style.display = 'block';
		document.getElementById('contacts').style.marginLeft = '0px';
	};
}());