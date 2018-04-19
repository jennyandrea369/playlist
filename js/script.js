// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"Billy",
	"artist":"6IX9INE",
	"mp3-url":"https://www.youtube.com/embed/LJjsm6CVsG8",
	"songLength": "2:08"
	
}

var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3-url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image-url":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3-url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",

	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3-url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
	}

]

function paragraph(text) {return "<p>" + text + "</p>" }

// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  $('.songs').append(paragraph(mySong.title));
$('.songs').append(paragraph(mySong.artist));
$('.songs').append('mp3-url:<iframe width="560" height="315" src="'+ mySong["mp3-url"] + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');

for(var i =0; i< myPlayList.length; i++){
    var song = myPlayList[i];
    $('.songs').append(paragraph(song.title));
$('.songs').append(paragraph(song.artist));
$('.songs').append('mp3-url:<iframe width="560" height="315" src="'+ song["mp3-url"] + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
    var playlist = myPlayList.playlist;
     $("#colors").append("<h3>" + color + "</h3>");   
    console.log(color);
}
});

function displayList(){


  
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
