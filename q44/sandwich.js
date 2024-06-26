function make_sandwich() {
    var flavour = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        flavour[_i] = arguments[_i];
    }
    console.log("we are making sandwich with the following ingredients");
    flavour.forEach(function (tasty) { return console.log(tasty); });
    console.log("enjoy your tasty sandwich");
}
make_sandwich("bread", "mayyoniese", "chicken", "ketchup");
make_sandwich("bread", "egg", "cheese", "butter");
make_sandwich("bread", "vegatable", "black pepper", "salt");
