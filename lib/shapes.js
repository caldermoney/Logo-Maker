function renderTriangle(color) {
    return `<polygon points="150,50 250,185 50,185" fill="${color}" />`;
}

function renderCircle(color) {
    return `<circle cx="150" cy="100" r="50" fill="${color}" />`;
}

function renderSquare(color) {
    return `<rect x="100" y="50" width="100" height="100" fill="${color}" />`;
}

module.exports = {
    renderTriangle,
    renderCircle,
    renderSquare
};
