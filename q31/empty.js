var userName = ["ali", "akber", "imran", "farhan", "admin"];
userName = [];
if (userName.length === 0) {
    console.log("we need to find some users");
}
else {
    userName.forEach(function (friend) {
        if (friend === "admin") {
            console.log(" Hello ".concat(friend, ", would you like to see a status report?"));
        }
        else {
            console.log(" Hello ".concat(friend, ", thank you for logging in again.\n\n"));
        }
    });
}
