const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

showBooks()

function showBooks() {
    main.innerHTML = ''
	let data = '{ "books" : [' +
'{ "name":"لغات محددة المجال", "link":"SE/Domain Specific Langauges by Martin Fowler.pdf" },' +
'{ "name":"داتا  " , "link":"داتا " },' +
'{ "name":"داتا " , "link":"داتا " } ]}';

	const obj = JSON.parse(data);

    obj.books.forEach((book) => {

        const movieEl = document.createElement('div')
        movieEl.classList.add('book')

        movieEl.innerHTML = `
            <div class="movie-info">
        <input type="button" class="button" value="${book.name}" onclick="window.open('${book.link}')" />
		</div>
        `
		
        main.appendChild(movieEl)
    })
}