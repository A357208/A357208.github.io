// Set redirect button
document
	.getElementById("quiz-button")
  .addEventListener("click",
  function(e){
		window.location.href = "/quiz.html";
	}
);

var storage = window.localStorage;
try{
	storage.setItem("Xxx_MLGStorageTest_xxX", "Xxx_MLGStorageTest_xxX");
  storage.removeItem("Xxx_MLGStorageTest_xxX");
}catch(e){
	document
  	.getElementById("hist-status")
    .innerHTML = "Error loading.";
}

var data = storage.getItem("HistoryData");
if(!data){
	document
  	.getElementById("hist-status")
    .innerHTML = "No recents found. Take the quiz to make something show up here!";
}else{
	var injdiv = document.getElementById("");
  for(var i = 0; i < data.length; i++){
    data[i] = parseInt(data[i]);
    
  }
}
