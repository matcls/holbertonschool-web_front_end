/**
 * * Return a Welcome message
 *
 * @param      {string}  fullName  The full name
 * @return     {<type>}  closure for an alert displaying Welcome <fullName>
 */
function welcomeMessage(fullName) {
  return function() {
    alert('Welcome ' + fullName);
  };
}
/**
 * callbacks
 *
 * @type       {Function}
 */

const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');
