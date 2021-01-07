function setup() {
  canvas = createCanvas(450,450);
  background('grey');
  canvas.parent('processing');
  noLoop();
}


function draw() {
  // groene cirkel zonder rand
  
  noStroke();
  fill('white');
  ellipse(225,225,300);

  noStroke();
  fill('green');
  ellipse(225,225,400);

  
  // witte rechthoek met rode rand
  
  stroke('green');
  fill('white');
  strokeWeight(10);
  rect(125,125,200,200);  
}

