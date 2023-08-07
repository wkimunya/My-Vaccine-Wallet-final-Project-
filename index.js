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

function createVaccinePost(vaccineData, vaccineId) {
    const selectedVaccine = vaccineData.vaccine.find(vaccine => vaccine.id === vaccineId);
  
    if (selectedVaccine) {
      const title = `Vaccine Spotlight: ${selectedVaccine.name}`;
      const content = `${selectedVaccine.name} vaccine is an important preventive measure in public health. ${selectedVaccine.schedule}.`;
      const author = "Your Name";
      const date = new Date().toLocaleDateString();
  
      const post = createPost(title, content, author, date);
      return post;
    } else {
      return null; // Vaccine with the given ID not found
    }
  }
//make the submit data button clickable
  function submitDetails() {
    // Get the form data
    const formData = {
        name: document.querySelector('input[name="Name"]').value,
        idNumber: document.querySelector('input[name="ID Number"]').value,
        email: document.querySelector('input[name="email"]').value,
        gender: document.querySelector('input[name="Gender"]').value,
        password: document.querySelector('input[name="Password"]').value,
    };

    // Perform any data validation here before submitting the form

    // Send the form data to the server (Note: This is a simplified example, and you'd need a server-side script to handle the actual form submission)
    console.log(formData); // Just printing the data to the console as an example

    // Optionally, you can reset the form after submission
    document.querySelector('.newRegistration').reset();
}
//

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

    const dropdowns = document.querySelectorAll('.dropdown');

    

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
