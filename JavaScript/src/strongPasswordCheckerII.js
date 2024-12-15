/**
 * @param {string} password
 * @return {boolean}
 *//*
const strongPasswordCheckerII = function (password) {
    const mediumRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;

    for (let i = 0; i < password.length - 1; i++) {
        if (password[i] === password[i + 1]) {
            return false
        }
    }

    return mediumRegex.test(password);
};*/

const strongPasswordCheckerII = function(password) {
    const strong = /^(?=.*\d)(?=.*[!@#$%^&*)(+-])(?=.*[a-z])(?=.*[A-Z])(?!.*([A-Za-z0-9!@#$%^&*)(+-])\1).{8,}$/;
    return strong.test(password);
};

console.log(strongPasswordCheckerII("(Aa1a1a1"));