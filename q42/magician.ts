let magician_names=["shahid afridi","saeed ajmal","saqlain" ]
function show_magician(magician:string[]){
    magician.forEach(name=>console.log(name)
    );
}
function make_great(magician:string[]){
    return magician.map(names=>`the great ${names}`);
    
}
let super_magician=make_great(magician_names)
console.log(super_magician);

