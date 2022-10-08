import {Rectangle} from './Rectangle.js'
import {MovingObject} from './MovingObject.js'

// Globals
let game = document.querySelector('.game')
let ctx = game.getContext("2d")
game.width = 768
game.height = 640
let gameOn = false
let entities = []
let target

function newGame() {
    gameOn = true
    ctx.clearRect(0,0, game.width, game.height)
    target = new Rectangle(game, "target",game.width/2,game.height/2,24,24,"blue")
    target.draw()
    
    function rnd(range) {
        return Math.floor(Math.random() * range)
    }
    
    if (entities.length > 0) {
        entities = []
    }
    // Create moving objects
    for (let i = 0; i < 8; i++) {
        entities.push(new MovingObject(game, "rect" + i, rnd(game.width), rnd(game.height), 16, 16, "red", 0.5))
    }
}

// Init new game
newGame()

// Game loop below 
window.requestAnimationFrame(gameLoop)

function gameLoop() {
    draw()
    window.requestAnimationFrame(gameLoop)
}

function draw() {
    if (gameOn) {

        ctx.clearRect(0, 0, game.width, game.height)    
        target.draw()
        for (let i = 0; i < entities.length; i++) {
            entities[i].update()
            entities[i].draw()
        }

    }
}