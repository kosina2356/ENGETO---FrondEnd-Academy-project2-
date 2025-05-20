const select = document.querySelector(".select");
const img = document.querySelector(".img1");
const img1 = document.querySelector(".img2");
const img2 = document.querySelector(".img3");
const img3 = document.querySelector(".img4");
const img4 = document.querySelector(".img5");
const img5 = document.querySelector(".img6");
const img6 = document.querySelector(".img7");
const img7 = document.querySelector(".img8");
const img8 = document.querySelector(".img9");
const img9 = document.querySelector(".img10");


select.addEventListener("change", () => {
const movieType = select.value
const movieData = fetch("https://api.tvmaze.com/search/shows?q=" + movieType)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        img.src = data[0].show.image.medium;
        img1.src = data[1].show.image.medium;
        img2.src = data[2].show.image.medium;
        img3.src = data[3].show.image.medium;
        img4.src = data[4].show.image.medium;
        img5.src = data[5].show.image.medium;
        img6.src = data[6].show.image.medium;
        img7.src = data[7].show.image.medium;
        img8.src = data[8].show.image.medium;
        img9.src = data[9].show.image.medium;
    })
})


