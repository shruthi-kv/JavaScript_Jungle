// 'use Strict'
// console.log(this)

// function thisKeyword(){
//     console.log(this)
// }

// thisKeyword()


// const obj={
//     name:'Shruthi',
//     print: function(){
//         console.log(this.name)
//     },
//     arrowPrint : ()=>{
//         console.log(this.name)
//     }
// }
// obj.print()
// obj.arrowPrint()



function outterFunction(){
    const name = "Shruthi KV";

    const innerFunction = () =>{
        console.log(this.name)
    }
    innerFunction()
}

outterFunction()