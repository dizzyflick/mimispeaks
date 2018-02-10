var readyToRun = function() {
    console.log("I am so ready!");
}

$(document).ready(function() {
    $("#weatherSubmit").click(function(e) {
    e.preventDefault();
    var value = $("#weatherInput").val();
    console.log(value);
    var myurl= "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=6d9a7ea2c1a6d3a9432b7c95d592577f";
$.ajax({
    url : myurl,
    dataType : "json",
    success : function(json) {
        console.log(json);
var results = "";
		results += '<h2>Weather in ' + json.name + "</h2>";
		for (var i=0; i<json.weather.length; i++) {
		    results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
		}
		results += '<h2>' + json.main.temp + " &deg;F</h2>"
		results += "<p>"
                results += "Maximum: " + json.main.temp_max + " | Minimum: " + json.main.temp_min
                results += "</p>";
		results += "<p>"
		for (var i=0; i<json.weather.length; i++) {
		    results += json.weather[i].description
		    if (i !== json.weather.length - 1)
			results += ", "
		}
		results += "</p>";
		results += "<p>"
		results += json.main.humidity + "% humidity" + "<br>" + "Wind: " + json.wind.speed + " mph"
		results += "</p>";
		$("#weatherResults").html(results);
    }
    });	
});

 $("#searchSubmit").click(function(e) {
    e.preventDefault();
    var value = $("#searchInput").val();
    console.log(value);
    var myurl= "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&intitle=" + value;
$.ajax({
    url : myurl,
    dataType : "json",
    success : function(json) {
        console.log(json);
	var results = "";
	for (var i=0; i<json.items.length; i++) {
                    results += "<a href=\"" + json.items[i].link + "\">" + json.items[i].title + "</a>" + "<br>"
	}
	$("#searchResults").html(results);
    }
    });

});

});
