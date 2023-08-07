const url = 'https://endlessmedicalapi1.p.rapidapi.com/GetOutcomes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fcd52233dcmsh941c3fc4026d4e5p1a8f47jsn113401085250',
		'X-RapidAPI-Host': 'endlessmedicalapi1.p.rapidapi.com'
	}
};
function sideEffects(){
    fetch('https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=advil')
    .then(response => response.json())
    .then(console.log(response));
}

try {
	const response =  fetch(url, options);
	const result = response.text;
	console.log(result);
} catch (error) {
	console.error(error);
}


//Adding an event listener 

//get alldropdown from the document
const dropdowns = document.querySelectorAll('.dropdown');

const dropdownArray = Array.from(dropdowns);
//loop through all dropdown elements
dropdownArray.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');


//add an avent to the element
select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');

});

//loop through all elements

   options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        options.forEach(option => {
            option.classList.remove('active');
        });

        option.classList.add('active');
    });
});
});