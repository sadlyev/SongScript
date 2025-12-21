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
  const searchBtn = document.querySelector(".header_menu-searchBtn");
  const inputSearch = document.querySelector(".header_menu-searchSong");
  const inputIcon = document.querySelector(".header_menu-searchIcon");

  searchBtn.addEventListener("click", function (e) {
    searchBtn.classList.toggle("visually-hidden-out");
    inputSearch.classList.toggle("visually-hidden-out");

    if (!inputSearch.classList.contains("visually-hidden-out")) {
      inputIcon.addEventListener("click", function (e) {
        e.preventDefault(), searchBtn.classList.toggle("visually-hidden-out");
        inputSearch.classList.toggle("visually-hidden-out");
      });

      inputSearch.value = "";
    }
  });
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
  const ulEl1 = document.querySelector(".music_list");
  const ulEl = document.querySelector(".favorite_list");

  switch (el) {
    case "songs":
      renderCards();
      handleSearch();

      break;
    case "favorite":
      renderCards();
      handleSearch();
  }


    const favBtn = document.querySelector(".header_menu-favoriteBtn")
    favBtn.addEventListener("click", function(e) {
      e.preventDefault()
      navFunc("favorite")
      const checkedfavCards = Array.from(ulEl1.querySelectorAll(".music_card-likedCheck:checked"))
      

      checkedfavCards.map((item) => {
        
      const a = item.closest(".music_item") 
        ulEl.appendChild(a.cloneNode(true))
      })

      
      

    })
  
}

export function doSongPage() {
  const pageLogo = document.querySelector(".header_logo");
  pageLogo.addEventListener("click", function (e) {
    e.preventDefault();
    navFunc("songs");
  });
}
