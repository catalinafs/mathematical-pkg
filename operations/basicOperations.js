/**
 * Addition
 * @param {number} num1 number - First number to add
 * @param {number} num2 number - Second number to add
 * @returns {number} result - Result of the Addition
 */
function Sum(num1, num2) {
    return num1 + num2
}

/**
 * Subtraction
 * @param {number} num1 number - First number to subtract
 * @param {number} num2 number - Second number to subtract
 * @returns {number} result - Result of the Subtraction
 */
function Rest(num1, num2) {
    return num1 - num2
}

/**
 * Division
 * @param {number} num1 number - First number to divide
 * @param {number} num2 number - Second number to divide
 * @returns {number} result - Result of the division
 */
function Divide(num1, num2) {
    return num1 / num2
}

/**
 * Multiplication
 * @param {number} num1 number - First number to multiply
 * @param {number} num2 number - Second number to multiply
 * @returns {number} result - Result of the Multiplication
 */
function Multiply(num1, num2) {
    return num1 * num2
}

exports.sum = Sum
exports.rest = Rest
exports.divide = Divide
exports.multiply = Multiply