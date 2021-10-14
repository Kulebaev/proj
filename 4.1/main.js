let a = [];
let n = -3;
let m = 10;
let count = 42;
i = 0;

while (i < count) {
    a.push(Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m));
    i++;
}

console.log(a);

