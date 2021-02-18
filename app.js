// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function(book) {
    const list = document.querySelector("#book-list")
    // Create <tr> element
    const row = document.createElement("tr");
    console.log(row);
    // Insert columns
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class"delete"</a>X</td>
    `;

    list.appendChild(row);
}

// Clear fields
UI.prototype.clearFields = function() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}

// Event listeners
document.getElementById("book-form").addEventListener("submit", function(e) {
    // Get form values
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    // Instantiating a book
    const book = new Book(title, author, isbn);
    
    // Instantiate UI
    const ui = new UI();

    // Add book to list
    ui.addBookToList(book);

    // Clear fields
    ui.clearFields();

    e.preventDefault();
})