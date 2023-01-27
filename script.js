const newBtn = document.querySelector('#newQuote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const url = 'https://api.quotable.io/random';


newBtn.addEventListener('click', () => {
    fetch(`${url}`).then(res => res.json()).then(data => {
        console.log(data);
        quote.innerText = `${data.content}`;
        author.innerText = `${data.author}`;
    }).catch(error => {
        alert(error);
        })
});

