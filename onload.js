window.onload = function() {
   window.alert("NOITE OU DIA?");

    let dia = localStorage.getItem("dia");
    let noite = localStorage.getItem("noite");
    
	if(dia == 1) {
	dia();
        window.alert("DIA!");
	}

	if(noite == 1) {
	noite();
window.alert("NOITE");
	}
}
