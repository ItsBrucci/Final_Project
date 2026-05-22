/*Set the date displayed in the calendar */
var today = new Date("May 20, 2026");

/* Write calendar to the calendar element */
document.getElementById("calendar").innerHTML = createCalendar(today);

/*Function to create calendar table*/
function createCalendar(calDate) {
	var calHTML = "<table id='calTable'>";
	calHTML += calCaption(calDate);
	calHTML += weekRow();
	calHTML += calDays(calDate);
	calHTML += "</table>";
	return calHTML;
}

/*Function to write the calendar caption */
function calCaption(calDate) {
	var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var currentMonth = calDate.getMonth();
	var currentYear = calDate.getFullYear();
	
	return "<caption>" + monthName[currentMonth] + " " + currentYear + "</caption>";
}


/*Function to write table rows*/
function weekRow() {
	var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var rowHTML = "<tr>";
	
	for (var i = 0; i < dayName.length; i++) {
		rowHTML += "<th class='weekdays'>" + dayName[i] + "</th>";
	}
	rowHTML += "</tr>";
	
	return rowHTML;
}

/*Calculate days in month*/
function daysInMonth(calDate) {
	var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	var currentYear = calDate.getFullYear();
	var currentMonth = calDate.getMonth();
	
	if (currentYear % 4 === 0) {
		if ((currentYear % 100 != 0) || (currentYear % 400 === 0)) {
			dayCount[1] = 29;
		}
	}
	
	return dayCount[currentMonth];
}

/*Function to write table rows for each day of the month */
function calDays(calDate) {
	var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
	var weekDay = day.getDay();
	var htmlCode = "<tr>";
	
	for (var i = 0; i < weekDay; i++) {
		htmlCode += "<td></td>";
	}
	
	var totalDays = daysInMonth(calDate);
	
	var highlightDay =  calDate.getDate();
	
	
	for (var i = 1; i <= totalDays; i++) {
		day.setDate(i);
		weekDay = day.getDay();
		
		if (weekDay === 0)  htmlCode += "<tr>";
		
		/*Code to get the current day of the week*/
		var classSchedule = weeklyClasses[weekDay];
		
		if (i === highlightDay) {
			htmlCode += "<td class='calDates' id='calToday'>" + i + classSchedule + "</td>";
		} else {
			htmlCode += "<td class='calDates'>" + i + classSchedule + "</td>";
		}
		if (weekDay === 6) htmlCode += "</tr>";
	}
	
	if (weekDay < 6) {
		for (var i = weekDay; i < 6; i++){
			htmlCode += "<td></td>";
		}
		htmlCode += "</tr>";
	}
	
	return htmlCode;
}
