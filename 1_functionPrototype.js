console.log("----------------FUNCTION PROTOTYPE-------------------");

function Movie(title, director, genre) {
  this.title = title;
  this.director = director;
  this.genre = genre;
}

Movie.prototype.getOverview = function () {
  return `${this.title}, a ${this.genre} film from ${this.director} `;
};

const Spiderman = new Movie("Spiderman", "Sam Raimi", "action");

console.log(Spiderman);
console.log(Spiderman.getOverview());
