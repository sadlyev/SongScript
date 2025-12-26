import { renderCards } from "./CardClass.js";

export function playSong() {
  const cards = document.querySelectorAll(".music_item");

  let currentSong = null;

  cards.forEach((card) => {
    card.addEventListener("click", async function (e) {
      const song = card.querySelector(".music_card-audio");

      if (!song) return;

      if (currentSong === song) {
        if (song.paused) {
          await song.play();
        } else {
          await song.pause();
          return;
        }
      } else if (currentSong) {
        currentSong.pause();
        currentSong.currentTime = 0;
      }

      await song.play();
      currentSong = song;
    });
  });
}

export function handleSearch() {
  const searchLink = document.querySelector(".header_menu-searchBtn");
  const labelSearch = document.querySelector(".header_menu-searchSong");
  const searchIcon = document.querySelector(".header_menu-searchIcon")

  searchLink.addEventListener("click", function(e) {
      
      labelSearch.classList.toggle("visually-hidden-out")
       searchLink.classList.toggle("visually-hidden-out")

  })

   searchIcon.addEventListener("click", function(e) {
        labelSearch.classList.toggle("visually-hidden-out")
       searchLink.classList.toggle("visually-hidden-out")
       })



}

export function createIntro() {
  const contain = document.querySelector(".music");
  contain.innerHTML = `
  
            <div class="music_logo">
              <div class="music_logo-image">
                <svg
                  class="music_logo-icon"
                  width="60"
                  height="60"
                  aria-hidden="true"
                >
                  <use href="./img/sprite.svg#web-logo"></use>
                </svg>
              </div>

              <span class="music_logo-text">Music Moments</span>
            </div>
            <h1 class="music_descrb">
              Discover beautiful verses from your favorite artists. Each lyric
              tells a story, each word paints a picture, and every line touches
              the soul.
            </h1>
  `;
}

export function navFunc(el) {
  switch (el) {
    case "songs":
      renderCards();
      break;
    case "favorite":
      renderCards();
      break;
  }
}

export function createfavoriteList() {
  
  const ulEl1 = document.querySelector(".music_list");
  const ulEl = document.querySelector(".favorite_list");

  

  const favBtn = document.querySelector(".header_menu-favoriteBtn");

  favBtn.addEventListener("click", function (e) {
    e.preventDefault();
    navFunc("favorite");

    const checkedfavCards = Array.from(
      ulEl1.querySelectorAll(".music_card-likedCheck:checked")
    );


    ulEl1.style.display = "none";
     ulEl.style.display = "grid";

    checkedfavCards.map((item) => {
      const a = item.closest(".music_item");

      const exists = Array.from(ulEl.querySelectorAll(".music_item"))?.some(
        (i) => i.dataset.id === a.dataset.id
      );
      if (!exists) {
        ulEl.appendChild(a.cloneNode(true));
      }
    });
  });

}

export function doSongPage() {
  const pageLogo = document.querySelector(".header_menu-homeBtn");
  pageLogo.addEventListener("click", function (e) {
    e.preventDefault();
    const ulEl1 = document.querySelector(".music_list");
     const ulEl = document.querySelector(".favorite_list");

     navFunc("songs")

     ulEl1.style.display = "grid";
     ulEl.style.display = "none";

      window.location.href = window.location.href;
      window.location.reload()
  });
}

// for changing classes
export function addClasses() {
  const listOfClasses = ["purple_item", "green_item", "red_item", "blue_item"]
  const allCards = Array.from(document.querySelectorAll(".music_item"))

  return allCards.forEach((card) => {

    card.classList.remove(...listOfClasses)
     const newClass = listOfClasses[(Math.floor(Math.random() * listOfClasses.length))]
     card.classList.add(newClass)
 
  } )


}

