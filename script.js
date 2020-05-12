(function (){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (i=0;i<names.length;i++) {
		var n=names[i];
		if (n.charAt(0)==='j'||n.charAt(0)==='J') {
			byeSpeaker.speak(n);
		} 	
  		else {
    			helloSpeaker.speak(n);
  		}
	}
})();