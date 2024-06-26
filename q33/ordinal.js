var ordinal_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, ordinal_number_1 = ordinal_number; _i < ordinal_number_1.length; _i++) {
    var simple_number = ordinal_number_1[_i];
    var ordinal_string = void 0;
    if (simple_number === 1) {
        ordinal_string = "st";
    }
    else if (simple_number === 2) {
        ordinal_string = "nd";
    }
    else if (simple_number === 3) {
        ordinal_string = "rd";
    }
    else {
        ordinal_string = "th";
    }
    console.log("".concat(simple_number).concat(ordinal_string));
}
