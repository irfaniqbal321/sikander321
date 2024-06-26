var current_User = ["MOBEEN", "SHAN", "ZEESHAN", "FARHAN", "SUBHAN"];
var new_User = ["saleem", "yasir", "shan", "rehan", "owais"];
new_User.forEach(function (time_user) {
    var my_Condition = current_User.some(function (same_user) { return same_user.toLocaleLowerCase() === time_user.toLocaleLowerCase(); });
    if (my_Condition) {
        console.log("sorry ".concat(time_user, " has already been used. "));
    }
    else {
        console.log("user name ".concat(time_user, " is available"));
    }
});
