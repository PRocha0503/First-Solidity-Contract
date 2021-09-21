// Imports
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

// exp create a new instance of web 3, the argument is the etherum network we are connecting to
const web3 = new Web3(ganache.provider());

//exp clase para probar motcha
class Car {
	park() {
		return "stopped";
	}
	drive() {
		return "brum";
	}
}

// Motcha

// exp no hay relacion con el string y la clase, solo es referencia
// e2 esto se ejecuta antes de cada it en el describe
let car;
beforeEach(() => {
	car = new Car();
});
// e2 son pruebas, cada it es una prueba
describe("Car Class", () => {
	it("It can park", () => {
		assert.equal(car.park(), "stopped");
	});
	it("It can drive", () => {
		assert.equal(car.drive(), "brum");
	});
});
