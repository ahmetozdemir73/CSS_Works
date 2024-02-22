const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
console.log(movieLists);
arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  const listWidth = document.querySelector(".movie-list").offsetWidth;
  const currentItem = Math.round(listWidth / 300);
  
  console.log(currentItem);
  arrow.addEventListener("click", function () {
    clickCounter++;
    if ((imageItem - currentItem - clickCounter) >= 0) {
      console.log(i);
      //movieLists[i].style.transform = "translateX(-300px)"
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
        movieLists[i].style.transform = "translateX(0)";
        clickCounter = 0;
    }

    //console.log(movieLists[i].computedStyleMap().get("transform"));
  });
});


/*dark mode*/
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title")
ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"));
})