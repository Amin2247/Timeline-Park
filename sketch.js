let index = 2;  

function setup() {
  createCanvas(700, 700);
  textSize(24)
  
  
}

function draw() {
  const input = window.prompt("enter a number between 1 and 4?");
  console.log("you entered", input);
  
  //if(input < 1 || input > 4 ){
    //Exit();
  //}
  background(255, 204, 0);
  
  switch(input){
  case '1':
    fill(255,0,0);
    text('I plan to code funtionality this monday at April 18th', 20, 190);
    square(30, 20, 55);   
    line(400, 200, 0, 200);
      break;
  case '2':
    fill(0,255,0);
    square(30, 20, 55);
    //textSize(18)
    line(400, 200, 0, 200);
    text('I plan to Making and Implementing Assets/Art at April 21th', 20,190);
    break;
  case '3':
    fill(0,0,255);
    square(30, 20, 55);
    //textSize(18)
    line(400, 200, 0, 200);
    text('plan to debug at Debugging and Testing Software at April 23', 20, 190);
    break;
    case '4':
    fill(255,0,255)
    square(30, 20, 55);
    line(400, 200, 0, 200);
    text('Maybe Dubugging at April 24th ', 20, 190);
    break;
  default:
    fill(255,255,255)
    line(400, 200, 0, 200);
    square(30, 20, 55);
    //textSize(18)
    text('Rest comes after April 24 ', 20, 190);
    exit();
    break;
    

  }
}
