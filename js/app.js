// /* const lista = document.querySelector('#main-menu'); // prendo l'elemento con l'ID
// console.log(lista); // stampo

// // console.log(lista);

// const item = document.createElement('li'); // nuovo elemento da aggiungere

// // item.textContent = 'Contacts';
// // item.innerText;

// item.innerHTML = '<a href="#">Contacts</a>';
// lista.appendChild(item); // lo aggiungo 

// const article = {
//     type: 'article',
//     children: [
//         {
//             type: 'h2',
//             children: 'Article Title'
//         }, 
//         {
//             type: 'p',
//             children: 'Article content'

//         }

//     ]

//     // array di children

// }

// const rootContent = document.querySelector('#content');

// createContentent(article, rootContent);

// const newItem = document.createElement('article');

// Array.isArray(article.children);

// BroadcastChannel.toString.apply.BroadcastChannel.Array.innerHTML = "suka0";

// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOM is ready');
// }
// );

// document.querySelector("selettore");
// document.querySelectorAll("selettori");
//  */

// // esempio

// function pippo() {
//     console.log(this);
// }
// pippo();

// const pluto = {
//     nome: "pluto",
//     pippo: function () {
//         console.log(this);
//     }
// }

// pluto.pippo();

// const $ = document.querySelector.bind(document); // senza bind non funziona, perché this non è document
// const $$ = document.querySelectorAll.bind(document); // perciò per farla this, prima di estrarla faccio il bind

// const lista = $("#main-menu"); // parent

// console.log(lista); // ritorna ul, che punta anche alla parte di sito corrispondente

// const nuovoElemento = document.createElement('li'); // creo un nuovo elemento

// console.log(nuovoElemento);

// nuovoElemento.textContent = "Contacts"; // aggiungo il testo

// console.log(nuovoElemento);

// lista.appendChild(nuovoElemento); // aggiungo il nuovo elemento


// const root = $("root");


// mioDom = { // oggetto
//     type: "header", // tipo
//     id: "header", // id
//     className: "container", // classe
//     children: [ // array di children
//         {
//             type: "h1", // tipo
//             // className e Id opzionali
//             children: [
//                 {
//                     type: "text",
//                     content: "Hello World"
//                 }
//             ]
//         },
//         {
//             type: "p",
//             children: [
//                 {
//                     type: "text",
//                     children: [
//                         {
//                             type: "text",
//                             content: "Lorem ipsum dolor sit amet,ci"
//                         },
//                         {
//                             type: "span",
//                             content: ""
//                         }
//                     ]
//                 } // non c'è content, perché ci sono dei children
//             ]
//         },
//         {
//             type: "p",
//         }
//     ]

// }

// function render(elemento, parent) {
//     const el = document.createElement(elemento.type);
//     if (elemento.id) { // se ha l'id
//         el.id = elemento.id;
//     }
//     if (elemento.className) { // se ha la classe
//         el.className = elemento.className;
//     }
//     if (elemento.content) { // se ha il content
//         el.textContent = elemento.content;
//     } else {
//         elemento.children.forEach(child => { // per ogni elemento figlio
//             render(child, el); // chiamo la funzione ricorsivamente
//         });
//     }
//     parent.appendChild(el); // aggiungo il figlio al parent
// }

// render(mioDom, root);

// function contoAllaRovescia(n) {
//     console.log(n);
//     if (n === 0) {
//         return;
//     }
//     contoAllaRovescia(n - 1);
// }

// contoAllaRovescia(10);


// function fattoriale(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * fattoriale(n - 1);
//     }
// }

// // Esempio di utilizzo
// let numero = 5;
// console.log(`Il fattoriale di ${numero} è ${fattoriale(numero)}`);

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


/* const


element.querySelector("selector")
 */


function pippo() {
    console.log(this);
}


pippo();


const pluto = {
    nome: "pluto",
    pippo: function () {
        console.log(this.nome);
    }
}


pluto.pippo();


const lista = $("ul");


console.log(lista);


const nuovoElemento = document.createElement("li");


nuovoElemento.textContent = "Tre";
console.log(nuovoElemento);


lista.appendChild(nuovoElemento);


const root = $("#root");




mioDom = {
    type: "header",
    id: "header",
    className: "container",
    children: [
        {
            type: "h1",
            children: [
                {
                    type: "text",
                    content: "Ciao"
                }
            ]
        },
        {
            type: "p",
            children: [
                {
                    type: "text",
                    content: "Mondo"
                }
            ]


        },
        {
            type: "p",
            children: [
                {
                    type: "text",
                    content: "Ciao"
                }
            ]
        }
    ]
}




function render(dom, parent) {
    const el = document.createElement(dom.type);
    if (dom.id) el.id = dom.id;
    if (dom.className) el.className = dom.className;
    if (!dom.children) return parent.appendChild(el);
    dom.children.forEach((child) => {
      if (child.type === "text" && child.value) {
        el.appendChild(document.createTextNode(child.value));
      } else {
        render(child, el);
      }
    });
    parent.appendChild(el);
  }
  

render(mioDom, root);




function contoAllaRovescia(n) {
    console.log(n);
    if (n === 0) {
        //console.log(n);
        return;
    }
    contoAllaRovescia(n - 1);
}


contoAllaRovescia(10);

console.log("Ciao");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array[4] = 34;
console.log(array);

for (let i = 0; i < array.length; i++) {
    const array2 = [];
    if (array[i] % 2 === 0) {
        array2.push(array[i]);
        console.log(array2);
    }
}

const vettore = [7, 1, 4, 3, 2, 8, 1];



