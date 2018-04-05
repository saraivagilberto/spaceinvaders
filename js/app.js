var game = new gameSystem(800, 600);

function setup() {
    game.setup();
    processClick();
}

function preload() {
    game.preload();
}

let avoidOverlap = false;

function processClick() {
    let fpsEnhanced = 1;

    let timeFactor = 16 / game.speed;
    if (timeFactor < 1)
        fpsEnhanced = int((1 - timeFactor) * 100);

    while (avoidOverlap) { }

    avoidOverlap = true;

    for (let fps = 1; fps <= fpsEnhanced; fps++)
        game.process();

    avoidOverlap = false;

    setTimeout(processClick, Math.max(0, int(16 / game.speed)));
}

function draw() {
    if (avoidOverlap)
        return;

    avoidOverlap = true;
    game.draw();
    avoidOverlap = false;
}
