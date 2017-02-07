function CountBox() {
		dateNow = new Date();
		amount = ((28 - dateNow.getHours())*60*60 + (59 - dateNow.getMinutes())*60 + (60 - dateNow.getSeconds()))*1000;
		delete dateNow;
		if (amount < 0) {
			out = "<div class='time1'><span></span>0</div>" + "<div class='time2'><span></span>0</div>" + "<div class='time3'><span></span>0</div>";
			var list = document.getElementsByClassName("timer_time");
			for (var i = 0; i < list.length; i++) {
				list[i].innerHTML = out;
			}
			setTimeout("CountBox()", 10000)
		} else {
			days = 0;
			hours = 0;
			mins = 0;
			secs = 0;
			out = "";
			amount = Math.floor(amount / 1e3);
			days = Math.floor(amount / 86400);
			amount = amount % 86400;
			hours = Math.floor(amount / 3600);
			amount = amount % 3600;
			mins = Math.floor(amount / 60);
			amount = amount % 60;
			secs = Math.floor(amount);
			out = "<div class='time1'><span></span>" + hours + "</div>" + " <div class='dott'>:</div> " + "<div class='time2'><span></span>" + mins + "</div>"  + " <div class='dott'>:</div> " + "<div class='time3'><span></span>" + secs + "</div>";
			var list = document.getElementsByClassName("timer_time");
			for (var i = 0; i < list.length; i++) {
				list[i].innerHTML = out;
			}
			setTimeout("CountBox()", 1e3)
		}
	};
	window.onload = function () {
		CountBox();
	};