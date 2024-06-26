let newGuests=["Imran Attari","Sir Hamzah","Afaq","Umair"];
let dontCome=newGuests[2];
console.log(dontCome," i am busy");
newGuests.splice(2,1, "saleem");
newGuests.forEach(someElse=>console.log(`${someElse} you are invited for a dinner`)
);


