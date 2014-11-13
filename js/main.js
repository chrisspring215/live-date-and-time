function init() {
	var currentdate = Date();
	var dateLength = currentdate.length;

	var dateSplit = currentdate.split(" ");

	if (dateSplit[0] === 'Mon') {
		dateSplit[0] = "Monday";
	} else if (dateSplit[0] === 'Tue') {
		dateSplit[0] = "Tuesday";
	} else if (dateSplit[0] === 'Wed') {
		dateSplit[0] = "Wednesday";
	} else if (dateSplit[0] === 'Thu') {
		dateSplit[0] = "Thursday";
	} else if (dateSplit[0] === 'Fri') {
		dateSplit[0] = "Friday";
	} else if (dateSplit[0] === 'Sat') {
		dateSplit[0] = "Saturday";
	} else if (dateSplit[0] === 'Sun') {
		dateSplit[0] = "Sunday";
	} else {
		alert("errors");
	}
	
	var timeSplit = dateSplit[4].split(":");

	var qwe = timeSplit[0];

	var hour = Number(qwe);

	if (hour > 12) {
		newHour = hour - 12;
		document.getElementById("dateTime").innerHTML = "Today is:" + " " + dateSplit[0] + "<br>" + newHour + " PM" + " : " + timeSplit[1] + " : " + timeSplit[2];
	}	else {
		newHour = hour;
		document.getElementById("dateTime").innerHTML = "Today is:" + " " + dateSplit[0] + "<br>" + newHour + " AM" + " : " + timeSplit[1] + " : " + timeSplit[2];
	}

}