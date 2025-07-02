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
        row.setAttribute('data-id', book.id);

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
        const button  = document.createElement("button")
        button.innerHTML = '<svg class="read-button" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <mask id="mask_circle"> <circle cx="50" cy="50" r="50" fill="white"></circle> <circle cx="50" cy="50" r="12" fill="#000000"></circle> </mask> <linearGradient x1="20" y1="60" x2="60" y2="40" id="Gradient" gradientUnits="userSpaceOnUse"> <stop style="stop-color:#0F650E;stop-opacity:1" offset="0"></stop> <stop style="stop-color:#399238;stop-opacity:1" offset="1"></stop> </linearGradient> </defs> <circle cx="50" cy="50" r="48" style="fill:#0F650E"></circle> <circle cx="50" cy="50" r="43" style="fill:url(#Gradient);stroke:#eeeeee;stroke-width:3"></circle> </g></svg>'
        leido.appendChild(button)
        row.appendChild(leido);

        const deletes = document.createElement("td");
        deletes.innerHTML = '<svg class="icon" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 30 30" version="1.1" id="svg822" inkscape:version="0.92.4 (f8dce91, 2019-08-02)" sodipodi:docname="delete.svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs id="defs816"></defs> <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="8.9166667" inkscape:cx="31.222387" inkscape:cy="7.1988484" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" units="px" inkscape:window-width="1366" inkscape:window-height="713" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" showguides="false" inkscape:snap-global="false"> <inkscape:grid type="xygrid" id="grid816"></inkscape:grid> </sodipodi:namedview> <metadata id="metadata819"> <rdf:rdf> <cc:work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> <dc:title> </dc:title> </cc:work> </rdf:rdf> </metadata> <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-289.0625)"> <path style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 12.027344 5 C 10.919344 5 10.244641 5.91352 10.027344 7 L 8.0566406 7 C 6.9486406 7 6.0566406 7.8920001 6.0566406 9 C 6.0566406 10.108 6.9486406 11 8.0566406 11 L 21.943359 11 C 23.051359 11 23.943359 10.108 23.943359 9 C 23.943359 7.8920001 23.051359 7 21.943359 7 L 20.027344 7 C 19.810047 5.91352 19.135344 5 18.027344 5 L 12.027344 5 z M 8 13 L 9.0429688 20.316406 L 9.9628906 24.916016 C 10.180187 26.002496 10.854891 26.916016 11.962891 26.916016 L 17.962891 26.916016 C 19.070891 26.916016 19.745594 26.002496 19.962891 24.916016 L 20.962891 19.916016 L 22 13 C 22 13 7.99376 13.0132 8 13 z " transform="translate(0,289.0625)" id="rect891"></path> </g> </g></svg>'
        row.appendChild(deletes);

        tabla.appendChild(row)

        deleteRow()
    })

    
}

function addNewBook() {
    const book = myLibrary[myLibrary.length - 1];

    const tabla = document.getElementById('cuerpo')

    const row = document.createElement("tr");
    row.setAttribute('data-id', book.id);

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

    const deletes = document.createElement("td");
    deletes.innerHTML = '<svg class="icon" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 30 30" version="1.1" id="svg822" inkscape:version="0.92.4 (f8dce91, 2019-08-02)" sodipodi:docname="delete.svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs id="defs816"></defs> <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="8.9166667" inkscape:cx="31.222387" inkscape:cy="7.1988484" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" units="px" inkscape:window-width="1366" inkscape:window-height="713" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" showguides="false" inkscape:snap-global="false"> <inkscape:grid type="xygrid" id="grid816"></inkscape:grid> </sodipodi:namedview> <metadata id="metadata819"> <rdf:rdf> <cc:work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> <dc:title> </dc:title> </cc:work> </rdf:rdf> </metadata> <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-289.0625)"> <path style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 12.027344 5 C 10.919344 5 10.244641 5.91352 10.027344 7 L 8.0566406 7 C 6.9486406 7 6.0566406 7.8920001 6.0566406 9 C 6.0566406 10.108 6.9486406 11 8.0566406 11 L 21.943359 11 C 23.051359 11 23.943359 10.108 23.943359 9 C 23.943359 7.8920001 23.051359 7 21.943359 7 L 20.027344 7 C 19.810047 5.91352 19.135344 5 18.027344 5 L 12.027344 5 z M 8 13 L 9.0429688 20.316406 L 9.9628906 24.916016 C 10.180187 26.002496 10.854891 26.916016 11.962891 26.916016 L 17.962891 26.916016 C 19.070891 26.916016 19.745594 26.002496 19.962891 24.916016 L 20.962891 19.916016 L 22 13 C 22 13 7.99376 13.0132 8 13 z " transform="translate(0,289.0625)" id="rect891"></path> </g> </g></svg>'
    row.appendChild(deletes);

    tabla.appendChild(row)

    deleteRow()
}

function deleteRow() {
    const deleteBtns = document.querySelectorAll('.icon');
    deleteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
    const row = btn.parentElement.parentElement;
    const myid = row.getAttribute('data-id');
    row.remove()

    myLibrary.forEach((book) => {
        if (book.id === myid) {
            const index = myLibrary.indexOf(book);
            myLibrary.splice(index, 1)
        }
    })
  })
 }) 
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