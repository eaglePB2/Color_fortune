// Function to read the CSV file and get the quotes
async function getQuotes() {
    try {
      const response = await fetch('quotes/csv/quotes.csv');
      const data = await response.text();
      const quotes = data.split('\n').filter(quote => quote.trim() !== '');
      return quotes;
    } catch (error) {
      console.error('Error reading CSV file:', error);
      return [];
    }
}

// Function to generate a random quote
function generateRandomQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to display the quote
function displayQuote() {
    getQuotes().then(quotes => {
        if (quotes.length > 0) {
            const randomQuote = generateRandomQuote(quotes);
            $('#thought').text(randomQuote);
        } else {
            $('#thought').text('當你看到這句話的時候，他大概率是壞掉了……');
        }
    });
}

// Load the quote when the webpage is loaded
$(document).ready(function () {
    displayQuote();
    setInterval(displayQuote, 10000); // Change quote every 10 seconds
});
