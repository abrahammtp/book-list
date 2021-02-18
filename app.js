// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() { }

// Add book to list
UI.prototype.addBookToList = function (book) {
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

// Show Alert
UI.prototype.showAlert = function(message, className) {
    const div = document.createElement("div") 
        // Add classes
        div.className = `alert ${className}`
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get a parent
        const container = document.querySelector(".container");
        // Get form
        const form = document.querySelector("#book-form");
        // Insert alert
        container.insertBefore(div, form);

        // Timeout after 3 seconds
        setTimeout(function() {
            document.querySelector(".alert").remove();
        }, 3000);
}

// Clear fields
UI.prototype.clearFields = function () {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}

// Event listeners
document.getElementById("book-form").addEventListener("submit", function (e) {
    // Get form values
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    // Instantiating a book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    // Validate
    if (title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert("Please fill in all fields", "error")
    } else {
        // Add book to list
        ui.addBookToList(book);
        // Show successful alert after a book has been added
        ui.showAlert("You have added a new book to the list", "success")
        // Clear fields
        ui.clearFields();
    }


    e.preventDefault();
})