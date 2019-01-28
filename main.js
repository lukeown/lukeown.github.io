let movies = [
    {title: "16 Candles", seen: true},
    {title: "Blade Runner", seen: true},
    {title: "Weird Science", seen: false},
    {title: "Cool Hand Luke", seen: false},
    {title: "No Country for Old Men", seen: true},
    {title: "Breakfast Club", seen: true},
    {title: "Ghost Busters", seen: false},
    {title: "Pet Semetary", seen: true},
    {title: "Ronan", seen: false},
    {title: "Flash Gordon", seen: false},
    {title: "Steppen Wolf", seen: false},
    {title: "Legend", seen: true},
    {title: "Rocky Horror Picture Show", seen: false},
    {title: "Jacob's Ladder", seen: false},
    {title: "American Grafitti", seen: false},
    {title: "Kill List", seen: false},
    {title: "Harold and Maude", seen: true},
    {title: "Lovely Bones", seen: true},
    {title: "Her", seen: false},
    {title: "Labrynth", seen: false},
    {title: "Requiem for A Dream", seen: false},
    {title: "Devil's Advocate", seen: false},
    {title: "Angel Heart", seen: false},
    {title: "Ghost in the Shell", seen: false},
    {title: "Akira", seen: false},
    {title: "Taxi Driver", seen: false},
    {title: "Apocalypse Now", seen: true},
    {title: "Alien", seen: false},
    {title: "The Thing", seen: true},
    {title: "The Prestige", seen: false},
    {title: "Rumble Fish", seen: false},
    {title: "Rosemary's Baby", seen: true},
    {title: "Royal Tenenbaums", seen: false},
    {title: "Castaway", seen: true},
    {title: "Bourne Movies", seen: false},
    {title: "The Deer Hunter", seen: false},
    {title: "The Unforgiven", seen: false},
    {title: "Pi", seen: false},
    {title: "The Goonies", seen: false},
    {title: "Boy's Town", seen: false},
    {title: "Guns, Germs, and Steel", seen: false},
    {title: "Donnie Darko", seen: false},
    {title: "Forrest Gump", seen: true},
    {title: "The Radiant Child", seen: false},
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
    var listItem = "<li><input type=\"checkbox\" disabled "

    if (movie.seen) {
        listItem += "checked"
    }

    listItem += ">"
    listItem += movie.title
    listItem += "</li>"

    document.getElementById('movieList').innerHTML += listItem;
};