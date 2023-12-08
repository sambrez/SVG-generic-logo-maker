const {Circle, Square, Triangle, Shapes} = require('./shapes.js');

describe('Shapes', () => {

    describe('Circle', () => {
        it('should display a blue circle', () => {
        const shapes = new Circle();
        shapes.chosenColor("blue");
        expect(shapes.render()).toEqual('< />');
    });});

    describe('Square', () => {
        it('should display a blue square', () => {
            const shapes = new Square();
            shapes.chosenColor("blue");
            expect(shapes.render()).toEqual('< />');
        });
    });

    describe('Triangle', () => {
        it('should display a blue triangle', () => {
            const shapes = new Triangle();
            shapes.chosenColor("blue");
            expect(shapes.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue">');
        });
    });
});