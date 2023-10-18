const mylibrary = [];

function Book(title, author, numPages, hasBeenRead) {
    this.title = title;
    this.author = author;
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
    bookHasBeenRead.textContent = `book has been read: ${book.hasBeenRead ? 'yes' : 'no'}`;

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookNumPages);
    bookDiv.appendChild(bookHasBeenRead);

    return bookDiv;
}

function displayNewBook() {
    const library = document.getElementById('library');
    library.appendChild(createBookDiv(mylibrary[mylibrary.length - 1]));
}

const dialog = document.querySelector('dialog');
const newBookButton = document.getElementById('new-book');
const addBookButton = document.getElementById('add-book');

newBookButton.addEventListener('click', () => {
    dialog.showModal();
});

addBookButton.addEventListener('click', () => {
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const bookNumPages = document.getElementById('num-pages').value;
    const bookHasBeenRead = document.getElementById('has-been-read').value === 'true';
    const form = document.querySelector('form');
    form.reset();

    addBookToLibrary(new Book(bookTitle, bookAuthor, bookNumPages, bookHasBeenRead));
    displayNewBook();
    dialog.close();

});


