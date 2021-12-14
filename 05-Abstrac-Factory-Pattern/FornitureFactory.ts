interface FornitureFactory {
    createSofa(): Sofa;

    createTable(): Table;
}

class ClassicFactory implements FornitureFactory {
    public createSofa(): Sofa {
        return new ClassicSofa();
    }

    public createTable(): Table {
        return new ClassicTable();
    }
}

class ModerFactory implements FornitureFactory {
    public createSofa(): Sofa {
        return new ModernSofa();
    }

    public createTable(): Table {
        return new ModernTable();
    }
}
interface Sofa {
    usefulFunctionA(): string;
}


class ClassicSofa implements Sofa {
    public usefulFunctionA(): string {
        return 'A Classic Sofa';
    }
}

class ModernSofa implements Sofa {
    public usefulFunctionA(): string {
        return 'A Modern Sofa';
    }
}
interface Table {
    usefulFunctionB(): string;
    anotherUsefulFunctionB(paring: Sofa): string;
}


class ClassicTable implements Table {
    public usefulFunctionB(): string {
        return 'A Classic Table';
    }
    public anotherUsefulFunctionB(paring: Sofa): string {
        const result = paring.usefulFunctionA();
        return `A Classic Table with the with (${result})`;
    }
}

class ModernTable implements Table {
    public usefulFunctionB(): string {
        return 'A Modern table';
    }
    public anotherUsefulFunctionB(paring: Sofa): string {
        const result = paring.usefulFunctionA();
        return `A Modern Table with  (${result})`;
    }
}

function clientCode(factory: FornitureFactory) {
    const productA = factory.createSofa();
    const productB = factory.createTable();

    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

/**
 * The client code can work with any concrete factory class.
 */
export default ()=>{
console.log('Client: Pairing the same forniture from the Classic Factory...');
clientCode(new ClassicFactory());

console.log('');

console.log('Client: Pairing the same forniture from the Modern Factory...');
clientCode(new ModerFactory());
}

