function tab() {
    var n = document.getElementById('num');
    var res = document.getElementById('seltab');
    if(n.value.length == 0) {
        alert('Por favor, digite um número!');
    } else {
        var num = Number.parseInt(n.value);
        res.innerHTML = '';
       for(var c = 1; c <= 10; c++){
            var r = document.createElement('option');
            r.text = `${num} x ${c} = ${num*c}`;
            r.value = `res${c}`;
            res.appendChild(r);
       }
    }
}