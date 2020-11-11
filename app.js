window.onload=function(){

  let btn = document.getElementById("btn");
  

  btn.addEventListener("click",function(element){
    element.preventDefault();
    
    loadDoc();

  });

  function loadDoc() {
    var text = document.getElementById("bID").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          let rest = this.responseText;
          document.getElementById("cID").innerHTML = rest;
      }
    };
    xhttp.open("GET", "superheroes.php"+"?query="+text, true);
    xhttp.send();
  }
}



