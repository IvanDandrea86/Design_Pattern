interface Computer {
    brand:string;
    os:string;
    getModel():string;
    boot(): string;
    shoutDown():string;
    display():string;
    print():string;
    render3D():string
}

class ConcreteComputer implements Computer {
    brand: string;
    os:string;
    constructor(brand:string,os:string){
        this.brand=brand;
        this.os=os;
    };
    public getModel():string{
        return this.brand;
    }
    public boot(): string {
       return `${this.display()} ${this.print()} ${this.render3D()}`
        
        
        
       
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
     brand: string;
    os: string;
    constructor(component: Computer) {
        this.component = component;
       this.brand=component.brand;
        this.os=component.os;
    }
    
    /**
     * The Decorator delegates all work to the wrapped component.
     */
     public getModel():string{
        return this.component.brand;
    }
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
        return `I ${super.display()} with Monitor`;
    }
 }
 class Printer extends ComputerDecorator{
    public print(): string {
        return `I ${super.print()} with Printer`;
    }
 }
 class GPU extends ComputerDecorator{
    public render3D(): string {
        return ` I ${super.render3D()} with GPU`;
    }
 }

 function runComputer(component: Computer) {
    // ...

    console.log(`running: ${component.boot()}`);

    // ...
}
export default()=>{
 let ComputerLinux = new ConcreteComputer("Asus","Windows");
 let ComputerMac =new ConcreteComputer("Lenovo","Ubuntu");

 let LinuxwithPrinter= new Printer(ComputerLinux);
 let MacwithGPU= new GPU(ComputerMac);
 let MacwithGPUandMonitopr =new Monitor(MacwithGPU);
console.log(`I am ${MacwithGPU.getModel()} and ${MacwithGPU.print()}`)
console.log(`I am ${MacwithGPU.getModel()} and ${MacwithGPU.render3D()}`)
console.log(`I am ${MacwithGPU.getModel()} and ${MacwithGPU.display()}`)
console.log(`I am ${LinuxwithPrinter.getModel()} and ${LinuxwithPrinter.print()}`)
console.log(`I am ${LinuxwithPrinter.getModel()} and ${LinuxwithPrinter.render3D()}`)
console.log(`I am ${LinuxwithPrinter.getModel()} and ${LinuxwithPrinter.display()}`)
console.log(`I am ${MacwithGPUandMonitopr.getModel()} and ${MacwithGPUandMonitopr.print()}`)
console.log(`I am ${MacwithGPUandMonitopr.getModel()} and ${MacwithGPUandMonitopr.render3D()}`)
console.log(`I am ${MacwithGPUandMonitopr.getModel()} and ${MacwithGPUandMonitopr.display()}`)
runComputer(MacwithGPU)
}
    