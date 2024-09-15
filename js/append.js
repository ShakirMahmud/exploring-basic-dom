//* Where to add
const placesList = document.getElementById('places-list');
// what to add
const li = document.createElement('li');
li.innerText = 'Dhaka';
//* Add the child
placesList.appendChild(li);

// ! Adding a section
// * where to add
const mainContainer = document.getElementById('main-container');
// * what to add.
const section = document.createElement('section');
mainContainer.appendChild(section);

const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
section.appendChild(ul);

const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Burger';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Pizza';
ul.appendChild(li3);

// ! set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Shirt</li>
</ul>
`
mainContainer.appendChild(sectionDress);