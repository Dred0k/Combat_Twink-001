// test GitHub upload

//Notes: how can we scale % with player level? 
//Use scale as a multiplier for all stats after the level of the monster vs the level of the player. 

var Monsters = {
	loadMonster: function(monster){
		return Monsters.monster(monster);
	},
	difficulty: {},
	monster: {
		large_rat: {
			name: 'Large Rat',
			difficulty: 10,
			level: 1,
			scale: 0.20
		},
		kobold: {
			name: 'Large Rat',
			difficulty: 10,
			level: 10,
			scale: 0.20
		}
	}
};

for(var monster in Monsters.monster){
	Monsters.difficulty[monster] = Monsters.monster[monster].difficulty;
}

console.log(Monsters);

//monster stats
//Monsters can have normal advanced and named version
//=============================================
//low level encounters

Lage Rats
	Named Rat(Plaue Bringer)

Mites


Kobalds
	advanced Kobald
	Named 


Goblins
	advanced Goblins
	Goblin warrior
	Goblin shamen
	Goblin Chief
	

BugBear



//=============================================
//medium level encounters

Bandits

Troll

Minatour

Hill Giant


//=============================================
//High level encounters

Iron Golem


//=============================================
//Epic level encounters

Dragons





//=============================================
// Realms
// Realms will control the % chance to encounter monsters


Areana // PVP Area

Explore //% to find/unlock Realms


Forest

swamp

Mountains

Island

Plains


Dungeon // named dungeons for low - high



Bandit Encampment


//=============================================
// encounter chace
