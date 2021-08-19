/**
 *  getElementById
 *  getElementsByClassName
 *  getElementsByTagName
 *  getElementsByName
 * 
 *  querySelector
 *  querySelectorAll
 * 
 *  createElement
 *  createTextNode
 * 
 */

let tasks = [
    'Make homework',
    'Clean Bed',
    'Go to the supermarket',
    'Go to the park',
    'Call girlfriend'
];


let webpages = [
    { icon: 'fa-google', text: 'Google', url: 'https://google.co' },
    { icon: 'fa-facebook', text: 'Facebook', url: 'https://facebook.com' },
    { icon: 'fa-twitter', text: 'Twitter', url: 'https://twitter.com' },
    { icon: 'fa-instagram', text: 'Instagram', url: 'https://instagram.com' },
]

/* let list = document.querySelector('.list-group');
list.innerHTML = "";
console.log(list);

let li = document.createElement('li');
li.classList.add('list-group-item');

let textoLI = document.createTextNode('Hola Mundo 2');
li.appendChild(textoLI);
// li.innerHTML = "Hola Mundo";
console.log(li);

list.appendChild(li); */

let list = document.querySelector('ul.list-group');

tasks.forEach(function (item /* , index, arr */) {
    let li = document.createElement('li');
    li.classList.add('list-group-item', 'list-group-item-action');
    let text = document.createTextNode(item);
    /* li.innerHTML = item; */
    li.appendChild(text);
    list.appendChild(li);

    /* list.innerHTML += `<li class="list-group-item">${item}</li>`; */
});


let links = document.querySelector('div.list-group');

for (let item of webpages) {
    let link = document.createElement('a');
    link.classList.add('list-group-item', 'list-group-item-action');
    link.href = item.url;
    link.target = '_blank';

    let icon = document.createElement('i');
    icon.classList.add('fab', item.icon, 'icons');

    let text = document.createTextNode(item.text);

    link.appendChild(icon);
    link.appendChild(text);
    links.appendChild(link);
}