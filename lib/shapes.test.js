const { renderTriangle, renderCircle, renderSquare } = require('./shapes');

describe('Shape rendering functions', () => {

    test('renders a triangle with a given color', () => {
        const output = renderTriangle('#ff0000');
        expect(output).toBe('<polygon points="150,50 250,185 50,185" fill="#ff0000" />');
    });

    test('renders a circle with a given color', () => {
        const output = renderCircle('#00ff00');
        expect(output).toBe('<circle cx="150" cy="100" r="50" fill="#00ff00" />');
    });

    test('renders a square with a given color', () => {
        const output = renderSquare('#0000ff');
        expect(output).toBe('<rect x="100" y="50" width="100" height="100" fill="#0000ff" />');
    });

});
