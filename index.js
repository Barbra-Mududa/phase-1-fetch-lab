const link ="https://anapioficeandfire.com/api/books"

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const response = fetch(link)
  .then(res => res.json())
  .then((data) => renderBooks(data))
  return response
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
