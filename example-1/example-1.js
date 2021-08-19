/**
 *  getElementById
 *  getElementsByClassName
 *  getElementsByTagName
 *  getElementsByName
 * 
 *  querySelector
 *  querySelectorAll
 * 
 */

//console.log(document);

/* let collapseOne = document.getElementById('collapseOne');
console.log(collapseOne); */

let accordionCollapses = document.getElementsByClassName('accordion-collapse');
console.log(accordionCollapses);

let h2s = document.getElementsByTagName('h2');
console.log(h2s);

let headingThree = document.getElementsByName('headingThree');
console.log(headingThree);

let accordionBody = document.querySelector('.accordion > :nth-child(2)');
console.log(accordionBody);

/* let collapseOne = document.querySelector('#collapseOne');
collapseOne.classList.remove('show'); */

let collapseTwo = document.querySelector('#collapseTwo');
collapseTwo.classList.add('show');

let accordionBodies= document.querySelectorAll('.accordion-body');
console.log(accordionBodies);