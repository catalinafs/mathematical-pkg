/**
 * Triangle Area
 * @param {number} b number - Base of the triangle
 * @param {number} h number - Height of the triangle
 * @returns {number} result - Area of the Triangle
 */
function TriangleArea(b,h) {
    return (b*h)/2
}

/**
 * Square Area
 * @param {number} a number - Side a of the square
 * @param {number} b number - Side b of the square
 * @returns {number} result - Area of the Square
 */
function SquareArea(a,b) {
    return a*b
}

exports.triangleArea = TriangleArea;
exports.squareArea = SquareArea;