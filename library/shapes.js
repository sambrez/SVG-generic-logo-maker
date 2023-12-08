class Shapes {
    constructor() {
        this.color = '';
    }

    chosenColor(shapeColor) {
        this.color = color;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="75%" width="75%" fill="${this.color}"/>`;
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}"/>`;
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon height="75%" width="75%" points="0,200 300,200 150,0" fill="${this.color}"/>`;
    }
}

module.exports = {Circle, Square, Triangle};
