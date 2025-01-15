const lista = document.querySelector('#main-menu'); // prendo l'elemento con l'ID
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


