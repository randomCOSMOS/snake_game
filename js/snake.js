class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
    };

    draw(){
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = canvas.height;
        }
    };


    changeDirection(direction) {
        switch (direction) {
            case "Up":
                this.xSpeed = 0;
                this.ySpeed = scale * -1;
                break;
            case "Down":
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case "Right":
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
            case "Left":
                this.xSpeed = scale * -1;
                this.ySpeed = 0;
                break;
            default:
                break;
        }
    };
}