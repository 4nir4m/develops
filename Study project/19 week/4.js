//стандартная
class Validator {
    constructor() {

    }
    isEmail(str) {
        return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
    }
    isDomain(str) {
        return ((str.indexOf('.com') !== -1) || (str.indexOf('.net') !== -1))
    }
    isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }
    isPhone(str) {
        let phone = str.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
        return phone === null ? false : true;
    }

}
var validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));

    //статическая
//     class Validator {
//         static checkAll() {
    
//         }
//         isEmail(str) {
//             return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
//         }
//         isDomain(str) {
//             return ((str.indexOf('.com') !== -1) || (str.indexOf('.net') !== -1))
//         }
//         isDate(str) {
//             let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
//             return date === null ? false : true;
//         }
//         isPhone(str) {
//             let phone = str.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
//             return phone === null ? false : true;
//         }
    
//     }

// console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
// console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
// console.log(ValidatorStatic.isDate('12.05.2021'));
// console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));
