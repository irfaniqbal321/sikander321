let newGuests=["Imran Attari","Sir Hamzah","Afaq","Umair"];
let dontCome=newGuests[2];
console.log(dontCome," i am busy");
newGuests.splice(2,1, "saleem");
console.log("good news,we have found bigger table,so now more space is available");
newGuests.unshift("ibrahim");
newGuests.push("muzammil");
let centerName:number = (newGuests.length/2);
newGuests.splice(centerName ,0,"mobeen attari");
console.log("the list of guests is updated");
newGuests.forEach(happyGuest=>console.log(`hello,${happyGuest}, would you like to have a dinner with me`));





