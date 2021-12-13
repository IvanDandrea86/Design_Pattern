interface Computer {
    model:string;
    boot(): string;
    shoutDown():string;
    display():string;
    print():string;
    render3D():string
}

class ConcreteComputer implements Computer {
    model:string;
    constructor(model:string){
        this.model=model;
    };

    public boot(): string {
        return (`${this.display()} ${this.print()} ${this.render3D()}`)
    }
    public shoutDown(): string {
        return("Computer shouting down")
    }
    public display(): string {
        return("Display");
    }
    public print(): string {
        return("Print");
    }
    public render3D(): string {
       return ("Render");
    }
}

class ComputerDecorator implements Computer{
     component: Computer;
   model:string;
    constructor(component: Computer) {
        this.component = component;
       this.model=component.model;
    }
    
    /**
     * The Decorator delegates all work to the wrapped component.
     */
    public boot():string {
      return  this.component.boot();
    }  
    public shoutDown(): string {
        return this.component.shoutDown();
    }
    public print(): string {
        return this.component.print();
    }
    public render3D(): string {
        return this.component.render3D();
    }
    public display(): string {
        return this.component.display();
    } 
 }

 class Monitor extends ComputerDecorator{
    public display(): string {
        return `I have monitor i can ${super.display()}`;
    }
 }
 class Printer extends ComputerDecorator{
    public print(): string {
        return `I have printer i can ${super.print()}`;
    }
 }
 class GPU extends ComputerDecorator{
    public render3D(): string {
        return `I have GPU i can ${super.render3D()}`;
    }
 }

export default()=>{
 let ComputerLinux = new ConcreteComputer("Linux");
 let ComputerMac =new ConcreteComputer("MacBookAir");

 let LInuxwithPrinter= new Printer(ComputerLinux);
 let MacwithGPU= new GPU(ComputerMac);
 let MacwithGPUandMonitopr =new Monitor(MacwithGPU);
console.log(`I am ${MacwithGPU.model} and ${MacwithGPU.print()}`)
console.log(`I am ${MacwithGPU.model} and ${MacwithGPU.render3D()}`)
console.log(`I am ${MacwithGPU.model} and ${MacwithGPU.display()}`)
console.log(`I am ${LInuxwithPrinter.model} and ${LInuxwithPrinter.print()}`)
console.log(`I am ${LInuxwithPrinter.model} and ${LInuxwithPrinter.render3D()}`)
console.log(`I am ${LInuxwithPrinter.model} and ${LInuxwithPrinter.display()}`)
console.log(`I am ${MacwithGPUandMonitopr.model} and ${MacwithGPUandMonitopr.print()}`)
console.log(`I am ${LInuxwithPrinter.model} and ${LInuxwithPrinter.render3D()}`)
console.log(`I am ${LInuxwithPrinter.model} and ${LInuxwithPrinter.display()}`)
}
    