export class Rectangle {
    constructor(parent, name, x, y, w, h, color) {
        this.parent = parent
        this.name = name
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.color = color
    }

    draw() {
        let ctx = this.parent.getContext("2d")
        //ctx.font = '14px serif'
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
        //ctx.fillStyle = "black"
        //ctx.fillText(this.name, this.x, this.y-4)
        //ctx.fillText("x: "+ Math.round(this.x) + " y: " + Math.round(this.y) , this.x, this.y + this.h+16)
    }
}