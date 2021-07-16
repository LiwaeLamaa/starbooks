const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

showBooks("https://raw.githubusercontent.com/LiwaeLamaa/starbooks/main/data.json")

function showBooks(url) {
    main.innerHTML = ''
	    $.getJSON(url, function(data) {
            data.books.forEach((book) => {

        const movieEl = document.createElement('div')
        movieEl.classList.add('book')

        movieEl.innerHTML = `
            <div class="movie-info">
        <input type="button" class="button" value="${book.name}" onclick="window.open('${book.link}')" />
		</div>
        `
		
        main.appendChild(movieEl)
    })

    });
}