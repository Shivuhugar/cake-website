// MOUSE EVENTS
// onmousedown and onmouseup
function mouseDown() {
    document.getElementById("myP").style.color = "red";
  }
  
  function mouseUp() {
    document.getElementById("myP").style.color = "blue";
  }

// onclick
  function onclick1(){
    alert("order successful");
  }

// onmouseover and onmouseout
function bigImg(x) {
    x.style.height = "200px";
  }
  
  function normalImg(x) {
    x.style.height = "124px";
  }

//   ondblclick
function ondblclick1() {
    document.getElementById("demo").style.fontSize="1.9rem";
  }

  // FORM EVENT
  // onfocus
  function xyz(x){
    x.style.background="pink";
  }

  //onblur
  function onblur1(z) {
    z.value = z.value.toUpperCase();
    z.style.background="";
}

//onreset
function reset(){
    alert('reset succesfull');
}
function submit(){
    alert('submit succesfull');
}

//onchange

function changeevent(){
	var x=document.getElementById('phone').value;
	document.getElementById('demo').innerHTML="you've changed the message to "+x;
}

//VALIDATION

function validateForm() {
	// Name Validation
	var regName = /\d+$/g;
	var name = document.getElementById('name').value;
	if (name == '' || regName.test(name)) {
		window.alert('Please enter your name properly.');
		name.focus();
		return false;
	}

	// Email Validation
	var regEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/g;
	var email = document.getElementById('email').value;
	if (email == '' || !regEmail.test(email)) {
		window.alert('Please enter a valid e-mail address.');
		email.focus();
		return false;
	}

	// Phone Validation
	var regPhone = /^\d{10}$/;
	var phone = document.getElementById('phone').value;
	if (phone == '' || !regPhone.test(phone)) {
		window.alert('Please enter valid phone number.');
		phone.focus();
		return false;
	}

	// Message Validation
	var regMessage = /^[A-Z]*$/;
	var message = document.getElementById('message').value;
	if ((message = '' || !regMessage.test(message))) {
		window.alert('Please enter the UPPERCASE letters.');
		phone.focus();
		return false;
	}
}

 
    
  
  