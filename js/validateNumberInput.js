function validateInputs(value) {
    //var numbers = /^[0-9]+$/;
    var numbers = /[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/;
    console.log(value);
    //some code here to validate inputs
    if ((value == null) || (value == "")) {
        return false;
    }
    else if (!numbers.test(value)) {
        console.log("failed");
        return false;
    }
    else {
        return true;
    }
}