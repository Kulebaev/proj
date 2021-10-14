let s = "Привет мир!";
let reverse = [];

for (let i = s.length - 1; i >= 0; i--) {

    reverse += s[i];
}

console.log(reverse);