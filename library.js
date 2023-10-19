class Library {
    library = document.getElementById('library');
    books = [];

    addBook(book) {
        this.books.push(book);
    }

    removeBook(book) {
        let index = 0;

        for (const libraryBook of this.books) {
            if (libraryBook === book) {
                this.books.splice(index, 1);
                continue;
            }

            index++;
        }
    }

    displayBook(book) {
        this.library.appendChild(book);
    }
}

class Book {
    constructor(title, author, numPages, hasBeenRead) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.hasBeenRead = hasBeenRead;
    }
}

const myLibrary = new Library();


function createBookDiv(book) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const bookTitle = document.createElement('h1');
    bookTitle.textContent = book.title;
    const bookAuthor = document.createElement('h3');
    bookAuthor.textContent = `by ${book.author}`;
    const bookNumPages = document.createElement('p');
    bookNumPages.textContent = `Number of pages: ${book.numPages}`;
    const bookHasBeenRead = document.createElement('p');
    bookHasBeenRead.textContent = `Book has been read: ${book.hasBeenRead ? 'yes' : 'no'}`;
    const bookDelete = document.createElement('button');
    bookDelete.textContent = 'Delete book';
    bookDelete.addEventListener('click', () => {
        document.getElementById('library').removeChild(bookDiv);

        myLibrary.removeBook(book);
    });

    const toggleBookRead = document.createElement('button');
    toggleBookRead.textContent = 'Toggle read status of book';
    toggleBookRead.addEventListener('click', () => {
        book.hasBeenRead = !book.hasBeenRead;
        bookHasBeenRead.textContent = `Book has been read: ${book.hasBeenRead ? 'yes' : 'no'}`;
    });

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookNumPages);
    bookDiv.appendChild(bookHasBeenRead);
    bookDiv.appendChild(bookDelete);
    bookDiv.appendChild(toggleBookRead);

    return bookDiv;
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
        myLibrary.addBook(book);
        myLibrary.displayBook(createBookDiv(book));
        dialog.close();
    }
});


