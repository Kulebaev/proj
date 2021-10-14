let password = "_-3";
let s = password.includes("-");
let s1 = password.includes("_");

if (password.length > 4 && (s || s1)){
    console.log("Пароль надёжный!");
}else{
    console.log("Ненадёжный пароль!");}