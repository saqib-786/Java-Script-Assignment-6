// Chapter #21
// Task # 1

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + lastName;
// alert("Hello" +" " + fullName)

// Task # 2

// var favroitMobile = prompt("Enter Your Favroit Moible Model");
// document.write("Length of string" +" " + favroitMobile.indexOf("Note 7"))

// Task # 3

// var nationality = "Pakistani";
// document.write( nationality + " " + "<br>" + "index of 'n' is  " + nationality.indexOf("n"))

// Task # 4

// var  greet = "Hello World!"
// document.write(greet + "<br>"+ "Last index of 'l': " + greet.lastIndexOf("l"))

// Task # 5

// var nationality1 = "Pakistani"
// document.write(nationality1 + "<br>" + "Character at index 3:" +" " + nationality1.charAt(3))

// Task # 6 have to done

// Task # 7

// var city = "Hyderabad";
// var city1 = "Islamabad";
// var city = city1.replace("Hyer","Isla");
// document.write(city1)

// Task # 8

// var msg = "Ali and Sami are best friends They play cricket and football together"
// var msg1 = msg.replace(/and/g, "&");
// document.write(msg1)

// Task # 9

// var value = "472";
// var num = parseInt(value);
// document.write(value+ ":" +"<br>" + "Type: String"+ "<br>" + "Vlue: 472" + "<br>" +"Type: Number")

// Task # 10

// var dryfruit = prompt("Enter your favroite dry fruite");
// var dryfruit = dryfruit.toUpperCase();
// console.log(dryfruit)

// Task # 11

// var userInput = prompt("Enter your favroite programing language");
// var userInput = userInput.toLowerCase();
// console.log(userInput)

// Task # 12

// var num = 35.36;
// var num = num.toString();
// document.write(num)

// Task # 13

// var userInput = prompt("Enter your username");
// var userName = userInput;
// if (userName === "@"){
//     alert("Please enter a valid user name")
// }
// else if( userName === "!"){
//     alert("Please enter a valid user name")
// }
// else if( userName === "."){
//     alert("Please enter a valid user name")
// }
// else if( userName === ","){
//     alert("Please enter a valid user name")
// }
// else{
//     alert("Your user name is valid")
// }


// // Task # 14
// var product =   prompt("Well Come to My Bakery", "What do you want to order");
// var product = product.toLowerCase();
// var items =  ["cake","apple pie","cookies","chips","patties"];
// for (var i = 0; i < items.length; i++){
//     if(product === items[i,0]){
//         alert("Cake is avaliable at index 1 in our Bakery")
//     }
//     else if( product === items[i,1]){
//         alert("apple pie is avaliable at index 2 in our Bakery")
//     }
//     else if( product === items[i,2]){
//         alert("Cookies are avaliable at index 3 in our Bakery")
//     }
//     else if(product === items[i,3]){
//         alert("Chips are avaliable at index 4 in our Bakery")
//     }
//     else if(product === items[i,4]){
//         alert("Patties are avaliable at index 5 in our Bakery")
//     }
//     else{
//         alert(product + "is not avaliable in our Bakery")
//     }break;
// }

// // Task # 15
// var userPasword = prompt("Enter Your Password");
// if ()


// Task # 16

// var university = "University of Karachi"
// var university = university.split();
// document.write(university)

// // Task # 17
// var country = prompt("Enter your country");
// var userCountry = country;
// var country = country.charAt(7)
// document.write( "User input Pakistan" + "<br>" + "Last character of input" + " " + country)

// Task # 18

// var text = "You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string."
// var text1 = text.length;
// for ( var i = 0; i < text1; i++){
//     if (text.slice(i, i + 2) === "the"){
// alert("the has found")
//     }
// }

// // Task # 19
// var number = 3.45214;
// document.write("Number" + "" + number + "<br>" )
// document.write(  number = Math.round(3.45214)+ "<br>") 
// document.write(  number = Math.floor(3.45214) + "<br>")
// document.write(  number = Math.ceil(3.45214))


// Task # 20

// var nagitiveNum = prompt("Enter your number");
// var nagitiveNum = Math.round(-2.673);
// var nagitiveNum = Math.floor(-2.673)
// var nagitiveNum = Math.ceil(-2.673)
// document.write( "Round value" + " " + nagitiveNum +"<br>")
// // document.write ("Floor value" + " " + nagitiveNum + "<br>")
// // document.write ("Ceil value" + " " + nagitiveNum)

// Task # 21
var num2 = 4;
var num2 = Math.round(-4);
document.write(num2)