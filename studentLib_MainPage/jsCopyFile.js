showBooks();
// __________Jquery_____________

// here used little jquery onPageLoad() is just a function name here, hides the type; selection element fieldset
function onPageLoad() {
    let borrwBtn = $("#borrowSeleBtn");
    let returnb = $("#returnSeleBtn");
    let addb = $("#add")
    let libraryForm = $("#libraryForm");
    let subBtn = $("#submitBtn");
    let typeSelector = $('fieldset');
    borrwBtn.click(() => {
        libraryForm.css({ "display": "block" });
        typeSelector.css({ "display": "none" })
        subBtn.html(`<button type="submit" id="borrowSubmitBtn">Borrow</button>`);
    });

    returnb.click(() => {
        libraryForm.css({ "display": "block" });
        typeSelector.css({ "display": "none" })
        subBtn.html(`<button type="submit" id="returnSubmitBtn">Return</button>`);
    });
    addb.click(() => {
        libraryForm.css({ "display": "block" });
        typeSelector.css({ "display": "flex" });
        subBtn.html(`<button type="submit" id="add">Add</button>`);
    });
}
onPageLoad()

// Show Books in the table
function showBooks() {

    let getBooks = localStorage.getItem('books');
    let bookObj;
    if (getBooks == null) {
        bookObj = [];
    } else {
        bookObj = JSON.parse(getBooks);
    }
    let addRow = "";
    bookObj.forEach(function (element, index) {
        addRow += `<tr class="tr">
                    <td class="bookName">${element.name}</td>
                    <td>${element.author}</td>
                    <td>${element.type}</td>
                    <td><button id="${index}" onclick="deleteBook(this.id)" class="btn btn-primary">Delete Book</button></td>
                  </tr>`;
    });
    let tableBody = document.getElementById('tableBody');
    if (bookObj.length == 0) {
        tableBody.innerHTML = "";
    } else {
        tableBody.innerHTML = addRow;
    }
}

// Delete Book from the table
function deleteBook(index) {
    let getBooks = localStorage.getItem('books');
    let bookObj;
    if (getBooks == null) {
        bookObj = [];
    } else {
        bookObj = JSON.parse(getBooks);
    }
    let array = JSON.stringify(bookObj);
    console.log(`array: ` + array[index]['author']);
    bookObj.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(bookObj));
    let message = document.getElementById('message');
    let boldText = 'Deleted';
    message.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>${boldText}: </strong> Your book has been deleted
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(() => {
        message.innerHTML = "";
    }, 5000);
    showBooks();
}

// Create a Book Constructor
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
var xyz = false;
class Display {
    add(book) {
        // console.log("Book has been added to library");
        let getBooks = localStorage.getItem('books');
        let bookObj;
        if (getBooks == null) {
            bookObj = [];
        } else {
            bookObj = JSON.parse(getBooks);
        }
        bookObj.push(book);
        localStorage.setItem('books', JSON.stringify(bookObj));
        let tableBody = document.getElementById('tableBody');
        showBooks();
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        } else {
            return true;
        }
    }

    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if (type === 'success') {
            boldText = 'Success';
        } else {
            boldText = 'Error';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText} : </strong>&nbsp;${displayMessage}
                            </div>`;
        setTimeout(() => {
            message.innerHTML = "";
        }, 5000);
    }
}

// Get the libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {

    e.preventDefault();

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    } else if (others.checked) {
        type = others.value;
    }

    let book = new Book(name, author, type);


    let display = new Display();

    if (display.validate(book)) {
        let submitBtn = $('#submitBtn').children().html();     //returns the button's innerHtml like borrow/return/add
        let bName = book.name.toLowerCase();
        let bAuthor = book.author.toLowerCase();
        let getBooks = localStorage.getItem('books');
        let borrowedList = localStorage.getItem('borrowed');
        let bookObj;
        var borrowedObj;
        if (getBooks == null) {
            bookObj = [];
        } else {
            bookObj = JSON.parse(getBooks);
        }
        if (borrowedList == null) {
            borrowedObj = [];
        } else {
            borrowedObj = JSON.parse(borrowedList);
        }

        switch (submitBtn) {
            case "Add":
                display.add(book);
                display.clear();    //resets the library form
                display.show('success', 'Your book has been added successfully');
                showInDropDown();
                break;
            // ___borrow__
            case "Borrow":
                let i = 0;
                let res = false;
                while (i < bookObj.length) {
                    if (bName == bookObj[i].name.toLowerCase() && bAuthor == bookObj[i].author.toLowerCase()) {
                        borrowedObj.push(bookObj[i]);
                        bookObj.splice(i, 1);
                        display.show('success', `Your borrowed the book '${bName}'`);
                        display.clear();    //resets the library form
                        res = true;
                        break;
                    }
                    i += 1;
                }
                if (res) {
                } else { display.show('Error', ' Incorrect book details. Please check and try again.') };
                localStorage.setItem('books', JSON.stringify(bookObj));
                localStorage.setItem('borrowed', JSON.stringify(borrowedObj));  //add to the localStorage borrowed list
                showBooks();
                showInDropDown();
                break;
            //Return
            case "Return":
                let j = 0;
                let res2 = false;
                while (j < borrowedObj.length) {
                    if (book.name == borrowedObj[j].name.toLowerCase() && book.author == borrowedObj[j].author.toLowerCase()) {
                        bookObj.push(borrowedObj[j]);            //adds book back to vailable books books Array of localStorage
                        borrowedObj.splice(j, 1);                //removes book from borrowed list
                        display.show('success', `You returned the book '${bName}'`);
                        display.clear();                         //resets the library form
                        res2 = true;
                        break;
                    }
                    j += 1;
                }
                if (res2) { } else {
                    display.show('Error ', `You can't return book '${bName}'`);
                }
                localStorage.setItem("books", JSON.stringify(bookObj));
                localStorage.setItem("borrowed", JSON.stringify(borrowedObj));
                showBooks();
                showInDropDown();
                break;
            default:
                display.clear();    //resets the library form
                display.show('Error', 'Incorrect book details. Please check and try again.');
                showInDropDown();
        }
    } else {
        display.show('Error', 'Incorrect book details. Book length must be greater than 2 char.');
    }

}

// -------------------------MyBooks Menu Bar---------------------------------
let mybooksBtn = $('#myBook');
let mybooksBx = $('#mybooksToglebox');
var clicks = 1;
mybooksBtn.click(() => {
    clicks += 1;
    if (clicks % 2 == 0) {
        mybooksBx.css({
            'display': 'block',
        });
    } else {
        mybooksBx.css({
            'display': 'none'
        });
    }
});


// next show borrowed items in myBooks dropdowns
function showInDropDown() {
    let tabBody = $(".myBooksTable tbody");
    let geBooks = localStorage.getItem('borrowed');
    if (geBooks == null) {
        bookobjct = [];
    } else {
        bookobjct = JSON.parse(geBooks);
    }
    let tableTxt = "";
    if (bookobjct.length == 0) {
        tableTxt += `<tr><td>&nbsp; -- &nbsp;</td> <td>--</td></tr>`;
    } else {
        bookobjct.forEach((e, i) => {
            tableTxt += `<tr><td>${e.name} &nbsp;</td> <td>${e.author}</td></tr>`;
        });
    }
    tabBody.html(tableTxt);
}
showInDropDown();

// Filter feature for searching book in table
let search = document.getElementById('searchTxt');
let trow = document.getElementsByClassName('tr');
search.addEventListener("input", function () {
    let sForm = document.getElementById('libraryForm');
    for (let i = 0; i < trow.length; i++) {
        let tdata = trow[i].getElementsByClassName('bookName');
        for (let j = 0; j < tdata.length; j++) {
            let txt = (tdata[j].innerHTML).toLowerCase();
            let inpTxt = search.value.toLowerCase();
            if (txt.includes(inpTxt)) {
                trow[i].style.display = "grid";
                sForm.style.display = "none";
            } else {
                trow[i].style.display = "none";
            }

        }
    }
});
