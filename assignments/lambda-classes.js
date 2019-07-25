// CODE here for your Lambda Classes


// Person 

class Person{
    constructor(attrs){
        this.newName = attrs.name,
        this.newAge = attrs.age,
        this.newLocation = attrs.location
    }
    speak(){
        console.log(`Hello, my name is ${this.newName} and I am from ${this.newLocation}.`)
    }
}


class Instructor extends Person{
    constructor(instruAttrs){
        super(instruAttrs);
this.newSpecialty = instruAttrs.specialty,
this.newFavlanguage = instruAttrs.favLanguage,
this.newCatchphrase = instruAttrs.catchPhrase;
    }
    
}