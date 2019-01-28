 let movies = [
    {title: "No Country for Old Men", seen: true},
    {title: "Breakfast Club", seen: true},
    {title: "Rosemary's Baby", seen: true},
    {title: "Castaway", seen: true},
];


// movies is an array of JavaScript objects
// arrays are denoted by []
// objects are denoted by {}

// let movie = {
//     title: "The Goonies",
//     seen: false
// };
// movie is an exmaple of a javascript object
// you can access properties of the movie using dot notation.
// ex. to get the title of movie, you would use `movie.title`

for (i = 0; i < movies.length; i++) {
    addMovieToList(movies[i]);
}

function addMovieToList(movie) {
    var listItem = "<li>"
    listItem += movie.title
    listItem += "</li>"

    document.getElementById('movieList').innerHTML += listItem;
};