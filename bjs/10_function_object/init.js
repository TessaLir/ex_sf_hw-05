
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    // Добавление ФИО на страницу
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;

    // Добавление Даты рождения на страницу
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;

    // Добавление прочей информации на страницу
    document.querySelector('#genderOutput').innerText = initPerson.gender;

};

