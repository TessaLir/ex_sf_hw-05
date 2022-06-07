
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    // Добавление ФИО на страницу
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;

    // Добавление Даты рождения на страницу
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;

    // Добавление прочей информации на страницу
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#professionOutput').innerText = initPerson.profession;

};

