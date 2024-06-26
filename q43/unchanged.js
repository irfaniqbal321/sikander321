var magician_names = ["shahid afridi", "saeed ajmal", "saqlain"];
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (names) { return "the great ".concat(names); });
}
var copy_magician = magician_names.slice();
var copy_great = make_great(copy_magician);
show_magician(magician_names);
show_magician(copy_great);
