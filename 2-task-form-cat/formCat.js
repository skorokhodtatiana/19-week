class Cat {
    constructor(nameCat, nameOwner, contacts, breed, food, gender) {
        this.nameCat = nameCat;
        this.nameOwner = nameOwner;
        this.contacts = contacts;
        this.breed = breed;
        this.food = food;
        this.gender = gender;
    }
}

values = [];

function start() {
    let valNameCat = getArgument('nameCat');
    let valNameOwner = getArgument('nameOwner');
    let valContacts = getArgument('contacts');
    let valBreed = getBreed();
    let valFood = getFood();
    let valGender = getGender();

    values.push(valNameCat, valNameOwner, valContacts, valBreed, valFood, valGender);

    let [nameCat, nameOwner, contacts, breed, food, gender] = values;
    let newCat = new Cat(nameCat, nameOwner, contacts, breed, food, gender);
     console.log(newCat);
}

function getArgument(id) {
    let arg = document.getElementById(id).value;
    return arg;
}

function getBreed() {
    const breedCat = document.getElementById('breed');
    const valueBrand = breedCat.value;
    return valueBrand;
}

function getFood(){
    let checkboxList = document.getElementsByClassName('foodCat');
    let chooseFood = [];
    for(i=0; i < checkboxList.length; i++){
        if(checkboxList[i].checked){
            chooseFood.push(checkboxList[i].value) ;
        }
    }
    let stringChooseFood = chooseFood.join(',');
    return stringChooseFood;
}

function getGender(){
    let chooseGender = document.querySelector('input[name="gender"]:checked').value;
    return chooseGender;
}