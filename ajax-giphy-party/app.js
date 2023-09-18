const $searchInput = $("#searchBox");
const $gifGrid = $("#gifRows");

//use ajax to get gifs from data
async function getSearchData(e) {
  e.preventDefault();
  debugger;
  let searchedTerm = $searchInput.val();
debugger;
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchedTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
console.log(response)
}

// create li to put the gif images in gif container
function makeGifLi(gifs) {
  debugger;
  let numResults = response.data.length;
  const randomIdx = Math.floor(Math.random() * numResults);
  const newLi = document.createElement("LI");
  const $newGif = $("<img>", {
    src: response.data[randomIdx].images.original.url,
    class: "gif",
  });
  newLi.append($newGif);
}
//add event listener to the submit button
const submitBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", getSearchData);


//add event listener to button delete gifs when clicked
const deleteBtn = document.querySelector("#removeBtn");
deleteBtn.addEventListener("click", function () {
  $gifGrid.empty();
});
