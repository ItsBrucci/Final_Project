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