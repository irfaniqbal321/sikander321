var magician_names = ["shahid afridi", "saeed ajmal", "saqlain"];
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (names) { return "the great ".concat(names); });
}
var super_magician = make_great(magician_names);
console.log(super_magician);
