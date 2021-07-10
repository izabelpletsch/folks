var footer = document.getElementsByClassName("post-footer");

var menu = document.getElementsByClassName("menuItem");

var header = document.getElementsByClassName("title");

function dia() {
   window.alert("O DIA FOI DISPARADO!");
    document.body.className = "Dia";
    localStorage.setItem("dia", 1);
    localStorage.setItem("noite", 0);

    header[0].style.color = "#2e2f3b";

    for ( var i=0; i<footer.length; i++ ) {
        footer[i].style.backgroundColor = "#dfbc68";
    }

    for ( var j=0; j<menu.length; j++ ) {
        menu[i].style.backgroundColor = "#dfbc68";
    }

document.getElementById('imginicio').src = "https://64.media.tumblr.com/243ade404def3cf79e19c4581765848c/c9af11dd4ebcd327-2a/s1280x1920/4b1f4f228dfc28707259601c4b84c6992467afc5.jpg";
}

function noite() {
  document.body.className = "";
    localStorage.setItem("dia", 0);
localStorage.setItem("noite", 1);

header[0].style.color = "#fff";

    for ( var i=0; i<footer.length; i++ ) {
        footer[i].style.backgroundColor = "#212227";
    }

    for ( var j=0; j<menu.length; j++ ) {
        menu[i].style.backgroundColor = "#212227";
    }



document.getElementById('imginicio').src = "https://64.media.tumblr.com/57be647bfb12508a1ba740137cec533f/cc36c1466db06ca2-34/s400x600/9a91a3a06d754ef86c37fd0e68d87f13481bab5e.jpg";
}