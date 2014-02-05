// Part 1

var Fooditem = function(name, calories, isVegan, isGF, isCF) {
	this.name = name;
	this.calories = calories;
	this.vegan = isVegan;
	this.glutenFree = isGF;
	this.citrusFree = isCF; 
}

Fooditem.prototype.toString = function() {
	var vegan = this.vegan ? "- vegan " : "";
	var gf = this.glutenFree ? "- gluten free " : "";
	var cf = this.citrusFree ? "- citrus free " : "";
	return this.name  + " - " + this.calories + "cal. " + vegan + gf + cf + "\n" ;
}


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
	"It has: " + 
	this.ingredients.join("");
}


var Plate = function(name, description, price, arrFoodItem) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = arrFoodItem;
};

Plate.prototype.toString = function() {
	return this.name + "\n" + 
	this.description + "\n" + 
	"$" + this.price + "\n" + 
	"It has: " + 
	this.ingredients.join("") + " \n";
};
Plate.prototype.isVegan = function(aryFoodItem){
	var veganCheck = true;
	for (var i=0; i<this.ingredients.length;i++){
		if (this.ingredients[i].vegan){	
		
		} 
		else {
			veganCheck = false;
		}
	}
	return veganCheck;
};
Plate.prototype.isGlutenFree = function(aryFoodItem){
	var gfCheck = true;
	for (var i=0; i<this.ingredients.length;i++){
		if (this.ingredients[i].glutenFree){	
		
		} 
		else {
			gfCheck = false;
		}
	}
	return gfCheck;
};
Plate.prototype.isCitrusFree = function(aryFoodItem){
	var citrusCheck = true;
	for (var i=0; i<this.ingredients.length;i++){
		if (this.ingredients[i].citrusFree){	
		
		} 
		else {
			citrusCheck = false;
		}
	}
	return citrusCheck;
};

var Order = function(arrPlates) {
	this.plates = arrPlates;
};

Order.prototype.toString =  function() {
	var newarr = map(this.plates, function(item) {
		return  item.toString()
	});
	return newarr.join("")
};


var Menu = function(arrPlates) {
	this.plates = arrPlates;
};

Menu.prototype.toString =  function() {
	var newarr = map(this.plates, function(item) {
		return  item.toString()
	});
	return newarr.join("")
};

var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
};
Restaurant.prototype.toString = function(){
	return this.name + "\n" +
		this.description + "\n" +
		this.menu;
}

var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
};
Customer.prototype.toString = function(){
	return this.dietaryPreference;
};

var pizza = new Fooditem("pizza", 700, false, false, true);
var turduken = new Fooditem("turduken", 2000, false, true, true);
var broccoli = new Fooditem("broccoli", 40, true, true, true);
var fries = new Fooditem("fries", 300, true, false, true);
var water = new Fooditem("water", 0, true, true, true);
var sierraMist = new Fooditem("sierra mist", 90, true, true, false);
var grillCheese = new Fooditem("grilled cheese", 500, false, false, true);
var macNCheese = new Fooditem("mac and cheese", 800, false, false, true);
var hamburger = new Fooditem("hamburger", 1200, false, false, true);

var beer = new Fooditem("beer", 180, true, false, true);
var tortilla = new Fooditem("tortilla", 100, true, false, true);
var burritoFilling = new Fooditem("burrito filling", 600, false, false, false);
var avocado = new Fooditem("avocado", 250, true, true, true);
var salsa = new Fooditem("salsa", 150, true, true, false);
var tequila = new Fooditem("tequila", 69, true, true, true);
var margaritaMix = new Fooditem("margarita mix", 200, true, true, false);
var spanishRice = new Fooditem("spanish rice", 100, false, true, true);
var chips = new Fooditem("tortilla chips", 200, true, false, false);


var burritoPlate = new Plate("burrito plate", "burrito with rice and a beer", 12, [tortilla,burritoFilling,salsa,beer]);
var guacamolePlate = new Plate("guacamole plate", "guacamole with chips", 8, [chips, avocado, salsa]);
var MargaritaDrink = new Drink("margarita", "frozen margarita drink", 6, [tequila, margaritaMix]);

var restaurantMenu = new Menu([burritoPlate, guacamolePlate, MargaritaDrink]);

var itDiner = new Restaurant("IT Diner", "Coolest Diner in the World", restaurantMenu);


itDiner.toString();

var Plate1 = new Plate("pizza plate", "lots of cheese", 8, [pizza, beer]);
var Plate2 = new Plate("mac and cheese plate", "more cheese", 6, [macNCheese, broccoli, water]);
var Plate3 = new Plate("hamburger plate", "juicy and nice", 10, [hamburger, fries, sierraMist]);

// var arrOfPlates = [Plate1, Plate2, Plate3];

// var newOrder = new Order(arrOfPlates);

// newOrder.toString();






