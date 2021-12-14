import observer from "./02-Observer-Pattern/observer";
import strategyPattern from "./01-Strategy-Patterns/strategyPattern";
import socialMedia from "./02-Observer-Pattern/socialMedia";
import decoratorPattern from "./03-Decorator-Pattern/decoratorPattern"
import decoratorComputer from "./03-Decorator-Pattern/decoratorComputer";
import decoratorPizza from "./03-Decorator-Pattern/decoratorPizza";
import SimpleFactoryMethod from "./04-Factory-Method-Pattern/SimpleFactoryMethod";
import animalPark from "./04-Factory-Method-Pattern/animalPark";


console.log("=============Design-Pattern========\n")
strategyPattern();
console.log("=============Observer-Pattern-Example 1========\n")
observer();
console.log("=============Observer-Pattern-Example 2========\n")
socialMedia();
console.log("=============Decorator-Pattern========\n")
decoratorPattern();
console.log("=============Decorator-Pattern Example 1========\n")
decoratorComputer();
console.log("=============Decorator-Pattern Example 2========\n")
decoratorPizza();
console.log("=============Factory-Method-Pattern========\n")
SimpleFactoryMethod();
console.log("=============Factory-Method-Pattern Example 1========\n")
animalPark();