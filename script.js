function setup() {
  
  createCanvas(5000, 5000);

//mickey mouse animation//

noStroke();

var faceSize = 50;

draw = function() {

var x = mouseX;
var y = mouseY;

background (255, 255, 255);
fill (0, 0, 0);
//ears
ellipse (x-faceSize/2, y-faceSize/2, faceSize/2, faceSize/2); 
ellipse (x+faceSize/2, y-faceSize/2, faceSize/2, faceSize/2); 
//face
ellipse (x, y, faceSize, faceSize);

fill (237, 215, 142);
//eye sockets
ellipse (x-faceSize/8, y-faceSize/5, faceSize/2.6667, faceSize/2); 
ellipse (x+faceSize/8, y-faceSize/5, faceSize/2.6667, faceSize/2); 
//cheek
ellipse (x, y+faceSize/5, faceSize, faceSize/1.8181);
//chin
ellipse (x, y+faceSize/2.5, faceSize/2, faceSize/4);

//eye whites (sclera)
fill (255, 255, 255);
ellipse (x-faceSize/13.3333, y-faceSize/5, faceSize/8, faceSize/4);
ellipse (x+faceSize/13.3333, y-faceSize/5, faceSize/8, faceSize/4);

fill (0,0,0);
//eye pupils
ellipse (x-faceSize/13.3333, y-faceSize/8, faceSize/20, faceSize/10);
ellipse (x+faceSize/13.3333, y-faceSize/8, faceSize/20, faceSize/10);
//nose
ellipse (x, y+faceSize/20, faceSize/3.3333, faceSize/5);
//mouth
arc (x, y+faceSize/4, faceSize/2, faceSize/2.6667, 0, 135);

//tongue
fill (250, 0, 0);
ellipse (x+faceSize/40, y+faceSize/2.5, faceSize/8, faceSize/20);
ellipse (x-faceSize/40, y+faceSize/2.5, faceSize/8, faceSize/20);

if (mouseIsPressed) {
    faceSize = 50;
}
else {faceSize++;
}
}
};