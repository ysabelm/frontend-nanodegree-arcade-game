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
    this.height = 83;
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
        this.speed = 100 + Math.floor(Math.random() * 250);
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
    // Choose the sprite to be used
    this.sprite = 'images/char-horn-girl.png';
    // Set dimension
    this.width = 101;
    this.height = 83;

};
// This class requires an update(), render() and
// a handleInput() method.

// 2.1 "Draw" the player on the grid using render method
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// 2.2 Allow the player to move using arrows keyboard
// and preventing her from going out of the grid
Player.prototype.handleInput = function (arrowKeyboard) {
    switch (arrowKeyboard) {
        case 'left':
            if (this.x > 0) {
                this.x -= 101;
            }
            break;
        case 'right':
            if (this.x < 404) {
                this.x += 101;
            }
            break;
        case 'up':
            if (this.y > 0) {
                this.y -= 83
            }
            break;
        case 'down':
        if (this.y < 415) {
            this.y += 83
        }
        break;
    }
}



// 2.3 Set the player to the initial position with an interval when...
Player.prototype.update = function () {
    //...she hits an enemy


    //..she wins (she reaches the water)
}
// 

// Place all enemy objects in an array called allEnemies
var allEnemies = [];
// Set enemies to fixed position on y axis and random position on x axis
for (var i = 0; i < 3; i++) {
    this.x = Math.floor(Math.random() * 20);
    this.y = 60 + 83 * i;
    this.speed = 100 + Math.floor(Math.random() * 250);
    allEnemies.push(new Enemy(this.x, this.y, this.speed));
}

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

    player.handleInput(allowedKeys[e.keyCode]);
});