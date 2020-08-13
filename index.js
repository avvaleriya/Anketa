let surname = prompt("Напишите свою фамилию");
let name = prompt("Напишите своё имя");
let patronymic = prompt("Напишите своё отчество");
let age = prompt("Сколько вам лет?");
let manSex = confirm("Ваш пол - мужской?");

if (manSex) {
    sex = "мужчина";
} else {
    sex = "женщина";
};

let ageInDays = age * 365;

let ageAfter5Yers = age + 5;

if ((manSex === true && age >= 62) || (manSex === !true && age >= 57)) {
    pension = "На пенсии";
} else {
    pension = "Не на пенсии"
};

if (surname != "" && name != "" && patronymic != "" && age !="" ){
    alert (`
    Ваше ФИО ${surname} ${name} ${patronymic}, 
    Ваш возраст ${age} лет, 
    Ваш возраст в днях ${ageInDays} дней, 
    Через 5 лет вам будет ${ageAfter5Yers} лет, 
    Вы ${sex}, 
    Вы ${pension}`);
} else {    
    confirm ("Вы сделали ошибку. Перезагрузите страницу и заполните заново поля")
};