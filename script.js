let avrgJohn=(89+120+103)/3;
let avrgMike=(116+94+123)/3;

 if (avrgJohn>avrgMike){
console.log(`John's team winner with ${avrgJohn} points.`)
} else if (avrgJohn<avrgMike) {
  console.log(`Mike's team winner with ${avrgMike} points.`)
}
else {
  console.log(`It is draw and both team winner with ${avrgJohn} and ${avrgMike} `);
}; //If both team Average Score is equal. Both team is winner.

//Extra
let teamMary=(97+134+105)/3;
if (avrgJohn>avrgMike && teamMary){
  console,log(`John's team winner with ${avrgJohn} points.`)
}
else if (avrgMike>avrgJohn && teamMary){
  console.log(`Mike's team winner with ${avrgMike} points.`)
}
else if(teamMary> avrgJohn && avrgMike){
  console.log(`Mary's team winner with ${teamMary} points.`);
}
else{
  console.log(`All team is winner with ${avrgJohn} ,${avrgMike} and ${teamMary}  `)
}