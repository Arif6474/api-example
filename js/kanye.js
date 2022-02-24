const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data));
}
const displayQuote = qoutes => {
   console.log(qoutes.quote);
    const quoteElements = document.getElementById('quote');
    quoteElements.innerText = qoutes.quote;
}