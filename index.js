//Fraction module

//Greatest common denominator
const gcd = (a, b) => !b ? a : gcd(b, a % b);

//Least common multiple
const lcm = (a, b) => (a * b) / gcd(a, b);

//LCM for an array
const lcms = (xs) => xs.reduce((p, c) => lcm(p, c), 1)

//fractions as array([numerator,denominator])
const base = (fr) => {
    //minimalize
    let m = gcd(fr[0], fr[1])
    fr[0] = fr[0] / m
    fr[1] = fr[1] / m
    return fr
}



const denominators = (fs) => fs.map(q => q[1])

const commonDenominator = (fs) => lcms(denominators(fs))

const normalize = (fs) => {
    fs = fs.map(base)
    let cd = commonDenominator(fs)
    return fs.map(q => {
        let dn = q[1]
        q[0] = q[0] * cd / dn
        q[1] = cd


        return q
    })
}

const sum = (fs) => {
    fs = normalize(fs);
    let s = fs.reduce((p, c) => p + c[0], 0)
    return [s, fs[0][1]]
}

const expandToOne = (fs) => {
    let s = sum(fs)
    if (s[0] > s[1]) return null
    let n = s[1] - s[0]
    return [n, s[1]]
}

const division = (s, fs) => {
    fs = normalize(fs)
    let last = expandToOne(fs)
    if (!last) return null
    //dělení podílu
    let denom = fs[0][1]
    let fr = Math.floor(s / denom)
    let shares = fs.map(q => fr * q[0])
    let sharesum = shares.reduce((p, c) => p + c, 0)
    let remainder = s - sharesum
    if (remainder) shares[0] += remainder
    return shares
}

module.exports = {
    gcd,
    lcm,
    lcms,
    base,
    commonDenominator,
    normalize,
    sum,
    expandToOne,
    division
}