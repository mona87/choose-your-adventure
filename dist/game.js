function* chooseYourAdventure() {
	// console.log(yield adventure.say('Hey there!'));
	// console.log(yield adventure.say('Woah', 'This is cool'));
	// console.log(yield adventure.ask('Woah', 'This is cool'));
	// console.log(yield adventure.choose('Woah', 'This is cool', 'Hello world'));
	// console.log(yield adventure.say('That\'s all folks!', 'THE END'));



var name;
var weapon;
var answer;



console.log(yield adventure.say('Hello! Welcome to War Games!', 'Press continue to start the game.'));

name = yield adventure.ask('What is your name?',' Press continue.');

answer = yield adventure.choose(' Hello ' + name +'! Are you over 18?', 'Yes', 'No');

	if (answer === 'Yes')
	{

				weapon = yield adventure.choose(' Choose your weapon:','rifle','bazooka', 'grenade');



				if(weapon === 'rifle' || weapon === 'bazooka' || weapon === 'grenade'){

					console.log(adventure.say('A ' + weapon + ' is an awesome choice! You\'re now ready for battle!'));

				}

	}else {

				console.log(adventure.say('Sorry ' + name +', you\'re not old enough to play!'));
			}

}