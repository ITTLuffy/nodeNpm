/* const lista = document.querySelector('#main-menu'); // prendo l'elemento con l'ID
console.log(lista); // stampo

// console.log(lista);

const item = document.createElement('li'); // nuovo elemento da aggiungere

// item.textContent = 'Contacts';
// item.innerText;

item.innerHTML = '<a href="#">Contacts</a>';
lista.appendChild(item); // lo aggiungo 

const article = {
    type: 'article',
    children: [
        {
            type: 'h2',
            children: 'Article Title'
        }, 
        {
            type: 'p',
            children: 'Article content'

        }

    ]
    
    // array di children

}

const rootContent = document.querySelector('#content');

createContentent(article, rootContent);

const newItem = document.createElement('article');

Array.isArray(article.children);

BroadcastChannel.toString.apply.BroadcastChannel.Array.innerHTML = "suka0";

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is ready');
}
);

document.querySelector("selettore");
document.querySelectorAll("selettori");
 */

// esempio

function pippo() {
    console.log(this);
}
pippo();

const pluto = {
    nome: "pluto",
    pippo: function() {
        console.log(this);
    }
}

pluto.pippo();

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const lista = $("#main-menu"); // parent

console.log(lista); // ritorna ul, che punta anche alla parte di sito corrispondente

const nuovoElemento = document.createElement('li'); // creo un nuovo elemento

console.log(nuovoElemento);

nuovoElemento.textContent = "Contacts"; // aggiungo il testo

console.log(nuovoElemento);

lista.appendChild(nuovoElemento); // aggiungo il nuovo elemento

mioDom = { // oggetto
    type: "ul", // tipo
    
}