

const profile = {
    role:"Application Developer",
    company:"IBM",
}

function printProfile(city, country){
    console.log(`${this.role} - ${this.company} - ${city}, ${country}`);
}

const returnedFunction = printProfile.bind(profile, "hydrabad","India")

returnedFunction()