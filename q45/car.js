function car(manufacturer, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    var used_car = {
        manufactur: manufacturer, latest_model: model,
    };
    option.forEach(function (option) {
        var _a = option.split(":"), Key = _a[0], value = _a[1];
        used_car[Key.trim()] = value.trim();
    });
    return used_car;
}
var new_edition = car("toyota", "corolla", "color:grey");
console.log(new_edition);
