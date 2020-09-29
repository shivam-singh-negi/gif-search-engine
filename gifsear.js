
//on clicking the string in the input box will replace the whitespace present in the string with a + symbol.

function myfun() {
	var info=document.getElementById("search_bar").value;
	var url= findAndReplace(info," ","+");
	var link="https://api.giphy.com/v1/gifs/search?api_key=pIO7ppSZSFxi2TkEyYqeON47prDYoXKp&q="+url+"&limit=25&offset=0&rating=g&lang=en";


var calling=new XMLHttpRequest();
calling.open('GET',link);
calling.send();
calling.addEventListener("load",function(e){
var data=e.target.response;
displaythepic(data);
 
});






}



//helping functions



//function to add +symbol in url
function findAndReplace(string, target, replacement) {
 var i = 0, length = string.length;
 for (i; i < length; i++) {
   string = string.replace(target, replacement);
 }
 return string;
}

//function to display pic into the dom
function displaythepic(data)
{
	var resp=JSON.parse(data);
	var imageurl=resp.data;
	var x=document.querySelector(".displ");
	x.innerHTML="";

imageurl.forEach(function(imag){
	var src=imag.images.fixed_height.url;
	console.log(src);


var show=document.querySelector(".displ");

show.innerHTML+="<img src=\""+src+"\">";

});


}










