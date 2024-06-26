function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love TYPESCRIPT"; }
    console.log("creating a ".concat(size, " size with the meesage of ").concat(message));
}
make_shirt();
make_shirt("extra large");
make_shirt("xxl", "i love web designing");
