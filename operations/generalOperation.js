/**
 * General Formula
 * @param {number} a number - Variable a of the general formula
 * @param {number} b number - Variable b of the general formula
 * @param {number} c number - Variable c of the general formula
 * @returns {number} Result - Result of the General Formula
 */
function generalOperation(a, b, c) {
    const discriminante = b * b - 4 * a * c;

    if (discriminante > 0) {
        const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return [raiz1, raiz2];
    } else if (discriminante === 0) {
        const raiz = -b / (2 * a);
        return [raiz];
    } else {
        return []; // No real roots
    }
}

exports.GeneralOperation = generalOperation;
