function printBadges(names){

  for(let i = 0; i < names.length; i++){
  console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`)
};
return names
};




function tailsNeverFails(){
  let tailsCount = 0;
  while(Math.random() >= 0.5){
    tailsCount ++;
    console.log ("tails")
  };
  return `You got ${tailsCount} tails in a row!`;
};
