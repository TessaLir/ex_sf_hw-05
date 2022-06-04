const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

const minNumberField  = document.querySelector('#minimumNumber'),
      maxNumberField  = document.querySelector('#maximumNumber'),
      startButton     = document.querySelector('#startGame'),
      collapseInGame  = document.querySelector('#collapseInGame'),
      collapseOutGame = document.querySelector('#collapseOutGame');


let minValue;
let maxValue;
let answerNumber;
let orderNumber = 1;
let gameRun = false;


const startGame = () => {
    if (gameRun) {
        collapseOutGame.classList.remove('show')
        collapseInGame.classList.add('show')
        runGame();
    } else {
        answerField.innerText = 'Для игры в "Угодайку" введите, пожалуйста минимальное и максимальное число для загаданного диапозона';
        collapseOutGame.classList.add('show')
        collapseInGame.classList.remove('show')
    }
}

startGame();

startButton.addEventListener('submit', (event) => {
    event.preventDefault();
    gameRun = !gameRun;
    startGame();
})

// основной метод для запуска игры в угодайку.
const runGame = () => {

    minValue = Number(minNumberField.value);
    maxValue = Number(maxNumberField.value);

    // Проверка, что введеные числы являются числами, а так же они не равны.
    // Добавлена доп проверка, к обоим числам, для проверки NaN при нажатии Отмены, а так же при вводе строки.
    // Если пользователь ввел 0, то это равно FALSE, соответственно в данной проверке надо проверить не ноль это.
    // Если введеные данные нас не устраивают, то запускаем приложение по новому. Метод вызывает сам себя.
    // По идее тут обрабатывается и NaN, я заставляю пользователя ввести значение при любом раскладе.
    //
    // При реализации формы, на Клиенте я предусмотрел инпуты с числовым значением.
    // Данное условие, в теории не обработается ни когда...
    if (minValue === maxValue || (minValue != 0 && !minValue) || (maxValue != 0 && !maxValue)) {
        answerField.innerText = `Для игры в "Угодайку" введите, пожалуйста минимальное и максимальное число для загаданного диапозона \n`;
        answerField.innerText += `Введенные значения, должны быть числами, и отличаться друг от друга.\nПрограмма запустится заново.`;
    } else {

        // Добавлено условие при котором больше число меняется местами с меньшим, если они таковыми не являются
        if (minValue > maxValue) {
            const tmpValue = minValue;
            minValue = maxValue;
            maxValue = tmpValue;
        }

        maxValue = maxValue >= 1000 ? 999 : maxValue;
        minValue = minValue >= 1000 ? 999 : minValue;
        maxValue = maxValue <= -1000 ? -999 : maxValue;
        minValue = minValue <= -1000 ? -999 : minValue;

        answerField.innerText = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю \n\n\n`;
        answerNumber = Math.floor((minValue + maxValue) / 2);
        orderNumber = 1;
        gameRun = true;
            
        orderNumberField.innerText = orderNumber;
        answerField.innerText += `Вы загадали число ${getNumberInString()}?`;
    }
};

// Если не передать значение, то получим сообщение для отрицательных ответов
const getAnswerMessage = (isCurrectAnswer) => {
    const phraseRandom = Math.round(Math.random() * 4);
    let result = '';

    if (isCurrectAnswer) {
        switch (phraseRandom) {
            case 1:
                result = `Честно признаться, я уже и сам думал, чтоне угодаю...\n\u{1F643}`;
                break;
            case 2:
                result = `Я - суперстар!\n\u{1F929}`;
                break;
            case 3:
                result = `Победа! А ты в меня не верил!\n\u{1F973}`;
                break;
            case 4:
                result = `Топчик!\n\u{1F973}`;
                break;
            default:
                result = `Я всегда угадываю\n\u{1F60E}`;
                break;
        }
    } else {
        switch (phraseRandom) {
            case 1:
                result = `Вы загадали неправильное число!\n\u{1F914}`;
                break;
            case 2:
                result = `Я теряюсь в догадках\n\u{1F928}`;
                break;
            case 3:
                result = `На этот раз, я проиграл...\n\u{1F612}`;
                break;
            case 4:
                result = `Вы уверены, что загадали число в нужном диапозоне?\n\u{1F915}`;
                break;
            default:
                result = `Я сдаюсь..\n\u{1F92F}`;
                break;
        }
    }

    return result;
}

// основной метод для получения числа в строковом представлении.
const getNumberInString = () => {
    let result = '';
    let tmpAnswerNumber = answerNumber;

    if (answerNumber < 0) {
        result += 'минус '
        tmpAnswerNumber *= -1;
    } 

    if (tmpAnswerNumber >= 0 && tmpAnswerNumber < 20) {

        result += getNumberInStringFirst20(tmpAnswerNumber);

    } else if (tmpAnswerNumber === 100) {

        result += 'сто';

    }  else if (tmpAnswerNumber >= 20 && tmpAnswerNumber < 100) {

        const nameOfTen = Math.floor(tmpAnswerNumber / 10),
              nameRemainsOfTen = tmpAnswerNumber % 10;

        result += `${getNumberInStringFirst20(nameOfTen)} десятк${nameOfTen < 5 ? 'а' : 'ов'}`;
        if (nameRemainsOfTen !== 0) {
            result += ` и ${getNumberInStringFirst20(nameRemainsOfTen)}`;
        }

    } else if (tmpAnswerNumber > 100) {

        const nameOfHundred = Math.floor(tmpAnswerNumber / 100),
              nameOfTen = Math.floor((tmpAnswerNumber % 100) / 10),
              nameRemainsOfTen = (tmpAnswerNumber % 100) % 10;

        result += `${getNumberInStringFirst20(nameOfHundred, true)} ${getHoundredName(nameOfHundred)}`;

        if (nameOfTen > 0) {
            result += ` ${getNumberInStringFirst20(nameOfTen)} ${nameOfTen == 1 ? 'десяток' : `десятк${nameOfTen < 5 ? 'а' : 'ов'}`}`;
        }

        if (nameRemainsOfTen !== 0) {
            result += ` и ${getNumberInStringFirst20(nameRemainsOfTen)}`;
        }

    }

    return result;
}

// Получить склонение по сотням
const getHoundredName = (number) => {
    let result = '';

    if (number == 1) {
        result += 'сотня';
    } else if (number >= 2 && number < 5) {
        result += 'сотни';
    } else if (number >= 5) {
        result += 'сотен';
    }

    return result;
}

// Получить текстовое значение из первой дводцадке.
// Если передать isHoundred в значении TRUE можно получить другое склонение цыфры
const getNumberInStringFirst20 = (tmpAnswerNumber, isHoundred) => {
    let result = '';
    switch (tmpAnswerNumber) {
        case 1:
            result += !isHoundred ? 'один' : 'одна';
            break;
        case 2:
            result += !isHoundred ? 'два' : 'две';
            break;
        case 3:
            result += !isHoundred ? 'три' : 'три';
            break;
        case 4:
            result += !isHoundred ? 'четыре' : 'четыре';
            break;
        case 5:
            result += !isHoundred ? 'пять' : 'пять';
            break;
        case 6:
            result += !isHoundred ? 'шесть' : 'шесть';
            break;
        case 7:
            result += !isHoundred ? 'семь' : 'семь';
            break;
        case 8:
            result += !isHoundred ? 'весемь' : 'восемь';
            break;
        case 9:
            result += !isHoundred ? 'девять' : 'девять';
            break;
        case 10:
            result += 'десять';
            break;
        case 11:
            result += 'одинадцать';
            break;
        case 12:
            result += 'двянадцать';
            break;
        case 13:
            result += 'тринадцать';
            break;
        case 14:
            result += 'четырнадцать';
            break;
        case 15:
            result += 'пятнадцать';
            break;
        case 16:
            result += 'шестнадцать';
            break;
        case 17:
            result += 'семнадцать';
            break;
        case 18:
            result += 'весемнадцать';
            break;
        case 19:
            result += 'девятнадцать';
            break;
        default:
            result += 'ноль';
            break;
    }
    return result;
}

// Обработчик событий для кнопки заново
document.getElementById('btnRetry').addEventListener('click', function () {
    orderNumber = 0;
    gameRun = false;
    startGame();
});

// Обработчик событий для кнопки мольше
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || maxValue < minValue || minValue === answerNumber) {
            answerField.innerText = getAnswerMessage();
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${getNumberInString()}?`;
        }
    }
});

// Обработчик событий для кнопки меньше
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || maxValue < minValue || maxValue === answerNumber) {
            answerField.innerText = getAnswerMessage();
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${getNumberInString()}?`;
        }
    }
});

// Обработчик событий для кнопки верно
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = getAnswerMessage(true);
        gameRun = false;
    }
});

