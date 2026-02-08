const url = 'https://os-sports-perform.p.rapidapi.com/v1/events/schedule/category?category_id=26&date=2022-05-11';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'os-sports-perform.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
