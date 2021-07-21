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
            const link = book.link
            if(filter === "" || (name.includes(filter)) && filter !== "") {

			const target = document.querySelector(".container");
			var colorCount = 100; // change this to choose number of colors
			$(document).ready(function () {
				$(".container").hide(0).delay(500).fadeIn(500);
			});
			var randNum = Math.ceil(Math.random() * 26);
			const colors = ["#C193C0","#7b3539","#4d233d","#61224a","#47243b","#6d4773","#3e285c","#27293d","#3a363b","#26262a","#4d4b50","#434452","#2b272b","#223a5e","#35435a","#0e3a53","#123850","#004b8d","#155187","#2a4b7c","#0f3b57","#293b4d","#29495c","#00637c","#005265","#254445","#184a45","#15463e"];
			createColor(colors, randNum, name, link);
		}
    })
	show(0);
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

function createColor(colors, randNum, bookName, bookLink) {
	main.innerHTML += `<details  onclick="window.open('${bookLink}')">
  <summary style="background:${colors[randNum]}" class="color">
  <div class="color-title">
  <h1>${bookName}</h1>
</div>
</summary>
</div>
</details>`;
}

function show(i) {
	var boxes = document.querySelectorAll("details");
	if (i < colorCount) {
		setTimeout(function () {
			boxes[i].classList.add("active");
			i++;
			show(i);
		}, 100);
	}
}

