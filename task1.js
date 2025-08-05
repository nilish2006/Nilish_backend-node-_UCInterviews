let firstName = prompt("enter your First name:-  ");
console.log(firstName);

let final = firstName.slice(0,4);
console.log("sliced name is : " , final);


let surname = ["Geller", "Tribbiani", "Buay", "Green", "Bing", "Wheeler", "Hannigan"];

let index = Math.floor(Math.random() * surname.length);
let lastName = surname[index];

console.log("the final output of name is: " , final  +" " +  lastName );


try {
    if(firstName.length < 4) {
        final == firstName;
        console.log("final output is " ,final + " " + lastName);
    }
}
catch(err){

console.log(err);
}
