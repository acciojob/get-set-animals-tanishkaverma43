class Animal {
	constructor(species){
		this.species = species;
	}

	getSpecies(){
		return this.species;
	}

	makeSound(){
		// Implement this in derived classes
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;