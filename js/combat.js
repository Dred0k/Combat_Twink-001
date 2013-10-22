/**
 * Player Object. 1 Player.
 * @type {Object}
 */
var weapons = {
	axe: {
		d: 12,
		name: 'Vorpal Axe of Pwnage'
	},
	sword: 10,
	dagger: 6
};

var player = {
	isAlive: true,
	hitpoints: 20,
	armorClass: 18,
	toHit: 3,
	toDamage: 5,
	toCrit: 0.20,
	name: 'Dredok',
	weapon: weapons.axe
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
	diceRoll: function(sides){
		return Math.floor(
			(Math.random() * parseInt(sides, 10)) + 1
		);
	},
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
			var diceRoll = combat.diceRoll(20);
			var damageRoll = combat.diceRoll(player.weapon.d) + player.toDamage;
			/**
			 * Did you hit with your mods?
			 */
			if(diceRoll >  monsters[monster].armorClass - player.toHit){
				monsters[monster].hitpoints = monsters[monster].hitpoints - damageRoll;
				/**
				 * Did you kill it?!?!
				 */
				if(monsters[monster].hitpoints <= 0){
					monsters[monster].isAlive = false;
				}
				utils.toLog(player.name + ' hits ' + monsters[monster].name + ' ' + monster + '(' + diceRoll + ') for ' + damageRoll + ' with his ' + player.weapon.name, 'Monster Stats', monsters);
			/**
			 * Missed!
			 */
			} else {
				utils.toLog(player.name + ' miss ' + monsters[monster].name  + ' ' + monster + '(' + diceRoll + ')!', 'Monster Stats', monsters);
			}
			return diceRoll;
		/**
		 * It's already dead! Stop attacking it!
		 */
		} else {
			utils.toLog(monsters[monster].name + ' ' + monster + ' is already dead!', 'Monster Stats', monsters);
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
var utils = {
	toLog: function(text){
		var log = $('.log');
		var currentText = log.val();
		log.val(currentText + '\r\n' + text);
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
		combat.attackRoll(player, Math.floor( ( Math.random() * (monsters.length) ) + 0));
	});
	
});