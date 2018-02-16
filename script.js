var readyToRun = function() {
    console.log("I am so ready!");
}

$(document).ready(function() {
 function send() {
  var text = $("messageInput").val();
  var myurl= "https://api.api.ai/v1/"
  console.log(text);
  $.ajax({
    type: "POST",
    url: myurl + "query",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      "Authorization": "Bearer " + "8d368cc390124b04942502744d279c1a",
    },
    data: JSON.stringify({query: text, lang: "en", sessionId: "runbarry"}),

    success: function(data) {
      prepareResponse(data);
    },
    error: function() {
      respond(messageInternalError);
    }
  });
}

function prepareResponse(val) {
  var debugJSON = JSON.stringify(val, undefined, 2),
      spokenResponse = val.result.speech;

  respond(spokenResponse);
  console.log(spokenResponse);
  debugRespond(debugJSON);
}   

$("#messageSubmit").click(function(e) {
    e.preventDefault();
    var value = $("#messageInput").val();
    console.log(value);
    var myurl= "https://api.api.ai/v1/";
$.ajax({
    type: "POST",
    url: myurl + "query",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      "Authorization": "Bearer " + "8d368cc390124b04942502744d279c1a",
    },
    data: JSON.stringify({query: value, lang: "en", sessionId: "runbarry"}),
    
    success : function(data) {
        console.log(data);
var results = "";
        results += data.result.speech;
	$("#messageResults").html(results);
	console.log(data.result.metadata.intentName);
	if (data.result.metadata.intentName === "NegEmotion") {
	  document.getElementById('emotion').src="/images/oh.gif";
	}
        else if (data.result.metadata.intentName === "play") {
          document.getElementById('emotion').src="/images/loud.gif";
        }
        else if (data.result.metadata.intentName === "mean") {
          document.getElementById('emotion').src="/images/ugh.gif";
        }
        else if (data.result.metadata.intentName === "Default Fallback Intent") {
          document.getElementById('emotion').src="/images/oh.gif";
        }
        else {
          document.getElementById('emotion').src="/images/mimi.gif";
        }
    document.getElementById("myForm").reset();
    }
    });	
});
});

