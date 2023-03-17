console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted successfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let Painting = document.querySelector('#catPainting')

const catPainting = () => {
    alert('I am so much better than the Meowna Lisa!')
}

Painting.addEventListener('mouseover', catPainting)