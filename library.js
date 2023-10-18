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
    const bookDelete = document.createElement('button');
    bookDelete.textContent = 'Delete book';
    bookDelete.addEventListener('click', () => {
        document.getElementById('library').removeChild(bookDiv);

        let index = 0;
        for (const libraryBook of mylibrary) {
            if (libraryBook === book) {
                mylibrary.splice(index, 1);
                continue;
            }

            index++;
        }
    });

    const toggleBookRead = document.createElement('button');
    toggleBookRead.textContent = 'Toggle read status of book';
    toggleBookRead.addEventListener('click', () => {
        book.hasBeenRead = !book.hasBeenRead;
        bookHasBeenRead.textContent = `book has been read: ${book.hasBeenRead ? 'yes' : 'no'}`;
    });

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookNumPages);
    bookDiv.appendChild(bookHasBeenRead);
    bookDiv.appendChild(bookDelete);
    bookDiv.appendChild(toggleBookRead);

    return bookDiv;
}

function displayBook(book) {
    const library = document.getElementById('library');
    library.appendChild(book);
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

    if (bookTitle && bookAuthor && bookNumPages) {
        const form = document.querySelector('form');
        form.reset();

        const book = new Book(bookTitle, bookAuthor, bookNumPages, bookHasBeenRead);
        addBookToLibrary(book);
        displayBook(createBookDiv(book));
        dialog.close();
    }
});


