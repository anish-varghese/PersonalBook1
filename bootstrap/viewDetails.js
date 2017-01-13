$(document).ready(function () {

document.getElementById("spouseLabel").style.display = 'none'; //Set spouseName label initialy none 

//Read the localStorage JSON object
var text = localStorage.getItem("dataJSON");
var obj = JSON.parse(text);

//Convet base64 image to its corresponding image
var src = obj.image;
var newImage = document.createElement('img');
newImage.src = src;
newImage.width = newImage.height = "100";

//Append the Data from the local storage by using its object
$("#personalInfo").append(
    $("<div/>", { class: 'row' }).append($("<label/>", { class: ' col-form-label' }).text(obj.firstName)),
    $("<div/>", { class: 'row' }).append($("<label/>", { class: ' col-form-label' }).text(obj.lastName)),
    $("<div/>", { class: 'row' }).append($("<label/>", { class: ' col-form-label' }).text(obj.email)),
    $("<div/>", { class: 'row' }).append($("<label/>", { class: ' col-form-label' }).text(obj.phoneNumber)),
    $("<div/>", { class: 'row' }).append($("<label/>", { class: ' col-form-label' }).text(obj.gender)),
    $("<div/>", { class: 'row' }).append($("<label/>", { class: ' col-form-label' }).text(obj.dob)),
    $("<div/>", { class: 'row' }).append($("<label/>", { class: ' col-form-label' }).text(obj.age))
		
		)

$("#familyInfo").append(
    $("<div/>", { class: 'row' }).append($("<label/>", { class: ' col-form-label' }).text(obj.fatherName)),
    $("<div/>", { class: 'row' }).append($("<label/>", { class: ' col-form-label' }).text(obj.motherName)),
    $("<div/>", { class: 'row' }).append($("<label/>", { class: ' col-form-label' }).text(obj.maritalStatus))
		
		)

    //Display spouse name if the person is Married
    if(obj.maritalStatus=='Married'){
      document.getElementById("spouseLabel").style.display = '';
      $("#familyInfo").append(
        $("<div/>", { class: 'row' }).append($("<label/>", { class: ' col-form-label' }).text(obj.spouseName))

       ) }

    $("#professionalInfo").append(
    $("<div/>", { class: 'row' }).append($("<label/>", { class: ' col-form-label' }).text(obj.companyName)),
    $("<div/>", { class: 'row' }).append($("<label/>", { class: ' col-form-label' }).text(obj.designation))
		
		)

    $("#image").append(
    $("<div/>", { class: 'row' }).append($(newImage))
   	
		)
		
});
