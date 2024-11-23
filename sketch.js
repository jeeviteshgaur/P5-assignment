function setup() {
  createCanvas(800, 800); // Adjust the canvas size if needed
  noLoop(); // Prevent continuous drawing
}

function draw() {
  background(0); // Black background
}

function mousePressed() {
  // Generate a square with a gradient at the mouse position
  let size = random(30, 60); // Random size for the square
  drawGradientSquare(mouseX, mouseY, size);
}

function drawGradientSquare(x, y, size) {
  noFill();
  for (let i = size; i > 0; i -= 5) {
    let c = color(random(255), random(255), random(255), 150); // Semi-transparent random colors
    stroke(c);
    square(x - i / 2, y - i / 2, i); // Draw squares shrinking inward
  }
}
