let movies = [
    {title: "16 Candles", seen: true},
    {title: "Blade Runner", seen: true},
    {title: "No Country for Old Men", seen: true},
    {title: "Breakfast Club", seen: true},
    {title: "Pet Semetary", seen: true},
    {title: "Legend", seen: true},
    {title: "Harold and Maude", seen: true},
    {title: "Lovely Bones", seen: true},
    {title: "Apocalypse Now", seen: true},
    {title: "The Thing", seen: true},
    {title: "Rosemary's Baby", seen: true},
    {title: "Castaway", seen: true},
    {title: "Forrest Gump", seen: true},
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