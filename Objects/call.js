const obj = {
    name:"Shruthi",
    age:"25",
    print: function(){
        console.log(` ${this.name} - ${this.age}`)
    }
}
const obj2 ={
    name:"katrina",
    age:"30"
}
obj.print.call(obj2)