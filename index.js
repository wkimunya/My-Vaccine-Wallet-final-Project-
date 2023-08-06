const url = 'https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=advil';

function allVaccines(){
    fetch('https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=advil')
    .then(response => response.json())
    .then(console.log(response));
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fcd52233dcmsh941c3fc4026d4e5p1a8f47jsn113401085250',
		'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
	}
};

try {
	const response = fetch(url, options);
	const result = response.text;
	console.log(result);
} catch (error) {
	console.error(error);
}