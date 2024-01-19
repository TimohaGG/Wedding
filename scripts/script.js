function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


let defInpTexts = {
  name_surname : "Ваше ім'я прізвище",
  people_amount : "В якому складі на вас чекати?"
};

function togleInputText(e){
 
  let inp = e.target;
  let text = defInpTexts[inp.name];
  console.log(text);
  if(e.type=="focus"){
    if(inp.value==text) inp.value = '';
  }
  else{
    if(inp.value=='') inp.value = text;
  }
  console.log(e);
}
             onblur="if(this.value=='') this.value = `Ваше ім''я прізвище`"