import {Rectangle} from './Rectangle.js'

export class MovingObject extends Rectangle {
    constructor(parent, name, x, y, w, h, color, velocity) {
        super(parent, name, x, y, w, h, color)
        this.velocity = velocity
        this.velX = 0
        this.velY = 0
        this.angle = 0

        this.targetX = parent.width / 2
        this.targetY = parent.height / 2
    }

    _rnd(range) {
        return Math.floor(Math.random() * range)
    }

    update() {
        this.getVelocity()
        this.x += this.velX
        this.y += this.velY
    }

    getVelocity() {
        let dx = this.targetX - this.x
        let dy = this.targetY - this.y
        this.angle = Math.atan2(dy, dx)

        this.velX = this.velocity * Math.cos(this.angle)
        this.velY = this.velocity * Math.sin(this.angle)
    }
}