// general.js
// Axios implementation for Express Book Review API

const axios = require("axios");

const BASE_URL = "http://localhost:5000";

/* =========================
   1. GET ALL BOOKS
========================= */
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        console.log("All Books:");
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

/* =========================
   2. GET BOOK BY ISBN
========================= */
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);
        console.log("Book by ISBN:");
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

/* =========================
   3. GET BOOKS BY AUTHOR
========================= */
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/books/author/${author}`);
        console.log("Books by Author:");
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

/* =========================
   4. GET BOOKS BY TITLE
========================= */
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/books/title/${title}`);
        console.log("Books by Title:");
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

/* =========================
   TEST CALLS (RUN THESE)
========================= */

// Replace values based on your JSON data
getAllBooks();
getBookByISBN("1234567890");
getBooksByAuthor("J.K. Rowling");
getBooksByTitle("Harry Potter");
