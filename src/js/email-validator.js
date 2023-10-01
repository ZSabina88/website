const VALID_EMAIL_ENDINGS = ['gmail.com', 'outlook.com', 'yandex.ru'];
export function validate(mail) {
    let splited = mail.split("@")[1];
    let isValid = VALID_EMAIL_ENDINGS.includes(splited) ? true  : false;
    console.log(isValid);
};