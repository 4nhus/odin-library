const mylibrary = [];

function Book(author, title, numPages, hasBeenRead) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.hasBeenRead = hasBeenRead;
}

function addBookToLibrary(book) {
    mylibrary.push(book);
}

function createBookDiv(book) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const bookTitle = document.createElement('h1');
    bookTitle.textContent = book.title;
    const bookAuthor = document.createElement('h2');
    bookAuthor.textContent = book.author;
    const bookNumPages = document.createElement('p');
    bookNumPages.textContent = book.numPages;
    const bookHasBeenRead = document.createElement('p');
    bookHasBeenRead.textContent = book.hasBeenRead;

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookNumPages);
    bookDiv.appendChild(bookHasBeenRead);

    return bookDiv;
}

function displayBooks() {
    const library = document.querySelector('#library');

    mylibrary.forEach(book => {
        library.appendChild(createBookDiv(book));
    })
}

displayBooks();