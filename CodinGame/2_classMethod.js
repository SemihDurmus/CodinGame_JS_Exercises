console.log("----------------CLASS-------------------");
class Movie2 {
  constructor(title, director, genre) {
    this.title = title;
    this.director = director;
    this.genre = genre;
  }
  getOverview() {
    return `${this.title}, a ${this.genre} film from ${this.director} `;
  }
}

const Spiderman2 = new Movie2("Spiderman", "Sam Raimi", "Action");

console.log(Spiderman2);
console.log(Spiderman2.getOverview());
