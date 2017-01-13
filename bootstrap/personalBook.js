// All functionalities written in ready function

$(document).ready(function () {

//Set the datepicker and set it format dd-mm--yy	
	$("#dob").datepicker({
		dateFormat: 'dd-mm-yy', maxDate: '0'
	});

//disable the field for spouse name
	document.getElementById("spouseName").style.display = 'none';
	document.getElementById("spouseLabel").style.display = 'none';
	var maritalFlag = 0;
	$("#maritalStatus").change(function () {
		document.getElementById("spouseName").style.display = 'none';
		document.getElementById("spouseLabel").style.display = 'none';
		var maritalStatus = $("#maritalStatus").val();
		if (maritalStatus == 'Married') {
			document.getElementById("spouseName").style.display = '';
			document.getElementById("spouseLabel").style.display = '';
			maritalFlag = 1;
		}
	})

//Image check if jpg or png if not display an error message
	var image64 = '';
	$("#image").change(function () {

		var flag = 0;
		var filename = $("#image").val();
		var extension = filename.replace(/^.*\./, '');
		if (extension == filename) {
			extension = '';
		}
		else {
			extension = extension.toLowerCase();
		}
		switch (extension) {
			case 'jpg':
			case 'jpeg':
			case 'png': flag = 1; break;
			default:
				flag = 0;
		}

		if (flag == 0) {
			$("#validateImage").append($("<label/>", { class: 'validation-label' }).text("The image format should be .jpg or .png"))
		}
		else {
			var selectedFile = this.files[0];
			selectedFile.convertToBase64(function (base64) {
				image64 = base64;
			})
		}

	});


	// Click function load when button save pressed  //e.preventDefault();   //This method prevent the default behaviour of html

	$("#save").click(function (e) {
		
		// Clear the validation and message div
		$("#validateName").empty()
		$("#textMax50").empty()
		$("#validateImage").empty()
		$("#validateDob").empty()

		//Read the content from form
		var firstName = $("#fName").val();
		var lastName = $("#lName").val();
		var email = $("#email").val();
		var phoneNumber = $("#phoneNumber").val();
		var gender = $('input:radio[name=gender]:checked').val()
		var dob = $("#datepicker").val();

		var fatherName = $("#fatherName").val();
		var motherName = $("#motherName").val();
		var maritalStatus = $("#maritalStatus").val();
		var spouseName = $("#spouseName").val();

		var companyName = $("#companyName").val();
		var designation = $('#designation').val();

		if(firstName!=''&&lastName!=''&&email!=''&&phoneNumber!=''&&dob!=''&&fatherName!=''&&motherName!=''&&companyName!=''&&designation!=''){

			//Create JSON object and write it to localStorage
			var myObj = { "firstName": firstName, "lastName": lastName, "email": email, "phoneNumber": phoneNumber, "gender": gender, "dob": dob, "image": image64, "fatherName": fatherName, "motherName": motherName, "maritalStatus": maritalStatus, "spouseName": spouseName, "companyName": companyName, "designation": designation };
			var myJSON = JSON.stringify(myObj);
			localStorage.setItem("dataJSON", myJSON);

			window.location = "View Details.html";  //View details.html page is loaded;
		}
		else{
			alert("Fill All The Fields");
		}

	}
	)
});

//Image convertToBase64 function
File.prototype.convertToBase64 = function (callback) {
	var reader = new FileReader();
	reader.onload = function (e) {
		callback(e.target.result)
	};
	reader.onerror = function (e) {
		callback(null);
	};
	reader.readAsDataURL(this);
};

