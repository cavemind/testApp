var offset =0;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(0);
  
  for ( var y = 0; y <= width; y+=50){
    for (var x = 0; x <= width; x+=50){
    ellipse(mouseX,mouseY+offset,50);
  }
    
  }
  if ( mouseX > 400){ 
    offset = random(-80,80);
    fill('red');
} else if ( mouseX > 300){
  offset = random(-20,20);
  fill('blue');
 }else if ( mouseX > 150){
  offset = random(-10,10);
   fill('green');
}
  
}
