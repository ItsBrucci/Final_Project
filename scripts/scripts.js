function doClear() {
	document.formGroup.fName.value = "";
	document.formGroup.lName.value = "";
	document.formGroup.age.value = "";
	document.formGroup.phone.value = "";
	document.formGroup.addy1.value = "";
	document.formGroup.addy2.value = "";
	document.formGroup.city.value = "";
	document.formGroup.state.value = "";
	document.formGroup.zip.value = "";
	document.formGroup.email.value = "";
	document.formGroup.password.value = "";
	
	document.formGroup.membershipType[0].checked = false;
	document.formGroup.membershipType[1].checked = false;
	document.formGroup.membershipType[2].checked = false;
	return;
}

function doSubmit() {
	if (validateText() == false) {
		alert("You are missing a required entry. Please look over the form and try again.");
		return;
	}
	if (validateAge() == false) {
		alert("You are under the required age. Please come to the gym in person with a parent or guardian to create a membership");
		return;
	}
	if (validateState() == false) {
		alert("State code must be exactly 2 characters. Please correct and resubmit form.");
		return;
	}
	if (validateZip() == false) {
		alert("Zip code must be exactly 5 characters. Please correct and resubmit form.");
	}
	if (validateRadio() ==false){
		alert("You must chose a membership type.");
		return;
	}
	alert("You have succesfully registered. Welcome to The Iron Jungle!");
	return;
}

function validateText() {
	var fName = document.formGroup.fName.value;
	if (fName.length == 0) return false;
	var lName = document.formGroup.lName.value;
	if (lName.length == 0) return false;
	var age = document.formGroup.age.value;
	if (age.length == 0) return false;
	var phone = document.formGroup.phone.value;
	if (phone.length == 0) return false;
	var addy = document.formGroup.addy1.value;
	if (addy.length == 0) return false;
	var city = document.formGroup.city.value;
	if (city.length == 0) return false;
	var state = document.formGroup.state.value;
	if (state.length == 0) return false;
	var zip = document.formGroup.zip.value;
	if (zip.length == 0) return false;
	var email = document.formGroup.email.value;
	if (email.length == 0) return false;
	var pw = document.formGroup.password.value;
	if (pw.length == 0) return false;
	return true;
}

function validateAge() {
	var age = document.formGroup.age.value;
	if (age <= 16) return false;
	return true;
}

function validateState() {
	var state = document.formGroup.state.value;
	if (state.length != 2) return false;
	return true;
}

function validateZip() {
	var zip = document.formGroup.zip.value;
	if (zip.length != 5) return false;
	return true;
}

function validateRadio(){
	if (document.formGroup.membershipType[0].checked) return true;
	if (document.formGroup.membershipType[1].checked) return true;
	if (document.formGroup.membershipType[2].checked) return true;
	return false;
}

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

/*THIS IS WHERE I STARTED NEW CODE*/
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
	
let slideIndex = 1;

showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("slides");
	let dots = document.getElementsByClassName("dot");
	
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	if (slides.length > 0) {
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }
} 