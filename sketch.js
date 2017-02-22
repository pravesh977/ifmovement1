function setup() {
  createCanvas(720,640)
}

function draw() {
  background(100)
  
  stroke(255)
  strokeWeight(2)
  noFill()
  
  if (mouseX > 350) {
    fill(210, 29, 100)
    background(200)
    ellipse (480, 120, 100, 100)
    rect(350, 100, 70, 70)
  }
  ellipse(280, 320, 50, 50)
  rect(320, 300, 50, 50)
}
//writing a comment on chris's js file
