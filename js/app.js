// 1. Enemies our player must avoid
var Enemy = function (x, y, speed) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // The enemy has other properties
    // Get the position of the enemy on the grid with x and y coordinates
    this.x = x;
    this.y = y;
    // Get the speed of the enemy
    this.speed = speed;
    // Set dimension
    this.width = 101;
    this.height = 85;
};

// 1.1 Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    // Enemies reappear at random speed after they're off the canvas
    if (this.x > 505) {
        this.x = -101;
        this.speed = 100 + Math.floor(Math.random() * 200);
    }
    checkCollisions();
};

// 1.1.1 Check collisions (https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection)
function checkCollisions() {
    if (player.x < this.x + this.width &&
        player.x + player.width > this.x &&
        player.y < this.y + this.height &&
        player.height + player.y > this.y) {
        player.x = 202;
        player.y = 415;
    }
}

// 1.2 Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// 2. Now write your own player class
var Player = function (x, y) {
    // Get the position of the player on the axes
    this.x = x;
    this.y = y;
    // choose the sprite to be used
    this.sprite = 'images/char-horn-girl.png';
    // Set dimension
    this.width = 101;
    this.height = 85;

};

// 2.1 Draw the player on the screen using render method
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
var enemy1 = new Enemy(101, 60, 0);
var enemy2 = new Enemy(101, 143, 0);
var enemy3 = new Enemy(101, 226, 0);

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player
var player = new Player(202, 415);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    //player.handleInput(allowedKeys[e.keyCode]);
});