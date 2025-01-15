const lista = document.querySelector('#main-menu'); // prendo l'elemento con l'ID
console.log(lista); // stampo

// console.log(lista);

const item = document.createElement('li'); // nuovo elemento da aggiungere

// item.textContent = 'Contacts';
// item.innerText;

item.innerHTML = <a href="#">Contacts</a>;
lista.appendChild(item); // lo aggiungo 
