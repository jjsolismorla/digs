function howdy(firstName){
    alert(`Howdy ${firstName}`);
}

function hideAndSeek(){
    var x = document.getElementById("imageHide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}

function showTime(){
    var currentMinute= new Date().getMinutes();
    console.log(currentMinute);
    document.getElementById("clock").innerText=currentMinute;
}

var x;
function hideAndSeek(){
    if(x == 1){
        document.getElementById("icon").style.display="inline";
        return x=0;
    }
    else{
        document.getElementById("icon").style.display="none";
        return x=1;
    }
}

function conditional (){
    alert("Use Inspect to see the console and inspect the code.");
    var currentHour = new Date().getHours();
    if (currentHour < 10){
        alert ("Good morning!");    
    } else if (currentHour < 18) {
        alert ("Good day!");
    } else {
        alert("Good evening!");
    }
}

fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PLFOEPz6A3fXDJVMWQhU_9ZuKbAotU5HZe&key=AIzaSyBcVILO1LrniDz006MY9lFpyRBveOc8SVU")
.then((result)=>{
    return result.json()
}).then((data)=>{
    let videos = data.items
    let videoContainer = document.querySelector(".YoutubeVideos")
    i=0;
    for (video of videos){
        
        var tr =document.createElement('tr');
        tr.setAttribute('class', 'ytrows');
        tr.setAttribute('id', 'row_'+i);
        document.getElementById('playlistTableBody').appendChild(tr);
        //populate the cells in the row
        var td = document.createElement('td');
        td.setAttribute('id', 'td_name_'+i);
        td.textContent = video.snippet.title;
        document.getElementById('row_'+i).appendChild(td);
        var td2 = document.createElement('td');
        td2.setAttribute('id', 'td_description_'+i);
        td2.textContent = video.snippet.description;
        document.getElementById('row_'+i).appendChild(td2);
        var td3 = document.createElement('td');
        td3.setAttribute('id', 'td_link_'+i);
        
        var link = document.createElement('a');
        var symbolSpan = document.createElement("span");
        link.setAttribute('href', 'https://www.youtube.com/watch?v='+video.snippet.resourceId.videoId);
        link.setAttribute('id', 'td_linka_'+i);
        link.textContent = 'https://www.youtube.com/watch?v='+video.snippet.resourceId.videoId;
        symbolSpan.appendChild(link);
        td3.appendChild(symbolSpan);
        document.getElementById('row_'+i).appendChild(td3);
        i=i+1;
        
    }
})


function wikiAPI() {
var SearchTerm = document.getElementById('searchTerm').value;
var connect = new XMLHttpRequest();
var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch="+ SearchTerm;
connect.open('GET', url);
connect.onload = function() {
	var wikiObject = JSON.parse(this.response);
	console.log(wikiObject);
	console.log(wikiObject.query.pages);
    var pages = wikiObject.query.pages;
    for (var i in pages) {
		var newDiv = document.createElement("div");
		newDiv.setAttribute('class','row h4');
		document.getElementById("wiki").appendChild(newDiv);
		newDiv.innerText = pages[i].title;
    }
}
connect.send();
}


function mapLoad(){
    //Define the lat lon coordinate
    var latLng = [41.789649, -87.599702];
  
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
  
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
  
    var map = L.map('map', {
      center: latLng,
      zoom: 16,
      layers: [streets]
    });
  
    var baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };
  
    L.control.layers(baseLayers).addTo(map);
  
    L.marker(latLng).addTo(map)
    .bindPopup("<b>UChicago<br>Campus</b>").openPopup();
  
  
  
    //Click event
    var popup = L.popup();
  
    function onMapClick(e) {
      popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
    }
    map.on('click', onMapClick);
  }
    

  function showdata()
{
        var content="<b>Data Entered by User :</b><br>";
var input = document.getElementsByName('txtval[]');
           
            for (var x = 0; x < input.length; x++) 
            {
                var a = input[x];
                content = content + "myarray[" + x + "].value= "
                                   + a.value + "<br> ";   
              }
   
           
 document.getElementById('display').innerHTML = content+"</b>";
}

function parseArray(){
    myarray = content;
    b= myarray.sort();
    document.getElementById('display').innerHTML = b;
}