const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
} = require("./password-verifier.js");

const testPassword = "adGgdf08";
// const password = null;

const conditionsTestArray = [true, true, true, false, false];
// const password = null;

test("Password is shorter than 9 characters", function () {
    const expected = true;
    const output = hasRightLength(testPassword);
    expect(output).toEqual(expected);
});

test("Password is not null", function () {
    const expected = true;
    const output = isNotNull(testPassword);
    expect(output).toEqual(expected);
});

test("Password has at least one uppercase character", function () {
    const expected = true;
    const output = hasUpperCaseCharacter(testPassword);
    expect(output).toEqual(expected);
});

test("Password has at least one lowercase character", function () {
    const expected = true;
    const output = hasLowerCaseCharacter(testPassword);
    expect(output).toEqual(expected);
});

test("Password has at least one digit", function () {
    const expected = true;
    const output = hasDigit(testPassword);
    expect(output).toEqual(expected);
});

test("Password meets at least 3 conditions", function () {
    const expected = true;
    const output = minimumConditionsReached(conditionsTestArray);
    expect(output).toEqual(expected);
});

test("Password meets at least 3 conditions and has at least one lowercase character", function () {
    const expected = true;
    const output = verifyPassword(testPassword);
    expect(output).toEqual(expected);
});