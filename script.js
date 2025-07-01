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

function displayBooks() {
    const tabla = document.getElementById('cuerpo')

    myLibrary.forEach((book) => {
        const row = document.createElement("tr");

        const titulo = document.createElement("td");
        titulo.textContent = book.title;
        row.appendChild(titulo);

        const autor = document.createElement("td");
        autor.textContent = book.author;
        row.appendChild(autor);

        const hojas = document.createElement("td");
        hojas.textContent = book.pages;
        row.appendChild(hojas);

        const numero = document.createElement("td");
        numero.textContent = book.id;
        row.appendChild(numero);

        const leido = document.createElement("td");
        leido.textContent = book.read;
        row.appendChild(leido);

        tabla.appendChild(row)
    })
}

function addNewBook() {
    const book = myLibrary[myLibrary.length - 1];

    const tabla = document.getElementById('cuerpo')
    const row = document.createElement("tr");

    const titulo = document.createElement("td");
    titulo.textContent = book.title;
    row.appendChild(titulo);

    const autor = document.createElement("td");
    autor.textContent = book.author;
    row.appendChild(autor);

    const hojas = document.createElement("td");
    hojas.textContent = book.pages;
    row.appendChild(hojas);

    const numero = document.createElement("td");
    numero.textContent = book.id;
    row.appendChild(numero);

    const leido = document.createElement("td");
    leido.textContent = book.read;
    row.appendChild(leido);

    tabla.appendChild(row)
}

addBookToLibrary('Elon Musk', 'Walter Isaacson', '670', 'YES')
addBookToLibrary('Artic Dreams', 'Barry Lopez', '448', 'NO');
addBookToLibrary('It', 'Stephen King', '1138', 'NO')
displayBooks()

const dialog = document.getElementById('myDialog');

const closeDialog = document.getElementById('close');
closeDialog.addEventListener('click', () => dialog.close());

const openDial = document.getElementById('openDialog');
openDial.addEventListener('click', () => dialog.showModal());

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(form);
    const obj = Object.fromEntries(data.entries());
    addBookToLibrary(obj.title, obj.author, obj.pages, obj.read);
    addNewBook();
    form.reset()
    dialog.close()
})

const closeBtn = document.getElementById('close')
closeBtn.addEventListener('click', (e) => {
    e.preventDefault
    form.reset()
    dialog.close()
})


