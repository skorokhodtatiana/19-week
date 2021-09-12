class Validator {
    isEmail(mail) {
        let reg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        return reg.test(String(mail).toLowerCase());
    }

    isDomain(dom) {
        let reg2 = /^(?!\-)(?:[a-zA-Z\d\-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}$/;
        return reg2.test(String(dom).toLowerCase());
    }

    isDate(dat) {
        var reg3 = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
        return reg3.test(dat);
    }

    isPhone(phon) {
        let reg4 = /^\+375(17|29|33|44)[0-9]{7}$/;
        return reg4.test(phon);
    }
}



function start() {
    const userEmail = document.getElementById('userEmail');
    const domain = document.getElementById('domain');
    const userDate = document.getElementById('userDate');
    const userPhone = document.getElementById('userPhone');
    let validator = new Validator();
    console.log(validator.isEmail(userEmail.value));
    console.log(validator.isDomain(domain.value));
    console.log(validator.isDate(userDate.value));
    console.log(validator.isPhone(userPhone.value));
}

document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
    start();
})