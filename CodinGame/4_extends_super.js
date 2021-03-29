console.log("----------------EXTENDS, SUPER-------------------");

class Book {
  constructor(title, author, numCopies) {
    this.title = title;
    this.author = author;
    this.numCopies = numCopies;
  }

  getAvailability() {
    if (this.numCopies === 0) return "Out of stock";
    if (this.numCopies < 10) return "Low stock";
    if (this.numCopies >= 10) return "Good stock";
  }

  get Availability() {
    this.getAvailability();
  }
}

// const OldBook = new Book("SQL", "Jim Morris", 4);
// console.log(OldBook.Availability);

class TechBook extends Book {
  constructor(title, author, numCopies, edition) {
    super(title, author, numCopies);
    this.edition = edition;
  }

  getEdition() {
    return `Current edition is ${this.edition}.`;
  }
}

const Goodbook = new TechBook("JS", "Tim Cook", 30, 2.3);

console.log(Goodbook);
console.log(Goodbook.getEdition());
console.log(Goodbook.getAvailability());
