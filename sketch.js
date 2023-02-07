
let para;
let gliderGirls;
let textCounter = 0;
picCounter = 0;

function preload() {
    para = loadJSON("json/pageLinks.json")
    gliderGirls = loadFont("assets/fonts/glidergirls.ttf");
}

function setup() {
    createCanvas(300, 300);
    textFont(gliderGirls);
}

function draw() {
    background(50, 0, 20);
    fill(255);
    textWrap(CHAR);

    if (textCounter === para.content.text.length - 1) {
        textCounter = 0;
    } else if (frameCount % 10 === 0) {
        // if (picCounter <= 30) {
        //     saveCanvas(`imgText${textCounter}`, 'png');
        // }
        textCounter++;
        picCounter++;
    }

    fill(255, 0, 100);
    textSize(30);
    text(para.content.text[textCounter].linkText, 10, 90, width);
    textSize(10);
    text(para.content.text[textCounter].link, 10, 200, width);
}

