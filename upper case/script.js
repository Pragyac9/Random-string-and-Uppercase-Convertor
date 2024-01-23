function convertToUppercase() {
    let input = document.getElementById("inputString").value;
    if (input) {
        let output = input.charAt(0).toUpperCase() + input.slice(1);
        document.getElementById("outputString").innerHTML = "Captalized Value :- " + output;
    } else {
        alert("Please enter a string!");
    }
}
