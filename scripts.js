const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const DATA_FILE = "https://raw.githubusercontent.com/LiwaeLamaa/starbooks/main/data.json"

showBooks(DATA_FILE, "")

function showBooks(url, filter) {
    main.innerHTML = ''
    $.getJSON(url, function(data) {
        data.books.forEach((book) => {
            const name = book.name
            if(filter === "" || (name.includes(filter)) && filter !== "") {
                const movieEl = document.createElement('div')
                movieEl.classList.add('book')

                movieEl.innerHTML = `
                <div class="movie-info">
                <input type="button" class="button" value="${book.name}" onclick="window.open('${book.link}')" />
                </div>
        `
		
        main.appendChild(movieEl)
		}
    })

    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        showBooks(DATA_FILE, searchTerm)
        search.value = ''
    } else {
        window.location.reload()
    }
})
