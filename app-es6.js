class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.querySelector("#book-list")
        // Create <tr> element
        const row = document.createElement("tr");
        // Insert columns
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete"</a>X</td>
        `;

        list.appendChild(row);
    }

    showAlert(message, className) {
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
        setTimeout(function () {
            document.querySelector(".alert").remove();
        }, 3000);
    }

    deleteBook(target) {
        if (target.className === "delete") {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
}

// Event listener for add book
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

// Event listener for delete
document.getElementById("book-list").addEventListener("click", function(e) {

    // Instantiate UI
    const ui = new UI();

    // Delete book
    ui.deleteBook(e.target);

    // Show an alert
    ui.showAlert("You have removed a book", "success")

    e.preventDefault();
})