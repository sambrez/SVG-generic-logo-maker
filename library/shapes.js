class Shapes {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="50%" cy="53%" r="80" height="75%" width="75%" fill="${this.color}"/>`;
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="71" y="25" height="160" width="160" fill="${this.color}"/>`;
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon height="50%" width="50%" points="150, 5 240, 155 60, 155" fill="${this.color}"/>`;
    }
}

module.exports = {Circle, Square, Triangle};
