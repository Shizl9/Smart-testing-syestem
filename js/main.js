

var userEmail = prompt("Please enter Your Email");
var userPassword = prompt("please Enter your password");
var number_of_tries = 0;
while (userEmail != "ahmed@gmail" || userPassword != "12345A") {
    number_of_tries++
    if (number_of_tries <= 3) {
        userEmail = prompt("Please enter Your Email");
        userPassword = prompt("please Enter your password");
    }
    else {
        alert("You Tried Too Many Times");
        break;
    }
}
if (userEmail == "ahmed@gmail" && userPassword == "12345A") {
    alert("You are Successfuly Logged In");
    var number_of_questions = +prompt("Please Enter your Number of Questions");
    var operators = ["+", "-", "*", "/"];

    var score = 0;

    for (var i = 1; i <= number_of_questions; i++) {
        var num1 = Math.floor(Math.random() * 10);
        var num2 = Math.floor(Math.random() * 10);
        var operation = operators[Math.floor(Math.random() * operators.length)];
        var userAnswer = prompt(`${i}) ${num1} ${operation} ${num2} = `);

        var correctAnswer;
        if (operation == "+") {
            correctAnswer = num1 + num2;
        }
        else if (operation == "-") {
            correctAnswer = num1 - num2;

        }
        else if (operation == "*") {
            correctAnswer = num1 * num2;

        }
        else (operation == "/")
        {

            correctAnswer = num1 / num2;

        }
        if (userAnswer == correctAnswer)score++;

    
}

}
alert(`Your Score is ${score}   out of  ${number_of_questions}`)
