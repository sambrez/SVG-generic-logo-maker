const { Circle, Square, Triangle } = require('./shapes.js');

describe('Shapes', () => {

    describe('Circle', () => {
        it('should render a circle with no fill color set', () => {
            const circle = new Circle();
            const circleColor = circle.setColor('');
            expect(circle.render(circleColor)).toEqual('<circle cx="50%" cy="53%" r="80" height="75%" width="75%" fill=""/>');
        });
        it('should display a blue circle', () => {
            const circle = new Circle();
            const circleColor = circle.setColor('blue');
            expect(circle.render(circleColor)).toEqual('<circle cx="50%" cy="53%" r="80" height="75%" width="75%" fill="blue"/>');
        });
    });

    describe('Square', () => {
        it('should render a square with no fill color set', () => {
            const square = new Square();
            const squareColor = square.setColor('');
            expect(square.render(squareColor)).toEqual('<rect x="71" y="25" height="160" width="160" fill=""/>');
        });
        it('should display a blue square', () => {
            const square = new Square();
            const squareColor = square.setColor('blue');
            expect(square.render(squareColor)).toEqual('<rect x="71" y="25" height="160" width="160" fill="blue"/>');
        });
    });

    describe('Triangle', () => {
        it('should render a square with no fill color set', () => {
            const triangle = new Triangle();
            const triangleColor = triangle.setColor('');
            expect(triangle.render(triangleColor)).toEqual('<polygon height="50%" width="50%" points="150, 5 270, 155 40, 155" fill=""/>');
        });
        it('should display a blue triangle', () => {
            const triangle = new Triangle();
            const triangleColor = triangle.setColor('blue');
            expect(triangle.render(triangleColor)).toEqual('<polygon height="50%" width="50%" points="150, 5 270, 155 40, 155" fill="blue"/>');
        });
    });
});