const url = 'https://hps-covid-19-vaccination-among-people-with-disabilities.p.rapidapi.com/meta';

function vaccineData(){
    fetch ('https://hps-covid-19-vaccination-among-people-with-disabilities.p.rapidapi.com/meta')
    .then(response => response.json())
    .then(response => {
        console.log(response);
        console.log()
    })
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1afc08cb01msh6a1748329ee60b2p1621a7jsn3304bc620b64',
		'X-RapidAPI-Host': 'hps-covid-19-vaccination-among-people-with-disabilities.p.rapidapi.com'
	}
};

try {
	const response = fetch(url, options);
	const result = response.text;
	console.log(result);
} catch (error) {
	console.error(error);
}
