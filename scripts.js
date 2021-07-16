const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

showBooks()

function showBooks() {
    main.innerHTML = ''

    var url = "data.json";         
    $.getJSON(url, function (data) {
        $.each(data, function (key, model) {
        const movieEl = document.createElement('div')
        movieEl.classList.add('book')

        movieEl.innerHTML = `
            <div class="movie-info">
        <input type="button" class="button" value="${model.name}" onclick="window.open('${model.link}')" />
		</div>
        `
		
        main.appendChild(movieEl)
        })
    });

}