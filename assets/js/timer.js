  
var i = 0;
var speed = 150;
var txt = 'Ian Channer';
var textBox;

window.onload = function () {

    
    textBox = document.getElementById("box");
    
    if(textBox.value.length==0) stageOne();   
}


function stageOne() {
    
    if (i < txt.length) {

      textBox.select();
      
      textBox.value += txt.charAt(i);
      
      i++;
      
      setTimeout(stageOne, speed);
    }
}