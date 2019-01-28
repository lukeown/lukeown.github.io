let movies = [
    {title: "Weird Science"},
    {title: "Cool Hand Luke"},
    {title: "Ghost Busters"},
    {title: "Ronan"},
    {title: "Flash Gordon"},
    {title: "Steppen Wolf"},
    {title: "Rocky Horror Picture Show"},
    {title: "Jacob's Ladder"},
    {title: "American Grafitti"},
    {title: "Kill List"},
    {title: "Her"},
    {title: "Labrynth"},
    {title: "Requiem for A Dream"},
    {title: "Devil's Advocate"},
    {title: "Angel Heart"},
    {title: "Ghost in the Shell"},
    {title: "Akira"},
    {title: "Taxi Driver"},
    {title: "Alien"},
    {title: "The Prestige"},
    {title: "Rumble Fish"},
    {title: "Royal Tenenbaums"},
    {title: "Bourne Movies"},
    {title: "The Deer Hunter"},
    {title: "The Unforgiven"},
    {title: "Pi"},
    {title: "The Goonies"},
    {title: "Boy's Town"},
    {title: "Guns, Germs, and Steel"},
    {title: "Donnie Darko"},
    {title: "Forrest Gump"},
    {title: "The Radiant Child"},
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