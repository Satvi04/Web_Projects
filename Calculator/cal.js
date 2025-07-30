let inputBox = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = '';

function evaluateScientific(str) {
    try {
        str = str.replace(/π/g, 'Math.PI')
                 .replace(/e/g, 'Math.E')
                 .replace(/sin/g, 'Math.sin')
                 .replace(/cos/g, 'Math.cos')
                 .replace(/tan/g, 'Math.tan')
                 .replace(/log/g, 'Math.log10')
                 .replace(/ln/g, 'Math.log')
                 .replace(/√/g, 'Math.sqrt')
                 .replace(/x²/g, '**2')
                 .replace(/\^/g, '**');

        return eval(str);
    } catch {
        return 'Error';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (b) => {
        const btnText = b.target.innerText;

        if (btnText === '=') {
            string = String(evaluateScientific(string));
            inputBox.value = string;
        } else if (btnText === 'AC') {
            string = '';
            inputBox.value = '';
        } else if (btnText === 'DEL') {
            string = string.slice(0, -1);
            inputBox.value = string;
        } else if (b.target.id === 'plusminus') {
            string = String(-eval(string));
            inputBox.value = string;
        } else {
            string += btnText;
            inputBox.value = string;
        }
    });
});
