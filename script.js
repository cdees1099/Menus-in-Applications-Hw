var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");

var pages = [
  {
    name:"Home",
  },
  {
    name:"About",
  },
  {
    name:"Interact",
  }
]



for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}

function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.name);
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(pg){
  display.innerHTML="<h1>" + pg+" </h1>";
  if(pg=="About"){
     var h3 = document.createElement("h3");
     h3.innerHTML = "C T Da Guapman";
    display.appendChild(h3);
  }else if(pg=="Interact"){
    var button = document.createElement("button");
    var div = document.createElement("div");
    div.innerHTML = "0";
    div.classList.add('counter');
    display.appendChild(div);
    button.innerHTML = "insrease Counter";
    button.addEventListener('click',
   function(){
    var value = parseInt(document.getElementsByClassName('counter')[0].value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementsByClassName('counter')[0].value = value;
})
    display.appendChild(button);
  }else{
    display.innerHTML="<h1> Home </h1>";
  }
  
}