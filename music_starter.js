
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  let circlesize = map(bass, 0, 100, 30, 150);
  let drumheight = map(drum, 0, 100, circlesize/2, height);
  let triangleheight = map(drum, 0, 100, height/5*4, 0)
  let triangleleftpoint = map(bass, 0, 100, width/8, width/2)
  let trianglerightpoint = map(bass, 0, 100, width/8*7, width/2)

  let black = color (0);
  let navy = color (71, 138, 186);
  let LerpMap = map (vocal, 0, 100, 0, 1);
  let middleColor = lerpColor (black, navy, LerpMap);
  

  fill (middleColor);
  triangle (width/2, triangleheight, triangleleftpoint, height, trianglerightpoint, height)

  push()  
    colorMode(HSB, 100);
    strokeWeight(9);


    let drumMap =  map(drum, 0, 100, 5, 70);
    let lengthofline = 300;
    let LineStart = 100;
    let lineEnd = LineStart + lengthofline;
    stroke (drumMap, 80, 80)

    for (let i=1; i <= drumMap; i++){
      let lineStep = i*10;
      line (LineStart, lineStep, lineEnd, lineStep);
    }

     ellipse (width/2, drumheight, circlesize) //nosejumping
     
     let jigglecircle = map(drum, 0, 100, -100, 100)
     fill (middleColor)
     ellipse (width/2 + jigglecircle, height/7*6, 10, 10)
  pop()


  fill (255)
  ellipse (width/2, 150+ height/2, bass*3 + 200, vocal*2.5)

  fill (255)
  textAlign(CENTER);
  textSize (vocal);
  text (words, width/2, height/4);

  fill (255);
  ellipse (width/3, height/2,  bass + 50, other+ 50 )
  ellipse (width/3*2, height/2, bass+ 50, other+ 50 )

  fill(middleColor)
  ellipse (width/3, height/2,  bass/2 + 10, other/2+ 10 )
  ellipse (width/3*2, height/2, bass/2+ 10, other/2+ 10 )
  
  

  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);
}