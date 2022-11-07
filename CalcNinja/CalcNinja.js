function setup() {
	createCanvas(800, 450);
	background(255);
	frameRate(60);
	textSize(18);
	textLeading(33);
	textFont(font);
	ellipseMode(CENTER);
	imageMode(CORNER);
	noStroke();
}

function preload() {
	textBox = loadImage('textBox.png');
	font = loadFont('fff-forward.regular.ttf');
	waitArrow = loadImage('waitArrow.gif');
	blank = loadImage('blank.png');
	boy = loadImage('boyTalking.gif');
	girl = loadImage('girlTalking.gif');
	classroom = loadImage('classBackground.png');
	heart = loadImage('heart.png');
	topN = loadImage('topN.png');
	topNE = loadImage('topNE.png');
	topE = loadImage('topE.png');
	topSE = loadImage('topSE.png');
	topS = loadImage('topS.png');
	topSW = loadImage('topSW.png');
	topW = loadImage('topW.png');
	topNW = loadImage('topNW.png');
	charImage = loadImage('topN.png');
	teacher = loadImage('teacherTalking.gif');
	rulerH = loadImage('ruler.png');
	rulerV = loadImage('ruler2.png');
	miniGame = loadImage('minigameBackground.png');
	gameOver = loadImage('gameoverScreen.png');
	limitQ1 = loadImage('limitsQ1.png');
	limitQ2 = loadImage('limitsQ2.png');
	limitQ3 = loadImage('limitsQ3.png');
	limitTest = loadImage('limitsTest99.png');
	powerQ1 = loadImage('powerRuleQ1.png');
	powerQ1C = loadImage('powerRuleQ1C.png');
	powerQ1W1 = loadImage('powerRuleQ1W1.png');
	powerQ1W2 = loadImage('powerRuleQ1W2.png');
	powerQ1W3 = loadImage('powerRuleQ1W3.png');
	powerQ2 = loadImage('powerRuleQ2.png');
	powerQ2C = loadImage('powerRuleQ2C.png');
	powerQ2W1 = loadImage('powerRuleQ2W1.png');
	powerQ2W2 = loadImage('powerRuleQ2W2.png');
	powerQ2W3 = loadImage('powerRuleQ2W3.png');
	powerQ3 = loadImage('powerRuleQ3.png');
	powerQ3C = loadImage('powerRuleQ3C.png');
	powerQ3W1 = loadImage('powerRuleQ3W1.png');
	powerQ3W2 = loadImage('powerRuleQ3W2.png');
	powerQ3W3 = loadImage('powerRuleQ3W3.png');
	powerTest = loadImage('powerRule93.png');
	pdQ1 = loadImage('pAndDRuleQ1.png');
	pdQ1C = loadImage('pAndDRuleQ1C.png');
	pdQ1W1 = loadImage('pAndDRuleQ1W1.png');
	pdQ1W2 = loadImage('pAndDRuleQ1W2.png');
	pdQ1W3 = loadImage('pAndDRuleQ1W3.png');
	pdQ2 = loadImage('pAndDRuleQ2.png');
	pdQ2C = loadImage('pAndDRuleQ2C.png');
	pdQ2W1 = loadImage('pAndDRuleQ2W1.png');
	pdQ2W2 = loadImage('pAndDRuleQ2W2.png');
	pdQ2W3 = loadImage('pAndDRuleQ2W3.png');
	pdQ3 = loadImage('pAndDRuleQ3.png');
	pdQ3C = loadImage('pAndDRuleQ3C.png');
	pdQ3W1 = loadImage('pAndDRuleQ3W1.png');
	pdQ3W2 = loadImage('pAndDRuleQ3W2.png');
	pdQ3W3 = loadImage('pAndDRuleQ3W3.png');
	pdTest = loadImage('pAndDRuleTest.png');
	usubQ1 = loadImage('usubQ1.png');
	usubQ1C2 = loadImage('usubQ1C2.png');
	usubQ1W1 = loadImage('usubQ1W1.png');
	usubQ1W2 = loadImage('usubQ1W2.png');
	usubQ1W3 = loadImage('usubQ1W3.png');
	usubQ2 = loadImage('usubQ2.png');
	usubQ2C = loadImage('usubQ2C.png');
	usubQ2W1 = loadImage('usubQ2W1.png');
	usubQ2W2 = loadImage('usubQ2W2.png');
	usubQ2W3 = loadImage('usubQ2W3.png');
	usubQ3 = loadImage('usubQ3.png');
	usubQ3C = loadImage('usubQ3C.png');
	usubQ3W1 = loadImage('usubQ3W1.png');
	usubQ3W2 = loadImage('usubQ3W2.png');
	usubQ3W3 = loadImage('usubQ3W3.png');
	chainRDQ1 = loadImage('chainRDQ1.png');
	chainRDQ1C = loadImage('chainRDQ1C.png');
	chainRDQ1W1 = loadImage('chainRDQ1W1.png');
	chainRDQ1W2 = loadImage('chainRDQ1W2.png');
	chainRDQ1W3 = loadImage('chainRDQ1W3.png');
	chainRDQ2 = loadImage('chainRDQ2.png');
	chainRDQ2C = loadImage('chainRDQ2C.png');
	chainRDQ2W1 = loadImage('chainRDQ2W1.png');
	chainRDQ2W2 = loadImage('usubQ2W2.png');
	chainRDQ2W3 = loadImage('usubQ2W3.png');
	chainRDQ3 = loadImage('usubQ3.png');
	chainRDQ3C = loadImage('usubQ3C.png');
	chainRDQ3W1 = loadImage('usubQ3W1.png');
	chainRDQ3W2 = loadImage('usubQ3W2.png');
	chainRDQ3W3 = loadImage('usubQ3W3.png');
}


var textMode = false;

var tempText = [];
var i = 0;
var t;
var order = 1;
var left;
var right;
var leftT;
var black = false;
var blackImage;
var testImage = false;
var pOrder;
var retries = 0;

var player = {
	x: 700,
	y: 400,
	speed: 10,
	size: 40,
}

class monster {
	constructor(x, y, speed, size) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.size = size;
		this.dead = false;
	}
}


var b1x = 0;
var b1y = 225;
var b1r = true;
var b2x = 390;
var b2y = 200;
var b2d = true;
var mouseOn = false;

var lives = 3;
var charImage;

var question = " ";
var aAns;
var bAns;
var cAns;
var dAns;
var qOrder = 1;
var a = false;
var b = false;
var c = false;
var d = false;
var aOn = true;
var bOn = true;
var cOn = true;
var dOn = true;
var yText = 40;
var xText = 30;

var physicsOn = false;
var keys = [];

var m1 = new monster(50, 50, 4, 20);
var m2 = new monster(50, 50, 3, 20);
var m3 = new monster(50, 50, 2, 20);

function draw() {

	if (textMode == true) {
		if (black == false) {
			image(classroom, 0, 0);
			image(left, -220, 100);
			left.delay(100);
			right.delay(100);
			if (i != t.length) {
				if (leftT == true) {
					left.play();
					right.pause();
				}
				if (leftT == false) {
					right.play();
					left.pause();
				}
			}
			image(right, 350, 100);
			tempText.push(t[i]);
			image(textBox, 0, 0, 800, 450);
			text(tempText.join(""), 30, 370, 730, 300);
		}
		if (black == true) {
			if (testImage == false) {
				rect(-10, -10, 1000, 1000);
			}
			if (testImage == true) {
				image(classroom, 0, 0);
			}
			tempText.push(t[i]);
			fill(255);
			textSize(30);
			text(tempText.join(""), 240, 230);
			textSize(18);
			textLeading(33);
			fill(0);
			image(blackImage, 180, 30, 400, 400);
		}
		if (i < t.length) {
			i++;
		}
		if (i == t.length) {
			if (black == false) {
				image(waitArrow, 750, 410, 43, 24);
				waitArrow.play();
				left.pause();
				right.pause();
			}
			if (mouseIsPressed === true) {
				order++;
				textMode = false;
			}
		}
	}
	if (textMode == false) {
		//physics
		if (physicsOn == true) {
			//control the player with WASD or Arrow keys
			if (keys[68] || keys[39]) {
				player.x += player.speed;
				//charImage = topE;
			}
			if (keys[65] || keys[37]) {
				player.x -= player.speed;
				//charImage = topW;
			}
			if (keys[87] || keys[38]) {
				player.y -= player.speed;
				//charImage = topN;
			}
			if (keys[83] || keys[40]) {
				player.y += player.speed;
				//charImage = topS;
			}
			//monster physics
			function mPhysics(monster) {
				//monsters move towards player
				if (monster.x > player.x) {
					monster.x -= monster.speed;
				}
				if (monster.x < player.x) {
					monster.x += monster.speed;
				}
				if (monster.y > player.y) {
					monster.y -= monster.speed;
				}
				if (monster.y < player.y) {
					monster.y += monster.speed;
				}
				//check if monster hits player
				if (collideCircleCircle(monster.x, monster.y, monster.size, player.x, player.y, player.size)) {
					m1.x = 100;
					m1.y = 100;
					m2.x = 100;
					m2.y = 100;
					m3.x = 100;
					m3.y = 100;
					player.x = 700;
					player.y = 400;
					lives -= 1;
				}
				//monster barrier collision
				if (collideRectCircle(b1x, b1y, 200, 25, monster.x, monster.y, monster.size) && monster.y > 226) {
					monster.y += monster.speed;
				}
				if (collideRectCircle(b1x, b1y, 200, 25, monster.x, monster.y, monster.size) && monster.y < 226) {
					monster.y -= monster.speed;
				}
				if (collideRectCircle(b2x, b2y, 25, 200, monster.x, monster.y, monster.size) && monster.x > 405) {
					monster.x += monster.speed;
				}
				if (collideRectCircle(b2x, b2y, 25, 200, monster.x, monster.y, monster.size) && monster.x < 405) {
					monster.x -= monster.speed;
				}
			}
			if (m1.dead == false) {
				mPhysics(m1);
			}
			if (m2.dead == false) {
				mPhysics(m2);
			}
			if (m3.dead == false) {
				mPhysics(m3);
			}

			//player colliding with sides of the screen
			if (collideRectCircle(800, 0, 100, 1000, player.x, player.y, player.size)) {
				player.x -= player.speed;
			}
			if (collideRectCircle(0, 450, 1000, 100, player.x, player.y, player.size)) {
				player.y -= player.speed;
			}
			if (collideRectCircle(0, 0, 1, 1000, player.x, player.y, player.size)) {
				player.x += player.speed;
			}
			if (collideRectCircle(0, 0, 1000, 1, player.x, player.y, player.size)) {
				player.y += player.speed;
			}
			//player barrier collision
			if (collideRectCircle(b1x, b1y, 200, 25, player.x, player.y, player.size) && player.y > 226) {
				player.y += player.speed;
			}
			if (collideRectCircle(b1x, b1y, 200, 25, player.x, player.y, player.size) && player.y < 226) {
				player.y -= player.speed;
			}
			if (collideRectCircle(b2x, b2y, 25, 200, player.x, player.y, player.size) && player.x > 405) {
				player.x += player.speed;
			}
			if (collideRectCircle(b2x, b2y, 25, 200, player.x, player.y, player.size) && player.x < 405) {
				player.x -= player.speed;
			}

			//barrier 1
			if (b1r == true) {
				b1x += 5;
			}
			if (b1x >= 600) {
				b1r = false;
			}
			if (b1r == false) {
				b1x -= 5;
			}
			if (b1x <= 0) {
				b1r = true;
			}
			//barrier 2
			if (b2d == true) {
				b2y += 3;
			}
			if (b2y >= 250) {
				b2d = false;
			}
			if (b2d == false) {
				b2y -= 3;
			}
			if (b2y <= 0) {
				b2d = true;
			}

			if ((keys[87] || keys[38]) && (keys[68] || keys[39])) {
				charImage = topNE;
			}
			if ((keys[87] || keys[38]) && (keys[65] || keys[37])) {
				charImage = topNW;
			}
			if ((keys[83] || keys[40]) && (keys[68] || keys[39])) {
				charImage = topSE;
			}
			if ((keys[83] || keys[40]) && (keys[65] || keys[37])) {
				charImage = topSW;
			}
			if ((keys[83] == true || keys[40] == true) && (keys[65] == false || keys[37] == false) && (keys[68] == false || keys[39] == false) && (keys[87] == false || keys[38] == false)) {
				charImage = topS;
			}
			if ((keys[65] == true || keys[37] == true) && (keys[83] == false || keys[40] == false) && (keys[87] == false || keys[38] == false) && (keys[68] == false || keys[39] == false)) {
				charImage = topW;
			}
			if ((keys[68] == true || keys[39] == true) && (keys[83] == false || keys[40] == false) && (keys[87] == false || keys[38] == false) && (keys[65] == false || keys[37] == false)) {
				charImage = topE;
			}
			if ((keys[87] == true || keys[38] == true) && (keys[65] == false || keys[37] == false) && (keys[68] == false || keys[39] == false) && (keys[83] == false || keys[40] == false)) {
				charImage = topN;
			}

			//buttons collsion
			if (collidePointRect(mouseX, mouseY, 25, 390, 150, 50) && mouseOn == true && aOn == true) {
				a = true;
			}
			if (collidePointRect(mouseX, mouseY, 240, 405, 150, 50) && mouseOn == true && bOn == true) {
				b = true;
			}
			if (collidePointRect(mouseX, mouseY, 440, 405, 150, 50) && mouseOn == true && cOn == true) {
				c = true;
			}
			if (collidePointRect(mouseX, mouseY, 635, 405, 150, 50) && mouseOn == true && dOn == true) {
				d = true;
			}
			mouseOn = false;
		}
		//Text
		if (order == 0) {
			imageMode(CORNER);
			image(gameOver, 0, 0);
			fill(65);
			rect(300, 50, 200, 60);
			fill(0);
			text("Retry", 400, 90);
			
			if (collidePointRect(mouseX, mouseY, 300, 50, 200, 60) && mouseIsPressed) {
				retries++;
				order = pOrder;
				m1.dead = false;
				m2.dead = false;
				m3.dead = false;
				lives = 3;
				qOrder = 1;
				m1.speed = 3;
				m2.speed = 2;
				m3.speed = 1;
				aOn = true;
				bOn = true;
				cOn = true;
				dOn = true;
				m1.x = 100;
				m1.y = 100;
				m2.x = 100;
				m2.y = 100;
				m3.x = 100;
				m3.y = 100;
				player.x = 700;
				player.y = 400;
			}

		}
		if (order == 1) {
			leftT = true;
			left = teacher;
			right = blank;
			tempText = [];
			i = 0;
			t = "TEACHER: Alright class, that is the basic idea of Calculus.";
			textMode = true;
		}
		if (order == 2) {
			tempText = [];
			i = 0;
			t = "I look forward to being your teacher throughout the year and I hope you enjoy my class.";
		}
		if (order == 3) {
			tempText = [];
			i = 0;
			t = "Before we go, I would like to tell you about the story of the Calculus Ninja.";
		}
		if (order == 4) {
			tempText = [];
			i = 0;
			t = "A status achieved by only the most determined and skilled Calculus students.";
		}
		if (order == 5) {
			tempText = [];
			i = 0;
			t = "Students who wish to become calculus ninjas will have to train and pass multiple tests.";
		}
		if (order == 6) {
			tempText = [];
			i = 0;
			t = "Those that pass these tests receive the legendary Calculus headband.";
		}
		if (order == 7) {
			leftT = false;
			right = boy;
			tempText = [];
			i = 0;
			t = "CRAIG: Pssssh give me a challenge";
		}
		if (order == 8) {
			right = girl;
			tempText = [];
			i = 0;
			t = "YOU: Calculus Ninja? Sounds more like a regular Tuesday.";
		}
		if (order == 9) {
			right = blank;
			leftT = true;
			tempText = [];
			i = 0;
			t = "TEACHER: Wow, you're both interested?";
		}
		if (order == 10) {
			tempText = [];
			i = 0;
			t = "However, you must know that once you pass all of your tests, you two will have to face off to become The Calculus Ninja.";
		}
		if (order == 11) {
			tempText = [];
			i = 0;
			t = "I hope you're up for the challenge.";
		}
		if (order == 12) {
			black = true;
			blackImage = blank;
			tempText = [];
			i = 0;
			t = "The Next Day ...";
		}
		if (order == 13) {
			black = false;
			tempText = [];
			i = 0;
			t = "TEACHER: Alright class, the first thing we’re going to do is learn limits.";
		}
		if (order == 14) {
			tempText = [];
			i = 0;
			t = "Limits are the value a function approaches as the input approaches a certain point.";
		}
		if (order == 15) {
			tempText = [];
			i = 0;
			t = "Some ways to solve these limits are direct substitution, factoring, and L'Hopital's rule. Now onto our first test.";
		}
		if (order == 16) {
			tempText = [];
			i = 0;
			t = "In order to pass this test, you will have to dodge the three red question marks that are coming towards you.";
		}
		if (order == 17) {
			tempText = [];
			i = 0;
			t = "If you get hit with one of these question marks, you will lose one of your three lives.";
		}
		if (order == 18) {
			tempText = [];
			i = 0;
			t = "Once you lose all lives you fail the test. In the top left corner, you will see a question that tests your limits knowledge.";
		}
		if (order == 19) {
			tempText = [];
			i = 0;
			t = "You will select the correct answer by clicking on the answer choice at the bottom of the screen.";
		}
		if (order == 20) {
			tempText = [];
			i = 0;
			t = "If you get the question correct, one of the three question marks disappears and the speed of the others increase.";
		}
		if (order == 21) {
			tempText = [];
			i = 0;
			t = "However, if you get the question wrong, you will have to restart.";
		}
		if (order == 22) {
			tempText = [];
			i = 0;
			t = "You are then prompted with another question, increasing in difficulty.";
		}
		if (order == 23) {
			tempText = [];
			i = 0;
			t = "After you have correctly answered every question without losing all of your lives, you will have passed the test.";
		}
		if (order == 24) {
			tempText = [];
			i = 0;
			t = "You can use WASD or the arrow keys to move";
		}
		if (order == 25) {
			tempText = [];
			i = 0;
			t = "The test will begin when you click the mouse.";
		}
		if (order == 26) {
			pOrder = order;
			physicsOn = true;
			imageMode(CORNER);
			image(miniGame, 0, 0);
			imageMode(CENTER);
			fill(255, 255, 0);
			image(charImage, player.x, player.y, 120, 120);
			fill(255, 0, 0);
			if (m1.dead == false) {
				text("?", m1.x, m1.y);
			}
			if (m2.dead == false) {
				text("?", m2.x, m2.y);
			}
			if (m3.dead == false) {
				text("?", m3.x, m3.y);
			}
			fill(0);
			imageMode(CORNER);
			image(rulerH, b1x, b1y, 200, 25);
			image(rulerV, b2x, b2y, 25, 200);
			imageMode(CENTER);
			if (lives > 2) {
				image(heart, 670, 25, 50, 50);
			}
			if (lives > 1) {
				image(heart, 720, 25, 50, 50);
			}
			if (lives > 0) {
				image(heart, 770, 25, 50, 50);
			}
			if (lives == 0) {
				order = 0;
			}

			//buttons
			stroke(1);
			fill(255);
			rect(25, 390, 150, 50);
			rect(230, 390, 150, 50);
			rect(430, 390, 150, 50);
			rect(625, 390, 150, 50);
			fill(0);
			textAlign(LEFT);
			text(question, xText, yText, 600, 300);
			textAlign(CENTER);
			if (qOrder == 1) {
				question = "Find";
				image(limitQ1, 230, 53);
				aAns = "0";
				bAns = "5";
				cAns = "9";
				dAns = "4";
				if (a) {
					m3.dead = true;
					m1.speed++;
					m2.speed++;
					a = false;
					aOn = true;
					bOn = true;
					cOn = true;
					dOn = true;
					mouseOn = false;
					qOrder = 2;
				}
				if (b) {
					lives = 0;
					bOn = false;
					b = false;
				}
				if (c) {
					lives = 0;
					cOn = false;
					c = false;
				}
				if (d) {
					lives = 0;
					dOn = false;
					d = false;
				}
			}
			if (qOrder == 2) {
				yText = 75;
				xText = 50;
				question = "Find";
				image(limitQ2, 230, 75);
				aAns = "0";
				bAns = "2";
				cAns = "3";
				dAns = "5";
				if (a) {
					lives = 0;
					aOn = false;
					a = false;
				}
				if (b) {
					lives = 0;
					bOn = false;
					b = false;
				}
				if (c) {
					m2.dead = true;
					m1.speed = 5;
					c = false;
					aOn = true;
					bOn = true;
					cOn = true;
					dOn = true;
					mouseOn = false;
					qOrder = 3;
				}
				if (d) {
					lives = 0;
					dOn = false;
					d = false;
				}
			}
			if (qOrder == 3) {
				yText = 70;
				xText = 35;
				question = "Find";
				image(limitQ3, 230, 75);
				aAns = "6";
				bAns = "4";
				cAns = "1";
				dAns = "5";
				if (a) {
					lives = 0;
					aOn = false;
					a = false;
				}
				if (b) {
					lives = 0;
					bOn = false;
					b = false;
				}
				if (c) {
					m1.dead = true;
					c = false;
					aOn = true;
					bOn = true;
					cOn = true;
					dOn = true;
					mouseOn = false;
					order++;
					textMode = true;
				}
				if (d) {
					lives = 0;
					dOn = false;
					d = false;
				}
			}
			if (aOn) {
				text(aAns, 30, 405, 150, 50);
			}
			if (bOn) {
				text(bAns, 240, 405, 150, 50);
			}
			if (cOn) {
				text(cAns, 440, 405, 150, 50);
			}
			if (dOn) {
				text(dAns, 635, 405, 150, 50);
			}
		}
		if (order == 27) {
			noStroke();
			textAlign(LEFT);
			physicsOn = false;
			imageMode(CORNER);
			tempText = [];
			i = 0;
			t = "TEACHER: Pencils down!";
			left = teacher;
			right = blank;
			leftT = true;
		}
		if (order == 28) {
			tempText = [];
			i = 0;
			t = "YOU: Man, that test felt pretty Easy!";
			left = girl;
		}
		if (order == 29) {
			tempText = [];
			i = 0;
			t = "CRAIG: That didn't test my limits at all!!!";
			right = boy;
			leftT = false;
		}
		if (order == 30) {
			tempText = [];
			i = 0;
			t = "TEACHER: Enough talking, scores are out!";
			left = teacher;
			right = blank;
			leftT = true;
		}
		if (order == 31) {
			tempText = [];
			i = 0;
			t = "                            ";
			black = true;
			blackImage = limitTest;
			testImage = true;
		}
		if (order == 32) {
			testImage = false;
			black = false;
			tempText = [];
			i = 0;
			t = "YOU: Lets gooo! I got a 99!!";
			left = girl;
		}
		if (order == 33) {
			black = false;
			tempText = [];
			i = 0;
			t = "CRAIG: Wow, only a 99? I got a 100% and didn't even try.";
			right = boy;
			leftT = false;
		}
		if (order == 34) {
			blackImage = blank;

			black = true;
			tempText = [];
			i = 0;
			t = "The Next Day ...";
		}
		if (order == 35) {
			black = false;
			blackImage = blank;
			tempText = [];
			i = 0;
			t = "TEACHER: Next up is power rule for derivatives. This section is pretty easy.";
			left = teacher;
			right = blank;
		}
		if (order == 36) {
			tempText = [];
			i = 0;
			t = "All you have to do is take the exponent and make it the coefficient, then, subtract one from the exponent.";
			left = teacher;
			right = blank;
			leftT = true;
		}
		if (order == 37) {
			tempText = [];
			i = 0;
			t = "Now, onto your next test, the test will begin when you click your mouse.";
			left = teacher;
			right = blank;
			leftT = true;
			m1.dead = false;
			m2.dead = false;
			m3.dead = false;
			lives = 3;
			qOrder = 1;
			m1.speed = 3;
			m2.speed = 2;
			m3.speed = 1;
		}
		if (order == 38) {
			pOrder = order;
			physicsOn = true;
			imageMode(CORNER);
			image(miniGame, 0, 0);
			imageMode(CENTER);
			fill(255, 255, 0);
			image(charImage, player.x, player.y, 120, 120);
			fill(255, 0, 0);
			if (m1.dead == false) {
				text("?", m1.x, m1.y);
			}
			if (m2.dead == false) {
				text("?", m2.x, m2.y);
			}
			if (m3.dead == false) {
				text("?", m3.x, m3.y);
			}
			fill(0);
			imageMode(CORNER);
			image(rulerH, b1x, b1y, 200, 25);
			image(rulerV, b2x, b2y, 25, 200);
			imageMode(CENTER);
			if (lives > 2) {
				image(heart, 670, 25, 50, 50);
			}
			if (lives > 1) {
				image(heart, 720, 25, 50, 50);
			}
			if (lives > 0) {
				image(heart, 770, 25, 50, 50);
			}
			if (lives == 0) {
				order = 0;
			}

			//buttons
			stroke(1);
			fill(255);
			rect(25, 390, 150, 50);
			rect(230, 390, 150, 50);
			rect(430, 390, 150, 50);
			rect(625, 390, 150, 50);
			fill(0);
			textAlign(LEFT);
			text(question, xText, yText, 600, 300);
			textAlign(CENTER);
			if (qOrder == 1) {
				yText = 50;
				xText = 40;
				question = "Find";
				image(powerQ1, 180, 55);
				aAns = "";
				image(powerQ1W1, 95, 410);
				bAns = "";
				image(powerQ1C, 305, 410);
				cAns = "";
				image(powerQ1W2, 505, 410);
				dAns = "";
				image(powerQ1W3, 700, 410, 61, 52);
				if (a) {
					lives = 0;
					aOn = false;
					a = false;
				}
				if (b) {
					m3.dead = true;
					m1.speed++;
					m2.speed++;
					b = false;
					aOn = true;
					bOn = true;
					cOn = true;
					dOn = true;
					mouseOn = false;
					qOrder = 2;
				}
				if (c) {
					lives = 0;
					cOn = false;
					c = false;
				}
				if (d) {
					lives = 0;
					dOn = false;
					d = false;
				}
			}
			if (qOrder == 2) {
				yText = 50;
				xText = 40;
				question = "Find";
				image(powerQ2, 180, 55);
				aAns = "";
				image(powerQ2W1, 95, 410, 30, 57);
				bAns = "";
				image(powerQ2W2, 305, 410, 37, 57);
				cAns = "";
				image(powerQ2W3, 505, 410, 20, 46);
				dAns = "";
				image(powerQ2C, 700, 410, 37, 57);
				if (a) {
					lives = 0;
					aOn = false;
					a = false;
				}
				if (b) {
					lives = 0;
					bOn = false;
					b = false;
				}
				if (c) {
					lives = 0;
					cOn = false;
					c = false;
				}
				if (d) {
					m2.dead = true;
					m1.speed = 5;
					d = false;
					aOn = true;
					bOn = true;
					cOn = true;
					dOn = true;
					mouseOn = false;
					qOrder = 3;
				}
			}
			if (qOrder == 3) {
				yText = 50;
				xText = 40;
				image(powerQ3, 250, 55);
				aAns = "";
				image(powerQ3W1, 95, 410, 73, 50);
				bAns = "";
				image(powerQ3W2, 305, 410, 85, 50);
				cAns = "";
				image(powerQ3C, 505, 410, 73, 50);
				dAns = "";
				image(powerQ3W3, 700, 410, 100, 50);
				if (a) {
					lives = 0;
					aOn = false;
					a = false;
				}
				if (b) {
					lives = 0;
					bOn = false;
					b = false;
				}
				if (c) {
					m1.dead = true;
					c = false;
					aOn = true;
					bOn = true;
					cOn = true;
					dOn = true;
					mouseOn = false;
					order++;
					textMode = true;
				}
				if (d) {
					lives = 0;
					dOn = false;
					d = false;
				}
			}
			if (aOn) {
				text(aAns, 30, 405, 150, 50);
			}
			if (bOn) {
				text(bAns, 240, 405, 150, 50);
			}
			if (cOn) {
				text(cAns, 440, 405, 150, 50);
			}
			if (dOn) {
				text(dAns, 635, 405, 150, 50);
			}
		}
		if (order == 39) {
			noStroke();
			textAlign(LEFT);
			physicsOn = false;
			imageMode(CORNER);
			tempText = [];
			i = 0;
			t = "TEACHER: Congrats on finishing the test!";
			left = teacher;
			right = blank;
			leftT = true;
		}
		if (order == 40) {
			tempText = [];
			i = 0;
			t = "YOU: That test felt a little harder than last time...";
			left = girl;
		}
		if (order == 41) {
			tempText = [];
			i = 0;
			t = "CRAIG: Im still waiting for a challenge...";
			right = boy;
			leftT = false;
		}
		if (order == 42) {
			tempText = [];
			i = 0;
			t = "TEACHER: Alright everyone, here are your test results!!";
			left = teacher;
			right = blank;
			leftT = true;
		}
		if (order == 43) {
			tempText = [];
			i = 0;
			t = "                            ";
			black = true;
			blackImage = powerTest;
			testImage = true;
		}
		if (order == 44) {
			testImage = false;
			black = false;
			tempText = [];
			i = 0;
			t = "YOU: Not bad... I got a 93.";
			left = girl;
		}
		if (order == 45) {
			tempText = [];
			i = 0;
			t = "CRAIG: I see you're falling behind already... I got a 100.";
			right = boy;
			leftT = false;
		}
		if (order == 46) {
			blackImage = blank;

			black = true;
			tempText = [];
			i = 0;
			t = "The Next Day ...";
		}
		if (order == 47) {
			black = false;
			blackImage = blank;
			tempText = [];
			i = 0;
			t = "TEACHER: Now let’s move onto product and division rule.";
			leftT = true;
			left = teacher;
			right = blank;
		}
		if (order == 48) {
			tempText = [];
			i = 0;
			t = "Product rule states that when you take the derivative of two functions that are being multiplied together, ";
		}
		if (order == 49) {
			tempText = [];
			i = 0;
			t = "you split it into two different parts.";
		}
		if (order == 50) {
			tempText = [];
			i = 0;
			t = "Then you take the derivative of the first part multiplied by the second.";
		}
		if (order == 51) {
			tempText = [];
			i = 0;
			t = "You add this to the derivative of the second part multiplied by the first part.";
		}
		if (order == 52) {
			tempText = [];
			i = 0;
			t = "Division rule is similar.";
		}
		if (order == 53) {
			tempText = [];
			i = 0;
			t = "First you take the derivative of two functions that are being, split it into two parts.";
		}
		if (order == 54) {
			tempText = [];
			i = 0;
			t = "Then take the derivative of the first part multiplied by the second part.";
		}
		if (order == 55) {
			tempText = [];
			i = 0;
			t = "After this you’re going to subtract the derivative of the second part multiplied by the first part. ";
		}
		if (order == 56) {
			tempText = [];
			i = 0;
			t = "Then, divide all of this by the second part squared.";
		}
		if (order == 57) {
			tempText = [];
			i = 0;
			t = "I hope you’re prepared for your test, click when you wish to begin.";
			m1.dead = false;
			m2.dead = false;
			m3.dead = false;
			lives = 3;
			qOrder = 1;
			m1.speed = 3;
			m2.speed = 2;
			m3.speed = 1;
		}
		if (order == 58) {
			pOrder = order;
			physicsOn = true;
			imageMode(CORNER);
			image(miniGame, 0, 0);
			imageMode(CENTER);
			fill(255, 255, 0);
			image(charImage, player.x, player.y, 120, 120);
			fill(255, 0, 0);
			if (m1.dead == false) {
				text("?", m1.x, m1.y);
			}
			if (m2.dead == false) {
				text("?", m2.x, m2.y);
			}
			if (m3.dead == false) {
				text("?", m3.x, m3.y);
			}
			fill(0);
			imageMode(CORNER);
			image(rulerH, b1x, b1y, 200, 25);
			image(rulerV, b2x, b2y, 25, 200);
			imageMode(CENTER);
			if (lives > 2) {
				image(heart, 670, 25, 50, 50);
			}
			if (lives > 1) {
				image(heart, 720, 25, 50, 50);
			}
			if (lives > 0) {
				image(heart, 770, 25, 50, 50);
			}
			if (lives == 0) {
				order = 0;
			}

			//buttons
			stroke(1);
			fill(255);
			rect(25, 390, 150, 50);
			rect(230, 390, 150, 50);
			rect(430, 390, 150, 50);
			rect(625, 390, 150, 50);
			fill(0);
			textAlign(LEFT);
			text(question, xText, yText, 600, 300);
			textAlign(CENTER);
			if (qOrder == 1) {
				yText = 50;
				xText = 40;
				question = "Find";
				image(pdQ1, 180, 55);
				aAns = "";
				image(pdQ1W1, 95, 410, 45, 24);
				bAns = "";
				image(pdQ1C, 305, 410, 120, 24);
				cAns = "";
				image(pdQ1W2, 505, 410, 120, 24);
				dAns = "";
				image(pdQ1W3, 700, 410, 45, 25);
				if (a) {
					lives = 0;
					aOn = false;
					a = false;
				}
				if (b) {
					m3.dead = true;
					m1.speed++;
					m2.speed++;
					b = false;
					aOn = true;
					bOn = true;
					cOn = true;
					dOn = true;
					mouseOn = false;
					qOrder = 2;
				}
				if (c) {
					lives = 0;
					cOn = false;
					c = false;
				}
				if (d) {
					lives = 0;
					dOn = false;
					d = false;
				}
			}
			if (qOrder == 2) {
				yText = 50;
				xText = 40;
				question = "Find";
				image(pdQ2, 200, 55);
				aAns = "";
				image(pdQ2W1, 95, 410, 113 * 1.2, 17 * 1.2);
				bAns = "";
				image(pdQ2W2, 305, 410, 113 * 1.2, 17 * 1.2);
				cAns = "";
				image(pdQ2W3, 505, 410, 227 * 0.5, 50 * 0.5);
				dAns = "";
				image(pdQ2C, 700, 410, 113 * 1.2, 17 * 1.2);
				if (a) {
					lives = 0;
					aOn = false;
					a = false;
				}
				if (b) {
					lives = 0;
					bOn = false;
					b = false;
				}
				if (c) {
					lives = 0;
					cOn = false;
					c = false;
				}
				if (d) {
					m2.dead = true;
					m1.speed = 5;
					d = false;
					aOn = true;
					bOn = true;
					cOn = true;
					dOn = true;
					mouseOn = false;
					qOrder = 3;
				}
			}
			if (qOrder == 3) {
				yText = 50;
				xText = 40;
				image(pdQ3, 170, 55);
				aAns = "";
				image(pdQ3W1, 95, 410, 127 * 0.4, 103 * 0.4);
				bAns = "";
				image(pdQ3W2, 305, 410, 199 * 0.4, 115 * 0.4);
				cAns = "";
				image(pdQ3C, 505, 410, 127 * 0.4, 103 * 0.4);
				dAns = "";
				image(pdQ3W3, 700, 410, 201 * 0.4, 115 * 0.4);
				if (a) {
					lives = 0;
					aOn = false;
					a = false;
				}
				if (b) {
					lives = 0;
					bOn = false;
					b = false;
				}
				if (c) {
					m1.dead = true;
					c = false;
					aOn = true;
					bOn = true;
					cOn = true;
					dOn = true;
					mouseOn = false;
					order++;
					textMode = true;
				}
				if (d) {
					lives = 0;
					dOn = false;
					d = false;
				}
			}
			if (aOn) {
				text(aAns, 30, 405, 150, 50);
			}
			if (bOn) {
				text(bAns, 240, 405, 150, 50);
			}
			if (cOn) {
				text(cAns, 440, 405, 150, 50);
			}
			if (dOn) {
				text(dAns, 635, 405, 150, 50);
			}
		}
		if (order == 59) {
			noStroke();
			textAlign(LEFT);
			physicsOn = false;
			imageMode(CORNER);
			tempText = [];
			i = 0;
			t = "TEACHER: Nice job on finishing your tests everyone!";
			left = teacher;
			right = blank;
			leftT = true;
		}
		if (order == 60) {
			tempText = [];
			i = 0;
			t = "YOU: I know I did better on this one >:)";
			left = girl;
		}
		if (order == 61) {
			tempText = [];
			i = 0;
			t = "CRAIG: I always do good so it doesn’t matter!";
			right = boy;
			leftT = false;
		}
		if (order == 62) {
			tempText = [];
			i = 0;
			t = "TEACHER: Enough arguing! Scores are out.";
			left = teacher;
			right = blank;
			leftT = true;
		}
		if (order == 63) {
			tempText = [];
			i = 0;
			t = "                            ";
			black = true;
			blackImage = pdTest;
			testImage = true;
		}
		if (order == 64) {
			testImage = false;
			black = false;
			tempText = [];
			i = 0;
			t = "YOU: I got a 100!";
			left = girl;
		}
		if (order == 65) {
			tempText = [];
			i = 0;
			t = "CRAIG: Well so did I so it's not a big deal.";
			right = boy;
			leftT = false;
		}
		if (order == 66) {
			black = true;
			blackImage = blank;
			tempText = [];
			i = 0;
			t = "The Next Day ...";
		}
		if (order == 67) {
			black = false;
			left = teacher;
			right = blank;
			leftT = true;
			tempText = [];
			i = 0;
			t = "TEACHER: Alright guys, you have learned everything I have to teach you.";
		}
		if (order == 68) {
			tempText = [];
			i = 0;
			t = "You guys will now have to take the same test. The one who recives the higher score will become the calculus ninja";
		}
		if (order == 69) {
			tempText = [];
			i = 0;
			t = "I wish you guys the best of luck! Click the mouse when you would like to begin.";
			m1.dead = false;
			m2.dead = false;
			m3.dead = false;
			lives = 3;
			qOrder = 1;
			m1.speed = 3;
			m2.speed = 2;
			m3.speed = 1;
		}
		if (order == 70) {
				console.log(retries);
			pOrder = order;
			physicsOn = true;
			imageMode(CORNER);
			image(miniGame, 0, 0);
			imageMode(CENTER);
			fill(255, 255, 0);
			image(charImage, player.x, player.y, 120, 120);
			fill(255, 0, 0);
			if (m1.dead == false) {
				text("?", m1.x, m1.y);
			}
			if (m2.dead == false) {
				text("?", m2.x, m2.y);
			}
			if (m3.dead == false) {
				text("?", m3.x, m3.y);
			}
			fill(0);
			imageMode(CORNER);
			image(rulerH, b1x, b1y, 200, 25);
			image(rulerV, b2x, b2y, 25, 200);
			imageMode(CENTER);
			if (lives > 2) {
				image(heart, 670, 25, 50, 50);
			}
			if (lives > 1) {
				image(heart, 720, 25, 50, 50);
			}
			if (lives > 0) {
				image(heart, 770, 25, 50, 50);
			}
			if (lives == 0) {
				order = 0;
			}

			//buttons
			stroke(1);
			fill(255);
			rect(25, 390, 150, 50);
			rect(230, 390, 150, 50);
			rect(430, 390, 150, 50);
			rect(625, 390, 150, 50);
			fill(0);
			textAlign(LEFT);
			text(question, xText, yText, 600, 300);
			textAlign(CENTER);
			if (qOrder == 1) {
				yText = 50;
				xText = 40;
				question = "Find";
				image(usubQ1, 200, 55);
				aAns = "";
				image(usubQ1W1, 95, 410, 169 *0.6, 92*0.6);
				bAns = "";
				image(usubQ1W2, 305, 410, 182 * 0.8, 48 * 0.8);
				cAns = "";
				image(usubQ1C2, 505, 410, 165 * 0.8, 48 *0.8);
				dAns = "";
				image(usubQ1W3, 700, 410, 182 * 0.8, 48 *0.8);
				if (a) {
					lives = 0;
					aOn = false;
					a = false;
				}
				if (b) {
					lives = 0;
					bOn = false;
					b = false;
				}
				if (c) {
					m3.dead = true;
					m1.speed++;
					m2.speed++;
					c = false;
					aOn = true;
					bOn = true;
					cOn = true;
					dOn = true;
					mouseOn = false;
					qOrder = 2;
				}
				if (d) {
					lives = 0;
					dOn = false;
					d = false;
				}
			}
			if (qOrder == 2) {
				yText = 50;
				xText = 40;
				question = "Find";
				image(usubQ2, 210, 55);
				aAns = "";
				image(usubQ2W1, 95, 410, usubQ2W1.width * 0.8, usubQ2W1.height * 0.8);
				bAns = "";
				image(usubQ2W2, 305, 410, usubQ2W2.width * 0.7, usubQ2W2.height * 0.7);
				cAns = "";
				image(usubQ2W3, 505, 410, usubQ2W3.width * 0.7, usubQ2W3.height * 0.7);
				dAns = "";
				image(usubQ2C, 700, 410, usubQ2C.width * 0.7, usubQ2C.height * 0.7);
				if (a) {
					lives = 0;
					aOn = false;
					a = false;
				}
				if (b) {
					lives = 0;
					bOn = false;
					b = false;
				}
				if (c) {
					lives = 0;
					cOn = false;
					c = false;
				}
				if (d) {
					m2.dead = true;
					m1.speed = 5;
					d = false;
					aOn = true;
					bOn = true;
					cOn = true;
					dOn = true;
					mouseOn = false;
					qOrder = 3;
				}
			}
			if (qOrder == 3) {
				yText = 50;
				xText = 40;
				image(usubQ3, 250, 55);
				aAns = "";
				image(usubQ3C, 95, 410, usubQ3C.width * 0.4, usubQ3C.height * 0.4);
				bAns = "";
				image(usubQ3W1, 305, 410, usubQ3W1.width * 0.4, usubQ3W1.height * 0.4);
				cAns = "";
				image(usubQ3W2, 505, 410, usubQ3W2.width * 0.4, usubQ3W2.height * 0.4);
				dAns = "";
				image(usubQ3W3, 700, 410, usubQ3W3.width * 0.4, usubQ3W3.height * 0.4);
				if (a) {
					m1.dead = false;
					m2.dead = false;
					m3.dead = false;
					m1.speed = 5;
					m2.speed = 3;
					m3.speed = 2;
					a = false;
					aOn = true;
					bOn = true;
					cOn = true;
					dOn = true;
					mouseOn = false;
					qOrder = 4;
				}
				if (b) {
					lives = 0;
					bOn = false;
					b = false;
				}
				if (c) {
					lives = 0;
					cOn = false;
					c = false;
				}
				if (d) {
					lives = 0;
					dOn = false;
					d = false;
				}
			}
			if (qOrder == 4) {
				yText = 50;
				xText = 40;
				image(chainRDQ1, 200, 80);
				aAns = "";
				image(chainRDQ1C, 95, 430, chainRDQ1C.width * 0.6, chainRDQ1C.height * 0.6);
				bAns = "";
				image(chainRDQ1W1, 305, 430, chainRDQ1W1.width * 0.6, chainRDQ1W1.height * 0.6);
				cAns = "";
				image(chainRDQ1W2, 505, 430, chainRDQ1W2.width * 0.6, chainRDQ1W2.height * 0.6);
				dAns = "";
				image(chainRDQ1W3, 700, 430, chainRDQ1W3.width * 0.6, chainRDQ1W3.height * 0.6);
				if (a) {
					m3.dead = true;
					a = false;
					aOn = true;
					bOn = true;
					cOn = true;
					dOn = true;
					mouseOn = false;
					qOrder = 5;
				}
				if (b) {
					lives = 0;
					bOn = false;
					b = false;
				}
				if (c) {
					lives = 0;
					cOn = false;
					c = false;
				}
				if (d) {
					lives = 0;
					dOn = false;
					d = false;
				}
			}
			if (qOrder == 5) {
				yText = 50;
				xText = 40;
				image(chainRDQ2, 200, 70);
				aAns = "";
				image(chainRDQ2W1, 95, 430, chainRDQ2W1.width * 0.6, chainRDQ2W1.height * 0.6);
				bAns = "";
				image(chainRDQ2C, 305, 430, chainRDQ2C.width * 0.6, chainRDQ2C.height * 0.6);
				cAns = "";
				image(chainRDQ2W2, 505, 410, chainRDQ2W2.width * 0.6, chainRDQ2W2.height * 0.6);
				dAns = "";
				image(chainRDQ2W3, 700, 410, chainRDQ2W3.width * 0.6, chainRDQ2W3.height * 0.6);
				if (a) {
					lives = 0;
					aOn = false;
					a = false;
				}
				if (b) {
					m2.dead = true;
					b = false;
					aOn = true;
					bOn = true;
					cOn = true;
					dOn = true;
					mouseOn = false;
					qOrder = 6;
				}
				if (c) {
					lives = 0;
					cOn = false;
					c = false;
				}
				if (d) {
					lives = 0;
					dOn = false;
					d = false;
				}
			}
			if (qOrder == 6) {
				yText = 50;
				xText = 40;
				image(chainRDQ3, 250, 55);
				aAns = "";
				image(chainRDQ3W1, 95, 410, chainRDQ3W1.width * 0.4, chainRDQ3W1.height * 0.4);
				bAns = "";
				image(chainRDQ3C, 305, 410, chainRDQ3C.width * 0.4, chainRDQ3C.height * 0.4);
				cAns = "";
				image(chainRDQ3W2, 505, 410, chainRDQ3W2.width * 0.4, chainRDQ3W2.height * 0.4);
				dAns = "";
				image(chainRDQ3W3, 700, 410, chainRDQ3W3.width * 0.6, chainRDQ3W3.height * 0.6);
				if (a) {
					lives = 0;
					aOn = false;
					a = false;
				}
				if (b) {
					m1.dead = true;
					b = false;
					aOn = true;
					bOn = true;
					cOn = true;
					dOn = true;
					mouseOn = false;
					order++;
					textMode = true;
				}
				if (c) {
					lives = 0;
					cOn = false;
					c = false;
				}
				if (d) {
					lives = 0;
					dOn = false;
					d = false;
				}
			
			}
			if (aOn) {
				text(aAns, 30, 405, 150, 50);
			}
			if (bOn) {
				text(bAns, 240, 405, 150, 50);
			}
			if (cOn) {
				text(cAns, 440, 405, 150, 50);
			}
			if (dOn) {
				text(dAns, 635, 405, 150, 50);
			}
		}
		if (order == 71) {
			noStroke();
			textAlign(LEFT);
			physicsOn = false;
			imageMode(CORNER);
			tempText = [];
			i = 0;
			t = "TEACHER: Nice job on finishing your tests everyone!";
			left = teacher;
			right = blank;
			leftT = true;
		}
		if (order == 72) {
			tempText = [];
			i = 0;
			t = "I will now grade your tests and see who will become the next calculus ninja.";
		}
		if (order == 73) {
			tempText = [];
			i = 0;
			if(retries <= 20)
			{
				t = "The next Calculus Ninja is You!!";
			}
			else
			{
				t = "Craig is the Next Calculus Ninja!!";
			}
		}
		if (order == 74) {
			tempText = [];
			i = 0;
			left = girl;
			right = boy;
			if(retries <= 20)
			{
				t = "YOU: YES!! I did it!";
			}
			else
			{
				leftT = false;
				t = "CRAIG: In you face! I knew I was going to beat you the whole time!";
			}
		}
		if (order == 75) {
			tempText = [];
			i = 0;
			left = girl;
			right = boy;
			if(retries <= 20)
			{
				leftT = false;
				t = "CRAIG: WHAT NOO! I was supposed to be the Calc Ninja >:(";
			}
			else
			{
				leftT = true;
				t = "YOU: This can't be, I worked so hard...";
			}
		}
		if (order == 76) {
			tempText = [];
			i = 0;
			left = teacher;
			right = blank;
			leftT = true;
			t = "Congratulations! You both still have a great future ahead of you!";
		}
		if (mouseIsPressed === true && order != 26 && order != 0 && order != 38 && order != 58 && order != 70) {
			textMode = true;
		}


	}

}

keyPressed = function() {
	keys[keyCode] = true;
}
keyReleased = function() {
	keys[keyCode] = false;
}
mouseReleased = function() {
	mouseOn = true;
}