const $searchInput = $("#searchBox");
const $gifGrid = $("#gifRows");

//use ajax to get gifs from data
async function getSearchData(e) {
  e.preventDefault();
  let searchedTerm = $searchInput.val();
  debugger;
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchedTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  appendGif(response.data.data);
}

// gif images in gif container
function appendGif(gifs) {
  debugger;
  let numResults = gifs.length;
  const randomIdx = Math.floor(Math.random() * numResults);
  const imageSrc = gifs[randomIdx].url;
  const image = new Image();
  image.src = imageSrc;

  $("imageContainer").append(image);
}

//add event listener to the submit button
const submitBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", getSearchData);

//add event listener to button delete gifs when clicked
const deleteBtn = document.querySelector("#removeBtn");
deleteBtn.addEventListener("click", function () {
  $('imageContainer').empty();
});
