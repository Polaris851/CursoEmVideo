let n = [1, 8, 5, 3, 9, 7];
/*
for(var pos = 0; pos < n.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${n[pos]}`);
}
*/
for(var pos in n) {
    console.log(`A posição ${pos} tem o valor ${n[pos]}`)
}