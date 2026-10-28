
const artists = [
    {
        name: "Ernie Barnes",
        years: "1938–2009",
        medium: "Painting",
        description: "Known for his expressive paintings of African American life, movement, and culture."
    },
    {
        name: "Jean-Michel Basquiat",
        years: "1960–1988",
        medium: "Painting",
        description: "Known for his neo-expressionist artwork exploring identity, race, and social issues."
    },
    {
        name: "Faith Ringgold",
        years: "1930–2024",
        medium: "Painting and Quilting",
        description: "Known for her narrative quilts and artwork exploring Black history and identity."
    },
    {
        name: "Augusta Savage",
        years: "1892–1962",
        medium: "Sculpture",
        description: "A sculptor and educator associated with the Harlem Renaissance."
    },
    {
        name: "Jacob Lawrence",
        years: "1917–2000",
        medium: "Painting",
        description: "Known for his paintings documenting African American history and the Great Migration."
    },
    {
        name: "Alma Thomas",
        years: "1891–1978",
        medium: "Abstract Painting",
        description: "Known for her colorful abstract paintings inspired by nature."
    }
];

const container = document.getElementById("artist-container");
const search = document.getElementById("search");

function displayArtists(artistList) {
    container.innerHTML = "";

    if (artistList.length === 0) {
        container.textContent = "No artists found.";
        return;
    }

    artistList.forEach(artist => {
        const card = document.createElement("div");
        card.classList.add("artist-card");

        const name = document.createElement("h3");
        name.textContent = artist.name;

        const years = document.createElement("span");
        years.textContent = artist.years;

        const medium = document.createElement("p");
        medium.textContent = artist.medium;

        const description = document.createElement("p");
        description.textContent = artist.description;

        card.append(name, years, medium, description);
        container.appendChild(card);
    });
}

search.addEventListener("input", function() {
    const searchValue = search.value.toLowerCase();

    const filteredArtists = artists.filter(artist =>
        artist.name.toLowerCase().includes(searchValue) ||
        artist.medium.toLowerCase().includes(searchValue)
    );

    displayArtists(filteredArtists);
});

displayArtists(artists);
