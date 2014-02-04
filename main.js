// Part 1

var Fooditem = function(name, calories) {
	this.name = name;
	this.calories = calories;
	this.vegan = false;
	this.glutenFree = false;
	this.citrusFree = false; 
}

Fooditem.prototype.toString = function() {
	return this.name   + " contains " + this.calories + " calories . Vegan: " + this.vegan + ", Gluten Free: " + this.glutenFree + ", Citrus Free: " + this.citrusFree + "." ;
}

var pizza = new Fooditem("pizza", 700)

var turduken = new Fooditem("turduken", 2000)

var broccoli = new Fooditem("broccoli", 40)






// Part 2

var Drink = function(name, description, price, arrFoodItem) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = arrFoodItem
}

Drink.prototype.toString = function () {
	return this.name + "\n" + 
	this.description + "\n" + 
	"$" + this.price + "\n" + 
	"List of ingredients: " + 
	this.ingredients
}


var Plate = function(name, description, price, arrFoodItem) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = arrFoodItem
}

Plate.prototype.toString = function() {
	return this.name + "\n" + 
	this.description + "\n" + 
	"$" + this.price + "\n" + 
	"List of ingredients: " + 
	this.ingredients + " \n"
}

var Order = function(arrPlates) {
	this.plates = arrPlates;
// }
// Order.prototype.arrOfPlates = function(plates)
}

Order.prototype.toString =  function() {
	var newarr = map(this.plates, function(item) {
		return  item.toString()
	});
	return newarr.join("")
}


var Menu = function(arrPlates) {
	this.plates = arrPlates;
}

var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
}

var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
}


var Plate1 = new Plate("pizza", "lots of cheese", 8, ["cheese", "tomatoe" , "basil"])
var Plate2 = new Plate("mac and cheese", "more cheese", 6, ["cheese", "macaroni", "butter"])
var Plate3 = new Plate("hamburger", "juicy and nice", 10, ["beef", "lettuce", "cheddar"])

var arrOfPlates = [Plate1, Plate2, Plate3]

var newOrder = new Order(arrOfPlates)

newOrder.toString()






