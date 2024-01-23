function randomnumber() {
    let length = document.getElementById('length').value;
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    document.getElementById('result').innerHTML = "Random String : " + result;
}