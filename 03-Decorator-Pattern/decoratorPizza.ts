interface Pizza {
    name: string;
    cost:number
    order():string;
    price():number;
    getName():string;
}

class concretePizza implements Pizza{
     name:string;
     cost:number
    constructor (name:string){
        this.name=name;
        this.cost=10;
}
public getName(): string {
    return this.name;
}
public order():string{
    return `You order ${this.name}`
}
public price():number{
    return this.cost
}
}

class PizzaTopping implements Pizza{
    pizza:Pizza;
    name:string;
    cost:number
   constructor (pizza:Pizza,cost:number){
       this.pizza=pizza
       this.cost=cost;
}
getName(): string {
    return this.pizza.getName();
}
public order():string{
   return this.pizza.order();
}
public price():number{
   return this.pizza.price();
}
}

class Mushrooms extends PizzaTopping{
    name:string ="Funghi ";

    public getName(): string {
        return super.getName() +this.name
    }
    public price(): number {
        return this.cost+super.price();
    }
}
class SpicySalami extends PizzaTopping{
    name:string ="Salame piccante ";
    
    public getName(): string {
        return super.getName() + this.name
    }
    public price(): number {
        return this.cost+super.price();
    }
}

const bill=(pizza: Pizza)=> {
    console.log(`You ordered ${pizza.getName()}`)
    console.log(`The bill is: ${pizza.price()}`);
}

export default()=>{
let pizza= new concretePizza("Margerita ");
let pizzaMushroom = new Mushrooms(pizza,3);
let pizzaDiavola = new SpicySalami(pizza,4)
bill(pizzaMushroom);
bill(pizzaDiavola);
let Special = new SpicySalami(pizzaMushroom,4);
bill(Special);


}



