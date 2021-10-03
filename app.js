//We have an array of cities. Assign each city in different individual variable. hint ['LA', 'new york', 'karachi','islamabad']
let cities =  ['LA', 'new york', 'karachi','islamabad'];
let [c1,c2,c3,c4] =  cities;
console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);


//We have a student object. Assign each property in different and individual variable in JS 
const student= [
        {
            name:'Marry',
            age:20,
            rollNo:2
        }
    ]

    let {name, age, rollNo} = student;

    console.log(`My Name is  ${name}  
    age is ${age}  Roll number is ${rollNo}`)
    
    




//Given an array of firstname and an array of last name. First check both array size is equal or not, if equal then make third new array which has first last name concat value
let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
let lastNames = ['khan', 'ayub', 'aziz', 'yasin']

if(firstNames.length==lastNames.length){
    console.log(`my name is ${firstNames[0]} ${lastNames[0]}`)
    console.log(`my name is ${firstNames[1]} ${lastNames[1]}`)
    console.log(`my name is ${firstNames[2]} ${lastNames[2]}`)
    console.log(`my name is ${firstNames[3]} ${lastNames[3]}`)
}
else
{
    console.log("array is of different length")
}



//A function is taking 5 arguments and You have to pass it through an array.

let arr = [1,2,3,4,5]
function muNumber(){
    console.log(arr);
}
muNumber(arr);




let num = [1,2,3,4,5]
num.map((a)=>{
                a = a*2;
                console.log(a);
            
        })



myFunc = (a) =>{
        a= a*a;
        console.log(a);
    }
     myFunc(6);



//question: 
var authenticated=true;
var allowed = authenticated ? (alert('you r allowed')) : (alert('you are not allowed'))
// which alert will run : First One
// */


// question: ` What is the value of canDrive
        // var age = 12;
        // var canDrive = age > 18 ? 'yes' : 'no';
    
        // console.log(canDrive);
        // no
// answers: ['12', '18', 'yes', 'no']
 

const dog='snickers'
        logdog(dog);
        function logdog(dog){
            console.log(dog)
        }
         function go(){
             const dog='sunny';
             logdog(dog)
         }
        // answers: ['snickers sunny','sunny snickers','snickers snickers','sunny sunny'] */


let text = `He's often called "Johnny"`;
console.log(text)
// write the answer here


function welcomeMsg(name = "Everyone") {
    let msg = "Welcome " + name
    console.log(msg)
}
welcomeMsg("Faiza")
welcomeMsg()
// I have called funtion twice , share the answer what is printed each time
// */
// answers: Welcome Faiza, Welcome Everyone

//make a promise that resolves after 5 sec. Use setTimeOut for resolve.

let myPromise = new Promise((resolve,reject)=>{
    let wait = setTimeout(() => {

        resolve(`You're allowed`)},5000)
    
    
    
})

myPromise
    .then(res => console.log(res))
    .catch(err => console.log(err))