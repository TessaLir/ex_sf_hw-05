
window.onload = function()
{
    // В методе был указо получение элементов через getElementById заменил на querySelector
    const firstNameOutput = document.querySelector('#firstNameOutput'),
          surnameOutput = document.querySelector('#surnameOutput'),
          patronymicOutput = document.querySelector('#patronymicOutput'),
          birthYearOutput = document.querySelector('#birthYearOutput'),
          birthMounthOutput = document.querySelector('#birthMounthOutput'),
          birthDayOutput = document.querySelector('#birthDayOutput'),
          genderOutput = document.querySelector('#genderOutput'),
          professionOutput = document.querySelector('#professionOutput'),
          avatar = document.querySelector('.avatar')

    let initPerson;

    generateRandomPerson();

    // На кнопку напешан бработчик событий с действием геренации случайного пользователя.
    document.querySelector('#button-generation').addEventListener('click', () => {
        clearAll();                 // Для начала очистим данные.
        generateRandomPerson();     // Собирем новые данные.
    });

    // На кнопку навешен обработчик событий с действием очистки данных
    document.querySelector('#button-cleaner').addEventListener('click', () => {
        clearAll();
    });


    // Метод запуска генерации рандомного пользователя.
    function generateRandomPerson() {
        // Создадим нового пользователя.
        initPerson = personGenerator.getPerson();

        // Добавление ФИО на страницу
        firstNameOutput.innerText = initPerson.firstName;
        surnameOutput.innerText = initPerson.surname;
        patronymicOutput.innerText = initPerson.patronymic;

        // Добавление Даты рождения на страницу
        birthYearOutput.innerText = initPerson.birthYear;
        birthMounthOutput.innerText = initPerson.birthMonth.name;
        birthDayOutput.innerText = initPerson.birthDay;

        // Добавление прочей информации на страницу
        genderOutput.innerText = initPerson.gender;
        professionOutput.innerText = initPerson.profession;
        avatar.innerText = initPerson.embodies;
    }

    // Метод для очистки данных.
    function clearAll () {
        // Проверка есть ли данные, если их нету. то и нечего очищать.
        if (initPerson) {
            // Надо удалить старого пользователя. для этого присваиваем переменной NULL
            initPerson = null;

            // Почистим форму.
            firstNameOutput.innerText = 'имя';
            surnameOutput.innerText = 'фамилия';
            patronymicOutput.innerText = 'отчество';
            birthYearOutput.innerText = 'год';
            birthMounthOutput.innerText = 'месяц';
            birthDayOutput.innerText = 'день';
            genderOutput.innerText = 'пол';
            professionOutput.innerText = 'профессия';
            avatar.innerText = 'х';

            //TODO По хорошему надо отключить кномпку.
        }

        //TODO Тут можно добавить еще события ELSE вывести какое - либо сообщение пользователю.
    }

};

