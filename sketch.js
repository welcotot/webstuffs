var cloudy=0;
var bruh=255;


//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
   
}

//The draw function happens over and over again
function draw() {
  background(bruh,140,86);
  stroke(142,137,109); 
  fill(247,108,cloudy,150);

  rect(100,100,100,150);
  fill(255, 216, 128);
  ellipse(mouseX,mouseY,150,150);
  strokeWeight(5);
  line(203,cloudy,bruh,150);

}

function mousePressed(){
  if (cloudy>=255) {
  cloudy=0;
  }  else {
    cloudy=cloudy+5;
  }

  if (bruh<=0){
    bruh=255;
  }else{
    bruh=bruh-5;

  }

  }


  