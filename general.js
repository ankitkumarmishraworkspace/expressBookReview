const axios = require("axios");

const BASE_URL = "http://localhost:5000";

/* =========================
   1. GET ALL BOOKS
========================= */
async function getAllBooks() {
    try {
        const res = await axios.get(`${BASE_URL}/books`);

        if (res.data && Object.keys(res.data).length > 0) {
            console.log("All Books:", res.data);
        } else {
            console.log("No books found");
        }

    } catch (error) {
        console.log("Error fetching all books:", error.response?.status || error.message);
    }
}

/* =========================
   2. GET BOOK BY ISBN
========================= */
async function getBookByISBN(isbn) {
    try {
        const res = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);

        if (res.data) {
            console.log("Book found:", res.data);
        } else {
            console.log("Book not found for ISBN:", isbn);
        }

    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.log("No book found for ISBN:", isbn);
        } else {
            console.log("Error:", error.message);
        }
    }
}

/* =========================
   3. GET BOOKS BY AUTHOR
========================= */
async function getBooksByAuthor(author) {
    try {
        const res = await axios.get(`${BASE_URL}/books/author/${author}`);

        if (res.data && res.data.books && res.data.books.length > 0) {
            console.log("Books by author:", res.data.books);
        } else {
            console.log("No books found for author:", author);
        }

    } catch (error) {
        console.log("Error fetching author books:", error.message);
    }
}

/* =========================
   4. GET BOOKS BY TITLE
========================= */
async function getBooksByTitle(title) {
    try {
        const res = await axios.get(`${BASE_URL}/books/title/${title}`);

        if (res.data && res.data.books && res.data.books.length > 0) {
            console.log("Books by title:", res.data.books);
        } else {
            console.log("No books found for title:", title);
        }

    } catch (error) {
        console.log("Error fetching title books:", error.message);
    }
}

/* =========================
   TEST CALLS
========================= */

getAllBooks();
getBookByISBN("1234567890");
getBooksByAuthor("J.K. Rowling");
getBooksByTitle("Harry Potter");
