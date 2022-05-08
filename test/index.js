const frac = require("../index.js")

const test = (n, f, r) => {
    let out = f();
    if (out === r) {
        console.log(n, "OK, is", r)
    } else {
        console.error(n, "ERR, is", out, "should be", r)
    }
}

test("GCD 4,8", () => frac.gcd(4, 8), 4)
test("GCD 7,13", () => frac.gcd(7, 13), 1)
test("GCD 5,15", () => frac.gcd(5, 15), 5)

test("LCM 5,15", () => frac.lcm(5, 15), 15)

test("LCMS 3,5,15", () => frac.lcms([3, 5, 15]), 15)
test("LCMS 4,5,15", () => frac.lcms([4, 5, 15]), 60)
test("LCMS 15,5,4", () => frac.lcms([15, 5, 4]), 60)
test("LCMS 3,4,2", () => frac.lcms([3, 4, 2]), 12)

test("BASE 6/8", () => frac.base([6, 8]), 5)

test("CD 1/2,2/3,3/4", () => frac.commonDenominator([
    [1, 2],
    [2, 3],
    [3, 4]
]), 12)

test("NORM 1/2,2/3,3/4", () => frac.normalize([
    [1, 2],
    [2, 3],
    [3, 4]
]), 12)

test("NORM 1/2,2/3,6/8", () => frac.normalize([
    [1, 2],
    [2, 3],
    [6, 8]
]), 12)

test("NORM 1/2,1/4,1/5", () => frac.normalize([
    [1, 2],
    [1, 4],
    [1, 5]
]), 12)



test("SUM 1/2,2/3,3/4", () => frac.sum([
    [1, 2],
    [2, 3],
    [3, 4]
]), 12)

test("EXPAND 1/2,2/3,3/4", () => frac.expandToOne([
    [1, 2],
    [2, 3],
    [3, 4]
]), null)

test("EXPAND 1/2,1/3,1/4", () => frac.expandToOne([
    [1, 2],
    [1, 3],
    [1, 4]
]), null)

test("EXPAND 1/2,1/4,1/5", () => frac.expandToOne([
    [1, 2],
    [1, 4],
    [1, 5]
]), null)

test("EXPAND 50/100,25/100,20/100", () => frac.expandToOne([
    [50, 100],
    [25, 100],
    [20, 100]
]), null)

test("DIVISION 1/2,1/4,1/5", () => frac.division(1000, [
    [1, 2],
    [1, 4],
    [1, 5]
]), null)

test("DIVISION 1/2,1/4,1/5", () => frac.division(21, [
    [1, 2],
    [1, 4],
    [1, 5]
]), null)


test("DIVISION 1/5,1/5,1/5", () => frac.division(21, [
    [1, 5],
    [1, 5],
    [1, 5]
]), null)

test("DIVISION 1/5,1/5,1/5,2/5", () => frac.division(52421, [
    [1, 5],
    [1, 5],
    [1, 5],
    [2, 5]
]), null)