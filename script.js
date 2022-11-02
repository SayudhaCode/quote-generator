let apiQuotes = [];

// show new quote
function newQuote() {
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	console.log(quote);
}

// get quotes from api
async function getQuotes() {
	const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
	try {
		const response = await fetch(apiURL);
		apiQuotes = await response.json();
		newQuote();
	} catch (error) {
		console.log(error);
	}
}

// on load
getQuotes();