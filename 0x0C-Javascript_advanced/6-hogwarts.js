/**
 * Gives access to four public methods (return an object):
 *  setName, sets the private variable name
 *  rewardStudent, it calls the method changeScoreBy with 1
 *  penalizeStudent, it calls the method changeScoreBy with -1
 *  getScore, it returns name: score (ex: Harry: 14)
 *
 * @return     {Object}  object containing 4 public methods 
 */
function studentHogwarts() {
  let privateScore = 0;
  let name = null;

  /**
   * Change the score
   *
   * @param      {int}  points  The points
   */
  function changeScoreBy(points) {
    privateScore += points;
  }

  return {
    setName: (newName) => {
      name = newName;
    },
    rewardStudent: () => {
      changeScoreBy(1);
    },
    penalizeStudent: () => {
      changeScoreBy(-1);
    },
    getScore: () => name + ": " + privateScore,
  };
}

const harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
