interface ISubject {
    subscribe(observer: Observer):void
    unsubscribe(observer: Observer):void
    notify(news:String):void
}

interface IObserver {
    update(news:string):void
}

class SocialMedia implements ISubject {
    private observers:Observer[] = [];
    subscribe(observer:Observer) {
        this.observers.push(observer)
    }
    unsubscribe(observer:Observer) {
        this.observers = this.observers.filter((element)=>{
            return observer.name !== element.name
        })
    }
    getrRandom(){
        let num= Math.floor(Math.random() * (10 + 1));
        return num;
    }
    //Important!!!!!!
    notify(news:string) {
        this.observers.forEach(observer => {
            observer.update(news);
        })
    }
}

class Observer implements IObserver {
    constructor(public readonly name:string) {}
    private feed:string[] = []; 
    update(news:string) {
        this.feed.push(news)
       console.log(`${this.name} recieved  a news`)
      
    }
    showFeed() {
        console.log(this.name + ":" + this.feed)
    }
}
export default ()=>{
const firstFan = new Observer("Alice");
const secondFan = new Observer("Bob");
const thirdFan =new Observer("Ivan")
const newsFeed = new SocialMedia();

newsFeed.subscribe(firstFan);
newsFeed.subscribe(secondFan);
newsFeed.notify("\n-Today is gonna rain");
newsFeed.unsubscribe(secondFan);
newsFeed.notify("\n-Go by some food");
newsFeed.subscribe(thirdFan);
newsFeed.notify("\n-President say:\"bla bla..\"");
firstFan.showFeed();
secondFan.showFeed()
thirdFan.showFeed();

}