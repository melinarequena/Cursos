/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async() => {

    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');

    const data = await res.json();

    //console.log(data[0].quote);

    return data[0];

}





/**
 * 
 * @param {HTMLDivElement} element 
 */

export const BreakingBadApp = async(element) => {

    document.querySelector('#app-title').innerHTML = 'Breaking Bad APP'
    element.innerHTML = 'Loading...'

    //await fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerHTML = 'Next Quote';


    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }


    //Next quote - Tarea

    nextQuoteButton.addEventListener ('click', async()=>{
        element.innerHTML = 'Loading...';

        const nextQuote = await fetchQuote();

        renderQuote(nextQuote);

    })


    fetchQuote()
        .then(renderQuote);
}