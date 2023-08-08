function bookMaker(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.displayInfo = function() {
        console.log("The title of the book is: " + title + " and was written by " + author + " with a total of " + pages + ".")
    }
}
const HobbitInfo = new bookMaker(`"The Hobbit"`, "J.R.R Tolkien", "295 Pages")
HobbitInfo.displayInfo()