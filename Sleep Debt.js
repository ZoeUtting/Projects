const getSleepHours = day => {
  switch (day) {
    case 'monday':
    return 8;
    case 'tuesday':
    return 4;
    case 'wednesday':
    return 7;
    case 'thursday':
    return 8;
    case 'friday':
    return 8;
    case 'saturday':
    return 9;
    case 'sunday':
    return 19;
    default :
    return 7;
  }

};

function getActualSleepHours() {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

function getIdealSleepHours(){
  const idealHours = 9;
  return idealHours * 7;
}

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){
    return 'You got the perfect amount of Sleep!';
  }
  if (actualSleepHours > idealSleepHours) {
    return `Lucky you, You had ${actualSleepHours-idealSleepHours} Hours more than your Ideal Sleep Hours!`;
  }
  else{
    return `You need to Sleep more, You only had ${actualSleepHours} Hours out of ${idealSleepHours} Hours! That is  ${idealSleepHours-actualSleepHours} less Hours of Sleep`;
  }
}
console.log(calculateSleepDebt());
