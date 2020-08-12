(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.slider').slider();

  }); // end of document ready
})(jQuery); // end of jQuery name space


function handleOnSubmit(){
	console.log("Submit button Called ");
	var name = document.getElementById("contactName").value;
	var phone = document.getElementById("contactPhone").value;
	var subject = document.getElementById("contactSubject").value;
	var message = document.getElementById("contactMessage").value;
	var error = document.getElementById("error_block");
	var out = document.getElementById("output_block");
	
	if(name == ""){
		error.innerHTML = "Name can not be blank";
		return;
	}

	if(phone == ""){
		error.innerHTML = "Phone can not be blank";
		return;	
	}

	if(phone.length != 10){
		error.innerHTML = "Invalid Phone Number";
		return;	
	}

	if(subject == ""){
		error.innerHTML = "Subject can not be blank";
		
		return;
	}
	if(message == ""){
		error.innerHTML = "Message can not be blank";
		return;
	}

	// Successful case 
	error.innerHTML = "";

	console.log("Data entered name: " + name + " phone:" + phone + " subject:" + subject + " message:" + message );
	/// Post Request Start


	fetch("https://api.apispreadsheets.com/data/1058/", {
		method: "POST",
		body: JSON.stringify({"data": {"Name": name,"Phone": phone,"Subject":subject ,"Message":message}}),
	}).then(res =>{
		if (res.status === 201){
			// SUCCESS
		}
		else{
			// ERROR
		}
	})
    
	/// Post Request End

	out.innerHTML = "<h5>Hey "+ name + " Thanks For The Enquiry! </h5>"; 

}