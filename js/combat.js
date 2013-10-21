/**
 * Player Object. 1 Player.
 * @type {Object}
 */
var player = {
	isAlive: true,
	hitpoints: 20,
	armorClass: 18,
	toHit: 3,
	toDamage: 5,
	toCrit: 0.20,
	name: 'Dredok'
};

/**
 * Monster Base Class. Will pull from separate file. 
 * Why do we make this a function? Because if we make it an object we cannot clone it, it will point to the same object in memory. 
 * We need to call it as a new monster "class" or function.
 * @type {Object}
 */
var monster = function(){
	return {
		isAlive: true,
		hitpoints: 10,
		armorClass: 14,
		toHit: 0,
		name: 'Troll'
	};
};
/**
 * Multiple Monsters. 3 Monsters based off Monster Class.
 * @type {Array}
 */
var monsters = [
	new monster(),
	new monster(),
	new monster()
];

var combat = {
	/**
	 * Attack Roll Function. Does Damage!
	 * @param  {object} player  player object with status
	 * @param  {object} monster Monster Object with stats
	 * @return {void}         returns nothing, removes stuff from monster array of objects.
	 */
	attackRoll: function(player, monster) {
		/**
		 * Is Monster Alive?
		 */
		if(monsters[monster].isAlive){
			/**
			 * Random Hit!
			 * @type int
			 */
			youHit = Math.floor(
				(Math.random() * 20) + 1
			);
			/**
			 * Did you hit with your mods?
			 */
			if(youHit >  monsters[monster].armorClass - player.toHit){
				monsters[monster].hitpoints = monsters[monster].hitpoints - player.toDamage;
				/**
				 * Did you kill it?!?!
				 */
				if(monsters[monster].hitpoints <= 0){
					monsters[monster].isAlive = false;
				}
				console.log(player.name + ' hits ' + monsters[monster].name + ' ' + monster + '(' + youHit + ') for ' + player.toDamage + '!', 'Monster Stats', monsters);
			/**
			 * Missed!
			 */
			} else {
				console.log(player.name + ' miss ' + monsters[monster].name  + ' ' + monster + '(' + youHit + ')!', 'Monster Stats', monsters);
			}
			return youHit;
		/**
		 * It's already dead! Stop attacking it!
		 */
		} else {
			console.log(monsters[monster].name + ' ' + monster + ' is already dead!', 'Monster Stats', monsters);
		}
	},
	/**
	 * Sample functions for Defense Roll
	 * @param  {[type]} player [description]
	 * @param  {[type]} toHit  [description]
	 * @return {[type]}        [description]
	 */
	defenseRoll: function(player, toHit){

	},
	/**
	 * Sample functions for Saving Roll
	 * @param  {[type]} player [description]
	 * @param  {[type]} toHit  [description]
	 * @return {[type]}        [description]
	 */
	savingRoll: function(player, difficulty){

	}
};
/**
 * jQuery Actions
 * @return void
 */
$(document).ready(function(){
	
	$(document).on('click', '.roll', function(){
		/**
		 * Attack Random Monster
		 */
		combat.attackRoll(player, Math.floor( ( Math.random()* (monsters.length) ) + 0));
	});
	
});