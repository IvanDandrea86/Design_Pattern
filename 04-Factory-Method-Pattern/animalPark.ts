abstract class AnimalFactory{
    public abstract createAnimal(size?: string,):Animal;

  
}

class RandomAnimalFactory extends AnimalFactory{
    public createAnimal() {
       let random =(Math.floor(Math.random() * 3)+1)
       if (random == 1) {
        return new Lion();
    
       } else if (random == 2) {
        return new Dog();
       }
       else{
        return new Cat();
    }
}
}
class SizeAnimalFactory extends AnimalFactory{
    public createAnimal(size?:string):Animal {
        if (size=== "big"){
            return new Lion();    
        }
        if (size== "small"){
            return new Cat();    
        } 
        else {
            return new Dog();    
        } 
    }
}

interface Animal{
    size:string;
    getType():string;
}

class Lion implements Animal{
    size="big";
    getType(): string {
        return `Lion 🦁`;
    }
} 
class Cat implements Animal{
    size="small";
    getType(): string {
        return `Cat 😼`;
} 
}
class Dog implements Animal{
    size="medium";
    getType(): string {
        return `Dog 🐕`;
    }
} 

const AnimalStore =(creator: AnimalFactory)=> {
    // ...
    console.log('Client: I\'m not aware of the animal\'s class, but i will get one.');
    let animal=creator.createAnimal();
    console.log("Client: I Got a ",animal.getType(),"🤗");
    // ...
}
const AnimalSizeStore =(creator: AnimalFactory,size?:string)=> {
    // ...
    console.log('Client: I\'m  aware of the animal\'s size, so i will ask for a size');
    let animal=creator.createAnimal(size);
    console.log(`Client: I asked for a ${size} and i Got a `,animal.getType(),"🤗");
    // ...
}

export default()=>{
    console.log("====Random Animal Store====")
let store = new RandomAnimalFactory();
for( let i=0; i<=3; i+=1){
AnimalStore(store);
}
console.log("====Size Animal Store====")
 store= new SizeAnimalFactory();
let size="small";
AnimalSizeStore(store,size);
 size="medium";
 AnimalSizeStore(store,size);
 size="big"
 AnimalSizeStore(store,size);
}
