class Shapes {
    constructor(color) {
        this.color = '';
    }

    chosenColor(color) {
        this.color = (color);
    }
}

class Circle extends Shapes {
    render() {
        return '<>';
    }
}

class Square extends Shapes {
    render() {
        return '<>'; 
    }
}

class Triangle extends Shapes {
    render() {
        return '<>';
    }
}

module.exports = [Circle, Square, Triangle];