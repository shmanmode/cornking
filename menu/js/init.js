(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
	layCards();

  }); // end of document ready
})(jQuery); // end of jQuery name space

var images_list = [
{
	src: "images/2.jpeg",
	title: "Corn Chaat"
},
{
	src: "images/6.jpeg",
	title: "Butter Corn Chaat"
},
{
	src: "images/7.jpeg",
	title: "Cheese Corn Chatni"	
},
{
	src: "images/8.jpeg",
	title: "Sweet Corn"
},
{
	src: "images/16.jpeg",
	title: "Steam Corn"
},
{
	src: "images/15.jpeg",
	title: "Roasted Corn"	
},
{
	src: "images/9.jpeg",
	title: "Paneer Steam Momos"
},
{
	src: "images/10.jpeg",
	title: "Veg Steam Momos"
},
{
	src: "images/11.jpeg",
	title: "Chicken Fried Momos"	
},
{
	src: "images/11.jpeg",
	title: "Paneer Fried Momos"
},{
	src: "images/13.jpeg",
	title: "Chicken Steam Momos"
},
{
	src: "images/14.jpeg",
	title: "Veg Fried Momos"
}
];


function getCardElem(imageElem, counter){
	var str = `<div class="col s12 m3">
				<div class="card" style="width: 380px">
<div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="` + imageElem.src + `" >
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">` + imageElem.title + `<i class="material-icons right">more_vert</i></span>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">` + imageElem.title + `<i class="material-icons right">close</i></span>
      <p>You are one step away to order this delicious dishes.<br>
      Order us on - </p>
      <p><a href="https://www.swiggy.com/restaurants/corn-king-pratap-nagar-nagpur-218957?searchQuery=Corn+King">swiggy</a></p>
      <p><a href="https://www.zomato.com/nagpur/corn-king-gayatri-nagar">zomato</a></p>
    </div>`;
	return str;
}

function layCards(){
	console.log("Starting the layout");
	var block = document.getElementById("cardsLayout");
	block.innerHTML = "";
	for(var i=0; i<images_list.length ; i++){
		block.innerHTML += getCardElem(images_list[i], i);
	}
}
