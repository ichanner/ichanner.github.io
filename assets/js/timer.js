  
var i = 0;
var speed = 150;
var txt = 'Ian Channerr';
var textBox;

window.onload = function () {

    
    textBox = document.getElementById("box");
    textBox.value = ""
    
    stageOne();   
}



function stageOne() {
    
    if (i < txt.length-1) {

      textBox.select();
      
      textBox.value += txt.charAt(i);
      
      i++;
      
      setTimeout(stageOne, speed);
    }
}