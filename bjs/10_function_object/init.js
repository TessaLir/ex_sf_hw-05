
window.onload = function()
{
    const initPerson = personGenerator.getPerson();

    // В методе был указо получение элементов через getElementById заменил на querySelector

    // Добавление ФИО на страницу
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;

    // Добавление Даты рождения на страницу
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
    document.querySelector('#birthMounthOutput').innerText = initPerson.birthMonth.name;
    document.querySelector('#birthDayOutput').innerText = initPerson.birthDay;

    // Добавление прочей информации на страницу
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#professionOutput').innerText = initPerson.profession;

};

