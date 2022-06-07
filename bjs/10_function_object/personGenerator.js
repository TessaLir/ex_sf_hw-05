const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Екатерина",
            "id_2": "Мария",
            "id_3": "Дарья",
            "id_4": "Татьяна",
            "id_5": "Ирина",
            "id_6": "Светлана",
            "id_7": "Ульяна",
            "id_8": "Наталия",
            "id_9": "Александра",
            "id_10": "Елена"
        }
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {
            "id_1": "Николаевич",
            "id_2": "Александрович",
            "id_3": "Анатольевич",
            "id_4": "Петрович",
            "id_5": "Васильевич",
            "id_6": "Максимович",
            "id_7": "Михайлович",
            "id_8": "Евгеньевич",
            "id_9": "Всеволодович",
            "id_10": "Кириллович"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    // Метод - рандомайзер.
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    // Метод позволяет получить рандомную строку характеризующую пол пользователя.
    randomGender: function() {
        return this.randomIntNumber() === 0  ? this.GENDER_FEMALE : this.GENDER_MALE
    },

    // Метод получения рандомной информации из объектка JSON.
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    // Метод получения рандомного имени пользователя.
    randomFirstName: function() {
        return this.randomValue(this.person.gender === this.GENDER_FEMALE ? this.firstNameFemaleJson : this.firstNameMaleJson);
    },

    // Метод получения рандомной фамилии пользователя.
    randomSurname: function() {
        return `${this.randomValue(this.surnameJson)}${this.person.gender === this.GENDER_FEMALE ? 'а' : ''}`;
    },

    // Метод получения рандомного отчества пользователя.
    randomPatronymic: function() {
        const patronymic = this.randomValue(this.patronymicJson);
        return this.person.gender === this.GENDER_MALE ? patronymic : patronymic.slice(0, -2) + 'на';
    },

    // Метод получения рандомного года рождения пользователя.
    randomBirthYear: function() {
        return this.randomIntNumber(2022, 1900);
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();

        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();

        this.person.birthYear = this.randomBirthYear();

        return this.person;
    }
};
