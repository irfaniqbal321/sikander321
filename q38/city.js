function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("karachi");
describe_city("lahore");
describe_city("islamabad");
describe_city("riyaz", "saudi arabia");
