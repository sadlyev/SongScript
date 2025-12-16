export  function playSong() {
  const cards = document.querySelectorAll(".music_item");

  let currentSong = null;

  cards.forEach((card) => {
    card.addEventListener("click", async  function (e) {
      const song = card.querySelector(".music_card-audio");
      
      if (!song) return

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
        e.preventDefault(), 

       
        
        searchBtn.classList.toggle("visually-hidden-out");
        inputSearch.classList.toggle("visually-hidden-out");
        
      });

       inputSearch.value = ""
    }
  });
}
