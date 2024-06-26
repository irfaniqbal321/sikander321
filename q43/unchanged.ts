let magician_names=["shahid afridi","saeed ajmal","saqlain" ]
function show_magician(magician:string[]){
    magician.forEach(name=>console.log(name)
    );
}
function make_great(magician:string[]){
    return magician.map(names=>`the great ${names}`);
    
}
let copy_magician=magician_names.slice();
let copy_great=make_great(copy_magician);
show_magician(magician_names);
show_magician(copy_great);
