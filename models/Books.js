const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;