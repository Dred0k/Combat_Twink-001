// Start Varables
var youHit;
var player = {
  isAlive : true,
  hitpoints : 20,
  armorClass : 18,
  toHit : 0
};

// monster will pull and populate from seperate file
var monster = {
  isAlive : true,
  hitpoints : 10,
  armorClass : 14,
  toHit : 0
};

//End Varibles

// Start Functions
var attackRoll = function(num1){
  youHit = Math.floor(Math.random()*20) +1 +num1);
  console.log(youHit); 
  return youHit;
  
};

//End Functions


attackRoll(toHit);

//while (player.isAlive) {
//attackRoll(toHit);
//  if(youHit > monster.armorClass){
//    consle.log("You Hit");
//  }
//  else{
//    consle.log("You Miss");
//  }
//}
