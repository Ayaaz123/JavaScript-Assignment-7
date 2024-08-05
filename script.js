const calculateSum = () => {
    const userInput = parseInt(document.getElementById('userInput').value);
    
    if (isNaN(userInput) || userInput < 0 || userInput > 1000000) {
        document.getElementById('result').innerHTML = `<h1>Invalid number</h1>`;
    } else {
        let sum = 0;
        for (let i = 1; i <= userInput; i++) {
            sum += i;
        }
        document.getElementById('result').innerHTML = `<h1>Sum of numbers up to ${userInput} is ${sum}</h1>`;
    }
};
