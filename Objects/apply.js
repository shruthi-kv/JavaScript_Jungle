const person ={
    name:"Alia",
    age:"28",
}

function printPerson(city, country){
    console.log(` ${this.name} - ${this.age} from ${city}, ${country}`)
}

printPerson.apply(person, ["Bangalore", "India"])