// CODE here for your Lambda Classes


// Person 

class Person{
    constructor(attrs){
        this.newName = attrs.name,
        this.newAge = attrs.age,
        this.newLocation = attrs.location
    }
    speak(){
        console.log(`Hello, my name is ${this.newName} and I am from ${this.newLocation}.`);
    }
}


class Instructor extends Person{
    constructor(instruAttrs){
        super(instruAttrs);
this.newSpecialty = instruAttrs.specialty,
this.newFavlanguage = instruAttrs.favLanguage,
this.newCatchphrase = instruAttrs.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning ${subject}`);
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}// Instructor 

class Students extends Person{
    constructor(stuAttrs){
        super(stuAttrs);
        this.newPreviousbackground = stuAttrs.previousBackground,
        this.newClassname = stuAttrs.className,
        this.newFavsubjects = stuAttrs.favSubjects;

    }
    listsSubjects(){
        console.log(`${this.newName} favorite subjects are: ${this.newFavsubjects}`)
    }
    PRAssignment(subject){
        console.log(`${this.newName} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.newName} has begun sprint challenge on ${subject}`)
    }
}//Student 


class Projectmanagers extends Instructor{
    constructor(pmAttrs){
        super(pmAttrs);
        this.newGradclassname = pmAttrs.gradClassName,
        this.Favinstructor = pmAttrs.favInstructor;
    }
standup(slack){
    console.log(`${name} announces ${channel}, @channel standy times!`);

}
debugsCode(student, subject){
    console.log(`${name} debugs ${student.name}'s code on ${subject}.`);
}
}// ProjectManagers


// Person, Instructor, ProjectManagers, 


const fred = new Person({
 
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });


  const Bam = new Person({
    name: 'Bam',
    location: 'Bedrock',
    age: 34,
    favLanguage: 'Python',
    specialty: 'Back-End',
    catchPhrase: `I prefer the back`
  });


  const Nick = new Students({
    name: 'Nick',
    location: 'Twinrock',
    age: 23,
    previousBackground: 'Starbucks',
    className: 'Intro-Javascript',
    favSubjects: ['CSS' , 'Javascript' , 'AI']
  });

  const Will = new Students({
    name: 'Will',
    location: 'Twinrock',
    age: 21,
    previousBackground: 'Lyft',
    className: 'Adv-Javascript',
    favSubjects: ['HTML' , 'Javascript' , 'Python']
  });

  const MrFrank = new Instructor({
    name: 'Mr.Frank',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });


//Person 
console.log(fred.speak());
console.log(Bam.speak());

//Instructor Methods
console.log(MrFrank.demo('Intro-Javascript'));

//Student 
console.log(Nick.listsSubjects());
console.log(Nick.PRAssignment('Intro-Javascript'));
console.log(Nick.sprintChallenge('Intro-Javascript'));
console.log(Will.listsSubjects());
console.log(Will.PRAssignment('Adv-Javascript'));
console.log(Will.sprintChallenge('Adv-Javascript'));

//ProjectManager

