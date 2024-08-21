// let text=""
// const  fruits=["apple","mango","peach","strawberry"]
// fruits.forEach(myFunction)
// document.getElementById("demo").innerHTML=text

// function myFunction(index,item) {
//     text = text +index +" :"+item +"<br>"
// }


// let day=""
// const months=["jan","feb","march","april","may","june","july","august"]
// months.forEach(days)
// document.getElementById("demo").innerHTML=day
// function days(index,date){
//     day=day+index+";"+date+"<br>"
// }

// let sum=0
// const num=[56,23,67,90]
// num.forEach(myNum)
// document.write(sum)
// function myNum(item){
//     sum+=item
// }


// const num=[56,23,67,90]
// num.forEach(myNum)
// document.write(num)
// function myNum(index,item,arr){
//     arr[index]=item*10
// }


//event css
// let button = document.querySelector("#btn1")
// button.addEventListener('click', (e) => {
//     console.log(e)
//     console.log(e.type)
// })

// button.addEventListener('mouseover', () => {
//     console.log("this is event listner")

// })
// let handler3 = () => {
//     console.log("this is handler 3")
// }

// button.addEventListener('click', handler3
// )




// button.addEventListener('dbclick', () => {
//     console.log("this is event listner")
// })


// button.removeEventListener('click', handler3

// )


// const myDiv=document.getElementById("myDIV")
// const myFunction=()=>{
//     document.getElementById("demo").innerHTML=Math.random()
// }
// myDiv.addEventListener("mousemove",myFunction)
// const removeHandler=()=> {
//     document.removeEventListener("mousemove",removeHandler)
// }

// const multiplication=(a,b)=>{
//     return a*b
// }
// console.log(multiplication(10,80))

// const div_ele=document.querySelector("div")
// console.log(div_ele)
// let attr =div_ele.getAttribute("class")
// console.log(attr)
// let set =document.querySelector("p")
// console.log(set.setAttribute("id","paragraph1"))

// let paragraph=document.querySelector("p")
// paragraph.style.backgroundColor="blue"
// paragraph.style.color="orange"
// paragraph.style.fontFamily="Gill Sans"

// //node.append:add at end of the node
// //node.prepend:add at start of node
// //node.before:add before
// //node.after:after
// let newBtn=document.createElement("button")
// newBtn.innerText="click me"
// console.log(newBtn)
// let div=document.querySelector("div")
// div.prepend(newBtn)

// const event1 = (event) => {
   
//     console.log("Button was clicked!", event);
// };

// newBtn.addEventListener("click", event1)