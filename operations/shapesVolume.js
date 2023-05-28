/**
 * Cubic Volume
 * @param {number} a number - Side a of the cubic
 * @returns {number} result - Volume of the Cubic
 */
function CubicVolume(a) {
    return Math.pow(a, 3)
}

/**
 * Cuboid Volume
 * @param {number} l number - Lenght of the cuboid
 * @param {number} w number - Width of the cuboid
 * @param {number} h number - Height of the cuboid
 * @returns {number} result - Volume of the Cuboid
 */
function CuboidVolume(l, w, h) {
    return l * w * h
}

exports.cubicVolume = CubicVolume;
exports.cuboidVolume = CuboidVolume;