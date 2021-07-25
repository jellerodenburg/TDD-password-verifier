// Utility functions
const isNotNull = (str) => str !== null;

const hasRightLength = (str) => str.length <= 9;

const hasUpperCaseCharacter = (str) => str.search(/[A-Z]/) >= 0;

const hasLowerCaseCharacter = (str) => str.search(/[a-z]/) >= 0;

const hasDigit = (str) => str.search(/[0-9]/) >= 0;

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};