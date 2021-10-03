$(document).ready(function() {

	var $InvalidName = /^([a-zA-Z]{3,13})$/;
	//Regex for a text where i only want letters to be allowed and minimum 3 letters and maximum 13.

	$('.FN').on('keypress keydown keyup', function() {
		if (!$(this).val().match($InvalidName)) {
			// If the text contains less than 3 letters, more than 13 letters or non-normal letters the class that hides the error message will be removed.
			$('.errorFN').removeClass('hideFN');
			$('.errorFN').show();
		} else {
			// adds class that hides error message if it matches regular expression
			$('.errorFN').addClass('hideFN');
		}
	});

	$('.LN').on('keypress keydown keyup', function() {
		if (!$(this).val().match($InvalidName)) {
			$('.errorLN').removeClass('hideLN');
			$('.errorLN').show();
		} else {
			$('.errorLN').addClass('hideLN');
		}
	});

	//Hehj

	var $InvalidNumber = /^[0-9-+]+$/;
	//Regular expression where i only want numbers and + sign to be allowed.

	$('.Phone').on('keypress keydown keyup', function() {
		if (!$(this).val().match($InvalidNumber)) {
			$('.errorPN').removeClass('hidePN');
			$('.errorPN').show();
			// shows error message if text does not match regular expression
		} else {
			// adds class that hides error message if it matches regular expression
			$('.errorPN').addClass('hidePN');
		}
	});

	var $InvalidEmail = /^\S+@\S+\.\S+$/;
	//Regular expression that looks for a certain structure example: Text@Text.Text

	$('.Email').on('keypress keydown keyup', function() {
		if (!$(this).val().match($InvalidEmail)) {
			// shows error message if text does not match regular expression
			$('.errorEMAIL').removeClass('hideEMAIL');
			$('.errorEMAIL').show();
		} else {
			// adds class that hides error message if it matches regular expression
			$('.errorEMAIL').addClass('hideEMAIL');
		}
	});

	$('#btn').click(function(e) {



		if ($('#LastName').val().length === 0) {
			e.preventDefault();
			alert('Please fill in all your information!');
			// Checks if the fields are empty
		} else if ($('#FirstName').val().length === 0) {
			e.preventDefault();
			alert('Please fill in all your information!');
		} else if ($('#PhoneNumber').val().length === 0) {
			e.preventDefault();
			alert('Please fill in all your information!');
		} else if ($('#Email').val().length === 0) {
			e.preventDefault();
			alert('Please fill in all your information!');
		} else if ($('#TextBox').val().length === 0) {
			e.preventDefault();
			alert('Please fill in all your information!');
		} else if ($("span").hasClass("hideEMAIL") && $("span").hasClass("hideFN") && $("span").hasClass("hideLN") && $("span").hasClass("hidePN")) {
			alert("Thank you for your message!");
			//If all error messages has the class that hides the error message you are able to submit 
		} else {
			e.preventDefault();
			alert("Please fix all errors before submitting!");
			//If there are error message classes that are not hidden this prevents you from submiting until they are hidden again.
		}
	});


});




$(document).ready(function() {

	//Plug in function to make serializeObjects work
	(function($) {
		$.fn.serializeObject = function() {
			"use strict";

			var result = {};
			var extend = function(i, element) {
				var node = result[element.name];

				if ('undefined' !== typeof node && node !== null) {
					if ($.isArray(node)) {
						node.push(element.value);
					} else {
						result[element.name] = [node, element.value];
					}
				} else {
					result[element.name] = element.value;
				}
			};

			$.each(this.serializeArray(), extend);
			return result;
		};
	})(jQuery);

	//function runs when you press submit. It makes an array of the form data and saves it to localstorage
	$(window).submit(function() {

		//Using the plugin serializeObject to make an array with all the information we want to store from the form
		var fieldValues = $('#myform').serializeObject();

		//saving to localstorage
		localStorage.setItem('fieldValues', JSON.stringify(fieldValues));
	});
	//function runs when site loads. It gets the items from localstorage and loads the form with it
	window.onload = function() {
		var fieldValues = JSON.parse(localStorage.getItem('fieldValues'));
		//loadform sends id and stored localstorage data to loadformfunction
		loadForm('#myform', fieldValues);

		function loadForm(formID, storageData) {
			$.each(storageData, function(inputNames, inputValues) {
				$('[name=' + inputNames + ']', formID).val(inputValues);
			});
		}


	};


});


// From App.js to make it work with the menus and so

const navigationSlide = () => {

	const navigationLinks = document.querySelectorAll('.nav-links li');
	const hamburger = document.querySelector('.burger');
	const navigation = document.querySelector('.nav-links');

	hamburger.addEventListener("click", function() {
		// Toggle navigation
		navigation.classList.toggle('nav-active');

		// Animationlänkar
		navigationLinks.forEach((link, index) => {

			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `LinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});
		hamburger.classList.toggle('toggle');
	});
};

navigationSlide();



