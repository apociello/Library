const myLibrary = [];

function Book(title, author, pages, read, id) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.id = id,
    info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    };
}

function addBookToLibrary(title, author, pages, read) {
    const id = crypto.randomUUID();
    const newBook = new Book(title, author, pages, read, id);
    myLibrary.push(newBook)
}

addBookToLibrary('Elon Musk', 'Walter Isaacson', '670', 'YES')
addBookToLibrary('Artic Dreams', 'Barry Lopez', '448', 'NO');
console.log(myLibrary)