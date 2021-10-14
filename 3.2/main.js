let name = "Иван";
let surname = "Иванов";

let namecor = name[0].toUpperCase() + name.slice(1).toLowerCase();
let surnamecor = surname[0].toUpperCase() + surname.slice(1).toLowerCase();

if(name == namecor && surname == surnamecor){
    console.log("Имя и Фамилия остались без изменения: "  + namecor + " " + surnamecor);
}else{
    console.log("Был изменеён регистр символов: " + namecor + " " + surnamecor)
}