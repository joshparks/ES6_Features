class User {
	
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	
	getName() {
		return this.name;
	}
	
	getAge() {
		return this.age;
	}
	
	increaseAge() {
		this.age += 1;
	}
	
	toString() {
		return "Name: " + this.name + ", Age: " + this.age;
	}
	
}