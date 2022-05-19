let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})


document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
})

document.getElementById('btn_mul').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'mul';
    inputWindow.value = '';
})

document.getElementById('btn_div').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'div';
    inputWindow.value = '';
})

document.getElementById('btn_sqrt').addEventListener('click', function () {
    operation = null;
    lastOperand = 0;
    inputWindow.value = Math.sqrt(parseInt(inputWindow.value));
})

document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'sum') {
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'def') {
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'mul') {
        const result = lastOperand * parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'div') {
        const result = lastOperand / parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
})


// Создал универсальное навешивание событий на клавиши с числами, и получением числа с данных клавишь.
document.querySelectorAll('.btn_number').forEach(btn => {
    btn.addEventListener('click', e => {
        if (inputWindow.value === '0') {
            inputWindow.value = parseInt(e.currentTarget.innerText);
        } else {
            inputWindow.value += parseInt(e.currentTarget.innerText);
        }
        
    });
});
