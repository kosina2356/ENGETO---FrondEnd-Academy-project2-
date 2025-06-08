const select = document.querySelector(".select");
const images = [
    document.querySelector(".img1"),
    document.querySelector(".img2"),
    document.querySelector(".img3"),
    document.querySelector(".img4"),
    document.querySelector(".img5"),
    document.querySelector(".img6"),
    document.querySelector(".img7"),
    document.querySelector(".img8"),
    document.querySelector(".img9"),
    document.querySelector(".img10"),
]

select.addEventListener("change", () => {
const movieType = select.value
const movieData = fetch("https://api.tvmaze.com/search/shows?q=" + movieType)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
    for (let i = 0; i < images.length; i++){
    const showImage = data[i].show.image.medium;
    images[i].src = showImage
    }
    })
})
