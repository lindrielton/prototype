const pessoa = {
    nome : 'marcos'
}

console.log(Object.getPrototypeOf(pessoa)); 

console.log(pessoa.hasOwnProperty('nome'));

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.nome);// o nome veio erdado do pessoa 

console.log(pessoaNova.hasOwnProperty('nome'))// elle vai retornar false pois pessoaNOva não tem esse atributo , ele vem erdado de pessoa.

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);// pessoa vai ser o prototype de pessoaNova

