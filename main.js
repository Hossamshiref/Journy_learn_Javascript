function ageInTime(theAge) {
  // Your Code Here
  let inMonths = theAge * 12;
  let inDays = inMonths * 30;
  let inHours = inDays * 24;
  let inMinutes = inHours * 60;
  let inSeconds = inMinutes * 60;

  if (theAge > 10 && theAge < 100) {
    console.log(`your Age In Months => ${inMonths} Month`);
    console.log(`your Age In Days => ${inDays} Day`);
    console.log(`your Age In Hours => ${inHours} Hour`);
    console.log(`your Age In Minutes => ${inMinutes} Minutes`);
    console.log(`your Age In Seconds => ${inSeconds} Second`);
  } else console.log(`Age Out Of Range`);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
