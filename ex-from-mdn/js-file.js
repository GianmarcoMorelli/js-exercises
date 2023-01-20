// Red paragraph
const bodySelector = document.querySelector('body');
const paragraph = document.createElement('p');
bodySelector.appendChild(paragraph);
paragraph.textContent = 'Hey I\'m red!';
paragraph.style.color = 'red';

//h3 in blue text
const newH3 = document.createElement('h3');
bodySelector.appendChild(newH3);
newH3.textContent = 'I\'m a blue h3';
newH3.style.color = 'blue';

//div box
const newDiv = document.createElement('div');
bodySelector.appendChild(newDiv);
newDiv.style.borderColor = 'black';
newDiv.style.backgroundColor = 'pink';
//h1 inside the div
newDiv.innerHTML = '<h1>I\'m in a div</h1>';

//Add event
/*
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});
*/
btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});


