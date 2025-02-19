// const add = (n1,n2) => n1+n2
// console.log(add(10,20))
// const isEven = (n1) => {
// if(n1%2 ==0)
// return true;
// else
// return false;
// }
// console.log(isEven(9))
// const names = ['TutorialsPoint','Mohtashim','Bhargavi','Raja']
// // names.map((element,index)=>
//  names.map((element,index)=>
//     {
// console.log('inside arrow function')
// console.log('index is '+index+' element value is :'+element)
// // })
// function Student(rollno,firstName,lastName) {
//     this.rollno = rollno;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.fullNameUsingAnonymous = function(){
//     setTimeout(function(){
//     //creates a new instance of this ,hides outer scope of this
//     console.log(this.firstName+ " "+this.lastName)
//     },2000)
//     }
//     this.fullNameUsingArrow = function(){
//     setTimeout(()=>{
//     //uses this instance of outer scope
//     console.log(this.firstName+ " "+this.lastName)
//     },3000)
//     }
//     }
//     const s1 = new Student(101,'Mohammad','Mohtashim')
//     s1.fullNameUsingAnonymous();
//     s1.fullNameUsingArrow();
//constructor function
function Student(rollno,firstName,lastName) {
    this.rollno = rollno;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullNameUsingAnonymous = function(){
    setTimeout(function(){
    //creates a new instance of this ,hides outer scope of this
    console.log(this.firstName+ " "+this.lastName)
    },2000)
    }
    this.fullNameUsingArrow = function(){
    setTimeout(()=>{//uses this instance of outer scope
        console.log(this.firstName+ " "+this.lastName)
        },3000)
        }
        }
        const s1 = new Student(101,'Mohammad','Mohtashim')
        s1.fullNameUsingAnonymous();
        s1.fullNameUsingArrow();