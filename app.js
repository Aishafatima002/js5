// function swap_img() {
//     document.getElementById("swap").src="./images/image2.jpg"
// }
//
// function swaping(swaps,newPic){
//     document.getElementById("swaps").src=newPic
// }
//when was approached
// function swapPic(){
//     document.getElementById("link")
//     linked.herf="https://www.w3schools.com/"
// }

// function myFunction(x) {
//     x.style.background = "yellow";}




// var plan1 = {
//  name: "Basic",
// space: 100,
// transfer: 10,
// pages: 10,
// };
// console.log(plan1,name)
// delete plan1.space
// console.log(plan1)

// const person={

// }
// person.name="aisha"
// person.age="18"
// document.getElementById("demo").innerHTML=person.name+"is"+person.age+"yrs old"


// console.log(person)

// let student = {
//     firstName: "Aisha",
//     lastName: "Fatima",
    
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// // Example usage
// console.log(student.fullName()); // Outputs: "Aisha Fatima"


// constructor function
//  function Student(name,fatherName,age,cls){
//         this.name=name;
//         this.fatherName=fatherName;
//         this.age=age;
//         this.cls=cls;
//  };
//  let student1=new Student("AIZA"," Umer khan",12,"6")
// console.log(student1)
// let student2=new Student("MARIA","moiz ahemad",16,"11")
// console.log(student2)
// console.log(Student)


// function Plan(name, price, space, transfer, pages) {
//     this.doc = name; 
//     this.grumpy = price; 
//     this.sleepy = space; 
//     this.bashful = transfer;
//     this.sneezy =  pages;
    
//     }
//     let plan1=new Plan("basic",100, 100,200,5)
//     console.log(plan1)



    
// function Person(firstName,lastName,age,eye){
//     this.firstName=firstName,
//     this.lastName=lastName,
//     this.age=age,
//     this.eye=eye
// }

// const myFather=new Person("john","alle",43,"blue")
// Person.prototype.nationality="English"
// document.getElementById('demo').innerHTML="the nationality of my father is"+myFather.nationality;

// function MY(name){
//     this.name=name
// }
// MY.prototype.sayHello=function(){
//     return `Hello my name is ${this.name}`
// }

// let aiza=new MY("aiza")

// console.log(aiza.sayHello())
// var size=5
// var a=5
// var sizse=4
// for ( var j = size;  j <5;  j--) {
//    a=a-2
  
    
// }
// console.log(a)

//object method
// let person ={
//     firstName:"john",
//     lastName:"alex",
//     age:19,
//     email:"fatima34@gmail.com",

// sayHello(){
//     console.log("Hello my name is "+this.firstName+" "+this.lastName+" "+car.brand)
// },
// fullName:function(){
// return this.age+" "+this.email
// }
// }
// console.log(person)


// let car={
//     brand:"toyota",
//     model:"jexas",
// }
// console.log(person)
// person.sayHello()
// console.log(person.fullName())

//object constructor function
//  function student(name,cls,age,fatherName,email){
//         this.name=name,
//         this.cls=cls,
//         this.age=age,
//         this.fatherName=fatherName,
//         this.email=email
//  }

//  const student1=  new student("Aisha","12","16","ahemad","123@gmail.com");
//  student1.nationality="pakistan"
//  console.log(student1)

//  const student2=  new student("maryam","12","16","roohan","mk23@gmail.com");
//  console.log(student2)
  
//  function patient(name,age,dc_name,disease,contactNo){
//     this.name=name,
//     this.age=age,
//     this.dc_name=dc_name
//     this.disease=disease
//     this.contactNo=contactNo
//  }

//  patient.prototype.noSlip=56



//  const patient1=new patient("sara",23," Dr Munza","eye infection",923453135)
//  patient1.address="rj hiegts"
//  let my ="age"in patient1
//  console.log(my)
//  console.log(patient1);
//  document.write("<h1>Patient Information</h1>");
//  document.write("<p><strong>Name:</strong> " + patient1.name + "</p>");
//  document.write("<p><strong>No slip:</strong> " + patient1.noSlip + "</p>")
//  document.write("<p><strong>Age:</strong> " + patient1.age + "</p>");
//  document.write("<p><strong>Doctor's Name:</strong> " + patient1.dc_name + "</p>");
//  document.write("<p><strong>Disease:</strong> " + patient1.disease + "</p>");
//  document.write("<p><strong>Contact Number:</strong> " + patient1.contactNo + "</p>");
//  document.write("<p><strong>Address:</strong> " + patient1.address + "</p>");

// function checkForLastName() {
//    if (document.getElementById("lastNameField").value.length === 0 &&) {
//    alert("Please enter your last name");
//    document.getElementById("lastNameField").focus();
//    return false;
//    }

//    }
   
// let a=prompt("enter  a digits")
// let b =prompt("enter a digits")
// console.log("the value of:"+a+ b)
// console.log("hello world")
// function addition(){
//    console.log("the sum of a num")
// }
// addition();
// console.log("js chap")
// function registeration(){
// try{
//    console.log("hello world")
//    registeration()
// }
// catch(err){
//    console.log(err)
// } 
// // }
// // registeration()
// try n catch
// function greetWorld(){
//    try{
//       var greet="hello world"
//       alert(greet())
//       throw "syntax error"
      
//    }
//    catch(err){
//        console.log(err)
//    }
// }
// greetWorld()

// function myFunction() {
//    const message=document.getElementById("p01");
//    message.innerHTML=""
//    let x=document.getElementById("demo").Value
//    try{
//       if(x.trim()=="") throw "empty";
//       if (xisNaN) throw "not a number"
//       x = Number(x);
//       if(x < 5)  throw "too low";
//       if(x > 10)   throw "too high";
//     }
//     catch(err) {
//       message.innerHTML = "Input is " + err;
//     }   
      
//    }
// myFunction()

function checkPassword() {
   try{
      let pass=document.getElementById("f1").value;
      if (pass.length<8) {
         throw "enter atleast 8 character"
      }
      if (pass.indexOf("")!==-1) {
         throw "please avoid spaces";
      }
   
   var numberSomewhere = false;
   for (var i = 0; i < pass.length; i++) {
   if (isNaN(pass(i, i+1)) === false) {
   numberSomewhere = true;
   break;
   }
   } if (
   numberSomewhere === false) {
   throw "Include at least 1 number.";
   }
}


catch(err){ 
   alert(err);
}

}
checkPassword()
