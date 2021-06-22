/**
 * Creates a class room.
 *
 * @param      {number}  numbersOfStudents  The numbers of students
 * @return     {Array}   Number of students
 */
function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function() {
      return seat;
    };
  }

  const students = [];
  for (let i = 0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i + 1));
  }
  return students;
}

const classRoom = createClassRoom(10);
