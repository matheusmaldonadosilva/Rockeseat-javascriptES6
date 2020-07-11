// class List {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data);
//         console.log(this.data)
//     }
// }



// class TodoList extends List {
//     // constructor() {
//     //     this.todos = [];
//     // }

//     // addTodo() {
//     //     this.todos.push('Novo todo'); 
//     //     console.log(this.todos);
//     // }


//     constructor() {
//         super();

//         this.usuario = "Diego";
//     }

//     mostraUsuario() {
//         console.log(this.usuario);
//     }

// }

// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add('Novo todo');
// }

// MinhaLista.mostraUsuario();


// class Matematica{

//     static soma(a, b) {
//         return a + b;
        
//     }
// }

// console.log(Matematica.soma(1, 2));

// const a = 1;

// a = 3;

// const usuario = { nome: 'Diego'};

// usuario.nome = 'Cleiton';

// console.log(usuario);

// function teste() {
//     let y = 2;

//     if(x > 5) {
//         console.log(x, y);
//     }

//     console.log(10)
// }

// const arr = [1, 3, 4, 5, 8, 9];

// const newArr = arr.map(function(item, index){ /* map percorre todo vetor */
//     return item * 2;
// });

// console.log(newArr);

// const sum = arr.reduce(function(total, next) {
//     return total + next;
// });

// console.log(sum);

// const filter = arr.filter(function(item){
//     return item % 2 === 0;
// });

// console.log(filter);

// const find = arr.find(function(item){
//     return item === 4;
// });

// console.log(find);

const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);
// ({
// function substituida por =>
//     return item = 2;
// });

console.log(newArr);

