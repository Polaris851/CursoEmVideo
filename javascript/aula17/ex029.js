let amigo = { 
    nome: 'leticia',
    sexo: 'M',
    idade: 18,
    peso: 51.5,
    engordou(p=0) {
        console.log('Engordou');
        this.peso += p;
    }
}
amigo.engordou()
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)