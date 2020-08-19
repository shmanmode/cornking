(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.slider').slider();
    $('.modal').modal();
  

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

function handleOnGetOffer(){
	console.log(" handleOnGetOffer called on " );
	var name = document.getElementById("icon_prefix").value;
	var phone = document.getElementById("icon_telephone").value;
	var error = document.getElementById("popup_error_block");
	var out = document.getElementById("popup_block");
	
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

	// Successful case 
	error.innerHTML = "";

	/// Post Request Start
fetch("https://api.apispreadsheets.com/data/1109/", {
	method: "POST",
	body: JSON.stringify({"data": {"Name":name,"Phone":phone}}),
}).then(res =>{
	if (res.status === 201){
		// SUCCESS
	}
	else{
		// ERROR
	}
})
   
	/// Post Request End

	out.innerHTML = getModalElem();

}

function getModalElem(){
	var str = `
		   <div class="container">
            <div class="section">
                <!--   Icon Section   -->
                <div class="col s12">
                    <div class="row center">
                        <h3><i class="mdi-content-send brown-text"></i></h3>
                        <h4 style="margin-bottom: 40px;"></h4>
                        <p></p>
                        <div>
                            <a id="rcorners1" style="margin-right: 40px;" href="https://www.swiggy.com/restaurants/corn-king-pratap-nagar-nagpur-218957?searchQuery=Corn+King">
                                <img id="rcorners2" border="0" alt="swiggy" src="swiggy.png" width="120" height="100" />
                            </a>

                            <a id="rcorners1" href="https://www.zomato.com/nagpur/corn-king-gayatri-nagar">
                                <img id="rcorners2" border="0" alt="zomato" src="zomato.png" width="120" height="100" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  return str;
}