
// let name='zubair'
// console.log(name)


let name;
function abc(){
    name='zubair'
    
}
abc()
console.log(name)





// Template Literal In ES6
let fname='zubair'
let lname='Minhas'
console.log(`My First Name Is ${fname} ${lname}`)

// Or Es5
console.log('My First Name Is '+fname+' '+lname)




// Array Destructing in Es6

let enumb =[2,4,6,8];
[n1,n2]=enumb
console.log(n1,n2) //2 4

// In Es5
 enumb=[2,4,6];
n1=enumb[0]
n2=enumb[1]
n3=enumb[2]
console.log(n1,n2,n3)  //2 4 6


// 2 Array Concat in ES5
let array1=[2,4,6]
let array2=[1,3,5]
let farray=array1.concat(array2)
console.log(farray)



// 2 Array Concat in ES6 By spread Operator(...Array Name)
var Farr=[...array1, ...array2]
console.log(Farr)
Farr=['new data',...array2]
console.log(Farr)


// Object Destructing in ES5
var obj1={
    Name:'Zubair',
    class:'BSC',
    univerty:'ETC'

}
n1=obj1.Name
n2=obj1.class
n3=obj1.univerty
console.log(n1,n2,n3)


// Object Destructing in ES5
let person = {sname: "Sarah", country: "Nigeria", job: "Developer"};

let {sname, country, job} = person;

console.log(sname,country,job);



// object Concat In ES6
let sch={
    univerty:'ABC'
}
let S1={
    Name:'ASAD',
    RollNo:45,
}
a={...S1,sch}     //   {Name: "ASAD", RollNo: 45, sch: {…}}
console.log(a)

a=Object.assign(sch)
console.log(a)       //{univerty: "ABC"}



// if else in ES5
var age=30
if(age>18){
    console.log('Go Outside')
}
else{
    console.log(' Not Go Outside')
}



// if else in ES6(Tenary Operator)
let Age=30
Age>18
? console.log('Go Outside')
: console.log(' Not Go Outside')



// Asyc or syc

// input:
// Number 1
// number 2
// number 3

// Required Output :
// Number 2
// number 3
// number 1

console.log('number 1')
console.log('number 2')
console.log('number 3')
// Output  Javascript Code Run Line By Line
// number 1
// number 2
// number 3


setTimeout(function(){
    console.log('number 1')
},1000)
console.log('number 2')
console.log('number 3')

// Output
// number 2
//  number 3
//  number 1


var f_name;
setTimeout(function(){
    f_name='Asad'
    console.log(f_name)   //after  1 sec Asad
},1000)

console.log(f_name)   //Undefined 



//Promise
var promise=new Promise(function(resolve,reject){
    var kfc='open'
    if(kfc=='open'){
        resolve('KFC OPEN')
    }
    else{
        reject('KFC CLOSE')
    }
})
console.log(promise)
promise.then(function(data){
    console.log(`Resolve ===>${data}`)
})
.catch(function(error){
    concat.log(`Reject ===>${error}`)
})


// Simple Function
function abc(){
    console.log('function Call')
}
abc()

// Anoyomn Function
let foo=function(){
    console.log('function Call')
}
foo()

// arrow Function
let a_fun =()=>{
    console.log('function Call')
}
a_fun()


let s_fun = _ => {
    console.log('function Call')
}
s_fun()

// if arrugmnet only one in function
let hee = name1=>{
    console.log(`Hello ${name1}`)
}
hee('zubair')


// if arrugmnet more than one in function
let hee2 = (name1,name2)=>{
    console.log(`Hello ${name1}  ${name2}`)
}
hee2('Zubair','Minhas')


//return Value From Function
let r_fun = ()=>{
    return 'Zubair'
}
console.log(r_fun()) 

// OR

let r2_fun = ()=> 'Zubair'
console.log(r2_fun()) 


//CALL BACK FUNCTCION
let M_Fun= (c_fun) =>{
    setTimeout(()=>{c_fun('ZUBAIR')},3000)
}

function c_fun(data){
    
    console.log(`Call Back ${data}`)
}
M_Fun(c_fun)


//ARRAY FUNCTION


// Filter Function
let Array=[{name:'Ghous',age:20},{name:'Basit',age:30}]
console.log(Array)
let filter=Array.filter((a)=>{console.log(a)})

 filter=Array.filter((a)=>a.age==20)
 console.log(filter)

 filter=Array.filter((a)=>a.age==30)
 console.log(filter)

// Map Function 
let Arr=[1,2,3,4]

let Multi=Arr.map(a=>a*a)

console.log(Arr)   //[1,2,3,4]
console.log(Multi)  //[1,4,9,16]

let A_obj=[{name:'Zubair'},{name: 'Akber'}]
let C_name=A_obj.map(a => a.name ='Zubair' )
console.log(C_name)



fetch('http://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log('Data :',data))
  .catch(error => console.log('Error :',error))


  async function abc(){
      data = await fetch('http://jsonplaceholder.typicode.com/todos/1')

      console.log(data)

    
  }


  //Constructor In ES5 >>Class
//   function School(name,RollNo){
//       this.name=name
//       this.RollNo=RollNo
//   }

//   let std1=new School('zubair',12)
//   console.log(std1)


//   Class in ES6

class School{
    constructor(name,RollNo){
        this.name=name
        this.RollNo=RollNo
    }
}

let std1=new School('zubair',12)
console.log(std1)
