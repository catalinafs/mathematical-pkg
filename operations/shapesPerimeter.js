/**
 * Perimeter of a Parallelogram
 * @param {number} a number - Side a of the parallelogram
 * @param {number} b number - Side b of the parallelogram
 * @returns {number} result - Perimeter of the Parallelogram
 */
function ParallelogramPerimeter(a, b) {
    return 2 * (a + b)
}

/**
 * Perimeter of a Trapezoid
 * @param {number} a number - Side a of the trapezoid
 * @param {number} b number - Side b of the trapezoid
 * @param {number} c number - Side c of the trapezoid
 * @param {number} d number - Side d of the trapezoid
 * @returns {number} result - Perimeter of the Trapezoid
 */
function TrapezoidPerimeter(a, b, c, d) {
    return a + b + c + d
}

exports.parallelogramPerimeter = ParallelogramPerimeter;
exports.trapezoidPerimeter = TrapezoidPerimeter;