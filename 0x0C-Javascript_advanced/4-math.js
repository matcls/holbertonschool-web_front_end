/**
 * Division
 *
 * @param      {number}  firstNumber   The first number
 * @param      {number}  secondNumber  The second number
 * @return     {number}  Division result
 */
function divideBy(firstNumber, secondNumber) {
    return secondNumber / firstNumber;
}

/**
 * Addition
 *
 * @param      {<type>}  firstNumber   The first number
 * @param      {<type>}  secondNumber  The second number
 * @return     {<type>}  The additon
 */
function addBy(firstNumber, secondNumber) {
    return secondNumber + firstNumber;
}

/**
 * Clousures
 */
const addBy100 = function(x) { return addBy(x, 100); };
const addBy1000 = function(x) { return addBy(x, 1000); };
const divideBy10 = function(x) { return divideBy(10, x); };
const divideBy100 = function(x) { return divideBy(100, x); };
