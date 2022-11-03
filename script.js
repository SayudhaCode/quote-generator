const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// show loading
function loading() {
	loader.hidden = false;
	quoteContainer.hidden = true;
}

// hide loading
function complete() {
	quoteContainer.hidden = false;
	loader.hidden = true;
}

// show new quote
function newQuote() {
	loading();
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	quote.author
			? authorText.textContent = quote.author
			: authorText.textContent = 'Unknown';
	quote.text.length > 120
			? quoteText.classList.add('long-quote')
			: quoteText.classList.remove('long-quote');
	quoteText.textContent = quote.text;
	complete();
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

// tweet quote
function tweetQuote() {
	const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
	window.open(twitterURL, '_blank');
}

// event listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// on load
getQuotes();