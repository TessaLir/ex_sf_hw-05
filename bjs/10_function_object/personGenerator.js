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
    professionJson: `{
        "count": 15,
        "list": {
            "id_1": {
                "title": "Слесарь",
                "gender": "male"
            },
            "id_2": {
                "title": "Солдат",
                "gender": "male"
            },
            "id_3": {
                "title": "Шахтер",
                "gender": "male"
            },
            "id_4": {
                "title": "Механик",
                "gender": "male"
            },
            "id_5": {
                "title": "Клоун",
                "gender": "male"
            },
            "id_6": {
                "title": "Бухгалтер",
                "gender": "common"
            },
            "id_7": {
                "title": "Юрист",
                "gender": "common"
            },
            "id_8": {
                "title": "Экономист",
                "gender": "common"
            },
            "id_9": {
                "title": "Учитель",
                "gender": "common"
            },
            "id_10": {
                "title": "Профессор",
                "gender": "common"
            },
            "id_11": {
                "title": "Кондитер",
                "gender": "female"
            },
            "id_12": {
                "title": "Актриса",
                "gender": "female"
            },
            "id_13": {
                "title": "Певица",
                "gender": "female"
            },
            "id_14": {
                "title": "Хозяин",
                "gender": "female"
            },
            "id_15": {
                "title": "Художник",
                "gender": "female"
            }
        }
    }`,
    months: [
        {
            "number": 1,
            "name": "января"
        },
        {
            "number": 2,
            "name": "февраля"
        },
        {
            "number": 3,
            "name": "марта"
        },
        {
            "number": 4,
            "name": "апреля"
        },
        {
            "number": 5,
            "name": "мая"
        },
        {
            "number": 6,
            "name": "июня"
        },
        {
            "number": 7,
            "name": "июля"
        },
        {
            "number": 8,
            "name": "августа"
        },
        {
            "number": 9,
            "name": "сентября"
        },
        {
            "number": 10,
            "name": "октября"
        },
        {
            "number": 11,
            "name": "ноября"
        },
        {
            "number": 12,
            "name": "декабря"
        },
    ],

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

    // Метод получения рандомного месяца рождения пользователя.
    // Можно было бы сделать метод switch для переводачисла в строку и наобород, но я поленился :-)
    randomBirthMonth: function() {
        return this.months[this.randomIntNumber(11, 0)];
    },
    
    // Метод получения рандомного дня рождения пользователя.
    randomBirthDay: function() {
        const {birthYear, birthMonth} = this.person;
        
        var isEven = function(number) {
            return number % 2 === 0;
        }

        // от простого к сложному...
        // можно было вразу вызывать return в условиях, 
        // но я решиб поднятием достать переменую :-)

        if (birthMonth.number > 7) {
            // август, сентябрь, октябрь, ноябрь, декабрь
            maxDay = isEven(birthMonth.number) ? 31 : 30;

        } else if (birthMonth.number <= 7 && !isEven(birthMonth.number)) {
            // январь, март, май, июль
            maxDay = 31;

        } else {
            if (birthMonth.number !== 2) {
                // апрель, июнь
                maxDay = 30;
            } else {
                // февраль, если високостный, то 29, в противном случае 28
                maxDay = birthYear % 4 === 0 ? 29 : 28
            }

        }

        return this.randomIntNumber(maxDay, 1);
    },

    // Метод получения рандомной профессии пользователя.
    // В перечеслнии JSON указал характеристики:
    // - title - Вовращаемое значение
    // - gender может быть М., Ж. и Общей профессийей основное сравнение идет по этому полю
    randomProfession: function() {
        const profession = this.randomValue(this.professionJson);

        // Условие "Это мужчина" не стал добавлять, так как если это "не женщина", то это - "Мужчина"
        // Константы добавлены, что бы упростить вид условия ниже
        const isFemale = this.person.gender === this.GENDER_FEMALE,
              isProfCommon = profession.gender === "common",
              isProfFemale = profession.gender === "female",
              isProfMale = profession.gender === "male";

        // Если условие подошло, то возвращаем тестовое значение поля title из profession
        if ((isFemale && (isProfCommon || isProfFemale)) || (!isFemale && (isProfCommon || isProfMale))) {
            return profession.title;    
        }

        // Если условие не подошло, то повторно вызываем сами себя... до удовлетворения условий.
        return this.randomProfession();
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();

        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();

        this.person.birthYear = this.randomBirthYear();
        this.person.birthMonth = this.randomBirthMonth();
        this.person.birthDay = this.randomBirthDay();

        this.person.profession = this.randomProfession();

        return this.person;
    }
};
