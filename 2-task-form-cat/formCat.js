class Cat {
    constructor(nameCat, nameOwner, contacts, breed) {
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

    values.push(valNameCat, valNameOwner, valContacts, valBreed, valFood);
    console.log(values);
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
    console.log(chooseFood);
    return chooseFood;
}



let [nameCat, nameOwner, contacts, breed, food, gender] = values;

let newCat = new Cat(nameCat, nameOwner, contacts, breed, food, gender);

//console.log(newCat);




// function getInputs(){
//     values = [];
//     let valueNameCat = document.getElementById('nameCat').value;
//     values.push(valueNameCat);

//     let valueNameOwner = document.getElementById('nameOwner').value;
//     values.push(valueNameOwner);

//     let valueContacts = document.getElementById('contacts').value;
//     values.push(valueContacts);



//     let valueBreed = document.getElementById('nameOwner');
//     let selectBreed = valueBreed.select.value;
//     console.log(selectBreed);
//     values.push(selectBreed);
//     //return values;

//     let[nameCat, nameOwner, contacts, breed] = values;

//     let newCat = new Cat(nameCat, nameOwner, contacts, breed);

//     console.log(newCat);


//     // let valueNameOwner = document.getElementById('nameOwner').value;
//     // values.push(valueNameOwner);
//     // let valueNameOwner = document.getElementById('nameOwner').value;
//     // values.push(valueNameOwner);
// }













// function getInputs(){
//     values = [];
//     let valueNameCat = document.getElementById('nameCat').value;
//     values.push(valueNameCat);

//     let valueNameOwner = document.getElementById('nameOwner').value;
//     values.push(valueNameOwner);

//     let valueContacts = document.getElementById('contacts').value;
//     values.push(valueContacts);



//     let valueBreed = document.getElementById('nameOwner');
//     let selectBreed = valueBreed.select.value;
//     console.log(selectBreed);
//     values.push(selectBreed);
//     //return values;

//     let[nameCat, nameOwner, contacts, breed] = values;

//     let newCat = new Cat(nameCat, nameOwner, contacts, breed);

//     console.log(newCat);

// }