class Svg {
    constructor() {
        this.characters = "";
        this.shapes = "";
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shapes} ${this.characters} </svg>`
    }
    setCharacters(characters, characterColor) {
        this.characters = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${characterColor}">
        ${characters}</text>`
    }
    setShapes(shapes) {
        this.shapes = shapes.render()
    }
}
class ShapeData {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = (color);
    }
}
class Circle extends ShapeData {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" />`
    }
}

class Square extends ShapeData {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}" />`
    }
}


class Triangle extends ShapeData {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}" />`
    }
};

module.exports = { Circle, Square, Triangle, Svg }
