var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
	if(xhr.readystate === 4 && xhr.status === 200){
  	readyxhr(xhr.responseText);
  }
}

xhr.open("data.json", "GET");
xhr.send();

function readyxhr(str){
	var data = JSON.parse(str);
  var button;
  var textId = "#";
  function mkFunc(iter){
  	return function(e){
    	textId += iter;
    	updateButtons(textId, data);
    }
  }
  for(var i = 0; i < 4; i++){
  	button = document.getElementById("q-b-" + i);
    button.addEventListener("click", mkFunc(i));
  }
}

function updateButtons(textId, data){
	var button;
	for(var i = 0; i < 4; i++){
		button = document.getElementById("q-b-" + i);
    if(!data[textId].buttons[i].res)
    	button.innerHTML = data[textId].buttons[i].txt;
    else
    	makeRes(textId);
  }
}

function makeRes(id){
	
}
