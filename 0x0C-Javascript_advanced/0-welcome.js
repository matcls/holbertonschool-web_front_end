/**
 * Display an alert with a welcome message
 * (Lexical scoping)
 *
 * @param      {string}  firstName  The first name
 * @param      {string}  lastName   The last name
 */
function welcome(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
    /**
     * Display an alert with the message Welcome + the variable fullName.
     */
    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }
    displayFullName();
}
